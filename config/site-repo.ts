/* 
This file is part of the Apathetic Guide to IdleOn project.

Apathetic Tools © 2025 (https://github.com/apathetic-tools)

This source code is dual-licensed:
 - Under the GNU Affero General Public License v3.0 (AGPLv3).
 - Under alternative licensing terms by the copyright holder.

See CODE-LICENSE for details.

SPDX-License-Identifier: AGPL-3.0-or-later
*/

// List of files and directories to copy into dist-site-repo

export type FileEntry = string | { src: string; dest: string };

export const files: FileEntry[] = [
	'.gitignore',
	'CODE_OF_CONDUCT.md',
	'CONTENT-LICENSE',
	'NOAI-CONTENT-LICENSE',
	'NOTICE',
	{ src: 'README-SITE-REPO.md', dest: 'README.md' },
];
