# Hero Section Redesign Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rewrite `HeroSection.vue` from a centered single-column layout to a two-column split with a badge, larger headline, description paragraph, and a staggered photo collage on the right.

**Architecture:** Single Vue SFC rewrite — no new files, no new dependencies. The left column holds all text content; the right column holds the photo collage (4 absolute-positioned photos on desktop, 2-photo grid on mobile). Existing `BaseButton`, `reveal` animation pattern, and Tailwind brand tokens are reused as-is.

**Tech Stack:** Nuxt 3, Vue 3 (Composition API, `<script setup>`), Tailwind CSS, `lucide-vue-next`

---

## Chunk 1: Setup + Full Component Rewrite

### File Map

| Action | File | Responsibility |
|--------|------|----------------|
| Modify | `.gitignore` | Exclude brainstorm artefacts from git |
| Rewrite | `client/components/HeroSection.vue` | The entire hero section |

No new files are created.

---

### Task 1: Add `.superpowers/` to `.gitignore`

**Files:**
- Modify: `.gitignore`

- [ ] **Step 1: Open `.gitignore` and append the entry**

  The file currently ends with `.firebase/`. Add one line:

  ```
  .superpowers/
  ```

  Final file should look like:
  ```
  node_modules/
  .nuxt/
  .output/
  dist/
  .env
  *.log
  .DS_Store
  .firebase/
  .superpowers/
  ```

- [ ] **Step 2: Verify the entry was added**

  Run:
  ```bash
  grep -n 'superpowers' .gitignore
  ```
  Expected output (line number may vary):
  ```
  9:.superpowers/
  ```
  Any line containing `.superpowers/` is sufficient — the line number depends on any blank lines or comments already in the file.

- [ ] **Step 3: Commit**

  ```bash
  git add .gitignore
  git commit -m "chore: ignore .superpowers/ brainstorm directory"
  ```

---

### Task 2: Start the dev server

**Files:** none

- [ ] **Step 1: Start the dev server in the background**

  ```bash
  cd client && npm run dev
  ```

  Expected: server starts on `http://localhost:3000` (or next available port). Keep it running throughout implementation.

- [ ] **Step 2: Open the browser**

  Navigate to `http://localhost:3000`. Confirm the current hero renders (centered, logo at top, "Conectamos al deporte correntino").

---

### Task 3: Rewrite `HeroSection.vue`

**Files:**
- Rewrite: `client/components/HeroSection.vue`

This task replaces the entire file. Read the current file first, then replace it in full.

