"use client";

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
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { FadeIn } from "@/components/animations/FadeIn";
import { HoneycombDecor } from "@/components/HoneyCombDecor";
import { PricingSection } from "@/components/pricing-section";
import Link from "next/link";
import { CTABanner } from "@/components/cta-banner";

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

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#0F0F1A] text-[#F0EDE6] overflow-x-hidden">
      <NavBar />

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 honeycomb-bg">
        <HoneycombDecor className="absolute top-20 right-10 w-48 h-48 opacity-40 hidden lg:block" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-honey/5 blur-[120px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
          <FadeIn delay={0.1} animateOnMount>
            <h1 className="font-[family-name:var(--font-syne)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[0.95] tracking-tight mb-6 max-w-3xl mx-auto">
              Your Complete
              <br />
              <span className="gradient-text">Website Solution</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2} animateOnMount>
            <p className="max-w-2xl text-lg sm:text-xl text-[#8A8A9A] leading-relaxed font-[family-name:var(--font-space-grotesk)] mx-auto">
              Stop juggling multiple vendors. Beehive handles your entire web
              presence — from design and development to hosting and SEO — so
              you can focus on running your business.
            </p>
          </FadeIn>

          {/* Quick nav */}
          <FadeIn delay={0.3} animateOnMount>
            <div className="flex flex-wrap gap-3 mt-10 justify-center">
              {services.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-honey/20 bg-honey/5 hover:bg-honey/10 hover:border-honey/40 transition-all text-sm text-honey font-medium font-[family-name:var(--font-space-grotesk)]"
                >
                  <s.icon className="h-4 w-4" />
                  {s.title}
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── SERVICES DETAIL SECTIONS ─── */}
      {services.map((service, idx) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-28 relative ${idx % 2 === 0 ? "" : "honeycomb-bg"}`}
        >
          {idx % 2 === 0 && (
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-honey/[0.02] to-transparent pointer-events-none" />
          )}

          <div className="relative z-10 mx-auto max-w-7xl px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left: Info */}
              <FadeIn>
                <div className={idx % 2 !== 0 ? "lg:order-2" : ""}>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-honey/10 mb-6">
                    <service.icon className="h-8 w-8 text-honey" />
                  </div>
                  <h2 className="font-[family-name:var(--font-syne)] text-4xl sm:text-5xl font-bold tracking-tight mb-3">
                    {service.title}
                  </h2>
                  <p className="text-honey text-sm font-medium font-[family-name:var(--font-space-grotesk)] uppercase tracking-wider mb-6">
                    {service.subtitle}
                  </p>
                  <p className="text-[#8A8A9A] text-base leading-relaxed font-[family-name:var(--font-space-grotesk)] mb-8">
                    {service.desc}
                  </p>
                  <Button
                    asChild
                    className="bg-honey hover:bg-honey-light text-[#0F0F1A] font-semibold rounded-full px-8"
                  >
                    <Link href="/contact">
                      Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </FadeIn>

              {/* Right: Features grid */}
              <FadeIn delay={0.2}>
                <div className={`grid sm:grid-cols-2 gap-4 ${idx % 2 !== 0 ? "lg:order-1" : ""}`}>
                  {service.features.map((feat, fi) => (
                    <div
                      key={feat.label}
                      className="p-5 rounded-2xl border border-[rgba(245,166,35,0.1)] bg-[#1A1A2E]/40 hover:border-honey/25 transition-all duration-500 group"
                    >
                      <feat.icon className="h-5 w-5 text-honey/70 group-hover:text-honey transition-colors mb-3" />
                      <h4 className="font-[family-name:var(--font-syne)] text-sm font-bold mb-1">
                        {feat.label}
                      </h4>
                      <p className="text-xs text-[#8A8A9A] leading-relaxed font-[family-name:var(--font-space-grotesk)]">
                        {feat.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      ))}

      {/* ─── PRICING ─── */}
      <PricingSection
        showBadge={false}
        buttonHref="/contact"
        hasHoneycombBg={true}
      />

      {/* ─── CTA BANNER ─── */}
      <CTABanner />

      <Footer />
    </div>
  );
}
