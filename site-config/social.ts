// Ref: https://starlight.astro.build/reference/configuration/#social

import type { StarlightIcon } from "@astrojs/starlight/types";

type SocialLink = {
	label: string;
	icon: StarlightIcon;
	href: string;
};

export const social: SocialLink[] = [
	/// community chat
	{ icon: "discord", label: "Discord", href: "https://discord.gg/PW6GahZ7" },

	/// code hosting
	// 		don't feature the code repo in the header,
	// 		it is mentioned on the contributing page
	// github
	// gitlab
	// bitbucket

	/// more in reference above
];
