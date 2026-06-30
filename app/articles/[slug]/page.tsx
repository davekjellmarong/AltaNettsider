import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import RichText from "@/components/RichText";
import {
  getAllArticles,
  getArticleBySlug,
  getCoverImageUrl,
  getCoverImageAlt,
} from "@/lib/contentful";

export const revalidate = 60;

export async function generateStaticParams() {
  const articles = await getAllArticles();
  return articles
    .map((a) => ({ slug: a.fields.slug as string }))
    .filter((p) => !!p.slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(decodeURIComponent(slug));
  if (!article) return { title: "Artikkel ikke funnet — AltaNettsider" };

  const title =
    article.fields.seoTitle ||
    `${article.fields.title} — AltaNettsider`;
  const description =
    article.fields.seoDescription || article.fields.excerpt || undefined;
  const cover = getCoverImageUrl(article);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      images: cover ? [{ url: cover }] : undefined,
    },
  };
}

const dateFormatter = new Intl.DateTimeFormat("nb-NO", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export default async function ArticlePage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ theme?: string }>;
}) {
  const [{ slug }, { theme }] = await Promise.all([params, searchParams]);
  const article = await getArticleBySlug(decodeURIComponent(slug));
  if (!article) notFound();
  const themeClass = theme === "light" ? "theme-light" : "";

  const cover = getCoverImageUrl(article);
  const alt = getCoverImageAlt(article);
  const date = article.fields.publishedDate
    ? dateFormatter.format(new Date(article.fields.publishedDate))
    : null;

  return (
    <div
      className={`relative min-h-screen overflow-x-clip bg-background text-foreground ${themeClass}`}
    >
      <PageBackground />
      <Navbar />

      <article className="pt-32">
        <header className="px-6 pb-12">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-accent"
            >
              <ArrowLeft className="size-3.5" />
              Alle artikler
            </Link>

            {date && (
              <div className="mt-8 font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                {date}
              </div>
            )}
            <h1 className="mt-4 text-balance text-4xl font-extrabold tracking-tighter md:text-6xl">
              {article.fields.title}
            </h1>
            {article.fields.excerpt && (
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
                {article.fields.excerpt}
              </p>
            )}
          </div>
        </header>

        {cover && (
          <div className="px-6">
            <div className="mx-auto max-w-4xl">
              <img
                src={cover}
                alt={alt}
                className="aspect-[16/9] w-full rounded-2xl border border-border object-cover"
              />
            </div>
          </div>
        )}

        <div className="px-6 py-16">
          <div className="mx-auto max-w-3xl">
            {article.fields.content ? (
              <RichText document={article.fields.content} />
            ) : (
              <p className="text-muted-foreground">Ingen innhold.</p>
            )}
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
