import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Caveat, Montserrat } from "next/font/google";
import "./globals.css";
import MapAndFooter from "@/components/MapAndFooter";
import Preloader from "@/components/Preloader";
import Header from "@/components/Header";

// Fonts must be declared at module scope
const caveat = Caveat({ subsets: ["latin"], weight: ["400", "500"] });
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kalimpongbungalow.vercel.app/"),
  title: "Kalimpong Bungalow - Cultural Bed & Breakfast",
  description:
    "Kalimpong Bungalow – a serene, cultural bed & breakfast in the hills.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
      },
      {
        rel: "android-chrome",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
      },
    ],
  },
  manifest: "/site.webmanifest",

  // Social share previews
  openGraph: {
    type: "website",
    url: "/",
    title: "Kalimpong Bungalow - Cultural Bed & Breakfast",
    description:
      "Heritage, culture, and calm—your peaceful retreat in Kalimpong.",
    siteName: "Kalimpong Bungalow",
    images: [
      {
        url: "/og-image.jpg", // 1200×630 (JPG/PNG/WebP)
        width: 1200,
        height: 630,
        alt: "Kalimpong Bungalow – Cultural Bed & Breakfast",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kalimpong Bungalow - Cultural Bed & Breakfast",
    description:
      "Heritage, culture, and calm—your peaceful retreat in Kalimpong.",
    images: ["/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Base CSS from template to preserve look */}
        <link href="/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/css/style.css" rel="stylesheet" />
        <link href="/css/vendors.min.css" rel="stylesheet" />
        {/* Custom CSS (kept) */}
        <link href="/css/custom.css" rel="stylesheet" />
      </head>
      <body
        data-bs-spy="scroll"
        data-bs-offset="120"
        data-bs-target="#mainNav"
        className={`${caveat.className} ${montserrat.className}`}
      >
        <Preloader />

        <Header />
        {children}
        <MapAndFooter />
        {/* COMMON SCRIPTS from template (order matters) */}
        <Script src="/js/common_scripts.js" strategy="afterInteractive" />
        <Script src="/js/common_functions.js" strategy="afterInteractive" />
        <Script src="/js/datepicker_inline.js" strategy="afterInteractive" />
        <Script src="/phpmailer/validate.js" strategy="afterInteractive" />
        <Script src="/js/jquery.easing.min.js" strategy="afterInteractive" />
        <Script src="/js/scrolling-nav.js" strategy="afterInteractive" />
        {/* SPECIFIC (home slider if used) */}
        <Script src="/js/slider.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
