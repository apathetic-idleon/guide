import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

export function readSidebarStateScript(): string {
	// Compute the directory of this module
	const __filename = fileURLToPath(import.meta.url);
	const __dirname = path.dirname(__filename);

	// Absolute path to your script file
	const filePath = path.resolve(__dirname, 'sidebarStateScript.js');
	return fs.readFileSync(filePath, 'utf-8');
}
