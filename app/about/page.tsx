"use client";

import Image from "next/image";
import {
  Users,
  Heart,
  Award,
  Sparkles,
  Zap,
  Linkedin,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { FadeIn } from "@/components/animations/FadeIn";
import { HoneycombDecor } from "@/components/HoneyCombDecor";
import { CTABanner } from "@/components/cta-banner";
import { ProcessSection } from "@/components/process-section";

const values = [
  {
    icon: Heart,
    title: "People First",
    desc: "We treat every client like a partner, not a project number. Your success is our success.",
  },
  {
    icon: Sparkles,
    title: "Beautiful Design",
    desc: "We believe your website should be stunning. Every visual element is crafted to create a memorable first impression.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    desc: "Speed matters. We optimize every detail to ensure your site loads instantly and performs flawlessly.",
  },
  {
    icon: Award,
    title: "Quality Craftsmanship",
    desc: "No shortcuts, no compromises. Every line of code and every pixel is placed with intention.",
  },
];

const team = [
  {
    id: "spencer",
    name: "Spencer Hodson",
    role: "Founder & Lead Developer",
    image: "/team/spencer-bw2.png",
    desc: "Fresh perspective meets modern tech. Building websites that actually work for small businesses, not just look pretty. Always learning, always improving.",
    linkedin: "https://www.linkedin.com/in/spencer-hodson-3b4305229/",
  },
  {
    id: "sky",
    name: "Sky Norton",
    role: "Lead Designer",
    image: "/team/sky-bw2.png",
    desc: "Creative problem-solver with an eye for what converts. Brings fresh design thinking and a hunger to make every project better than the last.",
    linkedin: "https://www.linkedin.com/in/skyler-norton-b64a7113a/",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0F0F1A] text-[#F0EDE6] overflow-x-hidden">
      <NavBar />

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 honeycomb-bg">
        <HoneycombDecor className="absolute top-20 right-10 w-48 h-48 opacity-40 hidden lg:block" />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-honey/5 blur-[120px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
          <FadeIn delay={0.1} animateOnMount>
            <h1 className="font-[family-name:var(--font-syne)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[0.95] tracking-tight mb-6 max-w-4xl mx-auto">
              Small Team,
              <br />
              <span className="gradient-text">Big Ambitions</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2} animateOnMount>
            <p className="max-w-2xl text-lg sm:text-xl text-[#8A8A9A] leading-relaxed font-[family-name:var(--font-space-grotesk)] mx-auto">
              We started Beehive Web Designs because we believed small businesses deserve the
              same quality web presence as the big guys — without the big-agency
              price tag or the corporate runaround.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── OUR STORY ─── */}
      {/* <section className="py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-honey/[0.02] to-transparent pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div>
                <h2 className="font-[family-name:var(--font-syne)] text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                  Built by People Who
                  <br />
                  <span className="gradient-text">Get Small Business</span>
                </h2>
                <div className="space-y-4 text-[#8A8A9A] text-base leading-relaxed font-[family-name:var(--font-space-grotesk)]">
                  <p>
                    Before Beehive, our founder spent years watching talented
                    small business owners struggle online. They&apos;d pay thousands
                    for a generic template site, get zero support, and wonder
                    why the phone wasn&apos;t ringing.
                  </p>
                  <p>
                    We built Beehive to change that. We combine sharp design,
                    bulletproof hosting, and SEO that actually works — all under
                    one roof. No finger-pointing between vendors. No mystery
                    invoices. Just a team that cares about your growth as much
                    as you do.
                  </p>
                  <p>
                    Today, we&apos;ve helped over 150 businesses transform their
                    online presence, and we&apos;re just getting started.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "150+", label: "Websites Launched", icon: Rocket },
                  { value: "99.9%", label: "Hosting Uptime", icon: Award },
                  { value: "5+", label: "Years in Business", icon: Coffee },
                  { value: "3x", label: "Avg Traffic Growth", icon: Target },
                ].map((stat, i) => (
                  <div
                    key={stat.label}
                    className="p-6 rounded-2xl border border-[rgba(245,166,35,0.1)] bg-[#1A1A2E]/40 hover:border-honey/30 transition-all duration-500 group"
                  >
                    <stat.icon className="h-6 w-6 text-honey/60 group-hover:text-honey transition-colors mb-3" />
                    <div className="font-[family-name:var(--font-syne)] text-3xl font-black text-honey glow-text">
                      {stat.value}
                    </div>
                    <div className="text-xs text-[#8A8A9A] mt-1 font-[family-name:var(--font-space-grotesk)]">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section> */}

      {/* ─── VALUES ─── */}
      <section className="py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-honey/[0.02] to-transparent pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="font-[family-name:var(--font-syne)] text-4xl sm:text-5xl font-bold tracking-tight">
                Our Team's
                <br />
                <span className="gradient-text">Values</span>
              </h2>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <Card className="bg-[#1A1A2E]/60 border-[rgba(245,166,35,0.1)] hover:border-honey/30 transition-all duration-500 group h-full backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-honey/10 group-hover:bg-honey/20 transition-colors mx-auto">
                      <item.icon className="h-8 w-8 text-honey" />
                    </div>
                    <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold mb-3">
                      {item.title}
                    </h3>
                    <p className="text-base text-[#8A8A9A] leading-relaxed font-[family-name:var(--font-space-grotesk)]">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>   

      {/* ─── PROCESS ─── */}
      <ProcessSection hasHoneycombBg={true} />   

      {/* ─── TEAM ─── */}
      <section className="py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-honey/[0.02] to-transparent pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="font-[family-name:var(--font-syne)] text-4xl sm:text-5xl font-bold tracking-tight">
                Meet the
                <br />
                <span className="gradient-text">Bees</span>
              </h2>
              <p className="mt-4 text-[#8A8A9A] max-w-xl mx-auto font-[family-name:var(--font-space-grotesk)]">
                Good friends who love to build. We combine our passion for design and
                development to create websites that make a real difference.
              </p>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 max-w-3xl gap-6 mx-auto">
            {team.map((member, i) => (
              <FadeIn key={member.id} delay={i * 0.1}>
                <Card className="bg-[#1A1A2E]/60 border-[rgba(245,166,35,0.1)] hover:border-honey/30 transition-all duration-500 group h-full backdrop-blur-sm">
                  <CardContent className="text-center">

                    {/* Avatar */}
                    <div className="mx-auto mb-8 w-40 h-40 rounded-full bg-honey/10 border border-honey/20 flex items-center justify-center group-hover:bg-honey/20 transition-colors overflow-hidden">
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={160}
                          height={160}
                          className="w-full h-full object-cover object-center"
                        />
                      ) : (
                        <Users className="h-16 w-16 text-honey" />
                      )}
                    </div>
                    <h3 className="font-[family-name:var(--font-syne)] text-2xl font-bold">
                      {member.name}
                    </h3>
                    <p className="text-base text-honey mt-3 font-medium font-[family-name:var(--font-space-grotesk)]">
                      {member.role}
                    </p>
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-honey/10 hover:bg-honey/20 border border-honey/20 hover:border-honey/40 transition-all duration-300 mt-6 group/linkedin"
                        aria-label={`${member.name}'s LinkedIn profile`}
                      >
                        <Linkedin className="h-5 w-5 text-honey group-hover/linkedin:scale-110 transition-transform" />
                      </a>
                    )}
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <CTABanner />

      <Footer />
    </div>
  );
}
