/* 
This file is part of the Apathetic Guide to IdleOn project.

Apathetic Tools © 2025 (https://github.com/apathetic-tools)

This source code is dual-licensed:
 - Under the GNU Affero General Public License v3.0 (AGPLv3).
 - Under alternative licensing terms by the copyright holder.

See `LICENSE-CODE` for details.

SPDX-License-Identifier: AGPL-3.0-or-later
*/

/// repo edit links
export const user = process.env.APP_USER ?? 'apathetic-idleon';
export const repo = process.env.APP_REPO ?? 'guide';
export const hostingSlug = user + '/' + repo;
export const source = process.env.APP_SOURCE ?? 'https://github.com/' + hostingSlug;
// source platform
export const sourcePlat = process.env.APP_SOURCE_PLAT ?? 'GitHub';

/// site url
export const site = process.env.APP_SITE ?? 'https://' + user + '.github.io';
export const base = process.env.APP_BASE ?? '/';
export const siteUrl = process.env.APP_SITE_URL ?? site + base;
