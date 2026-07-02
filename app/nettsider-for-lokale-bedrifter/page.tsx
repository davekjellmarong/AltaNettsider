import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import {
  MapPin,
  Zap,
  Wallet,
  Facebook,
  Search,
  BarChart3,
  Check,
  Star,
  Clock,
  Phone,
  ArrowRight,
} from "lucide-react";
import { STARTING_PRICE_FORMATTED, PRICING_PLANS } from "@/src/utils/pricing";

export const metadata: Metadata = {
  title: "Nettsider for lokale bedrifter i Alta og Finnmark | AltaNettsider",
  description: `Spesialist på nettsider for lokale bedrifter i Alta og Finnmark. Profesjonelle nettsider for små bedrifter - fra ${STARTING_PRICE_FORMATTED}. Gratis forslag uten forpliktelser. Kontakt Dave i dag!`,
  keywords:
    "nettsider for lokale bedrifter, nettsider Alta, nettsider Finnmark, små bedrifter nettside, lokal bedrift nettside",
  openGraph: {
    title: "Nettsider for lokale bedrifter i Alta og Finnmark",
    description: `Profesjonelle nettsider for små bedrifter - fra ${STARTING_PRICE_FORMATTED}. Gratis forslag uten forpliktelser.`,
    url: "https://altanettsider.no/nettsider-for-lokale-bedrifter",
    siteName: "AltaNettsider",
    locale: "nb_NO",
    type: "website",
  },
};

const HERO_BENEFITS = [
  {
    icon: MapPin,
    title: "Lokal ekspertise",
    description:
      "Jeg forstår lokale bedrifter i Alta og hva som fungerer for kunder i Finnmark.",
  },
  {
    icon: Zap,
    title: "Rask levering",
    description:
      "Ferdig nettside på 1-2 uker. Perfekt for lokale bedrifter som vil komme raskt i gang.",
  },
  {
    icon: Wallet,
    title: "Transparente priser",
    description: `Fra ${STARTING_PRICE_FORMATTED} for enkel nettside. Alle kostnader er klare på forhånd - ingen skjulte gebyrer.`,
  },
];

const WHY_LOCAL = [
  {
    title: "Forstår lokale bedrifter",
    body:
      "Som lokaleier i Alta forstår jeg utfordringene små bedrifter møter. Jeg vet hva som fungerer for kunder i Finnmark og hvordan man når lokale kunder online.",
  },
  {
    title: "Personlig oppfølging",
    body:
      "Når du velger en lokal utvikler får du personlig service. Vi kan møtes ansikt til ansikt, og jeg er alltid tilgjengelig for spørsmål og oppdateringer.",
  },
  {
    title: "Lokal SEO-optimalisering",
    body:
      "Jeg optimaliserer nettsiden din for lokale søk i Alta og Finnmark. Dette betyr at kunder i området lettere finner din bedrift når de søker etter tjenestene dine.",
  },
  {
    title: "Rask responstid",
    body:
      "Siden vi er i samme tidssone og geografiske område, får du rask respons på henvendelser og rask hjelp hvis noe skulle oppstå med nettsiden din.",
  },
  {
    title: "Passer sammen med Facebook",
    body:
      "De fleste bedriftene jeg jobber med bruker allerede Facebook, og det fungerer bra for dem. Nettsiden jeg lager er ikke en erstatning — den jobber ved siden av Facebook-siden din, og gjør informasjonen din synlig for kunder som ikke bruker Facebook aktivt.",
  },
];

const GMB_POINTS = [
  {
    title: "Synlig på Google Maps",
    description:
      "Kunder finner deg når de søker «frisør Alta» eller lignende.",
  },
  {
    title: "Kundeanmeldelser",
    description: "Få 5-stjernes anmeldelser som bygger tillit.",
  },
  {
    title: "Gratis markedsføring",
    description: "Del nyheter og tilbud direkte til lokale kunder.",
  },
];

