const FEATURES = [
  {
    title: "Lokal tilstedeværelse",
    description:
      "Jeg bor i Alta. Vi kan ta et møte over en kaffe når som helst.",
  },
  {
    title: "Personlig oppfølging",
    description:
      "Du snakker direkte med den som faktisk koder nettsiden din.",
  },
  {
    title: "Rask kommunikasjon",
    description:
      "Ingen support-tickets. Jeg svarer på telefon og e-post med en gang.",
  },
  {
    title: "Fast pris",
    description: "Ingen skjulte kostnader eller kompliserte timepriser.",
  },
];

export default function WhyDave() {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="glass flex flex-col items-center gap-12 rounded-3xl p-8 md:flex-row md:p-16">
          <div className="relative shrink-0">
            <div
              aria-hidden="true"
              className="absolute -inset-6 rounded-full bg-accent/15 blur-3xl"
            />
            <div className="relative flex size-48 items-center justify-center rounded-full border-2 border-white/10 bg-gradient-to-br from-accent/40 via-accent/20 to-background md:size-64">
              <span className="font-mono text-7xl font-bold text-white/30 md:text-8xl">
                D
              </span>
            </div>
          </div>
          <div className="flex-1">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
              Møt Dave
            </span>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight md:text-4xl">
              Ingen byrå. Ingen support-tickets. Bare meg.
            </h2>
            <div className="mt-8 grid gap-x-10 gap-y-6 sm:grid-cols-2">
              {FEATURES.map((f) => (
                <div key={f.title}>
                  <h4 className="mb-2 font-bold text-accent">{f.title}</h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
