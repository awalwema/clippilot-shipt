// components/Analytics.tsx
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

export function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (typeof window.gtag !== "undefined") {
        window.gtag("config", GA_TRACKING_ID, {
          page_path: url,
        });
      }
    };

    handleRouteChange(pathname);
  }, [pathname]);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}
