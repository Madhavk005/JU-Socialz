"use client";

import { motion } from "framer-motion";

export const Documentary = () => {
  return (
    <section className="section-padding bg-obsidian border-y border-white/[0.02]">
      <div className="container mx-auto px-6 text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-fluid-display font-bold font-geist text-ivory-light  tracking-tight"
        >
          The Documentary
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-ivory-dark/60 font-inter mt-6 text-lg max-w-2xl mx-auto"
        >
          Watch the story of how a handful of creators built the largest media ecosystem on campus.
        </motion.p>
      </div>

      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-video w-full max-w-5xl mx-auto rounded-2xl md:rounded-[2rem] overflow-hidden border border-white/[0.04] shadow-[0_0_50px_rgba(57,80,162,0.15)] group"
        >
          <iframe
            src="https://www.youtube.com/embed/XpaAoNubWAM?si=UaBI2CQp400ckh2k&rel=0"
            title="JU Socialz Documentary"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};
