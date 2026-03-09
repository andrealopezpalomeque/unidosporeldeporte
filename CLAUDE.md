# CLAUDE.md — Fundación Unidos por el Deporte

> This file is the single source of truth for AI-assisted development on this project.
> Claude Code reads it automatically at the start of every session.

---

## Project overview

**Unidos por el Deporte** is a non-profit foundation based in Corrientes, Argentina, focused on promoting sports, physical activity, culture, and education. Founded November 8, 2024 by Juan José López Desimoni. Approved by Resolution Nº 000552/2025 (IGPJ Corrientes, May 12, 2025).

The website is the foundation's institutional web presence — community-driven, welcoming, and lean. Not a corporate site.

---

## Tech stack

| Layer        | Technology                                      |
| ------------ | ----------------------------------------------- |
| Frontend     | Nuxt 3 (Vue.js) + Tailwind CSS                  |
| Backend      | Express.js on Render                             |
| Database     | Firebase Firestore                               |
| Hosting      | Firebase Hosting (custom domain)                 |
| Images       | Cloudinary (folder: `uped/`)                     |
| Icons        | Lucide (`lucide-vue-next`), custom SVGs          |
| Fonts        | Google Fonts — BIZ UDPGothic (logo), DM Sans (body), Sora (headings) |
| Repo layout  | Monorepo: `/client` (Nuxt) + `/server` (Express) |

---

## Brand tokens

### Color palette

All colors must be defined as CSS variables or Tailwind config. **Never hardcode hex values in components.**

```css
:root {
  --color-white:  #fcfcfc;  /* Blanco — backgrounds, breathing space */
  --color-dark:   #4a4d55;  /* Grafito — primary text, titles, high contrast (replaces pure black) */
  --color-slate:  #647189;  /* Pizarra — secondary text, descriptions, metadata */
  --color-blue:   #7e96be;  /* Azul marca — primary brand color: logo, headers, institutional identity */
  --color-accent: #F4A261;  /* Durazno vibrante — action color: CTAs, donation buttons, impact highlights */
  --color-light:  #98bbf3;  /* Celeste — highlighted backgrounds, dark-mode accents, secondary UI */
}
```

#### Tailwind config mapping

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        white:  '#fcfcfc',
        dark:   '#4a4d55',
        slate:  '#647189',
        blue:   '#7e96be',
        accent: '#F4A261',
        light:  '#98bbf3',
      },
    },
  },
}
```

#### Color usage rules

- **Azul marca (`#7e96be`)** is the primary color. Logo, headers, institutional elements, main UI.
- **Durazno vibrante (`#F4A261`)** is the action color. CTAs ("Donar ahora", "Sumate", "Inscribite"), impact badges, campaign banners, urgency elements, gradients with Azul.
- **Never use Durazno on:** the logo, body text, large background surfaces, or directly next to Celeste without a neutral separator.
- **Accessibility:** Durazno on white is 2.5:1 — not for small text. Use Grafito text on Durazno backgrounds (4.8:1, WCAG AA). White text on Durazno only at 18px+ bold.
- **Dark mode** is the default. Light mode is optional toggle.

### Typography

| Role       | Font           | Weight        | Usage                                  |
| ---------- | -------------- | ------------- | -------------------------------------- |
| Logo       | BIZ UDPGothic  | Bold (700)    | Logo wordmark only                     |
| Headings   | Sora           | 700–800       | Section titles, h1–h3                  |
| Body       | DM Sans        | 400, 500, 600 | Paragraphs, labels, buttons, nav       |

Google Fonts import:
```
https://fonts.googleapis.com/css2?family=BIZ+UDPGothic:wght@700&family=DM+Sans:wght@400;500;600&family=Sora:wght@700;800&display=swap
```

### Logo

- **Icon:** Figurative mark — human figure with extended arms + sports flame (olympic torch / solidarity / movement).
- **Wordmark:** "unidospor" / "eldeporte" in BIZ UDPGothic Bold. Key words ("unidos", "deporte") in accent color, connector ("por el") in dark/white depending on background.
- **Logo icon color:** Always Azul marca on light backgrounds, Celeste on dark backgrounds, White on blue backgrounds. Never Durazno.
- **SVG source:** See `/client/assets/logo/` for icon and wordmark paths.

---

## Design system rules

1. **Dark mode first** (default), with optional light mode toggle
2. **No emojis in the UI** — cross-platform rendering issues. Use Lucide icons or custom SVGs.
3. **Component-based architecture** — each section is its own Vue component in `/client/components/`
4. **Mobile-first responsive design** — all layouts start from mobile breakpoints
5. **Subtle, clean aesthetic** — clarity over decoration. No gratuitous animations.
6. **Border radius:** 12–16px for cards and containers
7. **Shadows:** Subtle, using brand blue at low opacity (e.g., `0 8px 32px rgba(126, 150, 190, 0.1)`)
8. **Spacing scale:** Follow Tailwind's default spacing scale
9. **Transitions:** 0.2–0.4s ease for interactive elements, 0.7s ease for scroll reveals

---

## Site structure

### Pages

