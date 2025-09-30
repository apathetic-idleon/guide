// @ts-check
import { defineConfig } from 'astro/config';
import type { StarlightUserConfig } from '@astrojs/starlight/types';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';
import AutoImport from 'astro-auto-import';
import starlightSidebarTopics from 'starlight-sidebar-topics';
import starlightAutoSidebar from 'starlight-auto-sidebar';
import starlightBlog from 'starlight-blog';
import icon from 'astro-icon';
import starlightMarkdownBlocks from 'starlight-markdown-blocks';
import starlightAutoDrafts from 'starlight-auto-drafts'
import starlightScrollToTop from 'starlight-scroll-to-top'
import inoxToolsStarWarp from '@inox-tools/star-warp';
import starlightHeadingBadges from 'starlight-heading-badges'
import { viewTransitions } from "astro-vtbot/starlight-view-transitions";
import starlightLinksValidator from 'starlight-links-validator';
import tailwindcss from '@tailwindcss/vite';
import isWsl from 'is-wsl';


// can't use tsconfig aliases yet...
import remarkValidateGuideBlocks from './src/plugins/remark/validate-guide-blocks';
import devServerFileWatcher from './config/integrations/dev-server-file-watcher';
import starlightWorkAfterPlugins from './config/integrations/starlight-work-after-plugins';
import {
  siteName, title, logo, description, base, site, source,
  social, defaultLocale, locales,
  sidebarConfig, sidebarOptions,
  author, authorSlug, blogName, blogSlug
} from './config';
import {
    readInlineScript
} from './src/utils/readInlineScript';

import mdx from '@astrojs/mdx';

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
    starlightMarkdownBlocks({
        blocks: {			
        },
    }),
    starlightAutoDrafts({
        highlights: {
            badges: true,
        },
    }), // does not hot reload, rerun pnpm run dev
    starlightScrollToTop({
        position: 'right',
        tooltipText: 'Back to Top',
        showTooltip: true,
        smoothScroll: true,
        threshold: 30,
        showProgressRing: true,
        progressRingColor: 'white',
        showOnHomepage: true,
    }),
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
    starlightWorkAfterPlugins(), // must come last
] satisfies StarlightUserConfig['plugins'];

// ─── Starlight config ──────────────────────────────────────────
const starlightConfig : StarlightUserConfig = {
    title,
    description,
    logo,
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
                {
                    "tag": "script",
                    "content": readInlineScript("components/sidebar-toggles/sidebarStateHeadScript.js"),
                },
                {
                    "tag": "script",
                    "content": readInlineScript("components/guide-mode-selector/guideModeStateHeadScript.js"),
                },
    ],
    locales,
    social,
    editLink: {
        baseUrl: source + '/edit/main/',
    },
    lastUpdated: true,
    components: {						
        Footer: './src/overrides/starlight/Footer.astro',
        Search: './src/overrides/starlight/Search.astro',
        Sidebar:  './src/overrides/starlight/Sidebar.astro',
                SocialIcons: './src/overrides/starlight/SocialIcons.astro',
                TableOfContents:  './src/overrides/starlight/TableOfContents.astro',
    },
    plugins: starlightPlugins,
    customCss: [
                            './src/styles/global.css',
    ],
};

// ─── Astro config ──────────────────────────────────────────────
// https://astro.build/config
export default defineConfig({
    output: 'static',
    site,
    base,
    trailingSlash: 'ignore',
    integrations: [
			devServerFileWatcher([
					'./config/**', // Custom plugins and integrations
			]), // generates a warning about order after mdx that can safely be disregarded
			starlight(starlightConfig), 
			sitemap(), // https://github.com/delucis/astro-auto-import/issues/46
			icon(), 
			AutoImport({
									imports: [
							'./src/components/mdx/AsOf.astro',		
							'./src/components/mdx/Def.astro',						
							'./src/components/mdx/Stress.astro',								
													'./src/components/mdx/GuideMode/GuideBlock.astro',				
													'./src/components/mdx/GuideMode/Hint.astro',
													'./src/components/mdx/GuideMode/Choice.astro',				
													'./src/components/mdx/GuideMode/Instruct.astro',				
							{
											'@astrojs/starlight/components': [
															['Icon', 'SIcon'],
											],
											"astro-icon/components": [
															'Icon',
											],
							},
									],				
			}), 
			mdx(),
		],

		markdown: {
				remarkPlugins: [
						// remarkValidateGuideBlocks,
				],
		},

    vite: {
        server: {
            watch: {
                // work around WSL bug with /mnt/ watch (prefer use WSL fs instead), MIT
                // https://github.com/apathetic-tools/snippets/blob/main/snippets/astro/wsl-mnt-polling-fix
                // https://github.com/withastro/astro/issues/6043#issuecomment-1409498718
                // https://github.com/microsoft/WSL/issues/4739#issuecomment-2153546812
                ...((isWsl && process.cwd().startsWith('/mnt'))
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
