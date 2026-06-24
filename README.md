# Halt Child Abuse

Marketing and outreach site for **haltchildabuse.org**, a nonprofit that helps
families recognize the signs of child abuse and stop it. The site leads with a
YouTube interview series featuring parents and experts, teaches the warning
signs, points people to help, and invites donations.

> If a child is in immediate danger, call **911**. To report abuse, call the
> National Child Abuse Hotline at **1-800-422-4453**.

## What the site does

- **Watch the series (primary goal).** The home page centers on the interview
  series: a featured episode plus an episode grid, all linking out to YouTube.
- **Recognize the signs.** A plain-language guide to behavioral, physical, and
  emotional warning signs.
- **Get help.** The national hotline and a calm, three-step "what to do" guide.
- **Mission and impact.** Who we are and why the work matters.
- **Donate.** Preset giving amounts and a clear call to action.
- **Quick exit safety control.** A button (also triggered by the `Esc` key)
  that immediately replaces the page in browser history and redirects to a
  neutral site, so a visitor can leave quickly and safely.

## Tech stack

- **Next.js 15** (App Router)
- **React 19**
- **Tailwind CSS v4** (configured via `@tailwindcss/postcss`, theme defined in
  `globals.css` with `@theme`)
- **TypeScript** (strict mode)
- **Keystatic** (open source, Git-based CMS for the interview episodes)
- **Fonts:** Fraunces (serif headings) and Inter (sans body), loaded with
  `next/font/google`

## Project structure

```
haltchildabuseorg/
├── .claude/
│   └── launch.json          Dev-server config for the preview tooling
├── keystatic.config.ts      CMS schema: the "Interview episodes" collection
├── public/
│   └── images/episodes/     Episode photos uploaded through the CMS
├── src/
│   ├── app/
│   │   ├── api/keystatic/    CMS API route handler
│   │   ├── keystatic/        CMS admin UI (served at /keystatic)
│   │   ├── components/
│   │   │   └── QuickExit.tsx Client component: instant "leave the site" control
│   │   ├── globals.css       Tailwind import + design tokens (@theme) + base styles
│   │   ├── layout.tsx        Root layout, fonts, and page metadata
│   │   └── page.tsx          The home page (reads episodes from the CMS)
│   └── content/
│       ├── episodes/         CMS content: one YAML file per interview
│       └── homepage/         CMS content: editable home page sections
├── next.config.mjs          Next config (remote image hosts)
├── postcss.config.js        Tailwind v4 PostCSS plugin
├── tsconfig.json            TypeScript config (path alias @/* -> src/*)
└── package.json
```

## Content management (Keystatic CMS)

