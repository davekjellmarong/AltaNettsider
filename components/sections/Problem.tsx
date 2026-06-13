import { Clock, MapPin, Phone, Wrench, Search, Frown } from "lucide-react";

const FRUSTRATIONS = [
  {
    icon: Clock,
    title: "Hvor er åpningstidene?",
    description:
      "Begravd under uker med innlegg. Kundene gir opp og ringer ikke.",
  },
  {
    icon: Wrench,
    title: "Hva tilbyr dere egentlig?",
    description:
      "Tjenestene dine er spredt utover hundrevis av poster. Ingen oversikt.",
  },
  {
    icon: Phone,
    title: "Hvordan tar jeg kontakt?",
    description:
      "Telefonnummer og e-post er gjemt et sted i «Om»-fanen.",
  },
  {
    icon: MapPin,
    title: "Hvor ligger dere?",
    description:
      "Adressen er ikke synlig på første skjermbilde. Kunder må lete.",
  },
  {
    icon: Search,
    title: "Google finner dere ikke",
    description:
      "Facebook-sider rangerer dårlig i Google. Konkurrentene dine vinner søket.",
  },
  {
    icon: Frown,
    title: "Ser mindre seriøst ut",
    description:
      "En bedrift uten egen nettside virker mindre etablert enn de andre.",
  },
];

export default function Problem() {
  return (
    <section
      id="problem"
      className="border-y border-border bg-white/[0.015] px-6 py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-3xl">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
            Problemet
          </span>
          <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight md:text-5xl">
            Facebook er flott. Men det er ikke en nettside.
          </h2>
          <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-muted-foreground">
            Du jobber hardt, poster jevnlig og holder kundene oppdatert. Men
            den viktigste informasjonen blir borte i strømmen.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {FRUSTRATIONS.map((f) => (
            <div
              key={f.title}
              className="glass group rounded-2xl p-6 transition-colors hover:bg-white/[0.04]"
            >
              <div className="mb-4 flex size-10 items-center justify-center rounded-full bg-white/[0.04] transition-colors group-hover:bg-accent/10">
                <f.icon className="size-4 text-muted-foreground transition-colors group-hover:text-accent" />
              </div>
              <h3 className="mb-2 font-semibold">{f.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
