# Maya AI // Tactical HUD (Style 1) Design System & Visual Reference Guide

> **Official Design Specification & Visual Identity Guide**  
> *Conflict Protocol Companion Web & Game Experience*  
> Standard: **Maya AI Tactical HUD (Style 1 Standard)**

---

## 1. Identity & Visual Persona

In **Conflict Protocol**, Maya AI is the tactical co-pilot and real-time combat coach. She is not a clinical counselor, therapist, or detached voice assistant. She is the experienced friend in your corner who sees manipulation tactics coming and equips you with immediate tactical responses.

### Key Visual Tenets
- **Tactical Sci-Fi HUD Atmosphere:** Clean dark surfaces, sharp neon edge accents, telemetry reticles, and terminal-grade monospace indicators.
- **Game-Universe Continuity:** Mirrors the aesthetic of the Conflict Protocol combat simulator without turning into a cluttered or unusable interface.
- **Clarity First:** While frames, glow borders, and kickers provide high-immersion cyber aesthetics, reading content remains comfortable, high contrast, and accessible.

---

## 2. Typography System

The Maya AI style uses a strict three-tier font hierarchy:

| Role | Font Family | Fallbacks | Typical Usage |
|---|---|---|---|
| **Display / Titles** | `'Orbitron'` | `-apple-system, sans-serif` | Hero headlines, section h1/h2 headings, score counters, modal headers |
| **Monospace / HUD** | `'JetBrains Mono'` | `monospace` | Kicker tags, terminal telemetry, status lines, badges, step chips |
| **Body / Copy** | `'Inter'` | `system-ui, -apple-system, sans-serif` | Explanations, dialogue scripts, tactical annotations, readable paragraphs |

### CSS Variables (`src/styles/tokens.css`)
```css
:root {
  --font-display: 'Orbitron', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --font-body: 'Inter', system-ui, -apple-system, sans-serif;
}
```

---

## 3. Color Token System

Maya AI Style 1 relies on deep violet/abyssal blacks elevated with vibrant cyber purples, neon magenta highlights, and cool telemetry cyan.

```css
:root {
  /* Style 1: Maya AI Tactical HUD Color Tokens */
  --bg: #06030b;                          /* Deepest background base */
  --bg-surface: #0e071a;                  /* Slightly raised surface */
  --panel: rgba(19, 10, 36, 0.85);        /* Standard card/panel background */
  --panel-elevated: rgba(28, 15, 52, 0.92);/* Elevated overlays & modal bodies */
  
  /* Borders & Gridlines */
  --line: rgba(168, 85, 247, 0.28);       /* Soft purple HUD line */
  --line-strong: rgba(168, 85, 247, 0.65); /* Focused/active neon border */

  /* Text Tiers */
  --text: #f8fafc;                         /* Primary bright text */
  --text-soft: #e2e8f0;                    /* Secondary body text */
  --muted: #94a3b8;                        /* Monospace meta & subtitles */

  /* Primary Brand Accents */
  --accent: #c084fc;                       /* Maya primary bright purple */
  --accent-glow: #a855f7;                  /* Core glow pulse */
  --accent-cool: #2fb8ff;                  /* Cyan tactical telemetry & counters */
  --magenta: #ff2d9b;                      /* Neon magenta alert & secondary action */

  /* Status Indicators */
  --emerald: #10b981;                      /* Composure / successful recovery */
  --warning: #f59e0b;                      /* Friction / cautionary alert */
  --danger: #f43f5e;                       /* Rupture / critical failure */

  /* Atmospheric Shadows */
  --shadow: 0 22px 55px rgba(0, 0, 0, 0.85);
  --shadow-glow: 0 0 35px rgba(168, 85, 247, 0.35);
}
```

---

## 4. Background Atmosphere & Lighting

Every Maya AI tactical page uses a layered viewport background composed of a cyber dot matrix and three atmospheric radial lighting pools:

```css
body {
  background-color: #06030b;
  background-image:
    /* Layer 1: 32px x 32px cyber dot grid */
    radial-gradient(rgba(168, 85, 247, 0.12) 1px, transparent 1px),
    /* Layer 2: Top-left purple atmospheric orb */
    radial-gradient(circle at 12% 8%, rgba(168, 85, 247, 0.16), transparent 34rem),
    /* Layer 3: Top-right magenta telemetry flare */
    radial-gradient(circle at 88% 18%, rgba(255, 45, 155, 0.12), transparent 36rem),
    /* Layer 4: Center cyan deep glow */
    radial-gradient(circle at 50% 60%, rgba(47, 184, 255, 0.08), transparent 42rem),
    /* Layer 5: Vertical base gradient */
    linear-gradient(180deg, #07030d 0%, #0d0618 35%, #08040f 70%, #050209 100%);
  background-size: 32px 32px, 100% 100%, 100% 100%, 100% 100%, 100% 100%;
  background-attachment: fixed;
}
```

### Signature Text Gradient
Headlines and high-priority kicker highlights utilize the signature purple-to-magenta dual gradient:
```css
.title-gradient-highlight {
  background: linear-gradient(135deg, #c084fc 0%, #ff2d9b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 25px rgba(168, 85, 247, 0.4);
}
```

---

## 5. Signature HUD Components & Patterns

