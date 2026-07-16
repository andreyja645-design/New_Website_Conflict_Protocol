# Conflict Protocol Companion Website V2

Static Astro site for the Conflict Protocol field guide: patterns, techniques, situations, and the editorial pages that help someone find words before the room tilts.

No CMS, no database, no accounts, no forms, no analytics in V1. Styles are plain CSS because this site needs a durable content system more than another abstraction party.

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

On this Windows machine, use `npm.cmd` from PowerShell if script execution blocks `npm`.

## Cloudflare Pages Deploy

Create a Cloudflare Pages project connected to this GitHub repository.

Use these build settings:

- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/`
- Node version: Cloudflare default is fine as long as it supports the pinned Astro version.

Set these environment variables in Cloudflare Pages:

- `PUBLIC_SITE_URL`: the production origin, with no trailing path, for example `https://example.com`
- `PUBLIC_GAME_URL`: the live Conflict Protocol game URL. Until this is set, the site falls back to the local `#practice-live` anchor.

Deploy from `main`. Do not upload `_quarry/` manually; it is source history only and is not part of the build output.

## V1 Sitemap Checklist

Content migration progress: 39 of 39 V1 pages done. Launch utility pages are also in place.

- [x] `/`
- [x] `/start-here`
- [x] `/patterns/`
- [x] `/techniques/`
- [x] `/situations/`
- [x] `/patterns/guilt-trip/`
- [x] `/patterns/martyrdom/`
- [x] `/patterns/darvo/`
- [x] `/patterns/gaslighting/`
- [x] `/patterns/triangulation/`
- [x] `/patterns/moving-goalposts/`
- [x] `/patterns/scope-creep/`
- [x] `/patterns/public-shaming/`
- [x] `/patterns/credit-theft/`
- [x] `/patterns/minimizing/`
- [x] `/patterns/comparison/`
- [x] `/patterns/silent-treatment/`
- [x] `/patterns/loyalty-test/`
- [x] `/patterns/empathy-trap/`
- [x] `/techniques/grey-rock/`
- [x] `/techniques/fogging/`
- [x] `/techniques/i-statement/`
- [x] `/techniques/broken-record/`
- [x] `/techniques/aikido/`
- [x] `/techniques/validation/`
- [x] `/techniques/reframe/`
- [x] `/techniques/boundary/`
- [x] `/techniques/mirroring/`
- [x] `/techniques/labeling/`
- [x] `/techniques/tactic-naming/`
- [x] `/techniques/consequence-setting/`
- [x] `/situations/boss-keeps-expanding-the-ask/`
- [x] `/situations/after-everything-ive-done/`
- [x] `/situations/you-end-up-apologizing/`
- [x] `/situations/joke-at-your-expense/`
- [x] `/situations/you-froze-in-a-meeting/`
- [x] `/situations/silent-treatment-until-you-cave/`
- [x] `/situations/youre-too-sensitive/`
- [x] `/situations/saying-no-without-jade/`

Utility routes:

- `/about`
- `/privacy`
- `404`
- `/llms.txt`
- `/robots.txt`

## Content System

1. Add one MDX file to exactly one collection folder:
   - `src/content/patterns/`
   - `src/content/techniques/`
   - `src/content/situations/`
2. Use only the frontmatter fields in `src/content.config.ts`.
3. Follow the fixed section order from `WEBSITE_V2_SPEC.md` section 4.
4. Include 5 or more verbatim scripts using `ScriptBlock`.
5. Use an honest image path from `public/`, or leave `heroImage` empty only where the schema allows it.
6. New page ideas after V1 go to `V2_IDEAS.md` first.

## Phase Content

- Phase 1: scaffold plus Gaslighting, Grey Rock, Saying no without JADE.
- Phase 2: remaining 13 patterns and 11 techniques.
- Phase 3: remaining 7 situations plus pattern-to-situation cross-links.
- Phase 4: `/start-here`, `/about`, homepage final pass, `/privacy`, favicons, dependency pins, README deploy steps, and launch polish.

## Launch Notes

- Dependencies are pinned in `package.json`; no `"latest"` ranges remain.
- Card-grid images use meaningful alt text.
- Content-page Open Graph images use each page hero when present and fall back to `/assets/og-default.jpg`.
- `_quarry/`, `CODEX_PROMPT_*.md`, and `WEBSITE_V2_SPEC.md` are project history. They are not copied into `dist/` because they are outside `src/` and `public/`.
