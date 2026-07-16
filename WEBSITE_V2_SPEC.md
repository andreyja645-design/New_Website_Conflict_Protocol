# Conflict Protocol — Companion Website V2 Spec

> One page of decisions. Everything built for this site must trace back to a line in this
> document. If a proposed page/section/feature isn't covered here, the answer is "not in V1."
>
> Status: DRAFT — needs Andre's sign-off on the 3 open decisions at the bottom before build.

---

## 1. Positioning (the spine)

**For people who freeze, fawn, or over-explain when someone pushes them —
a field guide to seeing the push coming and having words ready.**

One sentence for the homepage hero:
> "You always think of the right answer three hours later. This site puts it in your mouth
> while the conversation is still happening."

- Spotting manipulation patterns and handling difficult conversations are **sections under
  this spine**, not co-equal missions.
- The site is an independent, genuinely useful resource. The game is mentioned as
  "the place to practice this live" — never as the point of the page.

**Anti-goals (what this site is NOT):**
- Not a general psychology/manipulation encyclopedia.
- Not a blog with an editorial calendar.
- Not a funnel page wearing an article costume.
- Not therapy. (See §7, safety boundary.)

## 2. Audience

Primary: adults who repeatedly lose specific recurring conversations — with a boss,
a parent, a partner/ex, a "friend" — and search things like *"why do I freeze when someone
yells at me"*, *"what to say when someone guilt trips you"*, *"grey rock method examples"*.

They arrive anxious, often mid-conflict or right after one, usually on a phone,
often at night. Every design and copy decision serves that reader.

## 3. Content model — EXACTLY three types, mirroring the game

The site reuses the game's vocabulary 1:1. No new taxonomy is ever invented for the site.

| Type | Question it answers | Count (V1) | Source of truth |
|---|---|---|---|
| **Pattern** | "What are they doing to me?" | 14 | game `TACTICS` (tactics.ts) |
| **Technique** | "What do I do back?" | 12 | game `NLP_TOOLBOX` (nlp-toolbox.ts) |
| **Situation** | "What do I literally say in THIS scene?" | 8 | new, scripted scenarios |

Everything else (homepage, Start Here, About) is a **view over** these three types.
There is no fourth type. There will never be a `contentBatch2.ts`.

### The 14 Patterns
guilt-trip · martyrdom · DARVO · gaslighting · triangulation · moving-goalposts ·
scope-creep · public-shaming · credit-theft · minimizing · comparison ·
silent-treatment · loyalty-test · empathy-trap

### The 12 Techniques
grey rock · fogging · I-statement · broken record · aikido · validation · reframe ·
boundary · mirroring · labeling · tactic naming · consequence-setting

### The 8 V1 Situations (one flagship per audience quadrant + the top freeze scenarios)
1. Your boss keeps expanding the task after you agreed (scope creep at work)
2. Your parent's guilt trip when you set a limit ("after everything I've done for you")
3. Your partner/ex rewrites what happened and you end up apologizing (DARVO/gaslighting)
4. A friend "jokes" at your expense in front of others (public shaming / minimizing)
5. You froze in a meeting when challenged — what to do in the 10 seconds after
6. Someone gives you the silent treatment until you cave
7. "You're too sensitive" — the tone-policing deflection
8. Saying no without writing a paragraph of justification (the JADE trap)

Each Situation page cross-links only to the Patterns it contains and the Techniques it uses.

## 4. Page templates (fixed structure, no freeform)

**Pattern page:** What it looks like (2–3 real dialogue examples) → Why it works on you
(the freeze/fawn hook) → The tell (how to spot it in real time) → The trap (what NOT to do) →
Counters (links to 2–3 Techniques) → one Situation link → game CTA (§6).

**Technique page:** What it is in one paragraph → When it works / when it backfires
(the game's job/risk framing) → **5+ copy-paste scripts** (the core value; word-for-word
lines) → Common mistakes → Patterns this counters (links) → game CTA.

**Situation page:** The scene, written as a short dialogue the reader will recognize →
what's actually happening (pattern links) → the script: a realistic worked conversation
with annotations → variations (if they escalate / if they go silent) → game CTA
("this exact scene is a level in the game" where true).

Scripts are the differentiator. Every page must contain words the reader can say verbatim
tomorrow. A page without quotable lines doesn't ship.

## 5. V1 sitemap — 39 pages, hard cap

```
/                       homepage: spine statement, 3 entry doors (I freeze / Name the
                        pattern / Give me a script), featured situations
/start-here             the freeze-under-pressure orientation essay (salvage: old
                        "freezing-under-pressure" guide — this is the emotional front door)
/patterns/              index (card grid, game art)
/patterns/[14 slugs]    14 pattern pages
/techniques/            index (card grid, game art)
/techniques/[12 slugs]  12 technique pages
/situations/            index
/situations/[8 slugs]   8 situation pages
/about                  who makes this + the game, honestly
+ privacy, 404          (utility, not content)
```

14 + 12 + 8 + 5 = 39 pages. **V2 candidates (explicitly deferred, do not build):**
email course, glossary, pocket card, quizzes/drills (the game IS the drill), search,
comments, more situations beyond 8.

## 6. The game bridge (exact rules)

