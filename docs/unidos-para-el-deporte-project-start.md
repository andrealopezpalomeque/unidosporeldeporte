# Unidos para el Deporte — Project Knowledge

## What Is This Project

Unidos para el Deporte is a new project that needs a webpage. The branding, visual identity, and web presence are being built from scratch.

---

## Shared Structure Across My Projects

This project follows the same architecture, workflow, and conventions I use across all my active projects. Here's the pattern:

### Tech Stack (same as Text the Check, Gasto Obra, El Gran Peón)

- **Frontend:** Nuxt 3 (Vue.js) + Tailwind CSS
- **Backend:** Express.js deployed on Render
- **Database:** Firebase Firestore
- **Hosting:** Firebase Hosting (with custom domain)
- **Image hosting:** Cloudinary (organized in folders per project)
- **Repo structure:** Monorepo with `/client` (Nuxt frontend) and `/server` (Express API) folders
- **Fonts:** Google Fonts (project-specific families to be defined)
- **Language:** All user-facing content in Argentine Spanish (vos, tildes, local expressions). Technical/code context in English.

### Brand-First Workflow (proven across all my projects)

The order that works best (learned from El Gran Peón and Text the Check):

1. **Brand Foundation** — Define logo, color palette, typography, and tone of voice. Produce a Brand Design Manual (PDF or markdown).
2. **CLAUDE.md** — Create a root-level `CLAUDE.md` in the repo with all brand tokens, architecture rules, and design system specs. Claude Code reads this automatically in every session.
3. **Landing Page** — Build a clean landing page on the custom domain as the first real commit. This establishes the brand online and gives something to share on social media.
4. **Full Product** — Build out the actual product features from there.

### Landing Page Structure (consistent pattern)

My landing pages follow this general structure:

- **Header:** Centered logo (or logo + wordmark)
- **Hero section:** Main image or visual + headline + tagline + primary CTA
- **Features / Product explanation:** What the product does, shown clearly (cards, toggles, previews)
- **CTA section:** Subscribe, waitlist, WhatsApp link, or contact form (depending on project phase)
- **Footer:** Minimal — social links, legal, and contact info

### Design Conventions

- Dark mode first (default), with optional light mode toggle
- Color tokens defined as CSS variables or Tailwind config (not hardcoded hex values)
- No emojis in the UI (cross-platform rendering issues)
- Use Lucide icons (via lucide-vue-next) or custom SVGs
- Component-based architecture: each section is its own Vue component
- Mobile-first responsive design
- Subtle, clean aesthetic — clarity over decoration

### Project Management

- GitHub repo with GitHub Projects for backlog/sprints (Iteration fields for sprint cycles)
- Notion board for client-facing task management (if working with a client)
- Claude Project here for centralized AI context

---

## Reference Projects

These are my active projects that share this exact structure. Use them as reference for conventions, patterns, and decisions:

- **Text the Check** (`github.com/andrealopezpalomeque/text-the-check`) — WhatsApp expense tracker with Nuxt dashboard. Has a full brand manual, CLAUDE.md, and a deployed landing page at textthecheck.app. Most mature brand system (Deep Trust palette, Nunito + DM Sans).
- **El Gran Peón** (`github.com/andrealopezpalomeque/el-gran-peon`) — E-commerce site with WhatsApp checkout. Brand manual was done before any code. Deployed at elgranpeon.com. Firebase Hosting + Render + Cloudinary.
- **Gasto Obra** — Construction expense tracker (WhatsApp bot + dashboard). Same stack as Text the Check. Currently in brand foundation phase.

---

## What Needs to Be Defined for Unidos para el Deporte

These are the project-specific decisions that still need to be made:

- [ ] Logo and visual identity
- [ ] Color palette
- [ ] Typography (font families)
- [ ] Tagline and tone of voice
- [ ] Domain name
- [ ] Landing page content and sections
- [ ] Brand Design Manual
- [ ] CLAUDE.md for the repo
- [ ] GitHub repo creation and initial setup

---

## How to Use This Project

Every conversation inside this Claude Project starts with this context. When we complete each phase (brand manual, landing page specs, CLAUDE.md), add the outputs here as project knowledge so future conversations always have the latest state.
