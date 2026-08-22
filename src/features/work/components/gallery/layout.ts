export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  size?: string;
  mediaType?: string;
  img?: string;
  video?: string;
  pdf?: string;
  isFeatured?: boolean;
}

export const bestOfIds = [
  "yt1", "r1",
  "r2", "rc-1", "p1", "yt2",
  "yt-thumb-1", "yt-thumb-2",
  "yt6", "rc-2",
  "r3", "rc-3", "p3", "yt3"
];

export const ALL_VIEW_LAYOUTS = [
  "col-span-12 md:col-span-8 md:row-span-2",
  "col-span-12 md:col-span-4 md:row-span-2",
  "col-span-12 md:col-span-4",
  "col-span-12 md:col-span-4",
  "col-span-12 md:col-span-4",
  "col-span-12 md:col-span-8 md:row-span-2",
  "col-span-12 md:col-span-4 md:row-span-2",
  "col-span-12 md:col-span-4",
  "col-span-12 md:col-span-4",
  "col-span-12 md:col-span-4",
  "col-span-12 md:col-span-6 md:row-span-2",
  "col-span-12 md:col-span-6 md:row-span-2",
  "col-span-12 md:col-span-6",
  "col-span-12 md:col-span-6",
];

export const getMobileAspect = (size: string | undefined) => {
  if (!size) return 'aspect-video';
  const match = size.match(/aspect-\[[^\]]+\]|aspect-video|aspect-square/);
  return match ? match[0] : 'aspect-video';
};

export const getDynamicSize = (project: PortfolioItem, index: number, activeCategory: string, showAll: boolean) => {
  if (activeCategory === "All" && !showAll && index < ALL_VIEW_LAYOUTS.length) {
    const aspect = getMobileAspect(project.size);
    return `${ALL_VIEW_LAYOUTS[index]} ${aspect} md:aspect-auto`;
  }

  if (project.category === "Youtube Videos") {
    const pattern = [
      "col-span-12 md:col-span-8 md:row-span-2 aspect-video md:aspect-auto",
      "col-span-12 md:col-span-4 aspect-video md:aspect-auto",
      "col-span-12 md:col-span-4 aspect-video md:aspect-auto",
      "col-span-12 md:col-span-6 aspect-video md:aspect-auto",
      "col-span-12 md:col-span-6 aspect-video md:aspect-auto",
    ];
    return pattern[index % pattern.length];
  }

  if (project.category === "Reels") {
    return "col-span-12 md:col-span-4 md:row-span-2 aspect-[9/16] md:aspect-auto";
  }

  if (project.category === "Graphic Design") {
    const aspect = getMobileAspect(project.size);
    if (project.id.startsWith("rc-")) {
      return `col-span-12 md:col-span-4 md:row-span-2 ${aspect} md:aspect-auto`;
    }
    return `col-span-12 md:col-span-4 ${aspect} md:aspect-auto`;
  }

  return project.size;
};