"use client";

import { motion, useInView, useMotionValue, useTransform, animate, useScroll } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { GlobalCta } from "@/components/ui/shared/GlobalCta";
import { MagneticEffect } from "@/components/ui/utils/MagneticEffect";

const ACHIEVEMENTS = [
  { value: 6.1, suffix: "M+", label: "Collective Subscribers On YouTube" },
  { value: 300, suffix: "K+", label: "Collective Followers On Instagram" },
  { value: 100, suffix: "+", label: "Active Creators & Personal Brands" },
  { value: 2, suffix: "M+", label: "Organic Reach Generated" },
];

const Counter = ({ value, suffix }: { value: number, suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  
  const hasDecimal = value % 1 !== 0;
  const rounded = useTransform(count, (latest) => 
    hasDecimal ? latest.toFixed(1) : Math.round(latest).toString()
  );

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { 
        duration: 2.5, 
        ease: [0.22, 1, 0.36, 1] 
      });
      return controls.stop;
    }
  }, [isInView, value, count]);

  return (
    <span ref={ref} className="text-fluid-display leading-none font-bold font-geist text-ivory-light tracking-tight mb-4 group-hover:text-slate-lighter transition-colors duration-500 flex items-center drop-shadow-sm relative z-10">
      <motion.span>{rounded}</motion.span>
      <span className="text-slate-blue/60 ml-1 font-light">{suffix}</span>
    </span>
  );
};

const WHY_JOIN = [
  "Learn content creation practically",
  "Work on cinematic and storytelling-based projects",
  "Collaborate with creators across different domains",
  "Build personal brands and portfolios",
  "Learn editing, cinematography, and creative strategy",
  "Be part of a high-energy creator ecosystem",
];

const MENTORS = [
  { name: "Arpit Agrawal", role: "Vice Chairperson", image: "/creators/Arpit Agrawal.jpg" },
  { name: "Dheemant Agrawal", role: "Director, Digital Strategies & Student Affairs", image: "/creators/Dheemant Agrawal.jpg" },
  { name: "Kartik Saini", role: "Captain Cool", image: "/creators/Kartik Saini.jpg" },
];

const CORE_TEAM = [
  { name: "Manya Gupta", role: "Head – JU Creators", course: "MA – Psychology", image: "/creators/Manya Gupta.png" },
  { name: "Ram Goyal", role: "Operations Lead", course: "BBA – Data Analytics", image: "/creators/Ram Goyal.png" },
  { name: "Atul Khurana", role: "Creative Lead", course: "BCA – AI ML", image: "/creators/Atul Khurana.jpg" },
];

interface Member {
  name: string;
  role: string;
  course?: string;
  image?: string;
}

