# Hero Section Redesign — Design Spec
**Date:** 2026-03-12
**Status:** Approved

---

## Overview

Redesign `HeroSection.vue` from a centered full-screen layout to a two-column split layout: text+CTAs on the left, a staggered photo collage on the right. The existing content is preserved and enriched with a badge, a larger headline, and a description paragraph.

---

## Layout

- **Structure:** `grid-cols-1 lg:grid-cols-2` — single column on mobile (text above, collage below), two columns on desktop
- **Height:** `min-h-screen` retained; vertical centering via `items-center`
- **Padding:** `px-4 sm:px-8 lg:px-16 py-20 lg:py-40` — responsive horizontal padding, never cramped at mobile widths
- **Background:** Keep existing dark gradient (`from-dark via-dark`) + subtle blue/light radial overlays
- **Optional grid texture:** Very faint `1px` line grid at 60px intervals using the Tailwind utility `bg-blue/[0.04]` — adds depth without distraction. No hardcoded hex values.

---

## Left Column — Text

### Badge
- Pill-shaped border badge: `border border-blue/35 rounded-full px-3 py-1`
- Content: `"Fundación oficial · Corrientes, Argentina"`
- Small accent-colored dot (6px) as a leading visual marker
- Color: `text-light`, `bg-blue/5`

### Headline
- Font: `font-heading` (Sora), weight `font-extrabold` (800), size `text-4xl sm:text-5xl md:text-6xl lg:text-7xl`
- Letter spacing: `tracking-tighter`, line height `leading-tight`
- Three lines, alternating `text-white` / `text-light`:
  ```
  Conectamos       ← text-white
  el deporte       ← text-light (celeste)
  correntino.      ← text-white
  ```
- **Note: copy change from current.** Current hero reads "Conectamos al deporte correntino" (single line). This spec restructures it into 3 lines and removes "al" to improve visual rhythm. This is an intentional content decision, not just a layout change.

### Description
- Font: `font-body` (DM Sans) 400, `text-lg`, `leading-relaxed`, `text-slate`
- Max width: `max-w-md`
- Content:
  > Somos una fundación sin fines de lucro que articula **clubes, federaciones y comunidades** para fortalecer el deporte en Corrientes. Promovemos infraestructura, inclusión y políticas que llegan a todos.
- Key terms (`clubes, federaciones y comunidades`) wrapped in `<strong class="text-white/70 font-medium">`

### CTAs
- Use existing `BaseButton` component — no new button component needed
- `BaseButton` renders only a `<slot />` — icons must be passed as slotted children alongside label text. `BaseButton` already applies `inline-flex items-center gap-2` in its base class, so **no additional wrapper is needed inside the slot**.
- Primary: `<BaseButton variant="primary" to="/quienes-somos">Conocé la fundación <ArrowRight :size="16" /></BaseButton>`
- Secondary: `<BaseButton variant="outline" to="/sumate">Sumate</BaseButton>`
- Layout: `flex flex-row gap-4`

---

## Right Column — Photo Collage

### Structure
- Container classes: `relative h-48 lg:h-[420px]` — `h-48` applies at mobile, `h-[420px]` on desktop
- 4 photos, absolutely positioned with staggered offsets and z-indices
- Each photo: `rounded-2xl` (14px radius), `border border-white/[0.06]`, `shadow-lg`
- Blue-tint overlay on each photo via an absolutely positioned `div` with `bg-blue/10` inside each photo wrapper
- Each photo `<img>`: `w-full h-full object-cover object-center`

### Photo positions (desktop, percentage-based for fluid scaling)
| Photo | Top | Left/Right | Width | Height | z-index | `object-position` |
|-------|-----|------------|-------|--------|---------|-------------------|
| 1 — top-left (large) | `top-0` | `left-[4%]` | `w-[52%]` | `h-[54%]` | `z-30` | `object-top` |
| 2 — top-right | `top-[6%]` | `right-0` | `w-[44%]` | `h-[46%]` | `z-20` | `object-center` |
| 3 — bottom-left | `bottom-0` | `left-0` | `w-[46%]` | `h-[42%]` | `z-20` | `object-center` |
| 4 — bottom-right (large) | `bottom-[2%]` | `right-[4%]` | `w-[50%]` | `h-[48%]` | `z-30` | `object-top` |

### Images (Unsplash placeholders)
To be replaced with Cloudinary images later (`uped/` folder). Temporary Unsplash URLs (append `?w=600&q=80&auto=format&fit=crop`):
- Photo 1: `photo-1574629810360-7efbbe195018` — fútbol
- Photo 2: `photo-1461896836934-ffe607ba8211` — atletismo
- Photo 3: `photo-1526676037777-05a232554f77` — básquet
- Photo 4: `photo-1612872087720-bb876e2e67d1` — deporte inclusivo

**No floating overlays or credential pills on the collage.** Clean presentation only.

### Mobile behavior
On `lg` and below, collage moves below the text column. Show only **photos 1 and 2** in a simple `grid grid-cols-2 gap-3`. Each photo wrapper inside the grid carries `h-48` to set its height. Photos 3 and 4 are hidden on mobile via `hidden lg:block` on their wrappers. This keeps the mobile layout light without hiding the visual entirely.

---

## Scroll Indicator

Keep the existing scroll indicator (bouncing dot in a pill border) at `absolute bottom-8 left-1/2 -translate-x-1/2`. It continues to work correctly centered at the bottom of the full-height section regardless of the two-column layout. Apply the `reveal` class to it as before.

---

## Animations

- Keep existing `.reveal` / `.revealed` IntersectionObserver pattern (defined in `index.vue` — no changes needed there)
- Apply `reveal` class to: badge, headline, description, CTA row, scroll indicator
- Collage photo wrappers each get `reveal` + an inline `style="transition-delay: Xms"`:
  - Photo 1: `0ms`
  - Photo 2: `100ms`
  - Photo 3: `200ms`
  - Photo 4: `300ms`

---

## What Changes vs Current Hero

| Current | New |
|---------|-----|
| Centered single column | Two-column grid (`lg:grid-cols-2`) |
| Logo icon at top (100px) | Logo removed from hero (lives in header) |
| Short tagline only ("El deporte nos une") | Full description paragraph added |
| No badge | Badge: "Fundación oficial · Corrientes, Argentina" |
| No visual on right | Staggered photo collage |
| Headline ~4xl–6xl, single line | Headline up to 7xl, 3 lines, `tracking-tighter` |
| "Conectamos al deporte correntino" | "Conectamos / el deporte / correntino." (copy change — removes "al") |
| Scroll indicator: kept | Scroll indicator: kept, same position |

The tagline "El deporte nos une" is removed from the hero body. It can live in the footer or as a section divider elsewhere on the page.

---

## Files Affected

- `client/components/HeroSection.vue` — full rewrite
- `client/pages/index.vue` — no changes needed (uses `<HeroSection />` as-is)

> **Important:** Add `.superpowers/` to `.gitignore` before committing. The visual brainstorm files live there and must not be tracked. Check first — if the entry is already present, skip.

---

## Out of Scope

- No new npm packages required (`lucide-vue-next` already available)
- No shadcn/React components — this is a Nuxt 3 / Vue project
- No Cloudinary integration changes — Unsplash placeholders used now
- No changes to other page sections
