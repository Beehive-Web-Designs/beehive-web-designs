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
import { PageShell } from "@/components/page-shell";
import { AboutDifferentSection } from "@/components/about/about-different-section";
import { CTABanner } from "@/components/cta-banner";

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

export function AboutClient() {
  return (
    <PageShell>
      {/* ─── HERO ─── */}
      <section className="pt-36 pb-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          
            <p className="mb-3 text-xs font-bold tracking-widest uppercase text-honey-dark">
              About us
            </p>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.05] tracking-tight mb-6 max-w-4xl mx-auto">
            Small team, <span className="text-honey-dark">big ambitions</span>
          </h1>

          
            <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed mx-auto">
              We started Beehive Web Designs because we believed small businesses deserve the
              same quality web presence as the big guys — without the big-agency
              price tag or the corporate runaround.
            </p>
          
        </div>
      </section>

      {/* ─── OUR STORY ─── */}
      {/* <section className="py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-honey/[0.02] to-transparent pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                  Built by People Who
                  <br />
                  <span className="gradient-text">Get Small Business</span>
                </h2>
                <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
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
            

            
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "150+", label: "Websites Launched", icon: Rocket },
                  { value: "99.9%", label: "Hosting Uptime", icon: Award },
                  { value: "5+", label: "Years in Business", icon: Coffee },
                  { value: "3x", label: "Avg Traffic Growth", icon: Target },
                ].map((stat, i) => (
                  <div
                    key={stat.label}
                    className="p-6 rounded-2xl border border-border bg-card/40 hover:border-honey/30 transition-all duration-500 group"
                  >
                    <stat.icon className="h-6 w-6 text-honey-dark transition-colors mb-3" />
                    <div className="text-3xl font-black text-honey-dark glow-text">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            
          </div>
        </div>
      </section> */}

      {/* ─── VALUES ─── */}
      <section className="py-24 bg-section-alt">
        <div className="mx-auto max-w-7xl px-6">
          
            <div className="text-center mb-14">
              <p className="mb-3 text-xs font-bold tracking-widest uppercase text-honey-dark">
                Our values
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                What we stand for
              </h2>
            </div>
          

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((item, i) => (
              <div key={item.title} className="h-full">
                <div className="h-full rounded-2xl bg-card card-soft p-6 text-center">
                  <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-honey/15 mx-auto">
                    <item.icon className="h-6 w-6 text-honey-dark" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AboutDifferentSection />

      {/* ─── TEAM ─── */}
      {/* <section className="py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-honey/[0.02] to-transparent pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
                Meet the
                <br />
                <span className="gradient-text">Bees</span>
              </h2>
              <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                Good friends who love to build. We combine our passion for design and
                development to create websites that make a real difference.
              </p>
            </div>
          

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 max-w-3xl gap-6 mx-auto items-stretch">
            {team.map((member, i) => (
              <div key={member.id} className="h-full">
                <Card className="bg-card/60 border-border hover:border-honey/30 transition-all duration-500 group h-full backdrop-blur-sm">
                  <CardContent className="text-center h-full flex flex-col">
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
                        <Users className="h-16 w-16 text-honey-dark" />
                      )}
                    </div>
                    <h3 className="text-2xl font-bold">
                      {member.name}
                    </h3>
                    <p className="text-base text-honey-dark mt-3 font-medium">
                      {member.role}
                    </p>
                    {member.linkedin ? (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-honey/10 hover:bg-honey/20 border border-honey/20 hover:border-honey/40 transition-all duration-300 mt-6 mx-auto group/linkedin"
                        aria-label={`${member.name}'s LinkedIn profile`}
                      >
                        <Linkedin className="h-5 w-5 text-honey-dark group-hover/linkedin:scale-110 transition-transform" />
                      </a>
                    ) : (
                      <div className="mt-6 h-10" aria-hidden="true" />
                    )}
                  </CardContent>
                </Card>
              
            ))}
          </div>
        </div>
      </section> */}

      <CTABanner className="bg-section-alt" />
    </PageShell>
  );
}