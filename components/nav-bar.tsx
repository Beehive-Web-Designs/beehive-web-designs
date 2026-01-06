"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Hexagon, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="p-1.5 bg-primary rounded-lg group-hover:rotate-12 transition-transform">
                <Hexagon className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-display font-bold tracking-tight">
                Beehive<span className="text-primary text-2xl leading-none">.</span>
              </span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {/* {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                    pathname === item.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {item.name}
                </Link>
              ))} */}
              {/* <Button asChild size="sm" className="font-semibold">
                <Link href="/contact">Get a Quote</Link>
              </Button> */}
              {/* <Button asChild size="sm" className="font-semibold">
                <Link href="/#join-waitlist">Join the Waiting List</Link>
              </Button> */}
            </div>
          </div>

          {/* <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-primary focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div> */}
        </div>
      </div>

      {/* Mobile menu */}
      {/* {isOpen && (
        <div className="md:hidden bg-background border-b animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium transition-colors hover:bg-accent",
                  pathname === item.href
                    ? "text-primary bg-accent/50"
                    : "text-muted-foreground"
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-3 py-2">
              <Button asChild className="w-full">
                <Link href="#join-waitlist" onClick={() => setIsOpen(false)}>
                  Join the Waiting List
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )} */}
    </nav>
  );
}
