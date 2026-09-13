"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface GlobalCtaProps {
  titleLine1?: string;
  titleLine2?: string;
}

export const GlobalCta = ({ 
  titleLine1 = "Be the part of the", 
  titleLine2 = "CREW." 
}: GlobalCtaProps = {}) => {
  return (
    <section className="section-padding bg-obsidian relative overflow-hidden flex flex-col items-center justify-center text-center border-t border-white/[0.02]">
      {/* Cinematic Edge-to-Edge Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-blue/5 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(57,80,162,0.15)_0%,rgba(17,17,17,1)_70%)] pointer-events-none" />

      <div className="container relative z-10 px-6 mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-xs md:text-sm font-bold tracking-[0.3em]  text-slate-lighter mb-8"
        >
          Your Next Chapter
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-fluid-display leading-[1] font-bold font-geist text-ivory-light  tracking-tight mb-12 text-balance mx-auto max-w-5xl">
            {titleLine1} <br />
            <span className="italic text-ivory-dark/60">{titleLine2}</span>
          </h2>
          
          <Link 
            href="/join" 
            className="inline-flex items-center gap-4 px-12 py-6 bg-transparent border-2 border-slate-blue text-ivory-light rounded-full font-bold  tracking-widest text-sm hover:bg-slate-blue hover:text-white transition-all duration-500 ease-cinematic group relative overflow-hidden"
          >
            <span className="relative z-10">Join The Movement</span>
            <span className="text-lg leading-none transform group-hover:translate-x-2 transition-transform duration-500 relative z-10">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
