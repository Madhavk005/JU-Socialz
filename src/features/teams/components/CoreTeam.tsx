"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiInstagram, FiLinkedin } from "react-icons/fi";
const FALLBACK_MEMBERS = [
  // Gen 2023
  { name: "Ansh Bhatt", role: "Social Media Manager", generation: "2023", course: "B.Tech AI-ML", identity: "Speaks when it matters. Works when everyone else is asleep.", image: "/teams/Ansh Bhatt.jpg", socials: { instagram: "https://www.instagram.com/anshhbhatt?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", linkedin: "https://www.linkedin.com/in/anshbhattt/" } },
  { name: "Ayush Yadav", role: "Content Strategist", generation: "2023", course: "B.Tech CSE", identity: "Perfection is a baseline. Pushing boundaries is the goal.", image: "/teams/Ayush Yadav.jpg", socials: { instagram: "https://www.instagram.com/contentkakalesh?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", linkedin: "https://www.linkedin.com/in/ayush-yadav-300b43287/" } },
  { name: "Jayaditya Sharma", role: "Reel Creation", generation: "2023", course: "B.Tech CSE", identity: "Quiet observer. Lethal executor. Unbothered.", image: "/teams/Jayaditya Sharma.jpg", socials: { instagram: "https://www.instagram.com/_.jayaditya._/", linkedin: "https://www.linkedin.com/in/jayaditya-sharma/" } },
  { name: "Krish Menaria", role: "Cinematographer", generation: "2023", course: "B.Tech CSE", identity: "Main character energy. Framing life one cinematic shot at a time.", image: "/teams/Krish Menaria.jpg", socials: { instagram: "https://www.instagram.com/krish._.menaria?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", linkedin: "https://www.linkedin.com/in/krish-menaria/" } },
  
  // Gen 2024
  { name: "Ankit Maji", role: "Cinematographer", generation: "2024", course: "B.Des", identity: "Painting with light and shadow. The visual architect.", image: "/teams/Ankit Maji.jpg", socials: { instagram: "https://www.instagram.com/_majiankit_/", linkedin: "https://www.linkedin.com/in/majiankit/" } },
  { name: "Azad Nagar", role: "Operation Manager", generation: "2024", course: "BCA", identity: "The glue that holds the chaos together.", image: "/teams/Azad Nagar.jpg", socials: { instagram: "https://www.instagram.com/nagar0804/", linkedin: "https://www.linkedin.com/in/azad-nagar-4b7466318/" } },
  { name: "Hitesh Nagar", role: "Editor", generation: "2024", course: "B.Tech CSE", identity: "Seeing the world in LUTs and scopes. The mood setter.", image: "/teams/Hitesh Nagar.jpg", socials: { instagram: "https://www.instagram.com/hitesh.color/", linkedin: "" } },
  { name: "Madhav Kohli", role: "Graphic Designer", generation: "2024", course: "B.Tech-CSE", identity: "Thrives in the chaos. Designs the impossible.", image: "/teams/Madhav Kohli.jpg", socials: { instagram: "https://www.instagram.com/whoismdhv_/", linkedin: "https://www.linkedin.com/in/madhav-kohli" } },
];

export interface Member {
  name: string;
  role: string;
  generation?: string;
  course?: string;
  identity?: string;
  image?: string;
  socials?: {
    instagram?: string;
    linkedin?: string;
  };
}

export const CoreTeam = ({ members = FALLBACK_MEMBERS }: { members?: Member[] }) => {
  const displayMembers = members;

  return (
    <section className="section-padding bg-obsidian-dark relative">
      <div className="container mx-auto container-padding mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 max-w-7xl">
        <h2 className="text-fluid-display leading-[0.9] font-bold font-geist text-ivory-light  tracking-tight mb-4">
          The <span className="text-slate-blue italic font-light tracking-tight lowercase">movement.</span>
        </h2>
        <p className="text-white/40  tracking-[0.2em] font-bold text-sm">
          [ The Collective ]
        </p>
      </div>

      <div className="container mx-auto container-padding grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-20 max-w-7xl">
        {displayMembers.map((member, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: (idx % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col group cursor-pointer"
          >
            <div className="aspect-square sm:aspect-[4/5] relative overflow-hidden rounded-[1.5rem] mb-6 bg-[#0a0a0a]">
              {typeof member.image === 'string' && (
                <Image 
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-all duration-[1.5s] group-hover:scale-105 mix-blend-luminosity opacity-80 group-hover:mix-blend-normal group-hover:opacity-100"
                />
              )}
            </div>
            
            <div className="flex flex-col flex-grow">
              <h4 className="text-fluid-h2 font-geist font-bold text-ivory-light  tracking-tight mb-1 group-hover:text-white transition-colors">
                {member.name}
              </h4>
              <span className="text-[11px] font-bold tracking-[0.2em]  text-slate-blue mb-4 block">
                {member.role}
              </span>

              {member.identity && (
                <p className="text-fluid-p text-ivory-dark/70 font-inter italic mb-6 flex-grow">
                  "{member.identity}"
                </p>
              )}

              <div className="flex flex-wrap items-center justify-between gap-4 mt-auto pt-6 border-t border-white/5">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  {member.generation && (
                    <span className="text-[10px] font-bold tracking-widest  text-white/40">GEN {member.generation}</span>
                  )}
                  {member.generation && member.course && (
                    <span className="text-[10px] text-white/10">•</span>
                  )}
                  {member.course && (
                    <span className="text-[10px] font-bold tracking-widest  text-white/40">{member.course}</span>
                  )}
                </div>
                
                {member.socials && (
                  <div className="flex items-center gap-3">
                    {member.socials.instagram && (
                      <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-slate-blue transition-colors p-2.5 -m-2.5">
                        <FiInstagram className="w-[25px] h-[25px]" />
                      </a>
                    )}
                    {member.socials.linkedin && (
                      <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-slate-blue transition-colors p-2.5 -m-2.5">
                        <FiLinkedin className="w-[25px] h-[25px]" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
