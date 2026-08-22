import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import JUCreatorsClient from "./ClientPage";

export const metadata: Metadata = generatePageMetadata({
  title: "JU Creators",
  description: "Meet the mentors and core team of JU Creators — the creative ecosystem at JECRC University.",
  path: "/ju-creators",
});

const MENTORS = [
  { name: "Arpit Agrawal", role: "Vice Chairperson", image: "/creators/Arpit Agrawal.jpg" },
  { name: "Dheemant Agrawal", role: "Director, Digital Strategies & Student Affairs", image: "/creators/Dheemant Agrawal.jpg" },
  { name: "Kartik Saini", role: "Captain Cool", image: "/creators/Kartik Saini.jpg" },
];

const CORE_TEAM = [
  { name: "Manya Gupta", role: "Head – JU Creators", course: "MA – Psychology", image: "/creators/Manya Gupta.png" },
  { name: "Ram Goyal", role: "Operations Lead", course: "BBA – Data Analytics", image: "/creators/Ram Goyal.png" },
  { name: "Atul Khurana", role: "Creative Lead", course: "BCA – AI ML", image: "/creators/Atul Khurana.jpg" },
];

export default function JUCreatorsPage() {
  return <JUCreatorsClient mentors={MENTORS} coreTeam={CORE_TEAM} />;
}