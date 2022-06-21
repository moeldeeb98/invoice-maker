import React from "react";
import { useTranslation } from "react-i18next";

function SenderInfo({
  name,
  setName,
  address,
  setAddress,
  email,
  setEmail,
  phone,
  setPhone,
  website,
  setWebsite,
  bankName,
  setBankName,
  bankAccount,
  setBankAccount,
}) {
  const { t } = useTranslation();
  return (
    <>
      <article className="md:grid grid-cols-2 gap-10">
        <div className="flex flex-col">
          <label htmlFor="name">{t("full-name")}</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder={t("full-name")}
            autoComplete="off"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="address">{t("address")}</label>
          <input
            type="text"
            name="address"
            id="address"
            placeholder={t("address")}
            autoComplete="off"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
      </article>

      <article className="md:grid grid-cols-3 gap-10">
        <div className="flex flex-col">
          <label htmlFor="email">{t("email")}</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder={t("email")}
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="phone">{t("phone")}</label>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder={t("phone")}
            autoComplete="off"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="website">{t("website")}</label>
          <input
            type="url"
            name="website"
            id="website"
            placeholder={t("website")}
            autoComplete="off"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>
      </article>

      <article className="md:grid grid-cols-2 gap-10">
        <div className="flex flex-col">
          <label htmlFor="bankName">{t("bank-name")}</label>
          <input
            type="text"
            name="bankName"
            id="bankName"
            placeholder={t("bank-name")}
            autoComplete="off"
            value={bankName}
            onChange={(e) => setBankName(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="bankAccount">{t("bank-account")}</label>
          <input
            type="text"
            name="bankAccount"
            id="bankAccount"
            placeholder={t("bank-account")}
            autoComplete="off"
            value={bankAccount}
            onChange={(e) => setBankAccount(e.target.value)}
          />
        </div>
      </article>
    </>
  );
}

export default SenderInfo;
