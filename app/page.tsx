import type { Metadata } from "next";
import { HomeClient } from "@/components/home/home-client";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://beehivewebdesigns.com";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Websites That Work As Hard As You Do",
    description:
      "Custom web design, hosting, and SEO for small businesses. Beehive Web Designs builds fast, beautiful sites that bring customers to your door.",
    keywords: [
      "small business web design",
      "custom websites",
      "web hosting",
      "local SEO",
      "Beehive Web Designs",
    ],
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      url: baseUrl,
      title: "Beehive Web Designs | Websites That Work As Hard As You Do",
      description:
        "Custom web design, hosting, and SEO for small businesses. Beautiful sites built from scratch.",
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: "Beehive Web Designs",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Beehive Web Designs | Websites That Work As Hard As You Do",
      description:
        "Custom web design, hosting, and SEO for small businesses.",
      images: [`${baseUrl}/og-image.jpg`],
    },
  };
}

export default function Home() {
  return <HomeClient />;
}
