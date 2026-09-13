import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { GlobalCta } from "@/components/ui/shared/GlobalCta";
import { AboutHero } from "@/features/about/components/AboutHero";
import { OriginStory } from "@/features/about/components/OriginStory";
import { MissionVision } from "@/features/about/components/MissionVision";
import { CultureManifesto } from "@/features/about/components/CultureManifesto";
import { Timeline } from "@/features/about/components/Timeline";
import { Documentary } from "@/features/about/components/Documentary";
import { AboutClosing } from "@/features/about/components/AboutClosing";

export const metadata: Metadata = generatePageMetadata({
  title: "About",
  description: "The story of JU Socialz — from a vision to the official media team of JECRC University. Our mission, culture, and timeline.",
  path: "/about",
});

export default function AboutPage() {

  return (
    <>
      <main>
        <AboutHero />
        <OriginStory />
        <MissionVision />
        <CultureManifesto />
        <Timeline />
        <Documentary />
        <AboutClosing />
      </main>
      
      <GlobalCta />
    </>
  );
}
