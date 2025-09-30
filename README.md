<!--
This file is part of the IdleOn Guide project.

Apathetic Tools © 2025 (https://github.com/apathetic-tools)

This content is dual-licensed:
 - Under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0).
 - Under alternative licensing terms by the copyright holder.

See LICENSE for details.

SPDX-License-Identifier: CC-BY-NC-SA-4.0

Note: Legends of IdleOn and related assets are © Lavaflame2.
This project is unaffiliated with or endorsed by Lavaflame2.
-->

# Apathetic Guide to IdleOn

This is the code and content repository for the `Apathetic Guide to IdleOn`.

## Content License

Please note we have a [Additional Terms — No AI Use Rider](NOAI-CONTENT-LICENSE) to explicitly disallow AI use of our content, which further restricts the [CC-BY-NC-SA](CONTENT-LICENSE). Contact us if you have different licensing needs. Neither of these apply to the code, just the project content (generally found under `src/content`, `src/assets` and `public` directories).

## Code License

The project code itself is licensed [GNU AFFERO GENERAL PUBLIC LICENSE](CODE-LICENSE).

## 🚀 Project Structure

Inside of your Astro + Starlight project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   └── docs/
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

The site content is usually `.mdx` or `.md` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |
