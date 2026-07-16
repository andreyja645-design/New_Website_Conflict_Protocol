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

Content migration progress: 34 of 39 content pages done: 14 patterns + 12 techniques + 8 situations. Remaining Phase 4 work: `/start-here`, real `/about` content, homepage polish, and privacy polish. The spec names utility pages too; those are listed after the counted 39-page checklist.

- [ ] `/`
- [ ] `/start-here`
- [ ] `/patterns/`
- [ ] `/techniques/`
- [ ] `/situations/`
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
5. Use an honest image path from `public/`, or leave `heroImage` empty only where the schema allows it. Technique `heroImage` is optional because `consequence-setting` has no matching card asset in the prepared drop.
6. Open one PR with that one content file. The index pages and sitemap update from the collection automatically.

## Phase 1 Content

- Pattern: Gaslighting
- Technique: Grey Rock
- Situation: Saying no without a paragraph of justification

## Phase 2 Content

- Patterns: Guilt Trip, Martyrdom, DARVO, Triangulation, Moving Goalposts, Scope Creep, Public Shaming, Credit Theft, Minimizing, Comparison, Silent Treatment, Loyalty Test, Empathy Trap
- Techniques: Fogging, I-Statement, Broken Record, Aikido, Validation, Reframe, Boundary, Mirroring, Labeling, Tactic Naming, Consequence Setting
- Image note: Consequence Setting intentionally ships without `heroImage`; no unrelated card is substituted.

## Phase 3 Content

- Situations: Your boss keeps expanding the task after you agreed, After everything I have done, You end up apologizing, Joke at your expense, You froze in a meeting, Silent treatment until you cave, You're too sensitive.
- Pattern pages now backfill `situations` frontmatter for the Phase 3 cross-links.

`_quarry/` is source material only. It does not ship and should not move into `src/` or `public/`.