export default function JUCreatorsClient({ 
  mentors = MENTORS, 
  coreTeam = CORE_TEAM 
}: { 
  mentors?: Member[], 
  coreTeam?: Member[] 
}) {
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacityHero = useTransform(scrollY, [0, 800], [1, 0]);

  const displayMentors = mentors;

  const displayCoreTeam = coreTeam;
  return (
    <>
      <main className="bg-obsidian min-h-screen">
        {/* HERO SECTION */}
        <section className="relative h-[100dvh] flex items-center justify-center overflow-hidden bg-obsidian-dark">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-obsidian-dark/80 z-10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(57,80,162,0.15)_0%,rgba(17,17,17,1)_100%)] z-20 mix-blend-multiply" />
          </div>

          <motion.div 
            style={{ y: yHero, opacity: opacityHero }}
            className="container relative z-30 px-6 mx-auto text-center mt-20"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-xs md:text-sm font-bold tracking-[0.3em] text-slate-lighter mb-8 opacity-80">
                The Official Creators Community of JECRC University
              </h2>
              <motion.h1 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="text-fluid-display leading-[0.9] font-bold font-geist tracking-tight text-ivory-light mb-8 text-balance"
              >
                JU <br className="hidden md:block" />
                <span className="italic font-light text-slate-lighter tracking-tight lowercase">creators.</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 1 }}
                className="text-lg md:text-2xl font-inter text-ivory-dark max-w-3xl mx-auto mb-12 text-balance leading-[1.8] font-light"
              >
                Not just creators. Storytellers with perspective.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 1 }}
                className="flex justify-center"
              >
                <MagneticEffect intensity={0.4}>
                  <a 
                    href="https://www.instagram.com/jucreators?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 glass-card hover:bg-white/10 hover:scale-105 transition-all text-sm font-bold tracking-widest uppercase"
                  >
                    Follow on Instagram <span className="text-lg leading-none">&rarr;</span>
                  </a>
                </MagneticEffect>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* WHAT IS JU CREATORS */}
        <section className="section-padding bg-obsidian border-t border-white/[0.02]">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                <h2 className="text-fluid-display font-bold font-geist text-ivory-light  tracking-tight leading-none mb-8">
                  What Is <br /><span className="text-slate-blue italic font-light lowercase">ju creators?</span>
                </h2>
                <div className="text-xl md:text-2xl font-geist font-medium text-ivory-light/90 leading-[1.4] tracking-tight">
                  <p>
                    The official creators community of JECRC University. Built for students who want to explore storytelling, execute cinematic projects, and build digital identities through real-world collaboration.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative aspect-video w-full rounded-2xl md:rounded-[2rem] overflow-hidden border border-white/[0.04] shadow-[0_0_50px_rgba(57,80,162,0.15)] group"
              >
                <div className="absolute inset-0 bg-slate-blue/20 mix-blend-overlay pointer-events-none group-hover:opacity-0 transition-opacity duration-700 z-10" />
                <iframe
                  src="https://www.youtube.com/embed/-p58Ba5Xkko?si=JBEwSLc1NrbyaQ5S&rel=0"
                  title="JU Creators Showcase"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 relative z-0"
                ></iframe>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section className="section-padding bg-obsidian-dark border-y border-white/[0.02] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(57,80,162,0.1)_0%,transparent_70%)] pointer-events-none" />
          <div className="container mx-auto px-6 relative z-10 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center md:text-left">
              {ACHIEVEMENTS.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="glass-card p-10 rounded-[2rem] border border-white/5 flex flex-col items-center md:items-start group hover:bg-white/[0.03] transition-colors relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    <div className="w-32 h-32 bg-slate-blue/20 rounded-full blur-[3rem]" />
                  </div>
                  <Counter value={stat.value} suffix={stat.suffix} />
                  <span className="text-xs font-inter text-ivory-dark/60  tracking-[0.2em] font-medium group-hover:text-ivory-light transition-colors duration-500 mt-auto pt-6 relative z-10">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY JOIN */}
        <section className="section-padding bg-obsidian relative">
          <div className="container mx-auto px-6 max-w-7xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-fluid-display leading-[0.9] font-bold font-geist text-ivory-light  tracking-tight mb-24 text-center"
            >
              Why <span className="text-slate-blue italic font-light tracking-tight lowercase">join?</span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {WHY_JOIN.map((reason, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="glass-card p-10 md:p-12 rounded-[2rem] group hover:bg-white/[0.03] transition-colors border border-white/5"
                >
                  <div className="text-slate-blue mb-6">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="text-xl md:text-2xl font-geist font-medium text-ivory-light leading-snug tracking-tight">
                    {reason}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* LEADERSHIP & TEAM */}
        <section className="section-padding bg-obsidian-dark border-t border-white/[0.02] relative">
          <div className="container mx-auto px-6 max-w-7xl">
            {/* Mentors */}
            <div className="mb-32">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="text-fluid-display leading-[0.9] font-bold font-geist text-ivory-light  tracking-tight mb-16"
              >
                Our <span className="text-slate-blue italic font-light tracking-tight lowercase">mentors.</span>
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {displayMentors.map((mentor, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="group p-8 md:p-10 border-l-2 border-slate-blue/30 hover:border-slate-blue transition-colors flex flex-col"
                  >
                    <div className="relative w-full aspect-square mb-8 overflow-hidden rounded-xl border border-white/[0.04]">
                      {mentor.image && (
                        <Image 
                          src={mentor.image} 
                          alt={mentor.name}
                          fill
                          className="object-cover object-[center_top] grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                        />
                      )}
                    </div>
                    <h3 className="text-fluid-h2 font-geist font-bold text-ivory-light tracking-tight  mb-4">{mentor.name}</h3>
                    <p className="text-[11px] font-bold tracking-[0.2em]  text-slate-lighter">{mentor.role}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Core Team */}
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="text-fluid-display leading-[0.9] font-bold font-geist text-ivory-light  tracking-tight mb-16"
              >
                Core <span className="text-slate-blue italic font-light tracking-tight lowercase">team.</span>
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {displayCoreTeam.map((member, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="glass-card group p-8 md:p-10 rounded-[2rem] border border-white/5 flex flex-col"
                  >
                    <div className="relative w-full aspect-[4/5] mb-8 overflow-hidden rounded-xl border border-white/[0.04]">
                      {member.image && (
                        <Image 
                          src={member.image} 
                          alt={member.name}
                          fill
                          className="object-cover object-[center_top] grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                        />
                      )}
                    </div>
                    <h3 className="text-fluid-h2 font-geist font-bold text-ivory-light tracking-tight  mb-4">{member.name}</h3>
                    <p className="text-[11px] font-bold tracking-[0.2em]  text-slate-blue mb-4 block">{member.role}</p>
                    <div className="pt-6 mt-auto border-t border-white/5">
                      <span className="text-[10px] font-bold tracking-widest  text-white/40">{member.course}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <GlobalCta titleLine1="Become A" titleLine2="Creator." />
    </>
  );
}
