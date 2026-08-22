"use client";

import { motion } from "framer-motion";

interface BtsVideo {
  id: string;
  video: string;
}

interface WorkBtsProps {
  btsVideos?: BtsVideo[];
}

const FALLBACK_VIDEOS: BtsVideo[] = [
  { id: "bts1", video: "/life-at/vikrant-massey-with-us.mp4" },
  { id: "bts2", video: "/life-at/when-everyone-understands-the-assignment.mp4" },
  { id: "bts3", video: "/life-at/that-one-perfect-shot.mp4" },
  { id: "bts4", video: "/life-at/rhythm-day-1-vlogggggg.mp4" },
  { id: "bts5", video: "/life-at/600-reels.mp4" },
];

export const WorkBts = ({ btsVideos = [] }: WorkBtsProps) => {
  const videos = btsVideos.length > 0 ? btsVideos : FALLBACK_VIDEOS;

  return (
    <section className="section-padding bg-obsidian border-t border-white/[0.02]">
      <div className="container mx-auto px-6 text-center mb-24">
        <h2 className="text-fluid-display font-bold font-geist text-ivory-light  tracking-tight">
          Behind The Scenes
        </h2>
        <p className="text-fluid-p font-inter text-ivory-dark/60 max-w-2xl mx-auto mt-6">
          Editing setups, camera rigs, shoot chaos, and team collaboration. This is where the magic happens.
        </p>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {videos.map((bts, i) => (
            <motion.div
              key={bts.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`aspect-[9/16] glass-card rounded-[24px] overflow-hidden relative group ${i === 4 ? "col-span-2 md:col-span-1" : ""}`}
            >
              <div className="absolute inset-0 bg-slate-blue/10 group-hover:bg-slate-blue/20 transition-colors duration-700 z-10 pointer-events-none" />
              <video
                src={bts.video}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[1.5s] ease-cinematic z-0"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};