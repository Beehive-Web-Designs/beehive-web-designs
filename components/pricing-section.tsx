import Link from "next/link";
import { CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/animations/FadeIn";
import { ReactNode } from "react";

type PricingPlan = {
  name: string;
  price: string;
  priceSubtext?: string;
  period?: string;
  desc: string;
  features: string[];
  negativeFeatures?: string[];
  popular?: boolean;
};

type PricingSectionProps = {
  showBadge?: boolean;
  buttonHref?: string;
  customMessage?: ReactNode;
  hasHoneycombBg?: boolean;
};

const defaultPlans: PricingPlan[] = [
  {
    name: "Lump Sum",
    price: "$3,500",
    priceSubtext: "+ $25/month",
    desc: "Pay once for design and development. Ideal for businesses seeking an upfront website solution.",
    features: [
      "Complete Design & Development",
      "$25/Month for Hosting",
      "Optional: $50/Month for Unlimited Edits",
      "$100 One-Time Fee Per Page After 5 Pages",
    ],
    negativeFeatures: [
      "No Lifetime Updates",
      "No 24/7 Support",
    ],
    popular: false,
  },
  {
    name: "Monthly Subscription",
    price: "$150",
    priceSubtext: "/month",
    desc: "Lifetime edits and hosting included. Ideal for ongoing support and maintenance.",
    features: [
      "Complete Design & Development",
      "Hosting Included",
      "Lifetime Edits Included",
      "$100 One-Time Fee Per Page After 5 Pages",
      "Lifetime Updates",
      "24/7 Support",
    ],
    popular: true,
  },
  {
    name: "Custom Pricing",
    price: "Custom",
    desc: "Tailored solutions for complex projects and unique requirements.",
    features: [
      "Complete Design & Development",
      "Custom Solutions",
      "Flexible Payment Terms",
      "Dedicated Support",
      "Ongoing Maintenance & Hosting",
      "Custom Integrations",
    ],
    popular: false,
  },
];

export function PricingSection({
  showBadge = true,
  buttonHref = "/contact",
  customMessage,
  hasHoneycombBg = false,
}: PricingSectionProps) {
  return (
    <section className={`py-28 relative ${hasHoneycombBg ? "honeycomb-bg" : ""}`}>
      {!hasHoneycombBg && (
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-honey/[0.02] to-transparent pointer-events-none" />
      )}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="text-center mb-16">
            {showBadge && (
              <Badge className="mb-4 rounded-full border-honey/30 bg-honey/10 text-honey px-4 py-1.5 text-xs tracking-widest uppercase">
                Pricing
              </Badge>
            )}
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
          {defaultPlans.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 0.1}>
              <Card
                className={`relative h-full backdrop-blur-sm transition-all duration-500 ${
                  plan.popular
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
                  <div className={plan.period ? "mb-1" : "mb-4"}>
                    <span className="font-[family-name:var(--font-syne)] text-4xl font-black text-honey">
                      {plan.price}
                    </span>
                    {plan.priceSubtext && (
                      <span className="font-[family-name:var(--font-syne)] text-xl text-[#8A8A9A] ml-1">
                        {plan.priceSubtext}
                      </span>
                    )}
                  </div>
                  {plan.period && (
                    <p className="text-xs text-[#8A8A9A] mb-5 font-[family-name:var(--font-space-grotesk)]">
                      {plan.period}
                    </p>
                  )}
                  <p className="text-sm text-[#8A8A9A] mb-6 font-[family-name:var(--font-space-grotesk)]">
                    {plan.desc}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-sm text-[#B0B0C0]"
                      >
                        <CheckCircle2 className="h-4 w-4 text-honey shrink-0" />
                        {f}
                      </li>
                    ))}
                    {plan.negativeFeatures?.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-sm text-[#666]"
                      >
                        <XCircle className="h-4 w-4 text-[#666] shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className={`w-full rounded-full font-semibold ${
                      plan.popular
                        ? "bg-honey hover:bg-honey-light text-[#0F0F1A]"
                        : "bg-honey/10 hover:bg-honey/20 text-honey border border-honey/30"
                    }`}
                  >
                    {buttonHref.startsWith("#") ? (
                      <a href={buttonHref}>Get Started</a>
                    ) : (
                      <Link href={buttonHref}>Get Started</Link>
                    )}
                  </Button>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>

        {customMessage && (
          <FadeIn delay={0.3}>
            <p className="text-center text-sm text-[#8A8A9A] mt-10 font-[family-name:var(--font-space-grotesk)]">
              {customMessage}
            </p>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
