import { NextResponse } from "next/server";

// Redirects to Facebook's OAuth consent screen.
// Visit http://localhost:3000/api/auth/facebook to start the flow.
export async function GET() {
  const appId = process.env.FACEBOOK_APP_ID;
  if (!appId) {
    return NextResponse.json(
      { error: "FACEBOOK_APP_ID not set" },
      { status: 500 },
    );
  }

  const redirectUri = "http://localhost:3000/api/auth/facebook/callback";
  const scopes = [
    "pages_show_list",
    "pages_read_engagement",
    "pages_read_user_content",
  ].join(",");

  const url = new URL("https://www.facebook.com/v18.0/dialog/oauth");
  url.searchParams.set("client_id", appId);
  url.searchParams.set("redirect_uri", redirectUri);
  url.searchParams.set("scope", scopes);
  url.searchParams.set("response_type", "code");

  return NextResponse.redirect(url.toString());
}