| Route             | Page                 | Purpose                                                    |
| ----------------- | -------------------- | ---------------------------------------------------------- |
| `/`               | Inicio (Home)        | Hero + tagline + pillars snapshot + CTA strip + news       |
| `/quienes-somos`  | Quiénes Somos        | Origin story, mission/vision, team, legal credentials      |
| `/que-hacemos`    | Qué Hacemos          | 5 action pillars (scrollable single page)                  |
| `/sumate`         | Sumate               | 3 audience paths: clubs, athletes/families, sponsors       |
| `/novedades`      | Novedades            | News and updates (blog-style, Firestore-backed)            |
| `/contacto`       | Contacto             | Contact form + location + social links                     |

### Landing page pattern (consistent across all my projects)

- **Header:** Centered logo (or logo + wordmark)
- **Hero:** Main visual + headline + tagline + primary CTA
- **Features / explanation:** What the foundation does (5 pillars as cards)
- **CTA section:** Audience-specific calls to action
- **Footer:** Minimal — social links, legal data, contact info

---

## Content & voice

All user-facing content is in **Argentine Spanish** (voseo, tildes, local expressions). Code, comments, and technical context are in English.

### Tone principles

- **Cercanos, no distantes.** "Nosotros" and "vos/ustedes". No bureaucratic language.
- **Concretos, no abstractos.** Real people, clubs, disciplines, and projects. No "sinergias" or "paradigmas".
- **Inclusivos, siempre.** Every piece reflects that sport is for everyone: youth, seniors, women, people with disabilities.
- **Optimistas con sustancia.** Energy and hope backed by concrete actions, data, or real plans.

### Tagline

Primary: **"El deporte nos une"** (institutional, universal, timeless)
Secondary: **"Movemos Corrientes"** (campaign use, local, energetic)

### Audience-specific voice

| Audience                  | How we talk to them                                                              |
| ------------------------- | -------------------------------------------------------------------------------- |
| Clubs & federations       | As peers. Respect their history, understand their challenges, offer tangible help |
| Athletes & families       | Warmth and empathy. Real stories, collective achievements, sport as life          |
| Sponsors & donors         | Professional with data. Clear objectives, impact metrics, association value       |

---

## Five action pillars

These are the foundation's core areas of work. They appear across the site.

1. **Articulación institucional** — Coordinating action between clubs, federations, government, and education
2. **Infraestructura y alto rendimiento** — Design and optimization of sports facilities, including a high-performance center
3. **Inclusión y acceso** — Incorporating women, people with disabilities, seniors, and youth into all sports
4. **Gestión de recursos** — Managing public and private funds for fields, equipment, training, and competitions
5. **Legislación y política deportiva** — Drafting legislation and reform proposals for long-term provincial sports policy

---

## Institutional data

Use these exact values whenever institutional info is needed:

```
Razón social:       Fundación Unidos por el Deporte
Constitución:       8 de noviembre de 2024
Fundador:           Juan José López Desimoni
Domicilio legal:    La Cruz 3149, Corrientes Capital
Resolución:         Nº 000552/2025 — IGPJ Corrientes (12 de mayo de 2025)
Expediente:         Nº 221-13-11-4403/2024
Registro:           Tomo 170, Folio 14/23, Legajo 2061
Duración:           99 años
Carácter:           Persona jurídica privada, sin fines de lucro, de bien común
Consejo:            Pte. Juan José López Desimoni · Sec. Carlos Alberto Insaurralde · Tes. Natalia Elena Godoy
```

---

## Development conventions

- **Commit messages:** In English, conventional commits (`feat:`, `fix:`, `chore:`, `docs:`)
- **Branch strategy:** `main` (production), `dev` (staging), feature branches from `dev`
- **Linting:** ESLint + Prettier (Nuxt defaults)
- **Image optimization:** All images through Cloudinary transforms before serving
- **SEO:** Each page has unique `<title>`, `<meta description>`, and Open Graph tags in Spanish
- **Analytics:** To be defined (likely Google Analytics or Plausible)

---

## File structure reference

```
/
├── CLAUDE.md              ← You are here
├── client/
│   ├── assets/
│   │   ├── logo/          ← SVG icon + wordmark paths
│   │   └── fonts/         ← Local font fallbacks if needed
│   ├── components/
│   │   ├── AppHeader.vue
│   │   ├── AppFooter.vue
│   │   ├── HeroSection.vue
│   │   ├── PillarsSection.vue
│   │   ├── ImpactSection.vue
│   │   ├── AudienceCTA.vue
│   │   ├── NewsSection.vue
│   │   └── ContactSection.vue
│   ├── layouts/
│   │   └── default.vue
│   ├── pages/
│   │   ├── index.vue
│   │   ├── quienes-somos.vue
│   │   ├── que-hacemos.vue
│   │   ├── sumate.vue
│   │   ├── novedades.vue
│   │   └── contacto.vue
│   ├── nuxt.config.ts
│   └── tailwind.config.js
├── server/
│   ├── index.js
│   └── routes/
└── package.json
```

---

## Reference documents

These documents contain the full brand and legal context. They live in the Claude Project knowledge and should be consulted for any ambiguity:

- **Narrativa de marca UPED** — Full brand narrative (mission, vision, voice, audiences, tagline, visual identity)
- **Paleta addendum v1.1** — Durazno vibrante addition, usage rules, accessibility notes, CSS variables
- **Resolución IGPJ 552/2025** — Official approval document
- **Project start document** — Shared architecture across all projects (Text the Check, El Gran Peón, Gasto Obra)

---

*Last updated: March 2026*
