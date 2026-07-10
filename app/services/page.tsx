import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { PageShell } from "@/components/page-shell";
import { ogImageUrl, siteUrl } from "@/lib/site";
import { ServicesHero } from "./services-hero";

const ServicesDetails = dynamic(
  () => import("./services-details").then((mod) => mod.ServicesDetails),
  { loading: () => <div className="py-24" aria-hidden="true" /> }
);

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Web Design, Hosting & SEO Services",
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
      "Utah web design services",
    ],
    alternates: {
      canonical: "/services",
    },
    openGraph: {
      type: "website",
      url: `${siteUrl}/services`,
      title: "Web Design, Hosting & SEO Services | Beehive Web Designs",
      description:
        "Complete website solutions for small businesses. Custom web design, reliable hosting, and SEO services that drive real results.",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: "Beehive Web Designs Services - Web Design, Hosting & SEO",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Web Design, Hosting & SEO Services | Beehive Web Designs",
      description:
        "Complete website solutions for small businesses. Custom web design, reliable hosting, and SEO services that drive real results.",
      images: [ogImageUrl],
    },
  };
}

export default function ServicesPage() {
  return (
    <PageShell>
      <ServicesHero />
      <ServicesDetails />
    </PageShell>
  );
}
