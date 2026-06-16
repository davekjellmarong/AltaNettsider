import { Check, X, Facebook } from "lucide-react";

const BEFORE = [
  "Kun Facebook",
  "Informasjon begravd i strømmen",
  "Vanskelig å finne åpningstider",
  "Lite synlig i Google",
  "Ser mindre seriøs ut",
];

const AFTER = [
  "Facebook + egen nettside",
  "All info strukturert og synlig",
  "Åpningstider, tjenester og kontakt på forsiden",
  "Topp av Google-søket lokalt",
  "Profesjonelt førsteinntrykk",
];

export default function BeforeAfter() {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-3xl">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
            Før / Etter
          </span>
          <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight md:text-5xl">
            Samme bedrift. Bedre tilstedeværelse.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Before */}
          <div className="rounded-3xl border border-white/5 bg-white/[0.02] p-8 md:p-10">
            <div className="mb-6 flex items-center gap-3">
              <Facebook className="size-5 text-[#1877F2]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                Før — kun Facebook
              </span>
            </div>
            <ul className="space-y-3">
              {BEFORE.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <X className="mt-0.5 size-4 shrink-0 text-red-400/70" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="glass glow-accent rounded-3xl p-8 md:p-10">
            <div className="mb-6 flex items-center gap-3">
              <Facebook className="size-5 text-[#1877F2]" />
              <span className="text-accent">+</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
                Etter — Facebook + nettside
              </span>
            </div>
            <ul className="space-y-3">
              {AFTER.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
