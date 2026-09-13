"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MagneticEffect } from "@/components/ui/utils/MagneticEffect";

export const StickyCta = () => {
  const pathname = usePathname();

  // Hide on the join page to avoid redundancy
  if (pathname === '/join') return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] pointer-events-auto"
    >
      <MagneticEffect intensity={0.4}>
        <Link href="/join#join-form" className="block relative group">
          <div className="relative flex items-center justify-center gap-2.5 bg-obsidian-dark/90 backdrop-blur-xl px-5 py-3 md:px-6 md:py-3.5 rounded-full shadow-floating border border-white/10 transition-transform duration-500 hover:scale-105 hover:border-white/20">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-lighter animate-pulse" />
            <span className="text-[11px] md:text-xs font-bold font-geist tracking-[0.2em] text-ivory-light uppercase mt-0.5">
              Join The Team
            </span>
            <svg className="w-3.5 h-3.5 text-ivory-light/50 group-hover:text-ivory-light transition-colors duration-500 transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </Link>
      </MagneticEffect>
    </motion.div>
  );
};
