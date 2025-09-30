/* 
This file is part of the Apathetic Guide to IdleOn project.

Apathetic Tools © 2025 (https://github.com/apathetic-tools)

This source code is dual-licensed:
 - Under the GNU Affero General Public License v3.0 (AGPLv3).
 - Under alternative licensing terms by the copyright holder.

See `LICENSE-CODE` for details.

SPDX-License-Identifier: AGPL-3.0-or-later

Inspired by Apathetic Tools · MIT
https://github.com/apathetic-tools/snippets/blob/main/docs/astro-starlight/sidebar-toggle
*/

/* global document:readonly, sessionStorage:readonly, console:readonly */
(function () {
	try {
		const savedLeftSidebar = sessionStorage.getItem('starlight-left-sidebar-collapsed') === '1';
		if (savedLeftSidebar) {
			document.documentElement.classList.add('left-sidebar-collapsed');
		}
		const savedrightSidebar = sessionStorage.getItem('starlight-right-sidebar-collapsed') === '1';
		if (savedrightSidebar) {
			document.documentElement.classList.add('right-sidebar-collapsed');
		}
	} catch (e) {
		// Fail silently if sessionStorage is not available (e.g., privacy mode)
		console.warn('Sidebar state could not be read from sessionStorage:', e);
	}
})();
