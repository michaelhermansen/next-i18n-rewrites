const { locales, defaultLocale, rewrites, redirects } = require("./lib/i18n");

module.exports = {
  reactStrictMode: true,
  i18n: { locales, defaultLocale },
  rewrites: async () => [...rewrites],
  redirects: async () => [...redirects],
};
