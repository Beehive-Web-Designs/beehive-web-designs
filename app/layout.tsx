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
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://beehivewebdesigns.com'),
    title: {
      default: "Beehive Web Designs | Web Design, Hosting & SEO for Small Businesses",
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
      "Utah web hosting",
      "local web design Utah",
      "small business web design Utah",
      "affordable web design",
      "professional website design",
      "e-commerce websites",
      "WordPress development",
      "website redesign",
      "local SEO Utah",
      "business website design",
      "mobile-friendly websites",
      "website builder Utah",
      "custom web development",
      "website optimization",
      "online presence",
      "digital marketing",
      "website analytics",
      "content management system",
    ],
    authors: [{ name: "Beehive Web Designs" }],
    creator: "Beehive Web Designs",
    publisher: "Beehive Web Designs",
    alternates: {
      canonical: "/",
    },
    // openGraph: {
    //   type: "website",
    //   locale: "en_US",
    //   siteName: "Beehive Web Designs",
    //   title: "Beehive Web Designs | Web Design, Hosting & SEO for Small Business",
    //   description:
    //     "Beehive Web Designs creates high-performing websites for small businesses—design, hosting, and SEO handled so you can focus on running your business.",
    //   images: [
    //     {
    //       url: `public/og-image.png`,
    //       width: 1200,
    //       height: 630,
    //       alt: "Beehive Web Designs - Web Design, Hosting & SEO Services",
    //     },
    //   ],
    // },
    // twitter: {
    //   card: "summary_large_image",
    //   title: "Beehive Web Designs | Web Design, Hosting & SEO for Small Business",
    //   description:
    //     "Beehive Web Designs creates high-performing websites for small businesses—design, hosting, and SEO handled so you can focus on running your business.",
    //   images: [`public/og-image.jpg`],
    // },
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
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="antialiased font-[family-name:var(--font-dm-sans)]">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
