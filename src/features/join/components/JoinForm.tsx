"use client";

import { motion } from "framer-motion";

export const JoinForm = () => {
  return (
    <section id="join-form" className="py-24 md:section-padding bg-obsidian-dark relative min-h-[100dvh] flex items-center justify-center border-t border-white/[0.02]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="container mx-auto px-6 max-w-2xl text-center relative z-10"
      >
        <div className="w-28 h-28 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-10 border border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.5)]">
          <span className="text-5xl text-white/30">🔒</span>
        </div>
        <h2 className="text-fluid-display font-bold font-geist text-ivory-light tracking-tight mb-6">
          Applications Are Closed
        </h2>
        <p className="text-fluid-p text-ivory-dark/60 font-inter max-w-lg mx-auto mb-10 leading-relaxed">
          The current recruitment cycle has ended. We&apos;ll be opening applications again soon — stay tuned to our socials for the next intake.
        </p>
        <div className="bg-[#151515] border border-white/5 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col gap-4 text-left">
            <div className="flex items-center gap-3 p-4 bg-white/3 rounded-xl border border-white/5">
              <span className="w-2 h-2 bg-amber-400 rounded-full flex-shrink-0" />
              <span className="text-ivory-light/80 font-inter">Follow <span className="font-bold text-white">@jusocialz</span> on Instagram for updates</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white/3 rounded-xl border border-white/5">
              <span className="w-2 h-2 bg-amber-400 rounded-full flex-shrink-0" />
              <span className="text-ivory-light/80 font-inter">Check back here in the next semester for the next recruitment drive</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white/3 rounded-xl border border-white/5">
              <span className="w-2 h-2 bg-amber-400 rounded-full flex-shrink-0" />
              <span className="text-ivory-light/80 font-inter">Build your portfolio in the meantime — we love seeing what you create!</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};