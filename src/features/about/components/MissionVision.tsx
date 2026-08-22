"use client";

import { motion } from "framer-motion";

export const MissionVision = () => {
  return (
    <section className="section-padding bg-obsidian-dark">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 glass-card p-8 md:p-16 rounded-[32px] group hover:shadow-floating transition-shadow duration-[0.8s]"
          >
            <h3 className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-slate-lighter mb-8 opacity-80">THE MISSION</h3>
            <h4 className="text-fluid-h2 font-geist font-bold text-ivory-light leading-[1.1] tracking-tight mb-6">
              We tell JECRC's story, one moment at a time.
            </h4>
            <p className="text-fluid-p font-inter font-light text-ivory-light/80 leading-relaxed">
              JU Socialz exists to capture the real life of JECRC University — the wins, the late-night grind, the friendships, the firsts — and turn it into content that connects. We don't just post updates; we build a digital front door where every visitor feels the energy of this campus before they've even stepped on it.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 glass-card p-8 md:p-16 rounded-[32px] group hover:shadow-floating transition-shadow duration-[0.8s] mt-12 md:mt-24"
          >
            <h3 className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-slate-lighter mb-8 opacity-80">THE VISION</h3>
            <h4 className="text-fluid-h2 font-geist font-bold text-ivory-light leading-[1.1] tracking-tight mb-6">
              To make JECRC impossible to scroll past.
            </h4>
            <p className="text-fluid-p font-inter font-light text-ivory-light/80 leading-relaxed">
              We see a future where JU Socialz isn't just a handle you follow — it's a feeling you recognize. Where every reel, post, and story adds up to one clear truth: this is a university that's alive, ambitious, and always moving forward. Our vision is to turn every screen into a window into JECRC.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
