"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
const FALLBACK_LEADERS = [
  { 
    name: "Kartik Saini", 
    role: "Head - Social Media and Marketing", 
    generation: "2017",
    identity: "The strategist who bridges the gap between chaos and execution. Has the answer to everything.",
    image: "/teams/Kartik Saini.jpg",
    social: {
      instagram: "https://www.instagram.com/beercusp?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      linkedin: "https://www.linkedin.com/in/beercusp/"
    }
  },
  { 
    name: "Aditi Agrawal", 
    role: "The Main Character", 
    generation: "2024",
    identity: "Ask her team, and they'll tell you: the best version of an idea usually comes out after she's in the room.",
    image: "/teams/Aditi Agrawal.jpg",
    social: {
      instagram: "https://www.instagram.com/aditi.agarwal.2312?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      linkedin: "https://www.linkedin.com/in/aditi-agarwal-870361241/"
    }
  },
  { 
    name: "Yash Raj", 
    role: "Creative Lead", 
    generation: "2022",
    identity: "A creative polymath. Fluid across disciplines, adapting vision to reality.",
    image: "/teams/Yash Raj.jpg",
    social: {
      instagram: "https://www.instagram.com/srivastav.yash_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      linkedin: "https://www.linkedin.com/in/yash-raj-475124250/"
    }
  },
];

export interface Leader {
  name: string;
  role: string;
  generation?: string;
  identity?: string;
  image?: string;
  social?: {
    instagram?: string;
    linkedin?: string;
  };
}

export const Leadership = ({ leaders = FALLBACK_LEADERS }: { leaders?: Leader[] }) => {
  const displayLeaders = leaders;

  return (
    <section className="py-24 relative overflow-hidden bg-[#0a0a0a] border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
          <h2 className="text-fluid-display font-bold font-geist text-ivory-light  tracking-tight leading-none">
            The <span className="text-slate-blue italic">Visionaries.</span>
          </h2>
        </div>

        <div className="flex flex-col gap-32 md:gap-48">
          {displayLeaders.map((leader, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24`}
            >
              <div className="w-full md:w-1/2 aspect-[4/5] rounded-[2rem] overflow-hidden relative shadow-2xl bg-[#0a0a0a]">
                {typeof leader.image === 'string' && (
                  <Image 
                    src={leader.image}
                    alt={leader.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-[2s] hover:scale-105"
                    style={{ objectPosition: 'center 20%' }}
                  />
                )}
              </div>
              
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <span className="text-sm font-bold tracking-[0.3em]  text-slate-blue mb-4 block">
                  {leader.role}
                </span>
                <h3 className="text-fluid-display font-geist font-bold text-ivory-light mb-8  tracking-tight leading-[0.9]">
                  {leader.name}
                </h3>
                
                <p className="text-fluid-h3 text-white/80 font-inter italic font-light max-w-xl mb-12">
                  "{leader.identity}"
                </p>
                
                <div className="flex flex-wrap items-center gap-4 sm:gap-8 border-t border-white/[0.04] pt-8">
                  <div className="flex flex-col gap-1 min-w-[100px]">
                    <span className="text-xs text-white/40  tracking-widest font-bold">Generation</span>
                    <span className="text-lg text-ivory-light font-medium">{leader.generation}</span>
                  </div>
                  
                  {leader.social && (
                    <>
                      <div className="hidden sm:block w-[1px] h-10 bg-white/10" />
                      <div className="flex items-center gap-3 w-full sm:w-auto mt-2 sm:mt-0">
                        {leader.social.instagram && (
                          <a href={leader.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-slate-blue hover:border-slate-blue transition-all">
                            <FaInstagram className="w-4 h-4" />
                          </a>
                        )}
                        {leader.social.linkedin && (
                          <a href={leader.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-slate-blue hover:border-slate-blue transition-all">
                            <FaLinkedin className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
