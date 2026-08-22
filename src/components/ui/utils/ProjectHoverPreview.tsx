"use client";

import { motion, useMotionValue, useSpring, useReducedMotion, AnimatePresence } from "framer-motion";
import { useRef, useState, type ReactNode } from "react";
import Image from "next/image";

interface ProjectHoverPreviewProps {
  children: ReactNode;
  previewSrc: string;
  previewAlt?: string;
  className?: string;
  offset?: { x: number; y: number };
}

export const ProjectHoverPreview = ({ 
  children, 
  previewSrc, 
  previewAlt = "",
  className = "",
  offset = { x: 20, y: -20 }
}: ProjectHoverPreviewProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const previewX = useMotionValue(0);
  const previewY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200, mass: 0.1 };
  const springX = useSpring(previewX, springConfig);
  const springY = useSpring(previewY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return;
    const { clientX, clientY } = e;
    
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const previewWidth = 320;
    const previewHeight = 180;
    
    let x = clientX + offset.x;
    let y = clientY + offset.y;

    if (x + previewWidth > viewportWidth - 20) {
      x = clientX - previewWidth - offset.x;
    }
    if (y + previewHeight > viewportHeight - 20) {
      y = clientY - previewHeight - offset.y;
    }
    if (x < 20) x = 20;
    if (y < 20) y = 20;

    previewX.set(x);
    previewY.set(y);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  if (shouldReduceMotion) {
    return (
      <div
        ref={ref}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        className={className}
      >
        {children}
      </div>
    );
  }

  return (
    <>
      <div
        ref={ref}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        className={className}
      >
        {children}
      </div>

      <AnimatePresence mode="wait">
        {isHovering && (
          <motion.div
            style={{ x: springX, y: springY }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="fixed pointer-events-none z-[200]"
          >
            <div className="w-[320px] h-[180px] rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-obsidian-dark">
              <Image
                src={previewSrc}
                alt={previewAlt}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="320px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};