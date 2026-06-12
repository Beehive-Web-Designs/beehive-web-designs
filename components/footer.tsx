import Link from "next/link";
import { Hexagon } from "lucide-react";
import { CopyrightYear } from "@/components/copyright-year";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-footer">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Hexagon className="h-7 w-7 text-honey fill-honey/20" />
              <span className="font-[family-name:var(--font-syne)] text-lg font-bold tracking-tight">
                Beehive Web Designs
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Building beautiful, high-performing websites for small businesses
              that want to grow.
            </p>
          </div>

          {/* Services */}
          <div>
            <h2 className="font-[family-name:var(--font-syne)] font-bold text-sm uppercase tracking-widest text-text-label mb-4">
              Services
            </h2>
            <ul className="space-y-2">
              {[
                { label: "Web Design", href: "/services#web-design" },
                { label: "Web Hosting", href: "/services#hosting" },
                { label: "SEO Services", href: "/services#seo" },
                { label: "Maintenance", href: "/services#maintenance" },
              ].map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="text-sm text-muted-foreground hover:text-honey transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h2 className="font-[family-name:var(--font-syne)] font-bold text-sm uppercase tracking-widest text-text-label mb-4">
              Company
            </h2>
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
                    className="text-sm text-muted-foreground hover:text-honey transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="font-[family-name:var(--font-syne)] font-bold text-sm uppercase tracking-widest text-text-label mb-4">
              Contact
            </h2>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">
                spencer.s.hodson@gmail.com
              </li>
              <li className="text-sm text-muted-foreground">
              (949) 709-9241
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; <CopyrightYear /> Beehive Web Designs. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms"].map((link) => (
              <Link
                key={link}
                href="/"
                className="text-xs text-muted-foreground hover:text-honey-text transition-colors"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
