"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Search,
  Server,
  ArrowRight,
  Star,
  Menu,
  X,
  Hexagon,
  Zap,
  BarChart3,
  Shield,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

/* ───────────── Fade-in animation wrapper ───────────── */
function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ───────────── Honeycomb SVG decoration ───────────── */
function HoneycombDecor({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 10L170 50V130L100 170L30 130V50L100 10Z"
        stroke="rgba(245,166,35,0.12)"
        strokeWidth="1.5"
      />
      <path
        d="M100 40L145 65V115L100 140L55 115V65L100 40Z"
        stroke="rgba(245,166,35,0.08)"
        strokeWidth="1"
      />
      <path
        d="M100 70L120 82V108L100 120L80 108V82L100 70Z"
        stroke="rgba(245,166,35,0.15)"
        strokeWidth="1"
      />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════════ */
export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0F0F1A] text-[#F0EDE6] overflow-x-hidden">
      {/* ─── NAVBAR ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[rgba(245,166,35,0.1)] bg-[#0F0F1A]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <a href="#" className="flex flex-row items-center gap-2 group">
            <Hexagon className="h-8 w-8 text-honey fill-honey/20 group-hover:fill-honey/30 transition-colors" />
            <span className="font-[family-name:var(--font-syne)] text-xl font-bold tracking-tight">
              Beehive Web Designs<span className="text-honey"></span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {["Services", "About", "Work", "Testimonials", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-[#8A8A9A] hover:text-honey transition-colors tracking-wide uppercase"
                >
                  {item}
                </a>
              )
            )}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-honey hover:bg-honey-light text-[#0F0F1A] font-semibold rounded-full px-6"
            >
              <a href="#contact">
                Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-[#F0EDE6]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden border-t border-[rgba(245,166,35,0.1)] bg-[#0F0F1A]/95 backdrop-blur-xl"
          >
            <div className="flex flex-col gap-4 p-6">
              {["Services", "About", "Work", "Testimonials", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-sm font-medium text-[#8A8A9A] hover:text-honey transition-colors uppercase tracking-wide"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                )
              )}
              <Button
                asChild
                className="mt-2 bg-honey hover:bg-honey-light text-[#0F0F1A] font-semibold rounded-full"
              >
                <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                  Get a Free Quote
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 honeycomb-bg">
        {/* Decorative elements */}
        <HoneycombDecor className="absolute top-20 right-10 w-48 h-48 opacity-40 hidden lg:block" />
        <HoneycombDecor className="absolute bottom-20 left-10 w-64 h-64 opacity-30 hidden lg:block" />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-honey/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-nectar/5 blur-[100px] pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
          <FadeIn>
            <Badge className="mb-6 rounded-full border-honey/30 bg-honey/10 text-honey px-4 py-1.5 text-xs font-medium tracking-widest uppercase">
              Web Design &bull; Hosting &bull; SEO &bull; Maintenance
            </Badge>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="font-[family-name:var(--font-syne)] max-w-[800px] mx-auto text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-0.95 tracking-tight mb-6">
              Websites That Work
              <br />
              <span className="gradient-text">As Hard As You Do</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mx-auto max-w-2xl text-lg sm:text-xl text-[#8A8A9A] leading-relaxed mb-10 font-[family-name:var(--font-space-grotesk)]">
              Beautiful websites built from scratch. We build, host, and optimize
              websites that bring real customers to your door. Small business is our
              specialty.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-honey hover:bg-honey-light text-[#0F0F1A] font-bold rounded-full px-8 py-6 text-base glow-honey"
              >
                <a href="#contact">
                  Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8 py-6 text-base border-honey/30 text-honey hover:bg-honey/10 hover:text-honey font-medium"
              >
                <a href="#services">See What We Do</a>
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
              {/* <Badge className="mb-4 rounded-full border-honey/30 bg-honey/10 text-honey px-4 py-1.5 text-xs tracking-widest uppercase">
                What We Do
              </Badge> */}
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
                {/* <Badge className="mb-4 rounded-full border-honey/30 bg-honey/10 text-honey px-4 py-1.5 text-xs tracking-widest uppercase">
                  Why Beehive
                </Badge> */}
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
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full h-full">
                      {/* Central hex */}
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-8"
                      >
                        <Hexagon className="w-full h-full text-honey/10 stroke-[0.5]" />
                      </motion.div>
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-16"
                      >
                        <Hexagon className="w-full h-full text-honey/20 stroke-[0.5]" />
                      </motion.div>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-24"
                      >
                        <Hexagon className="w-full h-full text-honey/30 stroke-[0.5]" />
                      </motion.div>
                      {/* Center icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 rounded-3xl bg-honey/10 flex items-center justify-center glow-honey">
                          <Hexagon className="w-12 h-12 text-honey fill-honey/20" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── PROCESS / WORK ─── */}
      <section id="work" className="py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-comb-light/30 to-transparent pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="text-center mb-16">
              {/* <Badge className="mb-4 rounded-full border-honey/30 bg-honey/10 text-honey px-4 py-1.5 text-xs tracking-widest uppercase">
                Our Process
              </Badge> */}
              <h2 className="font-[family-name:var(--font-syne)] text-4xl sm:text-5xl font-bold tracking-tight">
                From Idea to Launch
                <br />
                <span className="gradient-text">In Four Steps</span>
              </h2>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "We learn about your business, goals, and audience to create a tailored plan.",
              },
              {
                step: "02",
                title: "Design",
                desc: "We craft a stunning, custom design that captures your brand's personality.",
              },
              {
                step: "03",
                title: "Develop",
                desc: "We build your site with clean code, fast performance, and SEO baked in.",
              },
              {
                step: "04",
                title: "Launch & Grow",
                desc: "We deploy, host, and continuously optimize to keep traffic flowing.",
              },
            ].map((item, i) => (
              <FadeIn key={item.step} delay={i * 0.1}>
                <div className="relative group">
                  <div className="p-8 rounded-2xl border border-[rgba(245,166,35,0.1)] bg-[#1A1A2E]/40 hover:border-honey/30 transition-all duration-500 h-full">
                    <span className="font-[family-name:var(--font-syne)] text-5xl font-black text-honey/15 group-hover:text-honey/25 transition-colors">
                      {item.step}
                    </span>
                    <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold mt-4 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#8A8A9A] leading-relaxed font-[family-name:var(--font-space-grotesk)]">
                      {item.desc}
                    </p>
                  </div>
                  {/* Connector line on desktop */}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section id="testimonials" className="py-28 relative honeycomb-bg">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <Badge className="mb-4 rounded-full border-honey/30 bg-honey/10 text-honey px-4 py-1.5 text-xs tracking-widest uppercase">
                Testimonials
              </Badge>
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

      {/* ─── PRICING TEASER ─── */}
      <section className="py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-honey/[0.02] to-transparent pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <Badge className="mb-4 rounded-full border-honey/30 bg-honey/10 text-honey px-4 py-1.5 text-xs tracking-widest uppercase">
                Pricing
              </Badge>
              <h2 className="font-[family-name:var(--font-syne)] text-4xl sm:text-5xl font-bold tracking-tight">
                Simple, Transparent
                <br />
                <span className="gradient-text">Pricing</span>
              </h2>
              <p className="mt-4 text-[#8A8A9A] max-w-xl mx-auto font-[family-name:var(--font-space-grotesk)]">
                No hidden fees. No surprises. Just honest pricing for honest work.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Lump Sum",
                price: "$3,500",
                desc: "One-time payment for design and development. Perfect for businesses beyond static websites.",
                features: [
                  "Complete Design & Development",
                  "Custom Solutions",
                  "Optional: $25/month for hosting",
                  "Optional: $50/month for unlimited edits",
                  "Flexible add-on services",
                ],
                popular: false,
              },
              {
                name: "Monthly Subscription",
                price: "$150",
                priceSubtext: "/month",
                desc: "Lifetime edits and hosting included. Ideal for ongoing support and maintenance.",
                features: [
                  "Lifetime Edits Included",
                  "Hosting Included",
                  "Ongoing Support",
                  "Regular Updates",
                  "No long-term contracts",
                ],
                popular: true,
              },
              {
                name: "Custom Pricing",
                price: "Custom",
                desc: "Tailored solutions for complex projects and unique requirements.",
                features: [
                  "Custom Solutions",
                  "Enterprise Features",
                  "Dedicated Support",
                  "Flexible Payment Terms",
                  "Scalable Architecture",
                ],
                popular: false,
              },
            ].map((plan, i) => (
              <FadeIn key={plan.name} delay={i * 0.1}>
                <Card
                  className={`relative h-full backdrop-blur-sm transition-all duration-500 ${plan.popular
                    ? "bg-[#1A1A2E]/80 border-honey/40 glow-honey"
                    : "bg-[#1A1A2E]/40 border-[rgba(245,166,35,0.1)] hover:border-honey/20"
                    }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-honey text-[#0F0F1A] font-bold px-4 py-1 rounded-full text-xs">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardContent className="p-8">
                    <h3 className="font-[family-name:var(--font-syne)] text-lg font-bold mb-2">
                      {plan.name}
                    </h3>
                    <div className="mb-4">
                      <span className="font-[family-name:var(--font-syne)] text-4xl font-black text-honey">
                        {plan.price}
                      </span>
                      {plan.priceSubtext && (
                        <span className="font-[family-name:var(--font-syne)] text-xl text-[#8A8A9A] ml-1">
                          {plan.priceSubtext}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-[#8A8A9A] mb-6 font-[family-name:var(--font-space-grotesk)]">
                      {plan.desc}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-[#B0B0C0]">
                          <CheckCircle2 className="h-4 w-4 text-honey shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      className={`w-full rounded-full font-semibold ${plan.popular
                        ? "bg-honey hover:bg-honey-light text-[#0F0F1A]"
                        : "bg-honey/10 hover:bg-honey/20 text-honey border border-honey/30"
                        }`}
                    >
                      <a href="#contact">Get Started</a>
                    </Button>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-honey/10 via-honey/5 to-nectar/10 pointer-events-none" />
        <HoneycombDecor className="absolute -left-10 top-0 w-40 h-40 opacity-20" />
        <HoneycombDecor className="absolute -right-10 bottom-0 w-48 h-48 opacity-20" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <FadeIn>
            <h2 className="font-[family-name:var(--font-syne)] text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Ready to Grow
              <br />
              <span className="gradient-text">Your Business Online?</span>
            </h2>
            <p className="text-[#8A8A9A] text-lg max-w-2xl mx-auto mb-8 font-[family-name:var(--font-space-grotesk)]">
              Let&apos;s build something amazing together. Get in touch for a free
              consultation and see how Beehive can help your business thrive.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-honey hover:bg-honey-light text-[#0F0F1A] font-bold rounded-full px-10 py-6 text-base glow-honey"
            >
              <a href="#contact">
                Let&apos;s Talk <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" className="py-28 relative honeycomb-bg">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left */}
            <FadeIn>
              <div>
                <Badge className="mb-4 rounded-full border-honey/30 bg-honey/10 text-honey px-4 py-1.5 text-xs tracking-widest uppercase">
                  Get In Touch
                </Badge>
                <h2 className="font-[family-name:var(--font-syne)] text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                  Let&apos;s Start
                  <br />
                  <span className="gradient-text">Your Project</span>
                </h2>
                <p className="text-[#8A8A9A] text-lg leading-relaxed mb-10 font-[family-name:var(--font-space-grotesk)]">
                  Drop us a message and we&apos;ll get back to you within 24 hours.
                  No pressure, just a friendly conversation about how we can help.
                </p>

                <div className="space-y-6">
                  {[
                    { icon: Mail, label: "hello@beehivewebdesigns.com" },
                    { icon: Phone, label: "(555) 123-4567" },
                    { icon: MapPin, label: "Serving businesses nationwide" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-honey/10 flex items-center justify-center shrink-0">
                        <item.icon className="h-5 w-5 text-honey" />
                      </div>
                      <span className="text-[#B0B0C0] font-[family-name:var(--font-space-grotesk)]">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Right: form */}
            <FadeIn delay={0.2}>
              <div className="rounded-2xl border border-[rgba(245,166,35,0.1)] bg-[#1A1A2E]/60 backdrop-blur-sm p-8">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-[#B0B0C0]">
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder="John Smith"
                        className="w-full rounded-xl border border-[rgba(245,166,35,0.15)] bg-[#0F0F1A]/60 px-4 py-3 text-sm text-[#F0EDE6] placeholder:text-[#555] focus:border-honey focus:outline-none focus:ring-1 focus:ring-honey/50 transition-colors font-[family-name:var(--font-space-grotesk)]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-[#B0B0C0]">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        className="w-full rounded-xl border border-[rgba(245,166,35,0.15)] bg-[#0F0F1A]/60 px-4 py-3 text-sm text-[#F0EDE6] placeholder:text-[#555] focus:border-honey focus:outline-none focus:ring-1 focus:ring-honey/50 transition-colors font-[family-name:var(--font-space-grotesk)]"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-[#B0B0C0]">
                      What do you need?
                    </label>
                    <select className="w-full rounded-xl border border-[rgba(245,166,35,0.15)] bg-[#0F0F1A]/60 px-4 py-3 text-sm text-[#F0EDE6] focus:border-honey focus:outline-none focus:ring-1 focus:ring-honey/50 transition-colors font-[family-name:var(--font-space-grotesk)]">
                      <option value="" className="bg-[#1A1A2E]">Select a service...</option>
                      <option value="web-design" className="bg-[#1A1A2E]">Web Design</option>
                      <option value="hosting" className="bg-[#1A1A2E]">Web Hosting</option>
                      <option value="seo" className="bg-[#1A1A2E]">SEO Services</option>
                      <option value="all" className="bg-[#1A1A2E]">Full Package</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-[#B0B0C0]">
                      Tell us about your project
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Give us a brief overview of your project..."
                      className="w-full rounded-xl border border-[rgba(245,166,35,0.15)] bg-[#0F0F1A]/60 px-4 py-3 text-sm text-[#F0EDE6] placeholder:text-[#555] focus:border-honey focus:outline-none focus:ring-1 focus:ring-honey/50 transition-colors resize-none font-[family-name:var(--font-space-grotesk)]"
                    />
                  </div>
                  <Button className="w-full bg-honey hover:bg-honey-light text-[#0F0F1A] font-bold rounded-full py-6 text-base glow-honey">
                    Send Message <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-[rgba(245,166,35,0.1)] bg-[#0A0A14]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <a href="#" className="flex items-center gap-2 mb-4">
                <Hexagon className="h-7 w-7 text-honey fill-honey/20" />
                <span className="font-[family-name:var(--font-syne)] text-lg font-bold tracking-tight">
                  Beehive<span className="text-honey">.</span>
                </span>
              </a>
              <p className="text-sm text-[#8A8A9A] leading-relaxed font-[family-name:var(--font-space-grotesk)]">
                Building beautiful, high-performing websites for small businesses
                that want to grow.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-[family-name:var(--font-syne)] font-bold text-sm uppercase tracking-widest text-[#B0B0C0] mb-4">
                Services
              </h4>
              <ul className="space-y-2">
                {[
                  "Web Design",
                  "Web Hosting",
                  "SEO Services",
                  "Maintenance",
                ].map((s) => (
                  <li key={s}>
                    <a
                      href="#services"
                      className="text-sm text-[#8A8A9A] hover:text-honey transition-colors font-[family-name:var(--font-space-grotesk)]"
                    >
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-[family-name:var(--font-syne)] font-bold text-sm uppercase tracking-widest text-[#B0B0C0] mb-4">
                Company
              </h4>
              <ul className="space-y-2">
                {["About", "Process", "Pricing", "Contact"].map((s) => (
                  <li key={s}>
                    <a
                      href={`#${s.toLowerCase()}`}
                      className="text-sm text-[#8A8A9A] hover:text-honey transition-colors font-[family-name:var(--font-space-grotesk)]"
                    >
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-[family-name:var(--font-syne)] font-bold text-sm uppercase tracking-widest text-[#B0B0C0] mb-4">
                Contact
              </h4>
              <ul className="space-y-2">
                <li className="text-sm text-[#8A8A9A] font-[family-name:var(--font-space-grotesk)]">
                  hello@beehivewebdesigns.com
                </li>
                <li className="text-sm text-[#8A8A9A] font-[family-name:var(--font-space-grotesk)]">
                  (555) 123-4567
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-[rgba(245,166,35,0.08)] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#555] font-[family-name:var(--font-space-grotesk)]">
              &copy; {new Date().getFullYear()} Beehive Web Designs. All rights reserved.
            </p>
            <div className="flex gap-6">
              {["Privacy", "Terms"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-xs text-[#555] hover:text-honey transition-colors font-[family-name:var(--font-space-grotesk)]"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
