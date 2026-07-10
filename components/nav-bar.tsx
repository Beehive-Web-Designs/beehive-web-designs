"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { BeeLogoLockup } from "@/components/bee-logo";
import {
  getLocationPath,
  getLocationsByCounty,
  isLocationPath,
  locationCounties,
} from "@/lib/locations/utah-county";

const ctaButtonClassName =
  "inline-flex items-center justify-center bg-honey hover:bg-honey-light text-espresso font-bold rounded-full px-7 h-11 text-sm transition-all";

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

function LocationCityLinks({
  pathname,
  onNavigate,
  className,
}: {
  pathname: string;
  onNavigate?: () => void;
  className?: string;
}) {
  return (
    <div className={className}>
      {locationCounties.map((county) => (
        <div key={county} className="mb-4 last:mb-0">
          <p className="mb-2 px-3 text-xs font-bold tracking-widest uppercase text-honey-dark">
            {county}
          </p>
          <div className="grid grid-cols-2 gap-1">
            {getLocationsByCounty(county).map((location) => (
              <Link
                key={location.slug}
                href={getLocationPath(location.slug)}
                prefetch={false}
                className={`rounded-lg px-3 py-2 text-sm transition-colors hover:bg-secondary ${
                  pathname === getLocationPath(location.slug)
                    ? "font-semibold text-honey-dark"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={onNavigate}
              >
                {location.name}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);
  const [desktopLocationsOpen, setDesktopLocationsOpen] = useState(false);
  const pathname = usePathname();
  const locationsActive = isLocationPath(pathname);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-honey/10 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          prefetch={false}
          className="flex min-w-0 items-center gap-2 group"
        >
          <BeeLogoLockup />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.slice(0, 3).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              prefetch={false}
              className={`text-base font-medium transition-colors ${
                isNavLinkActive(pathname, item.href)
                  ? "font-semibold text-honey-dark"
                  : "text-muted-foreground hover:text-honey-dark"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setDesktopLocationsOpen(true)}
            onMouseLeave={() => setDesktopLocationsOpen(false)}
          >
            <button
              type="button"
              aria-expanded={desktopLocationsOpen}
              aria-haspopup="true"
              className={`inline-flex items-center gap-1 text-base font-medium transition-colors ${
                locationsActive
                  ? "font-semibold text-honey-dark"
                  : "text-muted-foreground hover:text-honey-dark"
              }`}
              onClick={() => setDesktopLocationsOpen((open) => !open)}
            >
              Locations
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  desktopLocationsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {desktopLocationsOpen && (
              <div className="absolute left-1/2 top-full z-50 w-[36rem] -translate-x-1/2 pt-3">
                <div className="max-h-[70vh] overflow-y-auto rounded-2xl border border-border bg-white p-4 shadow-lg">
                  <LocationCityLinks
                    pathname={pathname}
                    onNavigate={() => setDesktopLocationsOpen(false)}
                  />
                </div>
              </div>
            )}
          </div>

          {navLinks.slice(3).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              prefetch={false}
              className={`text-base font-medium transition-colors ${
                isNavLinkActive(pathname, item.href)
                  ? "font-semibold text-honey-dark"
                  : "text-muted-foreground hover:text-honey-dark"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link href="/contact" prefetch={false} className={ctaButtonClassName}>
            Get a free quote
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
          className="relative z-10 -mr-2 shrink-0 p-2 text-foreground md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-menu-enter border-t border-border bg-white md:hidden">
          <div className="flex flex-col gap-4 p-6">
            {navLinks.slice(0, 3).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                prefetch={false}
                className={`text-base font-medium transition-colors ${
                  isNavLinkActive(pathname, item.href)
                    ? "font-semibold text-honey-dark"
                    : "text-muted-foreground hover:text-honey-dark"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <div>
              <button
                type="button"
                aria-expanded={mobileLocationsOpen}
                className={`flex w-full items-center justify-between text-base font-medium transition-colors ${
                  locationsActive
                    ? "font-semibold text-honey-dark"
                    : "text-muted-foreground hover:text-honey-dark"
                }`}
                onClick={() => setMobileLocationsOpen((open) => !open)}
              >
                Locations
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    mobileLocationsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileLocationsOpen && (
                <div className="mt-3 border-l border-border pl-2">
                  <LocationCityLinks
                    pathname={pathname}
                    onNavigate={() => setMobileMenuOpen(false)}
                    className="max-h-80 overflow-y-auto"
                  />
                </div>
              )}
            </div>

            {navLinks.slice(3).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                prefetch={false}
                className={`text-base font-medium transition-colors ${
                  isNavLinkActive(pathname, item.href)
                    ? "font-semibold text-honey-dark"
                    : "text-muted-foreground hover:text-honey-dark"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              prefetch={false}
              className={`mt-2 ${ctaButtonClassName}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Get a free quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
