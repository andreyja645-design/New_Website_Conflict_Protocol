# Conflict Protocol Companion Website V2

Phase 1 scaffold for the Conflict Protocol companion content site. Astro, TypeScript, static output, Cloudflare Pages friendly. No CMS, no database, no UI framework, no Tailwind. Styles are plain CSS with a small token file because the site needs a durable content system more than another abstraction party.

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

On this Windows machine, use `npm.cmd` from PowerShell if script execution blocks `npm`.

## Deploy Notes

Cloudflare Pages:

- Build command: `npm run build`
- Output directory: `dist`
- Set `PUBLIC_SITE_URL` to the production origin.
- Optionally set `PUBLIC_GAME_URL` to the live game URL. Until then, CTA links fall back to the local `#practice-live` anchor.

## V1 Sitemap Checklist

Content migration progress: 3 done, 36 to go. Phase 1 also scaffolds the shell routes and indexes so the templates can be reviewed. The spec names utility pages too; those are listed after the counted 39-page checklist.

- [ ] `/`
- [ ] `/start-here`
- [ ] `/patterns/`
- [ ] `/techniques/`
- [ ] `/situations/`
- [ ] `/patterns/guilt-trip/`
- [ ] `/patterns/martyrdom/`
- [ ] `/patterns/darvo/`
- [x] `/patterns/gaslighting/`
- [ ] `/patterns/triangulation/`
- [ ] `/patterns/moving-goalposts/`
- [ ] `/patterns/scope-creep/`
- [ ] `/patterns/public-shaming/`
- [ ] `/patterns/credit-theft/`
- [ ] `/patterns/minimizing/`
- [ ] `/patterns/comparison/`
- [ ] `/patterns/silent-treatment/`
- [ ] `/patterns/loyalty-test/`
- [ ] `/patterns/empathy-trap/`
- [x] `/techniques/grey-rock/`
- [ ] `/techniques/fogging/`
- [ ] `/techniques/i-statement/`
- [ ] `/techniques/broken-record/`
- [ ] `/techniques/aikido/`
- [ ] `/techniques/validation/`
- [ ] `/techniques/reframe/`
- [ ] `/techniques/boundary/`
- [ ] `/techniques/mirroring/`
- [ ] `/techniques/labeling/`
- [ ] `/techniques/tactic-naming/`
- [ ] `/techniques/consequence-setting/`
- [ ] `/situations/scope-creep-at-work/`
- [ ] `/situations/after-everything-ive-done/`
- [ ] `/situations/darvo-gaslighting-apology-trap/`
- [ ] `/situations/public-joke-at-your-expense/`
- [ ] `/situations/froze-in-meeting/`
- [ ] `/situations/silent-treatment-until-you-cave/`
- [ ] `/situations/too-sensitive-tone-policing/`
- [x] `/situations/saying-no-without-jade/`

Utility routes scaffolded in Phase 1:

- `/about`
- `/privacy`
- `404`

## How To Add A Page

1. Add one MDX file to exactly one collection folder:
   - `src/content/patterns/`
   - `src/content/techniques/`
   - `src/content/situations/`
2. Use only the frontmatter fields in `src/content.config.ts`.
3. Follow the fixed section order from `WEBSITE_V2_SPEC.md` section 4.
4. Include 5 or more verbatim scripts using `ScriptBlock`.
5. Use an honest image path from `public/`, or leave `heroImage` empty only where the schema allows it.
6. Open one PR with that one content file. The index pages and sitemap update from the collection automatically.

## Phase 1 Content

- Pattern: Gaslighting
- Technique: Grey Rock
- Situation: Saying no without a paragraph of justification

`_quarry/` is source material only. It does not ship and should not move into `src/` or `public/`.
