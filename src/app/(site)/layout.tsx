import { SmoothScroll } from "@/components/ui/utils/smooth-scroll";
import { Navbar } from "@/components/layout/Navbar";
import { CustomCursor } from "@/components/ui/utils/CustomCursor";
import { ScrollToTop } from "@/components/ui/utils/ScrollToTop";
import { StickyCta } from "@/components/layout/StickyCta";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/shared/ScrollProgress";
import { Analytics } from "@/components/ui/shared/Analytics";
import { ErrorBoundary } from "@/components/ui/utils/ErrorBoundary";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Analytics />
      <CustomCursor />
      <ScrollToTop />
      <SmoothScroll>
        <ErrorBoundary>
          <ScrollProgress />
          <Navbar />
          <main className="w-full relative">{children}</main>
          <Footer />
          <StickyCta />
        </ErrorBoundary>
      </SmoothScroll>
    </>
  );
}
