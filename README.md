<div align="center">

# Rifat Digital Domain 🌐

Modern personal portfolio website built with Vite + React + TypeScript, styled using Tailwind CSS and shadcn/ui (Radix primitives). It showcases hero, about, skills, experience, certifications, projects, and contact sections with an accessible, responsive, theme‑aware design.

</div>

## ✨ Features

- ⚡ Fast dev experience (Vite + SWC React plugin)
- 🧩 Reusable, accessible UI components (shadcn/ui over Radix UI)
- 🎨 Dark / Light theme support (next-themes)
- 📱 Mobile‑first responsive layout & navigation drawer
- 🧭 Client-side routing with `react-router-dom`
- 🧾 Forms + validation via `react-hook-form` + `zod`
- 🔔 Toast & dialog system (Radix + sonner)
- 📊 Data visualization (Recharts + custom Chart wrapper)
- 🔄 Async state & caching with React Query
- ♿ Accessibility primitives baked in (Radix)
- 🛠 Strict TypeScript setup + ESLint
- 🧪 Utility-first styling with Tailwind + class variance authority (CVA)

## 🗂 Project Structure (key parts)

```
.
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images & media
│   ├── components/        # Page section components
│   │   ├── ui/            # Generated/curated shadcn UI components
│   ├── hooks/             # Reusable React hooks
│   ├── lib/               # Utilities (e.g. className, helpers)
│   ├── pages/             # Route-level components (Index, NotFound)
│   ├── App.tsx            # Router & layout composition
│   ├── main.tsx           # App entry (ReactDOM root)
│   ├── index.css          # Tailwind base imports
│   └── vite-env.d.ts
├── tailwind.config.ts     # Tailwind customization
├── tsconfig*.json         # TypeScript configs (app + node)
├── vite.config.ts         # Vite build/dev config
└── package.json
```

## 🧪 Tech Stack

| Layer | Stack |
|-------|-------|
| Framework | React 18 + TypeScript |
| Tooling | Vite 5, SWC, ESLint |
| Styling | Tailwind CSS, tailwind-merge, CVA, Tailwind Animate |
| UI Primitives | Radix UI + shadcn/ui components |
| Theming | next-themes |
| Forms & Validation | react-hook-form + zod + @hookform/resolvers |
| State / Data | @tanstack/react-query |
| Charts | recharts |
| UX Enhancements | sonner (toasts), embla-carousel, dialog/drawer/menus |

## 🚀 Getting Started

### 1. Prerequisites

- Node.js 18+ (LTS recommended)
- npm (comes with Node) or Bun (lockfile present) — README uses `npm`.

Check versions:
```powershell
node -v
npm -v
```

### 2. Install Dependencies
```powershell
npm install
```

### 3. Run Development Server
```powershell
npm run dev
```
Open the printed local URL (usually http://localhost:5173).

### 4. Build for Production
```powershell
npm run build
```
Artifacts output to `dist/`.

### 5. Preview Production Build
```powershell
npm run preview
```

## 🧵 Styling & Theming

- Tailwind config lives in `tailwind.config.ts` with shadcn presets.
- Dark mode toggled using `next-themes` (class strategy). Ensure `<html class="dark">` toggles correctly.
- Utility classname merging handled via `tailwind-merge` and `clsx` in `lib/utils.ts`.

## 🧩 UI Components (shadcn/ui)

All reusable primitives reside in `src/components/ui/`. They wrap Radix parts with Tailwind styles and variant props (CVA). To add new ones:
1. Generate via shadcn CLI (if integrated) or copy an existing pattern.
2. Export through an index (optional) for easier imports.

## 🔄 Data & State

- React Query can cache and manage async data (no external API calls yet—ready for extension).
- Add providers (React Query + Theme) at a high level in `main.tsx` or `App.tsx` (verify placement when integrating queries).

## ✅ Forms & Validation

- `react-hook-form` controls inputs.
- `zod` schemas define validation logic, integrated via `@hookform/resolvers`.

Pattern example (conceptual):
```ts
const schema = z.object({ email: z.string().email() });
type FormData = z.infer<typeof schema>;

const form = useForm<FormData>({ resolver: zodResolver(schema) });
```

## 🧭 Routing

`react-router-dom` powers client-side routes. Current routes:
- `/` → `pages/Index.tsx`
- `*` → `pages/NotFound.tsx`

Extend by editing `App.tsx` and adding lazy-loaded components if needed.

## 📦 Available Scripts

| Script | Description |
|--------|-------------|
| dev | Start dev server (hot reload) |
| build | Production build (optimized) |
| build:dev | Build in development mode (useful for diffing) |
| preview | Preview built output locally |
| lint | Run ESLint across the project |

Run a script: `npm run <script>`.

## 🛡 Code Quality

- ESLint config at root (`eslint.config.js`).
- TypeScript strictness ensures safer refactors.
- Suggested additions (future): Prettier, Git hooks (lint-staged + Husky), CI workflow.

## 📸 Screenshots

Add screenshots or GIFs here to show responsive layouts. Example placeholder:
```
![Hero Section](public/placeholder.svg)
```

## 🚢 Deployment

Any static host/CDN works (output is plain static assets):

### Vercel
1. Import repo
2. Framework = Vite
3. Build Command: `npm run build`
4. Output Directory: `dist`

### Netlify
1. New site from Git
2. Build: `npm run build`
3. Publish directory: `dist`

### GitHub Pages
1. Build locally: `npm run build`
2. Deploy `dist/` via `gh-pages` branch (add `gh-pages` package if desired).

## 🔧 Customization Ideas

- Add blog section using MDX
- Integrate contact form backend (Formspree, Resend, serverless function)
- Animate section entrance with Framer Motion
- Add sitemap + meta tags for SEO improvements
- Track analytics (Plausible / Umami / GA4)

## 🗺 Roadmap (Example)

- [ ] Project filtering / tags
- [ ] Light performance audit (Lighthouse > 95 target)
- [ ] Add unit tests for utilities & hooks
- [ ] Add accessibility pass (axe + keyboard focus order)

## 🤝 Contributing

This is a personal portfolio, but improvements (typos, accessibility, structure) are welcome:
1. Fork
2. Create feature branch (`feat/awesome-thing`)
3. Commit with conventional message
4. Open PR

## 📄 License

MIT License (placeholder). Replace with your preferred license if needed.

```
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

## 🙋 FAQ

| Question | Answer |
|----------|--------|
| Why Vite over CRA? | Faster startup, modern tooling, smaller bundle defaults. |
| Why shadcn/ui? | Consistent, accessible, theme-able primitives without lock-in. |
| Can I add SSR? | Yes—would require migrating to Next.js / Remix or adding a node adapter. |

## 🧠 Design Principles

- Simplicity first: minimal global state
- Accessible by default: keyboard & ARIA
- Composable: small, focused components
- Theme-aware design tokens

## 🙌 Acknowledgements

- Radix UI & shadcn for component patterns
- React Query team for state tooling
- Tailwind CSS community

## 🔍 Quick Reference

| Need | Where |
|------|-------|
| Add a new section | `src/components/` (create + import in `pages/Index.tsx`) |
| Adjust theme | `tailwind.config.ts` / `ThemeProvider` setup |
| Add route | `App.tsx` (React Router config) |
| Add UI primitive | `src/components/ui/` |
| Global styles | `src/index.css` / `App.css` |
