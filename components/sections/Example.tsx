import { Facebook } from "lucide-react";
import FacebookFeed from "@/components/FacebookFeed";
import FacebookPagePlugin from "@/components/FacebookPagePlugin";

const ALTA_FB_URL = "https://www.facebook.com/1190767890785896";

export default function Example() {
  return (
    <section className="relative px-6 py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 mx-auto h-[600px] max-w-4xl -translate-y-1/2 rounded-full bg-accent/10 blur-[160px]"
      />

      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-20 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
              <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
            </span>
            Live-demo — Facebook-innlegg
          </span>
          <h2 className="mt-6 text-balance text-4xl font-bold tracking-tight md:text-5xl">
            Se det jobbe — akkurat her.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Alt du ser under er{" "}
            <span className="text-foreground">
              live innlegg fra min egen Facebook-side
            </span>
            , hentet inn og vist på denne nettsiden. Din bedrift kan få det
            samme — i to forskjellige stiler.
          </p>
        </div>

        {/* Approach 1 — Live iframe */}
        <div className="mb-24">
          <div className="mb-8 flex items-baseline justify-between gap-4">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                Metode 1
              </div>
              <h3 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
                Facebook sitt eget innebyggingsverktøy
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Enkleste løsning — Facebook viser innleggene i sitt eget
                design. Rask å sette opp, men bruker Facebook sitt utseende.
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-2xl">
            <div className="glass overflow-hidden rounded-2xl shadow-2xl">
              <div className="flex items-center gap-3 border-b border-white/5 bg-white/[0.03] px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="size-2.5 rounded-full bg-white/15" />
                  <div className="size-2.5 rounded-full bg-white/15" />
                  <div className="size-2.5 rounded-full bg-white/15" />
                </div>
                <div className="ml-2 flex-1 truncate rounded-md bg-white/[0.04] px-3 py-1 font-mono text-[10px] tracking-wider text-muted-foreground">
                  altanettsider.no
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-accent">
                  <Facebook className="size-3" />
                  Live
                </span>
              </div>
              <div className="flex justify-center bg-white p-4 md:p-6">
                <FacebookPagePlugin
                  pageUrl={ALTA_FB_URL}
                  width={500}
                  height={560}
                  tabs="timeline"
                  smallHeader
                  hideCover
                />
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-16 flex items-center gap-4">
          <div className="h-px flex-1 bg-border" />
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            Samme innlegg — annen presentasjon
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Approach 2 — Custom-styled */}
        <div>
          <div className="mb-8 flex items-baseline justify-between gap-4">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                Metode 2
              </div>
              <h3 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
                Skreddersydd design — del av nettsiden
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Vi henter inn de samme Facebook-innleggene og viser dem i
                nettsidens eget design. Samme innhold, men det ser ut som en
                naturlig del av bedriften din — ikke en Facebook-widget i
                hjørnet.
              </p>
            </div>
          </div>

          <FacebookFeed limit={6} />
        </div>

        <p className="mx-auto mt-16 max-w-2xl text-center text-sm text-muted-foreground">
          Begge metodene henter innhold fra samme Facebook-side, live. Du
          poster på Facebook som vanlig — nettsiden viser det fram.
        </p>
      </div>
    </section>
  );
}
