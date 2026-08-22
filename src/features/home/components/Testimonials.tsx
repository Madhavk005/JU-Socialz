"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface TestimonialData {
  text: string;
  author: string;
  role: string;
}

const FALLBACK_QUOTES: TestimonialData[] = [
  {
    text: "SOCIALZ isn't a line on your resume. It's a feeling you'll keep talking about long after graduation.",
    author: "Kartik Saini",
    role: "Head — SM & Branding"
  },
  {
    text: "We don't just know editing software. We live inside it. Every frame is intentional.",
    author: "Yash Raj",
    role: "Creative Lead"
  }
];

export const Testimonials = ({ quotesProp = FALLBACK_QUOTES }: { quotesProp?: TestimonialData[] }) => {
  const [active, setActive] = useState(0);
  const quotes = quotesProp && quotesProp.length > 0 ? quotesProp : FALLBACK_QUOTES;

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % quotes.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [quotes.length]);

  return (
    <section className="section-padding bg-obsidian-dark relative overflow-hidden border-t border-white/[0.04]">
      {/* Massive Background Quote */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40rem] font-geist leading-none text-white/[0.02] pointer-events-none select-none z-0">
        &quot;
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-xs font-bold tracking-[0.2em]  text-slate-blue mb-16">
          The Culture
        </h2>
        
        <div className="min-h-[250px] md:min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              exit={{ opacity: 0, filter: "blur(10px)", y: -10 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl mx-auto"
            >
              <h3 className="text-2xl md:text-fluid-h1 lg:text-fluid-h1 font-medium font-geist text-ivory-light leading-tight tracking-tight mb-12 text-balance">
                &ldquo;{quotes[active].text}&rdquo;
              </h3>
              <div className="flex flex-col items-center justify-center gap-1">
                <span className="text-fluid-p font-bold  tracking-widest text-ivory-light">
                  {quotes[active].author}
                </span>
                <span className="text-xs md:text-sm font-inter text-ivory-light/40">
                  {quotes[active].role}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-3 mt-12">
          {quotes.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              className="p-3 -m-3 flex items-center"
              aria-label={`Quote ${idx + 1}`}
            >
              <div className={`transition-all duration-500 ease-out h-1 rounded-full ${
                active === idx ? "w-12 bg-ivory-light" : "w-4 bg-white/20 hover:bg-white/40"
              }`} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
