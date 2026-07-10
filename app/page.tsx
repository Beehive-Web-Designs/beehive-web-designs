import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { HomeHero } from "@/components/home/home-hero";
import { HomeSections } from "@/components/home/home-sections";
import { ogImageUrl, siteUrl } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Small Business Web Design, Hosting & SEO",
    description:
      "Custom web design, hosting, and SEO for small businesses. Beehive Web Designs builds fast, beautiful sites that bring customers to your door.",
    keywords: [
      "small business web design",
      "custom websites",
      "web hosting",
      "local SEO",
      "Utah web design",
      "Beehive Web Designs",
    ],
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      url: siteUrl,
      title: "Small Business Web Design, Hosting & SEO | Beehive Web Designs",
      description:
        "Custom web design, hosting, and SEO for small businesses. Beautiful sites built from scratch.",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: "Beehive Web Designs",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Small Business Web Design, Hosting & SEO | Beehive Web Designs",
      description:
        "Custom web design, hosting, and SEO for small businesses.",
      images: [ogImageUrl],
    },
  };
}

export default function Home() {
  return (
    <PageShell>
      <HomeHero />
      <HomeSections />
    </PageShell>
  );
}
