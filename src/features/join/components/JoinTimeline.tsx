"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";

interface Step {
  step: string;
  title: string;
  desc: string;
}

const STEPS: Step[] = [
  { step: "01", title: "Apply Online", desc: "Submit your details and interests." },
  { step: "02", title: "Shortlisting", desc: "Our core team reviews your application." },
  { step: "03", title: "Creative Task", desc: "Show us what makes you different." },
  { step: "04", title: "Interaction", desc: "A casual chat to see if we vibe." },
  { step: "05", title: "Welcome", desc: "You are now part of JU-Socialz." },
];

const TimelineStep = ({ s, idx, total, scrollYProgress }: { s: Step, idx: number, total: number, scrollYProgress: MotionValue<number> }) => {
  const activationPoint = idx / (total - 1);
  const nodeScale = useTransform(scrollYProgress, [activationPoint - 0.1, activationPoint], [0.8, 1.2]);
  const nodeBg = useTransform(scrollYProgress, [activationPoint - 0.1, activationPoint], ["#111111", "#ffffff"]);
  const textOpacity = useTransform(scrollYProgress, [activationPoint - 0.1, activationPoint], [0.3, 1]);

  const isEven = idx % 2 === 0;

  return (
    <div className={`relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-16 ${!isEven ? 'md:flex-row-reverse' : ''}`}>
      <motion.div 
        style={{ opacity: textOpacity }} 
        className={`flex-1 w-full pl-12 md:pl-0 ${isEven ? 'md:text-right' : 'md:text-left'} text-left`}
      >
        <h3 className="text-fluid-h2 font-geist font-bold text-ivory-light mb-2">{s.title}</h3>
        <p className="text-ivory-dark/60 font-inter text-base md:text-xl">{s.desc}</p>
      </motion.div>
      
      <motion.div 
        style={{ scale: nodeScale, backgroundColor: nodeBg }}
        className="absolute left-[8px] top-1.5 md:static md:left-auto md:top-auto w-4 h-4 rounded-full border border-white/[0.08] z-20 shrink-0 md:-translate-x-0"
      />
      
      <div className="flex-1 w-full hidden md:block" />
    </div>
  );
};

export const JoinTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="section-padding bg-obsidian-dark overflow-hidden relative">
      <div className="container mx-auto px-6" ref={containerRef}>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-fluid-display font-bold font-geist text-ivory-light  tracking-tight mb-32 text-center"
        >
          The Process
        </motion.h2>

        <div className="max-w-4xl mx-auto relative pl-2 md:pl-0">
          {/* Static Background Line */}
          <div className="absolute left-[15px] md:left-[50%] top-0 bottom-0 w-[1px] bg-white/[0.05] md:-translate-x-1/2" />
          
          {/* Animated Glowing Progress Line */}
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-[15px] md:left-[50%] top-0 w-[2px] bg-white md:-translate-x-1/2 shadow-[0_0_15px_rgba(255,255,255,0.8)] z-0 origin-top" 
          />
          
          <div className="flex flex-col gap-12 md:gap-24 relative z-10">
            {STEPS.map((s, idx) => (
              <TimelineStep 
                key={idx} 
                s={s} 
                idx={idx} 
                total={STEPS.length} 
                scrollYProgress={scrollYProgress} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
