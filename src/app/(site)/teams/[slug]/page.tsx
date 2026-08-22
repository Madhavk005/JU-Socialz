import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiInstagram, FiLinkedin } from "react-icons/fi";

interface TeamMemberDetail {
  _id: string;
  name: string;
  role: string;
  slug: string;
  image: string;
  gen: string;
  course: string;
  identity: string;
  socials?: { instagram?: string; linkedin?: string };
}

const TEAM: TeamMemberDetail[] = [
  { _id: "1", name: "Kartik Saini", role: "Head — SM & Branding", slug: "kartik-saini", image: "/teams/Kartik Saini.jpg", gen: "2017", course: "", identity: "The strategist who bridges the gap between chaos and execution. Has the answer to everything.", socials: { instagram: "https://www.instagram.com/beercusp", linkedin: "https://www.linkedin.com/in/beercusp/" } },
  { _id: "2", name: "Yash Raj", role: "Creative Lead", slug: "yash-raj", image: "/teams/Yash Raj.jpg", gen: "2022", course: "", identity: "A creative polymath. Fluid across disciplines, adapting vision to reality.", socials: { instagram: "https://www.instagram.com/srivastav.yash_", linkedin: "https://www.linkedin.com/in/yash-raj-475124250/" } },
  { _id: "3", name: "Ansh Bhatt", role: "Social Media Manager", slug: "ansh-bhatt", image: "/teams/Ansh Bhatt.jpg", gen: "2023", course: "B.Tech AI-ML", identity: "Speaks when it matters. Works when everyone else is asleep.", socials: { instagram: "https://www.instagram.com/anshhbhatt", linkedin: "https://www.linkedin.com/in/anshbhattt/" } },
  { _id: "4", name: "Ayush Yadav", role: "Content Strategist", slug: "ayush-yadav", image: "/teams/Ayush Yadav.jpg", gen: "2023", course: "B.Tech CSE", identity: "Perfection is a baseline. Pushing boundaries is the goal.", socials: { instagram: "https://www.instagram.com/contentkakalesh", linkedin: "https://www.linkedin.com/in/ayush-yadav-300b43287/" } },
  { _id: "5", name: "Jay Aditya Sharma", role: "Reel Creation", slug: "jay-aditya-sharma", image: "/teams/Jayaditya Sharma.jpg", gen: "2023", course: "B.Tech CSE", identity: "Quiet observer. Lethal executor. Unbothered.", socials: { instagram: "https://www.instagram.com/_.jayaditya._", linkedin: "https://www.linkedin.com/in/jayaditya-sharma/" } },
  { _id: "6", name: "Krish Menaria", role: "Cinematographer", slug: "krish-menaria", image: "/teams/Krish Menaria.jpg", gen: "2023", course: "B.Tech CSE", identity: "Main character energy. Framing life one cinematic shot at a time.", socials: { instagram: "https://www.instagram.com/krish._.menaria", linkedin: "https://www.linkedin.com/in/krish-menaria/" } },
  { _id: "7", name: "Aditi Agrawal", role: "The Main Character", slug: "aditi-agrawal", image: "/teams/Aditi Agrawal.jpg", gen: "2024", course: "", identity: "Ask her team, and they'll tell you: the best version of an idea usually comes out after she's in the room.", socials: { instagram: "https://www.instagram.com/aditi.agarwal.2312", linkedin: "https://www.linkedin.com/in/aditi-agarwal-870361241/" } },
  { _id: "8", name: "Ankit Maji", role: "Cinematographer", slug: "ankit-maji", image: "/teams/Ankit Maji.jpg", gen: "2024", course: "B.Des", identity: "Painting with light and shadow. The visual architect.", socials: { instagram: "https://www.instagram.com/_majiankit_", linkedin: "https://www.linkedin.com/in/majiankit/" } },
  { _id: "9", name: "Azad Nagar", role: "Operation Manager", slug: "azad-nagar", image: "/teams/Azad Nagar.jpg", gen: "2024", course: "", identity: "The glue that holds the chaos together.", socials: { instagram: "https://www.instagram.com/nagar0804", linkedin: "https://www.linkedin.com/in/azad-nagar-4b7466318/" } },
  { _id: "10", name: "Hitesh Nagar", role: "Editor", slug: "hitesh-nagar", image: "/teams/Hitesh Nagar.jpg", gen: "2024", course: "B.Tech CSE", identity: "Seeing the world in LUTs and scopes. The mood setter.", socials: { instagram: "https://www.instagram.com/hitesh.color", linkedin: "https://www.linkedin.com/in/hitesh-nagar-33466331b/" } },
  { _id: "11", name: "Madhav Kohli", role: "Graphic Designer", slug: "madhav-kohli", image: "/teams/Madhav Kohli.jpg", gen: "2024", course: "B.Tech-CSE", identity: "Thrives in the chaos. Designs the impossible.", socials: { instagram: "https://www.instagram.com/whoismdhv_", linkedin: "https://www.linkedin.com/in/madhav-kohli" } },
];

function getMember(slug: string): TeamMemberDetail | null {
  return TEAM.find((m) => m.slug === slug) ?? null;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const member = getMember(slug);
  if (!member) return generatePageMetadata({ title: "Member Not Found", description: "", path: `/teams/${slug}` });
  return generatePageMetadata({
    title: member.name,
    description: `${member.role} — ${member.identity}`,
    path: `/teams/${slug}`,
  });
}

export function generateStaticParams() {
  return TEAM.map((m) => ({ slug: m.slug }));
}

export default async function TeamMemberPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const member = getMember(slug);

  if (!member) notFound();

  return (
    <div className="min-h-screen bg-obsidian-dark pt-32 pb-24">
      <div className="container mx-auto px-6">
        <Link
          href="/team"
          className="inline-flex items-center gap-2 text-slate-blue hover:text-ivory-light transition-colors font-inter text-sm mb-12"
        >
          <FiArrowLeft className="w-4 h-4" />
          Back to Team
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-obsidian border border-white/[0.04]">
            <Image src={member.image} alt={member.name} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" priority />
          </div>

          <div className="flex flex-col gap-6 pt-4">
            <div>
              <span className="text-xs tracking-[0.3em] text-slate-blue font-inter mb-3 block">Gen {member.gen}</span>
              <h1 className="text-fluid-display font-bold font-geist text-ivory-light tracking-tight mb-2">
                {member.name}
              </h1>
              <p className="text-xl md:text-2xl text-slate-blue font-inter font-medium">
                {member.role}
              </p>
            </div>

            {member.course && (
              <div className="flex items-center gap-2 text-sm font-inter text-ivory-light/50">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-blue" />
                {member.course}
              </div>
            )}

            <blockquote className="border-l-2 border-slate-blue pl-5 py-2">
              <p className="text-lg md:text-xl text-ivory-light/80 font-inter italic leading-relaxed">
                &ldquo;{member.identity}&rdquo;
              </p>
            </blockquote>

            {member.socials && (
              <div className="flex items-center gap-4 pt-4">
                {member.socials.instagram && (
                  <a
                    href={member.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full bg-white/5 border border-white/[0.06] flex items-center justify-center text-ivory-light/60 hover:bg-slate-blue hover:text-ivory-light transition-all"
                  >
                    <FiInstagram className="w-5 h-5" />
                  </a>
                )}
                {member.socials.linkedin && (
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full bg-white/5 border border-white/[0.06] flex items-center justify-center text-ivory-light/60 hover:bg-slate-blue hover:text-ivory-light transition-all"
                  >
                    <FiLinkedin className="w-5 h-5" />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}