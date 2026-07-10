import type { Metadata } from "next";
import { AboutClient } from "./about-client";
import { ogImageUrl, siteUrl } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "About Our Web Design Team",
    description:
      "Meet the team behind Beehive Web Designs. We're a focused team dedicated to helping small businesses succeed online with custom websites, hosting, and SEO.",
    keywords: [
      "about Beehive Web Designs",
      "web design team",
      "small business web developers",
      "website design company",
      "custom website developers",
      "Utah web designer",
    ],
    alternates: {
      canonical: "/about",
    },
    openGraph: {
      type: "website",
      url: `${siteUrl}/about`,
      title: "About Our Web Design Team | Beehive Web Designs",
      description:
        "Meet the team behind Beehive Web Designs. We're a focused team dedicated to helping small businesses succeed online.",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: "About Beehive Web Designs Team",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "About Our Web Design Team | Beehive Web Designs",
      description:
        "Meet the team behind Beehive Web Designs. We're a focused team dedicated to helping small businesses succeed online.",
      images: [ogImageUrl],
    },
  };
}

export default function AboutPage() {
  return <AboutClient />;
}
