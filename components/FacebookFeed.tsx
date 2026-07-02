import { getFacebookPosts, type FacebookPost } from "@/lib/facebook";
import { Facebook, ExternalLink } from "lucide-react";

const dateFormatter = new Intl.DateTimeFormat("nb-NO", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

function firstLine(msg: string): string {
  const line = msg.split("\n")[0];
  return line.length > 120 ? line.slice(0, 117) + "…" : line;
}

function FacebookPostCard({ post }: { post: FacebookPost }) {
  const date = dateFormatter.format(new Date(post.created_time));
  const hasImage = !!post.full_picture;
  const message = post.message?.trim();

  return (
    <a
      href={post.permalink_url}
      target="_blank"
      rel="noopener noreferrer"
      className="group glass overflow-hidden rounded-2xl transition-transform duration-500 hover:-translate-y-1"
    >
      {/* Facebook attribution bar */}
      <div className="flex items-center justify-between border-b border-white/5 bg-[#1877F2]/10 px-5 py-3">
        <div className="flex items-center gap-2">
          <div className="flex size-6 items-center justify-center rounded-full bg-[#1877F2]">
            <Facebook className="size-3.5 text-white" fill="white" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-foreground">
              AltaNettsider
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
              Innlegg fra Facebook
            </span>
          </div>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          {date}
        </span>
      </div>

      {hasImage && (
        <div className="aspect-[16/10] overflow-hidden border-b border-white/5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.full_picture}
            alt=""
            loading="lazy"
            className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </div>
      )}

      <div className="p-6">
        {message ? (
          <p className="line-clamp-6 whitespace-pre-line text-sm leading-relaxed text-foreground/90">
            {message}
          </p>
        ) : (
          <p className="text-sm italic text-muted-foreground">
            {firstLine("Se innlegget på Facebook")}
          </p>
        )}
        <div className="mt-5 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-[#1877F2]">
          Åpne på Facebook
          <ExternalLink className="size-3 transition-transform group-hover:translate-x-0.5" />
        </div>
      </div>
    </a>
  );
}

export default async function FacebookFeed({
  limit = 6,
}: {
  limit?: number;
}) {
  let posts: FacebookPost[] = [];
  let error: string | null = null;
  try {
    posts = await getFacebookPosts(limit);
  } catch (e) {
    error = e instanceof Error ? e.message : "unknown";
  }

  if (error) {
    return (
      <div className="glass rounded-2xl p-8 text-center">
        <p className="text-sm text-muted-foreground">
          Klarte ikke å hente innlegg akkurat nå.
        </p>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="glass rounded-2xl p-8 text-center">
        <p className="text-sm text-muted-foreground">
          Ingen innlegg publisert ennå.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <FacebookPostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
