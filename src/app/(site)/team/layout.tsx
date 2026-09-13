import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "The Originals — Team",
  description: "Meet the people who built SOCIALZ into what it is today. The original team behind JU Socialz.",
  path: "/team",
});

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return children;
}