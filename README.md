# JU-Socialz

The official media team website of JECRC University — a cinematic showcase of student creators, their work, and the culture behind the lens.

Built with **Next.js 16**, **Sanity CMS**, **Tailwind CSS v4**, and **Framer Motion**.

## Sections

- **Home** — Featured reels, behind-the-scenes, stats, testimonials, verticals
- **About** — Origin story, mission, timeline, documentary
- **Work** — Video gallery (YouTube, BTS), graphic design, photography, reels
- **Teams** — Leadership, core team, behind the vision
- **Join** — Application form, roles, FAQ, timeline
- **Verticals** — Cinematography, editing, graphic design, social media, content marketing, AI, reel creation
- **JU Creators** — Official creators community
- **Maverick** — Official media club

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| CMS | Sanity (GROQ queries, image URL builder) |
| Styling | Tailwind CSS v4, CSS `clamp()` fluid typography |
| Animation | Framer Motion, GSAP, Lenis (smooth scroll) |
| Deployment | Static export via `npm run build` (output: 'export') |
| Hosting | Hostinger (Node.js server) / Netlify |

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
git clone <repository-url>
cd ju-socialz
npm install
```

### Environment Variables

Copy `.env.example` to `.env.local` and fill in the values:

```bash
cp .env.example .env.local
```

Required variables:

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity project ID |
| `NEXT_PUBLIC_SANITY_DATASET` | Sanity dataset name |
| `SANITY_API_READ_TOKEN` | Sanity read token |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (for sitemap, SEO) |
| `GOOGLE_APPS_SCRIPT_WEBHOOK_URL` | Google Apps Script webhook for applications |

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Sanity Studio

```bash
npm run sanity:dev     # Local studio
npm run sanity:deploy  # Deploy to sanity.studio
```

### Seed Content

```bash
npm run seed
```

Pushes hardcoded content to your Sanity dataset. Requires a write-capable API token.

### Build

```bash
npm run build
```

Produces a static export in the `out/` directory.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (site)/             # Public routes
│   │   ├── about/
│   │   ├── join/
│   │   ├── ju-creators/
│   │   ├── maverick/
│   │   ├── team/
│   │   ├── teams/
│   │   ├── verticals/
│   │   └── work/
│   └── api/                # API routes
├── components/
│   ├── layout/             # Navbar, Footer, StickyCta
│   └── ui/                 # Shared UI components
├── features/
│   ├── about/              # About page components
│   ├── home/               # Home page components
│   ├── join/               # Join page components
│   ├── teams/              # Teams page components
│   └── work/               # Work page components
└── sanity/
    ├── lib/                # Client, fetch, queries, image URL
    └── schemas/            # Sanity document schemas
```

## Deployment

The project is configured for static export. Deployment is handled via:

- **Netlify** — `netlify.toml` configures Node 20, static export, and SPA redirect
- **Hostinger** — `server.js` provides a custom Node.js server for shared hosting
- **Sanity Studio** — Deployed separately via `sanity deploy`

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).

## License

[MIT](./LICENSE)
