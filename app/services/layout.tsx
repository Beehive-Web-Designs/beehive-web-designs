import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://beehivewebdesigns.com";
  
  return {
    title: "Services",
    description:
      "Complete website solutions for small businesses. Custom web design, reliable hosting, and SEO services that drive real results. Get a website that works as hard as you do.",
    keywords: [
      "web design services",
      "website development services",
      "web hosting services",
      "SEO services",
      "small business web design",
      "custom website design",
      "website maintenance",
      "responsive web design",
    ],
    alternates: {
      canonical: "/services",
    },
    openGraph: {
      type: "website",
      url: `${baseUrl}/services`,
      title: "Services | Beehive Web Designs",
      description:
        "Complete website solutions for small businesses. Custom web design, reliable hosting, and SEO services that drive real results.",
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: "Beehive Web Designs Services - Web Design, Hosting & SEO",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Services | Beehive Web Designs",
      description:
        "Complete website solutions for small businesses. Custom web design, reliable hosting, and SEO services that drive real results.",
      images: [`${baseUrl}/og-image.jpg`],
    },
  };
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
