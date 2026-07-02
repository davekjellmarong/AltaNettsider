import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import FacebookPagePlugin from "@/components/FacebookPagePlugin";

const PAGE = "https://www.facebook.com/61591782830560";

const VARIANTS = [
  {
    label: "1. Default",
    description: "cover on · big header · timeline · facepile off",
    props: {
      pageUrl: PAGE,
      width: 500,
      height: 620,
      tabs: "timeline" as const,
      smallHeader: false,
      hideCover: false,
      showFacepile: false,
    },
  },
  {
    label: "2. Compact — no cover, small header",
    description: "cover hidden · small header · timeline",
    props: {
      pageUrl: PAGE,
      width: 500,
      height: 620,
      tabs: "timeline" as const,
      smallHeader: true,
      hideCover: true,
      showFacepile: false,
    },
  },
  {
    label: "3. Cover on, small header",
    description: "cover shown · small header · timeline",
    props: {
      pageUrl: PAGE,
      width: 500,
      height: 620,
      tabs: "timeline" as const,
      smallHeader: true,
      hideCover: false,
      showFacepile: false,
    },
  },
  {
    label: "4. With facepile",
    description: "cover on · big header · facepile shown",
    props: {
      pageUrl: PAGE,
      width: 500,
      height: 620,
      tabs: "timeline" as const,
      smallHeader: false,
      hideCover: false,
      showFacepile: true,
    },
  },
  {
    label: "5. Narrower",
    description: "width 340 · small header · no cover",
    props: {
      pageUrl: PAGE,
      width: 340,
      height: 620,
      tabs: "timeline" as const,
      smallHeader: true,
      hideCover: true,
      showFacepile: false,
    },
  },
  {
    label: "6. Events tab",
    description: "events tab instead of timeline",
    props: {
      pageUrl: PAGE,
      width: 500,
      height: 620,
      tabs: "events" as const,
      smallHeader: true,
      hideCover: true,
      showFacepile: false,
    },
  },
];

export default function EmbedLabPage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <PageBackground />
      <Navbar />

      <div className="pt-32 pb-24">
        <section className="px-6 pb-12">
          <div className="mx-auto max-w-4xl">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
              Embed lab
            </span>
            <h1 className="mt-4 text-balance text-4xl font-extrabold tracking-tighter md:text-5xl">
              Facebook Page Plugin — variants
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Comparing configuration options for the Facebook Page Plugin so
              we can pick the best fit for the home page.
            </p>
          </div>
        </section>

        <section className="px-6">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 lg:grid-cols-3">
            {VARIANTS.map((v) => (
              <div key={v.label} className="flex flex-col">
                <div className="mb-4">
                  <h2 className="font-bold">{v.label}</h2>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    {v.description}
                  </p>
                </div>
                <div className="glass overflow-hidden rounded-2xl">
                  <div className="flex items-center gap-2 border-b border-white/5 bg-white/[0.03] px-3 py-2">
                    <div className="flex gap-1">
                      <div className="size-2 rounded-full bg-white/15" />
                      <div className="size-2 rounded-full bg-white/15" />
                      <div className="size-2 rounded-full bg-white/15" />
                    </div>
                  </div>
                  <div className="flex justify-center bg-white p-3">
                    <FacebookPagePlugin {...v.props} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
