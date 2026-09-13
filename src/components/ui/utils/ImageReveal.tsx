"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface ImageRevealProps {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  sizes?: string;
  width?: number | `${number}`;
  height?: number | `${number}`;
}

export const ImageReveal = ({ 
  src, 
  alt, 
  fill = true, 
  className = "", 
  priority = false,
  sizes,
  width,
  height,
}: ImageRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div ref={ref} className={`relative overflow-hidden ${className}`}>
        {fill ? (
          <Image 
            src={src} 
            alt={alt} 
            fill 
            sizes={sizes}
            priority={priority}
            className="object-cover"
            width={width}
            height={height}
          />
        ) : (
          <Image 
            src={src} 
            alt={alt} 
            priority={priority}
            className="object-cover w-full h-full"
            width={width}
            height={height}
          />
        )}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div className="absolute inset-0 bg-white/5 scale-[1.2] origin-center" 
        animate={{ 
          scale: [1.2, 1], 
          opacity: [1, 0] 
        }} 
        transition={{ 
          duration: 1.5, 
          ease: [0.22, 1, 0.36, 1],
          delay: 0.2
        }}
        style={{ willChange: 'transform, opacity' }}
      />
      {fill ? (
        <Image 
          src={src} 
          alt={alt} 
          fill 
          sizes={sizes}
          priority={priority}
          className="object-cover"
          style={{ 
            opacity: 0,
            scale: 1.05,
            transition: 'opacity 1.2s cubic-bezier(0.22, 1, 0.36, 1), transform 1.5s cubic-bezier(0.22, 1, 0.36, 1)',
            transitionDelay: '0.3s'
          }}
          width={width}
          height={height}
        />
      ) : (
        <Image 
          src={src} 
          alt={alt} 
          priority={priority}
          className="object-cover w-full h-full"
          style={{ 
            opacity: 0,
            scale: 1.05,
            transition: 'opacity 1.2s cubic-bezier(0.22, 1, 0.36, 1), transform 1.5s cubic-bezier(0.22, 1, 0.36, 1)',
            transitionDelay: '0.3s'
          }}
          width={width}
          height={height}
        />
      )}
    </motion.div>
  );
};