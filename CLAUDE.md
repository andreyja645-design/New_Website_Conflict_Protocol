# Conflict Protocol Companion Website — Developer & AI Reference

> Companion static resource website for **The Conflict Protocol** training game. Built with Astro, TypeScript, and Vanilla CSS.

---

## 1. Maya AI Tactical HUD (Style 1) Design System

All pages, components, HUD headers, and interactive frames must adhere to the **Maya AI Tactical HUD (Style 1)** standard.

📖 **Full Visual Specification:** See [`MAYA_AI_STYLE_GUIDE.md`](./MAYA_AI_STYLE_GUIDE.md)

### Key Design Pillars
- **Typography:** `'Orbitron'` for headers/numbers, `'JetBrains Mono'` for HUD kickers/telemetry tags, `'Inter'` for body reading.
- **Palette:** Abyssal darks (`#06030b`, `#0e071a`), neon violet lines (`rgba(168, 85, 247, 0.28)`), and cyber accents (`#c084fc`, `#2fb8ff`, `#ff2d9b`).
- **HUD Elements:** All-caps monospace kickers (`MAYA AI // ...`), `.maya-dossier-frame` with corner reticles, and coach advisory cards (`MAYA COACH ADVISORY:`).

---

## 2. Architecture & Source of Truth

- **Authoritative Spec:** [`WEBSITE_V2_SPEC.md`](./WEBSITE_V2_SPEC.md) (Content model, sitemap, 14 patterns, 12 techniques, 8 situations).
- **Design Tokens:** [`src/styles/tokens.css`](./src/styles/tokens.css)
- **Global Atmosphere:** [`src/styles/global.css`](./src/styles/global.css)
- **Game Repository Reference:** `../MIndSHield Claude/mind-shield` (game personas, mechanics, and HUD telemetry).

---

## 3. Development Commands

- Start dev server: `npm run dev`
- Production build: `npm run build`
- Preview build: `npm run preview`
