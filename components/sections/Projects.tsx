import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const PROJECTS = [
  {
    domain: "minihjorne.no",
    title: "Minihjørne",
    tagline: "E-handel & merkevarebygging",
    description:
      "En digital butikkflate som fanger sjelen til den lokale nisjebutikken.",
    image: "/minihjorne.png",
  },
  {
    domain: "dindrenering.no",
    title: "DinDrenering AS",
    tagline: "Leadgenerering & SEO",
    description:
      "Fra usynlig til markedsledende i lokalområdet med tydelige tjenester og rask kontakt.",
    image: "/dindrenering.png",
  },
];

export default function Projects() {
  return (
    <section id="prosjekter" className="border-y border-border px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="max-w-md text-balance text-4xl font-bold tracking-tight md:text-5xl">
              Ekte bedrifter. Ekte resultater.
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Lokale bedrifter i Alta som gikk fra Facebook-side til
              profesjonell nettilstedeværelse.
            </p>
          </div>
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            Utvalgte prosjekter / 02
          </span>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {PROJECTS.map((p) => (
            <Link key={p.domain} href="/kontakt" className="group block">
              <div className="glass overflow-hidden rounded-xl shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
                <div className="flex items-center gap-3 border-b border-white/5 bg-white/[0.03] px-4 py-3">
                  <div className="flex gap-1.5">
                    <div className="size-2.5 rounded-full bg-white/15" />
                    <div className="size-2.5 rounded-full bg-white/15" />
                    <div className="size-2.5 rounded-full bg-white/15" />
                  </div>
                  <div className="ml-2 flex-1 truncate rounded-md bg-white/[0.04] px-3 py-1 font-mono text-[10px] tracking-wider text-muted-foreground">
                    {p.domain}
                  </div>
                </div>
                <div className="overflow-hidden">
                  <Image
                    src={p.image}
                    alt={`Forhåndsvisning av ${p.title}`}
                    loading="lazy"
                    width={1216}
                    height={896}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
              </div>
              <div className="mt-6 flex items-end justify-between">
                <div>
                  <h3 className="text-xl font-bold">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {p.tagline}
                  </p>
                </div>
                <ArrowRight className="size-4 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-accent" />
              </div>
              <p className="mt-3 max-w-[44ch] text-sm text-muted-foreground">
                {p.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
