/* 
This file is part of the Apathetic Guide to IdleOn project.

Apathetic Tools © 2025 (https://github.com/apathetic-tools)

This source code is dual-licensed:
 - Under the GNU Affero General Public License v3.0 (AGPLv3).
 - Under alternative licensing terms by the copyright holder.

See CODE-LICENSE for details.

SPDX-License-Identifier: AGPL-3.0-or-later
*/

// @ts-check

// derived from withastro/docs MIT
// https://github.com/withastro/docs/blob/main/eslint.config.mjs

import eslint from '@eslint/js';
import eslintPluginAstro from 'eslint-plugin-astro';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig([
	{
		ignores: ['**/dist', '**/node_modules', '**/.astro', '**/.github', '**/.changeset'],
	},

	// Global config
	// JavaScript
	eslint.configs.recommended,
	// TypeScript
	...tseslint.configs.recommended,
	{
		rules: {
			'@typescript-eslint/no-explicit-any': 'off',
		},
	},
	// Allow triple-slash references in `*.d.ts` files.
	{
		files: ['**/*.d.ts'],
		rules: {
			'@typescript-eslint/triple-slash-reference': 'off',
		},
	},

	// Astro
	...eslintPluginAstro.configs.recommended,

	// Set globals for Node scripts.
	{
		files: ['scripts/**'],
		languageOptions: {
			globals: globals.node,
		},
	},
]);
