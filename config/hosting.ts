/// repo edit links
export const user = process.env.APP_USER ?? 'apathetic-idleon';
export const repo = process.env.APP_REPO ?? 'guide';
export const hostingSlug = user + '/' + repo;
export const source = process.env.APP_SOURCE ?? 'https://github.com/' + hostingSlug;
export const sourcePlat = process.env.APP_SOURCE_PLAT ?? 'GitHub';

/// site url
export const site = process.env.APP_SITE ?? 'https://' + user + '.github.io';
export const base = process.env.APP_BASE ?? '/';
export const siteUrl = process.env.APP_SITE_URL ?? site + base;
