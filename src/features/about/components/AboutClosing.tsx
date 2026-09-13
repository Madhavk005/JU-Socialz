"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export const AboutClosing = () => {
  return (
    <section className="section-padding bg-obsidian-dark relative overflow-hidden flex flex-col items-center justify-center text-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(57,80,162,0.15)_0%,rgba(17,17,17,1)_60%)] z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-fluid-h1 font-geist font-medium text-ivory-light leading-[1.1] tracking-tight mb-16 md:mb-32 max-w-5xl mx-auto text-balance"
        >
          JU-Socialz is proof that when students are trusted with responsibility, they don’t just contribute — <br className="hidden md:block" /><span className="italic font-light text-slate-lighter">they transform culture.</span>
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs font-bold tracking-[0.3em]  text-ivory-dark/40 mb-8">
            Next Chapter
          </p>
          <Link href="/work" className="inline-block group">
            <h2 className="text-fluid-h1 md:text-[8rem] font-bold font-geist  tracking-tight text-ivory-light group-hover:text-slate-lighter transition-colors duration-500 leading-none">
              Our Work
            </h2>
            <div className="h-[2px] w-0 group-hover:w-full bg-slate-lighter transition-all duration-[0.8s] ease-cinematic mt-4 mx-auto" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
