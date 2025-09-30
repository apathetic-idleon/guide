/* 
This file is part of the Apathetic Guide to IdleOn project.

Apathetic Tools © 2025 (https://github.com/apathetic-tools)

This source code is dual-licensed:
 - Under the GNU Affero General Public License v3.0 (AGPLv3).
 - Under alternative licensing terms by the copyright holder.

See CODE-LICENSE for details.

SPDX-License-Identifier: AGPL-3.0-or-later
*/

// Ref: https://starlight.astro.build/reference/configuration/#social

// import type { StarlightIcon } from "@astrojs/starlight/types";

import type { StarlightUserConfig } from '@astrojs/starlight/types';

export const discordInvite = 'https://discord.gg/PW6GahZ7';

// type SocialLink = {
// 	label: string;
// 	icon: StarlightIcon;
// 	href: string;
// };

export const social = [
	/// community chat
	{ icon: 'discord', label: 'Discord', href: discordInvite },

	/// code hosting
	// 		don't feature the code repo in the header,
	// 		it is mentioned on the contributing page
	// github
	// gitlab
	// bitbucket

	/// more in reference above
] satisfies StarlightUserConfig['social'];
