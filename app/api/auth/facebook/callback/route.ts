import { NextResponse } from "next/server";

// Called by Facebook after the user grants permission.
// Exchanges the short-lived code -> long-lived User Token -> Page Access Token.
export async function GET(request: Request) {
  const appId = process.env.FACEBOOK_APP_ID;
  const appSecret = process.env.FACEBOOK_APP_SECRET;
  const pageId = process.env.FACEBOOK_PAGE_ID;
  const redirectUri = "http://localhost:3000/api/auth/facebook/callback";

  if (!appId || !appSecret || !pageId) {
    return NextResponse.json(
      { error: "Missing FACEBOOK_APP_ID / FACEBOOK_APP_SECRET / FACEBOOK_PAGE_ID" },
      { status: 500 },
    );
  }

  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  const error = searchParams.get("error");
  const errorDescription = searchParams.get("error_description");

  if (error) {
    return NextResponse.json(
      { error, error_description: errorDescription },
      { status: 400 },
    );
  }
  if (!code) {
    return NextResponse.json({ error: "Missing code" }, { status: 400 });
  }

  try {
    // Step 1: exchange authorization code for a short-lived User Token.
    const shortTokenUrl = new URL(
      "https://graph.facebook.com/v18.0/oauth/access_token",
    );
    shortTokenUrl.searchParams.set("client_id", appId);
    shortTokenUrl.searchParams.set("client_secret", appSecret);
    shortTokenUrl.searchParams.set("redirect_uri", redirectUri);
    shortTokenUrl.searchParams.set("code", code);
    const shortRes = await fetch(shortTokenUrl.toString());
    const shortData = await shortRes.json();
    if (!shortRes.ok) return NextResponse.json({ step: "short_token", ...shortData }, { status: shortRes.status });
    const shortUserToken = shortData.access_token as string;

    // Step 2: exchange short-lived User Token for a long-lived (~60 day) User Token.
    const longTokenUrl = new URL(
      "https://graph.facebook.com/v18.0/oauth/access_token",
    );
    longTokenUrl.searchParams.set("grant_type", "fb_exchange_token");
    longTokenUrl.searchParams.set("client_id", appId);
    longTokenUrl.searchParams.set("client_secret", appSecret);
    longTokenUrl.searchParams.set("fb_exchange_token", shortUserToken);
    const longRes = await fetch(longTokenUrl.toString());
    const longData = await longRes.json();
    if (!longRes.ok) return NextResponse.json({ step: "long_token", ...longData }, { status: longRes.status });
    const longUserToken = longData.access_token as string;

    // Step 3: fetch the Page Access Token (never expires for admin pages).
    const pagesUrl = new URL(
      `https://graph.facebook.com/v18.0/me/accounts`,
    );
    pagesUrl.searchParams.set("access_token", longUserToken);
    const pagesRes = await fetch(pagesUrl.toString());
    const pagesData = await pagesRes.json();
    if (!pagesRes.ok) return NextResponse.json({ step: "pages", ...pagesData }, { status: pagesRes.status });

    const page = pagesData.data?.find((p: { id: string }) => p.id === pageId);
    if (!page) {
      return NextResponse.json(
        {
          step: "pages",
          error: `Page ${pageId} not in your admin list`,
          pages: pagesData.data?.map((p: { id: string; name: string }) => ({
            id: p.id,
            name: p.name,
          })),
        },
        { status: 404 },
      );
    }

    // Return the token as text so you can copy it into .env.local
    return new NextResponse(
      `SUCCESS — copy this into .env.local:\n\nFACEBOOK_PAGE_ACCESS_TOKEN=${page.access_token}\n\nPage: ${page.name} (${page.id})\nTasks: ${JSON.stringify(page.tasks)}\n`,
      { headers: { "Content-Type": "text/plain; charset=utf-8" } },
    );
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : String(e) },
      { status: 500 },
    );
  }
}
