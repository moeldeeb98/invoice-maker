import React from "react";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div>
      <button onClick={() => changeLang("en")}>en</button>
      <br />
      <button onClick={() => changeLang("ar")}>ar</button>
      <br />
      {t("title")}
    </div>
  );
}

export default App;
