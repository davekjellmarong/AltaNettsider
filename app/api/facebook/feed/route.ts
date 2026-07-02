import { NextResponse } from "next/server";
import { getFacebookPosts } from "@/lib/facebook";

// GET /api/facebook/feed?limit=10
// Server-side proxy to Meta Graph API. Token never touches the browser.
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limit = Number(searchParams.get("limit") ?? "10");

  try {
    const posts = await getFacebookPosts(limit);
    return NextResponse.json(
      { posts },
      { headers: { "Cache-Control": "s-maxage=600, stale-while-revalidate" } },
    );
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "unknown" },
      { status: 500 },
    );
  }
}
