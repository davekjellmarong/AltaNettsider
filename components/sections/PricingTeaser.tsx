import Link from "next/link";
import { Check } from "lucide-react";

const FEATURES = [
  "Skreddersydd design — ingen maler",
  "Mobil- og søkemotoroptimalisert",
  "Kontaktskjema, Google Maps & Analytics",
  "Personlig opplæring i administrasjon",
  "Hosting og drift inkludert første år",
];

export default function PricingTeaser() {
  return (
    <section id="pris" className="px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
            Pris
          </span>
          <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight md:text-5xl">
            Enkel og transparent.
          </h2>
          <p className="mx-auto mt-5 max-w-md text-muted-foreground">
            En komplett, profesjonell nettside tilpasset din lokale bedrift.
          </p>
        </div>

        <div className="glass mt-14 overflow-hidden rounded-3xl p-10 md:p-14">
          <div className="grid items-center gap-10 md:grid-cols-[1fr_auto]">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                Profesjonell nettside — fra
              </div>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-6xl font-bold tracking-tight md:text-7xl">
                  14 900,–
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  eks. mva
                </span>
              </div>
              <ul className="mt-8 space-y-3 text-sm">
                {FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-stretch gap-3 md:items-end">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-semibold tracking-tight text-accent-foreground transition-colors duration-300 hover:bg-accent/90 shadow-[0_10px_40px_-10px_color-mix(in_oklab,hsl(var(--accent))_50%,transparent)]"
              >
                Be om tilbud
              </Link>
              <span className="text-center font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground md:text-right">
                Uforpliktende · svar innen 24t
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/priser"
            className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground hover:text-accent"
          >
            Se alle pakker →
          </Link>
        </div>
      </div>
    </section>
  );
}
