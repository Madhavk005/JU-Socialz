"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { usePreloader } from "./PreloaderContext";

export const Preloader = () => {
  const { isLoading, setIsLoading } = usePreloader();

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";
    
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => { document.body.style.overflow = ""; }, 1000); 
    }, 2200); 
    
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [setIsLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-between pt-24 pb-8 overflow-hidden pointer-events-auto"
        >
          {/* Spacer to push content to match Hero visual center */}
          <div className="flex-1" />

          <div className="container relative px-6 mx-auto text-center flex flex-col items-center justify-center flex-shrink-0">
            <div className="relative max-w-6xl mx-auto flex flex-col items-center">
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="mb-8 w-44 md:w-60 lg:w-80 relative flex justify-center items-center"
              >
                {/* Backglow centered on the logo */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-slate-blue/20 blur-[60px] rounded-full pointer-events-none" />
                
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-full relative z-10"
                  style={{ filter: "drop-shadow(0 0 2px rgba(255,255,255,0.3)) drop-shadow(0 0 15px rgba(57,80,162,0.7))" }}
                >
                  <Image src="/logo.svg" alt="JU Socialz Logo" width={500} height={500} className="w-full h-auto object-contain" priority />
                </motion.div>
              </motion.div>

              {/* Preloader Text - Positioned exactly where the Hero headline starts */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="flex flex-col items-center gap-4 z-10 absolute top-full left-1/2 -translate-x-1/2 mt-4 w-full"
              >
                <div className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-white/20 to-transparent" />
                <span className="text-[9px] md:text-[11px] uppercase tracking-[0.4em] md:tracking-[0.6em] text-white/40 font-geist font-light whitespace-nowrap">
                  Premium Creator Ecosystem
                </span>
              </motion.div>

              {/* Invisible Hero Headline Placeholder to force the EXACT same height calculation! */}
              <div className="mb-12 md:mb-16 text-center opacity-0 pointer-events-none">
                <h1 className="text-4xl sm:text-5xl md:text-[5.5rem] lg:text-[7rem] font-geist font-semibold tracking-tight leading-[0.95] text-balance">
                  Build to trend.
                </h1>
              </div>

              {/* Invisible Hero Buttons Placeholder */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full px-4 sm:px-0 opacity-0 pointer-events-none">
                <div className="w-full sm:w-auto px-8 py-4 text-sm">Explore Work</div>
              </div>

            </div>
          </div>

          {/* Invisible Hero Scroll Indicator Placeholder */}
          <div className="flex-1 flex flex-col justify-end opacity-0 pointer-events-none">
            <div className="pt-16 md:pt-24">
              <div className="flex flex-col items-center gap-3">
                <span className="text-[9px] md:text-[10px]">Scroll</span>
                <div className="w-5 h-8"></div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
