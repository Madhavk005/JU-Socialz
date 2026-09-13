import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://jusocialz.jecrcu.edu.in'

const VERTICAL_SLUGS = [
  'cinematography', 'editing', 'graphic-design',
  'social-media', 'content-marketing', 'reel-creation', 'ai-automation'
]

const TEAM_SLUGS = [
  'kartik-saini', 'yash-raj', 'ansh-bhatt', 'ayush-yadav',
  'jay-aditya-sharma', 'krish-menaria', 'aditi-agrawal',
  'ankit-maji', 'azad-nagar', 'hitesh-nagar', 'madhav-kohli'
]

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: baseUrl, priority: 1 },
    { url: `${baseUrl}/about`, priority: 0.8 },
    { url: `${baseUrl}/work`, priority: 0.8 },
    { url: `${baseUrl}/team`, priority: 0.7 },
    { url: `${baseUrl}/join`, priority: 0.9 },
    { url: `${baseUrl}/maverick`, priority: 0.7 },
    { url: `${baseUrl}/ju-creators`, priority: 0.7 },
  ].map(p => ({ ...p, lastModified: new Date(), changeFrequency: 'monthly' as const }))

  const verticalPages = VERTICAL_SLUGS.map(slug => ({
    url: `${baseUrl}/verticals/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const teamPages = TEAM_SLUGS.map(slug => ({
    url: `${baseUrl}/teams/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }))

  return [...staticPages, ...verticalPages, ...teamPages]
}