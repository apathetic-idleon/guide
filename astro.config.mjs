// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightSidebarTopics from 'starlight-sidebar-topics';
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
			editLink: {
    			baseUrl: 'https://github.com/apathetic-idleon/apathetic-idleon.github.io/edit/main/',
  			},
			lastUpdated: true,
			plugins: [
				// icons must be from: https://starlight.astro.build/reference/icons/#all-icons
				// careful not to use trademarked logos for other purposes
				starlightSidebarTopics([
					{
						id: 'walkthrough',		
						label: 'Walkthrough',
						link: 'walkthrough/world/world-1',
						icon: 'rocket',
						items: [
							{
								label: 'Getting Started',
								autogenerate: { directory: 'walkthrough/getting-started' },
							},
							{
								label: 'Unlock Worlds',
								autogenerate: { directory: 'walkthrough/world' },
							},
						],
					},
					{
						id: 'mechanic',
						label: 'Mechanics',
						link: 'mechanic/global/upgrade-vault',
						icon: 'setting',
						items: [
							{
								label: 'Global',
								autogenerate: { directory: 'mechanic/global' },
							},
							{
								label: 'World 1 – Blunder Hills',
								autogenerate: { directory: 'mechanic/world-1' },
							},
							{
								label: 'World 2 – Yum-Yum Desert',
								autogenerate: { directory: 'mechanic/world-2' },
							},
							{
								label: 'World 3 – Frostbite Tundra',
								autogenerate: { directory: 'mechanic/world-3' },
							},
							{
								label: 'World 4 – Hyperion Nebula',
								autogenerate: { directory: 'mechanic/world-4' },
							},
							{
								label: "World 5 – Smolderin' Plateau",
								autogenerate: { directory: 'mechanic/world-5' },
							},
							{
								label: 'World 6 – Spirited Valley',
								autogenerate: { directory: 'mechanic/world-6' },
							},
						],
					},					
					{
						id: 'reference',
						label: 'Reference',
						link: 'reference/achievements',
						icon: 'information',
						items: [
							{
								label: 'General',
								autogenerate: { directory: 'reference' },
							},
						],
					},
				]),
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
