import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translation files
import en from "./locales/en.json";
import es from "./locales/es.json";
import bg from "./locales/bg.json";

const resources = {
  en: {
    translation: en,
  },
  es: {
    translation: es,
  },
  bg: {
    translation: bg,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default language
    fallbackLng: "en",
    debug: false,

    interpolation: {
      escapeValue: false, // react already does escaping
    },

    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },
  });

export default i18n;