- [ ] **Step 1: Replace `client/components/HeroSection.vue` with the new implementation**

  Write the following content in its entirety:

  ```vue
  <template>
    <section class="relative min-h-screen flex items-center px-4 sm:px-8 lg:px-16 py-20 lg:py-40 overflow-hidden">

      <!-- Background: dark gradient -->
      <div class="absolute inset-0 bg-gradient-to-b from-dark via-dark to-dark/95" />
      <!-- Background: brand colour overlays -->
      <div class="absolute inset-0 bg-gradient-to-br from-blue/5 via-transparent to-light/5" />

      <!-- Two-column content grid -->
      <div class="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

        <!-- ── LEFT COLUMN: Text ── -->
        <div class="flex flex-col gap-8">

          <!-- Badge -->
          <div class="reveal">
            <span class="inline-flex items-center gap-2 border border-blue/35 rounded-full px-3 py-1 text-sm font-body font-medium text-light bg-blue/5 w-fit">
              <span class="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
              Fundación oficial · Corrientes, Argentina
            </span>
          </div>

          <!-- Headline -->
          <h1 class="reveal font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tighter">
            <span class="text-white">Conectamos</span><br>
            <span class="text-light">el deporte</span><br>
            <span class="text-white">correntino.</span>
          </h1>

          <!-- Description -->
          <p class="reveal font-body text-lg leading-relaxed text-slate max-w-md">
            Somos una fundación sin fines de lucro que articula
            <strong class="text-white/70 font-medium">clubes, federaciones y comunidades</strong>
            para fortalecer el deporte en Corrientes. Promovemos infraestructura, inclusión y políticas que llegan a todos.
          </p>

          <!-- CTAs -->
          <!-- BaseButton already applies inline-flex items-center gap-2 — no inner wrapper needed -->
          <div class="reveal flex flex-row gap-4">
            <BaseButton to="/quienes-somos" variant="primary">
              Conocé la fundación <ArrowRight :size="16" />
            </BaseButton>
            <BaseButton to="/sumate" variant="outline">
              Sumate
            </BaseButton>
          </div>

        </div>

        <!-- ── RIGHT COLUMN: Photo Collage ── -->
        <div class="relative h-48 lg:h-[420px]">

          <!-- Desktop: 4 staggered absolutely-positioned photos -->
          <!-- Photo 1 — top-left, large -->
          <div
            class="reveal absolute top-0 left-[4%] w-[52%] h-[54%] z-30 rounded-2xl overflow-hidden border border-white/[0.06] shadow-lg hidden lg:block"
            style="transition-delay: 0ms"
          >
            <img
              src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80&auto=format&fit=crop"
              alt="Fútbol"
              class="w-full h-full object-cover object-top"
            />
            <div class="absolute inset-0 bg-blue/10 pointer-events-none" />
          </div>

          <!-- Photo 2 — top-right -->
          <div
            class="reveal absolute top-[6%] right-0 w-[44%] h-[46%] z-20 rounded-2xl overflow-hidden border border-white/[0.06] shadow-lg hidden lg:block"
            style="transition-delay: 100ms"
          >
            <img
              src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&q=80&auto=format&fit=crop"
              alt="Atletismo"
              class="w-full h-full object-cover object-center"
            />
            <div class="absolute inset-0 bg-blue/10 pointer-events-none" />
          </div>

          <!-- Photo 3 — bottom-left -->
          <div
            class="reveal absolute bottom-0 left-0 w-[46%] h-[42%] z-20 rounded-2xl overflow-hidden border border-white/[0.06] shadow-lg hidden lg:block"
            style="transition-delay: 200ms"
          >
            <img
              src="https://images.unsplash.com/photo-1526676037777-05a232554f77?w=600&q=80&auto=format&fit=crop"
              alt="Básquet"
              class="w-full h-full object-cover object-center"
            />
            <div class="absolute inset-0 bg-blue/10 pointer-events-none" />
          </div>

          <!-- Photo 4 — bottom-right, large -->
          <div
            class="reveal absolute bottom-[2%] right-[4%] w-[50%] h-[48%] z-30 rounded-2xl overflow-hidden border border-white/[0.06] shadow-lg hidden lg:block"
            style="transition-delay: 300ms"
          >
            <img
              src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=600&q=80&auto=format&fit=crop"
              alt="Deporte inclusivo"
              class="w-full h-full object-cover object-top"
            />
            <div class="absolute inset-0 bg-blue/10 pointer-events-none" />
          </div>

          <!-- Mobile: 2-photo grid (photos 3 and 4 are not shown on mobile) -->
          <div class="grid grid-cols-2 gap-3 h-full lg:hidden">
            <div class="reveal relative rounded-2xl overflow-hidden border border-white/[0.06] shadow-lg h-48" style="transition-delay: 0ms">
              <img
                src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80&auto=format&fit=crop"
                alt="Fútbol"
                class="w-full h-full object-cover object-top"
              />
              <div class="absolute inset-0 bg-blue/10 pointer-events-none" />
            </div>
            <div class="reveal relative rounded-2xl overflow-hidden border border-white/[0.06] shadow-lg h-48" style="transition-delay: 100ms">
              <img
                src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&q=80&auto=format&fit=crop"
                alt="Atletismo"
                class="w-full h-full object-cover object-center"
              />
              <div class="absolute inset-0 bg-blue/10 pointer-events-none" />
            </div>
          </div>

        </div>
        <!-- end right column -->

      </div>
      <!-- end grid -->

      <!-- Scroll indicator -->
      <div class="reveal absolute bottom-8 left-1/2 -translate-x-1/2">
        <div class="w-6 h-10 rounded-full border-2 border-slate/40 flex items-start justify-center p-1.5">
          <div class="w-1.5 h-1.5 rounded-full bg-light animate-bounce" />
        </div>
      </div>

    </section>
  </template>

  <script setup lang="ts">
  import { ArrowRight } from 'lucide-vue-next'
  </script>
  ```

