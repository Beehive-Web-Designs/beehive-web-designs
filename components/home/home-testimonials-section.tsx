import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/animations/FadeIn";

const testimonials = [
  {
    name: "Adam Virgille",
    role: "Co-Founder, Sport Science Network; VP, LA Clippers",
    quote:
      "Working with Spencer has been a great experience. He is responsive, easy to collaborate with, and consistently brings innovative ideas that help move projects forward. He helped us build a clean, professional website with important integrations like Stripe payments and Mailchimp that make running our business much easier. I highly recommend Spencer to anyone looking for a thoughtful and capable web developer.",
    rating: 5,
  },
  {
    name: "Tyler Lenzinger",
    role: "Owner, Bugz Auto Detailing",
    quote:
      "I tried to build my own website on Squarespace but constantly ran into roadblocks. Working with Spencer was a completely different experience. Communication was easy, and the end result was exactly what I needed. I'm really happy with how everything turned out.",
 
    rating: 5,
  },
  {
    name: "Josh Dahl",
    role: "Owner, Dahl DJ",
    quote:
      "I created my website using Webflow but kept running into performance issues that hurt the experience for my visitors. There were a lot of small things slowing the site down, and I wasn’t sure how to fix them. Spencer came in, found the problems, and was able to clean things up quickly. He explained what needed to be done, improved the load times, and made the site much smoother and more reliable. I’m extremely happy with the end result, and working with him made a big difference.",
 
    rating: 5,
  },
];

export function HomeTestimonialsSection() {
  return (
    <section id="testimonials" className="py-28 relative honeycomb-bg">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-syne)] text-4xl sm:text-5xl font-bold tracking-tight">
              Loved by Small
              <br />
              <span className="gradient-text">Business Owners</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.1}>
              <Card className="bg-[#1A1A2E]/60 border-[rgba(245,166,35,0.1)] hover:border-honey/20 transition-all duration-500 h-full backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, si) => (
                      <Star
                        key={si}
                        className="h-4 w-4 text-honey fill-honey"
                      />
                    ))}
                  </div>
                  <p className="text-[#B0B0C0] leading-relaxed mb-6 italic text-sm font-[family-name:var(--font-space-grotesk)]">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div>
                    <div className="font-[family-name:var(--font-syne)] font-bold text-sm">
                      {t.name}
                    </div>
                    <div className="text-xs text-[#8A8A9A]">{t.role}</div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
