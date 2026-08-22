import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-obsidian-dark flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* Abstract Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-blue/10 rounded-full blur-[120px] opacity-50 pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center text-center">
        <h1 className="text-[12rem] md:text-[18rem] font-black font-geist text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/0 leading-none select-none tracking-tighter">
          404
        </h1>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
          <h2 className="text-3xl md:text-5xl font-bold font-geist text-ivory-light mb-4">
            You've wandered off the script.
          </h2>
          <p className="text-white/60 font-inter text-lg max-w-md mx-auto mb-10">
            The page you're looking for has been cut from the final edit, moved, or doesn't exist.
          </p>
          
          <Link 
            href="/"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-slate-blue border border-white/10 hover:border-slate-blue text-ivory-light rounded-full transition-all duration-300 font-medium overflow-hidden"
          >
            <span className="relative z-10">Return to Base</span>
            <FiArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
