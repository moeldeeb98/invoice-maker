import React from "react";
import { useTranslation } from "react-i18next";

function Dates({ invoiceNumber, invoiceDate, dueDate }) {
  const { t } = useTranslation();
  return (
    <>
      <article className="mt-10 mb-14 flex items-end justify-end">
        <ul>
          <li className="p-1">
            <span className="font-bold">{t("invoice-number")}: </span>
            {invoiceNumber}
          </li>
          <li className="p-1 bg-gray-100">
            <span className="font-bold">{t("invoice-date")}: </span>
            {invoiceDate}
          </li>
          <li className="p-1">
            <span className="font-bold">{t("due-date")}: </span>
            {dueDate}
          </li>
        </ul>
      </article>
    </>
  );
}

export default Dates;
