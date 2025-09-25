import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { XMLParser } from "fast-xml-parser";

export function readSidebarStateScript(): string {
	// Compute the directory of this module
	const __filename = fileURLToPath(import.meta.url);
	const __dirname = path.dirname(__filename);

	// Absolute path to your script file
	const filePath = path.resolve(__dirname, 'sidebarStateScript.js');
	return fs.readFileSync(filePath, 'utf-8');
}

export function parseSvgPath(svgString: string): string | null {
  if (!svgString) return null;

  // Try to extract the 'd' attribute from <path> directly
  const match = svgString.match(/d="([^"]+)"/);
  if (match) return match[1];

  // Optional: handle nested <svg><path ...></path></svg>
  const parser = new XMLParser({
    ignoreAttributes: false,
  });

  try {
    const svgObj = parser.parse(svgString);
    // If <svg> wraps <path>
    const pathData = svgObj.svg?.path?.["@_d"];
    return pathData ?? null;
  } catch {
    return null;
  }
}
