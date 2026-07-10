import type { Metadata } from "next";
import { FAQPageJsonLd } from "@/components/seo/json-ld";
import { allFaqs } from "@/lib/contact/faqs";
import { ogImageUrl, siteUrl } from "@/lib/site";
import { ContactClient } from "./contact-client";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Contact Us for a Free Website Quote",
    description:
      "Get in touch with Beehive Web Designs. We're here to help you build a website that works for your business. Contact us for a free quote.",
    keywords: [
      "contact Beehive Web Designs",
      "web design quote",
      "website consultation",
      "free website quote",
      "web design contact",
      "Utah web design quote",
    ],
    alternates: {
      canonical: "/contact",
    },
    openGraph: {
      type: "website",
      url: `${siteUrl}/contact`,
      title: "Contact Us for a Free Website Quote | Beehive Web Designs",
      description:
        "Get in touch with Beehive Web Designs. We're here to help you build a website that works for your business. Contact us for a free quote.",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: "Contact Beehive Web Designs",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Contact Us for a Free Website Quote | Beehive Web Designs",
      description:
        "Get in touch with Beehive Web Designs. We're here to help you build a website that works for your business. Contact us for a free quote.",
      images: [ogImageUrl],
    },
  };
}

export default function ContactPage() {
  return (
    <>
      <FAQPageJsonLd faqs={allFaqs} />
      <ContactClient />
    </>
  );
}
