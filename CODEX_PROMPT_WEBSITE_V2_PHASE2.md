# Codex prompt — Conflict Protocol companion site V2, Phase 2 (the rest of the patterns + techniques)

Copy everything below the line into Codex. Run it from inside this repo
(`C:\Users\andre\Desktop\mindshield\New_Website_Conflict`), same as Phase 1.

---

You are continuing a website you already built. Phase 1 scaffolded the Astro site and
shipped ONE exemplar per content type (pattern: gaslighting, technique: grey rock,
situation: the JADE trap). Phase 1 was reviewed and approved. Do NOT re-architect
anything — the templates, components, schemas, styling, and voice are locked. Your job
in Phase 2 is to fill in content ONLY.

## Required reading FIRST (before writing a single page)

1. `WEBSITE_V2_SPEC.md` (repo root) — still authoritative. Re-read §3 (content model),
   §4 (page templates — the exact section structure per type), §6 (game CTA), §7 (safety
   + "behaviors, not people"), §8 (voice), §12 (scope rules).
2. The three APPROVED Phase-1 exemplars — these are your quality bar and structural
   template. Match their structure, section order, script density, and voice exactly:
   - `src/content/patterns/gaslighting.mdx`
   - `src/content/techniques/grey-rock.mdx`
   - `src/content/situations/saying-no-without-jade.mdx`
