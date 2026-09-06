# Gemini prompt — make `/play` canonical against the game

## Context

You are editing **`src/pages/play.astro`** in the Conflict Protocol website repo.

The page is well built. Structure, layout, styling and assets are all correct and **must not change**.
The problem is purely **factual**: several opponent names, one opponent's signature pattern, and the
entire "5 telemetry metrics" section describe a game that does not exist. A visitor who reads this
page and then opens the game finds different names and different readouts.

**The single source of truth is the game repo**, at:

```
C:\Users\andre\Desktop\mindshield\MIndSHield Claude\mind-shield
```

Specifically `src/lib/personas.ts` (opponent names/styles/descriptions) and
`docs/MECHANICS_NOTES.md` → the section headed `### HUD / readout (current)`.

Every canonical string you need is reproduced verbatim below, so you do **not** need to open the game
repo. But if anything below contradicts those two files, **those two files win**.

---

## RULES

1. **Do not change any CSS, class names, section order, layout, or asset paths.** This is a copy edit.
2. **Do not restructure the page.** No new sections, no removed sections except where Task 2 says so.
3. Keep the existing Maya AI Tactical HUD (Style 1) voice — caps kickers, HUD tags, neon accents.
4. Do not invent new numbers, mechanics, or opponent traits. If a fact is not below, leave it out.
5. Change only `src/pages/play.astro` (plus the one config file named in Task 4).
6. Do not run a build or commit. Leave the changes in the working tree and report what you changed.

---

## TASK 1 — Replace the `opponentCards` array

In the frontmatter of `src/pages/play.astro` (between the `---` fences at the top), replace the whole
`opponentCards` array with exactly this:

```js
const opponentCards = [
  {
    name: "The Toxic Boss",
    slug: "scope-creep",
    role: "EXPLOITATION & SHAMING",
    line: "Owns your calendar, your credit, and your confidence — every push framed as loyalty, every refusal treated as a career threat.",
    image: "/assets/play/character-boss.png",
    patternLink: "/patterns/scope-creep/",
    patternLabel: "Learn the Scope Creep pattern ➔"
  },
  {
    name: "The Gaslighter Friend",
    slug: "gaslighting",
    role: "COVERT GASLIGHTING",
    line: "Kyra — your closest friend, slowly making you the unreliable one. Every distortion wrapped in \"I'm telling you this because I actually care.\"",
    image: "/assets/play/character-gaslighter.png",
    patternLink: "/patterns/gaslighting/",
    patternLabel: "Learn the Gaslighting pattern ➔"
  },
  {
    name: "The Guilt-Trip Parent",
    slug: "guilt-trip",
    role: "EMOTIONAL BLACKMAIL",
    line: "They gave up everything for you — and they'll remind you of it forever. The sigh, the comparison, the childhood sacrifice surfaced at exactly the wrong moment.",
    image: "/assets/play/character-parent.png",
    patternLink: "/patterns/guilt-trip/",
    patternLabel: "Learn the Guilt Trip pattern ➔"
  },
  {
    name: "The Narcissistic Partner",
    slug: "silent-treatment",
    role: "DEVALUATION & GRANDIOSITY",
    line: "Every win you share becomes a threat. Every gift is almost right. Every silence is a punishment.",
    image: "/assets/play/character-narcissist.png",
    patternLink: "/patterns/silent-treatment/",
    patternLabel: "Learn the Silent Treatment pattern ➔"
  }
];
```

### Why each change (do not skip these — they are the point of the task)

**`"The Gaslighter"` → `"The Gaslighter Friend"`.** The game's canonical name. The word *Friend*
carries the entire emotional hook: the game's own description is *"Kyra — your closest friend, slowly
making you the unreliable one."* A stranger gaslighting you is a scenario; your best friend doing it
is the reason someone plays. Every other card in this section names a relationship. This one named
only a behavior.

