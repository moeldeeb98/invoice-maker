import React from "react";
import { useTranslation } from "react-i18next";

function RecipientInfo({
  clientName,
  setClientName,
  clientAddress,
  setClientAddress,
}) {
  const { t } = useTranslation();
  return (
    <>
      <article className="md:grid grid-cols-2 gap-10 md:mt-16">
        <div className="flex flex-col">
          <label htmlFor="clientName">{t("client-name")}</label>
          <input
            type="text"
            name="clientName"
            id="clientName"
            placeholder={t("client-name")}
            autoComplete="off"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="clientAddress">{t("client-address")}</label>
          <input
            type="text"
            name="clientAddress"
            id="clientAddress"
            placeholder={t("client-address")}
            autoComplete="off"
            value={clientAddress}
            onChange={(e) => setClientAddress(e.target.value)}
          />
        </div>
      </article>
    </>
  );
}

export default RecipientInfo;
