import {
  Facebook,
  Clock,
  MapPin,
  Phone,
  Calendar,
  Image as ImageIcon,
  ArrowRight,
} from "lucide-react";

export default function Example() {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-3xl">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
            Eksempel
          </span>
          <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight md:text-5xl">
            Slik ser det ut i praksis.
          </h2>
          <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-muted-foreground">
            Et eksempel med en fiktiv kafé. Til venstre: Facebook-siden hvor
            alt ligger i én lang strøm. Til høyre: den samme informasjonen,
            strukturert på en egen nettside.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
          {/* Facebook side */}
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden">
            <div className="flex items-center gap-3 border-b border-white/5 bg-white/[0.03] px-4 py-3">
              <Facebook className="size-4 text-[#1877F2]" />
              <div className="font-mono text-[10px] tracking-wider text-muted-foreground">
                facebook.com / kafe-eksempel
              </div>
            </div>

            <div className="p-5 space-y-4">
              {/* Profile header */}
              <div className="flex items-center gap-3">
                <div className="size-12 rounded-full bg-white/10" />
                <div className="flex-1">
                  <div className="h-3 w-32 rounded bg-white/15" />
                  <div className="mt-2 h-2 w-20 rounded bg-white/10" />
                </div>
              </div>

              {/* Post 1 */}
              <div className="rounded-lg border border-white/5 bg-white/[0.02] p-4">
                <div className="mb-2 h-2 w-24 rounded bg-white/10" />
                <p className="text-xs text-muted-foreground italic">
                  "Bursdagshilsen til Kari! 🎂"
                </p>
                <div className="mt-2 h-16 rounded bg-white/[0.03]" />
              </div>

              {/* Post 2 */}
              <div className="rounded-lg border border-white/5 bg-white/[0.02] p-4">
                <div className="mb-2 h-2 w-24 rounded bg-white/10" />
                <p className="text-xs text-muted-foreground italic">
                  "Husk konsert på lørdag! 🎶"
                </p>
              </div>

              {/* Post 3 - meny */}
              <div className="rounded-lg border border-accent/30 bg-accent/[0.04] p-4">
                <div className="mb-2 flex items-center justify-between">
                  <div className="h-2 w-24 rounded bg-accent/30" />
                  <span className="font-mono text-[9px] uppercase tracking-wider text-accent">
                    Meny — bilde fra mars
                  </span>
                </div>
                <p className="text-xs text-muted-foreground italic">
                  "Sjekk ut ukens lunsj 🥗"
                </p>
                <div className="mt-2 h-16 rounded bg-white/[0.03]" />
              </div>

              {/* Post 4 */}
              <div className="rounded-lg border border-white/5 bg-white/[0.02] p-4">
                <div className="mb-2 h-2 w-24 rounded bg-white/10" />
                <p className="text-xs text-muted-foreground italic">
                  "Stengt mandag pga vannlekkasje 💧"
                </p>
              </div>
            </div>

            <div className="border-t border-white/5 bg-white/[0.02] px-5 py-3">
              <p className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
                Kunden lurer på: hvor finner jeg åpningstidene?
              </p>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex items-center justify-center lg:flex-col">
            <ArrowRight className="size-8 text-accent lg:hidden" />
            <div className="hidden lg:flex flex-col items-center gap-2">
              <ArrowRight className="size-8 text-accent" />
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent text-center">
                samme info
                <br />
                strukturert
              </span>
            </div>
          </div>

          {/* Website side */}
          <div className="glass glow-accent rounded-2xl overflow-hidden">
            <div className="flex items-center gap-3 border-b border-white/5 bg-white/[0.03] px-4 py-3">
              <div className="flex gap-1.5">
                <div className="size-2.5 rounded-full bg-white/15" />
                <div className="size-2.5 rounded-full bg-white/15" />
                <div className="size-2.5 rounded-full bg-white/15" />
              </div>
              <div className="ml-2 flex-1 truncate rounded-md bg-white/[0.04] px-3 py-1 font-mono text-[10px] tracking-wider text-muted-foreground">
                kafe-eksempel.no
              </div>
            </div>

            <div className="p-5 space-y-4">
              {/* Hero */}
              <div>
                <div className="h-4 w-3/4 rounded bg-white/20" />
                <div className="mt-2 h-2 w-1/2 rounded bg-white/10" />
              </div>

              {/* Hours card */}
              <div className="rounded-lg border border-accent/20 bg-accent/[0.04] p-4">
                <div className="mb-3 flex items-center gap-2">
                  <Clock className="size-3.5 text-accent" />
                  <span className="font-mono text-[10px] uppercase tracking-wider text-accent">
                    Åpningstider
                  </span>
                </div>
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Man–Fre</span>
                    <span className="text-foreground">08–17</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Lør</span>
                    <span className="text-foreground">10–15</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Søn</span>
                    <span className="text-foreground">Stengt</span>
                  </div>
                </div>
              </div>

              {/* Menu */}
              <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
                <div className="mb-3 flex items-center gap-2">
                  <ImageIcon className="size-3.5 text-accent" />
                  <span className="font-mono text-[10px] uppercase tracking-wider text-accent">
                    Ukens meny
                  </span>
                </div>
                <div className="space-y-1.5">
                  <div className="h-2 w-full rounded bg-white/10" />
                  <div className="h-2 w-5/6 rounded bg-white/10" />
                  <div className="h-2 w-2/3 rounded bg-white/10" />
                </div>
              </div>

              {/* Events */}
              <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
                <div className="mb-3 flex items-center gap-2">
                  <Calendar className="size-3.5 text-accent" />
                  <span className="font-mono text-[10px] uppercase tracking-wider text-accent">
                    Kommende arrangementer
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="size-1.5 rounded-full bg-accent" />
                    <div className="h-2 w-3/4 rounded bg-white/10" />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="size-1.5 rounded-full bg-accent" />
                    <div className="h-2 w-2/3 rounded bg-white/10" />
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="grid grid-cols-2 gap-2">
                <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
                  <Phone className="mb-2 size-3.5 text-accent" />
                  <div className="h-2 w-full rounded bg-white/10" />
                </div>
                <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
                  <MapPin className="mb-2 size-3.5 text-accent" />
                  <div className="h-2 w-full rounded bg-white/10" />
                </div>
              </div>
            </div>

            <div className="border-t border-accent/20 bg-accent/[0.04] px-5 py-3">
              <p className="font-mono text-[9px] uppercase tracking-wider text-accent">
                Kunden finner alt på 5 sekunder ✓
              </p>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted-foreground">
          Du fortsetter å poste på Facebook akkurat som før. Nettsiden plukker
          ut det viktigste — åpningstider, meny, arrangementer, kontakt — og
          viser det skikkelig.
        </p>
      </div>
    </section>
  );
}
