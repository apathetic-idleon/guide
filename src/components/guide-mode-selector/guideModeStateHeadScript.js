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
	let savedGuideMode = null;
	try {
		savedGuideMode = sessionStorage.getItem('guideMode');
	} catch (e) {
		// Fail silently if sessionStorage is not available (e.g., privacy mode)
		console.warn('Guide mode state could not be read from sessionStorage:', e);
	}
	if (!savedGuideMode) savedGuideMode = 'hint';
	document.documentElement.classList.add(`guide-mode-state-${savedGuideMode}`);
})();
