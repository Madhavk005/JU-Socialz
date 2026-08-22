"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

export interface StatData {
  value?: number;
  suffix?: string;
  label: string;
  textValue?: string;
}

const FALLBACK_STATS: StatData[] = [
  { value: 300, suffix: "+", label: "Crew Members (till date)" },
  { value: 500, suffix: "+", label: "Campaigns" },
  { value: 800, suffix: " M+", label: "Views" },
  { value: 5000, suffix: "+", label: "Films" },
];

const Counter = ({ value, suffix, textValue }: { value?: number, suffix?: string, textValue?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    if (isInView && value !== undefined) {
      const controls = animate(count, value, { 
        duration: 2.5, 
        ease: [0.22, 1, 0.36, 1] // Global cinematic curve
      });
      return controls.stop;
    }
  }, [isInView, value, count]);

  return (
    <span ref={ref} className="text-fluid-display leading-none font-bold font-geist text-ivory-light tracking-tight mb-4 group-hover:text-slate-lighter transition-colors duration-500 flex items-center justify-center md:justify-start drop-shadow-sm">
      {textValue ? (
        <span>{textValue}</span>
      ) : (
        <>
          <motion.span>{rounded}</motion.span>
          <span className="text-slate-blue/60 ml-1 font-light">{suffix}</span>
        </>
      )}
    </span>
  );
};

export const Stats = ({ statsProp = FALLBACK_STATS }: { statsProp?: StatData[] }) => {
  const parsedStats = statsProp && statsProp.length > 0 ? statsProp : FALLBACK_STATS;

  return (
    <section className="section-padding bg-obsidian-dark border-t border-white/[0.02] relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(57,80,162,0.1)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-8 md:gap-x-12 text-center md:text-left">
          {parsedStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className={`flex flex-col group cursor-default ${index !== 0 ? 'md:border-l md:border-white/5 md:pl-12' : ''}`}
            >
              <Counter value={stat.value} suffix={stat.suffix} textValue={stat.textValue} />
              <span className="text-[10px] md:text-xs font-inter text-ivory-dark/40  tracking-[0.3em] font-bold group-hover:text-white transition-colors duration-500">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
