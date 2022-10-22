import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import LanguageDetector from 'i18next-browser-languagedetector';

import de from '../locales/de';
import en from '../locales/en';


i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    debug: false,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    resources: {
      de,
      en
    }
  });


export default i18n;