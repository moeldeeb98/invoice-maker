import React from "react";
import { useTranslation } from "react-i18next";

function InvoiceInfo({
  invoiceNumber,
  setInvoiceNumber,
  invoiceDate,
  setInvoiceDate,
  dueDate,
  setDueDate,
}) {
  const { t } = useTranslation();
  return (
    <article className="md:grid grid-cols-3 gap-10">
      <div className="flex flex-col">
        <label htmlFor="invoiceNumber">{t("invoice-number")}</label>
        <input
          type="text"
          name="invoiceNumber"
          id="invoiceNumber"
          placeholder={t("invoice-number")}
          autoComplete="off"
          value={invoiceNumber}
          onChange={(e) => setInvoiceNumber(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="invoiceDate">{t("invoice-date")}</label>
        <input
          type="date"
          name="invoiceDate"
          id="invoiceDate"
          placeholder={t("invoice-date")}
          autoComplete="off"
          value={invoiceDate}
          onChange={(e) => setInvoiceDate(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="dueDate">{t("due-date")}</label>
        <input
          type="date"
          name="dueDate"
          id="dueDate"
          placeholder={t("due-date")}
          autoComplete="off"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>
    </article>
  );
}

export default InvoiceInfo;
