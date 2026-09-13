"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PortfolioItem, bestOfIds } from "./gallery/layout";
import { GalleryFilters } from "./gallery/GalleryFilters";
import { PhotographyGrid } from "./gallery/PhotographyGrid";
import { BentoGrid } from "./gallery/BentoGrid";
import { GalleryLightbox } from "./gallery/GalleryLightbox";

interface YoutubeVideo {
  id: string;
  title: string;
  category: string;
  size: string;
  video: string;
}

interface WorkGalleryProps {
  youtubeVideos?: YoutubeVideo[];
}

const FALLBACK_YOUTUBE = [
  { id: "yt1", title: "JU Rhythm 2025 Aftermovie", category: "Youtube Videos", size: "col-span-12 md:col-span-8 md:row-span-2 aspect-video md:aspect-auto", video: "/youtube/ju-rhythm-2025-aftermovie.mp4" },
  { id: "yt2", title: "JECRC Orientation 2025", category: "Youtube Videos", size: "col-span-12 md:col-span-4 md:row-span-1 aspect-video md:aspect-auto", video: "/youtube/jecrc-orientation-2025.mp4" },
  { id: "yt3", title: "JU Socialz Story Behind the Screens", category: "Youtube Videos", size: "col-span-12 md:col-span-4 md:row-span-1 aspect-video md:aspect-auto", video: "/youtube/ju-socialz-story.mp4" },
  { id: "yt4", title: "Alia Bhatt & Sharvari Took Over JECRC", category: "Youtube Videos", size: "col-span-12 md:col-span-6 md:row-span-1 aspect-video md:aspect-auto", video: "/youtube/alia-bhatt-sharvari-jecrc.mp4" },
  { id: "yt5", title: "Homecoming 4.0 Where Champions Rise", category: "Youtube Videos", size: "col-span-12 md:col-span-6 md:row-span-1 aspect-video md:aspect-auto", video: "/youtube/homecoming-4.mp4" },
  { id: "yt6", title: "We Are JECRCians", category: "Youtube Videos", size: "col-span-12 md:col-span-8 md:row-span-2 aspect-video md:aspect-auto", video: "/youtube/we-are-jecrcians.mp4" },
];

