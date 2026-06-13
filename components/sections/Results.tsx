import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const STATS = [
  { value: "3×", label: "flere forespørsler etter lansering" },
  { value: "92%", label: "raskere lasting enn forrige løsning" },
  { value: "14 dgr", label: "fra oppstart til live nettside" },
];

export default function Results() {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
            Resultater
          </span>
          <h2 className="mt-4 max-w-2xl text-balance text-4xl font-bold tracking-tight md:text-5xl">
            Det betyr noe for bedriften din.
          </h2>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
          {STATS.map((s) => (
            <div key={s.label} className="bg-background p-8 md:p-10">
              <div className="text-5xl font-bold tracking-tight md:text-6xl">
                {s.value}
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="glass mt-12 grid gap-10 overflow-hidden rounded-3xl p-8 md:grid-cols-[1.1fr_1fr] md:p-12">
          <div className="flex flex-col justify-between gap-8">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                Case · DinDrenering AS
              </span>
              <h3 className="mt-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">
                Fra «vi har en Facebook-side» til lokal markedsleder.
              </h3>
              <p className="mt-5 max-w-[48ch] leading-relaxed text-muted-foreground">
                Vi bygde en tydelig, mobiltilpasset nettside med klare
                tjenester, lokal SEO og enkel kontakt. Resultatet: jevn strøm
                av seriøse henvendelser fra hele Vest-Finnmark.
              </p>
            </div>
            <Link
              href="/kontakt"
              className="group inline-flex items-center gap-2 self-start font-mono text-[11px] uppercase tracking-[0.22em] text-accent"
            >
              Les hele caset
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="glass overflow-hidden rounded-xl shadow-2xl">
            <div className="flex items-center gap-3 border-b border-white/5 bg-white/[0.03] px-4 py-3">
              <div className="flex gap-1.5">
                <div className="size-2.5 rounded-full bg-white/15" />
                <div className="size-2.5 rounded-full bg-white/15" />
                <div className="size-2.5 rounded-full bg-white/15" />
              </div>
              <div className="ml-2 flex-1 truncate rounded-md bg-white/[0.04] px-3 py-1 font-mono text-[10px] tracking-wider text-muted-foreground">
                dindrenering.no
              </div>
            </div>
            <Image
              src="/dindrenering.png"
              alt="DinDrenering case"
              loading="lazy"
              width={1216}
              height={896}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
