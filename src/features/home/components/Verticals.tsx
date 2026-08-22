"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MagneticEffect } from "@/components/ui/utils/MagneticEffect";

const FALLBACK_VERTICALS = [
  {
    id: "cinematography",
    title: "Cinematography",
    desc: "Every frame has a purpose. Storytelling through motion, lighting, and vision.",
    icon: (
      <svg className="w-10 h-10 md:w-12 md:h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    id: "editing",
    title: "Editing",
    desc: "Where raw becomes remarkable. The invisible art of pacing and post-production.",
    icon: (
      <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
      </svg>
    )
  },
  {
    id: "reel-creation",
    title: "Reel Creation",
    desc: "Short form content that captures attention in seconds. Master the algorithm.",
    icon: (
      <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
      </svg>
    )
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    desc: "Ideas made visible. Crafting aesthetics that command attention.",
    icon: (
      <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    )
  },
  {
    id: "content-marketing",
    title: "Content Creation",
    desc: "The ideas department. Architecting campaigns that leave a mark.",
    icon: (
      <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    id: "social-media",
    title: "Social Media Management",
    desc: "The internet is our playground. Building communities that don't just watch, but engage.",
    icon: (
      <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    )
  },
  {
    id: "ai-automation",
    title: "AI & Automation",
    desc: "Making content creation smarter, faster, limitless. Explore AI tools and automation workflows.",
    icon: (
      <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16M8 12h8" />
      </svg>
    )
  },
];

const BENTO_LAYOUTS = [
  { colSpan: "col-span-1 sm:col-span-2 md:col-span-8", rowSpan: "row-span-1 sm:row-span-2 md:row-span-2", theme: "from-slate-blue/20 to-transparent" },
  { colSpan: "col-span-1 sm:col-span-2 md:col-span-4", rowSpan: "row-span-1 sm:row-span-2 md:row-span-2", theme: "from-white/10 to-transparent" },
  { colSpan: "col-span-1 sm:col-span-2 md:col-span-6", rowSpan: "row-span-1", theme: "from-white/10 to-transparent" },
  { colSpan: "col-span-1 sm:col-span-2 md:col-span-6", rowSpan: "row-span-1", theme: "from-slate-blue/20 to-transparent" },
  { colSpan: "col-span-1 sm:col-span-2 md:col-span-4", rowSpan: "row-span-1", theme: "from-slate-blue/20 to-transparent" },
  { colSpan: "col-span-1 sm:col-span-2 md:col-span-4", rowSpan: "row-span-1", theme: "from-white/10 to-transparent" },
  { colSpan: "col-span-1 sm:col-span-2 md:col-span-4", rowSpan: "row-span-1", theme: "from-slate-blue/20 to-transparent" },
];

export const Verticals = () => {
  const departments = FALLBACK_VERTICALS;

  return (
    <section className="section-padding bg-obsidian-dark border-t border-white/[0.02] relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-8"
        >
          <div>
            <h2 className="text-fluid-h1 font-bold font-geist text-ivory-light tracking-tight mb-4">
              The <span className="text-slate-blue italic font-light tracking-normal">verticals.</span>
            </h2>
            <p className="text-fluid-p text-ivory-dark/60 font-inter max-w-xl">
              Where ideas become reality. Master your craft.
            </p>
          </div>
          <p className="text-white/40  tracking-[0.3em] font-bold text-xs hidden md:block">
            [ {departments.length < 10 ? `0${departments.length}` : departments.length} Divisions ]
          </p>
        </motion.div>

        {/* Cinematic Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[240px] sm:auto-rows-[260px] md:auto-rows-[280px]">
          {departments.map((vertical, idx) => {
            const layout = BENTO_LAYOUTS[idx % BENTO_LAYOUTS.length];
            return (
            <Link 
              key={vertical.id} 
              href={`/verticals/${vertical.id}`}
              className={`block ${layout.colSpan} ${layout.rowSpan} group`}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: (idx % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                style={{ 
                  WebkitBackdropFilter: 'blur(20px)', 
                  backdropFilter: 'blur(20px)',
                }}
                className="isolate transform-gpu h-full rounded-[2.5rem] p-8 md:p-12 bg-white/5 border border-white/[0.08] shadow-[inset_0_0_30px_rgba(255,255,255,0.05)] relative overflow-hidden flex flex-col justify-between transition-all duration-700 ease-cinematic group-hover:scale-[0.98] group-hover:bg-white/10 group-hover:border-white/10"
              >
                {/* Background Hover Effects */}
                <div className={`absolute inset-0 bg-gradient-to-br ${layout.theme} opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out`} />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.1)_0%,transparent_60%)] opacity-30" />

                {/* Top Section */}
                <div className="flex justify-between items-start z-10 w-full relative">
                  <div className="text-white/40 group-hover:text-white transition-colors duration-500 drop-shadow-md">
                    {vertical.icon}
                  </div>
                  <MagneticEffect intensity={0.2}>
                    <div className="w-12 h-12 rounded-full border border-white/[0.04] flex items-center justify-center text-white/40 group-hover:bg-white group-hover:text-black shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-3xl transition-all duration-500 transform -rotate-45 group-hover:rotate-0">
                      <span className="text-xl leading-none mb-0.5">→</span>
                    </div>
                  </MagneticEffect>
                </div>

                {/* Bottom Section */}
                <div className="relative z-10 w-full">
                  <h3 className="text-fluid-h3 leading-[1.1] font-geist font-bold text-ivory-light mb-2 tracking-tight group-hover:text-white transition-colors duration-500 drop-shadow-sm">
                    {vertical.title}
                  </h3>
                  <p className="text-fluid-p text-ivory-dark/60 font-inter max-w-sm group-hover:text-white/90 transition-colors duration-500 drop-shadow-sm">
                    {vertical.desc}
                  </p>
                </div>
              </motion.div>
            </Link>
          )})}
        </div>
      </div>
    </section>
  );
};
