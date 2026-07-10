import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocationArticle } from "@/components/locations/location-article";
import {
  BreadcrumbJsonLd,
  FAQPageJsonLd,
  LocationServiceJsonLd,
} from "@/components/seo/json-ld";
import {
  getLocation,
  getLocationPath,
  getLocationSlugs,
} from "@/lib/locations/utah-county";
import { ogImageUrl, siteUrl } from "@/lib/site";

type PageProps = {
  params: Promise<{ city: string }>;
};

export async function generateStaticParams() {
  return getLocationSlugs().map((city) => ({ city }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { city } = await params;
  const location = getLocation(city);

  if (!location) {
    return {};
  }

  const path = getLocationPath(location.slug);
  const url = `${siteUrl}${path}`;

  return {
    title: location.title,
    description: location.metaDescription,
    keywords: [
      `web design ${location.name}`,
      `${location.name} web designer`,
      `${location.name} Utah website`,
      "Utah County web design",
      "Salt Lake County web design",
      "small business web design",
    ],
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      url,
      title: `${location.title} | Beehive Web Designs`,
      description: location.metaDescription,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: location.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${location.title} | Beehive Web Designs`,
      description: location.metaDescription,
      images: [ogImageUrl],
    },
  };
}

export default async function LocationPage({ params }: PageProps) {
  const { city } = await params;
  const location = getLocation(city);

  if (!location) {
    notFound();
  }

  const path = getLocationPath(location.slug);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: location.name, path },
        ]}
      />
      <LocationServiceJsonLd
        name={location.title}
        description={location.metaDescription}
        path={path}
        city={location.name}
        state={location.state}
      />
      <FAQPageJsonLd faqs={location.faqs} />
      <LocationArticle location={location} />
    </>
  );
}
