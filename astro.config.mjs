// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import isWsl from 'is-wsl';

// https://astro.build/config
export default defineConfig({
	site: 'https://apathetic-idleon.github.io',
	integrations: [
		starlight({
			title: 'Apathetic Guide to IdleOn',
			description: 'Gameplay guide to the IdleOn game.',
			social: [
				{ icon: 'discord', label: 'Discord', href: 'https://discord.gg/PW6GahZ7'},
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/apathetic-idleon/apathetic-idleon.github.io' }
			],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
			editLink: {
    			baseUrl: 'https://github.com/apathetic-idleon/apathetic-idleon.github.io/edit/main/',
  			},
			lastUpdated: true,
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
    }
  }
});
