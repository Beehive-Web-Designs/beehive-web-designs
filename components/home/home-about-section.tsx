import Image from "next/image";
import { BadgeDollarSign, Phone, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { BeeMark } from "@/components/bee-logo";

const highlights: {
  title: string;
  desc: string;
  icon: LucideIcon;
}[] = [
  {
    title: "24/7 customer support",
    desc: "Call or text anytime. You'll hear from us, not a robot.",
    icon: Phone,
  },
  {
    title: "Fast & secure by default",
    desc: "Every detail optimized for performance and conversions.",
    icon: ShieldCheck,
  },
  {
    title: "Money-back guarantee",
    desc: "If we can't design something you like, you get your money back.",
    icon: BadgeDollarSign,
  },
];

export function HomeAboutSection() {
  return (
    <section id="about" className="py-24 bg-comb-light/60">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <FadeIn>
            <div>
              <p className="mb-3 text-xs font-bold tracking-widest uppercase text-honey-dark">
                Why Beehive
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
                A hive of creativity, working for{" "}
                <span className="text-honey">your</span> business
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-9 max-w-lg">
                We&apos;re not a massive agency that treats you like a number.
                Beehive partners closely with small businesses to deliver
                websites that actually drive growth — every pixel and every
                line of code crafted with your goals in mind.
              </p>
              <div className="space-y-6">
                {highlights.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="shrink-0 mt-0.5 w-10 h-10 rounded-xl bg-card card-soft flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-honey" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-2xl border border-border bg-background/60 shadow-sm">
              <Image
                src="/why-beehive.jpg"
                alt="Spencer Hodson, founder of Beehive Web Designs"
                fill
                unoptimized
                className="object-cover object-[center_20%] contrast-[0.97] saturate-[0.98]"
                sizes="448px"
              />
              <div className="absolute inset-x-0 bottom-0 flex justify-center p-5 sm:p-6">
                <div className="flex w-full max-w-xs items-center justify-between gap-4 rounded-xl border border-border bg-card/95 px-5 py-4 shadow-lg backdrop-blur-sm">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold uppercase tracking-wide text-foreground">
                      Spencer Hodson
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Owner, Developer
                    </p>
                  </div>
                  <BeeMark className="h-8 w-8 shrink-0 text-honey" />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
