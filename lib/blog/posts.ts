import type { BlogPost } from "./types";

export const blogPosts: BlogPost[] = [
  {
    slug: "utah-small-business-bad-websites",
    title:
      "Why Small Businesses in Utah Lose Customers With Bad Websites (and How to Fix It)",
    description:
      "Utah small businesses lose customers every day to slow, outdated websites. Learn the real costs, what to fix this week, and when professional web design pays off.",
    excerpt:
      "Your website is often the first impression Utah customers get of your business. If it loads slowly, looks outdated, or hides your phone number, they are already calling your competitor.",
    publishedAt: "2026-05-25",
    readTime: "8 min read",
    author: "Spencer Hodson",
    keywords: [
      "Utah small business website",
      "bad website cost",
      "web design Utah",
      "local SEO Utah",
      "Salt Lake City web design",
      "Utah County web design",
      "small business website tips",
      "website conversion Utah",
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllPostSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}
