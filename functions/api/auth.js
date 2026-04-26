function getSiteOrigin(request, env) {
  if (env.DECAP_SITE_URL) {
    return env.DECAP_SITE_URL.replace(/\/+$/, "");
  }
  const url = new URL(request.url);
  return `${url.protocol}//${url.host}`;
}

export async function onRequestGet(context) {
  const { request, env } = context;
  const clientId = env.GITHUB_OAUTH_CLIENT_ID || env.GITHUB_CLIENT_ID;

  if (!clientId) {
    return new Response(
      JSON.stringify({
        error: "Decap OAuth setup error",
        message:
          "Missing GITHUB_OAUTH_CLIENT_ID (or GITHUB_CLIENT_ID) in Cloudflare Pages environment variables.",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  const requestUrl = new URL(request.url);
  const siteOrigin = getSiteOrigin(request, env);
  const redirectUri = `${siteOrigin}/api/callback`;
  const scope = requestUrl.searchParams.get("scope") || "repo";
  const state = crypto.randomUUID();

  const authorizeUrl = new URL("https://github.com/login/oauth/authorize");
  authorizeUrl.searchParams.set("client_id", clientId);
  authorizeUrl.searchParams.set("redirect_uri", redirectUri);
  authorizeUrl.searchParams.set("scope", scope);
  authorizeUrl.searchParams.set("state", state);

  return Response.redirect(authorizeUrl.toString(), 302);
}
