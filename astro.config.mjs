// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightSidebarTopics from 'starlight-sidebar-topics';
import { title, description } from './site-config/header';
import { base, site, source } from './site-config/hosting';
import { social } from './site-config/social';
import { defaultLocale, locales } from './site-config/translation';
import { sidebar } from './site-config/sidebar';
import isWsl from 'is-wsl';

// https://astro.build/config
export default defineConfig({
	site,
  	base,
	integrations: [
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
			]
		}),
	],
	vite: {
    server: {
      watch: {
        // work around WSL bug with /mnt/ watch (could also symlink to linux fs)
        // https://github.com/withastro/astro/issues/6043#issuecomment-1409498718
        // https://github.com/microsoft/WSL/issues/4739#issuecomment-2153546812
        ...(isWsl ? {
          usePolling: true,
          interval: 1000
        } : {})
      }
    },
  }
});
