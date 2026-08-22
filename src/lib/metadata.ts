import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://jusocialz.jecrcu.edu.in";

interface PageMeta {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
}

export function generatePageMetadata({ title, description, path, ogImage }: PageMeta): Metadata {
  const url = `${siteUrl}${path}`;
  const image = ogImage || "/logo.png";

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url,
      siteName: "JU Socialz",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