const ANALYTICS_POINTS = [
  {
    title: "Hvor mange besøker nettsiden din?",
    description: "Se antall besøkende per dag, uke og måned.",
  },
  {
    title: "Hvor kommer kundene fra?",
    description: "Google, Facebook, direkte besøk eller andre nettsider.",
  },
  {
    title: "Månedlige rapporter på norsk",
    description:
      "Enkle rapporter som viser om nettsiden fungerer for bedriften din.",
  },
];

export default function NettisiderForLokaleBedrifterPage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <PageBackground />
      <Navbar />

      <div className="pt-32">
        {/* Hero */}
        <section className="px-6 pb-20">
          <div className="mx-auto max-w-4xl text-center">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
              For bedrifter som allerede bruker Facebook
            </span>
            <h1 className="mt-4 text-balance text-5xl font-extrabold tracking-tighter md:text-6xl lg:text-7xl">
              Nettsider for{" "}
              <span className="bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent">
                lokale bedrifter
              </span>{" "}
              i Alta og Finnmark
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Som spesialist på nettsider for lokale bedrifter, hjelper jeg
              små bedrifter i Alta og Finnmark med å bli synlige på nett.
              Profesjonelle nettsider som faktisk gir deg flere kunder — fra{" "}
              {STARTING_PRICE_FORMATTED}.
            </p>

            {/* Key benefits */}
            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {HERO_BENEFITS.map((b) => (
                <div key={b.title} className="glass rounded-2xl p-6 text-left">
                  <div className="mb-4 flex size-10 items-center justify-center rounded-full bg-accent/10">
                    <b.icon className="size-4 text-accent" />
                  </div>
                  <h3 className="mb-2 font-semibold">{b.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {b.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-3">
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold tracking-tight text-accent-foreground transition-colors hover:bg-accent/90 shadow-[0_10px_40px_-10px_color-mix(in_oklab,hsl(var(--accent))_50%,transparent)]"
              >
                Få gratis forslag nå
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-transparent px-7 py-3.5 text-sm font-semibold tracking-tight text-foreground transition-colors hover:bg-white/5"
              >
                Snakk med meg om eksempler
              </Link>
            </div>

            <div className="mt-12 border-t border-border pt-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                Basert i Alta, Finnmark · Personlig service til lokale bedrifter
              </p>
            </div>
          </div>
        </section>

        {/* Why choose local */}
        <section className="border-y border-border bg-white/[0.015] px-6 py-24">
          <div className="mx-auto max-w-5xl">
            <div className="mb-14 text-center">
              <h2 className="text-balance text-4xl font-bold tracking-tight md:text-5xl">
                Hvorfor velge en lokal utvikler for din bedrifts nettside?
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {WHY_LOCAL.map((item) => (
                <div key={item.title} className="glass rounded-2xl p-6">
                  <h3 className="mb-3 text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* More than a website */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 max-w-3xl text-center mx-auto">
              <h2 className="text-balance text-4xl font-bold tracking-tight md:text-5xl">
                Mer enn bare en nettside
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Vi hjelper lokale bedrifter med å bli funnet og forstå sine
                kunder gjennom kraftige Google-verktøy som de fleste ikke vet
                om.
              </p>
            </div>

            {/* Google My Business row */}
            <div className="mb-16 grid items-center gap-10 lg:grid-cols-2">
              <div>
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex size-12 items-center justify-center rounded-full bg-accent/10">
                    <MapPin className="size-5 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold">
                    Google My Business Oppsett
                  </h3>
                </div>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Mange bedrifter har en Google Maps-profil, men den er ofte
                  ikke satt opp riktig — feil åpningstider, mangler bilder,
                  eller ingen som svarer på anmeldelser. Vi setter opp og
                  optimaliserer din Google My Business-profil, så kunder
                  faktisk finner riktig informasjon når de søker i Alta.
                </p>
                <div className="mt-6 space-y-4">
                  {GMB_POINTS.map((p) => (
                    <div key={p.title} className="flex items-start gap-3">
                      <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/15">
                        <Check className="size-3 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium">{p.title}</p>
                        <p className="text-sm text-muted-foreground">
                          {p.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Google My Business mockup */}
              <div className="relative">
                <div className="glass rounded-2xl p-6">
                  <div className="mb-4 text-center">
                    <div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-full bg-accent/20 text-lg font-bold text-accent">
                      G
                    </div>
                    <h4 className="font-semibold">Eks: Din Bedrift AS</h4>
                    <div className="mt-2 flex items-center justify-center gap-2">
                      <div className="flex text-accent">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Star
                            key={i}
                            className="size-3.5"
                            fill="currentColor"
                          />
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">
                        4.8 (23 anmeldelser)
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="size-3.5 text-muted-foreground" />
                      <span className="text-foreground/90">
                        Eksempelveien 1, 9510 Alta
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="size-3.5 text-muted-foreground" />
                      <span className="text-foreground/90">
                        +47 000 00 000
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="size-3.5 text-muted-foreground" />
                      <span className="font-medium text-accent">
                        Åpent · Stenger 17:00
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-2 border-t border-border pt-4">
                    <div className="rounded-lg bg-accent/15 py-2 text-center text-sm font-medium text-accent">
                      Ring
                    </div>
                    <div className="rounded-lg border border-border py-2 text-center text-sm font-medium text-foreground">
                      Veibeskrivelse
                    </div>
                  </div>
                </div>

                <div className="absolute -right-2 -top-2 rounded-full bg-accent px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-accent-foreground">
                  Gratis!
                </div>
              </div>
            </div>

            {/* Analytics row */}
            <div className="grid items-center gap-10 lg:grid-cols-2">
              {/* Analytics mockup */}
              <div className="glass rounded-2xl p-6 lg:order-2">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold">Nettside Statistikk</h4>
                    <span className="rounded-full bg-accent/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-accent">
                      Eksempel
                    </span>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    Siste 30 dager
                  </span>
                </div>

                <div className="mb-6 grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">847</div>
                    <div className="text-xs text-muted-foreground">
                      Besøkende
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">23</div>
                    <div className="text-xs text-muted-foreground">
                      Kontakter
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">73%</div>
                    <div className="text-xs text-muted-foreground">
                      Fra Alta
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  {[
                    { label: "Google", value: 65 },
                    { label: "Direkte", value: 25 },
                    { label: "Facebook", value: 10 },
                  ].map((source) => (
                    <div key={source.label} className="flex items-center gap-2">
                      <span className="w-16 text-xs text-muted-foreground">
                        {source.label}
                      </span>
                      <div className="h-2 flex-1 rounded-full bg-white/10">
                        <div
                          className="h-2 rounded-full bg-accent"
                          style={{ width: `${source.value}%` }}
                        />
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {source.value}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:order-1">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex size-12 items-center justify-center rounded-full bg-accent/10">
                    <BarChart3 className="size-5 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold">
                    Google Analytics &amp; Rapporter
                  </h3>
                </div>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Få innsikt i hvem som besøker nettsiden din. Vi setter opp
                  Google Analytics og sender deg månedlige rapporter på norsk
                  som viser hvor mange kunder du får fra nettsiden.
                </p>
                <div className="mt-6 space-y-4">
                  {ANALYTICS_POINTS.map((p) => (
                    <div key={p.title} className="flex items-start gap-3">
                      <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/15">
                        <Check className="size-3 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium">{p.title}</p>
                        <p className="text-sm text-muted-foreground">
                          {p.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom "Inkludert" callout */}
            <div className="mt-16 text-center">
              <div className="glass mx-auto max-w-3xl rounded-3xl p-10">
                <h3 className="text-xl font-semibold">
                  Inkludert i alle pakker fra {PRICING_PLANS[1].name} (
                  {PRICING_PLANS[1].price} kr)
                </h3>
                <p className="mt-4 text-muted-foreground">
                  Google My Business oppsett og Analytics er inkludert uten
                  ekstra kostnad. Vi hjelper deg å forstå og forbedre din
                  online tilstedeværelse.
                </p>
                <Link
                  href="/kontakt"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold tracking-tight text-accent-foreground transition-colors hover:bg-accent/90"
                >
                  Få gratis forslag på komplett pakke
                  <ArrowRight className="size-4" />
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
