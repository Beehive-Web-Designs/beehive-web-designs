"use client";

import { PageShell } from "@/components/page-shell";
import { FadeIn } from "@/components/animations/FadeIn";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactForm } from "@/components/contact/ContactForm";
import { FAQSection } from "@/components/contact/FAQSection";

export function ContactClient() {
  return (
    <PageShell>
      {/* ─── HERO ─── */}
      <section className="pt-36 pb-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <FadeIn animateOnMount>
            <p className="mb-3 text-xs font-bold tracking-widest uppercase text-honey-dark">
              Contact
            </p>
          </FadeIn>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.05] tracking-tight mb-6 max-w-4xl mx-auto">
            Let&apos;s build something{" "}
            <span className="text-honey">amazing together</span>
          </h1>

          <FadeIn delay={0.2} animateOnMount>
            <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed mx-auto">
              Whether you need a brand new website, better hosting, or help
              getting found on Google — we&apos;re here to help. Reach out and
              let&apos;s start a conversation.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── CONTACT FORM + INFO ─── */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>

            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <FAQSection />
    </PageShell>
  );
}
