import {
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/animations/FadeIn";
import { HoneycombDecor } from "@/components/HoneyCombDecor";

export function HomeHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 honeycomb-bg">
      <HoneycombDecor className="absolute top-20 right-10 w-48 h-48 opacity-40 hidden lg:block" />
      <HoneycombDecor className="absolute bottom-20 left-10 w-64 h-64 opacity-30 hidden lg:block" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-honey/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-nectar/5 blur-[100px] pointer-events-none" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        <FadeIn animateOnMount>
          <Badge className="mb-6 rounded-full border-honey/30 bg-honey/10 text-honey-text px-4 py-1.5 text-xs font-medium tracking-widest uppercase">
            Web Design &bull; Hosting & Maintenance &bull; SEO
          </Badge>
        </FadeIn>

        <h1 className="font-[family-name:var(--font-syne)] max-w-[800px] mx-auto text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-0.95 tracking-tight mb-6">
          Websites That Work
          <br />
          <span className="gradient-text">As Hard As You Do</span>
        </h1>

        <FadeIn delay={0.2} animateOnMount>
          <p className="mx-auto max-w-2xl text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10">
            Beautiful websites built from scratch. We build, host, and optimize
            websites that bring real customers to your door. Small business is our
            specialty.
          </p>
        </FadeIn>

        <FadeIn delay={0.3} animateOnMount>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-honey hover:bg-honey-light text-primary-foreground font-bold rounded-full px-8 py-6 text-base glow-honey"
            >
              <Link href="/contact">
                Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-8 py-6 text-base border-honey/30 text-honey-text hover:bg-honey/10 hover:text-honey-text font-medium"
            >
              <Link href="/services">See What We Do</Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
