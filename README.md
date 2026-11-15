# IDCA Website

Website for the Indonesia Divetourism Company Association (IDCA / PUWSI), built with Astro and EmDash. The site is bilingual: English at `/` and Indonesian under `/id`.

## Stack

- **Astro** (server output, Node standalone adapter) for pages and routing
- **EmDash** CMS for members, activities, and news. Content is stored in SQLite and edited in the admin at `/_emdash/admin`
- **Tailwind CSS v4** and **shadcn/ui** (`base-nova` style) for styling and components
- **React** only for the shadcn components that need client behavior

## Requirements

- Node.js 22.23.4 or newer
- npm

## Getting started

```bash
npm install
npm run dev
```

Open `http://localhost:4321`. Use `localhost` rather than `127.0.0.1`, because passkey sign-in in the EmDash admin needs a secure origin.

On first run, the CMS database (`data.db`) is created and the content in `seed/seed.json` is loaded. To load it again manually, run `npx emdash seed`.

### First-time CMS setup

1. Open `http://localhost:4321/_emdash/admin/setup`.
2. Create the admin account and register a passkey.
3. Sign in at `/_emdash/admin` to edit members, activities, and news.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Build the site into `dist/` |
| `npm run preview` | Preview the production build |
| `npm start` | Run the built server from `dist/server/entry.mjs` |
| `npm run typecheck` | Run `astro check` |

## Languages

- English is the default and uses unprefixed paths (`/members`).
- Indonesian uses the `/id` prefix (`/id/members`).
- First-time visitors are sent to Indonesian. Their choice is kept in the `idca-locale` cookie, so later visits open in the same language.
- The old `/en` paths redirect permanently to the unprefixed English paths.

## Project layout

```
src/
  components/   Header, Footer, MailForm, MemberCard, Icons, shadcn UI in ui/
  layouts/      Base page shell
  lib/          Copy (EN/ID strings), locale helpers, site contact details, CMS field helpers
  middleware.ts Language redirects and the locale cookie
  pages/        Routes for English (root) and Indonesian (id/)
  views/        Page templates shared by both languages
  styles/       Global CSS and theme tokens
seed/           Initial CMS content (seed.json) and media
scripts/        build-seed.mjs, which regenerates seed/seed.json
public/         Static assets (logos, photos, favicon)
```

## Content editing

Members, activities, and news are managed in the EmDash admin, so non-technical staff do not need to edit code. The contact details and copy that are not in the CMS live in `src/lib/site.ts` and `src/lib/copy.ts`.

Membership and contact forms do not store submissions. They open the visitor's email app addressed to the IDCA mailbox.

## Notes

- `.env`, `data.db`, `uploads/`, `dist/`, and `node_modules/` are local and git-ignored.
- The `mockup/` folder holds the original static design files for reference only and is git-ignored.
