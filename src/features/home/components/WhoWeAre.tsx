"use client";

import { motion } from "framer-motion";

export const WhoWeAre = () => {
  return (
    <section className="section-padding bg-obsidian-dark border-t border-white/[0.04]">
      <div className="container mx-auto container-padding">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24">
          <div className="flex-1">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-fluid-display font-bold font-geist text-ivory-light  tracking-tight leading-tight md:sticky md:top-40"
            >
              Who <br className="hidden md:block" /> We Are
            </motion.h2>
          </div>
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="prose prose-invert prose-lg"
            >
              <p className="text-xl md:text-2xl font-inter text-ivory-dark/90 leading-relaxed mb-8 text-balance">
                JU-Socialz is not a traditional university initiative. We are a premium student media and marketing ecosystem, acting as the digital heartbeat of JECRC University.
              </p>
              <p className="text-lg font-inter text-ivory-dark/60 leading-relaxed mb-8 text-balance">
                We are a collective of designers, editors, videographers, and strategists. Every campaign, every cinematic aftermovie, and every viral reel that defines the university's culture passes through our screens.
              </p>
              <p className="text-lg font-inter text-ivory-dark/60 leading-relaxed text-balance">
                Our mission is to build impact, tell unforgettable stories, and provide a launchpad for the next generation of creative professionals.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
