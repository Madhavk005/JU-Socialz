"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export const ExclusiveCommunities = () => {
  return (
    <section className="section-padding bg-obsidian-dark border-t border-white/[0.02]">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-fluid-display leading-[0.9] font-bold font-geist text-ivory-light  tracking-tight mb-16 text-center"
        >
          The <span className="text-slate-blue italic font-light tracking-tight lowercase">communities.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* JU Creators */}
          <Link href="/ju-creators" className="block group">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/3] rounded-[2rem] overflow-hidden glass-card"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(57,80,162,0.15)_0%,rgba(17,17,17,1)_100%)] group-hover:scale-105 transition-transform duration-[1.5s] ease-out z-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-dark/90 via-obsidian-dark/20 to-transparent z-10" />
              
              <div className="absolute bottom-10 left-10 right-10 z-20">
                <span className="text-[10px] font-bold tracking-[0.3em]  text-slate-blue mb-4 block">
                  Official Creators Community
                </span>
                <h3 className="text-4xl md:text-fluid-h1 font-geist font-bold text-ivory-light  tracking-tight mb-4">
                  JU Creators
                </h3>
                <p className="text-ivory-dark/60 font-inter font-light max-w-sm">
                  Storytellers with perspective. Learn content creation, build personal brands, and join a high-energy ecosystem.
                </p>
                <div className="mt-8 flex items-center gap-2 text-ivory-light font-bold text-xs  tracking-widest group-hover:text-slate-blue transition-colors">
                  Explore Creators <span className="text-lg leading-none">&rarr;</span>
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Maverick Club */}
          <Link href="/maverick" className="block group">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/3] rounded-[2rem] overflow-hidden glass-card"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,rgba(17,17,17,1)_100%)] group-hover:scale-105 transition-transform duration-[1.5s] ease-out z-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-dark/90 via-obsidian-dark/20 to-transparent z-10" />
              
              <div className="absolute bottom-10 left-10 right-10 z-20">
                <span className="text-[10px] font-bold tracking-[0.3em]  text-white/40 mb-4 block">
                  Official Media Club
                </span>
                <h3 className="text-4xl md:text-fluid-h1 font-geist font-bold text-ivory-light  tracking-tight mb-4">
                  Maverick
                </h3>
                <p className="text-ivory-dark/60 font-inter font-light max-w-sm">
                  A community tailored for photography enthusiasts eager to exchange knowledge and capture vibrant moments.
                </p>
                <div className="mt-8 flex items-center gap-2 text-ivory-light font-bold text-xs  tracking-widest group-hover:text-white transition-colors">
                  Explore Maverick <span className="text-lg leading-none">&rarr;</span>
                </div>
              </div>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
};
