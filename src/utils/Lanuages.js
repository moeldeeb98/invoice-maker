import i18n from "i18next";

export default {
  en: {
    code: "en",
    country_code: "us",
    name: "English",
  },
  ar: {
    code: "ar",
    country_code: "eg",
    name: "العربية",
  },
};

export const ChangeLang = (lang) => {
  i18n.changeLanguage(lang);
};
