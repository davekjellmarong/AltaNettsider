const STEPS = [
  {
    n: "01",
    title: "Gratis forslag",
    description:
      "Vi tar en prat om dine behov, og jeg utarbeider et uforpliktende forslag og prisoverslag.",
  },
  {
    n: "02",
    title: "Design & utvikling",
    description:
      "Jeg bygger nettsiden din fra bunnen av med fokus på hastighet, design og brukervennlighet.",
  },
  {
    n: "03",
    title: "Lansering & drift",
    description:
      "Vi går live. Jeg sørger for at alt fungerer som det skal, og hjelper deg med videre vedlikehold.",
  },
];

export default function Process() {
  return (
    <section id="prosess" className="border-t border-border px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
            Prosess
          </span>
          <h2 className="mt-4 max-w-2xl text-balance text-4xl font-bold tracking-tight md:text-5xl">
            Veien til din nye nettside.
          </h2>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {STEPS.map((s) => (
            <div
              key={s.n}
              className="glass group relative h-full overflow-hidden rounded-2xl p-8"
            >
              <span className="absolute right-6 top-5 font-mono text-5xl font-bold text-white/[0.06] transition-colors group-hover:text-accent/30">
                {s.n}
              </span>
              <div className="relative">
                <div className="mb-6 flex size-10 items-center justify-center rounded-full border border-accent/30 bg-accent/5 font-mono text-xs text-accent">
                  {s.n}
                </div>
                <h3 className="mb-3 text-lg font-bold">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
