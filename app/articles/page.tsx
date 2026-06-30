import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import {
  getAllArticles,
  getCoverImageUrl,
  getCoverImageAlt,
} from "@/lib/contentful";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Artikler — AltaNettsider",
  description:
    "Tanker, tips og refleksjoner om nettsider for lokale bedrifter i Alta og Norge.",
};

const dateFormatter = new Intl.DateTimeFormat("nb-NO", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export default async function ArticlesPage({
  searchParams,
}: {
  searchParams: Promise<{ theme?: string }>;
}) {
  const [{ theme }, articles] = await Promise.all([
    searchParams,
    getAllArticles(),
  ]);
  const themeClass = theme === "light" ? "theme-light" : "";

  return (
    <div
      className={`relative min-h-screen overflow-x-clip bg-background text-foreground ${themeClass}`}
    >
      <PageBackground />
      <Navbar />

      <div className="pt-32">
        <section className="px-6 pb-16">
          <div className="mx-auto max-w-5xl">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
              Artikler
            </span>
            <h1 className="mt-4 text-balance text-5xl font-extrabold tracking-tighter md:text-6xl">
              Tanker fra arbeidet.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Refleksjoner, mønstre og praktiske tips fra arbeidet med
              nettsider for lokale bedrifter.
            </p>
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="mx-auto max-w-5xl">
            {articles.length === 0 ? (
              <div className="glass rounded-3xl p-12 text-center">
                <p className="text-muted-foreground">
                  Ingen artikler publisert ennå. Kom tilbake snart.
                </p>
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2">
                {articles.map((article) => {
                  const cover = getCoverImageUrl(article);
                  const alt = getCoverImageAlt(article);
                  const date = article.fields.publishedDate
                    ? dateFormatter.format(
                        new Date(article.fields.publishedDate),
                      )
                    : null;
                  return (
                    <Link
                      key={article.sys.id}
                      href={`/articles/${article.fields.slug}`}
                      className="group glass overflow-hidden rounded-2xl transition-transform duration-500 hover:-translate-y-1"
                    >
                      {cover && (
                        <div className="aspect-[16/9] overflow-hidden border-b border-white/5">
                          <img
                            src={cover}
                            alt={alt}
                            className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                            loading="lazy"
                          />
                        </div>
                      )}
                      <div className="p-6">
                        {date && (
                          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                            {date}
                          </div>
                        )}
                        <h2 className="mt-3 text-xl font-bold leading-snug transition-colors group-hover:text-accent">
                          {article.fields.title}
                        </h2>
                        {article.fields.excerpt && (
                          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                            {article.fields.excerpt}
                          </p>
                        )}
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
