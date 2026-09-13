import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Privacy Policy | JU Socialz",
  description: "JU Socialz privacy policy — how we collect, use, and protect your data.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <main className="bg-obsidian-dark text-white min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-fluid-display font-bold font-geist text-ivory-light tracking-tight mb-8">
          Privacy Policy
        </h1>
        <p className="text-ivory-dark/60 font-inter text-sm tracking-widest mb-16">
          Last updated: July 2026
        </p>

        <div className="prose prose-invert prose-lg max-w-none font-inter text-ivory-dark/80 leading-relaxed space-y-12">
          <section>
            <h2 className="text-fluid-h2 font-geist font-bold text-ivory-light mb-4">1. Introduction</h2>
            <p>
              JU Socialz ("we," "our," or "us") is the official media team of JECRC University. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
              when you visit our website.
            </p>
          </section>

          <section>
            <h2 className="text-fluid-h2 font-geist font-bold text-ivory-light mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-geist font-semibold text-ivory-light mb-3">Personal Information</h3>
            <p>
              When you submit an application or contact form on our website, we may collect:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Course and year of study</li>
              <li>Portfolio links or samples of work</li>
            </ul>
            <h3 className="text-xl font-geist font-semibold text-ivory-light mb-3 mt-8">Automatically Collected Information</h3>
            <p>
              When you visit our website, we may automatically collect certain information, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Browser type and version</li>
              <li>Device type and operating system</li>
              <li>Pages visited and time spent on each page</li>
              <li>Referring URL</li>
            </ul>
          </section>

          <section>
            <h2 className="text-fluid-h2 font-geist font-bold text-ivory-light mb-4">3. How We Use Your Information</h2>
            <p>We use the collected information for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>To process and evaluate applications for team membership</li>
              <li>To communicate with you about your application</li>
              <li>To improve our website and user experience</li>
              <li>To showcase our work and team culture</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-fluid-h2 font-geist font-bold text-ivory-light mb-4">4. Cookies</h2>
            <p>
              Our website may use cookies and similar tracking technologies to enhance your browsing experience. 
              Cookies are small data files stored on your device. You can control cookie preferences through 
              your browser settings.
            </p>
            <p className="mt-4">
              We use cookies for:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Essential website functionality</li>
              <li>Analytics (to understand how visitors use our site)</li>
              <li>Remembering your preferences</li>
            </ul>
          </section>

          <section>
            <h2 className="text-fluid-h2 font-geist font-bold text-ivory-light mb-4">5. Third-Party Services</h2>
            <p>We may use third-party services that collect, monitor, and analyze data:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Sanity</strong> — Content management system and hosting</li>
              <li><strong>Vercel / Netlify</strong> — Website hosting and deployment</li>
              <li><strong>Google Analytics / Plausible</strong> — Website analytics (if enabled)</li>
              <li><strong>Instagram</strong> — Social media integration</li>
              <li><strong>YouTube</strong> — Video content embedding</li>
            </ul>
          </section>

          <section>
            <h2 className="text-fluid-h2 font-geist font-bold text-ivory-light mb-4">6. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information. 
              However, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-fluid-h2 font-geist font-bold text-ivory-light mb-4">7. Your Rights</h2>
            <p>Depending on your jurisdiction, you may have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className="mt-6">
              To exercise any of these rights, please contact us at the email address below.
            </p>
          </section>

          <section>
            <h2 className="text-fluid-h2 font-geist font-bold text-ivory-light mb-4">8. Contact</h2>
            <p>
              If you have questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <p className="mt-4 text-ivory-light">
              Email: socialz@jecrc.ac.in<br />
              JECRC University, Jaipur, Rajasthan, India
            </p>
          </section>

          <section>
            <h2 className="text-fluid-h2 font-geist font-bold text-ivory-light mb-4">9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
              the new policy on this page with an updated date.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
