"use client";

import Link from "next/link";

const NAV_LINKS = [
  { href: "/#prosjekter", label: "Prosjekter" },
  { href: "/#prosess", label: "Prosess" },
  { href: "/priser", label: "Pris" },
];

export default function Navbar() {
  return (
    <nav
      className="fixed top-0 z-50 w-full border-b border-transparent"
      style={{
        backdropFilter: "blur(14px)",
        backgroundColor: "rgba(10, 10, 12, 0.72)",
      }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          aria-label="AltaNettsider — hjem"
          className="text-base font-extrabold tracking-tight text-foreground md:text-lg"
        >
          <span className="text-accent">A</span>lta
          <span className="text-accent">N</span>ettsider
        </Link>

        <div className="hidden gap-8 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/kontakt"
            className="text-accent transition-colors hover:text-foreground"
          >
            Start en samtale
          </Link>
        </div>

        <Link
          href="/kontakt"
          className="md:hidden font-mono text-[11px] uppercase tracking-[0.18em] text-accent"
        >
          Kontakt
        </Link>
      </div>
    </nav>
  );
}
