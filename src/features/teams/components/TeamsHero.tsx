"use client";

import { motion } from "framer-motion";

export const TeamsHero = () => {
  return (
    <section className="relative h-screen flex flex-col justify-end pb-12 md:pb-24 overflow-hidden bg-obsidian border-b border-white/[0.02]">
      {/* Abstract Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(57,80,162,0.15)_0%,rgba(17,17,17,1)_100%)]" />
      </div>

      <div className="container relative z-40 px-6 mx-auto">
        <div className="flex flex-col">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-fluid-display leading-[0.8] font-bold font-geist tracking-tight text-ivory-light "
          >
            THE MINDS
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-4 md:mt-0"
          >
            <h1 className="text-fluid-display leading-[0.8] font-bold font-geist tracking-tight text-slate-blue italic ">
              BEHIND IT.
            </h1>
            <p className="text-fluid-p font-inter text-ivory-dark max-w-[260px] md:max-w-[200px] text-balance md:pb-4  tracking-[0.2em] font-bold">
              Creators. Strategists. The Cinematic Engine.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
