import { FadeIn } from "@/components/animations/FadeIn";

const processSteps = [
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
];

type ProcessSectionProps = {
  hasHoneycombBg?: boolean;
};

export function ProcessSection({ hasHoneycombBg = false }: ProcessSectionProps) {
  return (
    <section id="work" className={`py-28 relative ${hasHoneycombBg ? "honeycomb-bg" : ""}`}>
      {!hasHoneycombBg && (
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-comb-light/30 to-transparent pointer-events-none" />
      )}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-syne)] text-4xl sm:text-5xl font-bold tracking-tight">
              From Idea to Launch
              <br />
              <span className="gradient-text">In Four Steps</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((item, i) => (
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
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