**`"The Covert Narcissist"` → `"The Narcissistic Partner"`.** Two errors in one string:
- The game's narcissist has `style: "Devaluation & Grandiosity"` — **grandiose, the opposite of covert.**
- "Covert" actually belongs to the *other* character: the Gaslighter Friend's real style string is
  literally `"Covert Gaslighting"`. The word had been moved onto the one opponent it does not describe.
- "Partner" also restores the relationship, which the old line never stated.

**`"The Guilt-Tripping Parent"` → `"The Guilt-Trip Parent"`.** Exact canonical spelling.

**Narcissist `patternLink` `/patterns/darvo/` → `/patterns/silent-treatment/`.** DARVO is not this
opponent's move. The game's narcissist attack line is *"Verbal Acrobatics — devalues your wins,
demands admiration, weaponizes silence."* Level 1 is concern-trolling a promotion; Level 5 is the full
cold-shoulder treatment. Silent treatment is the honest match. (Separately, the AI layer deliberately
does **not** scope DARVO to any persona, so it is nobody's signature.)

**All four `role` tags now come from the game's own `style` field**, so they cannot drift again.

### Canonical reference — the four personas, verbatim from `src/lib/personas.ts`

| id | `name` | `style` | `attack` |
|---|---|---|---|
| `boss` | The Toxic Boss | Exploitation & Shaming | Corporate Coercion — scope creep, credit theft, public shaming for 'team spirit'. |
| `husband` | The Gaslighter Friend | Covert Gaslighting | "I'm just being honest" — rewrites your memories, mocks then minimizes, and tests your loyalty. |
| `parent` | The Guilt-Trip Parent | Emotional Blackmail | Heart-String Pull — sacrifices, sighs, comparisons, weaponized childhood memories. |
| `narcissist` | The Narcissistic Partner | Devaluation & Grandiosity | Verbal Acrobatics — devalues your wins, demands admiration, weaponizes silence. |

Full `description` strings, if you need more material:

- **Boss:** "He owns your calendar, your credit, and your confidence — or tries to. Boundary-setting here means holding the line when every push is framed as loyalty, and every refusal is treated as a career threat. Five escalating confrontations: from the Friday night 'quick favour' to the promotion that will never come."
- **Gaslighter Friend:** "Kyra — your closest friend, slowly making you the unreliable one. Every distortion comes wrapped in \"I'm telling you this because I actually care.\" Five levels: from a rewritten plan to a loyalty ultimatum."
- **Guilt-Trip Parent:** "They gave up everything for you — and they'll remind you of it forever. Guilt here isn't anger, it's a slow drip: the sigh, the comparison to your cousin, the childhood sacrifice surfaced at exactly the wrong moment. Five levels: from holiday guilt to the ultimate loyalty test."
- **Narcissistic Partner:** "Every win you share becomes a threat. Every gift is almost right. Every silence is a punishment. This is the partner who needs to be the most important person in the room — and will quietly dismantle you to stay there. Five levels: from subtle devaluation to the full cold-shoulder treatment."

### Also check (visual, not code)

`public/assets/play/character-gaslighter.png` — **Kyra is a woman.** If the current image shows a man,
flag it in your report. Do not swap the file yourself.

---

## TASK 2 — Rewrite the "THE 5 TELEMETRY METRICS" block

This is the most inaccurate section on the page. It presents five parallel scored metrics —
FRAME, HEAT, COMPOSURE, RUPTURE, LEVERAGE — and the game has no such thing.

### What the game actually shows on screen

From `docs/MECHANICS_NOTES.md` → `### HUD / readout (current)`:

1. **HEAT** — a live bar, running through **five named stages**:

   | Stage | Range | Per-turn composure effect |
   |---|---|---|
   | COMPOSED | 0–24 | +1 (recovers) |
   | FRICTION | 25–49 | −1 |
   | HEATED | 50–74 | −2 |
   | VOLATILE | 75–99 | −3 |
   | RUPTURE | 100 | −4 |

2. **STANDING** — a live bar **whose name changes per opponent**:
   - **leverage** on the Toxic Boss
   - **rapport** on the Gaslighter Friend and the Guilt-Trip Parent
   - **supply** on the Narcissistic Partner

3. **COMPOSURE** — **not a bar.** A compact numeric badge under Maya's composer portrait. Clicking it
   opens an info modal.

4. **SCORE** and **TURN** — separate coloured tiles. Score is raw, with no `/100` cap.

### The two hard errors to fix

- **RUPTURE is not a fifth metric — it is the top stage of the HEAT bar.** Listing it as `STAT // 04`
  beside `STAT // 02 HEAT` makes the section contradict itself.
- **LEVERAGE is not a universal metric — it is what the standing bar is called on the Boss only.** A
  player facing the narcissist sees "supply" instead. Promising "leverage" to everyone is a broken
  promise for three opponents out of four.

### What to write instead

Replace the five-card grid with an honest one. Suggested shape (adapt the copy to the page's voice,
keep the same card component and styling):

- Retitle the block from `THE 5 TELEMETRY METRICS` to something truthful — e.g.
  **`WHAT THE GAME ACTUALLY TRACKS`**.
- **Three readout cards:** HEAT (the bar), STANDING (the bar, and say plainly that it is named
  leverage / rapport / supply depending on who you are facing — that is a *feature*, it means each
  opponent has a different currency), COMPOSURE (the badge under the composer).
- **One card, or a horizontal strip, for the heat ladder**: COMPOSED → FRICTION → HEATED → VOLATILE →
  **RUPTURE**. This is the most dramatic true thing on the page and it currently isn't on it at all.

**The truth is better marketing than the invented version.** "Heat climbs through five stages and the
last one is called RUPTURE" beats a flat list of five metrics, and a player will actually find it.

---

## TASK 3 — Remove the invented deltas

In the "COMBAT LOOP" strip and the comparison card, these numbers appear:

```
FRAME −12      HEAT +18
```

They were made up. Per-turn composure loss is dynamically capped between 10 and 20, and +18 heat in a
single turn sits at the very top of the real range.

Either:
- **(preferred)** replace them with real numbers taken from an actual saved level report, or
- drop the digits and keep the shape (`FRAME ▼`, `HEAT ▲`).

Do not invent replacement numbers.

---

## TASK 4 — Stop the localhost fallback from shipping

`src/pages/play.astro` line 5 currently reads:

```js
const gameUrl = site.gameUrl === "#practice-live" ? "http://localhost:8080" : site.gameUrl;
```

and `src/lib/site.ts` has:

```js
gameUrl: import.meta.env.PUBLIC_GAME_URL || "#practice-live",
```

**If `PUBLIC_GAME_URL` is not set at build time, every call-to-action on this page ships pointing at
`http://localhost:8080`** — a dead link for every visitor. This exact failure has now happened in three
separate versions of this project, and it is always the last unwired step.

Fix it so it cannot ship silently. Either:
- **(preferred)** throw at build time when `PUBLIC_GAME_URL` is unset, so the build fails loudly, or
- render the CTA as a disabled "Coming soon" state instead of a link.

**Never fall back to a localhost URL.** Also add `PUBLIC_GAME_URL` to `.env.example` with a comment
saying the build fails without it.

---

## TASK 5 — Clean up stray root files (low priority)

These untracked duplicates sit at the repo root and shadow the real files in `src/`:

```
play.astro
index-redesign.astro
start-here.astro
ContentCard.astro
index.html
card-option1-code.txt
card-option2-code.txt
```

Astro ignores them, but the next person editing `play.astro` will open the wrong one. Move them to a
`_scratch/` folder or delete them. **Confirm with the user before deleting anything.**

Also minor, in `src/pages/play.astro`: two section comments are both numbered `5.`, and one reads
`<!-- Ambient ambient glow orbs -->`.

---

## Report back

When done, list:
1. Every string you changed, old → new.
2. Whether `character-gaslighter.png` shows a woman.
3. Which option you took for Task 3 and Task 4.
4. Anything in the page you believe is still factually unverified against the game.
