"use client";

import { LazyMotion, m, useReducedMotion } from "framer-motion";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);
import {
  Globe,
  Search,
  Server,
  ArrowRight,
  Star,
  Hexagon,
  Zap,
  Shield,
  Phone,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/animations/FadeIn";
import { HoneycombDecor } from "@/components/HoneyCombDecor";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { CTABanner } from "@/components/cta-banner";
import { ProcessSection } from "@/components/process-section";
import { PricingSection } from "@/components/pricing-section";

function RotatingHex({
  rotation,
  duration,
  className,
  children,
}: {
  rotation: number;
  duration: number;
  className: string;
  children: React.ReactNode;
}) {
  const shouldReduceMotion = useReducedMotion();
  
  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <m.div
      animate={{ rotate: rotation }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
      className={className}
    >
      {children}
    </m.div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0F0F1A] text-[#F0EDE6] overflow-x-hidden">
      <NavBar />

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 honeycomb-bg">
        {/* Decorative elements */}
        <HoneycombDecor className="absolute top-20 right-10 w-48 h-48 opacity-40 hidden lg:block" />
        <HoneycombDecor className="absolute bottom-20 left-10 w-64 h-64 opacity-30 hidden lg:block" />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-honey/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-nectar/5 blur-[100px] pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
          <FadeIn animateOnMount>
            <Badge className="mb-6 rounded-full border-honey/30 bg-honey/10 text-honey px-4 py-1.5 text-xs font-medium tracking-widest uppercase">
              Web Design &bull; Hosting & Maintenance &bull; SEO
            </Badge>
          </FadeIn>

          <FadeIn delay={0.1} animateOnMount>
            <h1 className="font-[family-name:var(--font-syne)] max-w-[800px] mx-auto text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-0.95 tracking-tight mb-6">
              Websites That Work
              <br />
              <span className="gradient-text">As Hard As You Do</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2} animateOnMount>
            <p className="mx-auto max-w-2xl text-lg sm:text-xl text-[#8A8A9A] leading-relaxed mb-10 font-[family-name:var(--font-space-grotesk)]">
              Beautiful websites built from scratch. We build, host, and optimize
              websites that bring real customers to your door. Small business is our
              specialty.
            </p>
          </FadeIn>

          <FadeIn delay={0.3} animateOnMount>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-honey hover:bg-honey-light text-[#0F0F1A] font-bold rounded-full px-8 py-6 text-base glow-honey"
              >
                <Link href="/contact">
                  Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8 py-6 text-base border-honey/30 text-honey hover:bg-honey/10 hover:text-honey font-medium"
              >
                <Link href="/services">See What We Do</Link>
              </Button>
            </div>
          </FadeIn>

          {/* Stats row */}
          {/* <FadeIn delay={0.4}>
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-[rgba(245,166,35,0.1)] pt-10">
              {[
                { value: "150+", label: "Websites Built" },
                { value: "99.9%", label: "Uptime Guaranteed" },
                { value: "3x", label: "Avg. Traffic Growth" },
                { value: "24/7", label: "Support" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl font-bold text-honey glow-text">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[#8A8A9A] mt-1 font-[family-name:var(--font-space-grotesk)]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn> */}
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section id="services" className="py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-honey/[0.02] to-transparent pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="font-[family-name:var(--font-syne)] text-4xl sm:text-5xl font-bold tracking-tight">
                Everything Your Business
                <br />
                <span className="gradient-text">Needs Online</span>
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Globe,
                title: "Web Design & Development",
                desc: "Custom-built websites that look incredible and convert visitors into customers. No templates, no cookie-cutter solutions.",
                features: [
                  "Works Great on Any Device",
                  "Loads Quickly for Visitors",
                  "Smooth, Professional Animations",
                ],
              },
              {
                icon: Server,
                title: "Reliable Web Hosting",
                desc: "Lightning-fast, secure hosting that keeps your site running 24/7. We handle the tech so you don't have to.",
                features: [
                  "Your Site Stays Online 24/7",
                  "Secure & Safe for Customers",
                  "Fast Loading Worldwide",
                ],
              },
              {
                icon: Search,
                title: "SEO That Delivers",
                desc: "Get found by the right people at the right time. Our SEO strategies drive real traffic and real results.",
                features: [
                  "Get Found by Local Customers",
                  "Show Up in Google Searches",
                  "Optimized for Search Engines",
                ],
              },
            ].map((service, i) => (
              <FadeIn key={service.title} delay={i * 0.1}>
                <Card className="bg-[#1A1A2E]/60 border-[rgba(245,166,35,0.1)] hover:border-honey/30 transition-all duration-500 group h-full backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-honey/10 group-hover:bg-honey/20 transition-colors">
                      <service.icon className="h-7 w-7 text-honey" />
                    </div>
                    <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold mb-3">
                      {service.title}
                    </h3>
                    <p className="text-[#8A8A9A] leading-relaxed mb-6 text-sm font-[family-name:var(--font-space-grotesk)]">
                      {service.desc}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-2 text-sm text-[#B0B0C0]"
                        >
                          <CheckCircle2 className="h-4 w-4 text-honey shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT / WHY US ─── */}
      <section id="about" className="py-28 relative honeycomb-bg">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: text */}
            <FadeIn>
              <div>
                <h2 className="font-[family-name:var(--font-syne)] text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                  A Hive of Creativity
                  <br />
                  <span className="gradient-text">Working for You</span>
                </h2>
                <p className="text-[#8A8A9A] text-lg leading-relaxed mb-8 font-[family-name:var(--font-space-grotesk)]">
                  We&apos;re not a massive agency that treats you like a number.
                  Beehive Web Designs is a focused team that partners closely with
                  small businesses to deliver websites that actually drive growth.
                  Every pixel, every line of code, every SEO strategy is crafted
                  with your goals in mind.
                </p>
                <div className="space-y-5">
                  {[
                    {
                      icon: Phone,
                      title: "24/7 Customer Support",
                      desc: "Call or text us anytime. You'll hear from us, not a robot.",
                    },
                    {
                      icon: Zap,
                      title: "Fast and Secure",
                      desc: "We build fast, secure websites that drive real business results. Every detail is optimized for performance and conversions.",
                    },
                    {
                      icon: Shield,
                      title: "Money Back Guarantee",
                      desc: "If we can’t design something you like, you get your money back and the contract is cancelled. We stand by our work.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="shrink-0 mt-1 w-10 h-10 rounded-xl bg-honey/10 flex items-center justify-center">
                        <item.icon className="h-5 w-5 text-honey" />
                      </div>
                      <div>
                        <h4 className="font-[family-name:var(--font-syne)] font-bold text-base mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-[#8A8A9A] leading-relaxed font-[family-name:var(--font-space-grotesk)]">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Right: decorative visual */}
            <FadeIn delay={0.2}>
              <div className="relative">
                <div className="aspect-square max-w-md mx-auto relative">
                  {/* Animated honeycomb grid */}
                  <LazyMotion features={loadFeatures}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-full h-full">
                        {/* Central hex */}
                        <RotatingHex
                          rotation={360}
                          duration={60}
                          className="absolute inset-8"
                        >
                          <Hexagon className="w-full h-full text-honey/10 stroke-[0.5]" />
                        </RotatingHex>
                        <RotatingHex
                          rotation={-360}
                          duration={90}
                          className="absolute inset-16"
                        >
                          <Hexagon className="w-full h-full text-honey/20 stroke-[0.5]" />
                        </RotatingHex>
                        <RotatingHex
                          rotation={360}
                          duration={45}
                          className="absolute inset-24"
                        >
                          <Hexagon className="w-full h-full text-honey/30 stroke-[0.5]" />
                        </RotatingHex>
                        {/* Center icon */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-24 h-24 rounded-3xl bg-honey/10 flex items-center justify-center glow-honey">
                            <Hexagon className="w-12 h-12 text-honey fill-honey/20" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </LazyMotion>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── PROCESS / WORK ─── */}
      <ProcessSection hasHoneycombBg={false} />

      {/* ─── TESTIMONIALS ─── */}
      {/* TODO: add real testimonials here */}
      <section id="testimonials" className="py-28 relative honeycomb-bg">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="font-[family-name:var(--font-syne)] text-4xl sm:text-5xl font-bold tracking-tight">
                Loved by Small
                <br />
                <span className="gradient-text">Business Owners</span>
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah Mitchell",
                role: "Owner, Bloom Florist",
                quote:
                  "Beehive completely transformed our online presence. Our bookings tripled within two months of launching the new site. They truly understand small business.",
                rating: 5,
              },
              {
                name: "Marcus Rivera",
                role: "Founder, Rivera Plumbing",
                quote:
                  "I was skeptical about SEO, but the results speak for themselves. We went from page 5 to the top 3 results for our area. Incredible work.",
                rating: 5,
              },
              {
                name: "Jennifer Park",
                role: "Director, Park Legal Group",
                quote:
                  "Professional, responsive, and incredibly talented. Our website looks like it was built by a big-city agency, but with the personal touch of a local partner.",
                rating: 5,
              },
            ].map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.1}>
                <Card className="bg-[#1A1A2E]/60 border-[rgba(245,166,35,0.1)] hover:border-honey/20 transition-all duration-500 h-full backdrop-blur-sm">
                  <CardContent className="p-8">
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: t.rating }).map((_, si) => (
                        <Star
                          key={si}
                          className="h-4 w-4 text-honey fill-honey"
                        />
                      ))}
                    </div>
                    <p className="text-[#B0B0C0] leading-relaxed mb-6 italic text-sm font-[family-name:var(--font-space-grotesk)]">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div>
                      <div className="font-[family-name:var(--font-syne)] font-bold text-sm">
                        {t.name}
                      </div>
                      <div className="text-xs text-[#8A8A9A]">{t.role}</div>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <PricingSection
        showBadge={false}
        buttonHref="#contact"
        hasHoneycombBg={false}
      />

      {/* ─── CTA BANNER ─── */}
      <CTABanner />     

      {/* ─── FOOTER ─── */}
      <Footer />
    </div>
  );
}
