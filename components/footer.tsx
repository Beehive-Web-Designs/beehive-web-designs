import Link from "next/link";
import { CopyrightYear } from "@/components/copyright-year";
import { BeeLogoLockup } from "@/components/bee-logo";
import {
  getLocationPath,
  getLocationsByCounty,
} from "@/lib/locations/utah-county";

const utahCountyFooter = getLocationsByCounty("Utah County").slice(0, 6);
const saltLakeFooter = getLocationsByCounty("Salt Lake County").slice(0, 6);

export function Footer() {
  return (
    <footer className="border-t-2 border-honey/20 bg-surface-footer">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" prefetch={false} className="mb-4 inline-block">
              <BeeLogoLockup markSize="sm" />
            </Link>
            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
              Beautiful, high-performing websites for small businesses that
              want to grow.
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:spencer@beehivewebdesigns.com"
                  className="text-sm text-muted-foreground transition-colors hover:text-honey-dark"
                >
                  spencer@beehivewebdesigns.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+19497099241"
                  className="text-sm text-muted-foreground transition-colors hover:text-honey-dark"
                >
                  (949) 709-9241
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-bold text-foreground">Services</h2>
            <ul className="space-y-2">
              {[
                { label: "Web Design", href: "/services#web-design" },
                { label: "Web Hosting", href: "/services#hosting" },
                { label: "SEO Services", href: "/services#seo" },
                { label: "Maintenance", href: "/services#hosting" },
              ].map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    prefetch={false}
                    className="text-sm text-muted-foreground transition-colors hover:text-honey-dark"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-bold text-foreground">Company</h2>
            <ul className="space-y-2">
              {[
                { label: "About", href: "/about" },
                { label: "Blog", href: "/blog" },
                { label: "Services", href: "/services" },
                { label: "Contact", href: "/contact" },
              ].map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    prefetch={false}
                    className="text-sm text-muted-foreground transition-colors hover:text-honey-dark"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-bold text-foreground">
              Utah County
            </h2>
            <ul className="space-y-2">
              {utahCountyFooter.map((location) => (
                <li key={location.slug}>
                  <Link
                    href={getLocationPath(location.slug)}
                    prefetch={false}
                    className="text-sm text-muted-foreground transition-colors hover:text-honey-dark"
                  >
                    {location.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-bold text-foreground">
              Salt Lake County
            </h2>
            <ul className="space-y-2">
              {saltLakeFooter.map((location) => (
                <li key={location.slug}>
                  <Link
                    href={getLocationPath(location.slug)}
                    prefetch={false}
                    className="text-sm text-muted-foreground transition-colors hover:text-honey-dark"
                  >
                    {location.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; <CopyrightYear /> Beehive Web Designs. All rights reserved.
          </p>
          <Link
            href="/contact"
            prefetch={false}
            className="text-xs text-muted-foreground transition-colors hover:text-honey-dark"
          >
            Get a free quote
          </Link>
        </div>
      </div>
    </footer>
  );
}