Interview episodes are managed through [Keystatic](https://keystatic.com), an
open source, Git-based CMS. There is no database and no extra server: each
episode is a small YAML file in `src/content/episodes/`, and uploaded photos go
to `public/images/episodes/`. Editing content is just editing files in this
repo, which keeps everything in version control and rebuilds the static site.

### First: open the CMS

Every task below starts the same way.

1. Open a terminal in this project folder.
2. Run `npm run dev`.
3. In your browser, go to
   [http://localhost:3000/keystatic](http://localhost:3000/keystatic).

You will see two things to manage: **Interview episodes** (the video posts) and
**Home page content** (editable sections of the home page).

### How to add a new interview post

1. Open the CMS (steps above) and click **Interview episodes**.
2. Click **Create** (top right).
3. Fill in the fields:
   - **Title** — the name of the interview. The URL slug fills in automatically.
   - **Person interviewed** — the guest's name.
   - **Their role or background** — e.g. "Child psychologist, 20 years in family
     trauma".
   - **Description** — one or two sentences shown on the card.
   - **Photo** — click to upload the cover image (a 16:9 / landscape image looks
     best).
   - **YouTube link** — paste the full link to the video.
   - **Length** — e.g. "38 min".
   - **Published date** — used to order posts. Newest shows first.
   - **Feature this episode** — turn on to show it large at the top of the
     series section. Only turn this on for one post at a time.
4. Click **Create** / **Save**. This writes a new file in
   `src/content/episodes/` and saves the photo to `public/images/episodes/`.
5. Publish your change (see "Saving and publishing" below).

### How to change an existing post

1. Open the CMS and click **Interview episodes**.
2. Click the post you want to change in the list.
3. Edit any field, replace the photo, or toggle **Feature this episode**.
4. Click **Save**.
5. Publish your change (see "Saving and publishing" below).

To remove a post, open it and use the **Delete** option, then publish.

### How to add or change home page content

The home page sections (other than the videos) are edited in one place.

1. Open the CMS and click **Home page content**.
2. You will see three groups you can edit:
   - **Warning signs** — the cards in the "Recognizing the signs" section.
   - **What to do steps** — the numbered steps in the "Get help" section. The
     01 / 02 / 03 numbers are added automatically based on the order, so you can
     reorder freely.
   - **Mission stats** — the three figures in the "Our mission" section
     (a **Number** like "1 in 7" and a **Label**).
3. To **add** an item, click **Add** under the group and fill in the fields.
   To **change** one, edit it in place. To **reorder**, drag items by the handle.
   To **remove** one, use the item's delete control.
4. Click **Save**.
5. Publish your change (see "Saving and publishing" below).

### Saving and publishing

Saving in the CMS writes files into this repository on your computer. To make
the changes appear on the live site, publish them with Git:

```bash
git add -A
git commit -m "Update interview content"
git push
```

If the site is hosted on a service like Vercel or Netlify, the push triggers a
rebuild and your changes go live in a minute or two. (To let editors save
directly to the live site without using Git, see "Editing on the live site"
below.)

### How it works under the hood

- Episodes are read at build time by `getEpisodes()` in `src/app/page.tsx`.
  Newest by date is shown first; the "featured" one appears at the top.
- Home page sections are read by `getHomeContent()` from the
  `src/content/homepage/index.yaml` singleton. If that entry is ever missing or
  empty, the page falls back to built-in defaults so it never renders blank.

### Editing on the live site (optional upgrade)

Local storage (the current setting) is great for editing on your own machine.
To let non-technical editors manage content directly on the deployed site,
switch `storage` in `keystatic.config.ts` to GitHub mode:

```ts
storage: { kind: 'github', repo: 'sperl755/haltchildabuseorg' }
```

then install the Keystatic GitHub App and set its environment variables. See
the [Keystatic GitHub mode docs](https://keystatic.com/docs/github-mode). In
GitHub mode, editors log in with GitHub and saves become commits/PRs.

### Other editable content

The hero copy, mission heading/intro text, and key links still live as simple
constants near the top of `src/app/page.tsx` (`CHANNEL_URL`, `DONATE_URL`,
`HOTLINE_DISPLAY`, `HOTLINE_TEL`). These can be moved into Keystatic later if
desired.

### Design system

Design tokens are defined in `src/app/globals.css` under `@theme`. The palette
is a calm, trust-oriented set:

- `mist*` — soft off-white backgrounds
- `ink*` — deep teal-charcoal text
- `trust*` — primary teal (main actions, "Watch the series")
- `care*` — supportive green (education content)
- `warm*` — warm gold (donation accents)

Headings use Fraunces with optical-size utilities (`opsz-30`, `opsz-60`,
`opsz-96`, `opsz-144`) defined alongside the theme.

## Getting started

```bash
npm install
npm run dev      # starts on http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build
npm run start      # serve the production build
npm run typecheck  # tsc --noEmit
npm run lint       # next lint
```

## Before launch (placeholders to replace)

The site ships with sample content. Update these when the real assets exist:

- The four seeded episodes are samples (stock photos, placeholder YouTube
  links). Edit them in the CMS at `/keystatic` with your real interviews.
- `CHANNEL_URL` and `DONATE_URL` in `page.tsx` (channel and donation links)
- `DONATE_URL` should point at your real donation provider
- The mission stats are sample copy in `page.tsx`
- Confirm the hotline number is current for your audience

## Deployment

The app is a standard Next.js project and deploys cleanly to Vercel or any
Node host. Build with `npm run build` and serve with `npm run start`.

## Editorial note

User-facing copy avoids em dashes (use a period, colon, or comma instead).