### 1. Monospace Status Strip & Kickers
Every major screen or module starts with an all-caps telemetry string separated by `//`:
```html
<div class="hud-status-strip">
  <span class="hud-mono-tag">MAYA AI // TACTICAL CATALOG // BEHAVIORAL PATTERNS</span>
  <span class="hud-mono-meta">SYSTEM STATUS: LIVE</span>
</div>
```
```css
.hud-mono-tag {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent);
  background: rgba(192, 132, 252, 0.1);
  border: 1px solid rgba(192, 132, 252, 0.35);
  padding: 4px 10px;
  border-radius: 4px;
}
```

### 2. Maya Dossier Frame (`.maya-dossier-frame`)
Used for combat debriefs, sidebar intel, and tactical telemetry blocks. It features translucent glass panels bordered by thin purple lines with corner reticle accents:
```css
.maya-dossier-frame {
  background: var(--panel);
  border: 1px solid var(--line);
  box-shadow: var(--shadow), var(--shadow-glow);
  backdrop-filter: blur(16px);
  position: relative;
  border-radius: 8px;
}

.maya-dossier-frame::before {
  content: "";
  position: absolute;
  top: -1px; left: -1px;
  width: 12px; height: 12px;
  border-top: 2px solid var(--accent);
  border-left: 2px solid var(--accent);
}
```

### 3. Maya Coach Advisory Card
Used within combat situation breakdowns to deliver immediate tactical advice:
```html
<div class="maya-coach-card">
  <div class="coach-header">
    <span class="coach-pulse-dot"></span>
    <span class="coach-label">MAYA COACH ADVISORY:</span>
  </div>
  <p class="coach-body">
    "Do not defend your motive here. Acknowledging their accusation as a debate validates their frame. Cut the line clean."
  </p>
</div>
```

### 4. Interactive Telemetry Metrics (Combat Engine)
Tactical telemetry metrics are represented with distinct color identities:
- **HEAT (Stage Ladder):**
  - `0–24` COMPOSED (Cyan / Emerald)
  - `25–49` FRICTION (Warning Amber)
  - `50–74` HEATED (Orange)
  - `75–99` VOLATILE (Rose)
  - `100` RUPTURE (Neon Red / Magenta)
- **STANDING:** Opponent-specific dynamic currency (*Leverage* for Boss, *Rapport* for Friend/Parent, *Supply* for Narcissist).
- **COMPOSURE:** Numeric reserve badge positioned beneath the Maya portrait frame.

---

## 6. Voice & Tone Rules

When writing in or alongside the Maya AI style:
1. **Direct, tactical, and grounded:** "Here is what they are doing. Say this."
2. **Never clinical or therapeutic:** Do not use phrases like *"It's important to process your feelings"*, *"Individuals often experience..."*, or *"Let us unpack this trauma."*
3. **Friend in your corner:** Confident, perceptive, a touch of wry humor towards the manipulative tactic, but never condescending to the reader.
4. **All-caps kickers & tactical tags:** Lead cards and sections with operational tags (`TACTICAL TELEMETRY`, `PRESSURE SCAN`, `COMBAT INTEL`).

---

## 7. Canonical File & Asset Registry

| Asset / File | Path | Description |
|---|---|---|
| **Maya Hero Portrait** | [`public/assets/play/maya-hero.webp`](file:///c:/Users/andre/Desktop/mindshield/Conflict%20Protocol%20Website%20Gemini/public/assets/play/maya-hero.webp) | Primary high-res tactical character portrait |
| **Design Tokens** | [`src/styles/tokens.css`](file:///c:/Users/andre/Desktop/mindshield/Conflict%20Protocol%20Website%20Gemini/src/styles/tokens.css) | Core CSS variables for palette, typography, and shadows |
| **Global Styles** | [`src/styles/global.css`](file:///c:/Users/andre/Desktop/mindshield/Conflict%20Protocol%20Website%20Gemini/src/styles/global.css) | Dot grid, gradients, and base HUD elements |
| **Interactive Mockup** | [`public/mobile-level-mockup.html`](file:///c:/Users/andre/Desktop/mindshield/Conflict%20Protocol%20Website%20Gemini/public/mobile-level-mockup.html) | Standalone mobile combat HUD mockup |
| **Homepage Command Center** | [`src/pages/index.astro`](file:///c:/Users/andre/Desktop/mindshield/Conflict%20Protocol%20Website%20Gemini/src/pages/index.astro) | Standard Style 1 homepage implementation |
| **Play Landing Page** | [`src/pages/play.astro`](file:///c:/Users/andre/Desktop/mindshield/Conflict%20Protocol%20Website%20Gemini/src/pages/play.astro) | Maya AI Tactical HUD (Style 1) landing page |
| **Dossier & Orientation** | [`src/pages/start-here.astro`](file:///c:/Users/andre/Desktop/mindshield/Conflict%20Protocol%20Website%20Gemini/src/pages/start-here.astro) | Tactical dossier and diagnostic layout |
| **Content Page Layout** | [`src/layouts/ContentPage.astro`](file:///c:/Users/andre/Desktop/mindshield/Conflict%20Protocol%20Website%20Gemini/src/layouts/ContentPage.astro) | `maya-tactical-page` frame & coach advisories |
