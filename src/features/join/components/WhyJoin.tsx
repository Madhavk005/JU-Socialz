"use client";

import { motion } from "framer-motion";

export interface ReasonData {
  title: string;
  desc: string;
}

const FALLBACK_REASONS: ReasonData[] = [
  { title: "Build a Portfolio That Matters", desc: "Work on real campaigns, events, and brand collaborations. Graduate with a portfolio that speaks louder than your degree." },
  { title: "Learn From Industry Mentors", desc: "Workshops and masterclasses with professional photographers, filmmakers, and digital marketers from the industry." },
  { title: "Access to Professional Gear", desc: "Sony A7 series, DJI gimbals, studio lighting, Mac workstations with Adobe Creative Cloud — all available for member projects." },
  { title: "Cover Major Campus Events", desc: "Be the official media team for fests, conferences, and cultural events. Your work reaches thousands of students." },
  { title: "Join a Creative Community", desc: "Collaborate with 100+ passionate creators across verticals. Find your co-founders, creative partners, and lifelong friends." },
  { title: "Internship & Job Referrals", desc: "Our alumni network spans top creative agencies, production houses, and brands. We help you land opportunities." },
];

export const WhyJoin = ({ reasonsProp }: { reasonsProp?: ReasonData[] }) => {
  const reasons = reasonsProp && reasonsProp.length > 0 ? reasonsProp : FALLBACK_REASONS;
  return (
    <section className="section-padding bg-obsidian-dark border-t border-white/[0.02]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs font-bold tracking-[0.3em] text-slate-blue mb-6 uppercase"
          >
            Benefits
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-fluid-display leading-[0.9] font-bold font-geist text-ivory-light tracking-tight"
          >
            What You Get <br className="hidden lg:block" />
            <span className="text-slate-blue italic font-light tracking-tight lowercase">after joining.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card rounded-2xl p-8 border border-white/5 hover:border-slate-blue/30 hover:bg-white/[0.02] transition-all duration-500 group"
            >
              <div className="w-10 h-10 rounded-full bg-slate-blue/20 flex items-center justify-center mb-5 group-hover:bg-slate-blue/30 transition-colors">
                <span className="text-slate-blue font-bold font-geist text-sm">0{idx + 1}</span>
              </div>
              <h3 className="text-xl font-bold font-geist text-ivory-light tracking-tight mb-3">
                {r.title}
              </h3>
              <p className="text-sm font-inter text-ivory-dark/60 leading-relaxed">
                {r.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
