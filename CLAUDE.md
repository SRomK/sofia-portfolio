# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # start dev server at http://localhost:5173 with HMR
npm run build      # type-check (tsc -b) then bundle to dist/
npm run lint       # run ESLint across all .ts/.tsx files
npm run preview    # serve the production build locally
```

There is no test runner configured yet. When one is added, document the single-test command here.

## Stack

- **React 19** with **TypeScript 6** — strict mode enabled in `main.tsx`
- **Vite 8** — bundler and dev server; config lives in `vite.config.ts`
- **ESLint 9** (flat config in `eslint.config.js`) — enforces `react-hooks` and `react-refresh` rules alongside `typescript-eslint/recommended`

## TypeScript config

The project uses **composite TypeScript** (`tsconfig.json` references `tsconfig.app.json` and `tsconfig.node.json`). App code lives under `src/` and is governed by `tsconfig.app.json`, which sets strict linting flags (`noUnusedLocals`, `noUnusedParameters`) and targets ES2023. `noEmit` is true — Vite handles transpilation, `tsc -b` is only for type-checking.

## Architecture intent

This is a **portfolio site** for a frontend developer. The planned sections are: profile/about, projects showcase, work experience, and skills. As the app grows, organize `src/` into:

```
src/
  components/   # reusable UI pieces
  sections/     # top-level page sections (About, Projects, Experience, Skills)
  data/         # static or API-fetched content (projects, jobs, bio)
  hooks/        # custom React hooks
```

`App.tsx` is the root component. Add routing (e.g. React Router) only if multi-page navigation is genuinely needed; otherwise keep it single-page with scroll-based sections.

## Key conventions to follow

- Prefer functional components and hooks — no class components
- Co-locate a component's CSS module or styled file next to the component file
- Keep `src/data/` as the single source of truth for portfolio content so components stay presentation-only
- When connecting to an external API, put the fetch logic in a custom hook under `src/hooks/`
