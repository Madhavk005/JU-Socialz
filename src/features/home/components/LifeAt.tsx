"use client";

import { motion } from "framer-motion";
import { ErrorBoundary } from "@/components/ui/utils/ErrorBoundary";

export interface LifeAtVideo {
  title: string;
  src: string;
}

const FALLBACK_VIDEOS: LifeAtVideo[] = [
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

export const LifeAt = ({ videosProp = FALLBACK_VIDEOS }: { videosProp?: LifeAtVideo[] }) => {
  const videos = videosProp?.length ? videosProp : FALLBACK_VIDEOS;

  return (
    <section className="bg-obsidian relative py-24 md:py-32 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
      <div className="container mx-auto px-6 mb-12 relative z-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div>
            <h2 className="text-fluid-display font-bold font-geist text-ivory-light tracking-tight">
              Life at JU-Socialz
            </h2>
            <p className="text-ivory-dark/60 font-inter mt-4 text-lg">Cinematic storytelling from the other side of the lens.</p>
          </div>
          <div className="hidden md:block opacity-40">
            <span className="text-xs uppercase tracking-[0.3em] text-white font-bold">[ BTS Life ]</span>
          </div>
        </div>
      </div>

      {/* Infinite Scroll Container */}
      <div className="w-full relative z-10 flex overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-48 bg-gradient-to-r from-obsidian to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-48 bg-gradient-to-l from-obsidian to-transparent z-20" />

        <style>{`
          @keyframes infinite-marquee {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(-50%, 0, 0); }
          }
          .animate-infinite-marquee {
            animation: infinite-marquee 80s linear infinite;
            will-change: transform;
          }
        `}</style>

        <div className="animate-infinite-marquee flex gap-6 md:gap-8 pr-6 md:pr-8 w-max items-center pb-8">
          {[...videos, ...videos].map((video, idx) => (
            <VideoCard key={`${video.title}-${idx}`} video={video} />
          ))}
        </div>
      </div>
      </motion.div>
    </section>
  );
};

const VideoCard = ({ video }: { video: LifeAtVideo }) => (
  <div className="relative flex-shrink-0 w-[80vw] md:w-[22vw] max-w-[360px] aspect-[9/16] rounded-[2rem] overflow-hidden group border border-white/5 bg-[#0a0a0a] shadow-2xl">
    <div className="absolute inset-0 bg-gradient-to-t from-obsidian-dark/95 via-obsidian-dark/20 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-700 z-10 pointer-events-none" />
    
    {video.src && (
      <ErrorBoundary>
      <video 
        key={video.src}
        src={video.src}
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        style={{ WebkitBackfaceVisibility: "hidden", backfaceVisibility: "hidden", WebkitTransform: "translate3d(0, 0, 0)", transform: "translate3d(0, 0, 0)" }}
        className="absolute inset-0 w-full h-full object-cover z-0 group-hover:scale-110 transition-transform duration-[1.5s] ease-out opacity-60 group-hover:opacity-100"
      />
      </ErrorBoundary>
    )}
    
    <div className="absolute top-6 left-6 z-20 pointer-events-none">
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
        <div className="w-1.5 h-1.5 rounded-full bg-slate-lighter animate-pulse" />
        <span className="text-[10px] uppercase tracking-widest text-ivory-light font-bold">BTS Vlog</span>
      </div>
    </div>

    <div className="absolute bottom-8 left-8 right-8 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 pointer-events-none">
      <h3 className="text-2xl md:text-fluid-h3 font-geist font-bold text-ivory-light leading-[1.1] tracking-tight">{video.title}</h3>
    </div>
  </div>
);
