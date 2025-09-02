// https://docs.astro.build/en/guides/integrations-guide/sitemap/#sitemap-link-in-robotstxt

import type { APIRoute } from "astro";

const getRobotsTxt = (sitemapURL: URL) => `\
# Example: Allow all bots to scan and index your site.
# Full syntax: https://developers.google.com/search/docs/advanced/robots/create-robots-txt
User-agent: *
Allow: /

Sitemap: ${sitemapURL.href}
`;

export const GET: APIRoute = ({ site }) => {
	const sitemapURL = new URL("sitemap-index.xml", site);
	return new Response(getRobotsTxt(sitemapURL));
};
