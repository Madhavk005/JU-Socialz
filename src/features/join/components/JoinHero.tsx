"use client";

import { motion } from "framer-motion";

export const JoinHero = () => {
  return (
    <section className="relative h-[80dvh] md:h-[100dvh] flex items-center justify-center overflow-hidden bg-obsidian-dark pt-24">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-obsidian-dark/80 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(57,80,162,0.25)_0%,rgba(17,17,17,1)_80%)] z-20 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-dark via-transparent to-transparent z-30" />
      </div>

      <div className="container relative z-40 px-6 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs font-bold tracking-[0.3em] text-slate-blue mb-6 uppercase"
          >
            Join The Team
          </motion.p>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-fluid-display leading-[0.9] font-bold font-geist tracking-tight text-ivory-light mb-8 text-balance"
          >
            Not Just A Team.<br className="hidden md:block" />
            <span className="italic font-light text-slate-lighter tracking-tight lowercase">a movement.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1.5 }}
            className="text-lg md:text-2xl font-inter text-ivory-dark max-w-3xl mx-auto text-balance leading-[1.8] mb-12"
          >
            Join the creators, storytellers, designers, editors, and strategists shaping the digital identity of JECRC University.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >

          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="w-[1px] h-24 bg-white/10 relative overflow-hidden">
          <motion.div 
            animate={{ y: [-96, 96] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
            className="w-full h-1/2 bg-slate-lighter" 
          />
        </div>
      </motion.div>
    </section>
  );
};
