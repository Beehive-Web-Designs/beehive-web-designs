"use client";

import { useState } from "react";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  Hexagon,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { FadeIn } from "@/components/animations/FadeIn";
import { HoneycombDecor } from "@/components/HoneyCombDecor";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    value: "spencer.s.hodson@gmail.com",
    desc: "We respond within 24 hours on business days.",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "(949) 709-9241",
    desc: "24/7. We love hearing from you.",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Serving Businesses in the USA and Canada",
    desc: "We work remotely with clients across North America.",
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "24/7",
    desc: "We are available to help you with your website 24/7.",
  },
];

type FAQCategory = "pricing" | "plans" | "websites";

const faqsByCategory: Record<FAQCategory, Array<{ q: string; a: string }>> = {
  pricing: [
    {
      q: "Do you require a deposit?",
      a: "For lump sum and custom projects, we require a 50% down payment on the cost of the project. For the monthly subscription, it's $0 down, but we start the monthly subscription right away with a 12-month commitment.",
    },
    {
      q: "Is the $100 charge per additional page a one-time or monthly fee?",
      a: "That's a one time fee, after the first 5 pages are included in the cost of the website. For example, if you need 7 total pages, you would pay $200 one time for the additional 2 pages.",
    },
    {
      q: "How long does the subscription last?",
      a: "We require a minimum 12-month commitment for the subscription, and month-to-month after that. You can cancel at any time, but you will be charged the remaining balance of the year. If you cancel, you don't keep the site.",
    },
    {
      q: "What happens if I cancel before the 12 months is over?",
      a: "If you cancel before the 12 months, you owe the full cost of what the site would normally cost ($3500) minus whatever you already paid. We prioritize long term relationships with our clients, and we want clients to share the same philosophy.",
    },
    {
      q: "Are there any hidden fees?",
      a: "No hidden fees. We provide transparent pricing upfront. Any additional work beyond the original scope will be discussed and approved before proceeding.",
    },
    {
      q: "What's your refund policy?",
      a: "If we cannot create a design you're 100% happy with and you choose not to move forward, we'll refund your initial payment. Once we begin building the site, refunds are no longer available. After launch, any refunds are handled on a case-by-case basis at our discretion.",
    },
  ],
  plans: [
    {
      q: "What is the difference between the lump sum and the monthly subscription?",
      a: "The lump sum is a one-time payment for the design and development of the website. The $150 monthly subscription is a monthly payment for the design and development of the website, plus hosting and maintenance.",
    },
    {
      q: "Can I add unlimited edits and hosting to the lump sum package?",
      a: "Yes! You can add unlimited edits for $25/month and hosting for $50/month to the lump sum package. This is also a 12 month commitment.",
    },
    {
      q: "What happens when the 12 months minimum is over?",
      a: "Subscriptions continue indefinitely after the 12-month minimum. It takes us 2-3 years to match what we'd make from a lump sum payment, so we hope clients stay at least 5 years. By that point, your website should be generating enough value to essentially pay for itself, and we hope you'll continue to see the value in our ongoing work."
    },
    // {
    //   q: "What plans do you offer?",
    //   a: "We offer several packages ranging from basic website design to full-service packages that include design, hosting, and SEO. Each plan is customizable to fit your specific needs.",
    // },
    // {
    //   q: "Can I upgrade or downgrade my plan later?",
    //   a: "Absolutely! You can change your plan at any time. We'll prorate any changes and make the transition seamless.",
    // },
    // {
    //   q: "What's included in the hosting plans?",
    //   a: "Our hosting plans include fast, reliable servers, SSL certificates, regular backups, security monitoring, and 24/7 support for hosted clients.",
    // },
    // {
    //   q: "Do you offer monthly maintenance plans?",
    //   a: "Yes! We offer monthly maintenance plans that include updates, security patches, backups, and ongoing support to keep your site running smoothly.",
    // },
  ],
  // seo: [
  //   {
  //     q: "How long does it take to see SEO results?",
  //     a: "SEO is a long-term strategy. You may see some initial improvements within 3-6 months, but significant results typically take 6-12 months of consistent optimization.",
  //   },
  //   {
  //     q: "What's included in your SEO services?",
  //     a: "Our SEO services include keyword research, on-page optimization, technical SEO audits, content optimization, local SEO (if applicable), and monthly reporting on your progress.",
  //   },
  //   {
  //     q: "Will you guarantee first page rankings?",
  //     a: "While we can't guarantee specific rankings (no ethical SEO company can), we guarantee our work and will show you measurable improvements in your search visibility and organic traffic.",
  //   },
  //   {
  //     q: "Do I need to be on your hosting to use your SEO services?",
  //     a: "No, but it helps! We can provide SEO services for sites hosted elsewhere, though having everything under one roof makes optimization easier and more effective.",
  //   },
  // ],
  websites: [
    {
      q: "How long does the process take from start to finish?",
      a: "We pride ourselves on delivering high-quality websites quickly. Most projects are completed in 1-2 weeks, though the timeline depends on how quickly you can provide feedback and approvals. The faster you respond, the faster we can deliver your site."
    },
    {
      q: "Do I keep the website if I cancel the subscription?",
      a: "No, you do not keep the website if you cancel the subscription. You will still have access to the website for the duration of the subscription, but you will not have access to the website after the subscription ends. You do get to keep your domain and assets however."
    },
    {
      q: "What are the benefits of a handcoded website vs a template?",
      a: "Handcoded websites are built from scratch with clean, optimized code, resulting in faster load times and better performance. Templates often include unnecessary code and features you don't need, which can slow down your site. Handcoded sites are lighter, load faster, and perform better in search rankings because they're optimized specifically for your needs."
    },
    {
      q: "How can I request edits to the website?",
      a: "You can request edits by emailing us directly at spencer.s.hodson@gmail.com. We'll review your request and get back to you within 24 hours. If you need to make a change that is more complex."
    }

    // {
    //   q: "How long does it take to build a website?",
    //   a: "Most projects are completed within 2-4 weeks, depending on complexity. We'll give you a clear timeline during our initial consultation.",
    // },
    // {
    //   q: "Do I need to provide content for my website?",
    //   a: "We can work with whatever you have. If you need help with copywriting or photography, we offer content creation services or can recommend trusted partners.",
    // },
    // {
    //   q: "What if I already have a website and need a redesign?",
    //   a: "We handle redesigns all the time. We'll audit your existing site, preserve what works, and rebuild everything else from scratch.",
    // },
    // {
    //   q: "Can I update the website myself?",
    //   a: "Yes! We build with user-friendly CMS platforms so you can make text and image changes easily. We also provide training to get you comfortable.",
    // },
    // {
    //   q: "What platforms do you build websites on?",
    //   a: "We primarily work with modern, flexible platforms that are easy to manage. We'll recommend the best platform based on your needs, budget, and technical comfort level.",
    // },
    // {
    //   q: "Do you offer ongoing support after launch?",
    //   a: "Absolutely. All our packages include post-launch support, and we offer monthly maintenance plans to keep your site updated, secure, and performing at its best.",
    // },
  ],
};

