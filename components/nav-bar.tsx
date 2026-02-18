"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LazyMotion, m, useReducedMotion } from "framer-motion";
import { Hexagon, ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[rgba(245,166,35,0.1)] bg-[#0F0F1A]/80 backdrop-blur-xl">
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
                pathname === item.href
                  ? "text-honey"
                  : "text-[#8A8A9A] hover:text-honey"
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
            className="bg-honey hover:bg-honey-light text-[#0F0F1A] font-semibold rounded-full px-6"
          >
            <Link href="/contact">
              Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#F0EDE6]"
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
        <LazyMotion features={loadFeatures}>
          <m.div
            initial={shouldReduceMotion ? false : { opacity: 0, height: 0 }}
            animate={shouldReduceMotion ? false : { opacity: 1, height: "auto" }}
            className="md:hidden border-t border-[rgba(245,166,35,0.1)] bg-[#0F0F1A]/95 backdrop-blur-xl"
          >
          <div className="flex flex-col gap-4 p-6">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors uppercase tracking-wide ${
                  pathname === item.href
                    ? "text-honey"
                    : "text-[#8A8A9A] hover:text-honey"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button
              asChild
              className="mt-2 bg-honey hover:bg-honey-light text-[#0F0F1A] font-semibold rounded-full"
            >
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                Get a Free Quote
              </Link>
            </Button>
          </div>
        </m.div>
        </LazyMotion>
      )}
    </nav>
  );
}
