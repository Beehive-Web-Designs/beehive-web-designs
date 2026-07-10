import type { Metadata } from "next";
import { BlogClient } from "./blog-client";
import { ogImageUrl, siteUrl } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Web Design & SEO Blog",
    description:
      "Practical web design, hosting, and local SEO tips for small businesses in Utah. Learn how to fix bad websites, win more customers, and grow online.",
    keywords: [
      "Utah web design blog",
      "small business website tips",
      "local SEO Utah",
      "web design advice",
      "Beehive Web Designs blog",
    ],
    alternates: {
      canonical: "/blog",
    },
    openGraph: {
      type: "website",
      url: `${siteUrl}/blog`,
      title: "Web Design & SEO Blog | Beehive Web Designs",
      description:
        "Practical web design, hosting, and local SEO tips for small businesses in Utah.",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: "Beehive Web Designs Blog",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Web Design & SEO Blog | Beehive Web Designs",
      description:
        "Practical web design, hosting, and local SEO tips for small businesses in Utah.",
      images: [ogImageUrl],
    },
  };
}

export default function BlogPage() {
  return <BlogClient />;
}