3. Content sources in `_quarry\` (see the per-page map below).

## Scope of Phase 2 — EXACTLY these 24 pages, nothing else

**Do NOT touch situations in this phase** — the remaining 7 situations are Phase 3
(they need authored scenarios and are higher-craft; keep them out of scope here).
Do not create any new component, page template, route, collection, or utility. Do not
add a glossary/quiz/email/topics/blog. If you feel the urge, re-read spec §12.

### 13 Pattern pages (add one `.mdx` to `src/content/patterns/`)
slugs (must match exactly — these are the game's tactic ids and the card filenames):
`guilt-trip`, `martyrdom`, `darvo`, `triangulation`, `moving-goalposts`, `scope-creep`,
`public-shaming`, `credit-theft`, `minimizing`, `comparison`, `silent-treatment`,
`loyalty-test`, `empathy-trap`

### 11 Technique pages (add one `.mdx` to `src/content/techniques/`)
slugs: `fogging`, `i-statement`, `broken-record`, `aikido`, `validation`, `reframe`,
`boundary`, `mirroring`, `labeling`, `tactic-naming`, `consequence-setting`

## Where the content comes from (quarry map)

**Primary source = the game's own data, copied into `_quarry\` for you:**
- `_quarry\GAME_tactics.ts` — has, for ALL 14 patterns: a `label` + `blurb` (in `TACTICS`)
  and a full `TACTIC_CARD_DETAILS` entry with `tell`, `trap`, `counter`, plus `examples`
  (what they say), `trapExamples` (the reply that feeds it), and `counterExamples` (lines
  that work). This maps almost 1:1 onto the §4 pattern template: `examples` → "What it
  looks like", `tell` → "The tell", `trap` + `trapExamples` → "The trap", `counter` +
  `counterExamples` → "Counters". Use these as the backbone and the seed for your scripts.
- `_quarry\GAME_nlp-toolbox.ts` — has, for each technique: `name`, `purpose`, `job`,
  `risk`, `tagline`, and `examples` (ready-to-say lines). `job`/`risk` go straight into
  frontmatter; `examples` seed the "When it works / when it backfires" + script blocks.

**Supplementary depth (only these patterns have a dedicated old guide — mine for extra
examples/nuance, rewrite fully, never paste):**
- `darvo` → `_quarry\darvo-response.astro`
- `guilt-trip` → `_quarry\guilt-trip-responses.astro`
- `silent-treatment` → `_quarry\stonewalling-silent-treatment-response.astro`

The other 10 patterns and all 11 techniques rely on the game data + your own writing in
the established voice. That is enough — the game data is concrete and already on-tone.

## Frontmatter — copy the exemplars' shape exactly

Pattern frontmatter: `title`, `slug`, `oneLiner`, `counters` (technique slugs — pick the
2–3 that genuinely counter it, using the game's `counter` guidance + the technique list),
`situations` (leave `[]` — situations don't exist yet; Phase 3 backfills the links),
`heroImage` (`/cards/patterns/card-<slug>.jpg` — verify the file exists in
`public/cards/patterns/` first), `gameHook` (one wry sentence).

Technique frontmatter: `title`, `slug`, `oneLiner`, `job`, `risk`, `countersPatterns`
(the pattern slugs this move is good against), `heroImage`
(`/cards/techniques/card-<slug>.jpg` — VERIFY it exists; note `consequence-setting` has
NO card — omit `heroImage`? No: the schema requires it for techniques. Either (a) leave
`consequence-setting` for last and flag it in `IMAGE_MAP_TODO.md` with a placeholder
image reused from a related card, or (b) make `heroImage` optional in
`src/content.config.ts` for techniques to match patterns — this is the ONE schema tweak
you may make, and if you do, note it in the README. Pick (b); it's cleaner.), `gameHook`.

Cross-link slugs must resolve. `counters`/`countersPatterns` pointing at a real page is
required; every technique you name as a counter must be one of the 12 technique slugs,
every pattern one of the 14. The `RelatedLinks`/cross-link components already handle
rendering — you only supply correct slugs.

## Voice + quality bar (this is the whole point of the phase)

- Match the gaslighting/grey-rock exemplars: friendly buddy, direct, a little wry, short
  sentences, talks to "you". Contempt is aimed at the manipulation pattern, never the
  reader. If a paragraph would fit on a wellness blog, rewrite it. No "individuals may
  experience", no "it's important to acknowledge".
- **Every page ships 5+ verbatim, copy-paste scripts in `ScriptBlock`s** (spec §12
  rule 4). A page without quotable lines does not ship. Scripts must sound sayable out
  loud by a real person — not slogans.
- **Behaviors, not people** (spec §7): name what the tactic does, never diagnose a real
  person ("your mother is a narcissist" is banned).
- **Anti-flattening:** 24 pages written back-to-back tend to collapse into one filled-in
  template with the nouns swapped. Fight it. Each pattern has a different emotional hook
  (guilt-trip weaponizes obligation; silent-treatment weaponizes your need for
  resolution; scope-creep weaponizes your reasonableness). Lead each page from ITS
  specific hook, not a generic "here's a bad pattern" opener. Vary sentence rhythm and
  the wry asides so no two pages feel copy-pasted.

## Suggested working order (batch + self-check, so quality doesn't drift)

1. Do the 13 patterns first (the game data is richest there).
2. Then RE-READ the gaslighting exemplar and one pattern you just wrote back to back.
   If your new ones have flattened or gone generic, fix them before continuing.
3. Then the 11 techniques.
4. Then a final self-review pass: open 4–5 random new pages, read the scripts aloud in
   your head, and cut anything that sounds like filler, a slogan, or therapy.

## Verify before you finish

- `npm run build` is clean; no broken internal links (every `counters`/`countersPatterns`
  slug resolves to a page that now exists — note that a pattern may legitimately reference
  a technique page that also exists after this phase; that's fine, both are built here).
- The `/patterns/` and `/techniques/` index grids now show all 14 / 12 cards, art loading
  from `public/cards/...`.
- Update the README sitemap checklist (should read 27 of 39 content pages done: 14
  patterns + 12 techniques + the 1 Phase-1 situation) and `IMAGE_MAP_TODO.md` (record the
  `consequence-setting` no-card decision).
- Spot-check 375px width on two new pages.

## Deliverable + STOP

A short summary: the 24 files added, any cross-link or image decisions (esp.
`consequence-setting`), confirmation the build is clean, and 2–3 short script excerpts you
think are the strongest so Andre can spot-judge the voice. Then STOP. Phase 3 (the 7
remaining situations + backfilling `situations:` links onto the pattern pages) is a
separate prompt after Andre reviews the tone across the batch.
