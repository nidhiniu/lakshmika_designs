const { createHandlers } = require("netlify-cms-oauth-provider-node");

function trimSlash(value) {
  return value ? value.replace(/\/+$/, "") : value;
}

function getRequestOrigin(event) {
  const proto = event.headers["x-forwarded-proto"] || "https";
  const host = event.headers["x-forwarded-host"] || event.headers.host;
  return `${proto}://${host}`;
}

function getOAuthConfig(event) {
  const siteOrigin = trimSlash(process.env.DECAP_SITE_URL || getRequestOrigin(event));
  const oauthClientID =
    process.env.GITHUB_OAUTH_CLIENT_ID ||
    process.env.GITHUB_CLIENT_ID ||
    process.env.OAUTH_CLIENT_ID;
  const oauthClientSecret =
    process.env.GITHUB_OAUTH_CLIENT_SECRET ||
    process.env.GITHUB_CLIENT_SECRET ||
    process.env.OAUTH_CLIENT_SECRET;

  if (!oauthClientID || !oauthClientSecret) {
    throw new Error(
      "Missing GitHub OAuth credentials. Set GITHUB_OAUTH_CLIENT_ID and GITHUB_OAUTH_CLIENT_SECRET in Netlify environment variables."
    );
  }

  return {
    origin: [siteOrigin, "http://localhost:5173"],
    completeUrl: `${siteOrigin}/api/callback`,
    adminPanelUrl: `${siteOrigin}/admin/index.html`,
    oauthProvider: "github",
    oauthClientID,
    oauthClientSecret,
  };
}

exports.handler = async (event) => {
  try {
    const handlers = createHandlers(getOAuthConfig(event), { useEnv: false });
    const requestPath = (event.path || "").toLowerCase();

    if (requestPath.endsWith("/api/callback")) {
      const code = event.queryStringParameters?.code || null;
      const html = await handlers.complete(code, event.queryStringParameters || {});

      return {
        statusCode: 200,
        headers: { "Content-Type": "text/html; charset=utf-8" },
        body: html,
      };
    }

    const authorizationUri = await handlers.begin();
    return {
      statusCode: 302,
      headers: { Location: authorizationUri },
      body: "",
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        error: "Decap OAuth setup error",
        message: error.message,
      }),
    };
  }
};
