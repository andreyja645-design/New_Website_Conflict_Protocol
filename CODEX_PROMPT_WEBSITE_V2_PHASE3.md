# Codex prompt — Conflict Protocol companion site V2, Phase 3 (the 7 remaining situations + cross-link backfill)

Copy everything below the line into Codex. Run it from inside this repo, same as before.
DO NOT run this until Phase 2 has been reviewed and approved by Andre.

---

## Fixes from the Phase 2 review (may be empty — apply these FIRST if present)

<!-- Andre/Claude: paste any corrections found while reviewing Phase 2 here.
     If empty, skip straight to the main job. -->

## Context

You are continuing a website you already built. Phase 1 scaffolded it; Phase 2 filled in
all 14 pattern pages and 12 technique pages. Both were reviewed and approved. Templates,
components, schemas, styling, and voice are LOCKED. Phase 3 is the final content phase:
the 7 remaining Situation pages — the highest-craft pages on the site — plus wiring the
cross-links that now become possible.

## Required reading FIRST

1. `WEBSITE_V2_SPEC.md` — re-read §3, §4 (the Situation page template specifically),
   §6, §7, §8 (voice), §12.
2. The approved Phase-1 situation exemplar — your structural and quality bar:
   `src/content/situations/saying-no-without-jade.mdx`
3. A couple of the strongest Phase-2 pattern pages, to keep the voice in your ear.

## The job — EXACTLY these 7 situation pages

Add one `.mdx` each to `src/content/situations/`. Suggested slugs (keep them unless a
clearly better short slug exists; they become permanent URLs):

1. `boss-keeps-expanding-the-ask` — Your boss keeps expanding the task after you agreed.
   Patterns: scope-creep, moving-goalposts. Quarry:
   `_quarry\toxic-boss-workplace-manipulation-tactics.astro`.
   Art candidates: `friday-555-quick-favor.webp`, `we-need-someone-flexible.webp`,
   `this-is-urgent.webp`.
2. `after-everything-ive-done` — Your parent's guilt trip when you set a limit.
   Patterns: guilt-trip, martyrdom. Quarry: `_quarry\guilt-trip-responses.astro` (already
   mined in Phase 2 — reuse for scene texture, don't repeat the pattern page).
   Art: `after-everything-ive-done.webp`, `i-sacrificed-everything.webp`.
3. `you-end-up-apologizing` — You raise something they did; somehow you end up
   apologizing (DARVO + gaslighting with a partner/ex).
   Patterns: darvo, gaslighting. Quarry: `_quarry\darvo-response.astro`.
   Art: `darvo-blame-reversal.webp`, `you-promised-you-dont-remember.webp`,
   `memory-trial-anchor.webp`.
4. `joke-at-your-expense` — A friend "jokes" at your expense in front of others.
   Patterns: public-shaming, minimizing. Art: `youre-too-sensitive-everyone-laughed.webp`,
   `minimizing-joke-boundary.webp`.
5. `you-froze-in-a-meeting` — You froze when challenged in a meeting: what to do in the
   10 seconds after, and the follow-up move that repairs it.
   Patterns: public-shaming (as applicable). Techniques: labeling, broken-record,
   buying time. Quarry: `_quarry\freezing-under-pressure.astro` (the richest source —
   but save most of it for `/start-here` in Phase 4; this page is the MEETING-specific
   slice). Art: `freeze-and-say-yes.webp`, `interrupted-in-meetings.webp`,
   `follow-up-after-public-criticism.webp`.
6. `silent-treatment-until-you-cave` — Someone goes silent until you give in.
   Patterns: silent-treatment. Quarry:
   `_quarry\stonewalling-silent-treatment-response.astro`.
   Art: `reopen-after-silence.webp`, `i-guess-i-dont-matter.webp`.
7. `youre-too-sensitive` — "You're too sensitive" — the tone-policing deflection that
   makes your reaction the topic instead of their behavior.
   Patterns: minimizing, gaslighting. Quarry: `_quarry\tone-policing-too-sensitive.astro`.
   Art: `they-make-your-tone-the-issue.webp`, `tone-main-issue.webp`.

Note #4 vs #7 overlap risk: #4 is the SOCIAL scene (audience present, the laugh, the
group dynamics); #7 is the DEFLECTION mechanic (any setting, your reaction becomes the
topic). Write them as clearly different pages; cross-link them to each other via the
patterns they share, not by repeating content.

All art candidates live in `public/assets/situations/`. Pick ONE per page (the one that
best matches the scene as written) and record the choice in `IMAGE_MAP_TODO.md`.

## Situation page requirements (per spec §4)

- The scene as a short recognizable dialogue → what's actually happening (link the
  patterns) → the script: a realistic worked conversation WITH annotations (why each line
  works) → variations (if they escalate / if they go silent) → GameCTA.
- 5+ verbatim scripts minimum; the worked conversation counts, but also give standalone
  lines the reader can lift.
- Frontmatter matches the exemplar: `title`, `slug`, `oneLiner`, `patterns` (slugs),
  `techniques` (slugs used in the scripts), `heroImage`, `gameHook`, `gameLevel` (LEAVE
  UNSET — Andre will map game levels himself later).
- Voice: same buddy register as the exemplars. These pages are the most story-like on
  the site — the scene-setting should feel like a memory the reader already has, not a
  case study. Each of the 7 scenes has a different flavor of dread; write from that.

## Cross-link backfill (second half of the job)

Now that all pages exist:
- Fill the `situations:` array in each pattern page's frontmatter with the situation
  slugs that feature it (from the mapping above — e.g. `scope-creep` gets
  `boss-keeps-expanding-the-ask`). Patterns not featured in any situation keep `[]`.
- Verify every situation's `patterns:`/`techniques:` slugs resolve (build will catch
  dead getEntry lookups only if the templates do lookups — check manually too).
- Do NOT add new link components or sections; use whatever the templates already render.

## Scope guard

No new components, routes, collections, schema changes, or utility files. 7 content
files + frontmatter edits to existing pattern files + README/IMAGE_MAP updates. That's
the whole diff, plus nothing.

## Verify before you finish

- `npm run build` clean; `/situations/` index shows all 8 cards with art.
- All cross-links resolve in both directions (pattern → situation, situation → pattern).
- README checklist updated (34 of 39 content pages done; remaining: /start-here, /about
  real content + homepage/privacy polish = Phase 4).
- Read situations #4 and #7 back to back — confirm they don't feel like the same page.
- Spot-check two pages at 375px.

## Deliverable + STOP

Summary: the 7 files, the art picks, the pattern-page frontmatter you touched, build
status, and the single strongest annotated exchange from the worked conversations so
Andre can judge the craft. Then STOP. Phase 4 (start-here, about, homepage final, launch
polish) is a separate prompt after review.
