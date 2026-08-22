"use client";

import { motion } from "framer-motion";

export const WorkHero = () => {
  return (
    <section className="relative h-[80dvh] md:h-[100dvh] flex items-center justify-center overflow-hidden bg-obsidian-dark pt-24">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-obsidian-dark/80 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(57,80,162,0.2)_0%,rgba(17,17,17,1)_100%)] z-20 mix-blend-multiply" />
        <div 
          className="absolute inset-0 opacity-[0.03] z-30 pointer-events-none mix-blend-overlay" 
          style={{ backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png")' }} 
        />
      </div>

      <div className="container relative z-30 px-6 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-6xl mx-auto"
        >
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-fluid-display leading-[0.95] font-bold font-geist tracking-tight text-ivory-light mb-8 text-balance"
          >
            Stories Crafted By Students.<br className="hidden md:block" />{" "}
            <span className="italic text-slate-lighter">Experienced By Thousands.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1.5 }}
            className="text-lg md:text-2xl font-inter text-ivory-dark max-w-3xl mx-auto text-balance leading-[1.8]"
          >
            From cinematic event films to viral digital campaigns, JU-Socialz transforms moments into impact.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
