# Calderstone Research - Coldstart & Operational Guide

## 1. Project Overview
- **Domain / Site:** Calderstone Research (`calderstone-research.pages.dev` / `calderstoneresearch.com`)
- **Repository:** `emerilansel-jpg/calderstone-research`
- **Framework:** Astro 5 (Static Site Generator) + TypeScript
- **Hosting / Deploy:** Cloudflare Pages via GitHub Actions (`.github/workflows/deploy-cloudflare-pages.yml`)

## 2. Directory Structure
- `src/content/research/` : Markdown articles and reports.
- `src/pages/` : Site pages (Home, About, Editorial Policy, LLM Info, etc.).
- `src/components/` : UI components (Header, Badges, Tables, CTA, etc.).
- `public/cms/` : Client-side CMS / editor interface (`index.html`).
- `public/images/posts/` : Article media and banners.

## 3. How Publishing Works
1. Articles live in `src/content/research/<slug>.md`.
2. Any push/merge to branch `main` triggers GitHub Actions CI/CD.
3. GitHub Actions builds Astro (`npm run build`) and deploys `dist/` directly to Cloudflare Pages.

## 4. Known Issues & Fixes
- **Issue:** GitHub Actions failure on `cloudflare/pages-action` (`Unable to resolve action`).
- **Fix:** Cloudflare deprecated/removed `cloudflare/pages-action`. Migration target: `cloudflare/wrangler-action@v3` with command `pages deploy dist --project-name=calderstone-research`.

## 5. Maintenance Rule
Every architectural or operational change made to `calderstoneresearch.com` MUST be documented and updated in this `coldstart.md` file after user confirmation.
