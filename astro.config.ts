// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';
import starlightSidebarTopics from 'starlight-sidebar-topics';
import starlightLinksValidator from 'starlight-links-validator'
import isWsl from 'is-wsl';
import rehypeSlug from 'rehype-slug';

import { devServerFileWatcher } from './config/integrations/dev-server-file-watcher';
import { title, description } from './config/header';
import { base, site, source } from './config/hosting';
import { social } from './config/social';
import { defaultLocale, locales } from './config/translation';
import { sidebar } from './config/sidebar';

// https://astro.build/config
export default defineConfig({
	output: 'static',
	site,
	base,
	trailingSlash: 'always',
	integrations: [
		devServerFileWatcher([
			'./config/**', // Custom plugins and integrations
		]),
		starlight({
			title,
			description,
			defaultLocale,
			locales,
			social,
			editLink: {
				baseUrl: source + '/edit/main/',
			},
			lastUpdated: true,
			plugins: [
				starlightSidebarTopics(sidebar),
				...(process.env.CHECK_LINKS ? [starlightLinksValidator({
					errorOnFallbackPages: false,
					errorOnInconsistentLocale: true
				})] : []),
			],
		}),
		sitemap(),
	],

	markdown: {
		// Override with our own config
		rehypePlugins: [rehypeSlug],
	},
	vite: {
		server: {
			watch: {
				// work around WSL bug with /mnt/ watch (could also symlink to linux fs)
				// https://github.com/withastro/astro/issues/6043#issuecomment-1409498718
				// https://github.com/microsoft/WSL/issues/4739#issuecomment-2153546812
				...(isWsl
					? {
							usePolling: true,
							interval: 1000,
						}
					: {}),
			},
		},
	},
});
