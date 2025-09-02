import type { AstroIntegration } from "astro";

export function watchSiteConfig(): AstroIntegration {
	return {
		name: "watch-site-config",
		hooks: {
			"astro:config:setup": ({ addWatchFile, config }) => {
				const configFiles = [
					"header.ts",
					"hosting.ts",
					"sidebar.ts",
					"social.ts",
					"translation.ts",
				];
				for (const file of configFiles) {
					// Watch a file relative to your project root:
					addWatchFile(new URL("./site-config/" + file, config.root));
				}
			},
		},
	};
}
