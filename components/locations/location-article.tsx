import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { CTABanner } from "@/components/cta-banner";
import { PageShell } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import type { LocationPost } from "@/lib/locations/types";

type LocationArticleProps = {
  location: LocationPost;
};

const sharedBenefits = [
  "Custom design built for your business, not a stock theme",
  "Fast, mobile-first pages that load cleanly on phones",
  "Hosting and support so you are not stuck managing plugins",
  "SEO-ready structure for local search",
  "Clear contact paths that turn visitors into leads",
  "Unlimited content edits with ongoing support plans",
];

export function LocationArticle({ location }: LocationArticleProps) {
  return (
    <PageShell>
      <section className="pt-36 pb-12">
        <div className="mx-auto max-w-3xl px-6">
          <p className="mb-3 text-xs font-bold tracking-widest uppercase text-honey-dark">
            {location.name}, {location.state}
          </p>
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {location.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {location.intro}
          </p>
          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-honey px-8 font-semibold text-espresso hover:bg-honey-light"
            >
              <Link href="/contact" prefetch={false}>
                Get a free quote <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-section-alt py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
            What you get with Beehive
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Services stay the same in every city. Whether you are in{" "}
            {location.name} or elsewhere in {location.county}, you get a custom
            website built for speed, clarity, and local customers. Learn more
            on our{" "}
            <Link
              href="/services"
              prefetch={false}
              className="font-medium text-honey-dark underline-offset-2 hover:underline"
            >
              services page
            </Link>
            .
          </p>
          <ul className="mt-8 space-y-3">
            {sharedBenefits.map((benefit) => (
              <li key={benefit} className="flex gap-3 text-foreground">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-honey-dark" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
            Web design for {location.name} businesses
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            {location.localContext}
          </p>
        </div>
      </section>

      <section className="bg-section-alt py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
            Industries we serve in {location.name}
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            We focus on local service businesses in {location.name}, especially
            home-service trades that need more calls and booked jobs:
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {location.industries.map((industry) => (
              <li key={industry} className="flex gap-3 text-foreground">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-honey-dark" />
                <span>{industry}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
            How it works
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            We start with a short conversation about your {location.name}{" "}
            business, goals, and must-have pages. Then we design, build, and
            launch a custom site with hosting and support. You stay focused on
            running the business while we handle the website.
          </p>
        </div>
      </section>

      <section className="bg-section-alt py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
            {location.name} web design FAQs
          </h2>
          <dl className="mt-8 space-y-8">
            {location.faqs.map((faq) => (
              <div key={faq.q}>
                <dt className="text-lg font-bold text-foreground">{faq.q}</dt>
                <dd className="mt-2 leading-relaxed text-muted-foreground">
                  {faq.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CTABanner />
    </PageShell>
  );
}
