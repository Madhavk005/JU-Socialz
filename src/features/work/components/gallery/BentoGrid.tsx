"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { PortfolioItem, getDynamicSize } from "./layout";

interface BentoGridProps {
  displayedProjects: PortfolioItem[];
  activeCategory: string;
  showAll: boolean;
  onSelectProject: (project: PortfolioItem) => void;
}

export const BentoGrid = ({ displayedProjects, activeCategory, showAll, onSelectProject }: BentoGridProps) => {
  return (
    <motion.div layout className="grid grid-cols-12 gap-4 md:gap-5 md:auto-rows-[280px] pb-24 w-full max-w-[1440px] mx-auto">
      <AnimatePresence>
        {displayedProjects.map((project: PortfolioItem, index: number) => {
          return (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              key={project.id}
              onClick={() => onSelectProject(project)}
              className={`${getDynamicSize(project, index, activeCategory, showAll)} glass-card rounded-[24px] relative overflow-hidden group cursor-pointer w-full border border-white/5 shadow-[0_0_30px_rgba(0,0,0,0.5)] origin-center`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-dark/95 via-obsidian-dark/30 to-transparent z-10 opacity-70 group-hover:opacity-90 transition-opacity duration-[0.8s] ease-cinematic" />
              
              {project.video ? (
                <video 
                  src={project.video}
                  loop
                  muted
                  playsInline
                  autoPlay
                  preload="metadata"
                  style={{ WebkitBackfaceVisibility: "hidden", backfaceVisibility: "hidden", WebkitTransform: "translate3d(0, 0, 0)" }}
                  className="absolute inset-0 z-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-cinematic opacity-80 group-hover:opacity-100"
                />
              ) : project.pdf ? (
                <div className="absolute inset-0 bg-white z-0 overflow-hidden rounded-2xl group-hover:scale-105 transition-transform duration-[1.5s] ease-cinematic">
                  <iframe 
                    src={`${project.pdf}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                    className="absolute inset-0 w-full h-full border-none opacity-90 group-hover:opacity-100 pointer-events-none scale-105"
                    title={project.title}
                    tabIndex={-1}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                </div>
              ) : project.img ? (
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  className="object-cover z-0 group-hover:scale-110 transition-transform duration-[1.5s] ease-cinematic"
                />
              ) : (
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(57,80,162,0.1)_0%,rgba(17,17,17,1)_100%)] z-0 group-hover:scale-110 transition-transform duration-[1.5s] ease-cinematic" />
              )}
              
              <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 z-20 text-left transform translate-y-2 md:translate-y-4 group-hover:translate-y-0 transition-transform duration-[0.8s] ease-cinematic">
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <span className="inline-block px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[9px] font-bold tracking-[0.2em] text-ivory-light opacity-0 md:opacity-100 group-hover:opacity-100 transition-opacity duration-500">
                    {project.category}
                  </span>
                  {project.isFeatured && activeCategory === "All" && (
                    <span className="inline-block px-3 py-1.5 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-500/30 text-[9px] font-bold tracking-[0.2em] text-amber-300">
                      Hall of Fame
                    </span>
                  )}
                </div>
                
                {!(project.category === "Photography" && project.title.startsWith("Best Shot")) && (
                  <h4 className="text-xl md:text-2xl font-geist font-bold text-white leading-tight tracking-tight shadow-black/50 drop-shadow-lg">
                    {project.title}
                  </h4>
                )}
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </motion.div>
  );
};