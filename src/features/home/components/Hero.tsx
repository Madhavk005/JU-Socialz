"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Rocket } from "lucide-react";
import Link from "next/link";
import { usePreloader } from "@/components/ui/shared/PreloaderContext";

const WORDS = [
  "create", "inspire", "capture", "connect", 
  "innovate", "influence", "elevate", 
  "trend", "engage", "grow", "belong"
];

export const Hero = () => {
  const { isLoading } = usePreloader();
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % WORDS.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-between overflow-hidden pt-24 pb-8" style={{ background: 'linear-gradient(180deg, #111111 0%, #252525 45%, #3950A2 100%)' }}>
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 bg-[url(/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      {/* Spacer to push content to exact visual center */}
      <div className="flex-1" />

      <div className="container relative z-30 px-6 mx-auto text-center flex flex-col items-center justify-center flex-shrink-0">
        <div className="relative max-w-6xl mx-auto flex flex-col items-center">
          {/* Main Logo */}
          {!isLoading && (
            <motion.div
              className="mb-8 w-44 md:w-60 lg:w-80 relative flex justify-center items-center"
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-full relative z-10"
                style={{ filter: "drop-shadow(0 0 2px rgba(255,255,255,0.3)) drop-shadow(0 0 15px rgba(57,80,162,0.7))" }}
              >
                <Image
                  src="/logo.svg"
                  alt="JU Socialz Logo"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                  priority
                />
              </motion.div>
            </motion.div>
          )}
          
          {/* Main Headline */}
          <motion.div 
            initial={{ opacity: 0, y: 15, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.6, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12 md:mb-16 w-full flex justify-center items-center"
          >
            <div className="flex flex-col items-center justify-center gap-y-1 md:gap-y-2 w-full mx-auto py-8">
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-geist font-medium text-white/90 tracking-tight text-center">
                Built to
              </span>
              <h1 className="text-[14vw] sm:text-7xl md:text-[7.5rem] lg:text-[9.5rem] font-geist font-bold tracking-tighter leading-none text-white drop-shadow-2xl flex justify-center items-center w-full">
                <span className="relative inline-grid grid-cols-1 grid-rows-1 items-center justify-items-center text-center">
                  {/* Invisible placeholder to define grid width and prevent shift */}
                  <span className="invisible col-start-1 row-start-1 pb-6 pt-4 -mb-6 -mt-4 leading-none">influence.</span>
                  
                  <AnimatePresence>
                    <motion.span
                      key={currentWord}
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1, backgroundPosition: ["0% 50%", "200% 50%"] }}
                      exit={{ y: -50, opacity: 0 }}
                      transition={{ 
                        y: { duration: 0.5, ease: "easeOut" },
                        opacity: { duration: 0.4 },
                        backgroundPosition: { duration: 4, repeat: Infinity, ease: "linear" }
                      }}
                      className="col-start-1 row-start-1 italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-ivory-light via-slate-blue to-ivory-light pb-6 pt-4 -mb-6 -mt-4 leading-none whitespace-nowrap"
                      style={{ backgroundSize: "200% auto" }}
                    >
                      {WORDS[currentWord]}.
                    </motion.span>
                  </AnimatePresence>
                </span>
              </h1>
            </div>
          </motion.div>
          
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full px-4 sm:px-0"
            >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
              <Link href="/work" className="group relative block w-full">
                <div className="absolute inset-0 bg-slate-blue/50 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <button className="relative w-full sm:w-auto px-8 py-4 bg-slate-blue text-white rounded-full text-sm uppercase tracking-widest font-semibold flex items-center justify-center gap-3 overflow-hidden border border-slate-blue/50 hover:bg-slate-blue/80 transition-all duration-300">
                  <span className="relative z-10">Explore Work</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                </button>
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
              <Link href="/join" className="group relative block w-full">
                <button className="w-full sm:w-auto px-8 py-4 glass-card text-ivory-light rounded-full text-sm uppercase tracking-widest font-semibold flex items-center justify-center gap-3 hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                  <Rocket className="w-4 h-4 text-white group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" />
                  <span>Create With Us</span>
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Spacer to push scroll indicator to bottom */}
      <div className="flex-1 flex flex-col justify-end">
        <motion.div 
          className="relative z-30 pt-16 md:pt-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
        >
          <motion.div 
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-3 cursor-pointer"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-white/50 font-inter">Scroll</span>
            <div className="w-5 h-8 rounded-full border border-white/20 flex justify-center p-1">
              <motion.div 
                animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-1 rounded-full bg-slate-blue"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