const FALLBACK_OTHER = [
  { id: "c1", title: "Placement Carousel", category: "Graphic Design", size: "col-span-12 md:col-span-4 md:row-span-1 aspect-square md:aspect-auto", pdf: "/graphics/carousels/placement_carousel.pdf" },
  { id: "c2", title: "CRT Carousel", category: "Graphic Design", size: "col-span-12 md:col-span-4 md:row-span-1 aspect-square md:aspect-auto", pdf: "/graphics/carousels/crt_carousel.pdf" },
  { id: "c3", title: "Alumni Carousel", category: "Graphic Design", size: "col-span-12 md:col-span-4 md:row-span-1 aspect-square md:aspect-auto", pdf: "/graphics/carousels/alumni_carousel.pdf" },

  { id: "yt-thumb-1", title: "Maker's Carnival Thumbnail", category: "Graphic Design", size: "col-span-12 md:col-span-6 md:row-span-1 aspect-video md:aspect-auto", img: "/graphics/youtube-thumbnails/MAKER_S_CARNIVAL_3x.png" },
  { id: "yt-thumb-2", title: "Team Alpha Thumbnail", category: "Graphic Design", size: "col-span-12 md:col-span-6 md:row-span-1 aspect-video md:aspect-auto", img: "/graphics/youtube-thumbnails/TEAM_ALPHA_3x.png" },
  { id: "yt-thumb-4", title: "Dr. Ashok Sethi Speech", category: "Graphic Design", size: "col-span-12 md:col-span-4 md:row-span-1 aspect-video md:aspect-auto", img: "/graphics/youtube-thumbnails/NHH-ThumbnailsArtboard-1.png" },
  { id: "yt-thumb-6", title: "Yeh Dil Thumbnail", category: "Graphic Design", size: "col-span-12 md:col-span-4 md:row-span-1 aspect-video md:aspect-auto", img: "/graphics/youtube-thumbnails/Yeh-DilArtboard-2.png" },
  { id: "yt-thumb-7", title: "Freshers'2025", category: "Graphic Design", size: "col-span-12 md:col-span-4 md:row-span-1 aspect-video md:aspect-auto", img: "/graphics/youtube-thumbnails/freshers-2025.jpg" },

  { id: "rc-1", title: "Aftermovie", category: "Graphic Design", size: "col-span-12 md:col-span-4 md:row-span-2 aspect-[9/16] md:aspect-auto", img: "/graphics/reel-covers/Aftermovie.png" },
  { id: "rc-2", title: "Student Testimonial", category: "Graphic Design", size: "col-span-12 md:col-span-4 md:row-span-2 aspect-[9/16] md:aspect-auto", img: "/graphics/reel-covers/Artboard_1_copy_5_3x_2.png" },
  { id: "rc-3", title: "Crew Clash", category: "Graphic Design", size: "col-span-12 md:col-span-4 md:row-span-2 aspect-[9/16] md:aspect-auto", img: "/graphics/reel-covers/Crew_Clash.png" },
  { id: "rc-4", title: "Farhan Akhtar", category: "Graphic Design", size: "col-span-12 md:col-span-4 md:row-span-2 aspect-[9/16] md:aspect-auto", img: "/graphics/reel-covers/Farhan_Akhtar.png" },
  { id: "rc-5", title: "Farhan Akhtar Final", category: "Graphic Design", size: "col-span-12 md:col-span-4 md:row-span-2 aspect-[9/16] md:aspect-auto", img: "/graphics/reel-covers/Farhan_Akhtar_Final.png" },
  { id: "rc-6", title: "RHYTHM Highlights", category: "Graphic Design", size: "col-span-12 md:col-span-4 md:row-span-2 aspect-[9/16] md:aspect-auto", img: "/graphics/reel-covers/Instagram_Image.jpg" },
  { id: "rc-7", title: "The Sports Arena", category: "Graphic Design", size: "col-span-12 md:col-span-3 md:row-span-2 aspect-[9/16] md:aspect-auto", img: "/graphics/reel-covers/Instagram_Image_2.jpg" },
  { id: "rc-8", title: "DJ Virgo", category: "Graphic Design", size: "col-span-12 md:col-span-3 md:row-span-2 aspect-[9/16] md:aspect-auto", img: "/graphics/reel-covers/Instagram_Image__1_.jpg" },
  { id: "rc-9", title: "Ramp Walk", category: "Graphic Design", size: "col-span-12 md:col-span-3 md:row-span-2 aspect-[9/16] md:aspect-auto", img: "/graphics/reel-covers/Ramp_Walk.png" },
  { id: "rc-10", title: "History Meets Innovation", category: "Graphic Design", size: "col-span-12 md:col-span-3 md:row-span-2 aspect-[9/16] md:aspect-auto", img: "/graphics/reel-covers/Reel-Covers-UpdatedArtboard-1.png" },
  { id: "rc-11", title: "Pranav Sharma At JU", category: "Graphic Design", size: "col-span-12 md:col-span-3 md:row-span-2 aspect-[9/16] md:aspect-auto", img: "/graphics/reel-covers/Reel-Covers-UpdatedArtboard-2_2.png" },
  { id: "rc-12", title: "QDC", category: "Graphic Design", size: "col-span-12 md:col-span-3 md:row-span-2 aspect-[9/16] md:aspect-auto", img: "/graphics/reel-covers/Reel-Covers-UpdatedArtboard-3_2.png" },
  { id: "rc-13", title: "Alumni Testimonial", category: "Graphic Design", size: "col-span-12 md:col-span-3 md:row-span-2 aspect-[9/16] md:aspect-auto", img: "/graphics/reel-covers/Reel-CoversArtboard-1_3.png" },
  { id: "rc-14", title: "Generic Reelcover", category: "Graphic Design", size: "col-span-12 md:col-span-3 md:row-span-2 aspect-[9/16] md:aspect-auto", img: "/graphics/reel-covers/Reel-CoversArtboard-4.png" },
  { id: "rc-15", title: "Sharvari Wagh", category: "Graphic Design", size: "col-span-12 md:col-span-3 md:row-span-2 aspect-[9/16] md:aspect-auto", img: "/graphics/reel-covers/Reel-CoversArtboard-5.png" },
  { id: "rc-16", title: "Alia Bhatt @ JU", category: "Graphic Design", size: "col-span-12 md:col-span-3 md:row-span-2 aspect-[9/16] md:aspect-auto", img: "/graphics/reel-covers/Reel-CoversArtboard-6.png" },
  { id: "rc-17", title: "Mic Drop Moment", category: "Graphic Design", size: "col-span-12 md:col-span-3 md:row-span-2 aspect-[9/16] md:aspect-auto", img: "/graphics/reel-covers/Reel-CoversArtboard-7.png" },
  { id: "rc-18", title: "The Evidences of Unkonown Ep 01", category: "Graphic Design", size: "col-span-12 md:col-span-3 md:row-span-2 aspect-[9/16] md:aspect-auto", img: "/graphics/reel-covers/ReelCover-Pt2Artboard-2.png" },
  { id: "rc-19", title: "The Evidences of Unkonown Ep 02", category: "Graphic Design", size: "col-span-12 md:col-span-3 md:row-span-2 aspect-[9/16] md:aspect-auto", img: "/graphics/reel-covers/ReelCover-Pt2Artboard-7.png" },
  { id: "rc-20", title: "The Evidences of Unkonown Ep 03", category: "Graphic Design", size: "col-span-12 md:col-span-3 md:row-span-2 aspect-[9/16] md:aspect-auto", img: "/graphics/reel-covers/ReelCover-Pt2Artboard-9.png" },
  { id: "rc-21", title: "Zakir Final", category: "Graphic Design", size: "col-span-12 md:col-span-3 md:row-span-2 aspect-[9/16] md:aspect-auto", img: "/graphics/reel-covers/Zakir_Final.png" },
  { id: "rc-22", title: "Zakir Khan", category: "Graphic Design", size: "col-span-12 md:col-span-3 md:row-span-2 aspect-[9/16] md:aspect-auto", img: "/graphics/reel-covers/Zakir_Khan.png" },
  
  { id: "r1", title: "Why JECRC?", category: "Reels", size: "col-span-12 md:col-span-4 md:row-span-2 aspect-[9/16] md:aspect-auto", video: "/reels/why-jecrc.mp4" },
  { id: "r2", title: "Dhruv Rathi @ JU Orient'25", category: "Reels", size: "col-span-12 md:col-span-4 md:row-span-2 aspect-[9/16] md:aspect-auto", video: "/reels/dhruv-rathi-ju-orient-25.mp4" },
  { id: "r3", title: "Message from the LINKEDIN God", category: "Reels", size: "col-span-12 md:col-span-4 md:row-span-2 aspect-[9/16] md:aspect-auto", video: "/reels/message-from-the-linkedin-god.mp4" },
  { id: "r4", title: "Amit Ji @ JU", category: "Reels", size: "col-span-12 md:col-span-4 md:row-span-2 aspect-[9/16] md:aspect-auto", video: "/reels/amit-ji-ju.mp4" },
  { id: "r5", title: "JU Rhythm Aftermovie'26", category: "Reels", size: "col-span-12 md:col-span-4 md:row-span-2 aspect-[9/16] md:aspect-auto", video: "/reels/ju-rhythm-aftermovie-26.mp4" },
  { id: "r6", title: "4 Days Left Till Rhythm'26", category: "Reels", size: "col-span-12 md:col-span-4 md:row-span-2 aspect-[9/16] md:aspect-auto", video: "/reels/4-days-left-till-rhythm-26.mp4" },
  { id: "r7", title: "Jackpot or Game Over", category: "Reels", size: "col-span-12 md:col-span-4 md:row-span-2 aspect-[9/16] md:aspect-auto", video: "/reels/jackpot-or-game-over.mp4" },
  { id: "r8", title: "Mic Drop ft. Alia Bhatt", category: "Reels", size: "col-span-12 md:col-span-4 md:row-span-2 aspect-[9/16] md:aspect-auto", video: "/reels/mic-drop-ft-alia-bhatt.mp4" },
  { id: "r9", title: "The Red Flag You Can't Ignore", category: "Reels", size: "col-span-12 md:col-span-4 md:row-span-2 aspect-[9/16] md:aspect-auto", video: "/reels/the-red-flag-you-cant-ignore.mp4" },
  { id: "r10", title: "Vibe Check - Passed", category: "Reels", size: "col-span-12 md:col-span-4 md:row-span-2 aspect-[9/16] md:aspect-auto", video: "/reels/vibe-check-passed.mp4" },
  { id: "r11", title: "Yesss I got Placed.", category: "Reels", size: "col-span-12 md:col-span-4 md:row-span-2 aspect-[9/16] md:aspect-auto", video: "/reels/yesss-i-got-placed.mp4" },
  { id: "r12", title: "You Find Your Place", category: "Reels", size: "col-span-12 md:col-span-4 md:row-span-2 aspect-[9/16] md:aspect-auto", video: "/reels/you-find-your-place.mp4" },
  { id: "r13", title: "JU At Work", category: "Reels", size: "col-span-12 md:col-span-4 md:row-span-2 aspect-[9/16] md:aspect-auto", video: "/reels/ju-at-work.mp4" },
  { id: "r14", title: "Aakhiri Chai", category: "Reels", size: "col-span-12 md:col-span-4 md:row-span-2 aspect-[9/16] md:aspect-auto", video: "/reels/aakhiri-chai.mp4" },
  { id: "r15", title: "B Praak Live", category: "Reels", size: "col-span-12 md:col-span-4 md:row-span-2 aspect-[9/16] md:aspect-auto", video: "/reels/b-praak.mp4" },
  { id: "r16", title: "Home Away", category: "Reels", size: "col-span-12 md:col-span-4 md:row-span-2 aspect-[9/16] md:aspect-auto", video: "/reels/home-away.mp4" },
  { id: "r17", title: "Jaipur's Pink Just Got Brighter", category: "Reels", size: "col-span-12 md:col-span-4 md:row-span-2 aspect-[9/16] md:aspect-auto", video: "/reels/jaipurs-pink-just-got-brighter.mp4" },
  { id: "r18", title: "Once a JECRCian, Always a JECRCian", category: "Reels", size: "col-span-12 md:col-span-4 md:row-span-2 aspect-[9/16] md:aspect-auto", video: "/reels/once-a-jecrcian-always-a-jecrcian.mp4" },
  { id: "r19", title: "Rhythm'26 This Era Begins Now", category: "Reels", size: "col-span-12 md:col-span-4 md:row-span-2 aspect-[9/16] md:aspect-auto", video: "/reels/rhythm26-this-era-begins-now.mp4" },
  { id: "r20", title: "The Hype Is Real", category: "Reels", size: "col-span-12 md:col-span-4 md:row-span-2 aspect-[9/16] md:aspect-auto", video: "/reels/the-hype-is-real.mp4" },
  { id: "r21", title: "The Space Built For Storytellers", category: "Reels", size: "col-span-12 md:col-span-4 md:row-span-2 aspect-[9/16] md:aspect-auto", video: "/reels/the-space-built-for-storytellers.mp4" },
  { id: "r22", title: "Wednesday Just Got Legendary", category: "Reels", size: "col-span-12 md:col-span-4 md:row-span-2 aspect-[9/16] md:aspect-auto", video: "/reels/wednesday-just-got-legendary.mp4" },
  { id: "r23", title: "Yeh Dil", category: "Reels", size: "col-span-12 md:col-span-4 md:row-span-2 aspect-[9/16] md:aspect-auto", video: "/reels/yeh-dil.mp4" },
  
  { id: "p1", title: "Best Shot 1", category: "Photography", size: "col-span-12 md:col-span-4 md:row-span-1 aspect-video md:aspect-auto", img: "/best-shots/DSC00326.JPG" },
  { id: "p2", title: "Best Shot 2", category: "Photography", size: "col-span-12 md:col-span-4 md:row-span-2 aspect-[9/16] md:aspect-auto", img: "/best-shots/DSC00467.jpg" },
  { id: "p3", title: "Best Shot 3", category: "Photography", size: "col-span-12 md:col-span-4 md:row-span-1 aspect-video md:aspect-auto", img: "/best-shots/DSC00776.JPG" },
  { id: "p4", title: "Best Shot 4", category: "Photography", size: "col-span-12 md:col-span-4 md:row-span-1 aspect-square md:aspect-auto", img: "/best-shots/DSC00867.jpg" },
  { id: "p5", title: "Best Shot 5", category: "Photography", size: "col-span-12 md:col-span-8 md:row-span-2 aspect-video md:aspect-auto", img: "/best-shots/DSC02335-2.jpg" },
  { id: "p6", title: "Best Shot 6", category: "Photography", size: "col-span-12 md:col-span-4 md:row-span-1 aspect-video md:aspect-auto", img: "/best-shots/DSC02397.jpg" },
  { id: "p7", title: "Best Shot 7", category: "Photography", size: "col-span-12 md:col-span-4 md:row-span-1 aspect-video md:aspect-auto", img: "/best-shots/DSC02654.jpg" },
  { id: "p8", title: "Best Shot 8", category: "Photography", size: "col-span-12 md:col-span-4 md:row-span-2 aspect-[9/16] md:aspect-auto", img: "/best-shots/DSC02668.jpg" },
  { id: "p9", title: "Best Shot 9", category: "Photography", size: "col-span-12 md:col-span-4 md:row-span-1 aspect-video md:aspect-auto", img: "/best-shots/DSC05577.jpg" },
  { id: "p10", title: "Best Shot 10", category: "Photography", size: "col-span-12 md:col-span-4 md:row-span-1 aspect-square md:aspect-auto", img: "/best-shots/DSC05743.jpg" },
  { id: "p11", title: "Best Shot 11", category: "Photography", size: "col-span-12 md:col-span-8 md:row-span-2 aspect-video md:aspect-auto", img: "/best-shots/DSC05859.jpg" },
  { id: "p12", title: "Best Shot 12", category: "Photography", size: "col-span-12 md:col-span-4 md:row-span-1 aspect-video md:aspect-auto", img: "/best-shots/DSC_2005.jpg" },
  { id: "p13", title: "Best Shot 13", category: "Photography", size: "col-span-12 md:col-span-4 md:row-span-1 aspect-video md:aspect-auto", img: "/best-shots/DSC_2015.jpg" },
  { id: "p14", title: "Best Shot 14", category: "Photography", size: "col-span-12 md:col-span-4 md:row-span-2 aspect-[9/16] md:aspect-auto", img: "/best-shots/DSC_2042.jpg" },
  { id: "p15", title: "Best Shot 15", category: "Photography", size: "col-span-12 md:col-span-4 md:row-span-1 aspect-video md:aspect-auto", img: "/best-shots/DSC_3789.jpg" },
  { id: "p16", title: "Best Shot 16", category: "Photography", size: "col-span-12 md:col-span-4 md:row-span-1 aspect-square md:aspect-auto", img: "/best-shots/DSC_3798.jpg" },
  { id: "p17", title: "Best Shot 17", category: "Photography", size: "col-span-12 md:col-span-8 md:row-span-2 aspect-video md:aspect-auto", img: "/best-shots/DSC_3805.jpg" },
  { id: "p18", title: "Best Shot 18", category: "Photography", size: "col-span-12 md:col-span-4 md:row-span-1 aspect-video md:aspect-auto", img: "/best-shots/DSC_3941.jpg" },
  { id: "p19", title: "Best Shot 19", category: "Photography", size: "col-span-12 md:col-span-4 md:row-span-1 aspect-video md:aspect-auto", img: "/best-shots/DSC_3984.jpg" },
  { id: "p20", title: "Best Shot 20", category: "Photography", size: "col-span-12 md:col-span-4 md:row-span-2 aspect-[9/16] md:aspect-auto", img: "/best-shots/DSC_4559-4.jpg" },
  { id: "p21", title: "Best Shot 21", category: "Photography", size: "col-span-12 md:col-span-4 md:row-span-1 aspect-video md:aspect-auto", img: "/best-shots/DSC_5333-4-Enhanced-NR.jpg" },
  { id: "p22", title: "Best Shot 22", category: "Photography", size: "col-span-12 md:col-span-4 md:row-span-1 aspect-square md:aspect-auto", img: "/best-shots/DSC_5463-4-Enhanced-NR.jpg" },
  { id: "p23", title: "Best Shot 23", category: "Photography", size: "col-span-12 md:col-span-8 md:row-span-2 aspect-video md:aspect-auto", img: "/best-shots/DSC_6299.jpg" },
  { id: "p24", title: "Best Shot 24", category: "Photography", size: "col-span-12 md:col-span-4 md:row-span-1 aspect-video md:aspect-auto", img: "/best-shots/DSC_6300.jpg" },
  { id: "p25", title: "Best Shot 25", category: "Photography", size: "col-span-12 md:col-span-4 md:row-span-1 aspect-video md:aspect-auto", img: "/best-shots/DSC_6723.jpg" },
  { id: "p26", title: "Best Shot 26", category: "Photography", size: "col-span-12 md:col-span-4 md:row-span-2 aspect-[9/16] md:aspect-auto", img: "/best-shots/DSC_6745.jpg" },
  { id: "p27", title: "Best Shot 27", category: "Photography", size: "col-span-12 md:col-span-4 md:row-span-1 aspect-video md:aspect-auto", img: "/best-shots/DSC_6877.jpg" },
  { id: "p28", title: "Best Shot 28", category: "Photography", size: "col-span-12 md:col-span-4 md:row-span-1 aspect-square md:aspect-auto", img: "/best-shots/DSC_6906.jpg" },
  { id: "p29", title: "Best Shot 29", category: "Photography", size: "col-span-12 md:col-span-8 md:row-span-2 aspect-video md:aspect-auto", img: "/best-shots/DSC_6921.jpg" },
  { id: "p30", title: "Best Shot 30", category: "Photography", size: "col-span-12 md:col-span-4 md:row-span-1 aspect-video md:aspect-auto", img: "/best-shots/DSC_6988.jpg" },
  { id: "p31", title: "Best Shot 31", category: "Photography", size: "col-span-12 md:col-span-4 md:row-span-1 aspect-video md:aspect-auto", img: "/best-shots/DSC_7020.jpg" },
  { id: "p32", title: "Best Shot 32", category: "Photography", size: "col-span-12 md:col-span-4 md:row-span-2 aspect-[9/16] md:aspect-auto", img: "/best-shots/DSC_7114.jpg" },
  { id: "p33", title: "Best Shot 33", category: "Photography", size: "col-span-12 md:col-span-4 md:row-span-1 aspect-video md:aspect-auto", img: "/best-shots/DSC_8852.jpg" },
  { id: "p34", title: "Best Shot 34", category: "Photography", size: "col-span-12 md:col-span-4 md:row-span-1 aspect-square md:aspect-auto", img: "/best-shots/IMG_0113.jpg" },
  { id: "p35", title: "Best Shot 35", category: "Photography", size: "col-span-12 md:col-span-8 md:row-span-2 aspect-video md:aspect-auto", img: "/best-shots/IMG_0190.jpg" },
  { id: "p36", title: "Best Shot 36", category: "Photography", size: "col-span-12 md:col-span-4 md:row-span-1 aspect-video md:aspect-auto", img: "/best-shots/IMG_0195.jpg" },
  { id: "p37", title: "Best Shot 37", category: "Photography", size: "col-span-12 md:col-span-4 md:row-span-1 aspect-video md:aspect-auto", img: "/best-shots/IMG_0764.jpg" },
  { id: "p38", title: "Best Shot 38", category: "Photography", size: "col-span-12 md:col-span-4 md:row-span-2 aspect-[9/16] md:aspect-auto", img: "/best-shots/M3_02211.jpg" },
];

