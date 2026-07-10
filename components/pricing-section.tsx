import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type PricingPlan = {
  name: string;
  price: string;
  priceSuffix?: string;
  priceSubtext?: string;
  features: string[];
  buttonLabel: string;
  popular?: boolean;
};

type PricingSectionProps = {
  showBadge?: boolean;
  buttonHref?: string;
  customMessage?: ReactNode;
  className?: string;
};

const defaultPlans: PricingPlan[] = [
  {
    name: "Lump Sum",
    price: "$3,500",
    priceSubtext: "+ $25/mo hosting",
    features: [
      "Complete design & development",
      "Optional $50/mo unlimited edits",
      "$100 per page after 5 pages",
    ],
    buttonLabel: "Get started",
    popular: false,
  },
  {
    name: "Monthly Subscription",
    price: "$150",
    priceSuffix: "/mo",
    priceSubtext: "Edits + hosting included",
    features: [
      "Complete design & development",
      "Hosting included",
      "Lifetime edits & updates",
      "24/7 priority support",
    ],
    buttonLabel: "Get started",
    popular: true,
  },
  {
    name: "Custom",
    price: "Let's talk",
    priceSubtext: "For complex projects",
    features: [
      "Custom solutions & integrations",
      "Flexible payment terms",
      "Dedicated ongoing support",
    ],
    buttonLabel: "Get in touch",
    popular: false,
  },
];

export function PricingSection({
  showBadge = true,
  buttonHref = "/contact",
  customMessage,
  className,
}: PricingSectionProps) {
  const href = buttonHref.startsWith("#") ? "/contact" : buttonHref;
  return (
    <section id="pricing" className={cn("py-24", className)}>
      <div className="mx-auto max-w-7xl px-6">
        
          <div className="text-center mb-14">
            {showBadge && (
              <p className="mb-3 text-xs font-bold tracking-widest uppercase text-honey-dark">
                Pricing
              </p>
            )}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              Simple, transparent pricing
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              No hidden fees. No surprises. Pick what fits your business.
            </p>
          </div>
        

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {defaultPlans.map((plan, i) => (
            <div key={plan.name} className="h-full">
              <div
                className={`relative h-full rounded-2xl p-8 flex flex-col card-soft ${
                  plan.popular ? "bg-honey" : "bg-card"
                }`}
              >
                {plan.popular && (
                  <span className="absolute top-6 right-6 rounded-full bg-espresso px-3 py-1 text-[10px] font-bold tracking-widest uppercase text-background">
                    Most popular
                  </span>
                )}
                <h3
                  className={`font-bold mb-5 ${
                    plan.popular ? "text-espresso" : "text-foreground"
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="mb-1">
                  <span
                    className={`text-4xl font-extrabold tracking-tight ${
                      plan.popular ? "text-espresso" : "text-foreground"
                    }`}
                  >
                    {plan.price}
                  </span>
                  {plan.priceSuffix && (
                    <span
                      className={`text-lg font-semibold ml-0.5 ${
                        plan.popular
                          ? "text-espresso"
                          : "text-muted-foreground"
                      }`}
                    >
                      {plan.priceSuffix}
                    </span>
                  )}
                </div>
                {plan.priceSubtext && (
                  <p
                    className={`text-sm font-medium mb-6 ${
                      plan.popular ? "text-espresso/80" : "text-honey-dark"
                    }`}
                  >
                    {plan.priceSubtext}
                  </p>
                )}
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-center gap-2.5 text-sm ${
                        plan.popular ? "text-espresso" : "text-text-label"
                      }`}
                    >
                      <Check
                        className={`h-4 w-4 shrink-0 ${
                          plan.popular ? "text-espresso" : "text-success"
                        }`}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className={`mt-auto w-full rounded-full font-semibold ${
                    plan.popular
                      ? "bg-espresso hover:bg-espresso-light text-background"
                      : "bg-transparent hover:bg-secondary text-foreground border border-border"
                  }`}
                >
                  <Link href={href}>{plan.buttonLabel}</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {customMessage && (
          
            <p className="text-center text-sm text-muted-foreground mt-10">
              {customMessage}
            </p>
          
        )}
      </div>
    </section>
  );
}
