"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  faqCategories,
  faqsByCategory,
  type FAQCategory,
} from "@/lib/contact/faqs";

export function FAQSection() {
  const [selectedCategory, setSelectedCategory] =
    useState<FAQCategory>("pricing");

  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        
          <div className="text-center mb-14">
            <p className="mb-3 text-xs font-bold tracking-widest uppercase text-honey-dark">
              FAQ
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Common questions
            </h2>
          </div>
        

        
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {faqCategories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setSelectedCategory(category.id)}
                className={`cursor-pointer rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-honey text-espresso"
                    : "bg-card text-text-label hover:bg-card/70"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        

        
          <Accordion type="single" collapsible className="space-y-4">
            {faqsByCategory[selectedCategory].map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="rounded-2xl bg-card card-soft border-none px-6 sm:px-8 last:border-b-0"
              >
                <AccordionTrigger className="cursor-pointer text-base font-bold text-foreground hover:text-honey-dark hover:no-underline py-6 [&[data-state=open]>svg]:text-honey-dark">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        
      </div>
    </section>
  );
}
