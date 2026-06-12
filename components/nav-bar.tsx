"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Hexagon, ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

function isNavLinkActive(pathname: string, href: string): boolean {
  if (href === "/blog") {
    return pathname === "/blog" || pathname.startsWith("/blog/");
  }
  return pathname === href;
}

export function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Hexagon className="h-8 w-8 text-honey fill-honey/20 group-hover:fill-honey/30 transition-colors" />
          <span className="font-[family-name:var(--font-syne)] text-xl font-bold tracking-tight">
            Beehive Web Designs
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors tracking-wide uppercase ${
                isNavLinkActive(pathname, item.href)
                  ? "text-honey"
                  : "text-muted-foreground hover:text-honey"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Button
            asChild
            className="bg-honey hover:bg-honey-light text-primary-foreground font-semibold rounded-full px-6"
          >
            <Link href="/contact">
              Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle mobile menu"
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl mobile-menu-enter">
          <div className="flex flex-col gap-4 p-6">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors uppercase tracking-wide ${
                  isNavLinkActive(pathname, item.href)
                    ? "text-honey"
                    : "text-muted-foreground hover:text-honey"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button
              asChild
              className="mt-2 bg-honey hover:bg-honey-light text-primary-foreground font-semibold rounded-full"
            >
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                Get a Free Quote
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
