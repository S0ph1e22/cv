// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Importer les fichiers JSON de traduction
import frTranslation from '../src/translate/fr/translation.json'
import enTranslation from '../src/translate/en/translation.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      fr: { translation: frTranslation },
      en: { translation: enTranslation },
    },
    lng: "fr", // langue par défaut
    fallbackLng: "fr",
    interpolation: { escapeValue: false },
  });

export default i18n;
