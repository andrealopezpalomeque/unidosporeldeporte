# Unidos por el Deporte

Institutional website for **Fundación Unidos por el Deporte**, a non-profit foundation in Corrientes, Argentina promoting sports, physical activity, culture, and education.

## Tech stack

- **Frontend:** Nuxt 3 (Vue.js) + Tailwind CSS
- **Backend:** Express.js (deployed on Render)
- **Hosting:** Firebase Hosting
- **Images:** Cloudinary

## Setup

### Client (Nuxt)

```bash
cd client
npm install
npm run dev
```

Runs at `http://localhost:3000`.

### Server (Express)

```bash
cd server
npm install
npm run dev
```

Runs at `http://localhost:3001`.

### Production build

```bash
cd client
npm run generate   # Static generation
# or
npm run build      # SSR build
```

## Deployment

- **Frontend:** Firebase Hosting — `firebase deploy --only hosting`
- **Backend:** Render — auto-deploys from `server/` directory

## Project structure

```
├── client/          # Nuxt 3 frontend
│   ├── components/  # Vue components
│   ├── pages/       # Route pages
│   ├── layouts/     # Layout templates
│   ├── assets/      # CSS, fonts
│   └── public/      # Static files (favicons, manifest)
├── server/          # Express.js API
├── firebase.json    # Firebase Hosting config
└── CLAUDE.md        # Full project context & guidelines
```

See [CLAUDE.md](./CLAUDE.md) for complete brand guidelines, design system, content rules, and institutional data.
