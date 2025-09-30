/* 
This file is part of the Apathetic Guide to IdleOn project.

Apathetic Tools © 2025 (https://github.com/apathetic-tools)

This source code is dual-licensed:
 - Under the GNU Affero General Public License v3.0 (AGPLv3).
 - Under alternative licensing terms by the copyright holder.

See CODE-LICENSE for details.

SPDX-License-Identifier: AGPL-3.0-or-later
*/

// return the d attribute from a simple Path element found inside SVG elements
// useful for parsing out the d from a Iconify icon.body
export default function getSvgPathD(body : string) : string | null {
	if (!body) return null;
	const match = body.match(/d="([^"]+)"/);
	return match ? match[1] : null;
}
