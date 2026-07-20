import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import {
  Globe,
  Server,
  BarChart3,
  Search,
  MapPin,
  ShoppingCart,
  Calendar,
  Mail,
  Camera,
  Palette,
  FileText,
  Settings,
  Headphones,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Hva du får når jeg bygger nettsiden din — for lokale bedrifter i Alta | AltaNettsider",
  description:
    "For lokale bedrifter i Alta som bruker Facebook i dag. Her er alt som er inkludert — enkel oversikt, ingen tekniske omveier.",
  keywords:
    "nettside for lokale bedrifter Alta, nettside for liten bedrift, nettside for Facebook-side, hva er inkludert i en nettside, nettside Alta enkel pris",
  openGraph: {
    title: "Hva du får når jeg bygger nettsiden din",
    description:
      "Enkel oversikt over alt som er inkludert når jeg lager nettside for lokale bedrifter i Alta.",
    url: "https://altanettsider.no/tjenester",
    type: "website",
  },
};

interface Service {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const groups: {
  heading: string;
  intro: string;
  services: Service[];
}[] = [
  {
    heading: "Selve nettsiden",
    intro:
      "En profesjonell nettside som ser bra ut på både mobil og PC, og er lett å bruke.",
    services: [
      {
        title: "En egen nettside",
        description:
          "Bygd for din bedrift — ikke en mal du kjenner igjen fra andre. Fungerer like fint på mobil som PC, laster raskt, og er enkel å bruke.",
        icon: Globe,
      },
      {
        title: "Din egen adresse på nett",
        description:
          "Jeg tar meg av domenet (adressen kundene skriver inn — som «dinbedrift.no»). Du eier det, jeg fikser oppsettet.",
        icon: Search,
      },
      {
        title: "Nettsiden holdes online",
        description:
          "Sikkerhetskopier, SSL-sertifikat og oppetid — alt inkludert. Du trenger ikke tenke på teknikken.",
        icon: Server,
      },
    ],
  },
  {
    heading: "Så kunder faktisk finner deg",
    intro:
      "Google, Facebook, Google-kartet. Vi gjør det slik at folk i Alta finner bedriften din når de leter.",
    services: [
      {
        title: "Synlig i Google og på Google-kartet",
        description:
          "Google My Business settes opp med åpningstider, kontakt og bilder — så folk som søker «frisør i Alta» eller «rørlegger Alta» finner deg.",
        icon: MapPin,
      },
      {
        title: "Facebook-innleggene dine på nettsiden",
        description:
          "Poster du på Facebook som vanlig? Bra. Innleggene dine kan vises automatisk på nettsiden — du gjør ingenting ekstra.",
        icon: Globe,
      },
      {
        title: "Enkle rapporter — se hva som faktisk skjer",
        description:
          "Hvor mange besøker nettsiden? Hvor kommer de fra? Kort, forståelig oppsummering — ikke Google Analytics-labyrint.",
        icon: BarChart3,
      },
    ],
  },
  {
    heading: "Så kundene kan ta kontakt",
    intro: "En nettside skal gjøre det enkelt for folk å ringe, skrive eller bestille.",
    services: [
      {
        title: "Kontaktskjema",
        description:
          "Kunder fyller ut skjemaet på nettsiden, du får meldingen rett i innboksen. Ingen ekstra pålogging.",
        icon: Mail,
      },
      {
        title: "Kunder kan bestille tid selv",
        description:
          "Hvis du booker inn kunder (frisør, terapeut, verksted) — de kan reservere direkte på nettsiden. Slipper ringing og SMS-ping-pong.",
        icon: Calendar,
      },
      {
        title: "Nettbutikk hvis du selger noe",
        description:
          "Selger du produkter? Full nettbutikk med Vipps og kortbetaling. (Ikke inkludert i grunnpakken — se «Priser».)",
        icon: ShoppingCart,
      },
    ],
  },
  {
    heading: "Så det ser ordentlig ut",
    intro:
      "Trenger du logo eller ordentlige bilder først? Vi kan ordne det som en del av samme prosjekt.",
    services: [
      {
        title: "Logo",
        description:
          "Enkelt, gjenkjennelig logo som passer bedriften din. Får det i alle filformatene du trenger.",
        icon: Palette,
      },
      {
        title: "Bilder av bedriften",
        description:
          "Har du gode bilder allerede? Bruker vi dem. Ellers kan jeg hjelpe deg få tatt bilder som passer.",
        icon: Camera,
      },
      {
        title: "Tekst som er lett å lese",
        description:
          "Jeg skriver om det er nødvendig, eller pusser opp teksten du har. Skal være tydelig — ikke fyllstoff.",
        icon: FileText,
      },
    ],
  },
  {
    heading: "Så du ikke sitter alene med det etterpå",
    intro: "Nettsiden er ikke ferdig når den er live. Jeg er her når du trenger meg.",
    services: [
      {
        title: "Vedlikehold — jeg tar det tekniske",
        description:
          "Sikkerhet, oppdateringer, sikkerhetskopier. Du merker aldri at det gjøres. Nettsiden bare fungerer.",
        icon: Settings,
      },
      {
        title: "Du snakker direkte med meg",
        description:
          "Ingen support-portal. Ingen ticket-system. Ring, send SMS, e-post, eller ta en kaffe. Jeg svarer.",
        icon: Headphones,
      },
    ],
  },
];

const process = [
  {
    step: "1",
    title: "Vi tar en prat",
    description:
      "Uforpliktende. Jeg spør om bedriften din, du forteller hva du trenger.",
  },
  {
    step: "2",
    title: "Du får et forslag",
    description:
      "Konkret pris, konkret leveringstid, konkret hva som er inkludert. Ingen overraskelser.",
  },
  {
    step: "3",
    title: "Jeg bygger",
    description:
      "Vanligvis 1–2 uker. Du får se det underveis, ikke bare til slutt.",
  },
  {
    step: "4",
    title: "Vi går live",
    description:
      "Jeg fikser lansering og lærer deg opp om det er noe du vil kunne endre selv.",
  },
];

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <PageBackground />
      <Navbar />

