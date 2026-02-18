import type { Metadata } from "next";
import { Space_Grotesk, Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://beehivewebdesigns.com";
  
  return {
    title: {
      default: "Beehive Web Designs | Web Design, Hosting & SEO for Small Business",
      template: "%s | Beehive Web Designs",
    },
    description:
      "Beehive Web Designs builds beautiful, high-performing websites for small businesses. We handle web design, hosting, and SEO so you can focus on what you do best.",
    keywords: [
      "web design",
      "website development",
      "small business websites",
      "web hosting",
      "SEO services",
      "custom websites",
      "responsive web design",
      "website maintenance",
    ],
    authors: [{ name: "Beehive Web Designs" }],
    creator: "Beehive Web Designs",
    publisher: "Beehive Web Designs",
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: baseUrl,
      siteName: "Beehive Web Designs",
      title: "Beehive Web Designs | Web Design, Hosting & SEO for Small Business",
      description:
        "Beehive Web Designs builds beautiful, high-performing websites for small businesses. We handle web design, hosting, and SEO so you can focus on what you do best.",
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: "Beehive Web Designs - Web Design, Hosting & SEO Services",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Beehive Web Designs | Web Design, Hosting & SEO for Small Business",
      description:
        "Beautiful, high-performing websites for small businesses. We handle web design, hosting, and SEO so you can focus on what you do best.",
      images: [`${baseUrl}/og-image.jpg`],
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
    verification: {
      // Add your verification codes here when available
      // google: "your-google-verification-code",
      // yandex: "your-yandex-verification-code",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${syne.variable} ${dmSans.variable}`}>
      <body className="antialiased font-[family-name:var(--font-dm-sans)]">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
