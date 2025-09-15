// @ts-check
import { defineConfig } from 'astro/config';
import type { StarlightUserConfig } from '@astrojs/starlight/types';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';
import AutoImport from 'astro-auto-import';
import starlightSidebarTopics from 'starlight-sidebar-topics';
import starlightAutoSidebar from 'starlight-auto-sidebar'
import starlightBlog from 'starlight-blog';
import icon from 'astro-icon';
import inoxToolsStarWarp from '@inox-tools/star-warp';
import starlightHeadingBadges from 'starlight-heading-badges'
import { viewTransitions } from "astro-vtbot/starlight-view-transitions";
import starlightLinksValidator from 'starlight-links-validator';
import tailwindcss from '@tailwindcss/vite';
import isWsl from 'is-wsl';


// can't use tsconfig aliases yet...
import devServerFileWatcher from './config/integrations/dev-server-file-watcher';
import cleanupStarlightAfterPlugins from './config/integrations/cleanup-starlight-after-plugins';
import {
  siteName, title, description, base, site, source,
  social, defaultLocale, locales,
  sidebarConfig, sidebarOptions,
  author, authorSlug, blogName, blogSlug
} from './config';

// ─── Starlight plugins ─────────────────────────────────────────
const starlightPlugins = [
  starlightAutoSidebar(), // must come before starlightSidebarTopics() 
	starlightSidebarTopics(sidebarConfig, sidebarOptions),			
	starlightBlog({
			prefix: blogSlug,
			title: blogName,
			authors: {
					[authorSlug]: {
							name: author,
					}
			},
	}),
	starlightHeadingBadges(),
	viewTransitions(),
	inoxToolsStarWarp(),
	...(process.env.CHECK_LINKS
					? [
													starlightLinksValidator({
																	errorOnFallbackPages: false,
																	errorOnInconsistentLocale: true,
													}),
									]
					: []),
	cleanupStarlightAfterPlugins(),
] satisfies StarlightUserConfig['plugins'];

// ─── Starlight config ──────────────────────────────────────────
const starlightConfig : StarlightUserConfig = {
    title,
    description,
    logo: {
            light: '@assets/apathetic-tools/logo-black-512x512.png',
            dark: '@assets/apathetic-tools/logo-white-512x512.png',
    },
    defaultLocale,
    head: [
        {
            tag: 'meta',
            attrs: {
                    name: 'robots',
                    content: 'noai, noimageai',
            },
        },
				{
					"tag": "link",
					"attrs": {
						"rel": "search",
						"type": "application/opensearchdescription+xml",
						"href": "/warp.xml",
						"title": siteName,
					},
				},
    ],
    locales,
    social,
    editLink: {
        baseUrl: source + '/edit/main/',
    },
    lastUpdated: true,
    components: {						
        Footer: './src/components/starlight/Footer.astro',
        Search: './src/components/starlight/Search.astro',
    },
    plugins: starlightPlugins,
    customCss: [
                            './src/styles/global.css',
                            './src/styles/sidebar-topics-overrides.css',
    ],
};

// ─── Astro config ──────────────────────────────────────────────
// https://astro.build/config
export default defineConfig({
    output: 'static',
    site,
    base,
    trailingSlash: 'ignore',
    integrations: [devServerFileWatcher([
    './config/**', // Custom plugins and integrations
]), starlight(starlightConfig), // generates a warning about order after mdx that can safely be disregarded
    sitemap(), icon(), // https://github.com/delucis/astro-auto-import/issues/46
    AutoImport({
				imports: [
            './src/components/astro-extensions/BaseLink.astro',
            './src/components/astro-extensions/Localize.astro',							
            './src/components/mdx/AsOf.astro',		
            './src/components/mdx/Def.astro',						
            './src/components/mdx/Stress.astro',								
            './src/components/utils/Conditional.astro',
            {
                    '@astrojs/starlight/components': [
                            ['Icon', 'SIcon'],
                    ],
                    "astro-icon/components": [
                            'Icon',
                    ],
            },
				],				
    })],

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

        plugins: [
                    tailwindcss()
                ],
        },
});
