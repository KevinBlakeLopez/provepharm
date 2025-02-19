const { withFaust, getWpHostname } = require("@faustwp/core");
// console.log("getWpHostname():", getWpHostname());

const ContentSecurityPolicy = `script-src ${
  process.env.PRODUCTION
    ? "'self' https://www.googletagmanager.com/ 'nonce-2726c7f26c';"
    : "'unsafe-eval'"
} img-src 'self' https://provepharm.wpengine.com/ data:; font-src 'self' https://fonts.googleapis.com/ https://fonts.gstatic.com/;`;

const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  // {
  //   key: "X-Frame-Options",
  //   value: "SAMEORIGIN",
  // },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
  },
];

/**
 * @type {import('next').NextConfig}
 **/
module.exports = withFaust({
  reactStrictMode: true,
  sassOptions: {
    includePaths: ["node_modules"],
  },
  images: {
    domains: [getWpHostname()],
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
});
