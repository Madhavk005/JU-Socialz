"use client";

import Script from "next/script";
import { useEffect } from "react";

const PLAUSIBLE_URL = process.env.NEXT_PUBLIC_PLAUSIBLE_URL || "";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

export function Analytics() {
  useEffect(() => {
    if (typeof window !== "undefined" && !GA_ID && !PLAUSIBLE_URL) {
      console.info("[Analytics] No provider configured. Set NEXT_PUBLIC_PLAUSIBLE_URL or NEXT_PUBLIC_GA_ID.");
    }
  }, []);

  return (
    <>
      {PLAUSIBLE_URL && (
        <Script
          defer
          data-domain={PLAUSIBLE_URL}
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      )}
      {GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      )}
    </>
  );
}
