/* 
This file is part of the Apathetic Guide to IdleOn project.

Apathetic Tools © 2025 (https://github.com/apathetic-tools)

This source code is dual-licensed:
 - Under the GNU Affero General Public License v3.0 (AGPLv3).
 - Under alternative licensing terms by the copyright holder.

See `LICENSE-CODE` for details.

SPDX-License-Identifier: AGPL-3.0-or-later
*/

// sometimes we need a unilingual site name where i18n is not available
export const siteName = 'Apathetic Guide to IdleOn';

// The site Title, shown in the tab name and title bar, sometimes contains more than the name
// Ref: https://starlight.astro.build/reference/configuration/#title-required
export const title = {
	en: 'Apathetic Guide to IdleOn',
};

// Ref: https://starlight.astro.build/reference/configuration/#logo
export const logo = {
	light: '@assets/apathetic-tools/logo-light-512x512.png',
	dark: '@assets/apathetic-tools/logo-dark-512x512.png',
};

// The meta description for search engines. A single combined string for all languages.
export const description = 'Gameplay guide to the IdleOn game.';
