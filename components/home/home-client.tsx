"use client";

import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { CTABanner } from "@/components/cta-banner";
import { ProcessSection } from "@/components/process-section";
import { PricingSection } from "@/components/pricing-section";
import { HomeHero } from "@/components/home/home-hero";
import { HomeServicesSection } from "@/components/home/home-services-section";
import { HomeAboutSection } from "@/components/home/home-about-section";
import { HomeTestimonialsSection } from "@/components/home/home-testimonials-section";

export function HomeClient() {
  return (
    <div className="min-h-screen bg-[#0F0F1A] text-[#F0EDE6] overflow-x-hidden">
      <NavBar />
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
      <Footer />
    </div>
  );
}
