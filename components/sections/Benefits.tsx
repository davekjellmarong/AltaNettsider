import { Sparkles, Search, Compass, Heart, Zap } from "lucide-react";

const BENEFITS = [
  {
    icon: Sparkles,
    title: "Mer profesjonell",
    description:
      "En egen nettside signaliserer at bedriften din er etablert og seriøs.",
  },
  {
    icon: Search,
    title: "Enklere å finne",
    description:
      "Google rangerer nettsider høyere enn Facebook-sider. Kundene finner deg først.",
  },
  {
    icon: Compass,
    title: "Enklere å navigere",
    description:
      "Åpningstider, tjenester og kontakt — alt på ett sted, alltid synlig.",
  },
  {
    icon: Heart,
    title: "Bedre førsteinntrykk",
    description:
      "Nye kunder møter en strukturert nettside, ikke en kaotisk tidslinje.",
  },
  {
    icon: Zap,
    title: "Ingen ekstra arbeid",
    description:
      "Du fortsetter på Facebook. Nettsiden tar seg av visningen automatisk.",
  },
];

export default function Benefits() {
  return (
    <section className="border-y border-border bg-white/[0.015] px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-3xl">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
            Fordeler
          </span>
          <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight md:text-5xl">
            Hva får du egentlig?
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b) => (
            <div key={b.title} className="glass rounded-2xl p-6">
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
      </div>
    </section>
  );
}
