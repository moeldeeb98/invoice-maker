import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

function Dates() {
  const { t } = useTranslation();
  const { core } = useSelector((state) => state.InvoiceReducer);
  return (
    <>
      <article className="mt-10 mb-14 flex items-end justify-end">
        <ul>
          <li className="p-1">
            <span className="font-bold">{t("invoice-number")}: </span>
            {core.invoiceNumber}
          </li>
          <li className="p-1 bg-gray-100">
            <span className="font-bold">{t("invoice-date")}: </span>
            {core.invoiceDate}
          </li>
          <li className="p-1">
            <span className="font-bold">{t("due-date")}: </span>
            {core.dueDate}
          </li>
        </ul>
      </article>
    </>
  );
}

export default Dates;