- [ ] **Step 2: Verify the file saved correctly**

  Run:
  ```bash
  grep -c 'reveal' client/components/HeroSection.vue
  ```
  Expected: `11` (badge=1, headline h1=2, description p=3, CTA div=4, desktop photo wrappers=5–8, mobile photo wrappers=9–10, scroll indicator=11).

- [ ] **Step 3: Check the browser at `http://localhost:3000`**

  Hot-reload should trigger automatically. Verify:
  - [ ] Two-column layout visible at desktop width (> 1024px): text left, collage right
  - [ ] Badge pill renders with accent dot and "Fundación oficial · Corrientes, Argentina"
  - [ ] Headline is 3 lines: "Conectamos" / "el deporte" / "correntino." — white/celeste/white
  - [ ] Description paragraph renders in slate, "clubes, federaciones y comunidades" is bold and lighter
  - [ ] "Conocé la fundación" button has an arrow icon to its right
  - [ ] 4 Unsplash sports photos visible on desktop, staggered
  - [ ] Scroll indicator (bouncing dot) at bottom center
  - [ ] Photos reveal with stagger on page load/scroll

- [ ] **Step 4: Check mobile layout (resize browser to ~375px width)**

  Verify:
  - [ ] Single column: text above, collage below
  - [ ] Only 2 photos visible in a 2-column grid, each `h-48`
  - [ ] No overflow or cramped padding at 375px
  - [ ] Buttons stack or wrap gracefully

- [ ] **Step 5: Check at tablet width (~768px)**

  Verify:
  - [ ] Still single column (two-column starts at `lg` = 1024px)
  - [ ] Heading scales correctly through sm/md breakpoints
  - [ ] No layout breaks

- [ ] **Step 6: Commit**

  ```bash
  git add client/components/HeroSection.vue
  git commit -m "feat: redesign hero section with two-column layout and photo collage"
  ```

---

## Notes for Implementer

- **No new packages needed.** `lucide-vue-next` is already in `client/package.json`.
- **`index.vue` is untouched.** The `<HeroSection />` call in `pages/index.vue` has no props and does not need updating.
- **The `.reveal` / `.revealed` CSS animation** is defined in `pages/index.vue`'s `<style>` block and applied globally. `HeroSection.vue` only needs to add `reveal` class names — no animation code goes into this file.
- **Unsplash images** are temporary. When Cloudinary images are ready, replace the `src` values on each `<img>` with Cloudinary transform URLs from the `uped/` folder.
- **The blue tint overlay** (`absolute inset-0 bg-blue/10`) inside each photo wrapper anchors to the wrapper's box because `position: absolute` on the wrapper already creates a containing block for child absolutely-positioned elements — no `relative` class is needed on the wrapper for this to work.
- **`pointer-events-none`** on the blue tint overlay prevents it from blocking clicks or hover states on photos.
- **Tagline "El deporte nos une"** was removed from the hero body per spec. It can be added to the footer or a section divider in a future task.
- **Optional grid texture** (faint 1px line grid at 60px intervals, referenced in spec line 19) is intentionally omitted from this implementation. It requires a `background-image` CSS value that can't be expressed cleanly with Tailwind utilities without hardcoding colour values — which violates the brand rule. It can be added later via a scoped CSS rule using the `--color-blue` CSS variable once that RGB variable is set up.
