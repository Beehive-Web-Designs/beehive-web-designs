import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { LazyToaster } from "@/components/lazy-toaster";
import { SiteJsonLd } from "@/components/seo/json-ld";
import { ogImageUrl, siteUrl } from "@/lib/site";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL(siteUrl),
    title: {
      default:
        "Beehive Web Designs | Web Design, Hosting & SEO for Small Businesses",
      template: "%s | Beehive Web Designs",
    },
    description:
      "Beehive Web Designs creates high-performing websites for small businesses—design, hosting, and SEO handled so you can focus on running your business.",
    keywords: [
      "web design",
      "website development",
      "small business websites",
      "web hosting",
      "SEO services",
      "custom websites",
      "responsive web design",
      "website maintenance",
      "Utah web design",
      "Utah website development",
      "Utah web designer",
      "Utah SEO services",
      "local web design Utah",
      "small business web design Utah",
      "affordable web design",
      "professional website design",
      "local SEO Utah",
      "business website design",
      "mobile-friendly websites",
      "custom web development",
    ],
    authors: [{ name: "Beehive Web Designs" }],
    creator: "Beehive Web Designs",
    publisher: "Beehive Web Designs",
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: "Beehive Web Designs",
      url: siteUrl,
      title:
        "Beehive Web Designs | Web Design, Hosting & SEO for Small Businesses",
      description:
        "Custom web design, hosting, and SEO for small businesses. Beautiful sites built from scratch.",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: "Beehive Web Designs - Web Design, Hosting & SEO Services",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title:
        "Beehive Web Designs | Web Design, Hosting & SEO for Small Businesses",
      description:
        "Custom web design, hosting, and SEO for small businesses.",
      images: [ogImageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <style
          dangerouslySetInnerHTML={{
            __html: `:root{color-scheme:light}body{margin:0;background:#ffffff;color:#2e2418}nav{position:fixed;top:0;left:0;right:0;z-index:50;border-bottom:1px solid rgba(46,36,24,.1);background:#ffffff}.services-lcp{text-align:center}.hero-lcp h1,.services-lcp h1{font-weight:800;line-height:1.05;letter-spacing:-.025em;font-family:var(--font-outfit),system-ui,sans-serif}.hero-lcp h1{margin:0 0 1.5rem;font-size:3rem}.services-lcp h1{margin:0 auto 1.5rem;font-size:2.25rem;max-width:48rem}.hero-lcp .text-honey-dark,.services-lcp .text-honey-dark{color:#8f5c00}.hero-lcp p{margin:0 0 2rem;font-size:1.125rem;line-height:1.625;font-family:var(--font-outfit),system-ui,sans-serif;color:#6b5d4b}.services-lcp p{margin:0 auto 2rem;font-size:1.125rem;line-height:1.625;font-family:var(--font-outfit),system-ui,sans-serif;color:#6b5d4b;max-width:42rem}@media(min-width:640px){.hero-lcp h1{font-size:3.75rem}.services-lcp h1{font-size:3rem}}@media(min-width:768px){.services-lcp h1{font-size:3.75rem}}@media(min-width:1024px){.hero-lcp h1{font-size:4.5rem}}`,
          }}
        />
      </head>
      <body className="antialiased font-sans">
        <SiteJsonLd />
        {children}
        <LazyToaster />
      </body>
    </html>
  );
}
