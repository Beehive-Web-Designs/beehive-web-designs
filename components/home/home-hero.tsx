import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/FadeIn";
import { ContactForm } from "@/components/contact/ContactForm";

const trustItems = [
  "Affordable, fixed pricing",
  "Lifetime edits available",
  "Money-back guarantee",
  "24/7 human support",
];

const avatarShades = ["bg-[#E8C287]", "bg-[#D3A25C]", "bg-[#A9743B]"];

export function HomeHero() {
  return (
    <section className="pt-32 pb-0">
      <div className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <FadeIn delay={0.05} animateOnMount>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] mb-6">
                Websites that turn visitors into{" "}
                <span className="text-honey">customers.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.1} animateOnMount>
              <p className="max-w-md text-lg text-muted-foreground leading-relaxed mb-8">
                Beautiful, affordable websites built from scratch, designed to
                bring real customers to your door. No templates, no headaches,
                no jargon.
              </p>
            </FadeIn>

            <FadeIn delay={0.15} animateOnMount>
              <div className="flex flex-wrap items-center gap-6 mb-10">
                <Button
                  asChild
                  size="lg"
                  className="bg-honey hover:bg-honey-light text-espresso font-bold rounded-full px-7"
                >
                  <Link href="/contact">Start your project</Link>
                </Button>
                <Link
                  href="#work"
                  className="text-sm font-semibold text-foreground hover:text-honey-dark transition-colors inline-flex items-center gap-1.5"
                >
                  See our work <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </FadeIn>

            {/* <FadeIn delay={0.2} animateOnMount>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2.5">
                  {avatarShades.map((shade) => (
                    <span
                      key={shade}
                      className={`h-9 w-9 rounded-full border-2 border-background ${shade}`}
                    />
                  ))}
                </div>
                <div>
                  <p className="text-sm font-bold leading-tight">
                    Loved by 20+ local businesses
                  </p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                    <span className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-3 w-3 text-honey fill-honey"
                        />
                      ))}
                    </span>
                    5.0 average rating
                  </p>
                </div>
              </div>
            </FadeIn> */}
          </div>

          <ContactForm />
        </div>
      </div>

      {/* Trust bar */}
      <div className="bg-comb-light/70">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-2">
            {trustItems.map((item, i) => (
              <li
                key={item}
                className="flex items-center gap-10 text-xs font-semibold text-foreground/80"
              >
                {item}
                {i < trustItems.length - 1 && (
                  <span className="hidden sm:block h-1 w-1 rounded-full bg-foreground/20" />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
