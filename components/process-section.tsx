import { Code2, Palette, Rocket, Search } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

const processSteps: {
  step: string;
  title: string;
  desc: string;
  icon: LucideIcon;
}[] = [
  {
    step: "01",
    title: "Discovery",
    desc: "We learn about your business, goals, and audience to build a tailored plan.",
    icon: Search,
  },
  {
    step: "02",
    title: "Design",
    desc: "We craft a stunning, custom design that captures your brand's personality.",
    icon: Palette,
  },
  {
    step: "03",
    title: "Develop",
    desc: "We build your site with clean code, fast performance, and SEO baked in.",
    icon: Code2,
  },
  {
    step: "04",
    title: "Launch & grow",
    desc: "We deploy, host, and continuously optimize to keep traffic flowing.",
    icon: Rocket,
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="mb-3 text-xs font-bold tracking-widest uppercase text-honey-dark">
              How it works
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              From idea to launch in four
              <br className="hidden sm:block" /> steps
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              A clear, collaborative path from first conversation to a site
              that works for you.
            </p>
          </div>
        </FadeIn>

        <div className="relative">
          <div
            className="pointer-events-none absolute top-14 left-[calc(12.5%+1.5rem)] right-[calc(12.5%+1.5rem)] hidden h-px bg-gradient-to-r from-transparent via-honey/35 to-transparent lg:block"
            aria-hidden="true"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((item, i) => {
              const Icon = item.icon;
              return (
                <FadeIn key={item.step} delay={i * 0.1} className="h-full">
                  <div className="relative h-full rounded-2xl bg-card card-soft p-8">
                    <div className="mb-6 flex items-center justify-between gap-3">
                      <div className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-honey/15">
                        <Icon className="h-6 w-6 text-honey-dark" />
                      </div>
                      <span className="text-xs font-bold tracking-widest text-honey-dark/70">
                        {item.step}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
