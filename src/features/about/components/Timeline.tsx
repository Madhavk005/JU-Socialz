"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

interface Milestone {
  year: string;
  title: string;
  desc: string;
}

const MILESTONES: Milestone[] = [
  { year: "2012", title: "The Beginning", desc: "The initial spark of the media community." },
  { year: "2017", title: "Born As JU Socialz", desc: "JU Socialz officially started its journey." },
  { year: "2024", title: "50K Milestone", desc: "Completed 50K Followers on Instagram." },
  { year: "2025", title: "The Revamp", desc: "Got a revamp, a new office, and hit 100K Followers on Instagram." },
  { year: "2026", title: "The Legacy", desc: "The legacy still continues." },
];

const MilestoneNode = ({ item, idx, total, scrollYProgress }: { item: Milestone, idx: number, total: number, scrollYProgress: MotionValue<number> }) => {
  const activationPoint = idx / (total - 1);
  const isFirst = idx === 0;
  const isLast = idx === total - 1;

  const scaleInput = isFirst ? [0, 1] : [activationPoint - 0.1, activationPoint];
  const scaleOutput = isFirst ? [1.5, 1.5] : [1, 1.5];

  const bgInput = isFirst ? [0, 1] : [activationPoint - 0.1, activationPoint];
  const bgOutput = isFirst ? ["#fff", "#fff"] : ["#111", "#fff"];

  const textInput = isFirst ? [0, 1] : [activationPoint - 0.15, activationPoint];
  const textOutput = isFirst ? [1, 1] : [0.3, 1];

  let glowInput, glowOutput;
  if (isFirst) {
    glowInput = [0, 0.1];
    glowOutput = [1, 0.5];
  } else if (isLast) {
    glowInput = [activationPoint - 0.1, activationPoint];
    glowOutput = [0, 1];
  } else {
    glowInput = [activationPoint - 0.1, activationPoint, activationPoint + 0.1];
    glowOutput = [0, 1, 0.5];
  }

  const nodeScale = useTransform(scrollYProgress, scaleInput, scaleOutput);
  const nodeBg = useTransform(scrollYProgress, bgInput, bgOutput);
  const glowOpacity = useTransform(scrollYProgress, glowInput, glowOutput);
  const textOpacity = useTransform(scrollYProgress, textInput, textOutput);

  return (
    <div className="w-[80vw] md:w-[400px] flex flex-col relative group cursor-default z-20">
      <div className="relative flex flex-col justify-center h-[300px]">
        {/* Node Point */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 z-20">
          <motion.div 
            style={{ scale: nodeScale, backgroundColor: nodeBg }}
            className="w-4 h-4 rounded-full border border-white/[0.08] transition-colors relative"
          >
            <motion.div 
              style={{ opacity: glowOpacity }}
              className="absolute inset-0 rounded-full bg-white blur-md"
            />
          </motion.div>
        </div>
        
        {/* Content Box */}
        <motion.div 
          style={{ opacity: textOpacity }}
          className={`absolute ${idx % 2 === 0 ? 'bottom-[180px]' : 'top-[180px]'} left-0`}
        >
          <h4 className="text-fluid-display leading-none font-bold font-geist text-white/10 group-hover:text-white/20 transition-colors duration-500 mb-2">
            {item.year}
          </h4>
          <h5 className="text-3xl font-bold font-geist text-ivory-light mb-4">{item.title}</h5>
          <p className="text-ivory-dark/60 font-inter text-lg max-w-sm">{item.desc}</p>
        </motion.div>
      </div>
    </div>
  );
};

const MobileMilestone = ({ item }: { item: Milestone }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "center center"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const bg = useTransform(scrollYProgress, [0, 1], ["#111", "#fff"]);

  return (
    <motion.div ref={ref} style={{ opacity }} className="flex gap-8 relative items-start">
      <motion.div style={{ scale, backgroundColor: bg }} className="w-6 h-6 rounded-full border border-white/[0.08] flex-shrink-0 z-10 mt-2 shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
      <div className="flex flex-col pb-16">
        <h4 className="text-fluid-h1 font-bold font-geist text-white/10 mb-2">{item.year}</h4>
        <h5 className="text-2xl font-bold font-geist text-ivory-light mb-3">{item.title}</h5>
        <p className="text-ivory-dark/60 font-inter text-base leading-relaxed">{item.desc}</p>
      </div>
    </motion.div>
  );
};

export const Timeline = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Calculate slide amount based on the number of items. 
  // We want the last item to end up near the left-center of the screen.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(MILESTONES.length - 1) * 20}%`]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const endOpacity = useTransform(scrollYProgress, [0.75, 1], [0, 1]);

  return (
    <section ref={targetRef} className="bg-obsidian-dark relative h-auto md:h-[400vh] border-y border-white/[0.04]">
      <div className="sticky top-0 md:h-screen flex flex-col justify-center overflow-hidden py-32 md:py-0">
        <div className="container mx-auto container-padding mb-16 md:mb-24 relative z-30">
          <h2 className="text-fluid-display leading-none font-bold font-geist text-ivory-light  tracking-tight">
            The <span className="text-slate-blue italic font-light tracking-tight lowercase">Evolution</span>.
          </h2>
        </div>
        
        {/* Desktop: Pinned Scroll */}
        <div className="hidden md:flex flex-col relative w-full h-[500px] justify-center overflow-hidden">
          
          {/* Subtle Ending Watermark */}
          <motion.div 
            style={{ opacity: endOpacity }}
            className="absolute right-[5vw] top-1/2 -translate-y-1/2 text-[8vw] font-bold font-geist text-white/[0.03]  whitespace-nowrap select-none pointer-events-none z-0 tracking-tight"
          >
            Still In Progress.
          </motion.div>

          <motion.div style={{ x }} className="flex gap-0 px-[10vw] w-max items-center relative h-full z-10">
            
            {/* The Background Line (Track) */}
            <div className="absolute top-[50%] left-[10vw] right-[10vw] h-[2px] bg-white/[0.05] -translate-y-1/2 z-0" />
            
            {/* The Active Filled Line */}
            <motion.div 
              className="absolute top-[50%] left-[10vw] right-[10vw] h-[2px] bg-ivory-light shadow-[0_0_20px_rgba(255,255,255,0.8)] -translate-y-1/2 z-10 origin-left"
              style={{ scaleX: progressWidth }}
            />

            {MILESTONES.map((item, idx) => (
              <MilestoneNode 
                key={idx} 
                item={item} 
                idx={idx} 
                total={MILESTONES.length} 
                scrollYProgress={scrollYProgress} 
              />
            ))}
          </motion.div>
        </div>

        {/* Mobile: Native Scroll with Reveals */}
        <div className="flex md:hidden flex-col px-6 w-full relative pt-12 pb-24">
          {/* Mobile Vertical Track */}
          <div className="absolute left-[35px] top-16 bottom-16 w-[2px] bg-white/[0.05]" />
          
          {MILESTONES.map((item) => (
            <MobileMilestone key={item.year} item={item} />
          ))}

          {/* Mobile Ending Watermark */}
          <div className="mt-8 pl-8">
            <h3 className="text-4xl font-bold font-geist text-white/[0.05]  tracking-tight leading-none">
              Still In<br/>Progress.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};
