import type { Metadata } from "next";
import Script from "next/script";
import { Caveat, Montserrat } from "next/font/google";
import "./globals.css";

// Fonts must be declared at module scope
const caveat = Caveat({ subsets: ["latin"], weight: ["400", "500"] });
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Bed and Breakfast Single page",
  description: "Simple and easy to edit Bed and Breakfast site template",
  icons: {
    icon: "/favicon.ico",
    apple: [
      { url: "/img/apple-touch-icon-57x57-precomposed.png" },
      { url: "/img/apple-touch-icon-72x72-precomposed.png", sizes: "72x72" },
      {
        url: "/img/apple-touch-icon-114x114-precomposed.png",
        sizes: "114x114",
      },
      {
        url: "/img/apple-touch-icon-144x144-precomposed.png",
        sizes: "144x144",
      },
    ],
  },
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
        {children}
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
