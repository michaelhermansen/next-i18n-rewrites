const i18nRouting = require("./i18n-routing");

const config = {
  locales: ["no", "en", "de"],
  defaultLocale: "no",
  routes: [
    {
      default: "/om-oss",
      en: "/about",
      de: "/uber-uns",
    },
    {
      default: "/blogg/:slug",
      en: "/blog/:slug",
      de: "/bloggen/:slug",
    },
  ],
};

const i18n = i18nRouting(config);

module.exports = { ...i18n };
