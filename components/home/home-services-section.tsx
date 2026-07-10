import { Check } from "lucide-react";

const services = [
  {
    title: "Mobile-First & Responsive",
    image: "/stock/mobile-640.webp",
    imageSrcSet: "/stock/mobile-384.webp 384w, /stock/mobile-640.webp 640w",
    imageAlt: "Website displayed on a smartphone",
    desc: "Every site is written with clean code from scratch with a mobile-first design approach, ensuring your website looks great and works perfectly on all screen sizes.",
    features: [
      "Designed for phones first",
      "Looks fantastic on every screen size",
      "Clean code, no template baggage",
    ],
  },
  {
    title: "Optimized Page Speed",
    image: "/stock/page-speed-640.webp",
    imageSrcSet:
      "/stock/page-speed-384.webp 384w, /stock/page-speed-640.webp 640w",
    imageAlt: "Google PageSpeed Insights performance score",
    desc: "Visitors won't wait around. Hand-coded sites built to load in a flash so more people stay, browse, and convert.",
    features: [
      "Built for fast load times",
      "Strong Google PageSpeed scores",
      "Better UX, more conversions",
    ],
  },
  {
    title: "SEO Services",
    image: "/stock/google-search-640.webp",
    imageSrcSet:
      "/stock/google-search-384.webp 384w, /stock/google-search-640.webp 640w",
    imageAlt: "Google search results on a laptop",
    desc: "No outsourced specialists or vague promises — I handle your SEO personally with honest local strategies and clear reporting.",
    features: [
      "Local SEO for your market",
      "Sites built to rank from day one",
      "Straightforward progress updates",
    ],
  },
  {
    title: "Small Agency, Real Attention",
    image: "/stock/office-selfie-640.webp",
    imageSrcSet:
      "/stock/office-selfie-384.webp 384w, /stock/office-selfie-640.webp 640w",
    imageAlt: "Beehive Web Designs team in the office",
    desc: "You're not a ticket in a queue. Work directly with me — quick replies, no phone trees, and a partner who's invested in your growth.",
    features: [
      "Talk directly to your designer",
      "Fast, personal support",
      "A partner, not a vendor",
    ],
  },
] as const;

export function HomeServicesSection() {
  return (
    <section id="services" className="py-24 bg-section-alt">
      <div className="mx-auto max-w-7xl px-6">
        
          <div className="text-center mb-14">
            <p className="mb-3 text-xs font-bold tracking-widest uppercase text-honey-dark">
              What we do
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              Everything your business needs
              <br className="hidden sm:block" /> to be online
            </h2>
          </div>
        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div key={service.title} className="h-full">
              <div className="h-full overflow-hidden rounded-2xl bg-card card-soft">
                <div className="relative aspect-[16/10] border-b border-border bg-muted/40 overflow-hidden">
                  <img
                    src={service.image}
                    srcSet={service.imageSrcSet}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    alt={service.imageAlt}
                    width={640}
                    height={400}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover object-top"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                    {service.desc}
                  </p>
                  <ul className="space-y-2.5">
                    {service.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2.5 text-sm text-text-label"
                      >
                        <Check className="h-4 w-4 text-success shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
