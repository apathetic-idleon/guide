# Apathetic Guide to IdleOn

[![Content License: CC BY-NC-SA 4.0](https://img.shields.io/badge/Content%20License-CC%20BY--NC--SA%204.0-lightgrey)](LICENSE)
[![Code License: AGPL v3](https://img.shields.io/badge/Code%20License-AGPL%20v3-lightgrey)](LICENSE-CODE)
[![No AI Use](https://img.shields.io/badge/No%20AI%20Use-Yes-red)](LICENSE-NOAI-CONTENT)

This is the code and content repository for the *Apathetic Guide to IdleOn* website available at:

- https://apathetic-idleon.github.io

**[Apathetic Tools](https://github.com/apathetic-tools) © 2025**

This project is unaffiliated with *Legends of IdleON* © LavaFlame2. Images and content from the game are used for commentary, instructional, and informational purposes only.

## Content License

The project content (generally found under `src/content`, `src/assets`, and `public` directories) is dual-licensed under [CC BY-NC-SA 4.0](LICENSE) with additional terms outlined in our [No AI Use Rider](LICENSE-NOAI-CONTENT), which explicitly prohibits AI use.  

Alternative licensing terms are available directly through Apathetic Tools.  

> [!NOTE]
> These terms apply only to project content, not the code.
> - Guidance and recommendations in the project reflect the opinions of the *Apathetic Guide to IdleOn* core team and community contributors.  
> - Some content may align with community resources, but all content is verified and derived directly from the game and our contributors.

## Code License

The project source code (e.g., `src/components`, build scripts, and other implementation code) is dual-licensed under the [GNU Affero General Public License v3](LICENSE-CODE).

Alternative licensing terms are available directly through Apathetic Tools.  

## 🚀 Project Structure

Inside this Astro + Starlight project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   └── docs/
│   └── content.config.ts
├── astro.config.ts
├── package.json
└── tsconfig.json
```

- **Site content:** Usually `.mdx` or `.md` files in `src/content/docs/`. Each file is exposed as a route based on its file name.  
- **Images:** Add images to `src/assets/` and reference them in Markdown with relative paths.  
- **Static assets:** Place favicons and other static files in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project in a terminal. Ensure you have [pnpm](https://pnpm.io/) installed.

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |
