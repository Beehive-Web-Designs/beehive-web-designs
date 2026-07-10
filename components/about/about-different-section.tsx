import { Check, X } from "lucide-react";
import { BeeLogoLockup } from "@/components/bee-logo";

const comparisons = [
  {
    typical: "Account managers and middlemen",
    beehive: "Talk directly to the people building your site",
  },
  {
    typical: "Template sites with hidden upsells",
    beehive: "Custom design with clear, upfront pricing",
  },
  {
    typical: "Separate vendors for design, hosting, and SEO",
    beehive: "One team and one invoice for everything",
  },
  {
    typical: "Launch day, then radio silence",
    beehive: "Ongoing support, hosting, and updates included",
  },
  {
    typical: "Months of back-and-forth",
    beehive: "Fast turnaround with real collaboration",
  },
];

export function AboutDifferentSection() {
  return (
    <section id="different" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        
          <div className="text-center mb-14">
            <p className="mb-3 text-xs font-bold tracking-widest uppercase text-honey-dark">
              Why we&apos;re different
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Not your typical
              <br className="hidden sm:block" /> web agency
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Small businesses deserve better than bloated processes and
              corporate runaround. Here&apos;s how we do things differently.
            </p>
          </div>
        

        
          <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-border bg-card card-soft">
            <div className="grid grid-cols-2 border-b border-border bg-muted/40">
              <div className="px-5 py-4 sm:px-8 sm:py-5">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  Typical agency
                </p>
              </div>
              <div className="flex items-center border-l border-border px-5 py-4 sm:px-8 sm:py-5">
                <BeeLogoLockup markSize="sm" />
              </div>
            </div>

            <div className="divide-y divide-border">
              {comparisons.map((item) => (
                <div key={item.typical} className="grid grid-cols-2">
                  <div className="flex gap-3 px-5 py-5 sm:gap-4 sm:px-8 sm:py-6">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-muted">
                      <X className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.typical}
                    </p>
                  </div>
                  <div className="flex gap-3 border-l border-border bg-honey/[0.04] px-5 py-5 sm:gap-4 sm:px-8 sm:py-6">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-honey/15">
                      <Check className="h-3.5 w-3.5 text-honey-dark" aria-hidden="true" />
                    </div>
                    <p className="text-sm font-medium leading-relaxed text-foreground">
                      {item.beehive}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        
      </div>
    </section>
  );
}
