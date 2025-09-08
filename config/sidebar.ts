// icons must be from: https://starlight.astro.build/reference/icons/#all-icons
// careful not to use trademarked logos for other purposes

import type { StarlightSidebarTopicsUserConfig } from 'starlight-sidebar-topics';

export const sidebar: StarlightSidebarTopicsUserConfig = [
	{
		id: 'journey',
		label: 'Journey',
		link: 'journey/getting-started/install',
		icon: 'rocket',
		items: [
			{
				label: 'Getting Started',
				autogenerate: { directory: 'journey/getting-started' },
			},
			{
				label: 'Unlock Worlds',
				autogenerate: { directory: 'journey/world' },
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
			{
				label: 'Site',
				autogenerate: { directory: 'site' },
			},
		],
	},
	{
		id: 'database',
		label: 'Database',
		link: 'database/enemies',
		icon: 'seti:db',
		items: [
			{
				label: 'General',
				autogenerate: { directory: 'database' },
			},
		],
	},
];
