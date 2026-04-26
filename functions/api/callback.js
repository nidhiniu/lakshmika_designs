function getSiteOrigin(request, env) {
  if (env.DECAP_SITE_URL) {
    return env.DECAP_SITE_URL.replace(/\/+$/, "");
  }
  const url = new URL(request.url);
  return `${url.protocol}//${url.host}`;
}

function renderCompleteHtml(token) {
  const tokenJson = JSON.stringify(token);

  return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>CMS Login Complete</title>
  </head>
  <body>
    <script>
      (function () {
        function receiveMessage(event) {
          window.opener.postMessage(
            "authorization:github:success:" + JSON.stringify({ token: ${tokenJson}, provider: "github" }),
            event.origin
          );
          window.removeEventListener("message", receiveMessage, false);
          window.close();
        }

        window.addEventListener("message", receiveMessage, false);
        window.opener.postMessage("authorizing:github", "*");
      })();
    </script>
    <p>Login complete. You can close this window.</p>
  </body>
</html>`;
}

export async function onRequestGet(context) {
  const { request, env } = context;
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");

  if (!code) {
    return new Response("Missing OAuth code.", { status: 400 });
  }

  const clientId = env.GITHUB_OAUTH_CLIENT_ID || env.GITHUB_CLIENT_ID;
  const clientSecret = env.GITHUB_OAUTH_CLIENT_SECRET || env.GITHUB_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return new Response(
      JSON.stringify({
        error: "Decap OAuth setup error",
        message:
          "Missing GitHub OAuth credentials. Set GITHUB_OAUTH_CLIENT_ID and GITHUB_OAUTH_CLIENT_SECRET in Cloudflare Pages environment variables.",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  const siteOrigin = getSiteOrigin(request, env);
  const redirectUri = `${siteOrigin}/api/callback`;
  const tokenResponse = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      code,
      redirect_uri: redirectUri,
    }),
  });

  const tokenData = await tokenResponse.json();
  if (!tokenResponse.ok || tokenData.error || !tokenData.access_token) {
    return new Response(
      JSON.stringify({
        error: "GitHub OAuth token exchange failed",
        details: tokenData,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  return new Response(renderCompleteHtml(tokenData.access_token), {
    status: 200,
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
