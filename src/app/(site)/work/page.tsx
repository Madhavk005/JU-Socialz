import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { GlobalCta } from "@/components/ui/shared/GlobalCta";
import { WorkHero } from "@/features/work/components/WorkHero";
import { WorkGallery } from "@/features/work/components/WorkGallery";
import { WorkBts } from "@/features/work/components/WorkBts";

export const metadata: Metadata = generatePageMetadata({
  title: "Our Work",
  description: "Explore JU Socialz's portfolio — YouTube videos, reels, graphic design, photography, and behind-the-scenes content from JECRC University.",
  path: "/work",
});

const YOUTUBE_VIDEOS = [
  { id: "yt1", title: "JU Rhythm 2025 Aftermovie", category: "Youtube Videos", size: "col-span-12 md:col-span-8 md:row-span-2 aspect-video md:aspect-auto", video: "/youtube/ju-rhythm-2025-aftermovie.mp4" },
  { id: "yt2", title: "JECRC Orientation 2025", category: "Youtube Videos", size: "col-span-12 md:col-span-4 md:row-span-1 aspect-video md:aspect-auto", video: "/youtube/jecrc-orientation-2025.mp4" },
  { id: "yt3", title: "JU Socialz Story Behind the Screens", category: "Youtube Videos", size: "col-span-12 md:col-span-4 md:row-span-1 aspect-video md:aspect-auto", video: "/youtube/ju-socialz-story.mp4" },
  { id: "yt4", title: "Alia Bhatt & Sharvari Took Over JECRC", category: "Youtube Videos", size: "col-span-12 md:col-span-6 md:row-span-1 aspect-video md:aspect-auto", video: "/youtube/alia-bhatt-sharvari-jecrc.mp4" },
  { id: "yt5", title: "Homecoming 4.0 Where Champions Rise", category: "Youtube Videos", size: "col-span-12 md:col-span-6 md:row-span-1 aspect-video md:aspect-auto", video: "/youtube/homecoming-4.mp4" },
  { id: "yt6", title: "We Are JECRCians", category: "Youtube Videos", size: "col-span-12 md:col-span-8 md:row-span-2 aspect-video md:aspect-auto", video: "/youtube/we-are-jecrcians.mp4" },
];

const BTS_VIDEOS = [
  { id: "bts1", video: "/life-at/vikrant-massey-with-us.mp4" },
  { id: "bts2", video: "/life-at/when-everyone-understands-the-assignment.mp4" },
  { id: "bts3", video: "/life-at/that-one-perfect-shot.mp4" },
  { id: "bts4", video: "/life-at/rhythm-day-1-vlogggggg.mp4" },
  { id: "bts5", video: "/life-at/600-reels.mp4" },
];

export default function WorkPage() {
  return (
    <>
      <main>
        <WorkHero />
        <WorkGallery youtubeVideos={YOUTUBE_VIDEOS} />
        <WorkBts btsVideos={BTS_VIDEOS} />
      </main>

      <GlobalCta />
    </>
  );
}