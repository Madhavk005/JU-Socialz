import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { Hero } from "@/features/home/components/Hero";
import { WhoWeAre } from "@/features/home/components/WhoWeAre";
import { GlobalCta } from "@/components/ui/shared/GlobalCta";
import { Stats } from "@/features/home/components/Stats";
import { Verticals } from "@/features/home/components/Verticals";
import { ReelShowcase, type ReelData } from "@/features/home/components/ReelShowcase";
import { LifeAt, type LifeAtVideo } from "@/features/home/components/LifeAt";
import { Testimonials, type TestimonialData } from "@/features/home/components/Testimonials";
import { WorkMetrics, type Metric } from "@/features/work/components/WorkMetrics";

export const metadata: Metadata = generatePageMetadata({
  title: "Home",
  description: "The official media team of JECRC University — the creative pulse behind the campus. Explore our work, culture, and creators.",
  path: "/",
});

const STATS = [
  { value: 300, suffix: "+", label: "Crew Members (till date)" },
  { value: 500, suffix: "+", label: "Campaigns" },
  { value: 800, suffix: " M+", label: "Views" },
  { value: 5000, suffix: "+", label: "Films" },
];

const REELS: ReelData[] = [
  { id: "1", title: "Why JECRC?", category: "Campus Life", fileUrl: "/reels/why-jecrc.mp4" },
  { id: "2", title: "Dhruv Rathi @ JU Orient'25", category: "Event Coverage", fileUrl: "/reels/dhruv-rathi-ju-orient-25.mp4" },
  { id: "3", title: "Message from the LINKEDIN God", category: "Talk", fileUrl: "/reels/message-from-the-linkedin-god.mp4" },
  { id: "4", title: "Amit Ji @ JU", category: "Event Coverage", fileUrl: "/reels/amit-ji-ju.mp4" },
  { id: "5", title: "JU Rhythm Aftermovie'26", category: "Documentary", fileUrl: "/reels/ju-rhythm-aftermovie-26.mp4" },
  { id: "6", title: "4 Days Left Till Rhythm'26", category: "Campaign", fileUrl: "/reels/4-days-left-till-rhythm-26.mp4" },
  { id: "7", title: "Jackpot or Game Over", category: "Interactive", fileUrl: "/reels/jackpot-or-game-over.mp4" },
  { id: "8", title: "Mic Drop ft. Alia Bhatt", category: "Event Coverage", fileUrl: "/reels/mic-drop-ft-alia-bhatt.mp4" },
  { id: "9", title: "The Red Flag You Can't Ignore", category: "Campaign", fileUrl: "/reels/the-red-flag-you-cant-ignore.mp4" },
  { id: "10", title: "Vibe Check - Passed", category: "Trend", fileUrl: "/reels/vibe-check-passed.mp4" },
  { id: "11", title: "Yesss I got Placed.", category: "Placements", fileUrl: "/reels/yesss-i-got-placed.mp4" },
  { id: "12", title: "You Find Your Place", category: "Campus Life", fileUrl: "/reels/you-find-your-place.mp4" },
  { id: "13", title: "JU At Work", category: "Behind The Scenes", fileUrl: "/reels/ju-at-work.mp4" },
  { id: "14", title: "Aakhiri Chai", category: "Campus Life", fileUrl: "/reels/aakhiri-chai.mp4" },
  { id: "15", title: "B Praak Live", category: "Event Coverage", fileUrl: "/reels/b-praak.mp4" },
  { id: "16", title: "Home Away", category: "Campus Life", fileUrl: "/reels/home-away.mp4" },
  { id: "17", title: "Jaipur's Pink Just Got Brighter", category: "Campus Life", fileUrl: "/reels/jaipurs-pink-just-got-brighter.mp4" },
  { id: "18", title: "Once a JECRCian, Always a JECRCian", category: "Alumni", fileUrl: "/reels/once-a-jecrcian-always-a-jecrcian.mp4" },
  { id: "19", title: "Rhythm'26 This Era Begins Now", category: "Campaign", fileUrl: "/reels/rhythm26-this-era-begins-now.mp4" },
  { id: "20", title: "The Hype Is Real", category: "Trend", fileUrl: "/reels/the-hype-is-real.mp4" },
  { id: "21", title: "The Space Built For Storytellers", category: "Campus Life", fileUrl: "/reels/the-space-built-for-storytellers.mp4" },
  { id: "22", title: "Wednesday Just Got Legendary", category: "Event Coverage", fileUrl: "/reels/wednesday-just-got-legendary.mp4" },
  { id: "23", title: "Yeh Dil", category: "Campus Life", fileUrl: "/reels/yeh-dil.mp4" },
];

