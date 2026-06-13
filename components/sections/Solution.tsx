import { ArrowRight, MessageSquare, Calendar, Image as ImageIcon, Bell } from "lucide-react";

const FLOWS = [
  {
    icon: MessageSquare,
    label: "Facebook-poster",
    target: "Nyheter på nettsiden",
  },
  {
    icon: Calendar,
    label: "Facebook-arrangementer",
    target: "Eventkalender",
  },
  {
    icon: Bell,
    label: "Facebook-oppdateringer",
    target: "Forside-feed",
  },
  {
    icon: ImageIcon,
    label: "Facebook-bilder",
    target: "Galleri",
  },
];

export default function Solution() {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-3xl">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
            Løsningen
          </span>
          <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight md:text-5xl">
            Fortsett som før. La nettsiden ta seg av resten.
          </h2>
          <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-muted-foreground">
            Du poster på Facebook som vanlig. Nettsiden henter automatisk inn
            innholdet og presenterer det profesjonelt — strukturert, søkbart
            og lett tilgjengelig for kundene dine.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {FLOWS.map((f) => (
            <div key={f.label} className="glass rounded-2xl p-6">
              <div className="mb-4 flex size-10 items-center justify-center rounded-full bg-[#1877F2]/10">
                <f.icon className="size-4 text-[#1877F2]" />
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {f.label}
              </div>
              <div className="mt-3 flex items-center gap-2 text-accent">
                <ArrowRight className="size-3.5" />
                <span className="text-sm font-medium">{f.target}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="glass mt-10 rounded-3xl p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-[1fr_auto_1fr] md:items-center">
            <div>
              <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                Du gjør
              </div>
              <p className="text-xl font-semibold">
                Akkurat det du gjør i dag.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Poste på Facebook, dele bilder, opprette arrangementer.
              </p>
            </div>
            <div className="hidden md:block">
              <ArrowRight className="size-8 text-accent" />
            </div>
            <div>
              <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
                Du får
              </div>
              <p className="text-xl font-semibold">
                En profesjonell nettside som oppdaterer seg selv.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Ingen ekstra system. Ingen ekstra arbeid.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
