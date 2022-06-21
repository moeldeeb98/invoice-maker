import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import InvoiceForm from "./components/InvoiceForm";
import Invoice from "./components/Invoice";

function App() {
  const [showInvoice, setShowInvoice] = useState(false);

  const { i18n } = useTranslation();
  useEffect(() => {
    document.querySelector("html").dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <>
      <main className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow">
        {showInvoice ? (
          <Invoice setShowInvoice={setShowInvoice} />
        ) : (
          <InvoiceForm setShowInvoice={setShowInvoice} />
        )}
      </main>
    </>
  );
}

export default App;