- One nav link: "Practice live →" (or similar), styled distinct from content nav.
- One CTA block per content page, always at the **end**, always the same component:
  pattern pages say "the game runs this tactic against you live"; technique pages say
  "the game scores your use of this move"; situation pages name the matching level when
  one exists.
- Zero mid-article promo. Zero popups. Zero "as seen in our game" asides.
- The site must remain fully valuable to someone who never clicks through.

## 7. Not-therapy boundary (non-negotiable, but small)

This is a skills site, not a therapy site — and it shouldn't sound like one anywhere
(see §8 voice). The boundary is one quiet footer line, not a tone:

- One short standing line in the Pattern/Situation page footer: this is communication
  training, not therapy or crisis support; if you're afraid of the person or facing
  threats/violence, link out to real resources. Written in the site's own voice
  ("This site teaches you to hold a conversation. If you're not safe, that's a different
  problem — get real help: …"), not in legal-disclaimer-ese.
- No diagnostic language about real people ("your mother is a narcissist") — the site
  names *behaviors*, not people. This matches the game's framing and keeps us honest.

## 8. Visual direction & voice — DECIDED (Andre, 2026-07-16)

**Keep the Conflict Protocol visual style.** This is the game's site and it should feel
like it: dark palette, the game's typography and color accents, and the card/poster art
(30+ finished images across `materials/Website` and `Website images/`) as pattern/
technique page heroes and index cards — they're the strongest asset.

Two readability concessions (style, not temperature, was the decision — the site still
has to be readable as long-form text on a phone at 1 a.m.):
- Body text gets a comfortable reading measure, generous size, and high contrast even
  inside the dark theme. Game-style chrome (chips, framed cards, accent borders) lives
  around the content, not inside paragraphs.
- No functional HUD cosplay — no fake meters/bars pretending to be game UI. Game
  *styling*, yes; game *interface*, no.

**Voice: friendly buddy, not counselor.** This is explicitly NOT a therapy website and
must never sound like one. The narrator is the friend in your corner who's seen these
games played a hundred times — direct, a bit wry, warm, zero clinical distance. Says
"here's what's actually happening" and "try saying this," never "individuals may
experience" or "it's important to acknowledge your feelings." Short sentences. Talks TO
the reader ("you"), like the game's coach does. Humor allowed; mockery of the reader
never; the manipulation patterns themselves are fair game for a little contempt.

## 9. Success metric

Primary: **organic search impressions/clicks on Pattern + Technique pages** (Search
Console), because the strategy is evergreen search intent → trust → game curiosity.
Secondary: game CTA click-through rate. Explicitly NOT chasing: pageviews via social,
publishing cadence, word counts.

## 10. Tech & repo

- **Fresh repository** at `C:\Users\andre\Desktop\mindshield\New_Website_Conflict`
  (already seeded with the curated `public\` asset library). The old
  `Website - Conflict Protocol` repo is retired as a codebase; it stays on disk as a
  content quarry. The old site is going offline — no URL redirects needed.
- **Keep Astro** (it was the right choice) + static output → Cloudflare Pages, same as
  before. No CMS, no database, no client JS beyond trivial enhancements.
- Content lives as one folder of markdown/MDX per type (`content/patterns/*.md` etc.),
  NOT as growing TypeScript data files. One file = one page.

## 11. Salvage plan (words, not architecture)

The old repo now lives at `C:\Users\andre\Desktop\mindshield\Failed - Website - Conflict
Protocol` (outside this workspace). The files needed for Phase 1 (plus the three
idea-reference files) are already copied into `_quarry\` at this repo's root; later
phases pull more from the old repo as needed — ask Andre to copy files in if the old
path is unreachable.

Port and rewrite into the new templates — nothing is copied wholesale:
- `guides/freezing-under-pressure` → `/start-here`
- `guides/grey-rock-method` → technique: grey rock
- `guides/stop-over-explaining-no-jade` → situation #8
- `guides/darvo-response`, `gaslighting-responses` → patterns: DARVO, gaslighting
- `guides/guilt-trip-responses` → pattern: guilt-trip
- `guides/stonewalling-silent-treatment-response` → pattern: silent-treatment
- `guides/tone-policing-too-sensitive` → situation #7
- `guides/toxic-boss-workplace-manipulation-tactics` → mine for situations #1/#5
- `src/data/situations.ts` + `usefulnessLayers.ts` → quarry for scripts/examples only

## 12. Scope discipline (the rules that prevent disaster #2)

1. No new content type, section, or taxonomy without editing THIS file first.
2. V1 ships at 39 pages. New page ideas go to a `V2_IDEAS.md` list, not into the build.
3. Every page uses one of the three fixed templates in §4. No bespoke layouts.
4. A page ships only if it contains verbatim-usable scripts.
5. One CTA per page, end of page, standard component (§6).

---

## Open decisions (need Andre before build)

1. **Domain/name.** Same domain as the game with a `/learn` path, a subdomain, or a
   separate domain? (Separate domain = cleaner "independent resource" positioning but
   splits SEO authority; subdomain/path = faster authority, more overtly "the game's site.")
2. **Success metric sign-off** (§9) — agree it's search-first, or is this primarily a
   conversion asset for the game launch?

~~3. Visual temperature~~ — **DECIDED 2026-07-16: keep the Conflict Protocol visual
style; voice is friendly-buddy, explicitly not therapy-flavored.** See §8.
