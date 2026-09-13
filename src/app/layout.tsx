import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import { Preloader } from "@/components/ui/shared/Preloader";
import { PreloaderProvider } from "@/components/ui/shared/PreloaderContext";
import { ReducedMotionProvider } from "@/components/ui/utils/ReducedMotionProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://jusocialz.jecrcu.edu.in";
const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  title: {
    default: "JU Socialz | The Creative Pulse of JECRC",
    template: "%s | JU Socialz",
  },
  description: "The ultimate community for creators, visionaries, and media disruptors. Join the revolution in digital media, content creation, and events.",
  metadataBase: new URL(siteUrl),
  icons: {
    icon: [
      { url: "/logo.svg", type: "image/svg+xml", sizes: "any" },
      { url: "/logo.png", type: "image/png", sizes: "32x32" },
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "JU Socialz | Premium Creator Ecosystem",
    description: "The ultimate community for creators, visionaries, and media disruptors. Join the revolution in digital media.",
    url: siteUrl,
    siteName: "JU Socialz",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "JU Socialz Cover",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JU Socialz | The Creative Pulse of JECRC",
    description: "The ultimate community for creators, visionaries, and media disruptors. Join the revolution in digital media.",
    images: ["/logo.png"],
  },
  verification: {
    google: googleSiteVerification,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${geist.variable}`}>
      <body className="bg-obsidian-dark text-ivory-light antialiased selection:bg-slate-blue selection:text-ivory-light">
        <ReducedMotionProvider>
          <PreloaderProvider>
            <Preloader />
            {children}
          </PreloaderProvider>
        </ReducedMotionProvider>
      </body>
    </html>
  );
}
