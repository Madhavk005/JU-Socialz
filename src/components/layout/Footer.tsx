import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="pt-24 pb-24 md:pb-24 bg-obsidian border-t border-white/[0.02] relative z-[90]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-24 gap-12">
          <div>
            <h2 className="text-fluid-display font-bold font-geist  tracking-tight text-ivory-light mb-4">
              JU SOCIALZ
            </h2>
            <p className="text-xl font-inter text-slate-lighter italic font-light">
              The internet remembers what we make.
            </p>
          </div>
            <div className="flex gap-12 md:gap-24">
              <div className="flex flex-col gap-4">
                <span className="text-white/40 text-[10px] font-bold  tracking-[0.3em]">Platform</span>
                <Link href="/about" className="text-ivory-dark hover:text-ivory-light transition-colors text-sm font-medium">About</Link>
                <Link href="/work" className="text-ivory-dark hover:text-ivory-light transition-colors text-sm font-medium">Our Work</Link>
                <Link href="/teams" className="text-ivory-dark hover:text-ivory-light transition-colors text-sm font-medium">Teams</Link>
                <Link href="/privacy" className="text-ivory-dark hover:text-ivory-light transition-colors text-sm font-medium">Privacy</Link>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-white/40 text-[10px] font-bold  tracking-[0.3em]">Connect</span>
                <a href="https://www.instagram.com/socialzbts?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-ivory-dark hover:text-ivory-light transition-colors text-sm font-medium">Instagram</a>
              </div>
            </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/[0.04] text-center md:text-left">
          <p className="text-xs text-ivory-dark/40 font-inter mb-4 md:mb-0  tracking-widest font-bold">
            &copy; {new Date().getFullYear()} JU SOCIALZ. All rights reserved.
          </p>
          <p className="text-xs text-ivory-dark/40 font-inter  tracking-widest font-bold md:text-right">
            The Official Media Team of JECRC University.
          </p>
        </div>
      </div>
    </footer>
  );
};