export default function ContactPage() {
  const [selectedCategory, setSelectedCategory] = useState<FAQCategory>("pricing");
  const [formState, setFormState] = useState<{
    status: "idle" | "submitting" | "success" | "error";
    message: string;
  }>({ status: "idle", message: "" });
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const categories: Array<{ id: FAQCategory; label: string }> = [
    { id: "pricing", label: "Pricing" },
    { id: "plans", label: "Plans" },
    { id: "websites", label: "Websites" },
    // { id: "seo", label: "SEO" },
  ];

  return (
    <div className="min-h-screen bg-[#0F0F1A] text-[#F0EDE6] overflow-x-hidden">
      <NavBar />

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 honeycomb-bg">
        <HoneycombDecor className="absolute top-20 left-10 w-48 h-48 opacity-40 hidden lg:block" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-honey/5 blur-[120px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
          <FadeIn delay={0.1}>
            <h1 className="font-[family-name:var(--font-syne)] text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[0.95] tracking-tight mb-6 max-w-4xl mx-auto">
              Let&apos;s Build Something
              <br />
              <span className="gradient-text">Amazing Together</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="max-w-2xl text-lg sm:text-xl text-[#8A8A9A] leading-relaxed font-[family-name:var(--font-space-grotesk)] mx-auto">
              Whether you need a brand new website, better hosting, or help
              getting found on Google — we&apos;re here to help. Reach out and
              let&apos;s start a conversation.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── CONTACT FORM + INFO ─── */}
      <section className="py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-honey/[0.02] to-transparent pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left: Contact Info */}
            <div className="lg:col-span-2">
              <FadeIn>
                <h2 className="font-[family-name:var(--font-syne)] text-3xl font-bold tracking-tight mb-8">
                  Get In <span className="gradient-text">Touch</span>
                </h2>

                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div
                      key={item.title}
                      className="flex gap-4 group"
                    >
                      <div className="shrink-0 w-12 h-12 rounded-2xl bg-honey/10 flex items-center justify-center group-hover:bg-honey/20 transition-colors">
                        <item.icon className="h-5 w-5 text-honey" />
                      </div>
                      <div>
                        <h4 className="font-[family-name:var(--font-syne)] font-bold text-sm">
                          {item.title}
                        </h4>
                        <p className="text-honey text-sm font-medium font-[family-name:var(--font-space-grotesk)]">
                          {item.value}
                        </p>
                        <p className="text-xs text-[#8A8A9A] mt-0.5 font-[family-name:var(--font-space-grotesk)]">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Decorative hex */}
                <div className="hidden lg:flex mt-12 items-center justify-center">
                  <div className="relative w-48 h-48">
                    <Hexagon className="w-full h-full text-honey/10 stroke-[0.5]" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-3xl bg-honey/10 flex items-center justify-center">
                        <MessageSquare className="w-8 h-8 text-honey" />
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              <FadeIn delay={0.2}>
                <div className="rounded-2xl border border-[rgba(245,166,35,0.1)] bg-[#1A1A2E]/60 backdrop-blur-sm p-8 sm:p-10">
                  <h3 className="font-[family-name:var(--font-syne)] text-2xl font-bold mb-2">
                    Send Us a Message
                  </h3>
                  <p className="text-sm text-[#8A8A9A] mb-8 font-[family-name:var(--font-space-grotesk)]">
                    Fill out the form below and we&apos;ll get back to you within 24 hours. No spam, no pressure — just a friendly conversation.
                  </p>

                  <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    className="space-y-5"
                  >

                    {/* Hidden field for Netlify bot protection */}
                    <input type="hidden" name="form-name" value="contact" />
                    <p className="hidden">
                      <label>
                        Don't fill this out if you're human:{" "}
                        <input name="bot-field" />
                      </label>
                    </p>

                    {/* Success/Error Messages */}
                    {formState.status === "success" && (
                      <div className="rounded-xl border border-green-500/30 bg-green-500/10 p-4 flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-400 shrink-0 mt-0.5" />
                        <p className="text-sm text-green-400 font-[family-name:var(--font-space-grotesk)]">
                          {formState.message}
                        </p>
                      </div>
                    )}

                    {formState.status === "error" && (
                      <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 flex items-start gap-3">
                        <AlertCircle className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
                        <p className="text-sm text-red-400 font-[family-name:var(--font-space-grotesk)]">
                          {formState.message}
                        </p>
                      </div>
                    )}

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium mb-2 text-[#B0B0C0]"
                        >
                          First Name
                        </label>
                        <input
                          id="firstName"
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          placeholder="John"
                          className="w-full rounded-xl border border-[rgba(245,166,35,0.15)] bg-[#0F0F1A]/60 px-4 py-3 text-sm text-[#F0EDE6] placeholder:text-[#555] focus:border-honey focus:outline-none focus:ring-1 focus:ring-honey/50 transition-colors font-[family-name:var(--font-space-grotesk)]"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium mb-2 text-[#B0B0C0]"
                        >
                          Last Name
                        </label>
                        <input
                          id="lastName"
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          placeholder="Smith"
                          className="w-full rounded-xl border border-[rgba(245,166,35,0.15)] bg-[#0F0F1A]/60 px-4 py-3 text-sm text-[#F0EDE6] placeholder:text-[#555] focus:border-honey focus:outline-none focus:ring-1 focus:ring-honey/50 transition-colors font-[family-name:var(--font-space-grotesk)]"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium mb-2 text-[#B0B0C0]"
                        >
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@example.com"
                          className="w-full rounded-xl border border-[rgba(245,166,35,0.15)] bg-[#0F0F1A]/60 px-4 py-3 text-sm text-[#F0EDE6] placeholder:text-[#555] focus:border-honey focus:outline-none focus:ring-1 focus:ring-honey/50 transition-colors font-[family-name:var(--font-space-grotesk)]"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium mb-2 text-[#B0B0C0]"
                        >
                          Phone <span className="text-[#555]">(optional)</span>
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(555) 000-0000"
                          className="w-full rounded-xl border border-[rgba(245,166,35,0.15)] bg-[#0F0F1A]/60 px-4 py-3 text-sm text-[#F0EDE6] placeholder:text-[#555] focus:border-honey focus:outline-none focus:ring-1 focus:ring-honey/50 transition-colors font-[family-name:var(--font-space-grotesk)]"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium mb-2 text-[#B0B0C0]"
                      >
                        What service are you interested in?
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border border-[rgba(245,166,35,0.15)] bg-[#0F0F1A]/60 px-4 py-3 text-sm text-[#F0EDE6] focus:border-honey focus:outline-none focus:ring-1 focus:ring-honey/50 transition-colors font-[family-name:var(--font-space-grotesk)]"
                      >
                        <option value="" className="bg-[#1A1A2E]">
                          Lump Sum
                        </option>
                        <option value="monthly-subscription" className="bg-[#1A1A2E]">
                          Monthly Subscription
                        </option>
                        <option value="other" className="bg-[#1A1A2E]">
                          Custom website
                        </option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-2 text-[#B0B0C0]"
                      >
                        Tell us about your project
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="What's your business about? What are your goals for the website? Any specific features or requirements?"
                        className="w-full rounded-xl border border-[rgba(245,166,35,0.15)] bg-[#0F0F1A]/60 px-4 py-3 text-sm text-[#F0EDE6] placeholder:text-[#555] focus:border-honey focus:outline-none focus:ring-1 focus:ring-honey/50 transition-colors resize-none font-[family-name:var(--font-space-grotesk)]"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={formState.status === "submitting"}
                      className="w-full bg-honey hover:bg-honey-light text-[#0F0F1A] font-bold rounded-full py-6 text-base glow-honey disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {formState.status === "submitting" ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message <ArrowRight className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>

                    <p className="text-center text-xs text-[#555] font-[family-name:var(--font-space-grotesk)]">
                      We respect your privacy. No spam, ever.
                    </p>
                  </form>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
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
              {faqsByCategory[selectedCategory].map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
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
      <Footer />
    </div>
  );
}
