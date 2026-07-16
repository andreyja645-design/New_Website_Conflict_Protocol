# Codex prompt — Conflict Protocol companion site V2, Phase 4 (start-here, about, homepage final, launch polish)

Copy everything below the line into Codex. Run it from inside this repo, same as before.
DO NOT run this until Phase 3 has been reviewed and approved by Andre.

---

## Fixes from the Phase 3 review (apply/observe FIRST)

- Phase 3's content review passed; the one defect found (leaked internal page-numbering
  in a situation) was already fixed by hand. Nothing content-wise to redo.
- PROCESS: Phase 3 did NOT commit its work — the reviewer committed it. This phase,
  make a single git commit of your changes at the end (message e.g. "Add phase 4
  editorial pages + launch polish"). Do not commit anything the reviewer hasn't seen
  mid-phase; one commit at the end is right.

## Context

You are finishing a website you already built. Phases 1–3 shipped the scaffold and all
34 content-model pages (14 patterns, 12 techniques, 8 situations — confirm against the
README checklist before starting). Templates, components, schemas, and voice are LOCKED. Phase 4 is the LAST phase:
the remaining editorial pages, homepage final pass, and launch readiness. After this
phase the site should be deployable to Cloudflare Pages by Andre with zero further code
work.

## Required reading FIRST

1. `WEBSITE_V2_SPEC.md` — §1 (positioning — /start-here embodies it), §6, §8, §9 (SEO
   goal), §12.
2. `_quarry\freezing-under-pressure.astro` — the primary source for /start-here.
3. The current `/start-here` and `/about` stubs, homepage, privacy page, and README.

## The job

### 1. `/start-here` — the emotional front door (the most important page of this phase)

This is the essay for the person the whole site is for: they freeze, fawn, or
over-explain under pressure, and they just realized it's a pattern. Source material:
`_quarry\freezing-under-pressure.astro` (rewrite fully into the site voice — warmer here
than anywhere else, but still the buddy, never a therapist).

Structure: name the experience so precisely they feel seen (the 3-hours-later answer,
the freeze, the instant yes they regret) → why freezing is a normal nervous-system
response, not a character flaw (brief, no neuroscience lecture) → the reframe: you don't
need courage, you need PREPARED WORDS and pattern recognition → how to use this site
(the three doors: patterns = name it, techniques = the moves, situations = full scripts)
→ 3–5 universal "buy time" lines that work in ANY pressured moment (the reader should
leave this page armed even if they never read another) → GameCTA (the game is the gym
where you rehearse under pressure).

Hero art: `assets/pages/start-here-hero.webp`. 5+ verbatim scripts still applies.

### 2. `/about` — short, honest, human

Who makes this (an indie developer building The Conflict Protocol game + this companion
resource), why (the freeze is personal — write it credibly without inventing biography;
keep it general enough to be true), what the site promises (plain words that work, no
"unlock your potential" fog), and the not-therapy line. A few paragraphs, one page,
no team-photo theater. Link to the game once.

### 3. Homepage final pass

- The three doors must now point at their real, finished destinations ("I freeze" →
  /start-here, "Name the pattern" → /patterns/, "Give me a script" → /situations/).
- Replace the Phase-1 "three doors are real today" honesty copy with the full-catalog
  version (the junk-drawer joke can retire with honor).
- Feature row: 3 hand-picked strong pages (one per type) as entry cards.
- Use `assets/home-hero-scripts-patterns-practice.webp` or the text-free placeholder if
  it fits the layout better; your call, note it in IMAGE_MAP_TODO.md.

### 4. `/privacy` — real text

Static site, no accounts, no forms in V1. State plainly what that means: no personal
data collected by the site itself; name the host (Cloudflare Pages) and any analytics
IF present (there are none in V1 — say so, and that the policy will change if that
changes). Keep it short, readable, in-voice but sober. No invented legal boilerplate,
no fake company names or addresses.

### 5. Launch polish (the checklist Phase 1 deferred)

- **Pin dependencies**: replace every `"latest"` in package.json with the actual
  installed versions from package-lock.json.
- **Favicon** from `assets/cp-logo.webp` (generate the standard sizes; a simple
  favicon.svg/png set is fine — no 20-file manifest circus).
- **OG/meta audit**: every page has a unique title + description; content pages use
  their heroImage as og:image where present, `assets/og-default.jpg` otherwise; verify
  JSON-LD renders on one page of each type.
- **A11y pass**: every card grid image has meaningful alt text (pattern/technique/
  situation title, not "card"); heading hierarchy sane (one h1 per page); link text
  never "click here"; visible focus states exist (check tokens.css).
- **404 page**: one wry in-voice line + links to the three doors. No orphan design.
- **README final**: mark the checklist complete, document `PUBLIC_SITE_URL` +
  `PUBLIC_GAME_URL` as the two deploy-time env vars, and write the exact Cloudflare
  Pages setup steps (build command, output dir, env vars) so Andre can deploy without
  asking anything.
- **_quarry and prompt files**: add `_quarry/` and `CODEX_PROMPT_*.md` and
  `WEBSITE_V2_SPEC.md` to a `.gitignore`? NO — they should stay in git (they're project
  history), but confirm they are excluded from the BUILD OUTPUT (they will be, they're
  not in src/ or public/ — just verify nothing copies them into dist/).

## Scope guard

No new content types, collections, or routes beyond what's listed. No analytics, no
cookie banner (nothing to consent to), no newsletter signup, no search. If something
feels missing, it goes in `V2_IDEAS.md` (create it if needed), not in the build.

## Verify before you finish

- `npm run build` clean. Full-site click-through: every nav link, every door, every
  cross-link, the CTA on one page of each type.
- `npx astro preview` + check homepage, /start-here, one pattern, one technique, one
  situation at 375px AND desktop width.
- Confirm dist/ contains no _quarry or prompt files.
- Lighthouse-style sanity (no tooling required): images have width/height or aspect
  ratios (no layout shift on the card grids), fonts load without FOIT hacks, no console
  errors.

## Deliverable + STOP

Summary: what changed per section above, the dependency versions pinned, the deploy
steps as written in the README, and anything you flagged for V2_IDEAS.md. Then STOP —
the site is ready for Andre to deploy. Do not deploy anything yourself.
