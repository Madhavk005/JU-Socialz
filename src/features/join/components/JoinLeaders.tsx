"use client";

import { motion } from "framer-motion";

interface Leader {
  name: string;
  role: string;
}

const FALLBACK_LEADERS: Leader[] = [
  { name: "Parth Sharma", role: "President" },
  { name: "Ojasv Gupta", role: "Vice President" },
  { name: "Priyanshu Chugh", role: "Insta Head" },
  { name: "Harsh Tailor", role: "Database Head" },
  { name: "Ish Vageriya", role: "Database Head" },
  { name: "Anuj Kumawat", role: "Core Team" },
];

export const JoinLeaders = ({ leadersProp }: { leadersProp?: Leader[] }) => {
  const leaders = leadersProp && leadersProp.length > 0 ? leadersProp : FALLBACK_LEADERS;

  return (
    <section className="section-padding bg-obsidian-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(57,80,162,0.08)_0%,rgba(17,17,17,1)_100%)] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-[0.3em] text-slate-blue mb-6">The Crew</p>
          <h2 className="text-fluid-display leading-[0.9] font-bold font-geist text-ivory-light tracking-tight mb-4">
            Institutional Leaders
          </h2>
          <p className="text-fluid-p text-ivory-dark/50 font-inter max-w-xl mx-auto">
            Behind the vision.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
          {leaders.map((leader, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card rounded-2xl p-6 text-center border border-white/5 hover:border-slate-blue/30 transition-all duration-500 group"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-slate-blue to-slate-blue/30 mx-auto mb-4 flex items-center justify-center">
                <span className="text-xl font-bold text-white font-geist">
                  {leader.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                </span>
              </div>
              <h4 className="text-sm font-bold font-geist text-ivory-light group-hover:text-slate-blue transition-colors">
                {leader.name}
              </h4>
              <p className="text-xs text-ivory-dark/50 mt-1">{leader.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
