<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:sanity-architecture -->
# Sanity Architecture

## Schemas (src/sanity/schemas/)
- `socialMetric` — Social platform follower/subscriber counts
- `stat` — Homepage stats (projects, members, events, reach)
- `featuredReel` — "The Internet Saw This" reels (title, category, videoUrl, coverImage)
- `btsReel` — "Life at JU-Socialz" BTS videos (title, videoUrl, coverImage)
- `reel` — Reels (title, videoUrl, coverImage)
- `youtubeVideo` — YouTube videos (title, videoUrl, coverImage)
- `graphicDesign` — Graphic design portfolio (title, image, url, pdf)
- `photography` — Photography portfolio (title, image, url)
- `testimonial` — "The Culture" quotes with name + designation
- `maverickMember` — Maverick club team (name, role, photo)
- `juCreator` — JU Creators (type: mentor | core, name, role, course, photo)
- `teamMember` — JU Socialz team (name, role, gen, course, identity, socials, photo)
- `faq` — FAQ entries

## Data Flow
- Pages are **Server Components** that fetch from Sanity via `sanityFetch()` (src/sanity/lib/fetch.ts)
- Image URLs are resolved server-side via `imageUrl()` helper
- Components receive typed props; if Sanity returns empty data, hardcoded fallbacks are used
- The team page (`/team`) is an exception — it's a Client Component that fetches on mount (for static export compatibility)

## Sanity Studio Roles & Security
- Studio is configured at `ju-socialz-test.sanity.studio`
- Desk structure (`src/sanity/lib/structure.ts`) organizes content into logical groups: Homepage, Work, People, Other
- **Document-level (row-level) security is configured in the Sanity Dashboard** (Settings → Roles), NOT in code:
  - Admin — full access
  - Editor — can create/edit/publish all documents
  - Viewer — read-only access
- To restrict certain document types by role, create custom roles in the Sanity Dashboard and assign them to users

## Sanity Studio Roles & Security
- Studio is configured at `ju-socialz-test.sanity.studio`
- Desk structure (`src/sanity/lib/structure.ts`) organizes content into logical groups: Homepage, Work, People, Other
- **Document-level (row-level) security is configured in the Sanity Dashboard** (Settings → Roles), NOT in code:
  - Admin — full access
  - Editor — can create/edit/publish all documents
  - Viewer — read-only access
- To restrict certain document types by role, create custom roles in the Sanity Dashboard and assign them to users

## Content Updates
- Site is **fully static exported** (`next.config.ts` → `output: 'export'`)
- All pages are prerendered at build time
- Content is hardcoded as fallbacks in each component; Sanity queries run at build time but fall back to local data if unavailable
- To update content: rebuild & redeploy, or populate Sanity and remove fallbacks

## Seeding
Run `npm run seed` to push all hardcoded content into Sanity. Requires a write-capable API token.
<!-- END:sanity-architecture -->

<!-- BEGIN:monitoring-analytics -->
# Monitoring & Analytics

## Analytics Providers
- `src/components/ui/shared/Analytics.tsx` — Client component loaded in `(site)/layout.tsx`
- Supports **Plausible** (privacy-first, default) and **Google Analytics** (fallback)
- Configure via env vars:
  - `NEXT_PUBLIC_PLAUSIBLE_URL` — your domain for Plausible
  - `NEXT_PUBLIC_GA_ID` — Google Analytics measurement ID
- Both can be left empty; analytics is a no-op with a console.info message in development

## Metadata & SEO
- `src/lib/metadata.ts` — shared `generatePageMetadata()` helper used by all page files
- Root layout uses `title: { default, template }` so pages only need a short title
- Every page (`/`, `/work`, `/about`, `/teams`, `/team`, `/teams/[slug]`, `/maverick`, `/join`, `/ju-creators`, `/verticals/[slug]`, `/privacy`) exports its own `metadata` or `generateMetadata`
<!-- END:monitoring-analytics -->
