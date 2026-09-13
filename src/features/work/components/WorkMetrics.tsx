"use client";

import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

const STATS = [
  { platform: "Facebook", value: "165K+", label: "Followers", icon: FaFacebook, link: "https://www.facebook.com/JecrcUniversity/" },
  { platform: "Instagram", value: "114K+", label: "Followers", icon: FaInstagram, link: "https://www.instagram.com/jecrcuniversity?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
  { platform: "Youtube", value: "65K+", label: "Subscribers", icon: FaYoutube, link: "https://www.youtube.com/@jecrcuvideo" },
  { platform: "Linkedin", value: "60K+", label: "Followers", icon: FaLinkedin, link: "https://www.linkedin.com/school/jecrcuniversity" },
];

export interface Metric {
  platform: string;
  value: string;
  label: string;
  link: string;
  icon: string | IconType;
}

export const WorkMetrics = ({ metrics = STATS }: { metrics?: Metric[] }) => {
  const displayMetrics = metrics && metrics.length > 0 ? metrics : STATS;
  return (
    <section className="section-padding bg-obsidian-dark flex flex-col items-center justify-center border-y border-white/[0.02]">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24"
        >
          <h2 className="text-fluid-display font-bold font-geist text-ivory-light leading-[1] tracking-tight mb-8 text-balance">
            Millions reached.<br />
            Hundreds inspired.<br />
            <span className="italic text-slate-lighter">Built entirely by students.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {displayMetrics.map((stat, idx) => {
            let Icon = stat.icon;
            if (typeof stat.icon === 'string') {
              if (stat.icon === 'FaFacebook') Icon = FaFacebook;
              else if (stat.icon === 'FaInstagram') Icon = FaInstagram;
              else if (stat.icon === 'FaYoutube') Icon = FaYoutube;
              else if (stat.icon === 'FaLinkedin') Icon = FaLinkedin;
              else Icon = FaFacebook;
            }

            return (
              <motion.a 
                href={stat.link}
                target="_blank"
                rel="noopener noreferrer"
                key={stat.platform}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.1 * idx, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 glass-card rounded-2xl md:rounded-[32px] group hover:shadow-glow hover:-translate-y-2 transition-all duration-500 ease-cinematic text-center"
              >
                <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 md:mb-8 group-hover:bg-slate-blue/20 group-hover:border-slate-blue/40 transition-all duration-500 shrink-0">
                  <Icon className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 text-ivory-light/60 group-hover:text-slate-lighter transition-colors duration-500" />
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold font-geist text-ivory-light tracking-tight mb-1 md:mb-2 w-full break-words">
                  {stat.value}
                </h3>
                <p className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-ivory-dark/60 uppercase mt-2 leading-relaxed">
                  <span className="text-slate-lighter opacity-80">{stat.platform}</span> <br/> {stat.label}
                </p>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
