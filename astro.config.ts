// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';
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
    trailingSlash: 'always',
    integrations: [devServerFileWatcher([
        './config/**', // Custom plugins and integrations
		]), starlight({
        title,
        description,
        defaultLocale,
        locales,
        social,
        editLink: {
            baseUrl: source + '/edit/main/',
        },
        lastUpdated: true,
        components: {
            Footer: './src/components/Footer.astro'
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
		}), sitemap()],

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
