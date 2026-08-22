"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import type { PortfolioItem } from "./layout";

interface GalleryLightboxProps {
  selectedProject: PortfolioItem | null;
  onClose: () => void;
}

export const GalleryLightbox = ({ selectedProject, onClose }: GalleryLightboxProps) => {
  return (
    <AnimatePresence>
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-obsidian-dark/95 backdrop-blur-xl p-4 md:p-12 cursor-zoom-out"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-6xl max-h-full rounded-2xl overflow-hidden glass-card bg-obsidian/50 shadow-2xl flex flex-col cursor-default border border-white/[0.04]"
          >
            <div className="flex items-center justify-between p-6 border-b border-white/5 absolute top-0 left-0 right-0 z-20 bg-obsidian-dark/80 backdrop-blur-md">
              <div>
                <h3 className="text-xl md:text-2xl font-bold font-geist text-ivory-light  tracking-tight">{selectedProject.title}</h3>
                <p className="text-[10px] tracking-widest text-ivory-light/50  mt-1">{selectedProject.category}</p>
              </div>
              <button 
                onClick={onClose}
                className="p-4 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all duration-300 hover:rotate-90"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>

            <div className="w-full flex-1 flex items-center justify-center pt-24 pb-6 px-6 min-h-[50vh] md:min-h-[70vh]">
              {selectedProject.video && (
                <video 
                  src={selectedProject.video}
                  controls
                  autoPlay
                  className="max-w-full max-h-[60vh] md:max-h-[75vh] object-contain rounded-lg shadow-glow"
                />
              )}
              {selectedProject.img && (
                <div className="relative w-full h-[60vh] md:h-[75vh]">
                  <Image 
                    src={selectedProject.img}
                    alt={selectedProject.title}
                    fill
                    className="object-contain rounded-lg shadow-glow"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  />
                </div>
              )}
              {selectedProject.pdf && (
                <iframe 
                  src={`${selectedProject.pdf}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                  className="w-full h-[60vh] md:h-[75vh] rounded-lg border-none bg-white"
                />
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};