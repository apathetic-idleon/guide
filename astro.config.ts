// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';
import AutoImport from 'astro-auto-import';
import starlightSidebarTopics from 'starlight-sidebar-topics';
import starlightLinksValidator from 'starlight-links-validator';
import tailwindcss from '@tailwindcss/vite';
import isWsl from 'is-wsl';

// can't use tsconfig aliases yet...
import { devServerFileWatcher } from './config/integrations/dev-server-file-watcher';
import { title, description } from './config/header';
import { base, site, source } from './config/hosting';
import { social } from './config/social';
import { defaultLocale, locales } from './config/translation';
import { sidebar } from './config/sidebar';

// https://astro.build/config
export default defineConfig({
    output: 'static',
    site,
    base,
    trailingSlash: 'ignore',
    integrations: [
			devServerFileWatcher([
        './config/**', // Custom plugins and integrations
			]), 			
			starlight({
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
            }
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
						Sidebar: './src/components/starlight/Sidebar.astro',
        },
        plugins: [
            starlightSidebarTopics(sidebar),
            ...(process.env.CHECK_LINKS
                ? [
                        starlightLinksValidator({
                            errorOnFallbackPages: false,
                            errorOnInconsistentLocale: true,
                        }),
                    ]
                : []),
        ],
        customCss: ['./src/styles/global.css'],
			}), 
			sitemap(),
			// generates a warning about order after mdx that can safely be disregarded
			// https://github.com/delucis/astro-auto-import/issues/46
			AutoImport({
				imports: [
					'./src/components/astro-extensions/BaseLink.astro',
					'./src/components/astro-extensions/Localize.astro',							
					'./src/components/mdx/AsOf.astro',		
					'./src/components/mdx/Def.astro',						
					'./src/components/mdx/Stress.astro',								
					'./src/components/utils/Conditional.astro',
					{
						'@astrojs/starlight/components': ['Aside'],
					},
				],				
			}),
		],

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

        plugins: [tailwindcss()],
    },
});
