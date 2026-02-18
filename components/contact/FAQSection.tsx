"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeIn } from "@/components/animations/FadeIn";

type FAQCategory = "pricing" | "plans" | "websites";

const faqsByCategory: Record<FAQCategory, Array<{ id: string; q: string; a: string }>> = {
  pricing: [
    {
      id: "pricing-deposit",
      q: "Do you require a deposit?",
      a: "For lump sum and custom projects, we require a 50% down payment on the cost of the project. For the monthly subscription, it's $0 down, but we start the monthly subscription right away with a 12-month commitment.",
    },
    {
      id: "pricing-additional-pages",
      q: "Is the $100 charge per additional page a one-time or monthly fee?",
      a: "That's a one time fee, after the first 5 pages are included in the cost of the website. For example, if you need 7 total pages, you would pay $200 one time for the additional 2 pages.",
    },
    {
      id: "pricing-subscription-length",
      q: "How long does the subscription last?",
      a: "We require a minimum 12-month commitment for the subscription, and month-to-month after that. You can cancel at any time, but you will be charged the remaining balance of the year. If you cancel, you don't keep the site.",
    },
    {
      id: "pricing-cancel-early",
      q: "What happens if I cancel before the 12 months is over?",
      a: "If you cancel before the 12 months, you owe the full cost of what the site would normally cost ($3500) minus whatever you already paid. We prioritize long term relationships with our clients, and we want clients to share the same philosophy.",
    },
    {
      id: "pricing-hidden-fees",
      q: "Are there any hidden fees?",
      a: "No hidden fees. We provide transparent pricing upfront. Any additional work beyond the original scope will be discussed and approved before proceeding.",
    },
    {
      id: "pricing-refund",
      q: "What's your refund policy?",
      a: "If we cannot create a design you're 100% happy with and you choose not to move forward, we'll refund your initial payment. Once we begin building the site, refunds are no longer available. After launch, any refunds are handled on a case-by-case basis at our discretion.",
    },
  ],
  plans: [
    {
      id: "plans-difference",
      q: "What is the difference between the lump sum and the monthly subscription?",
      a: "The lump sum is a one-time payment for the design and development of the website. The $150 monthly subscription is a monthly payment for the design and development of the website, plus hosting and maintenance.",
    },
    {
      id: "plans-add-ons",
      q: "Can I add unlimited edits and hosting to the lump sum package?",
      a: "Yes! You can add unlimited edits for $25/month and hosting for $50/month to the lump sum package. This is also a 12 month commitment.",
    },
    {
      id: "plans-after-12-months",
      q: "What happens when the 12 months minimum is over?",
      a: "Subscriptions continue indefinitely after the 12-month minimum. It takes us 2-3 years to match what we'd make from a lump sum payment, so we hope clients stay at least 5 years. By that point, your website should be generating enough value to essentially pay for itself, and we hope you'll continue to see the value in our ongoing work.",
    },
  ],
  websites: [
    {
      id: "websites-timeline",
      q: "How long does the process take from start to finish?",
      a: "We pride ourselves on delivering high-quality websites quickly. Most projects are completed in 1-2 weeks, though the timeline depends on how quickly you can provide feedback and approvals. The faster you respond, the faster we can deliver your site.",
    },
    {
      id: "websites-cancel-keep",
      q: "Do I keep the website if I cancel the subscription?",
      a: "No, you do not keep the website if you cancel the subscription. You will still have access to the website for the duration of the subscription, but you will not have access to the website after the subscription ends. You do get to keep your domain and assets however.",
    },
    {
      id: "websites-handcoded-vs-template",
      q: "What are the benefits of a handcoded website vs a template?",
      a: "Handcoded websites are built from scratch with clean, optimized code, resulting in faster load times and better performance. Templates often include unnecessary code and features you don't need, which can slow down your site. Handcoded sites are lighter, load faster, and perform better in search rankings because they're optimized specifically for your needs.",
    },
    {
      id: "websites-request-edits",
      q: "How can I request edits to the website?",
      a: "You can request edits by emailing us directly at spencer.s.hodson@gmail.com. We'll review your request and get back to you within 24 hours. If you need to make a change that is more complex.",
    },
  ],
};

const categories: Array<{ id: FAQCategory; label: string }> = [
  { id: "pricing", label: "Pricing" },
  { id: "plans", label: "Plans" },
  { id: "websites", label: "Websites" },
];

export function FAQSection() {
  const [selectedCategory, setSelectedCategory] = useState<FAQCategory>("pricing");

  return (
    <section className="py-28 relative honeycomb-bg">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-syne)] text-4xl sm:text-5xl font-bold tracking-tight">
              Common
              <br />
              <span className="gradient-text">Questions</span>
            </h2>
          </div>
        </FadeIn>

        <FadeIn>
          {/* Category Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`cursor-pointer rounded-full border px-6 py-2.5 text-sm font-medium font-[family-name:var(--font-space-grotesk)] transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "border-honey bg-honey/20 text-honey"
                    : "border-[rgba(245,166,35,0.2)] bg-[#1A1A2E]/40 text-[#B0B0C0] hover:border-honey/40 hover:bg-[#1A1A2E]/60"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </FadeIn>

        <FadeIn>
          <Accordion type="single" collapsible className="space-y-4">
            {faqsByCategory[selectedCategory].map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="rounded-2xl border border-[rgba(245,166,35,0.1)] bg-[#1A1A2E]/60 hover:border-honey/20 transition-all duration-500 backdrop-blur-sm px-6 sm:px-8 last:border-b"
              >
                <AccordionTrigger className="cursor-pointer font-[family-name:var(--font-syne)] text-base font-bold text-[#F0EDE6] hover:text-honey hover:no-underline py-6 [&[data-state=open]>svg]:text-honey">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-[#8A8A9A] leading-relaxed font-[family-name:var(--font-space-grotesk)] pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
}
