import type { Metadata } from "next";
import { BlogClient } from "./blog-client";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://beehivewebdesigns.com";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Blog",
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
      url: `${baseUrl}/blog`,
      title: "Blog | Beehive Web Designs",
      description:
        "Practical web design, hosting, and local SEO tips for small businesses in Utah.",
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: "Beehive Web Designs Blog",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Blog | Beehive Web Designs",
      description:
        "Practical web design, hosting, and local SEO tips for small businesses in Utah.",
      images: [`${baseUrl}/og-image.jpg`],
    },
  };
}

export default function BlogPage() {
  return <BlogClient />;
}
