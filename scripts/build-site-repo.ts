/* 
This file is part of the Apathetic Guide to IdleOn project.

Apathetic Tools © 2025 (https://github.com/apathetic-tools)

This source code is dual-licensed:
 - Under the GNU Affero General Public License v3.0 (AGPLv3).
 - Under alternative licensing terms by the copyright holder.

See CODE-LICENSE for details.

SPDX-License-Identifier: AGPL-3.0-or-later
*/

import { mkdir, copyFile, cp, rm, stat } from "fs/promises";
import { join, dirname, relative } from "path";
import fg from "fast-glob";

// 🔽 import config from site-files.ts
// note: tsm doesn't support tsconfig.json aliases
import { files } from "../config/site-repo";

async function copySingleFile(src: string, dest: string) {
  await mkdir(dirname(dest), { recursive: true });
  await copyFile(src, dest);
  console.log(`✅ Copied file ${src}`);
}

async function copyDirectory(src: string, dest: string) {
  await cp(src, dest, { recursive: true });
  console.log(`📂 Copied directory ${src}`);
}

async function main() {
  const destDir = "dist-site-repo";
  const clean = !process.argv.includes("--no-clean");

  console.log("🚀 Starting site repo build.");

  if (clean) {
    console.log(`🧹 Cleaning ${destDir}...`);
    await rm(destDir, { recursive: true, force: true });
    console.log(`Cleaned ${destDir}/`);
  }

  await mkdir(destDir, { recursive: true });

  for (const entry of files) {
    const src = typeof entry === "string" ? entry : entry.src;
    const destName = typeof entry === "string" ? null : entry.dest;

    // First check if it's a directory (literal)
    try {
      const s = await stat(src);
      if (s.isDirectory()) {
        const destPath = join(process.cwd(), destDir, destName ?? src);
        await copyDirectory(src, destPath);
        continue;
      }
    } catch {
      // Not a literal dir, could be glob or missing
    }

    const matches = await fg(src, { dot: true });

    if (matches.length === 0) {
      console.warn(`⚠️ Skipped missing: ${src}`);
      continue;
    }

    for (const match of matches) {
      const srcPath = join(process.cwd(), match);
      let destPath: string;

      if (typeof entry !== "string" && !src.includes("*")) {
        // Special case: single-file rename
        destPath = join(process.cwd(), destDir, destName!);
      } else if (destName) {
        // Custom dest root, preserve structure
        const base = fg.generateTasks([src])[0].base;
        const relPath = relative(base, match);
        destPath = join(process.cwd(), destDir, destName, relPath);
      } else {
        // Normal case: same relative path
        destPath = join(process.cwd(), destDir, match);
      }

      try {
        await copySingleFile(srcPath, destPath);
      } catch (err: any) {
        if (err.code === "EISDIR") {
          await copyDirectory(srcPath, destPath);
        } else {
          throw err;
        }
      }
    }
  }

  console.log(`✨ Finished site repo build.`);
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