export const WorkGallery = ({ youtubeVideos = [] }: WorkGalleryProps) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [showAll, setShowAll] = useState(false);

  const projects: PortfolioItem[] = useMemo(() => {
    if (youtubeVideos.length > 0) {
      const localItems = youtubeVideos.map(v => ({
        id: v.id,
        title: v.title,
        category: "Youtube Videos" as const,
        video: v.video,
        size: v.size,
        img: undefined,
        pdf: undefined,
      }));
      return [...FALLBACK_OTHER, ...localItems].map(p => ({
        ...p,
        isFeatured: bestOfIds.includes(p.id),
      }));
    }
    return [...FALLBACK_OTHER, ...FALLBACK_YOUTUBE].map(p => ({
      ...p,
      isFeatured: bestOfIds.includes(p.id),
    }));
  }, [youtubeVideos]);

  let displayedProjects = projects;
  if (activeCategory === "All" && !showAll) {
    displayedProjects = projects
      .filter((p: PortfolioItem) => p.isFeatured)
      .sort((a: PortfolioItem, b: PortfolioItem) => {
        const indexA = bestOfIds.indexOf(a.id);
        const indexB = bestOfIds.indexOf(b.id);
        if (indexA === -1) return 1;
        if (indexB === -1) return -1;
        return indexA - indexB;
      })
      .slice(0, 14);
  } else if (activeCategory !== "All") {
    displayedProjects = projects.filter(p => p.category === activeCategory);
  }

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    if (cat !== "All") {
      setShowAll(true);
    } else {
      setShowAll(false);
    }
  };

  return (
    <section className="section-padding bg-obsidian-dark min-h-screen relative">
      <div className="container mx-auto px-6 mb-16 text-center relative z-10">
        <p className="text-xs font-bold tracking-[0.3em] text-slate-blue mb-6">The Vault</p>
        <h2 className="text-fluid-display leading-[0.9] font-bold font-geist text-ivory-light tracking-tight mb-4">
          Hall of Fame
        </h2>
        <p className="text-fluid-p text-ivory-dark/50 font-inter max-w-xl mx-auto mb-16">
          The work that defined us. A curated collection of our finest moments.
        </p>
        
        <GalleryFilters activeCategory={activeCategory} handleCategoryChange={handleCategoryChange} />

        <div className="relative">
          {activeCategory === "Photography" ? (
            <PhotographyGrid displayedProjects={displayedProjects} onSelectProject={setSelectedProject} />
          ) : (
            <BentoGrid displayedProjects={displayedProjects} activeCategory={activeCategory} showAll={showAll} onSelectProject={setSelectedProject} />
          )}

          <AnimatePresence>
            {activeCategory === "All" && !showAll && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex justify-center mt-12"
              >
                <button 
                  onClick={() => setShowAll(true)}
                  className="group relative px-10 py-4 rounded-full font-bold tracking-widest text-sm text-white overflow-hidden transition-all duration-500"
                >
                  <span className="absolute inset-0 bg-white/5 border border-white/10 rounded-full group-hover:border-slate-blue/50 transition-colors duration-500" />
                  <span className="absolute inset-0 bg-gradient-to-r from-slate-blue/0 via-slate-blue/10 to-slate-blue/0 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500" />
                  <span className="relative z-10 flex items-center gap-2">
                    Explore Full Archive
                    <span className="text-lg transition-transform duration-500 group-hover:translate-x-1">→</span>
                  </span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <GalleryLightbox selectedProject={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};