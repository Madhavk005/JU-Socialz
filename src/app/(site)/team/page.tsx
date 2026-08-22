"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FiInstagram, FiLinkedin } from "react-icons/fi";

interface TeamMemberData {
  _id: string;
  name: string;
  role: string;
  slug: string;
  image: string;
  gen: string;
  course: string;
  identity: string;
  socials?: { instagram?: string; linkedin?: string };
}

const TEAM: TeamMemberData[] = [
  { _id: "1", name: "Kartik Saini", role: "Head — SM & Branding", slug: "kartik-saini", image: "/teams/Kartik Saini.jpg", gen: "2017", course: "", identity: "The strategist who bridges the gap between chaos and execution. Has the answer to everything.", socials: { instagram: "https://www.instagram.com/beercusp", linkedin: "https://www.linkedin.com/in/beercusp/" } },
  { _id: "2", name: "Yash Raj", role: "Creative Lead", slug: "yash-raj", image: "/teams/Yash Raj.jpg", gen: "2022", course: "", identity: "A creative polymath. Fluid across disciplines, adapting vision to reality.", socials: { instagram: "https://www.instagram.com/srivastav.yash_", linkedin: "https://www.linkedin.com/in/yash-raj-475124250/" } },
  { _id: "3", name: "Ansh Bhatt", role: "Social Media Manager", slug: "ansh-bhatt", image: "/teams/Ansh Bhatt.jpg", gen: "2023", course: "B.Tech AI-ML", identity: "Speaks when it matters. Works when everyone else is asleep.", socials: { instagram: "https://www.instagram.com/anshhbhatt", linkedin: "https://www.linkedin.com/in/anshbhattt/" } },
  { _id: "4", name: "Ayush Yadav", role: "Content Strategist", slug: "ayush-yadav", image: "/teams/Ayush Yadav.jpg", gen: "2023", course: "B.Tech CSE", identity: "Perfection is a baseline. Pushing boundaries is the goal.", socials: { instagram: "https://www.instagram.com/contentkakalesh", linkedin: "https://www.linkedin.com/in/ayush-yadav-300b43287/" } },
  { _id: "5", name: "Jay Aditya Sharma", role: "Reel Creation", slug: "jay-aditya-sharma", image: "/teams/Jayaditya Sharma.jpg", gen: "2023", course: "B.Tech CSE", identity: "Quiet observer. Lethal executor. Unbothered.", socials: { instagram: "https://www.instagram.com/_.jayaditya._", linkedin: "https://www.linkedin.com/in/jayaditya-sharma/" } },
  { _id: "6", name: "Krish Menaria", role: "Cinematographer", slug: "krish-menaria", image: "/teams/Krish Menaria.jpg", gen: "2023", course: "B.Tech CSE", identity: "Main character energy. Framing life one cinematic shot at a time.", socials: { instagram: "https://www.instagram.com/krish._.menaria", linkedin: "https://www.linkedin.com/in/krish-menaria/" } },
  { _id: "7", name: "Aditi Agrawal", role: "The Main Character", slug: "aditi-agrawal", image: "/teams/Aditi Agrawal.jpg", gen: "2024", course: "", identity: "Ask her team, and they'll tell you: the best version of an idea usually comes out after she's in the room.", socials: { instagram: "https://www.instagram.com/aditi.agarwal.2312", linkedin: "https://www.linkedin.com/in/aditi-agarwal-870361241/" } },
  { _id: "8", name: "Ankit Maji", role: "Cinematographer", slug: "ankit-maji", image: "/teams/Ankit Maji.jpg", gen: "2024", course: "B.Des", identity: "Painting with light and shadow. The visual architect.", socials: { instagram: "https://www.instagram.com/_majiankit_", linkedin: "https://www.linkedin.com/in/majiankit/" } },
  { _id: "9", name: "Azad Nagar", role: "Operation Manager", slug: "azad-nagar", image: "/teams/Azad Nagar.jpg", gen: "2024", course: "", identity: "The glue that holds the chaos together.", socials: { instagram: "https://www.instagram.com/nagar0804", linkedin: "https://www.linkedin.com/in/azad-nagar-4b7466318/" } },
  { _id: "10", name: "Hitesh Nagar", role: "Editor", slug: "hitesh-nagar", image: "/teams/Hitesh Nagar.jpg", gen: "2024", course: "B.Tech CSE", identity: "Seeing the world in LUTs and scopes. The mood setter.", socials: { instagram: "https://www.instagram.com/hitesh.color", linkedin: "https://www.linkedin.com/in/hitesh-nagar-33466331b/" } },
  { _id: "11", name: "Madhav Kohli", role: "Graphic Designer", slug: "madhav-kohli", image: "/teams/Madhav Kohli.jpg", gen: "2024", course: "B.Tech-CSE", identity: "Thrives in the chaos. Designs the impossible.", socials: { instagram: "https://www.instagram.com/whoismdhv_", linkedin: "https://www.linkedin.com/in/madhav-kohli" } },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-obsidian-dark pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="mb-24 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-fluid-display font-bold font-geist tracking-tight text-ivory-light mb-6"
          >
            THE ORIGINALS.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl font-inter text-ivory-light/60 max-w-2xl mx-auto"
          >
            Been there. Done that. Still the benchmark. The people who built SOCIALZ into what it is today.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {TEAM.map((member, idx) => {
            const slug = member.slug || member.name.toLowerCase().replace(/ /g, "-");
            return (
              <Link key={member._id} href={`/teams/${slug}`}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: (idx % 4) * 0.1 }}
                  className="bg-white/5 border border-white/[0.04] rounded-2xl p-6 group hover:bg-white/10 transition-colors h-full flex flex-col cursor-pointer"
                >
                  <div className="aspect-[4/5] bg-obsidian-dark rounded-xl mb-6 overflow-hidden relative border border-white/5">
                    <Image src={member.image} alt={member.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 25vw" />
                  </div>
                  <div className="flex-1 flex flex-col justify-end">
                    <h3 className="text-xl font-bold font-geist text-ivory-light mb-1">{member.name}</h3>
                    <p className="text-slate-blue font-inter text-sm mb-4 font-medium">{member.role}</p>
                    
                    <div className="flex items-center gap-4 text-xs font-inter text-ivory-light/40 mb-4 tracking-widest">
                      <span>Gen {member.gen}</span>
                      {member.course && (
                        <>
                          <span className="w-1 h-1 rounded-full bg-white/20" />
                          <span>{member.course}</span>
                        </>
                      )}
                    </div>
                    
                    <p className="text-ivory-light/70 text-sm italic border-l-2 border-slate-blue pl-3 py-1">
                      &ldquo;{member.identity}&rdquo;
                    </p>

                    {member.socials && (
                      <div className="flex items-center gap-3 pt-3">
                        {member.socials.instagram && (
                          <a
                            href={member.socials.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="w-8 h-8 rounded-full bg-white/5 border border-white/[0.06] flex items-center justify-center text-ivory-light/40 hover:bg-slate-blue hover:text-ivory-light transition-all text-xs"
                          >
                            <FiInstagram className="w-3.5 h-3.5" />
                          </a>
                        )}
                        {member.socials.linkedin && (
                          <a
                            href={member.socials.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="w-8 h-8 rounded-full bg-white/5 border border-white/[0.06] flex items-center justify-center text-ivory-light/40 hover:bg-slate-blue hover:text-ivory-light transition-all text-xs"
                          >
                            <FiLinkedin className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}