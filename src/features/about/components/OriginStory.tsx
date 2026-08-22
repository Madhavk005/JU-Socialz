"use client";

import { motion } from "framer-motion";

export const OriginStory = () => {
  return (
    <section className="section-padding bg-obsidian border-y border-white/[0.02]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-start">
          <div className="flex-1 lg:sticky lg:top-40">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-fluid-display font-bold font-geist text-ivory-light  tracking-tight leading-tight"
            >
              The <br className="hidden md:block" /> Origin <br className="hidden md:block" /> Story.
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="w-24 h-[1px] bg-slate-blue mt-8 origin-left"
            />
          </div>
          
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="prose prose-invert prose-lg"
            >
              <p className="text-fluid-h2 font-geist font-medium text-ivory-light leading-snug mb-12 text-balance">
                We didn't start with experience. We started with curiosity.
              </p>
              <p className="text-fluid-p font-inter text-ivory-dark/70 leading-relaxed mb-8 text-balance">
                What began as a passion project to document university events quickly evolved into the official digital voice of JECRC University. We realized that stories weren't just happening on campus—they needed to be crafted, captured, and amplified.
              </p>
              <p className="text-fluid-p font-inter text-ivory-dark/70 leading-relaxed text-balance">
                Today, JU-Socialz is a highly organized, interdisciplinary ecosystem. From ideating viral campaigns to producing cinematic aftermovies, our creators collaborate to build something far larger than themselves.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
