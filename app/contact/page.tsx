"use client";

import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { FadeIn } from "@/components/animations/FadeIn";
import { HoneycombDecor } from "@/components/HoneyCombDecor";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactForm } from "@/components/contact/ContactForm";
import { FAQSection } from "@/components/contact/FAQSection";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0F0F1A] text-[#F0EDE6] overflow-x-hidden">
      <NavBar />

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 honeycomb-bg">
        <HoneycombDecor className="absolute top-20 left-10 w-48 h-48 opacity-40 hidden lg:block" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-honey/5 blur-[120px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
          <FadeIn delay={0.1} animateOnMount>
            <h1 className="font-[family-name:var(--font-syne)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[0.95] tracking-tight mb-6 max-w-4xl mx-auto">
              Let&apos;s Build Something
              <br />
              <span className="gradient-text">Amazing Together</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2} animateOnMount>
            <p className="max-w-2xl text-lg sm:text-xl text-[#8A8A9A] leading-relaxed font-[family-name:var(--font-space-grotesk)] mx-auto">
              Whether you need a brand new website, better hosting, or help
              getting found on Google — we&apos;re here to help. Reach out and
              let&apos;s start a conversation.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── CONTACT FORM + INFO ─── */}
      <section className="py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-honey/[0.02] to-transparent pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left: Contact Info */}
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <FAQSection />
      <Footer />
    </div>
  );
}
