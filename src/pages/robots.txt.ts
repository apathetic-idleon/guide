/* 
This file is part of the Apathetic Guide to IdleOn project.

Apathetic Tools © 2025 (https://github.com/apathetic-tools)

This source code is dual-licensed:
 - Under the GNU Affero General Public License v3.0 (AGPLv3).
 - Under alternative licensing terms by the copyright holder.

See `LICENSE-CODE` for details.

SPDX-License-Identifier: AGPL-3.0-or-later
*/

// https://docs.astro.build/en/guides/integrations-guide/sitemap/#sitemap-link-in-robotstxt

import type { APIRoute } from 'astro';

// ❌ List all bots you want to block here
const BLOCKED_BOTS = [
	/// Block AI bots

	// OpenAI (ChatGPT)
	'GPTBot',
	'ChatGPT-User',
	'OAI-SearchBot',
	'OpenAI-GPT',

	// Anthropic (Claude)
	'ClaudeBot',
	'anthropic-ai',
	'Claude-Web',

	// Google AI data crawler
	'Google-Extended',

	// Common Crawl (training dataset)
	'CCBot',

	// Perplexity
	'PerplexityBot',

	// Scraping / aggregation (training dataset)
	'Omgilibot',
	'Omgili',

	// TikTok / ByteDance
	'Bytespider',

	// Knowledge graph / ML
	'Diffbot',

	// Image analysis
	'ImagesiftBot',

	// You.com
	'YouBot',

	// Attempt at generic catch-all
	'*AI*',

	/// “Smelly bots” you might or might not want

	// search/shopping index (but they use it for AI internaly)
	'Amazonbot',
];

const getRobotsTxt = (sitemapURL: URL) => {
	const lines: string[] = [];

	// Allow normal search engines
	lines.push(
		'# Full syntax: https://developers.google.com/search/docs/advanced/robots/create-robots-txt',

		'# Allow normal search engines',
		'User-agent: *',
		'Allow: /',
		''
	);

	// Block bots from list
	lines.push('# Block AI and unwanted crawlers');
	for (const bot of BLOCKED_BOTS) {
		lines.push(`User-agent: ${bot}`, 'Disallow: /', '');
	}

	// Add sitemap link
	lines.push(`# Sitemap for search engines`, `Sitemap: ${sitemapURL.href}`);

	return lines.join('\n');
};

export const GET: APIRoute = ({ site }) => {
	const sitemapURL = new URL('sitemap-index.xml', site);
	return new Response(getRobotsTxt(sitemapURL), {
		headers: { 'Content-Type': 'text/plain' },
	});
};
