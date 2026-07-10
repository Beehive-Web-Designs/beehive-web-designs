import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { HomeHeroContact } from "./home-hero-contact";

const trustItems = [
  "Affordable, fixed pricing",
  "Lifetime edits available",
  "Money-back guarantee",
  "24/7 human support",
];

export function HomeHero() {
  return (
    <section className="pt-32 pb-0">
      <div className="mx-auto max-w-7xl px-6 pb-20">
        <div className="flex flex-col gap-14 lg:flex-row lg:items-center lg:justify-center">
          <div className="hero-lcp w-full lg:max-w-xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6">
              Small business web design that turns visitors into{" "}
              <span className="text-honey-dark">customers.</span>
            </h1>

            <p className="max-w-lg text-xl text-muted-foreground leading-relaxed mb-8">
              Custom websites, hosting, and SEO built from scratch for small
              businesses. No templates, no headaches — just a site that brings
              real customers to your door.
            </p>

            <div className="flex flex-wrap items-center gap-6 mb-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-honey hover:bg-honey-light text-espresso font-bold rounded-full px-7 h-11 text-sm transition-all"
              >
                Start your project
              </Link>
              <Link
                href="#work"
                className="text-sm font-semibold text-foreground hover:text-honey-dark transition-colors inline-flex items-center gap-1.5"
              >
                See our work <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <HomeHeroContact />
        </div>
      </div>

      <div className="border-t border-honey/15 bg-section-alt">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-2">
            {trustItems.map((item, i) => (
              <li
                key={item}
                className="flex items-center gap-10 text-sm font-semibold text-foreground/80"
              >
                {item}
                {i < trustItems.length - 1 && (
                  <span className="hidden sm:block h-1 w-1 rounded-full bg-honey/50" />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
