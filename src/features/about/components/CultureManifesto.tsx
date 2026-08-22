"use client";

import { motion } from "framer-motion";

export const CultureManifesto = () => {
  return (
    <section className="section-padding bg-obsidian-dark relative overflow-hidden flex items-center justify-center min-h-[80vh]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(57,80,162,0.08)_0%,rgba(17,17,17,1)_70%)]" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-200px" }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-fluid-display font-bold font-geist text-ivory-light leading-[0.95] tracking-tight max-w-6xl mx-auto text-balance "
        >
          A university doesn’t speak for itself.<br />
          <span className="italic font-light text-slate-lighter tracking-tight">
            Someone has to give it a voice — that’s us.
          </span>
        </motion.p>
      </div>
    </section>
  );
};
