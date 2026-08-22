import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import MaverickClient from "./ClientPage";

export const metadata: Metadata = generatePageMetadata({
  title: "Maverick",
  description: "Maverick Club at JECRC University — meet the team behind the innovation and creative problem-solving culture.",
  path: "/maverick",
});

const MAVERICK_TEAM = [
  { name: "Parth Sharma", role: "President", image: "/maverick/Parth Sharma.png" },
  { name: "Ojasv Gupta", role: "Vice President", image: "/maverick/Ojasv Gupta.jpg" },
  { name: "Priyanshu Chugh", role: "Insta Head", image: "/maverick/Priyanshu Chugh.jpeg" },
  { name: "Harsh Tailor", role: "Database Head", image: "/maverick/Harsh.jpg" },
  { name: "Ish Vageriya", role: "Database Head", image: "/maverick/Ish.jpg" },
  { name: "Anuj Kumawat", role: "Core Team", image: "/maverick/Anuj Kumawat.jpg" },
  { name: "Chhaya Saini", role: "Core Team", image: "/maverick/Chhaya Saini.png" },
  { name: "Chirag Sharma", role: "Core Team", image: "/maverick/Chirag Sharma.jpeg" },
  { name: "Divyansh Soni", role: "Core Team", image: "/maverick/Divyansh Soni.jpg" },
  { name: "Gurpreet Singh", role: "Core Team", image: "/maverick/Gurpreet Singh.jpg" },
  { name: "Madhav Gupta", role: "Core Team", image: "/maverick/Madhav Gupta.jpeg" },
  { name: "Abhinav Rajput", role: "Core Team", image: "/maverick/Abhinav Rajput.jpeg" },
];

export default function MaverickPage() {
  return <MaverickClient teamMembers={MAVERICK_TEAM} />;
}