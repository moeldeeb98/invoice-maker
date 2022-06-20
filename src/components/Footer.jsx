import React from "react";
import { useTranslation } from "react-i18next";

function Footer({ name, email, phone, bankName, bankAccount, website }) {
  const { t } = useTranslation();
  return (
    <>
      <footer className="footer border-t-2 border-gray-300 pt-5">
        <ul className="flex flex-wrap items-center justify-center">
          <li>
            <span className="font-bold">{t("name")}: </span>
            {name}
          </li>
          <li>
            <span className="font-bold">{t("email")}: </span>
            {email}
          </li>
          <li>
            <span className="font-bold">{t("phone")}: </span>
            {phone}
          </li>
          <li>
            <span className="font-bold">{t("bank")}: </span>
            {bankName}
          </li>
          <li>
            <span className="font-bold">{t("account-holder")}: </span>
            {name}
          </li>
          <li>
            <span className="font-bold">{t("bank-account")}: </span>
            {bankAccount}
          </li>
          <li>
            <span className="font-bold">{t("website")}: </span>
            <a href={website} target="_blank" rel="noopenner noreferrer">
              {website}
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default Footer;
