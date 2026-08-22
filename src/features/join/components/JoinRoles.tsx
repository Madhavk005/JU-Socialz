"use client";

import { motion } from "framer-motion";

const FALLBACK_ROLES = ["Editing", "Graphic Design", "Social Media Management", "Content Creation", "Photography", "Reel Creation", "Cinematography"];

export const JoinRoles = ({ rolesProp }: { rolesProp?: string[] }) => {
  const roles = rolesProp && rolesProp.length > 0 ? rolesProp : FALLBACK_ROLES;

  return (
    <section className="py-16 bg-obsidian border-y border-white/[0.02] overflow-hidden flex flex-col justify-center relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(57,80,162,0.1)_0%,rgba(17,17,17,1)_100%)] pointer-events-none z-10" />
      
      <div className="flex w-[200%] relative z-0">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          className="flex whitespace-nowrap gap-12 md:gap-20 px-8"
        >
          {[...roles, ...roles, ...roles].map((role, idx) => (
            <div key={idx} className="text-2xl md:text-4xl font-bold font-geist text-white/5 tracking-tight hover:text-white transition-colors duration-500 cursor-default">
              {role}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
