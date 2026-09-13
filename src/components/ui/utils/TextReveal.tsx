"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, type HTMLAttributes } from "react";

interface TextRevealProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  delay?: number;
  stagger?: number;
  as?: "p" | "h1" | "h2" | "h3" | "span" | "div";
  className?: string;
}

export const TextReveal = ({ 
  children, 
  delay = 0, 
  stagger = 0.05,
  as: Component = "p",
  className = "",
  ...props 
}: TextRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  useInView(ref, { once: true, margin: "-50px" });

  const text = typeof children === "string" ? children : Array.isArray(children) ? children.join("") : String(children);
  const words = text.split(" ");

  if (shouldReduceMotion) {
    return (
      <Component ref={ref} className={className} {...props}>
        {children}
      </Component>
    );
  }

  return (
    <Component ref={ref} className={className} {...props}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)"
          }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.6,
            delay: delay + i * stagger,
            ease: [0.22, 1, 0.36, 1]
          }}
          style={{ display: "inline-block", marginRight: i < words.length - 1 ? "0.25em" : 0 }}
        >
          {word}
        </motion.span>
      ))}
    </Component>
  );
};

interface CharRevealProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  delay?: number;
  stagger?: number;
  as?: "p" | "h1" | "h2" | "h3" | "span" | "div";
  className?: string;
}

export const CharReveal = ({ 
  children, 
  delay = 0, 
  stagger = 0.02,
  as: Component = "span",
  className = "",
  ...props 
}: CharRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  useInView(ref, { once: true, margin: "-50px" });

  const text = typeof children === "string" ? children : String(children);
  const chars = text.split("");

  if (shouldReduceMotion) {
    return (
      <Component ref={ref} className={className} {...props}>
        {children}
      </Component>
    );
  }

  return (
    <Component ref={ref} className={className} {...props}>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: "1em" }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.5,
            delay: delay + i * stagger,
            ease: [0.22, 1, 0.36, 1]
          }}
          style={{ display: "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </Component>
  );
};