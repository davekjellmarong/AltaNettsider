import "server-only";
import { createClient, type Entry, type EntryFieldTypes } from "contentful";

const space = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
const environment = process.env.CONTENTFUL_ENVIRONMENT || "master";

if (!space || !accessToken) {
  throw new Error(
    "Missing Contentful env vars (CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN)",
  );
}

export const contentful = createClient({
  space,
  accessToken,
  environment,
});

export type ArticleSkeleton = {
  contentTypeId: "article";
  fields: {
    title: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    excerpt?: EntryFieldTypes.Text;
    coverImage?: EntryFieldTypes.AssetLink;
    content?: EntryFieldTypes.RichText;
    publishedDate: EntryFieldTypes.Date;
    seoTitle?: EntryFieldTypes.Symbol;
    seoDescription?: EntryFieldTypes.Text;
  };
};

export type Article = Entry<ArticleSkeleton, "WITHOUT_UNRESOLVABLE_LINKS">;

// Articles are only shown on the site once they're tagged "prod" in Contentful.
// Lets us draft + publish many entries while controlling cadence (better for SEO).
const PUBLIC_TAG = "prod";

export async function getAllArticles(): Promise<Article[]> {
  const res = await contentful.withoutUnresolvableLinks.getEntries<ArticleSkeleton>({
    content_type: "article",
    "metadata.tags.sys.id[in]": [PUBLIC_TAG],
    order: ["-fields.publishedDate"],
  });
  return res.items;
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const res = await contentful.withoutUnresolvableLinks.getEntries<ArticleSkeleton>({
    content_type: "article",
    "fields.slug": slug,
    "metadata.tags.sys.id[in]": [PUBLIC_TAG],
    limit: 1,
  });
  return res.items[0] ?? null;
}

export function getCoverImageUrl(article: Article): string | null {
  const file = article.fields.coverImage?.fields?.file;
  if (!file?.url) return null;
  return file.url.startsWith("//") ? `https:${file.url}` : file.url;
}

export function getCoverImageAlt(article: Article): string {
  return (
    article.fields.coverImage?.fields?.title ||
    article.fields.coverImage?.fields?.description ||
    article.fields.title ||
    ""
  );
}
