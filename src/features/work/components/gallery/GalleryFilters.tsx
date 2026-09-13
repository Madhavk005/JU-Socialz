"use client";

interface GalleryFiltersProps {
  activeCategory: string;
  handleCategoryChange: (cat: string) => void;
}

const CATEGORIES = ["All", "Reels", "Youtube Videos", "Graphic Design", "Photography"];

export const GalleryFilters = ({ activeCategory, handleCategoryChange }: GalleryFiltersProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16 md:mb-24 relative z-20">
      {CATEGORIES.map((cat: string) => (
        <button
          key={cat}
          onClick={() => handleCategoryChange(cat)}
          className={`px-5 md:px-8 py-2 md:py-3 rounded-full text-xs md:text-sm font-bold tracking-widest  transition-all duration-500 ease-cinematic ${
            activeCategory === cat 
              ? "bg-slate-blue text-white shadow-glow" 
              : "glass-card text-ivory-light/60 hover:text-ivory-light hover:bg-white/5"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};