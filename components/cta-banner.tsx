import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/FadeIn";
import { HoneycombDecor } from "@/components/HoneyCombDecor";
import Link from "next/link";

export function CTABanner() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-honey/10 via-honey/5 to-nectar/10 pointer-events-none" />
      <HoneycombDecor className="absolute -left-10 top-0 w-40 h-40 opacity-20" />
      <HoneycombDecor className="absolute -right-10 bottom-0 w-48 h-48 opacity-20" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <FadeIn>
          <h2 className="font-[family-name:var(--font-syne)] text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Ready to Build
            <br />
            <span className="gradient-text">Your Website?</span>
          </h2>
          <p className="text-[#8A8A9A] text-lg max-w-2xl mx-auto mb-8 font-[family-name:var(--font-space-grotesk)]">
            Let&apos;s build something amazing together. Get in touch for a free
            consultation and see how we can help bring your vision to life.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-honey hover:bg-honey-light text-[#0F0F1A] font-bold rounded-full px-10 py-6 text-base glow-honey"
          >
            <Link href="/#contact">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