const BTS_VIDEOS: LifeAtVideo[] = [
  { title: "600 Reels", src: "/life-at/600-reels.mp4" },
  { title: "The Boss & Lady Boss", src: "/life-at/a-day-out-with-the-boss-and-the-lady-boss.mp4" },
  { title: "Amit Ji @ Socialz", src: "/life-at/amit-ji-with-team-socialz.mp4" },
  { title: "Another Day @ JU Socialz", src: "/life-at/another-day-at-ju-socialz.mp4" },
  { title: "Another Vlog", src: "/life-at/another-vlog.mp4" },
  { title: "BTS Vlog", src: "/life-at/bts-vlog-pt-dk.mp4" },
  { title: "Camera Settings", src: "/life-at/camera-settings.mp4" },
  { title: "Christmas @ BTS", src: "/life-at/christmas-celebration-bts.mp4" },
  { title: "Creative Lead at PEAK", src: "/life-at/creative-lead-at-peak.mp4" },
  { title: "Cricket Day w Captain Cool", src: "/life-at/cricket-day-with-captain-cool.mp4" },
  { title: "DIGITAL BLOG", src: "/life-at/digital-bloggggg.mp4" },
  { title: "Even IDK What This Is", src: "/life-at/even-idk-what-this-is-about.mp4" },
  { title: "Jai Socialz", src: "/life-at/jai-socialz.mp4" },
  { title: "Manjeet Ka Ladka", src: "/life-at/manjeet-ka-ladka-ft-our-cinematographers.mp4" },
  { title: "One More Vlog", src: "/life-at/one-more-vlog.mp4" },
  { title: "Prank Vlog Pt-2", src: "/life-at/prank-vlog-pt-2.mp4" },
  { title: "RHYTHM Day-1 VLOG", src: "/life-at/rhythm-day-1-vlogggggg.mp4" },
  { title: "Rhythm Fever", src: "/life-at/rhythm-fever.mp4" },
  { title: "That One Perfect Shot", src: "/life-at/that-one-perfect-shot.mp4" },
  { title: "Us Before Posting", src: "/life-at/us-before-posting-every-major-reel.mp4" },
  { title: "Vikrant Massey With US", src: "/life-at/vikrant-massey-with-us.mp4" },
  { title: "When Everyone Understands", src: "/life-at/when-everyone-understands-the-assignment.mp4" },
];

const TESTIMONIALS: TestimonialData[] = [
  {
    text: "SOCIALZ isn't a line on your resume. It's a feeling you'll keep talking about long after graduation.",
    author: "Kartik Saini",
    role: "Head — SM & Branding"
  },
  {
    text: "We don't just know editing software. We live inside it. Every frame is intentional.",
    author: "Yash Raj",
    role: "Creative Lead"
  }
];

const SOCIAL_METRICS: Metric[] = [
  { platform: "Facebook", value: "165K+", label: "Followers", link: "https://www.facebook.com/JecrcUniversity/", icon: "FaFacebook" },
  { platform: "Instagram", value: "114K+", label: "Followers", link: "https://www.instagram.com/jecrcuniversity?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", icon: "FaInstagram" },
  { platform: "Youtube", value: "65K+", label: "Subscribers", link: "https://www.youtube.com/@jecrcuvideo", icon: "FaYoutube" },
  { platform: "Linkedin", value: "60K+", label: "Followers", link: "https://www.linkedin.com/school/jecrcuniversity", icon: "FaLinkedin" },
];

export default function Home() {
  return (
    <>
      <Hero />
      <WorkMetrics metrics={SOCIAL_METRICS} />
      <WhoWeAre />
      <Stats statsProp={STATS} />
      <Verticals />
      <ReelShowcase reelsProp={REELS} />
      <LifeAt videosProp={BTS_VIDEOS} />
      <Testimonials quotesProp={TESTIMONIALS} />
              
      <GlobalCta />
    </>
  );
}