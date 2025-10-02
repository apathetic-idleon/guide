# Project Dependencies Reference

This document explains *why* each dependency in the project (especially `package.json`) exists and what it’s used for.  
(If something is removed, move it to retired instead of deleting so history is clear.)

## Development Environment

### [Windows Subsystem for Linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/install)
- **Distro:** [Ubuntu-latest (via Microsoft Store)](https://apps.microsoft.com/detail/9pdxgncfsczv)  
- **Package:** [is-wsl](https://www.npmjs.com/package/is-wsl): WSL detection for vite
- Dev Hot reload WSL /mnt Polling Fix (`astro.config.ts` → vite config)  
  See: [Snippet]((https://github.com/apathetic-tools/snippets/blob/main/docs/astro/wsl-mnt-polling-fix/)) | [Astro issue](https://github.com/withastro/astro/issues/6043#issuecomment-1409498718) | [MS WSL issue](https://github.com/microsoft/WSL/issues/4739#issuecomment-2153546812)

 ### [VSCode](https://apps.microsoft.com/detail/xp9khm4bk9fz7q)
 **Config Files:** `.vscode/`, `ws-idleon.code-workspace`: default linting settings & recommended extensions  

**Recommended Extensions:**  

| Purpose | Package | Notes |
|---------|--------|------|
| WSL remote editing | [ms-vscode-remote.remote-wsl](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl) | Official
| Consistent editor defaults | [editorconfig.editorconfig](https://marketplace.visualstudio.com/items?itemName=editorconfig.editorconfig) | `.editorconfig` support
| File type language support | `.astro` ([astro-build.astro-vscode](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode) Official),<br /> `.mdx` ([unifiedjs.vscode-mdx](https://marketplace.visualstudio.com/items?itemName=unifiedjs.vscode-mdx)) | |
| GitHub Flavored Markdown (GFM) previews | [bierner.github-markdown-preview](https://marketplace.visualstudio.com/items?itemName=bierner.github-markdown-preview) |
| `prettier` code formatter support | [esbenp.prettier-vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) | |
| `eslint` code linter support | [dbaeumer.vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) | | 
| `textlint` content linter support | [3w36zj6.textlint](https://marketplace.visualstudio.com/items?itemName=3w36zj6.textlint) | |
| Remote GitHub Actions execution | [github.vscode-github-actions](https://marketplace.visualstudio.com/items?itemName=github.vscode-github-actions) | |

## Building the project

### Scripts

`package.json` → `scripts`

| Script | Purpose |
|--------|---------|
| `build` | Generate the static site |
| `build:site-repo` | Generate `main` branch for GitHub Pages repo |
| `clean` | Force full rebuild of dependencies and caches |

---    

### 📦 Dependencies

`package.json` → `dependencies`

These are required for the site to be generated.

| Purpose | Package | Notes |
|---------|--------|------|
| Static Site framework | `astro`, `sharp` | `sharp` for images |
| Documentation theme / integration | `@astrojs/starlight` | |
| Markdown + components | `@astrojs/mdx` | |
| TypeScript support | `typescript` | |
| Styling | Tailwind CSS (`tailwindcss`, `@tailwindcss/vite`, `@astrojs/starlight-tailwind`) | |
| File operations | `fast-glob` | dev-server watcher, `build-site-repo` |
| Run TS scripts (`build-site-repo`) | `tsx` | |
| Markdown plugin processing | `unified`, `vfile`, `remark`, `remark-parse` | |
| Dev Hot reload WSL /mnt Polling Fix | `is-wsl` | imported in `astro.config.ts`; [Snippet](https://github.com/apathetic-tools/snippets/blob/main/docs/astro/wsl-mnt-polling-fix/), [Astro issue](https://github.com/withastro/astro/issues/6043#issuecomment-1409498718), [MS WSL issue](https://github.com/microsoft/WSL/issues/4739#issuecomment-2153546812) |

*Astro integrations:*

| Purpose | Package | Notes |
|---------|--------|------|
| Auto-import components in MDX | `astro-auto-import` | `astro.config.ts` |
| Auto-generate sitemap | `@astrojs/sitemap` | SEO |
| Browser search bar | `@inox-tools/star-warp` | |
| Embed external content  | `astro-embed` | YouTube |
| Custom SVG icons | `astro-icon`, `@iconify-json/mdi` | Iconify |
| View transitions | `astro-vtbot` | Chormium only |

*Starlight Plugins:*

| Purpose | Package | Notes |
|---------|--------|------|
| Remove drafts in prod | `starlight-auto-drafts` | Frontmatter flag |
| Sidebar metadata modifications | `starlight-auto-sidebar` | |
| Static blog engine | `starlight-blog` | Updates; `config/blog.ts` |
| GitHub contributors list | `starlight-contributor-list` | `docs/site/credits.mdx` |
| Header badges | `starlight-heading-badges` | |
| Verify links | `starlight-links-validator` | `scripts` → `lint:linkcheck` |
| Custom icons / asides | `starlight-markdown-blocks` | |
| Back to top link | `starlight-scroll-to-top` | |
| Multiple sidebars by topic | `starlight-sidebar-topics` | `config/sidebar.ts` |


### Manual Site integrations

| Purpose | Files | Note |
|---------|--------|--------|
| Config Pattern | `config/*` | [Snippet](https://github.com/apathetic-tools/snippets/blob/main/docs/javascript/config-pattern/)
| Sidebar Toggles | astro integrations (`astro-icon`), packages (`@iconify-json/mdi`), `@components/sidebar-toggles/*`, `@styles/sidebar-toggles.css`   | [Snippet](https://github.com/apathetic-tools/snippets/blob/main/docs/astro-starlight/sidebar-toggles/) |
| Sidebar Topics — Astro Docs theme | `@components/starlight-sidebar-topics/*` | [Snippet](https://github.com/apathetic-tools/snippets/blob/main/docs/astro-starlight/topics-astro-docs-theme/)
| Dark Mode Theme Selector fix for Windows Firefox | `@styles/theme-menu-layer.css` | [Snippet](https://github.com/apathetic-tools/snippets/blob/main/docs/astro-starlight/theme-selector-firefox-windows-fix/)
| GitHub Pages Deployments | `.github/workflows/deploy.yml` | [Snippet](https://github.com/apathetic-tools/snippets/blob/main/docs/github/github-pages-deploy/)

### Build & Runtime Config Files

| Purpose | Files | Note |
|---------|---------|---------|
| Astro | `astro.config.ts`, `config/*.ts` | |
| Runtime Environment | `.npmrc`, `.nvmrc`, `.pnpm-workspace.yaml` |
| Package Management | `package.json`, `pnpm-lock.yaml` | via `pnpm` | 
| TypeScript | `tsconfig.json` | |

## Development on the Project

### Scripts

`package.json` → `scripts`  

| Script | Purpose |
|--------|---------|
| `astro` | allows `pnpm astro <command>` |
| `dev` / `start` | Run hot reload dev environment |
| `clean` | Force full rebuild of dependencies and caches |
| `preview` | Prod-like preview without full build |
| `check` | Verify project integrity |
| `format`, `format:ci`,<br />`format:code`, `format:imports` | Code & content formatting via Prettier |
| `lint:linkcheck` | Verify links in content |
| `lint:eslint` | Lint code via ESLint |
| `lint:text`, `lint:text:fix` | Suggest writing advice in content

### 🔧 Dev Dependencies

`package.json` → `devDependencies`

These are optional to do development work on the project.

| Purpose | Packages | Note |
|---------|---------|---------|
| Code formatting | `prettier`, `prettier-plugin-astro` | `scripts` → `format` / `format:ci` |
| Code linting / formatting | `eslint`, `@eslint/js`, `@typescript-eslint/*`, `typescript-eslint`, `eslint-import-resolver-typescript`, `eslint-plugin-*` (`eslint-plugin-astro`, `eslint-plugin-import`, - `eslint-plugin-jsx-a11y`), `astro-eslint-parser`, `globals` (`eslint.config.mjs`) | `scripts` → `lint:eslint` |
| Content linting | `textlint`, `textlint-plugin-*` (`textlint-plugin-mdx`), `textlint-rule-*` (`@textlint-rule/textlint-rule-no-unmatched-pair`, `textlint-rule-abbr-within-parentheses`, `textlint-rule-alive-link`, `textlint-rule-common-misspellings`, `textlint-rule-diacritics`, `textlint-rule-doubled-spaces`, `textlint-rule-editorconfig`, `textlint-rule-en-capitalization`, `textlint-rule-footnote-order`, `textlint-rule-no-start-duplicated-conjunction`, `textlint-rule-no-todo`, `textlint-rule-period-in-header`, `textlint-rule-period-in-list-item`, `textlint-rule-rousseau`, `textlint-rule-spelling`, `textlint-rule-stop-words`, `textlint-rule-terminology`, `textlint-rule-unexpanded-acronym`,`textlint-rule-write-good` ), `alex`, `dictionary-en` | `scripts` → `lint:text` |
| TypeScript types | `@types/node`, `@types/mdx`, `@types/mdast`, `@types/unist` |
| Pre-commit hooks | `husky`, `lint-staged` |
| Astro verification | `@astrojs/check` |

### Manual Dev integrations

| Package | Files | Purpose |
|---------|--------|--------|
| Windows Development Setup |  `.gitignore`, `.vscode/*`, `idleon.code-workspace`, `.editorconfig` | [Snippet](https://github.com/apathetic-tools/snippets/blob/main/docs/windows/development-setup/)
| Hot reload WSL `/mnt` Polling Fix | `astro.config.ts` → vite config | [Snippet](https://github.com/apathetic-tools/snippets/blob/main/docs/astro/wsl-mnt-polling-fix/)

#### Dev & Tooling Config Files

| Purpose | Files |
|---------|---------|
| git | `.gitignore` |
| Consistent editor defaults | `.editorconfig` |
| VSCode Editor Configuration | `.vscode/` |
| `scripts` → `format` | `.prettierignore`, `.prettierrc` |
| `scripts` → `lint:eslint` | `eslint.config.mjs` |
| `scripts` → `lint:text` | `.textlintrc.json` |


## Other Repo files

| Purpose | Files |
|---------|---------|
| Github Integration | `.github/*` |
| Community Management | `CODE_OF_CONDUCT.md` |
| Lincesing | `LICENSE`, `LICENSE-NOAI-CONTENT`, `LICENSE-CODE`, `NOTICE` |
| Repo Documentation | `README.md`, `README-SITE-REPO.md` |

## Online Resources
- [Starlight &lt;head&gt; Generator](https://starlight-head-generator.vercel.app/)
- [Starlight Built-in Icons by Category Reference](https://github.com/apathetic-tools/snippets/blob/main/docs/astro-starlight/icons-by-category/)
- [UTF-8 Emoji Icons by Category](https://github.com/apathetic-tools/snippets/blob/main/docs/text/utf8-emoji-icons-by-category/)


## 🗑 Retired / Removed
*(Keep track of things we used before, for historical context.)*  

*Starlight Plugins:*

| Purpose | Package | Notes |
|---------|--------|------|
| Horizontal collapsible sidebar | `starlight-fullview-mode` | Retired; Manual integration instead |
