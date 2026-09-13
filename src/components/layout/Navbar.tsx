"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { MagneticEffect } from "@/components/ui/utils/MagneticEffect";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Our Work", href: "/work" },
  { name: "Teams", href: "/teams" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ["rgba(5, 5, 5, 0)", "rgba(5, 5, 5, 0.8)"]
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.header
        style={{ backgroundColor }}
        className={`fixed top-0 left-0 right-0 z-[120] transition-all duration-500 backdrop-blur-lg ${
          scrolled ? "py-4 border-b border-white/5" : "py-6"
        }`}
      >
        <div className="container mx-auto container-padding flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold font-geist tracking-tight  text-ivory-light/90 relative z-[121]">
            JU SOCIALZ
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((item) => (
              <MagneticEffect key={item.name} intensity={0.2}>
                <Link
                  href={item.href}
                  className="text-sm font-medium hover:text-white transition-colors text-ivory-light/60"
                >
                  {item.name}
                </Link>
              </MagneticEffect>
            ))}
            <MagneticEffect intensity={0.3}>
              <Link
                href="/join#join-form"
                className="px-6 py-2.5 glass-card text-ivory-light rounded-full text-sm font-bold hover:bg-white/10 transition-colors ml-2 block"
              >
                Join The Team
              </Link>
            </MagneticEffect>
          </nav>

          {/* Mobile Menu Toggle (Optimized Touch Target) */}
          <button 
            className="md:hidden relative z-[121] w-12 h-12 flex flex-col items-end justify-center gap-2 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <motion.span 
              animate={mobileMenuOpen ? { rotate: -45, y: 10, width: "24px" } : { rotate: 0, y: 0, width: "24px" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="h-[2px] bg-ivory-light block origin-center"
            />
            <motion.span 
              animate={mobileMenuOpen ? { opacity: 0, width: "16px" } : { opacity: 1, width: "16px" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="h-[2px] bg-ivory-light block origin-center"
            />
            <motion.span 
              animate={mobileMenuOpen ? { rotate: 45, y: -10, width: "24px" } : { rotate: 0, y: 0, width: "20px" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="h-[2px] bg-ivory-light block origin-center"
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[110] bg-obsidian-dark/95 backdrop-blur-2xl flex flex-col items-center justify-center md:hidden"
          >
            <nav className="flex flex-col items-center gap-10">
              {[{ name: "Home", href: "/" }, ...navLinks].map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, transition: { duration: 0.2 } }}
                  transition={{ delay: i * 0.1 + 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-3xl sm:text-4xl font-bold font-geist tracking-tight  text-ivory-light hover:text-slate-lighter transition-colors block"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                transition={{ delay: 0.4 }}
                className="mt-12"
              >
                <Link
                  href="/join#join-form"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-8 py-4 sm:px-10 sm:py-5 bg-slate-blue text-ivory-light rounded-full text-base sm:text-lg font-bold font-geist  tracking-widest hover:scale-105 hover:shadow-glow transition-all duration-300 inline-block"
                >
                  Join The Team
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
