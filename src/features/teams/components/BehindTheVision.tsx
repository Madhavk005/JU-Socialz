"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const VISIONARIES = [
  {
    name: "Arpit Agrawal",
    role: "The Game Changer",
    image: "/creators/Arpit Agrawal.jpg",
  },
  {
    name: "Dheemant Agrawal",
    role: "The Community Alchemist",
    image: "/creators/Dheemant Agrawal.jpg",
  },
  {
    name: "Dhruvi Agrawal",
    role: "The Boss Lady",
    image: "/creators/Dhruvi Agrawal.jpg",
  },
];

export const BehindTheVision = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-obsidian-dark border-t border-white/[0.02]">
      {/* Background radial highlight */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(57,80,162,0.08)_0%,transparent_50%)]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="mb-24 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-xs font-bold tracking-[0.3em] text-slate-blue mb-4 block uppercase"
          >
            Institutional Leaders
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-fluid-display leading-[0.9] font-bold font-geist text-ivory-light tracking-tight"
          >
            Behind the <span className="text-slate-blue italic font-light tracking-tight lowercase">vision.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VISIONARIES.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative rounded-[2rem] p-8 bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] hover:border-white/[0.08] transition-all duration-500 flex flex-col h-full overflow-hidden"
            >
              {/* Card background glowing gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-slate-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
              
              <div className="aspect-[4/5] relative w-full rounded-2xl overflow-hidden mb-8 z-10">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                  style={{ objectPosition: 'center 20%' }}
                />
              </div>

              <div className="flex flex-col flex-grow z-10">
                <span className="text-xs font-bold tracking-[0.2em] text-slate-blue mb-3 block uppercase">
                  {item.role}
                </span>
                <h3 className="text-2xl font-bold font-geist text-ivory-light tracking-tight">
                  {item.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
