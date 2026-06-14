export default function WhyDave() {
  return (
    <section className="border-y border-border bg-white/[0.015] px-6 py-28">
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
              Mannen bak
            </span>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight md:text-4xl">
              Dave — Alta
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                Jeg er utvikler, oppvokst i Nord-Norge, bor i Alta. Har bygd
                nettsider profesjonelt siden 2020 — først for større selskaper
                lenger sør, nå for bedrifter her hjemme.
              </p>
              <p>
                Når jeg sier «her hjemme» mener jeg det bokstavelig. Vi kan
                møtes over en kaffe, eller jeg kjører innom verkstedet ditt.
                Du snakker direkte med den som faktisk koder nettsiden. Det
                finnes ingen support-portal, ingen prosjektleder, ingen
                ticket-system — fordi det finnes ingen andre enn meg.
              </p>
              <p className="text-foreground">
                Jeg svarer på telefon. Jeg sender ikke faktura før du er
                fornøyd.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
