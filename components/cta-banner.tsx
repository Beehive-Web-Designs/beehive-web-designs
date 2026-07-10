import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BeeMark } from "@/components/bee-logo";
import Link from "next/link";
import { cn } from "@/lib/utils";

type CTABannerProps = {
  className?: string;
};

export function CTABanner({ className }: CTABannerProps) {
  return (
    <section className={cn("py-20", className)}>
      <div className="mx-auto max-w-7xl px-6">
        
          <div className="rounded-3xl bg-honey px-6 py-16 sm:px-16 text-center">
            <BeeMark className="mx-auto mb-6 h-14 w-14 text-espresso" />
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-espresso mb-4">
              Ready to build a website
              <br />
              that works?
            </h2>
            <p className="text-espresso/80 max-w-xl mx-auto mb-8">
              Get in touch for a free consultation. Let&apos;s turn your
              visitors into customers.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                asChild
                size="lg"
                className="bg-espresso hover:bg-espresso-light text-background font-semibold rounded-full px-8"
              >
                <Link href="/contact">
                  Get started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-honey-light/60 hover:bg-honey-light text-espresso font-semibold rounded-full px-8"
              >
                <a href="tel:+19497099241">(949) 709-9241</a>
              </Button>
            </div>
          </div>
        
      </div>
    </section>
  );
}
