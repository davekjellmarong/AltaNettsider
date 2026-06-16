export default function Origin() {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-3xl">
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
          Hvorfor AltaNettsider finnes
        </span>
        <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight md:text-5xl">
          De fleste byråer bygger for bedrifter som allerede har en nettside.
        </h2>
        <p className="mt-6 text-2xl font-semibold text-foreground/90">
          Jeg bygger for de som ikke har det.
        </p>

        <div className="mt-10 space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            Frisøren som har 1 400 følgere på Facebook men ikke kommer opp i
            Google. Kaféen hvor menyen er en bilde-post fra mars.
            Fotballklubben som mister medlemmer fordi kampoppsettet ligger
            begravd under tre uker med innlegg.
          </p>
          <p>
            Disse bedriftene trenger ikke en marketing-stack. De trenger en
            nettside som henter inn det de allerede gjør på Facebook, og viser
            det fram skikkelig.
          </p>
          <p className="text-foreground">
            Det er hele AltaNettsider.
          </p>
        </div>

      </div>
    </section>
  );
}
