import { HomeServicesSection } from "@/components/home/home-services-section";
import { HomeAboutSection } from "@/components/home/home-about-section";
import { HomeWorkSection } from "@/components/home/home-work-section";
import { HomeTestimonialsSection } from "@/components/home/home-testimonials-section";
import { PricingSection } from "@/components/pricing-section";
import { CTABanner } from "@/components/cta-banner";

export function HomeSections() {
  return (
    <>
      <HomeServicesSection />
      <HomeAboutSection />
      <HomeWorkSection />
      <HomeTestimonialsSection />
      <PricingSection className="bg-section-alt" />
      <CTABanner />
    </>
  );
}
