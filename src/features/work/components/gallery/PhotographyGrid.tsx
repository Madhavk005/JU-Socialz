"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { PortfolioItem } from "./layout";

interface PhotographyGridProps {
  displayedProjects: PortfolioItem[];
  onSelectProject: (project: PortfolioItem) => void;
}

export const PhotographyGrid = ({ displayedProjects, onSelectProject }: PhotographyGridProps) => {
  return (
    <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-x-5 pb-24 w-full max-w-[1440px] mx-auto">
      <AnimatePresence>
        {displayedProjects.map((project: PortfolioItem) => {
          const aspectClass = project.size?.match(/aspect-\[[^\]]+\]|aspect-video|aspect-square/)?.[0] || 'aspect-video';
          return (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              key={project.id}
              onClick={() => onSelectProject(project)}
              className={`break-inside-avoid mb-6 w-full ${aspectClass} glass-card rounded-[24px] relative overflow-hidden group cursor-pointer border border-white/5 shadow-[0_0_30px_rgba(0,0,0,0.5)] origin-center`}
            >
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 z-10" />
              
              {project.img ? (
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  className="object-cover z-0 group-hover:scale-105 transition-transform duration-[2s] ease-cinematic"
                />
              ) : null}
              
              <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 z-20 text-left transform translate-y-2 md:translate-y-4 group-hover:translate-y-0 transition-transform duration-[0.8s] ease-cinematic">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="inline-block px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[9px] font-bold tracking-[0.2em] text-ivory-light opacity-0 md:opacity-100 group-hover:opacity-100 transition-opacity duration-500">
                    {project.category}
                  </span>
                  {project.isFeatured && (
                    <span className="inline-block px-3 py-1.5 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-500/30 text-[9px] font-bold tracking-[0.2em] text-amber-300 opacity-0 md:opacity-100 group-hover:opacity-100 transition-opacity duration-500">
                      Hall of Fame
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </motion.div>
  );
};