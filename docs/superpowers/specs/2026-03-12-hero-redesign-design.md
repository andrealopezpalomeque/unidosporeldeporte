# Hero Section Redesign — Design Spec
**Date:** 2026-03-12
**Status:** Approved

---

## Overview

Redesign `HeroSection.vue` from a centered full-screen layout to a two-column split layout: text+CTAs on the left, a staggered photo collage on the right. The existing content is preserved and enriched with a badge, a larger headline, and a description paragraph.

---

## Layout

- **Structure:** `grid-cols-2` on desktop, single column (text above, collage below) on mobile
- **Height:** `min-h-screen` retained; vertical centering via `items-center`
- **Padding:** `px-16 py-20 lg:py-40` (matches the reference component pattern)
- **Background:** Keep existing dark gradient (`from-dark via-dark`) + subtle blue/light radial overlays
- **Optional grid texture:** Very faint `1px` line grid at 60px intervals using `rgba(126,150,190,0.04)` — adds depth without distraction

---

## Left Column — Text

### Badge
- Pill-shaped border badge: `border border-blue/35 rounded-full px-3 py-1`
- Content: `"Fundación oficial · Corrientes, Argentina"`
- Small accent-colored dot (6px) as a leading visual marker
- Color: `text-light`, `bg-blue/6`

### Headline
- Font: `Sora`, weight `800`, size `text-4xl sm:text-5xl md:text-6xl lg:text-7xl`
- Letter spacing: `tracking-tighter`
- Three lines, alternating `text-white` / `text-light`:
  ```
  Conectamos       ← white
  el deporte       ← light (celeste)
  correntino.      ← white
  ```

### Description
- Font: `DM Sans` 400, `text-lg`, `leading-relaxed`, `text-slate`
- Max width: `max-w-md`
- Content:
  > Somos una fundación sin fines de lucro que articula **clubes, federaciones y comunidades** para fortalecer el deporte en Corrientes. Promovemos infraestructura, inclusión y políticas que llegan a todos.
- Key terms bolded in `text-white/70`

### CTAs
- Use existing `BaseButton` component — no new button component needed
- Primary: `variant="primary"` → `to="/quienes-somos"` → "Conocé la fundación" + arrow icon (`ArrowRight` from `lucide-vue-next`)
- Secondary: `variant="outline"` → `to="/sumate"` → "Sumate"
- Layout: `flex flex-row gap-4`

---

## Right Column — Photo Collage

### Structure
- `position: relative`, fixed height (`h-[420px]` on desktop)
- 4 photos, absolutely positioned with staggered offsets and z-indices
- Each photo: `border-radius: 14px`, subtle `border border-white/6`, `shadow-lg`
- Blue-tint overlay on each photo: `bg-blue/10` pseudo-element (ties to brand)

### Photo positions (desktop)
| Photo | Top | Left/Right | Width | Height | z-index |
|-------|-----|------------|-------|--------|---------|
| 1 (top-left, large) | 0 | left 4% | 52% | 54% | 3 |
| 2 (top-right) | 6% | right 0 | 44% | 46% | 2 |
| 3 (bottom-left) | auto, bottom 0 | left 0 | 46% | 42% | 2 |
| 4 (bottom-right, large) | auto, bottom 2% | right 4% | 50% | 48% | 3 |

### Images (Unsplash placeholders)
To be replaced with Cloudinary images later (`uped/` folder). Temporary Unsplash URLs:
- Photo 1: `photo-1574629810360-7efbbe195018` — soccer/fútbol
- Photo 2: `photo-1461896836934-ffe607ba8211` — atletismo
- Photo 3: `photo-1526676037777-05a232554f77` — básquet
- Photo 4: `photo-1612872087720-bb876e2e67d1` — deporte inclusivo

**No floating overlays or credential pills on the collage.** Clean presentation only.

### Mobile behavior
Collage moves below text. On small screens (`sm` and below), reduce to 2 photos or hide collage entirely — TBD during implementation (prefer showing 2 photos in a simple 2-col grid).

---

## Animations

- Keep existing `.reveal` / `.revealed` IntersectionObserver pattern from `index.vue`
- Apply `reveal` class to: badge, headline, description, CTA row
- Collage photos: stagger reveal with `transition-delay` increments (0ms, 100ms, 200ms, 300ms)

---

## What Changes vs Current Hero

| Current | New |
|---------|-----|
| Centered single column | Two-column grid |
| Logo icon at top (100px) | Logo removed from hero (lives in header) |
| Short tagline only ("El deporte nos une") | Full description paragraph added |
| No badge | Badge: "Fundación oficial · Corrientes, Argentina" |
| No visual on right | Staggered photo collage |
| Headline ~4xl–6xl | Headline up to 7xl, tracking-tighter |

The tagline "El deporte nos une" is removed from the hero body. It can live in the footer or as a section divider elsewhere on the page.

---

## Files Affected

- `client/components/HeroSection.vue` — full rewrite
- `client/pages/index.vue` — no changes needed (uses `<HeroSection />` as-is)
- `.gitignore` — add `.superpowers/` if not present

---

## Out of Scope

- No new npm packages required (`lucide-vue-next` already available)
- No shadcn/React components — this is a Nuxt 3 / Vue project
- No Cloudinary integration changes — Unsplash placeholders used now
- No changes to other page sections
