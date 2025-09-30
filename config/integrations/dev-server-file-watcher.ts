/* 
This file is part of the Apathetic Guide to IdleOn project.

Apathetic Tools © 2025 (https://github.com/apathetic-tools)

This source code is dual-licensed:
 - Under the GNU Affero General Public License v3.0 (AGPLv3).
 - Under alternative licensing terms by the copyright holder.

See `LICENSE-CODE` for details.

SPDX-License-Identifier: AGPL-3.0-or-later

Inspired by withastro/docs · MIT
https://github.com/withastro/docs/blob/main/config/integrations/dev-server-file-watcher.ts
*/

import type { AstroIntegration } from 'astro';
import glob from 'fast-glob';

/**
 * Astro integration that registers the passed paths so that saving them triggers a dev server
 * restart.
 *
 * It also supports passing glob patterns to watch a set of files matching a specific pattern.
 *
 * @param paths Array of file paths relative to the project root.
 *
 * @example
 * // astro.config.mjs
 * export default {
 *   integrations: [
 *     devServerFileWatcher(["./example.js", "./src/content/demo/*.yml"]),
 *   ],
 * }
 */
export default function devServerFileWatcher(paths: string[]): AstroIntegration {
	return {
		name: 'dev-server-file-watcher',
		hooks: {
			async 'astro:config:setup'({ addWatchFile, config }) {
				for (const path of paths) {
					const files = await glob(path);
					files.forEach((file) => addWatchFile(new URL(file, config.root)));
				}
			},
		},
	};
}
