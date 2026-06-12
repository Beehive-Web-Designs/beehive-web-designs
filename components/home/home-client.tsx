"use client";

import { PageShell } from "@/components/page-shell";
import { CTABanner } from "@/components/cta-banner";
import { ProcessSection } from "@/components/process-section";
import { PricingSection } from "@/components/pricing-section";
import { HomeHero } from "@/components/home/home-hero";
import { HomeServicesSection } from "@/components/home/home-services-section";
import { HomeAboutSection } from "@/components/home/home-about-section";
import { HomeTestimonialsSection } from "@/components/home/home-testimonials-section";

export function HomeClient() {
  return (
    <PageShell>
      <HomeHero />
      <HomeServicesSection />
      <HomeAboutSection />
      <ProcessSection hasHoneycombBg={false} />
      <HomeTestimonialsSection />
      <PricingSection
        showBadge={false}
        buttonHref="#contact"
        hasHoneycombBg={false}
      />
      <CTABanner />
    </PageShell>
  );
}
