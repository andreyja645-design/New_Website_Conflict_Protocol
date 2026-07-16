# Codex prompt — Conflict Protocol companion site V2, Phase 1 (scaffold + templates)

Copy everything below the line into Codex.

---

You are building a brand-new website from scratch. This is Phase 1 of a multi-phase build.
Read this whole prompt before touching anything.

## Context

The Conflict Protocol is a React/Vite training game where players practice difficult
conversations against manipulative AI opponents. We are building its **companion content
website**: an independent, genuinely useful resource for people who freeze, fawn, or
over-explain under conversational pressure. It teaches them to spot manipulation patterns
and gives them word-for-word scripts. It links to the game lightly (one CTA per page) but
must stand on its own.

A previous attempt at this site exists and FAILED from scope creep — 8+ overlapping
content taxonomies, 14k lines of content trapped in TypeScript data files, a 5,800-line
global.css. You are NOT remaking it. You are building fresh. The old repo is a read-only
content quarry, nothing more.

## Required reading (in this order, before any code)

You are working INSIDE the new site's folder — everything you need is already here,
all paths below are relative to the repo root.

1. `WEBSITE_V2_SPEC.md` (repo root) — the authoritative spec. Every decision in this
   prompt derives from it. If this prompt and the spec ever conflict, the spec wins.
   Pay special attention to §3 (content model), §4 (page templates), §5 (sitemap),
   §6 (game-bridge rules), §12 (scope discipline).
