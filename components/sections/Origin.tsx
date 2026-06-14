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

        <div className="mt-12 rounded-2xl border border-accent/20 bg-accent/[0.04] p-8">
          <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
            Slik begynte det
          </div>
          <p className="text-base leading-relaxed text-muted-foreground">
            Jeg satt på kafé i Alta i fjor høst og snakket med en venn som
            driver en liten lokal bedrift. Hun sa noe sånt som:{" "}
            <span className="text-foreground">
              «Jeg trenger en nettside, men jeg har ikke tid til å oppdatere
              noe nytt sted. Jeg poster på Facebook hver dag — kan ikke
              nettsiden bare vise det?»
            </span>
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Jeg hadde hørt nesten det samme fra fem-seks andre i løpet av kort
            tid. Rørleggeren. Kaféen. Idrettsklubben. Alle elsket Facebook.
            Ingen ville bytte system. Alle visste at de tapte kunder fordi
            informasjon var umulig å finne.
          </p>
          <p className="mt-4 text-base leading-relaxed text-foreground">
            Da skiftet AltaNettsider fokus.
          </p>
        </div>
      </div>
    </section>
  );
}
