import type { BlogPost } from "./types";

export const blogPosts: BlogPost[] = [
  {
    slug: "how-much-does-a-website-cost-utah",
    title:
      "How Much Does a Small Business Website Cost in Utah? (2026 Pricing Guide)",
    description:
      "Wondering what a website costs in Utah? Compare DIY vs custom pricing, hidden fees, lump sum vs monthly plans, and what Utah small businesses should budget in 2026.",
    excerpt:
      "Utah web design quotes range from a few hundred dollars to tens of thousands. Here is what drives the price, what to budget, and how to avoid paying for a site that never generates leads.",
    publishedAt: "2026-07-09",
    readTime: "9 min read",
    author: "Spencer Hodson",
    keywords: [
      "website cost Utah",
      "how much does a website cost",
      "small business website price",
      "web design pricing Utah",
      "affordable website Utah",
      "custom website cost",
      "Salt Lake City web design cost",
      "Utah web designer pricing",
    ],
  },
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
