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
- **Fonts:** Fraunces (serif headings) and Inter (sans body), loaded with
  `next/font/google`

## Project structure

```
haltchildabuseorg/
├── .claude/
│   └── launch.json          Dev-server config for the preview tooling
├── public/                  Static assets
├── src/
│   └── app/
│       ├── components/
│       │   └── QuickExit.tsx Client component: instant "leave the site" control
│       ├── globals.css       Tailwind import + design tokens (@theme) + base styles
│       ├── layout.tsx        Root layout, fonts, and page metadata
│       └── page.tsx          The home page (all sections + content data)
├── next.config.mjs          Next config (remote image hosts)
├── postcss.config.js        Tailwind v4 PostCSS plugin
├── tsconfig.json            TypeScript config (path alias @/* -> src/*)
└── package.json
```

### Content lives in `page.tsx`

The home page is intentionally data-driven so copy can be edited without
touching layout. Near the top of `src/app/page.tsx` you will find editable
arrays and constants:

- `FEATURED` and `EPISODES` — the interview series content
- `SIGNS` — the warning-signs cards
- `STEPS` — the "what to do" guide
- `CHANNEL_URL`, `DONATE_URL`, `HOTLINE_DISPLAY`, `HOTLINE_TEL` — key links

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

- `CHANNEL_URL` and per-episode `url` / `thumb` values in `page.tsx`
  (episode thumbnails currently use stock images)
- `DONATE_URL` — wire up the real donation provider
- Episode titles, guests, and the mission stats (sample copy)
- Confirm the hotline number is current for your audience

## Deployment

The app is a standard Next.js project and deploys cleanly to Vercel or any
Node host. Build with `npm run build` and serve with `npm run start`.

## Editorial note

User-facing copy avoids em dashes (use a period, colon, or comma instead).
