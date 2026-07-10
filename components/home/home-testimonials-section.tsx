import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Adam Virgille",
    role: "Co-Founder, Sport Science Network",
    quote:
      "Working with Spencer has been a great experience. He is responsive, easy to collaborate with, and consistently brings innovative ideas that help move projects forward. He helped us build a clean, professional website with important integrations like Stripe payments and Mailchimp that make running our business much easier.",
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
      "I created my website using Webflow but kept running into performance issues. Spencer came in, found the problems, and cleaned things up quickly. He improved the load times and made the site much smoother and more reliable. I'm extremely happy with the end result.",
    rating: 5,
  },
];

export function HomeTestimonialsSection() {
  return (
    <section id="testimonials" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        
          <div className="text-center mb-14">
            <p className="mb-3 text-xs font-bold tracking-widest uppercase text-honey-dark">
              Kind words
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              Loved by small-business
              <br className="hidden sm:block" /> owners
            </h2>
          </div>
        

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={t.name} className="h-full">
              <div className="h-full rounded-2xl bg-card card-soft p-8 flex flex-col">
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, si) => (
                    <Star key={si} className="h-4 w-4 text-honey-dark fill-honey-dark" />
                  ))}
                </div>
                <p className="text-sm text-text-label leading-relaxed mb-6 flex-1">
                  {t.quote}
                </p>
                <div>
                  <div className="font-bold text-sm">{t.name}</div>
                  <div className="text-xs text-honey-dark font-medium">
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