2. `_quarry\` (repo root) — the only surviving pieces of the failed old site, copied in
   for you. Two kinds of files:
   - **Idea references (skim, re-implement lean, do not copy wholesale):**
     `BaseLayout.astro`, `schema.ts` (SEO/JSON-LD), `TextMessageScripts.astro`.
   - **Content sources for the exemplar pages (quarry the words, rewrite fully):**
     `gaslighting-responses.astro`, `grey-rock-method.astro`,
     `stop-over-explaining-no-jade.astro`, and `freezing-under-pressure.astro`
     (that last one is for the later `/start-here` — not needed in Phase 1).
   `_quarry\` never ships: exclude it from the build and keep it out of `src/` and
   `public/`. Leave the folder in place when done.

## Working assumptions (Andre can override later — build so they're cheap to change)

- **Domain undecided.** Build fully domain-agnostic: no hardcoded absolute URLs; site URL
  comes from one config value / env (`PUBLIC_SITE_URL`), used by sitemap/RSS/OG tags.
- **Goal: search-first evergreen resource.** Clean semantic HTML, fast static pages,
  proper meta/OG/JSON-LD per page, sitemap.xml, robots.txt.

## Visual style & voice (DECIDED — not assumptions, do not soften these)

- **Keep the Conflict Protocol game's visual style.** Dark palette, the game's typography
  feel and color accents, card/poster art as heroes. The site should instantly read as
  "same universe as the game." Game-style chrome (chips, framed cards, accent borders)
  frames the content; body text itself stays highly readable — comfortable measure,
  generous size, high contrast within the dark theme, great at 375px. No fake functional
  HUD (no pretend meters/bars) — game *styling*, not game *interface*.
- **Voice: friendly buddy, NOT a counselor. This is explicitly not a therapy website.**
  The narrator is the friend in your corner who's seen these games played a hundred
  times — direct, warm, a bit wry, zero clinical distance. "Here's what's actually
  happening. Try saying this." Never "individuals may experience…" or "it's important to
  acknowledge your feelings." Short sentences, talks TO the reader ("you"). Humor is
  welcome; never at the reader's expense — the manipulation patterns themselves are fair
  game for a little contempt. If a paragraph would fit on a wellness blog, rewrite it.

## Phase 1 scope — build EXACTLY this, then STOP for human review

1. **The repo root is your current working folder.** It already contains: `public\`
   (Andre's prepared asset library — see the Images section below), `_quarry\` (old-site
   salvage — see Required reading), `WEBSITE_V2_SPEC.md`, this prompt file, and a stub
   `README.md` (replace it per item 8). Scaffold the Astro project around them: Astro
   (latest stable), TypeScript, static output, targeting Cloudflare Pages
   (`npm run build` → `dist/`). Git init here, work on `main`, and make the initial
   commit BEFORE reorganizing anything inside `public\` so the original asset drop is
   preserved in history. Do not delete or move the spec, this prompt, or `_quarry\`.
   No CMS, no database, no UI framework, no Tailwind unless you can justify it in one
   sentence in the README — plain scoped CSS with a small token file is preferred.
   Minimal client JS (target: none in Phase 1).

2. **Content collections** (Astro content collections, zod-validated) for exactly three
   types, matching spec §3:
   - `patterns` (14 entries eventually) — frontmatter: `title`, `slug`, `oneLiner`,
     `counters` (array of technique slugs), `situations` (array of situation slugs),
     `heroImage` (optional), `gameHook` (one sentence for the CTA block).
   - `techniques` (12) — `title`, `slug`, `oneLiner`, `job`, `risk`,
     `countersPatterns` (array of pattern slugs), `heroImage`, `gameHook`.
   - `situations` (8) — `title`, `slug`, `oneLiner`, `patterns` (slugs),
     `techniques` (slugs), `heroImage`, `gameHook`, `gameLevel` (optional string).
   Body of each file is markdown following the fixed section structure in spec §4.
   NO other collections. NO general "articles" or "blog" collection. Ever.

3. **Layouts/templates** (spec §4): one `BaseLayout` (head/meta/OG/JSON-LD, header nav,
   footer) + one template per content type that renders the §4 structure, including:
   - a `ScriptBlock` component for verbatim copy-paste lines (visually distinct,
     easy to read aloud — this is the site's core value; make it excellent),
   - a single standard `GameCTA` component rendered ONCE at the end of each content page
     (spec §6 — never mid-content),
   - a `SafetyNote` footer component on pattern + situation pages (spec §7): ONE quiet
     line in the site's own voice, not disclaimer-ese — e.g. "This site teaches you to
     hold a conversation. If you're not safe, that's a different problem — get real
     help: [link]." Small, unobtrusive, never a banner.

4. **Pages:** homepage (spine statement + three entry doors: "I freeze" / "Name the
   pattern" / "Give me a script"), `/patterns/` index, `/techniques/` index,
   `/situations/` index, `/start-here` (stub with TODO), `/about` (stub), 404, privacy
   (stub). Index pages render card grids from the collections.

5. **Exemplar content — ONE real entry per type** so the templates are proven with real
   words, ported and rewritten from the salvaged old-site content in `_quarry\`:
   - Pattern: **gaslighting** (source: `_quarry\gaslighting-responses.astro`).
   - Technique: **grey rock** (source: `_quarry\grey-rock-method.astro`).
   - Situation: **"Saying no without a paragraph of justification (the JADE trap)"**
     (source: `_quarry\stop-over-explaining-no-jade.astro`).
   Rewrite into the §4 template structure — do not paste old HTML. Each MUST contain
   5+ verbatim scripts (spec §12 rule 4). Write them in the buddy voice defined above —
   concrete, direct, a little wry; no listicle filler, no "in today's fast-paced world"
   LLM-slop, nothing that sounds like therapy or a wellness blog, no diagnosing real
   people (behaviors, not people — spec §7).
   For the remaining 13+11+7 entries, create NOTHING — not even stub files (stubs invite
   filler; the sitemap in the README tracks what's missing).

6. **Images — the repo's `public\` folder IS the prepared asset library.** Andre has
   already curated and named ~146 assets there. Since `public/` is Astro's static
   passthrough, they're servable as-is — but you SHOULD reorganize into clean URL-safe
   paths as part of scaffolding (after the initial preserve-commit): the folders with
   spaces (`Cards Opponent Patterns`, `Cards User Techniques`) become e.g.
   `public/cards/patterns/` and `public/cards/techniques/`; keep the semantic filenames.
   Inventory:
   - `Cards Opponent Patterns\card-<slug>.jpg` — all 14 pattern cards, slugs matching
     the game's tactic ids exactly → the hero/index-card art for every Pattern page.
   - `Cards User Techniques\card-<slug>.jpg` — technique cards (note: includes
     `card-no-jade.jpg`, and there is no consequence-setting card — if a slot has no
     matching asset, leave it imageless and note it in `IMAGE_MAP_TODO.md`; never
     substitute a wrong-subject image).
   - `assets\situations\*.webp` — named situation illustrations (e.g.
     `after-everything-ive-done.webp`, `darvo-blame-reversal.webp`,
     `freeze-and-say-yes.webp`) → match by subject to the 8 Situation pages.
   - `assets\personas\*.webp` — the 4 opponent portraits (gaslighter,
     guilt-tripping-parent, narcissistic-partner, toxic-boss) → useful on the homepage
     and in GameCTA blocks.
   - `assets\pages\*.webp` + `assets\articles\*.webp` — page heroes and article
     illustrations (e.g. `start-here-hero.webp`, `overexplaining-jade-loop.webp`).
   - `assets\cp-logo.webp`, `assets\og-default.jpg`, `assets\placeholders\*.svg`,
     `assets\home-hero-scripts-patterns-practice.webp` — branding, default OG image,
     SVG placeholders, homepage hero.
   - `assets\_retired\` — do NOT use anything from there.
   Match images to pages by filename subject; when no honest match exists, ship the slot
   imageless and list it in `IMAGE_MAP_TODO.md`. The pattern/technique cards are JPG —
   fine as-is, no conversion needed. There is no other art pool — everything usable is
   already in `public\`.

7. **SEO plumbing:** per-page title/description, canonical from `PUBLIC_SITE_URL`,
   OG/Twitter tags, JSON-LD (Article for content pages), `sitemap.xml`, `robots.txt`.
   Also an `llms.txt`.

8. **README.md:** commands, deploy notes (Cloudflare Pages), the full V1 sitemap from
   spec §5 as a checklist (3 done, 36 to go), and a short "how to add a page" recipe
   (one markdown file, one PR — no code changes needed).

## Hard rules (from spec §12 — violating these is how the last site died)

- Exactly three content types. No fourth. No glossary, pocket card, quiz, drill, topics,
  or email capture in Phase 1 — they are explicitly deferred V2 ideas.
- Every content page ships with verbatim-usable scripts or it doesn't ship.
- One GameCTA per page, at the end. No popups, no mid-article promo.
- One markdown file = one page. No TypeScript data files holding content.
- Keep total CSS small and tokenized; if global styles pass ~800 lines, stop and refactor.

## Verification before you finish

- `npm run build` passes clean; `npm run dev` serves; all internal links on the 8 pages
  resolve (no dead links to the 36 unwritten pages — index cards for missing entries
  simply don't render yet, driven by what exists in the collections).
- Validate one page's JSON-LD (paste into a validator or eyeball against schema.org).
- View homepage + all three exemplars at 375px width — the primary reader is on a phone.

## Deliverable

A short summary: what was built, the repo tree, how to run it, screenshots or a
description of the three exemplar pages, and a list of anything you deliberately
deferred. Then STOP — Phase 2 (porting the remaining pattern/technique pages) starts
only after Andre reviews the templates and exemplar tone.
