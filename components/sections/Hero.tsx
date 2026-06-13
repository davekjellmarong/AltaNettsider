import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Facebook } from "lucide-react";

export default function Hero() {
  return (
    <section className="px-6 pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-end gap-12 lg:grid-cols-[1fr_320px]">
          <div className="max-w-[860px]">
            <span className="mb-7 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
                <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
              </span>
              For bedrifter som bruker Facebook
            </span>

            <h1 className="text-balance text-5xl font-extrabold leading-[0.95] tracking-tighter md:text-7xl lg:text-[88px]">
              Behold Facebook.{" "}
              <span className="bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent">
                Få en nettside.
              </span>
            </h1>

            <p className="mt-8 max-w-[580px] text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
              Gjør Facebook-siden din til en profesjonell nettilstedeværelse
              som hjelper kunder å finne deg, stole på deg og ta kontakt — uten
              at du må endre hvordan du jobber.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold tracking-tight text-background transition-colors duration-300 hover:bg-accent hover:text-accent-foreground"
              >
                Få et gratis forslag
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="#problem"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-transparent px-7 py-3.5 text-sm font-semibold tracking-tight text-foreground transition-colors duration-300 hover:bg-white/5"
              >
                Hvordan funker det?
              </Link>
            </div>

            <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              <span className="text-foreground">Ingen ekstra arbeid</span>
              <span>Du fortsetter på Facebook</span>
              <span>Bygd i Alta</span>
            </div>
          </div>

          <div className="glass relative overflow-hidden rounded-2xl p-1.5">
            <div className="aspect-[4/5] w-full rounded-xl bg-gradient-to-br from-accent/40 via-accent/20 to-background flex items-center justify-center">
              <span className="font-mono text-9xl font-bold text-white/20">
                D
              </span>
            </div>
            <div className="absolute bottom-3 left-3 right-3 rounded-lg bg-background/70 px-3 py-2 backdrop-blur-md">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Grunnlegger
              </div>
              <div className="text-sm font-semibold">Dave — Alta, Norge</div>
            </div>
          </div>
        </div>

        {/* Facebook → Website visual */}
        <div className="relative mt-24 md:mt-32">
          <div
            aria-hidden="true"
            className="absolute -top-32 right-0 size-[480px] animate-glow-pulse rounded-full bg-accent/15 blur-[140px]"
          />
          <div className="grid items-center gap-6 md:grid-cols-[1fr_auto_1fr]">
            {/* Facebook side */}
            <div className="glass overflow-hidden rounded-xl shadow-2xl">
              <div className="flex items-center gap-3 border-b border-white/5 bg-white/[0.03] px-4 py-3">
                <Facebook className="size-4 text-[#1877F2]" />
                <div className="font-mono text-[10px] tracking-wider text-muted-foreground">
                  facebook.com / din-bedrift
                </div>
              </div>
              <div className="space-y-3 p-6">
                <div className="h-3 w-1/2 rounded bg-white/10" />
                <div className="h-3 w-3/4 rounded bg-white/10" />
                <div className="h-20 w-full rounded bg-white/[0.04]" />
                <div className="h-3 w-2/3 rounded bg-white/10" />
                <div className="h-3 w-1/3 rounded bg-white/10" />
              </div>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex flex-col items-center gap-2">
              <ArrowRight className="size-8 text-accent" />
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent">
                automatisk
              </span>
            </div>

            {/* Website side */}
            <div className="glass glow-accent overflow-hidden rounded-xl shadow-2xl">
              <div className="flex items-center gap-3 border-b border-white/5 bg-white/[0.03] px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="size-2.5 rounded-full bg-white/15" />
                  <div className="size-2.5 rounded-full bg-white/15" />
                  <div className="size-2.5 rounded-full bg-white/15" />
                </div>
                <div className="ml-2 flex-1 truncate rounded-md bg-white/[0.04] px-3 py-1 font-mono text-[10px] tracking-wider text-muted-foreground">
                  din-bedrift.no
                </div>
              </div>
              <Image
                src="/dindrenering.png"
                alt="Forhåndsvisning av profesjonell nettside"
                width={1920}
                height={1080}
                className="aspect-video w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
