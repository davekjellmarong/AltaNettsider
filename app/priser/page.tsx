import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import PriceCard from "@/components/PriceCard";
import { ShoppingCart, Calendar, Users, Crown, ArrowRight } from "lucide-react";
import {
  PRICING_PLANS,
  ADDITIONAL_SERVICES,
  STARTING_PRICE,
} from "@/src/utils/pricing";

export const metadata: Metadata = {
  title: "Hva koster en nettside? — Priser for lokale bedrifter | AltaNettsider",
  description: `Enkle, faste priser for lokale bedrifter i Alta som bruker Facebook i dag. Fra ${STARTING_PRICE} kr. Ingen skjulte kostnader.`,
  keywords:
    "nettside pris Alta, nettside for lokale bedrifter Alta, hva koster en nettside, nettside fast pris, liten bedrift nettside Finnmark",
  openGraph: {
    title: "Hva koster en nettside? — Priser for lokale bedrifter",
    description: `Enkle, faste priser for lokale bedrifter i Alta. Fra ${STARTING_PRICE} kr, uten skjulte kostnader.`,
    url: "https://altanettsider.no/priser",
    type: "website",
  },
};

const ADVANCED = [
  {
    icon: ShoppingCart,
    title: "E-handel",
    description:
      "Nettbutikk med betalingsløsninger, produktkatalog og ordrehåndtering.",
  },
  {
    icon: Calendar,
    title: "Booking & Reservasjon",
    description:
      "Online booking-system for tjenester, timer og arrangementer.",
  },
  {
    icon: Users,
    title: "Kundeportaler",
    description: "Innloggingsområder, medlemssider og kundedatabaser.",
  },
];

const FAQ = [
  {
    q: "Hvordan fungerer prissettingen?",
    a: "Jeg lager alltid et skreddersydd tilbud basert på dine spesifikke behov og ønsker. Prisene over er veiledende startpriser for hver kategori.",
  },
  {
    q: "Hva er inkludert?",
    a: "Alle pakker inkluderer design, utvikling, testing og lansering. Hosting og domene tilbys som separate tjenester eller kan inkluderes i avtalen.",
  },
  {
    q: "Kan løsningen utvides senere?",
    a: "Absolutt! Jeg bygger nettsider som kan vokse med bedriften din. Du kan enkelt legge til nye funksjoner og sider etter behov.",
  },
  {
    q: "Tilbyr du vedlikehold?",
    a: "Jeg tilbyr fleksible vedlikeholdsavtaler tilpasset ditt behov og budsjett. Ta kontakt for å diskutere mulighetene.",
  },
];

export default function PricingPage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <PageBackground />
      <Navbar />

      <div className="pt-32">
        {/* Hero */}
        <section className="px-6 pb-16">
          <div className="mx-auto max-w-4xl text-center">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
              Transparente priser
            </span>
            <h1 className="mt-4 text-balance text-5xl font-extrabold tracking-tighter md:text-6xl lg:text-7xl">
              Priser for{" "}
              <span className="bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent">
                profesjonelle nettsider.
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Jeg tilpasser løsningene til dine behov og budsjett. Her får du
              en oversikt over mine hovedpakker for nettsider til lokale
              bedrifter i Alta og Finnmark.
            </p>
          </div>
        </section>

        {/* Pricing cards */}
        <section className="px-6 pb-24">
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
            {PRICING_PLANS.map((plan) => (
              <PriceCard key={plan.id} plan={plan} />
            ))}
          </div>
        </section>

        {/* Advanced solutions */}
        <section className="border-y border-border bg-white/[0.015] px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                Avanserte løsninger
              </span>
              <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight md:text-5xl">
                Trenger du noe mer?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
                Jeg kan skreddersy løsninger for alle behov. Kontakt meg for
                et tilpasset tilbud.
              </p>
            </div>

            <div className="mb-12 grid gap-6 md:grid-cols-3">
              {ADVANCED.map((a) => (
                <div
                  key={a.title}
                  className="glass rounded-2xl p-8 text-center"
                >
                  <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-accent/10">
                    <a.icon className="size-5 text-accent" />
                  </div>
                  <h3 className="mb-2 font-bold">{a.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {a.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="glass mx-auto max-w-2xl rounded-3xl border-accent/20 p-10 text-center">
              <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-accent/15">
                <Crown className="size-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold">Skreddersydde løsninger</h3>
              <p className="mt-4 text-muted-foreground">
                Har du spesielle behov eller ønsker en helt unik løsning? Jeg
                utvikler skreddersydde nettsider og webapplikasjoner tilpasset
                akkurat din virksomhet.
              </p>
              <Link
                href="/kontakt"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold tracking-tight text-accent-foreground transition-colors hover:bg-accent/90"
              >
                Kontakt meg for tilbud
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Additional services */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                Tilleggstjenester
              </span>
              <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight md:text-5xl">
                Komplett digital tilstedeværelse.
              </h2>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Alle priser på forespørsel
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {ADDITIONAL_SERVICES.map((service, i) => (
                <div
                  key={i}
                  className="glass rounded-2xl p-6 transition-colors hover:bg-white/[0.04]"
                >
                  <h3 className="font-semibold">{service.name}</h3>
                  {service.description && (
                    <p className="mt-2 text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 pb-24">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                FAQ
              </span>
              <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight md:text-5xl">
                Ofte stilte spørsmål.
              </h2>
            </div>

            <div className="space-y-4">
              {FAQ.map((item) => (
                <div key={item.q} className="glass rounded-2xl p-6">
                  <h3 className="text-lg font-semibold">{item.q}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-6 pb-32">
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
                Klar for å komme i gang?
              </h2>
              <p className="relative mx-auto mt-5 max-w-md text-muted-foreground">
                La meg bygge den perfekte nettsiden for din bedrift i Alta.
              </p>
              <div className="relative mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold tracking-tight text-accent-foreground transition-colors hover:bg-accent/90 shadow-[0_10px_40px_-10px_color-mix(in_oklab,hsl(var(--accent))_50%,transparent)]"
                >
                  Start ditt prosjekt
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/nettsider-for-lokale-bedrifter"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-transparent px-7 py-3.5 text-sm font-semibold tracking-tight text-foreground transition-colors hover:bg-white/5"
                >
                  Les mer om tjenestene
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
