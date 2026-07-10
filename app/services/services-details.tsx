"use client";

import dynamic from "next/dynamic";
import {
  Globe,
  Search,
  Server,
  ArrowRight,
  Palette,
  Smartphone,
  Gauge,
  FileCode,
  Shield,
  Lock,
  RefreshCw,
  MapPin,
  FileText,
  Headphones,
  MonitorSmartphone,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const PricingSection = dynamic(
  () =>
    import("@/components/pricing-section").then((mod) => mod.PricingSection),
  { loading: () => <div className="py-24" aria-hidden="true" /> }
);

const CTABanner = dynamic(
  () => import("@/components/cta-banner").then((mod) => mod.CTABanner),
  { loading: () => <div className="py-20" aria-hidden="true" /> }
);

const services = [
  {
    id: "web-design",
    icon: Globe,
    title: "Web Design & Development",
    subtitle: "Stunning, high performance websites",
    desc: "We don't do templates. Every website is custom-designed from scratch to reflect your brand, engage your audience, and turn visitors into paying customers. From single-page landing pages to full multi-page business sites, we've got you covered.",
    features: [
      { icon: Palette, label: "Custom Visual Design", desc: "Unique branding and layout tailored to your business identity." },
      { icon: Smartphone, label: "Fully Responsive", desc: "Looks and works flawlessly on phones, tablets, and desktops." },
      { icon: Gauge, label: "Blazing Fast Performance", desc: "Optimized code and assets for sub-second load times." },
      { icon: Target, label: "Conversion-Focused Design", desc: "Every element is strategically placed to turn visitors into customers." },
      { icon: MonitorSmartphone, label: "Cross-Browser Tested", desc: "Works perfectly in Chrome, Safari, Firefox, Edge, and more." },
      { icon: FileText, label: "SEO-Ready Structure", desc: "SEO-optimized from day one." },
    ],
  },
  {
    id: "hosting",
    icon: Server,
    title: "Hosting & Maintenance",
    subtitle: "Your website stays online, secure, and up-to-date",
    desc: "We handle everything behind the scenes so you don't have to. Your website will be fast, secure, and always available to your customers. We take care of all the technical stuff so you can focus on running your business.",
    features: [
      { icon: Shield, label: "Always Online & Secure", desc: "Your website stays up and running, protected from hackers and threats." },
      { icon: Headphones, label: "24/7 Support & Monitoring", desc: "We watch your site around the clock and fix issues before they become problems." },
      { icon: RefreshCw, label: "Regular Updates & Maintenance", desc: "We keep your website updated and running smoothly, so you don't have to worry about it." },
      { icon: Lock, label: "Security Protection", desc: "Your site and customer information stay safe with strong security measures." },
      { icon: Gauge, label: "Fast Loading Speeds", desc: "Your website loads quickly for visitors, no matter where they are." },
      { icon: FileText, label: "Content Updates When You Need Them", desc: "Need to change text, images, or pages? We'll handle it for you." },
    ],
  },
  {
    id: "seo",
    icon: Search,
    title: "SEO Services",
    subtitle: "Get found by the customers who matter most",
    desc: "A beautiful website means nothing if nobody can find it. We ensure every website we build achieves a high SEO score, giving you the best foundation to get found by customers searching for what you offer.",
    features: [
      { icon: Search, label: "High SEO Scores", desc: "Every website achieves a high SEO score on Google's tests, giving you the best foundation." },
      { icon: FileText, label: "Proper Site Structure", desc: "Meta tags, headers, and content structure optimized for search engines." },
      { icon: MapPin, label: "Local SEO Setup", desc: "Optimized for local searches so customers in your area can find you." },
      { icon: Shield, label: "Mobile-Friendly", desc: "Google's mobile-first indexing means your site is optimized for mobile search rankings." },
      { icon: Gauge, label: "Fast Loading Speeds", desc: "Page speed is a ranking factor that helps boost your position in search results." },
      { icon: FileCode, label: "Clean, Semantic Code", desc: "Well-structured code that search engines can easily understand and index." },
    ],
  },
];

export function ServicesDetails() {
  return (
    <>
      {services.map((service, idx) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-24 ${idx % 2 === 0 ? "bg-section-alt" : ""}`}
        >
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              
                <div className={idx % 2 !== 0 ? "lg:order-2" : ""}>
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-honey/15 mb-6">
                    <service.icon className="h-7 w-7 text-honey-dark" />
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
                    {service.title}
                  </h2>
                  <p className="text-honey-dark text-xs font-bold uppercase tracking-widest mb-6">
                    {service.subtitle}
                  </p>
                  <p className="text-muted-foreground text-base leading-relaxed mb-8">
                    {service.desc}
                  </p>
                  <Button
                    asChild
                    className="bg-honey hover:bg-honey-light text-espresso font-bold rounded-full px-8"
                  >
                    <Link href="/contact">
                      Get a quote <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              

              
                <div className={`grid sm:grid-cols-2 gap-4 ${idx % 2 !== 0 ? "lg:order-1" : ""}`}>
                  {service.features.map((feat) => (
                    <div
                      key={feat.label}
                      className="p-5 rounded-2xl bg-card card-soft"
                    >
                      <feat.icon className="h-5 w-5 text-honey-dark mb-3" />
                      <h3 className="text-sm font-bold mb-1">{feat.label}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  ))}
                </div>
              
            </div>
          </div>
        </section>
      ))}

      <PricingSection buttonHref="/contact" />
      <CTABanner className="bg-section-alt" />
    </>
  );
}
