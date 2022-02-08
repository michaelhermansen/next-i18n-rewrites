const i18nRouting = (config) => {
  const { locales, defaultLocale, routes } = config;
  const nonDefaultLocales = locales.filter((loc) => loc !== defaultLocale);

  const generateRewrites = () => {
    const rewrites = [];

    nonDefaultLocales.forEach((loc) => {
      routes.forEach((route) => {
        rewrites.push({
          source: `/${loc + route[loc]}`,
          destination: `/${loc + route.default}`,
          locale: false,
        });
      });
    });

    return rewrites;
  };

  const generateRedirects = () => {
    const redirects = [];

    nonDefaultLocales.forEach((loc) => {
      routes.forEach((route) => {
        if (!route[loc]) return;
        redirects.push({
          source: `/${loc + route.default}`,
          destination: `/${loc + route[loc]}`,
          locale: false,
          permanent: false,
        });
      });
    });

    return redirects;
  };

  const getAlias = (path = "", locale = "") => {
    const indexRoute = { default: "/" };
    const route = routes.find((route) => route.default === path) || indexRoute;
    return route[locale] || route.default;
  };

  const rewrites = generateRewrites();
  const redirects = generateRedirects();

  return {
    locales,
    defaultLocale,
    rewrites,
    redirects,
    getAlias,
  };
};

module.exports = i18nRouting;
