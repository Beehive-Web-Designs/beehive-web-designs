import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://beehivewebdesigns.com";
  
  return {
    title: "About Us",
    description:
      "Meet the team behind Beehive Web Designs. We're a small team with big ambitions, dedicated to helping small businesses succeed online. Learn about our values, process, and commitment to quality.",
    keywords: [
      "about Beehive Web Designs",
      "web design team",
      "small business web developers",
      "website design company",
      "custom website developers",
    ],
    alternates: {
      canonical: "/about",
    },
    openGraph: {
      type: "website",
      url: `${baseUrl}/about`,
      title: "About Us | Beehive Web Designs",
      description:
        "Meet the team behind Beehive Web Designs. We're a small team with big ambitions, dedicated to helping small businesses succeed online.",
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: "About Beehive Web Designs Team",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "About Us | Beehive Web Designs",
      description:
        "Meet the team behind Beehive Web Designs. We're a small team with big ambitions, dedicated to helping small businesses succeed online.",
      images: [`${baseUrl}/og-image.jpg`],
    },
  };
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
