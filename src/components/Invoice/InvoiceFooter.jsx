import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

function InvoiceFooter() {
  const { t } = useTranslation();
  const { sender } = useSelector((state) => state.InvoiceReducer);
  return (
    <>
      <footer className="footer border-t-2 border-gray-300 pt-5">
        <ul className="flex flex-wrap items-center justify-center">
          <li>
            <span className="font-bold">{t("name")}: </span>
            {sender.name}
          </li>
          <li>
            <span className="font-bold">{t("email")}: </span>
            {sender.email}
          </li>
          <li>
            <span className="font-bold">{t("phone")}: </span>
            {sender.phone}
          </li>
          <li>
            <span className="font-bold">{t("bank")}: </span>
            {sender.bankName}
          </li>
          <li>
            <span className="font-bold">{t("account-holder")}: </span>
            {sender.name}
          </li>
          <li>
            <span className="font-bold">{t("bank-account")}: </span>
            {sender.bankAccount}
          </li>
          <li>
            <span className="font-bold">{t("website")}: </span>
            <a href={sender.website} target="_blank" rel="noopenner noreferrer">
              {sender.website}
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default InvoiceFooter;
