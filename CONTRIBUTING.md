# Contributing to JU-Socialz

## Getting Started

1. Fork the repository.
2. Clone your fork.
3. Run `npm install`.
4. Copy `.env.example` to `.env.local` and fill in the required values.
5. Run `npm run dev` to start the development server.

## Code Style

- **TypeScript** — Strict mode enabled. All new code must be typed.
- **ESLint** — Run `npm run lint` before committing.
- **No comments** — Code should be self-documenting. Avoid inline comments unless absolutely necessary.
- **File naming** — PascalCase for components (`WorkGallery.tsx`), camelCase for utilities (`sanityFetch.ts`).

## Branch Strategy

- `main` — Production-ready code.
- Feature branches: `feat/<short-description>` (e.g., `feat/add-video-player`)
- Fix branches: `fix/<short-description>` (e.g., `fix/mobile-nav-overlap`)

## Commit Conventions

Use conventional commits:

```
feat: add Sanity-powered video gallery
fix: correct mobile padding on About page
refactor: extract shared animation variants
chore: update dependencies
docs: add CONTRIBUTING.md
```

## Pull Request Process

1. Create a branch from `main`.
2. Make your changes.
3. Ensure the project builds: `npm run build`.
4. Open a PR against `main`.
5. Include a clear description of the changes and why they're needed.
6. Reference any related issues.

## Development Tips

- Pages are **Server Components** by default. Use `"use client"` only when needed (state, effects, browser APIs).
- Sanity data is fetched server-side via `sanityFetch()`.
- Hardcoded fallback data is kept alongside Sanity-driven components for resilience.
- Use `imageUrl()` from `@/sanity/lib/fetch` for Sanity image URLs.
- Tailwind CSS v4 uses the CSS-first configuration. No `tailwind.config.js`. Customize in `globals.css`.

## Sanity Schemas

See [AGENTS.md](./AGENTS.md) for the full schema reference. When adding new schemas:

1. Create the schema file in `src/sanity/schemas/`.
2. Register it in `src/sanity/schemas/index.ts`.
3. Add a GROQ query in `src/sanity/lib/queries.ts`.
4. Import and use the query in the relevant page/component.

## Questions?

Open a [discussion](https://github.com/your-org/ju-socialz/discussions) or reach out to the team.
