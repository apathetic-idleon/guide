// Inspired by Apathetic Tools · MIT
// https://github.com/apathetic-tools/snippets/blob/main/docs/astro-starlight/sidebar-toggle

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

/**
 * Read a JavaScript file into a string for use as inline <script> content.
 * 
 * @param relativePath Path to the file relative to the src directory.
 */
export function readInlineScript(relativePath: string): string {
	// Compute the directory of this module
	const __filename = fileURLToPath(import.meta.url);
	const __dirname = path.dirname(__filename);

	// Absolute path to your script file
	const filePath = path.resolve(__dirname, "..", relativePath);
	return fs.readFileSync(filePath, 'utf-8');
}
