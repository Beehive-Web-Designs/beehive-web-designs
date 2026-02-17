import Link from "next/link";
import { Hexagon } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[rgba(245,166,35,0.1)] bg-[#0A0A14]">
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
            <p className="text-sm text-[#8A8A9A] leading-relaxed font-[family-name:var(--font-space-grotesk)]">
              Building beautiful, high-performing websites for small businesses
              that want to grow.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-[family-name:var(--font-syne)] font-bold text-sm uppercase tracking-widest text-[#B0B0C0] mb-4">
              Services
            </h4>
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
                    className="text-sm text-[#8A8A9A] hover:text-honey transition-colors font-[family-name:var(--font-space-grotesk)]"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-[family-name:var(--font-syne)] font-bold text-sm uppercase tracking-widest text-[#B0B0C0] mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              {[
                { label: "About", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Contact", href: "/contact" },
              ].map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="text-sm text-[#8A8A9A] hover:text-honey transition-colors font-[family-name:var(--font-space-grotesk)]"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-[family-name:var(--font-syne)] font-bold text-sm uppercase tracking-widest text-[#B0B0C0] mb-4">
              Contact
            </h4>
            <ul className="space-y-2">
              <li className="text-sm text-[#8A8A9A] font-[family-name:var(--font-space-grotesk)]">
                spencer.s.hodson@gmail.com
              </li>
              <li className="text-sm text-[#8A8A9A] font-[family-name:var(--font-space-grotesk)]">
              (949) 709-9241
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[rgba(245,166,35,0.08)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#555] font-[family-name:var(--font-space-grotesk)]">
            &copy; {new Date().getFullYear()} Beehive Web Designs. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-xs text-[#555] hover:text-honey transition-colors font-[family-name:var(--font-space-grotesk)]"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
