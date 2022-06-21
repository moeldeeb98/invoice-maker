import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import ReactToPrint from "react-to-print";

import SendertInfo from "./SendertInfo";
import ClientInfo from "./ClientInfo";
import Dates from "./Dates";
import Table from "./Table";
import Notes from "./Notes";
import InvoiceFooter from "./InvoiceFooter";

function Invoice({ setShowInvoice }) {
  const invoiceRef = useRef();
  const { t } = useTranslation();

  return (
    <div>
      <ReactToPrint
        trigger={() => (
          <button className="bg-gray-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-gray-500 hover:bg-transparent hover:text-gray-500 transition-all duration-300">
            {t("print")}
          </button>
        )}
        content={() => invoiceRef.current}
      />
      <div ref={invoiceRef} className="p-5">
        <SendertInfo />
        <ClientInfo />
        <Dates />
        <Table />
        <Notes />
        <InvoiceFooter />
      </div>
      <button
        className=" mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
        onClick={() => setShowInvoice(false)}
      >
        {t("edit-information")}
      </button>{" "}
    </div>
  );
}

export default Invoice;