      <div className="pt-32">
        {/* Hero */}
        <section className="px-6 pb-16">
          <div className="mx-auto max-w-4xl text-center">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
              Hva du får
            </span>
            <h1 className="mt-4 text-balance text-5xl font-extrabold tracking-tighter md:text-6xl lg:text-7xl">
              Alt som er inkludert{" "}
              <span className="bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent">
                når jeg bygger nettsiden din.
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Ingen tekniske omveier. Ingen skjulte moduler du må kjøpe
              senere. Her er hva du faktisk får når jeg bygger nettside for
              en lokal bedrift i Alta — særlig hvis du bruker Facebook i dag
              og vil ha en profesjonell nettside i tillegg.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground">
              Sammenlign gjerne med{" "}
              <Link
                href="/nettsider-for-lokale-bedrifter"
                className="text-foreground underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
              >
                oversikten over nettsider for lokale bedrifter i Alta
              </Link>{" "}
              — samme sak, mer om selve fordelene ved en lokal utvikler.
            </p>
          </div>
        </section>

        {/* Grouped services */}
        <section className="px-6 pb-24">
          <div className="mx-auto max-w-6xl space-y-16">
            {groups.map((group) => (
              <div key={group.heading}>
                <div className="mb-10 max-w-2xl">
                  <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
                    {group.heading}
                  </h2>
                  <p className="mt-3 text-muted-foreground">{group.intro}</p>
                </div>

                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {group.services.map((service) => (
                    <div
                      key={service.title}
                      className="glass rounded-2xl p-6"
                    >
                      <div className="mb-4 flex size-10 items-center justify-center rounded-full bg-accent/10">
                        <service.icon className="size-4 text-accent" />
                      </div>
                      <h3 className="mb-2 font-semibold">{service.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="border-y border-border bg-white/[0.015] px-6 py-24">
          <div className="mx-auto max-w-5xl">
            <div className="mb-14 text-center">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                Slik jobber jeg
              </span>
              <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight md:text-5xl">
                Fra første prat til ferdig nettside.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-4">
              {process.map((item) => (
                <div key={item.step} className="glass rounded-2xl p-6">
                  <div className="mb-4 flex size-10 items-center justify-center rounded-full border border-accent/30 bg-accent/5 font-mono text-xs text-accent">
                    {item.step}
                  </div>
                  <h3 className="mb-2 font-semibold">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
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
                Klar for å se hva som passer?
              </h2>
              <p className="relative mx-auto mt-5 max-w-md text-muted-foreground">
                Uforpliktende prat, konkret forslag innen 24 timer.
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
                  href="/priser"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-transparent px-7 py-3.5 text-sm font-semibold tracking-tight text-foreground transition-colors hover:bg-white/5"
                >
                  Se priser
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
