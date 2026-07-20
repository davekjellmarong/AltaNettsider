import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageBackground from "@/components/PageBackground";
import { MapPin, Phone, MessageSquare, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title:
    "Om AltaNettsider — Dave, Alta | Nettsider for lokale bedrifter i Alta",
  description:
    "Dave lager nettsider for lokale bedrifter i Alta som allerede bruker Facebook. Personlig service, faste priser, ingen agency-språk.",
  keywords:
    "AltaNettsider Dave, om AltaNettsider, nettside utvikler Alta, lokal nettsideutvikler Alta, nettside for lokale bedrifter Alta",
  openGraph: {
    title: "Om AltaNettsider — Dave, Alta",
    description:
      "Dave lager nettsider for lokale bedrifter i Alta som allerede bruker Facebook. Personlig service, faste priser, ingen agency-språk.",
    url: "https://altanettsider.no/om",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <PageBackground />
      <Navbar />

      <div className="pt-32">
        {/* Hero */}
        <section className="px-6 pb-16">
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
              Om AltaNettsider
            </span>
            <h1 className="mt-4 text-balance text-5xl font-extrabold tracking-tighter md:text-6xl">
              Dave — Alta, Norge.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Jeg lager{" "}
              <Link
                href="/nettsider-for-lokale-bedrifter"
                className="text-foreground underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
              >
                nettsider for lokale bedrifter i Alta
              </Link>{" "}
              — særlig bedrifter som allerede bruker Facebook og lurer på om
              det er nok.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="border-y border-border bg-white/[0.015] px-6 py-24">
          <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              Jeg er utvikler. Bodde sørpå hele livet før jeg flyttet til Alta
              for ni måneder siden. Det er kanskje også derfor jeg så mønsteret
              med en gang — lokale bedrifter her som bruker Facebook som
              nettsiden sin, fordi det var det de allerede kunne.
            </p>
            <p>
              Jeg har bygd nettsider profesjonelt i flere år, både for større
              selskaper og mindre bedrifter. Nå har jeg satt det opp slik at
              jeg kan ta én og én lokal kunde av gangen — og gjøre det
              skikkelig.
            </p>
            <p>
              Det betyr at vi kan møtes over en kaffe i Alta, eller jeg kjører
              innom verkstedet ditt. Du snakker direkte med den som koder
              nettsiden. Ingen support-portal, ingen prosjektleder, ingen
              ticket-system — fordi det finnes ingen andre enn meg.
            </p>
            <p className="text-foreground">
              Jeg svarer på telefon. Jeg sender ikke faktura før du er fornøyd.
            </p>
          </div>
        </section>

        {/* What I stand for */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-5xl">
            <div className="mb-14 text-center">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                Slik jobber jeg
              </span>
              <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight md:text-5xl">
                Enkelt, lokalt, ærlig.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="glass rounded-2xl p-6">
                <div className="mb-4 flex size-10 items-center justify-center rounded-full bg-accent/10">
                  <MapPin className="size-4 text-accent" />
                </div>
                <h3 className="mb-2 font-semibold">Basert i Alta</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Jeg bor og jobber i Alta, Finnmark. Møt meg over en kaffe,
                  eller ta en tur innom verkstedet ditt. Ikke telefonmøte med
                  Oslo.
                </p>
              </div>

              <div className="glass rounded-2xl p-6">
                <div className="mb-4 flex size-10 items-center justify-center rounded-full bg-accent/10">
                  <Phone className="size-4 text-accent" />
                </div>
                <h3 className="mb-2 font-semibold">Personlig oppfølging</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Én person svarer telefonen — meg. Ingen support-portal, ingen
                  ticket-system. Du får svar samme dag.
                </p>
              </div>

              <div className="glass rounded-2xl p-6">
                <div className="mb-4 flex size-10 items-center justify-center rounded-full bg-accent/10">
                  <MessageSquare className="size-4 text-accent" />
                </div>
                <h3 className="mb-2 font-semibold">Ingen agency-språk</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Ingen "digital tilstedeværelse" eller "omni-channel
                  strategi". Bare praktisk snakk om hva bedriften din trenger.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-4xl">
            <div className="glass relative overflow-hidden rounded-3xl p-12 text-center md:p-16">
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    "radial-gradient(500px 200px at 50% 100%, color-mix(in oklab, hsl(var(--accent)) 30%, transparent), transparent 70%)",
                }}
              />
              <h2 className="relative text-balance text-4xl font-extrabold tracking-tighter md:text-5xl">
                Ta en prat.
              </h2>
              <p className="relative mx-auto mt-5 max-w-md text-muted-foreground">
                Uforpliktende. Fortell meg om bedriften din, så tar vi det
                derfra.
              </p>
              <div className="relative mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold tracking-tight text-accent-foreground transition-colors hover:bg-accent/90 shadow-[0_10px_40px_-10px_color-mix(in_oklab,hsl(var(--accent))_50%,transparent)]"
                >
                  Få et gratis forslag
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/nettsider-for-lokale-bedrifter"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-transparent px-7 py-3.5 text-sm font-semibold tracking-tight text-foreground transition-colors hover:bg-white/5"
                >
                  Nettsider for lokale bedrifter i Alta
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
