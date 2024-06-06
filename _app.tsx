import { AppProps } from "next/app";
import { useEffect } from "react";
import Script from "next/script";
import { useRouter } from "next/router";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      console.log(`Loading: ${url}`);
      if (typeof window.gtag !== "undefined") {
        console.log("gtag exists, sending pageview");
        window.gtag(
          "config",
          process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS as string,
          {
            page_path: url,
          }
        );
      } else {
        console.log("gtag is undefined");
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    console.log("Initializing Google Analytics");
  }, []);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        strategy="afterInteractive"
        onLoad={() => {
          console.log("Google Analytics script loaded");
        }}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
        }}
        onLoad={() => {
          console.log("Google Analytics inline script executed");
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
