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
