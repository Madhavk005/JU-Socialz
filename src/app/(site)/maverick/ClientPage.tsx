"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { GlobalCta } from "@/components/ui/shared/GlobalCta";
import Image from "next/image";
import { MagneticEffect } from "@/components/ui/utils/MagneticEffect";

const MAVERICK_TEAM = [
  { name: "Parth Sharma", role: "President", image: "/maverick/Parth Sharma.png" },
  { name: "Ojasv Gupta", role: "Vice President", image: "/maverick/Ojasv Gupta.jpg" },
  { name: "Priyanshu Chugh", role: "Insta Head", image: "/maverick/Priyanshu Chugh.jpeg" },
  { name: "Harsh Tailor", role: "Database Head", image: "/maverick/Harsh.jpg" },
  { name: "Ish Vageriya", role: "Database Head", image: "/maverick/Ish.jpg" },
  { name: "Anuj Kumawat", role: "Core Team", image: "/maverick/Anuj Kumawat.jpg" },
  { name: "Chhaya Saini", role: "Core Team", image: "/maverick/Chhaya Saini.png" },
  { name: "Chirag Sharma", role: "Core Team", image: "/maverick/Chirag Sharma.jpeg" },
  { name: "Divyansh Soni", role: "Core Team", image: "/maverick/Divyansh Soni.jpg" },
  { name: "Gurpreet Singh", role: "Core Team", image: "/maverick/Gurpreet Singh.jpg" },
  { name: "Madhav Gupta", role: "Core Team", image: "/maverick/Madhav Gupta.jpeg" },
  { name: "Abhinav Rajput", role: "Core Team", image: "/maverick/Abhinav Rajput.jpeg" },
];

interface Member {
  name: string;
  role: string;
  image?: string;
}

export default function MaverickClient({ teamMembers = MAVERICK_TEAM }: { teamMembers?: Member[] }) {
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacityHero = useTransform(scrollY, [0, 800], [1, 0]);

  const displayTeam = teamMembers;
  
  return (
    <>
      <main className="bg-obsidian min-h-screen">
        {/* HERO SECTION */}
        <section className="relative h-[100dvh] flex items-center justify-center overflow-hidden bg-obsidian-dark">
          {/* Subtle photography lens flare / gradient effects */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-obsidian-dark/90 z-10" />
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-slate-blue/10 rounded-full blur-[120px] z-20 mix-blend-screen" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] z-20 mix-blend-screen" />
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
                Official Media Club of JECRC University
              </h2>
              <motion.h1 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="text-fluid-display leading-[0.9] font-bold font-geist tracking-tight text-ivory-light mb-8 text-balance"
              >
                Maverick <br className="hidden md:block" />
                <span className="italic font-light text-slate-lighter tracking-tight lowercase">club.</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 1 }}
                className="text-lg md:text-2xl font-inter text-ivory-dark max-w-3xl mx-auto mb-12 text-balance leading-[1.8] font-light"
              >
                Capturing the vibrant moments orchestrated by the university.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 1 }}
                className="flex justify-center"
              >
                <MagneticEffect intensity={0.4}>
                  <a 
                    href="https://www.instagram.com/maverickclub_ju?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
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

        {/* ABOUT MAVERICK */}
        <section className="section-padding bg-obsidian border-t border-white/[0.02]">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
              
              {/* Dynamic Image Collage */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="w-full lg:w-1/2 relative h-[400px] sm:h-[500px] lg:h-[650px]"
              >
                <div className="absolute top-0 left-0 w-[75%] h-[75%] rounded-[2rem] overflow-hidden border border-white/[0.04] shadow-2xl z-10 group">
                  <Image
                    src="/maverick/Team Mav 01.jpg"
                    alt="Maverick Team in Action"
                    fill
                    className="object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                </div>
                
                <div className="absolute bottom-0 right-0 w-[65%] h-[60%] rounded-[2rem] overflow-hidden border-[8px] border-obsidian shadow-2xl z-20 group">
                  <Image
                    src="/maverick/Team Mav 02.jpg"
                    alt="Maverick Team Group"
                    fill
                    className="object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                </div>
              </motion.div>

              {/* Text Content */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="w-full lg:w-1/2"
              >
                <h2 className="text-fluid-display font-bold font-geist text-ivory-light  tracking-tight leading-none mb-12">
                  The <span className="text-slate-blue italic font-light lowercase">vision.</span>
                </h2>
                <div className="space-y-8 text-fluid-p font-inter text-ivory-dark/70 font-light leading-[1.8]">
                  <p>
                    Maverick Club, the official media club of JECRC University, is a community tailored for photography enthusiasts eager to exchange knowledge and enhance their skills.
                  </p>
                  <p>
                    Embracing a diverse array of events, including sports events and our annual techno-cultural fest, <span className="text-white font-medium">JU Rhythm</span>, the club diligently captures the vibrant moments orchestrated by the university.
                  </p>
                  <div className="pl-6 border-l-2 border-slate-blue/30 pt-2 pb-2">
                    <p className="text-ivory-light font-medium italic">
                      "Beyond documenting events, Maverick Club is a proactive hub, organizing workshops, competitions, activities, and photowalks to foster skill development and creative exploration among its members."
                    </p>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* INITIATIVES */}
        <section className="section-padding bg-obsidian-dark border-y border-white/[0.02]">
          <div className="container mx-auto px-6 max-w-7xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-fluid-display leading-[0.9] font-bold font-geist text-ivory-light  tracking-tight mb-24 text-center"
            >
              What we <span className="text-slate-blue italic font-light tracking-tight lowercase">do.</span>
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Workshops", desc: "Technical sessions on lighting, composition, and editing techniques." },
                { title: "Photowalks", desc: "Exploring the city and campus through collaborative photography." },
                { title: "Event Coverage", desc: "Capturing the energy of JU Rhythm, sports events, and cultural fests." },
                { title: "Competitions", desc: "Pushing creative boundaries through thematic photography contests." },
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="glass-card p-10 rounded-[2rem] group hover:bg-white/10 transition-colors"
                >
                  <div className="text-slate-blue mb-6">
                    <svg className="w-8 h-8 opacity-60 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-geist font-bold text-ivory-light  tracking-tight mb-4">{item.title}</h3>
                  <p className="text-ivory-dark/60 font-inter font-light leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* TEAM SECTION */}
        <section className="section-padding bg-obsidian border-t border-white/[0.02]">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="flex flex-col items-center text-center mb-24">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="text-fluid-display leading-[0.9] font-bold font-geist text-ivory-light  tracking-tight mb-6"
              >
                The <span className="text-slate-blue italic font-light tracking-tight lowercase">moment capturers.</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-ivory-dark/50 font-inter font-light  tracking-[0.2em] text-sm"
              >
                [ Maverick Core Team ]
              </motion.p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {displayTeam.map((member, idx) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: (idx % 4) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="group"
                >
                  <div className="aspect-[3/4] relative overflow-hidden rounded-[2rem] bg-obsidian-dark border border-white/5 mb-6">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover object-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-white/5 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700">
                        <span className="text-white/20 font-geist  font-bold tracking-widest text-xs">No Photo</span>
                      </div>
                    )}
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian-dark via-obsidian-dark/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                    
                    <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h4 className="text-2xl font-bold font-geist text-ivory-light  tracking-tight mb-2">
                        {member.name}
                      </h4>
                      <p className="text-xs font-bold tracking-[0.2em] text-slate-blue ">
                        {member.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <GlobalCta titleLine1="Become the Part of the" titleLine2="team." />
    </>
  );
}
