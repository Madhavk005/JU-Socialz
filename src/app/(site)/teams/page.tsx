import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { GlobalCta } from "@/components/ui/shared/GlobalCta";
import { TeamsHero } from "@/features/teams/components/TeamsHero";
import { BehindTheVision } from "@/features/teams/components/BehindTheVision";
import { Leadership, type Leader } from "@/features/teams/components/Leadership";
import { CoreTeam, type Member } from "@/features/teams/components/CoreTeam";
import { ExclusiveCommunities } from "@/features/teams/components/ExclusiveCommunities";

const LEADERS: Leader[] = [
  { 
    name: "Kartik Saini", 
    role: "Head - Social Media and Marketing", 
    generation: "2017",
    identity: "The strategist who bridges the gap between chaos and execution. Has the answer to everything.",
    image: "/teams/Kartik Saini.jpg",
    social: {
      instagram: "https://www.instagram.com/beercusp?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      linkedin: "https://www.linkedin.com/in/beercusp/"
    }
  },
  { 
    name: "Aditi Agrawal", 
    role: "The Main Character", 
    generation: "2024",
    identity: "Ask her team, and they'll tell you: the best version of an idea usually comes out after she's in the room.",
    image: "/teams/Aditi Agrawal.jpg",
    social: {
      instagram: "https://www.instagram.com/aditi.agarwal.2312?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      linkedin: "https://www.linkedin.com/in/aditi-agarwal-870361241/"
    }
  },
  { 
    name: "Yash Raj", 
    role: "Creative Lead", 
    generation: "2022",
    identity: "A creative polymath. Fluid across disciplines, adapting vision to reality.",
    image: "/teams/Yash Raj.jpg",
    social: {
      instagram: "https://www.instagram.com/srivastav.yash_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      linkedin: "https://www.linkedin.com/in/yash-raj-475124250/"
    }
  },
];

const CORE_MEMBERS: Member[] = [
  // Gen 2023
  { name: "Ansh Bhatt", role: "Social Media Manager", generation: "2023", course: "B.Tech AI-ML", identity: "Speaks when it matters. Works when everyone else is asleep.", image: "/teams/Ansh Bhatt.jpg", socials: { instagram: "https://www.instagram.com/anshhbhatt?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", linkedin: "https://www.linkedin.com/in/anshbhattt/" } },
  { name: "Ayush Yadav", role: "Content Strategist", generation: "2023", course: "B.Tech CSE", identity: "Perfection is a baseline. Pushing boundaries is the goal.", image: "/teams/Ayush Yadav.jpg", socials: { instagram: "https://www.instagram.com/contentkakalesh?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", linkedin: "https://www.linkedin.com/in/ayush-yadav-300b43287/" } },
  { name: "Jayaditya Sharma", role: "Reel Creation", generation: "2023", course: "B.Tech CSE", identity: "Quiet observer. Lethal executor. Unbothered.", image: "/teams/Jayaditya Sharma.jpg", socials: { instagram: "https://www.instagram.com/_.jayaditya._/", linkedin: "https://www.linkedin.com/in/jayaditya-sharma/" } },
  { name: "Krish Menaria", role: "Cinematographer", generation: "2023", course: "B.Tech CSE", identity: "Main character energy. Framing life one cinematic shot at a time.", image: "/teams/Krish Menaria.jpg", socials: { instagram: "https://www.instagram.com/krish._.menaria?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", linkedin: "https://www.linkedin.com/in/krish-menaria/" } },
  
  // Gen 2024
  { name: "Ankit Maji", role: "Cinematographer", generation: "2024", course: "B.Des", identity: "Painting with light and shadow. The visual architect.", image: "/teams/Ankit Maji.jpg", socials: { instagram: "https://www.instagram.com/_majiankit_/", linkedin: "https://www.linkedin.com/in/majiankit/" } },
  { name: "Azad Nagar", role: "Operation Manager", generation: "2024", course: "BCA", identity: "The glue that holds the chaos together.", image: "/teams/Azad Nagar.jpg", socials: { instagram: "https://www.instagram.com/nagar0804/", linkedin: "https://www.linkedin.com/in/azad-nagar-4b7466318/" } },
  { name: "Hitesh Nagar", role: "Editor", generation: "2024", course: "B.Tech CSE", identity: "Seeing the world in LUTs and scopes. The mood setter.", image: "/teams/Hitesh Nagar.jpg", socials: { instagram: "https://www.instagram.com/hitesh.color/", linkedin: "" } },
  { name: "Madhav Kohli", role: "Graphic Designer", generation: "2024", course: "B.Tech-CSE", identity: "Thrives in the chaos. Designs the impossible.", image: "/teams/Madhav Kohli.jpg", socials: { instagram: "https://www.instagram.com/whoismdhv_/", linkedin: "https://www.linkedin.com/in/madhav-kohli" } },
];

export const metadata: Metadata = generatePageMetadata({
  title: "Teams",
  description: "Meet the originals — the leaders, creators, and visionaries behind JU Socialz, the official media team of JECRC University.",
  path: "/teams",
});

export default function TeamsPage() {
  return (
    <>
      <main>
        <TeamsHero />
        <ExclusiveCommunities />
        <BehindTheVision />
        <Leadership leaders={LEADERS} />
        <CoreTeam members={CORE_MEMBERS} />
      </main>
      <GlobalCta />
    </>
  );
}