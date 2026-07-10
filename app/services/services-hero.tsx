import Link from "next/link";
import { ArrowRight, Globe, Search, Server } from "lucide-react";

const quickNav = [
  { id: "web-design", icon: Globe, title: "Web Design & Development" },
  { id: "hosting", icon: Server, title: "Hosting & Maintenance" },
  { id: "seo", icon: Search, title: "SEO Services" },
] as const;

export function ServicesHero() {
  return (
    <section className="pt-36 pb-24 services-lcp text-center">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-3 text-xs font-bold tracking-widest uppercase text-honey-dark">
          What we do
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.05] tracking-tight mb-6 max-w-3xl mx-auto">
          Your complete{" "}
          <span className="text-honey-dark">website solution</span>
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed mx-auto">
          Stop juggling multiple vendors. Beehive handles your entire web
          presence — from design and development to hosting and SEO — so you
          can focus on running your business.
        </p>
        <div className="flex flex-wrap gap-3 mt-10 justify-center">
          {quickNav.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary hover:bg-honey/10 transition-all text-sm text-foreground font-medium"
            >
              <item.icon className="h-4 w-4 text-honey-dark" />
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
