import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://beehivewebdesigns.com";
  
  return {
    title: "Contact Us",
    description:
      "Get in touch with Beehive Web Designs. We're here to help you build a website that works for your business. Contact us for a free quote. Available 24/7 to answer your questions.",
    keywords: [
      "contact Beehive Web Designs",
      "web design quote",
      "website consultation",
      "free website quote",
      "web design contact",
    ],
    alternates: {
      canonical: "/contact",
    },
    openGraph: {
      type: "website",
      url: `${baseUrl}/contact`,
      title: "Contact Us | Beehive Web Designs",
      description:
        "Get in touch with Beehive Web Designs. We're here to help you build a website that works for your business. Contact us for a free quote.",
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: "Contact Beehive Web Designs",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Contact Us | Beehive Web Designs",
      description:
        "Get in touch with Beehive Web Designs. We're here to help you build a website that works for your business. Contact us for a free quote.",
      images: [`${baseUrl}/og-image.jpg`],
    },
  };
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
