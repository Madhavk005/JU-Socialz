"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useState, ReactNode } from "react";

export function ReducedMotionProvider({ children }: { children: ReactNode }) {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  if (shouldReduceMotion) {
    document.documentElement.classList.add("reduce-motion");
  } else {
    document.documentElement.classList.remove("reduce-motion");
  }

  return <>{children}</>;
}

export function useReducedMotionSafe() {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted && shouldReduceMotion;
}