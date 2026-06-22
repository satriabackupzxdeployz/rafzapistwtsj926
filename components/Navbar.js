"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconPlug, IconMenu, IconClose, IconArrowRight } from "./Icons";
import { SITE } from "@/lib/apiCatalog";

const LINKS = [
  { href: "/", label: "Dashboard" },
  { href: "/apis", label: "List API" },
  { href: "/docs", label: "Dokumentasi" },
  { href: "/contact", label: "Kontak & Donasi" }
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-cyan-900/5 bg-white/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 text-white shadow-clay-sm">
            <IconPlug size={18} />
            <img
              src="/images/icon-website.png"
              alt={SITE.name}
              className="absolute inset-0 h-9 w-9 rounded-xl object-cover"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-ink">{SITE.name}</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active ? "bg-cyan-50 text-cyan-700" : "text-ink/70 hover:bg-cyan-50/70 hover:text-cyan-700"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/docs"
            className="ml-2 flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white shadow-clay-sm transition-transform hover:-translate-y-0.5"
          >
            Mulai
            <IconArrowRight size={16} />
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid h-10 w-10 place-items-center rounded-full text-ink md:hidden"
          aria-label="Buka menu"
        >
          {open ? <IconClose size={22} /> : <IconMenu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-cyan-900/5 bg-white px-5 py-3 md:hidden">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block rounded-xl px-3 py-2.5 text-sm font-medium ${
                pathname === link.href ? "bg-cyan-50 text-cyan-700" : "text-ink/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
