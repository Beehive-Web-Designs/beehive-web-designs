import { LazyMotion } from "framer-motion";
import { Hexagon, Phone, Zap, Shield } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { RotatingHex } from "@/components/home/rotating-hex";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

const highlights = [
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
];

export function HomeAboutSection() {
  return (
    <section id="about" className="py-28 relative honeycomb-bg">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
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
                {highlights.map((item) => (
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

          <FadeIn delay={0.2}>
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto relative">
                <LazyMotion features={loadFeatures}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full h-full">
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
  );
}
