"use client";

import Link from "next/link";
import posthog from "posthog-js";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

export default function ContactCta() {
  return (
    <section id="kontakt" className="px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <div className="glass relative overflow-hidden rounded-[28px] p-12 text-center md:p-24">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage:
                "radial-gradient(600px 300px at 20% 100%, color-mix(in oklab, hsl(var(--accent)) 35%, transparent), transparent 60%), radial-gradient(500px 300px at 80% 0%, color-mix(in oklab, hsl(var(--accent)) 20%, transparent), transparent 70%)",
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          <h2 className="relative text-balance text-5xl font-extrabold tracking-tighter md:text-7xl">
            Klar for en nettside som jobber for deg?
          </h2>
          <p className="relative mx-auto mt-8 max-w-lg text-lg text-muted-foreground md:text-xl">
            Behold Facebook. Få en nettside som henter inn alt du allerede
            poster og presenterer det profesjonelt.
          </p>

          <div className="relative mt-12 flex flex-wrap justify-center gap-4">
            <Link
              href="/kontakt"
              onClick={() =>
                posthog.capture("hero_cta_clicked", {
                  location: "home_contact_cta",
                  cta: "start_project",
                })
              }
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold tracking-tight text-accent-foreground transition-colors duration-300 hover:bg-accent/90 shadow-[0_10px_40px_-10px_color-mix(in_oklab,hsl(var(--accent))_50%,transparent)]"
            >
              Få et gratis forslag
              <ArrowRight className="size-4" />
            </Link>
            <a
              href="tel:+4746807041"
              onClick={() =>
                posthog.capture("contact_phone_clicked", {
                  location: "home_contact_cta",
                })
              }
              className="inline-flex items-center gap-2 rounded-full border border-border bg-transparent px-7 py-3.5 text-sm font-semibold tracking-tight text-foreground transition-colors duration-300 hover:bg-white/5"
            >
              Ring Dave direkte
            </a>
          </div>

          <div className="relative mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <Mail className="size-3.5" />
              kontakt@altanettsider.no
            </span>
            <span className="inline-flex items-center gap-2">
              <Phone className="size-3.5" />
              +47 468 07 041
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="size-3.5" />
              Alta, Norge
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
