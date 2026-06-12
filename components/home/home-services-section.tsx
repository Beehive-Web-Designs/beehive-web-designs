import {
  Globe,
  Search,
  Server,
  CheckCircle2,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/animations/FadeIn";

const services = [
  {
    icon: Globe,
    title: "Web Design & Development",
    desc: "Custom-built websites that look incredible and convert visitors into customers. No templates, no cookie-cutter solutions.",
    features: [
      "Works Great on Any Device",
      "Loads Quickly for Visitors",
      "Smooth, Professional Animations",
    ],
  },
  {
    icon: Server,
    title: "Reliable Web Hosting",
    desc: "Lightning-fast, secure hosting that keeps your site running 24/7. We handle the tech so you don't have to.",
    features: [
      "Your Site Stays Online 24/7",
      "Secure & Safe for Customers",
      "Fast Loading Worldwide",
    ],
  },
  {
    icon: Search,
    title: "SEO That Delivers",
    desc: "Get found by the right people at the right time. Our SEO strategies drive real traffic and real results.",
    features: [
      "Get Found by Local Customers",
      "Show Up in Google Searches",
      "Optimized for Search Engines",
    ],
  },
];

export function HomeServicesSection() {
  return (
    <section id="services" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-honey/[0.02] to-transparent pointer-events-none" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-syne)] text-4xl sm:text-5xl font-bold tracking-tight">
              Everything Your Business
              <br />
              <span className="gradient-text">Needs Online</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.1}>
              <Card className="bg-card/60 border-border hover:border-honey/30 transition-all duration-500 group h-full backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-honey/10 group-hover:bg-honey/20 transition-colors">
                    <service.icon className="h-7 w-7 text-honey" />
                  </div>
                  <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                    {service.desc}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-sm text-text-label"
                      >
                        <CheckCircle2 className="h-4 w-4 text-honey shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
