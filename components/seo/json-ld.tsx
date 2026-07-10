import { siteUrl } from "@/lib/site";
import { serializeJsonLd } from "@/lib/serialize-json-ld";

type JsonLdProps = {
  data: Record<string, unknown>;
};

function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  );
}

const organization = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteUrl}/#organization`,
  name: "Beehive Web Designs",
  url: siteUrl,
  logo: `${siteUrl}/bee-logo.svg`,
  image: `${siteUrl}/opengraph-image.png`,
  description:
    "Custom web design, hosting, and SEO for small businesses across the United States and Canada.",
  email: "spencer@beehivewebdesigns.com",
  telephone: "+1-949-709-9241",
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "Canada" },
    {
      "@type": "AdministrativeArea",
      name: "Utah County",
      containedInPlace: {
        "@type": "State",
        name: "Utah",
      },
    },
    {
      "@type": "AdministrativeArea",
      name: "Salt Lake County",
      containedInPlace: {
        "@type": "State",
        name: "Utah",
      },
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressRegion: "UT",
    addressCountry: "US",
  },
  founder: {
    "@type": "Person",
    name: "Spencer Hodson",
  },
  sameAs: [],
  priceRange: "$$",
  knowsAbout: [
    "Web Design",
    "Web Development",
    "Web Hosting",
    "Search Engine Optimization",
    "Small Business Websites",
  ],
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "Beehive Web Designs",
  description: "Web design, hosting, and SEO services for small businesses.",
  publisher: {
    "@id": `${siteUrl}/#organization`,
  },
  inLanguage: "en-US",
};

export function SiteJsonLd() {
  return (
    <>
      <JsonLd data={organization} />
      <JsonLd data={website} />
    </>
  );
}

export function FAQPageJsonLd({
  faqs,
}: {
  faqs: Array<{ q: string; a: string }>;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: Array<{ name: string; path: string }>;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: `${siteUrl}${item.path}`,
        })),
      }}
    />
  );
}

export function LocationServiceJsonLd({
  name,
  description,
  path,
  city,
  state,
}: {
  name: string;
  description: string;
  path: string;
  city: string;
  state: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name,
        description,
        url: `${siteUrl}${path}`,
        provider: {
          "@id": `${siteUrl}/#organization`,
        },
        areaServed: {
          "@type": "City",
          name: city,
          containedInPlace: {
            "@type": "State",
            name: state === "UT" ? "Utah" : state,
          },
        },
        serviceType: ["Web Design", "Web Hosting", "SEO"],
      }}
    />
  );
}
