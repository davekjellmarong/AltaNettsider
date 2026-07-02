import "server-only";

const GRAPH_VERSION = "v25.0";
const GRAPH_BASE = `https://graph.facebook.com/${GRAPH_VERSION}`;

export interface FacebookPost {
  id: string;
  message?: string;
  created_time: string;
  full_picture?: string;
  permalink_url: string;
}

interface GraphResponse {
  data: FacebookPost[];
  paging?: { cursors?: { before?: string; after?: string } };
  error?: { message: string; type: string; code: number };
}

/**
 * Fetch published posts from a Facebook Page via the Graph API.
 * Cached and revalidated every 10 minutes so Netlify/Vercel don't hammer
 * Meta on every request but posts feel fresh.
 */
export async function getFacebookPosts(limit = 10): Promise<FacebookPost[]> {
  const token = process.env.FB_PAGE_ACCESS_TOKEN;
  const pageId = process.env.FACEBOOK_PAGE_ID;
  if (!token) throw new Error("FB_PAGE_ACCESS_TOKEN not set");
  if (!pageId) throw new Error("FACEBOOK_PAGE_ID not set");

  const url = new URL(`${GRAPH_BASE}/${pageId}/posts`);
  url.searchParams.set(
    "fields",
    "id,message,created_time,full_picture,permalink_url",
  );
  url.searchParams.set("limit", String(limit));
  url.searchParams.set("access_token", token);

  const res = await fetch(url.toString(), {
    next: { revalidate: 600 }, // 10 min cache
  });

  const data = (await res.json()) as GraphResponse;
  if (!res.ok || data.error) {
    throw new Error(
      `Facebook Graph API error: ${data.error?.message || res.statusText}`,
    );
  }
  return data.data;
}
