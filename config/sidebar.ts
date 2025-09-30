/* 
This file is part of the Apathetic Guide to IdleOn project.

Apathetic Tools © 2025 (https://github.com/apathetic-tools)

This source code is dual-licensed:
 - Under the GNU Affero General Public License v3.0 (AGPLv3).
 - Under alternative licensing terms by the copyright holder.

See CODE-LICENSE for details.

SPDX-License-Identifier: AGPL-3.0-or-later
*/

// icons must be from: https://starlight.astro.build/reference/icons/#all-icons
// careful not to use trademarked logos for other purposes

import type {
  StarlightSidebarTopicsUserConfig, StarlightSidebarTopicsUserOptions
} from "starlight-sidebar-topics";

import {
	blogSlug
} from './blog';

export const sidebarConfig: StarlightSidebarTopicsUserConfig  = [
	{
		id: 'walkthrough',
		label: 'Walkthrough',
		link: 'walkthrough/getting-started/install',
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
		icon: 'open-book',
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
	{
		id: 'third-party',
		label: 'Third-party tools',
		link: 'third-party/wiki',
		icon: 'setting',
		items: [
			{
				label: 'General',
				autogenerate: { directory: 'third-party' },
			},
		],
	},
];

export const sidebarOptions: StarlightSidebarTopicsUserOptions = {
		exclude: [
			'/'+blogSlug, 
			'/'+blogSlug+'/**/*',
		],
};
