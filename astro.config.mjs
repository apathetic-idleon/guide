// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import sitemap from "@astrojs/sitemap";
import starlightSidebarTopics from "starlight-sidebar-topics";
import isWsl from "is-wsl";

import { title, description } from "./config/header";
import { base, site, source } from "./config/hosting";
import { social } from "./config/social";
import { defaultLocale, locales } from "./config/translation";
import { sidebar } from "./config/sidebar";

import { watchSiteConfig } from "./src/watch-site-config";

// https://astro.build/config
export default defineConfig({
    site,
    base,
    integrations: [
			watchSiteConfig(), 
			starlight({
        title,
        description,
        defaultLocale,
        locales,
        social,
        editLink: {
            baseUrl: source + "/edit/main/",
        },
        lastUpdated: true,
        plugins: [starlightSidebarTopics(sidebar)],
			}), 
			sitemap(),
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
    },
});
