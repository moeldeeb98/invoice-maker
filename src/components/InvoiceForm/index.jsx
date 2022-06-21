import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import InvoiceItemForm from "./InvoiceItemForm";
import FormHeader from "./FormHeader";
import InvoiceInfo from "./InvoiceInfo";
import RecipientInfo from "./RecipientInfo";
import SenderInfo from "./SenderInfo";

import {
  dispatchSenderInfo,
  dispatchClientInfo,
  dispatchCoreInfo,
} from "../../redux/invoice";

function InvoiceForm({ setShowInvoice }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [website, setWebsite] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [notes, setNotes] = useState("");
  const [total, setTotal] = useState(0);
  const [tax, setTax] = useState(0);

  const handlePreviewClick = () => {
    dispatch(
      dispatchSenderInfo({
        name,
        address,
        email,
        phone,
        bankName,
        bankAccount,
        website,
      })
    );
    dispatch(
      dispatchClientInfo({
        clientName,
        clientAddress,
      })
    );
    dispatch(
      dispatchCoreInfo({
        invoiceNumber,
        invoiceDate,
        dueDate,
        notes,
        total,
        tax,
      })
    );
    setShowInvoice(true);
  };

  return (
    <div className="flex flex-col justify-center">
      <FormHeader />

      <SenderInfo
        name={name}
        setName={setName}
        address={address}
        setAddress={setAddress}
        email={email}
        setEmail={setEmail}
        phone={phone}
        setPhone={setPhone}
        website={website}
        setWebsite={setWebsite}
        bankName={bankName}
        setBankName={setBankName}
        bankAccount={bankAccount}
        setBankAccount={setBankAccount}
      />

      <RecipientInfo
        clientName={clientName}
        setClientName={setClientName}
        clientAddress={clientAddress}
        setClientAddress={setClientAddress}
      />

      <InvoiceInfo
        invoiceNumber={invoiceNumber}
        setInvoiceNumber={setInvoiceNumber}
        invoiceDate={invoiceDate}
        setInvoiceDate={setInvoiceDate}
        dueDate={dueDate}
        setDueDate={setDueDate}
      />

      <InvoiceItemForm
        total={total}
        setTotal={setTotal}
        tax={tax}
        setTax={setTax}
      />

      <label htmlFor="notes">{t("additional-notes")}</label>
      <textarea
        cols="30"
        rows="10"
        name="notes"
        id="notes"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      ></textarea>

      <button
        className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
        onClick={handlePreviewClick}
      >
        {t("preview-invoice")}
      </button>
    </div>
  );
}

export default InvoiceForm;
