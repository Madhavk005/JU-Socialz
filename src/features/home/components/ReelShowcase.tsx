"use client";

import { motion } from "framer-motion";
import { ErrorBoundary } from "@/components/ui/utils/ErrorBoundary";

export interface ReelData {
  id: string;
  title: string;
  category: string;
  video?: string;
  fileUrl?: string;
}

const FALLBACK_REELS: ReelData[] = [
  { id: "1", title: "Why JECRC?", category: "Campus Life", video: "/reels/why-jecrc.mp4" },
  { id: "2", title: "Dhruv Rathi @ JU Orient'25", category: "Event Coverage", video: "/reels/dhruv-rathi-ju-orient-25.mp4" },
  { id: "3", title: "Message from the LINKEDIN God", category: "Talk", video: "/reels/message-from-the-linkedin-god.mp4" },
  { id: "4", title: "Amit Ji @ JU", category: "Event Coverage", video: "/reels/amit-ji-ju.mp4" },
  { id: "5", title: "JU Rhythm Aftermovie'26", category: "Documentary", video: "/reels/ju-rhythm-aftermovie-26.mp4" },
  { id: "6", title: "4 Days Left Till Rhythm'26", category: "Campaign", video: "/reels/4-days-left-till-rhythm-26.mp4" },
  { id: "7", title: "Jackpot or Game Over", category: "Interactive", video: "/reels/jackpot-or-game-over.mp4" },
  { id: "8", title: "Mic Drop ft. Alia Bhatt", category: "Event Coverage", video: "/reels/mic-drop-ft-alia-bhatt.mp4" },
  { id: "9", title: "The Red Flag You Can't Ignore", category: "Campaign", video: "/reels/the-red-flag-you-cant-ignore.mp4" },
  { id: "10", title: "Vibe Check - Passed", category: "Trend", video: "/reels/vibe-check-passed.mp4" },
  { id: "11", title: "Yesss I got Placed.", category: "Placements", video: "/reels/yesss-i-got-placed.mp4" },
  { id: "12", title: "You Find Your Place", category: "Campus Life", video: "/reels/you-find-your-place.mp4" },
  { id: "13", title: "JU At Work", category: "Behind The Scenes", video: "/reels/ju-at-work.mp4" },
  { id: "14", title: "Aakhiri Chai", category: "Campus Life", video: "/reels/aakhiri-chai.mp4" },
  { id: "15", title: "B Praak Live", category: "Event Coverage", video: "/reels/b-praak.mp4" },
  { id: "16", title: "Home Away", category: "Campus Life", video: "/reels/home-away.mp4" },
  { id: "17", title: "Jaipur's Pink Just Got Brighter", category: "Campus Life", video: "/reels/jaipurs-pink-just-got-brighter.mp4" },
  { id: "18", title: "Once a JECRCian, Always a JECRCian", category: "Alumni", video: "/reels/once-a-jecrcian-always-a-jecrcian.mp4" },
  { id: "19", title: "Rhythm'26 This Era Begins Now", category: "Campaign", video: "/reels/rhythm26-this-era-begins-now.mp4" },
  { id: "20", title: "The Hype Is Real", category: "Trend", video: "/reels/the-hype-is-real.mp4" },
  { id: "21", title: "The Space Built For Storytellers", category: "Campus Life", video: "/reels/the-space-built-for-storytellers.mp4" },
  { id: "22", title: "Wednesday Just Got Legendary", category: "Event Coverage", video: "/reels/wednesday-just-got-legendary.mp4" },
  { id: "23", title: "Yeh Dil", category: "Campus Life", video: "/reels/yeh-dil.mp4" },
];

export const ReelShowcase = ({ reelsProp = FALLBACK_REELS }: { reelsProp?: ReelData[] }) => {
  const reels = reelsProp;

  return (
    <section className="section-padding bg-obsidian border-t border-white/[0.02] overflow-hidden relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
      <div className="container mx-auto px-6 mb-16 md:mb-24 relative z-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div>
            <h2 className="text-fluid-display leading-[0.9] font-bold font-geist text-ivory-light  tracking-tight mb-4">
              The <span className="text-slate-blue italic font-light tracking-tight lowercase">internet</span> Saw This.
            </h2>
            <p className="text-fluid-p text-ivory-dark/60 font-inter max-w-xl">
              Frames that changed everything. Experience the raw energy of JECRC University through our lens.
            </p>
          </div>
          <p className="text-white/40  tracking-[0.3em] font-bold text-xs hidden md:block">
            [ Featured Reels ]
          </p>
        </div>
      </div>

      {/* Infinite Marquee Container */}
      <div className="relative flex overflow-hidden">
        {/* Gradients to fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-obsidian to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-obsidian to-transparent z-20" />

        <style>{`
          @keyframes marquee-scroll {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(-50%, 0, 0); }
          }
          .animate-marquee-scroll {
            animation: marquee-scroll 60s linear infinite;
            will-change: transform;
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
            transform-style: preserve-3d;
          }
        `}</style>
        <div
          className="animate-marquee-scroll flex gap-6 md:gap-10 pr-6 md:pr-10 w-max items-center pb-8"
        >
          {/* We duplicate the array to create a seamless infinite loop */}
          {[...reels, ...reels].map((reel, idx) => (
            <div 
              key={`${reel.id}-${idx}`} 
              className="relative w-[75vw] md:w-[25vw] max-w-[380px] aspect-[9/16] rounded-[2rem] overflow-hidden group border border-white/5 bg-[#0a0a0a] shadow-2xl shrink-0"
            >
              <ErrorBoundary>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 z-10 pointer-events-none" />
              
              {/* Background Video */}
              {reel.fileUrl || reel.video ? (
                <video 
                  key={reel.fileUrl || reel.video}
                  src={reel.fileUrl || reel.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="none"
                  style={{ WebkitBackfaceVisibility: "hidden", backfaceVisibility: "hidden", WebkitTransform: "translate3d(0, 0, 0)", transform: "translate3d(0, 0, 0)" }}
                  className="absolute inset-0 z-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out opacity-60 group-hover:opacity-100"
                />
              ) : (
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(57,80,162,0.15)_0%,rgba(10,10,10,1)_100%)] group-hover:scale-110 transition-transform duration-[1.5s] ease-out z-0" />
              )}
              

              {/* Text Content */}
              <div className="absolute bottom-8 left-6 right-6 md:bottom-10 md:left-8 md:right-8 z-30 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 pointer-events-none">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full bg-slate-blue shadow-[0_0_10px_rgba(57,80,162,1)]" />
                  <span className="text-[9px] md:text-[10px]  tracking-[0.3em] text-ivory-light/80 font-bold">
                    {reel.category}
                  </span>
                </div>
                <h3 className="text-fluid-h3 font-bold text-white font-geist leading-[1.1] tracking-tight ">
                  {reel.title}
                </h3>
              </div>
              </ErrorBoundary>
            </div>
          ))}
        </div>
      </div>
      </motion.div>
    </section>
  );
};
