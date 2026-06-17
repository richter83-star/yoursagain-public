"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./Button";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/process", label: "Process" },
  { href: "/faq", label: "FAQ" },
  { href: "/sources", label: "Sources" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-line bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded bg-brand-navy font-serif text-sm font-bold text-white">
            YA
          </span>
          <span className="font-serif text-xl font-bold text-brand-navy">
            YoursAgain
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map(({ href, label }) => {
            const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "text-sm font-medium transition",
                  active ? "text-brand-navy" : "text-brand-muted hover:text-brand-navy"
                )}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button href="/portal" variant="outline">
            Client Login
          </Button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-brand-line bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm font-medium text-brand-ink"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Button href="/portal" variant="outline" className="mt-2">
              Client Login
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
