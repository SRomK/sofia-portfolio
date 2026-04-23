# Sofia Romero Kamermann — Portfolio

Personal portfolio site built to showcase 4+ years of frontend work across enterprise platforms and startup environments.

**Live → [sofia-portfolio.vercel.app](https://sofia-portfolio.vercel.app)** *(update after deploy)*

---

## Stack

- **React 19 + TypeScript** — strict mode, functional components throughout
- **Vite 8** — dev server and bundler
- **Framer Motion** — scroll-triggered animations and page transitions
- **CSS Modules** — scoped styles, no utility-class framework
- Single source of truth for all content in `src/data/resume.ts`

## Run locally

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # type-check + bundle
```

## Structure

```
src/
  components/   # Nav, Cursor, SectionLabel, GradientBackground
  sections/     # Hero, About, Stack, Experience, Projects, Contact
  data/         # resume.ts — all portfolio content lives here
```
