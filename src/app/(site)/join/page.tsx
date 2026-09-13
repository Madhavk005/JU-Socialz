import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { GlobalCta } from "@/components/ui/shared/GlobalCta";
import { JoinHero } from "@/features/join/components/JoinHero";
import { WhyJoin } from "@/features/join/components/WhyJoin";
import { JoinRoles } from "@/features/join/components/JoinRoles";
import { JoinForm } from "@/features/join/components/JoinForm";
import { JoinFaq } from "@/features/join/components/JoinFaq";

export const metadata: Metadata = generatePageMetadata({
  title: "Join Us",
  description: "Apply to join JU Socialz — the official media team of JECRC University. Open to all students across cinematography, editing, design, social media management, and more.",
  path: "/join",
});

export default function JoinPage() {
  // Static data - previously fetched from Supabase
  const faqs = [
    {
      id: "1",
      question: "What is JU Socialz?",
      answer: "JU Socialz is the official media and content creation initiative of JU, focused on photography, videography, editing, and social media management.",
      order_index: 1
    },
    {
      id: "2",
      question: "Who can apply?",
      answer: "Any JU student from any year and any branch can apply. We look for passion and creativity more than experience.",
      order_index: 2
    },
    {
      id: "3",
      question: "What is the time commitment?",
      answer: "We typically meet 2-3 times a week for shoots, workshops, and editing sessions. Major events may require more time.",
      order_index: 3
    },
    {
      id: "4",
      question: "Do I need my own equipment?",
      answer: "No! The club has cameras, lenses, lighting equipment, and editing stations available for members to use.",
      order_index: 4
    },
    {
      id: "5",
      question: "Can I join multiple verticals?",
      answer: "Yes! You can select a primary skill and up to 2 secondary skills during application. We encourage cross-disciplinary learning.",
      order_index: 5
    },
    {
      id: "6",
      question: "What happens after I apply?",
      answer: "Applications are reviewed by the core team. Shortlisted candidates are invited for an informal interaction. Results are announced within 2 weeks.",
      order_index: 6
    }
  ];

  const roles = [
    "Cinematography",
    "Editing",
    "Graphic Design",
    "Social Media Management",
    "Content Creation",
    "Photography",
    "Reel Creation"
  ];

  const reasons = [
    {
      id: "1",
      title: "Build a Portfolio That Matters",
      desc: "Work on real campaigns, events, and brand collaborations. Graduate with a portfolio that speaks louder than your degree.",
      icon: "briefcase",
      order_index: 1
    },
    {
      id: "2",
      title: "Learn From Industry Mentors",
      desc: "Workshops and masterclasses with professional photographers, filmmakers, and digital marketers from the industry.",
      icon: "graduation-cap",
      order_index: 2
    },
    {
      id: "3",
      title: "Access to Professional Gear",
      desc: "Sony A7 series, DJI gimbals, studio lighting, Mac workstations with Adobe Creative Cloud - all available for member projects.",
      icon: "camera",
      order_index: 3
    },
    {
      id: "4",
      title: "Cover Major Campus Events",
      desc: "Be the official media team for fests, conferences, and cultural events. Your work reaches thousands of students.",
      icon: "clapperboard",
      order_index: 4
    },
    {
      id: "5",
      title: "Join a Creative Community",
      desc: "Collaborate with 100+ passionate creators across verticals. Find your co-founders, creative partners, and lifelong friends.",
      icon: "users",
      order_index: 5
    },
    {
      id: "6",
      title: "Internship & Job Referrals",
      desc: "Our alumni network spans top creative agencies, production houses, and brands. We help you land opportunities.",
      icon: "trending-up",
      order_index: 6
    }
  ];

  return (
    <>
      <main>
        <JoinHero />
        <WhyJoin reasonsProp={reasons} />
        <JoinRoles rolesProp={roles} />
        <JoinForm />
        <JoinFaq faqsProp={faqs} />
      </main>

      <GlobalCta titleLine1="Have Any" titleLine2="Query?!!" />
    </>
  );
}
