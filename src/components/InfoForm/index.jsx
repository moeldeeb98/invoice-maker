import React from "react";
import { useTranslation } from "react-i18next";
import InvoiceItemForm from "./InvoiceItemForm";
import Header from "./Header";
import InvoiceInfo from "./InvoiceInfo";
import RecipientInfo from "./RecipientInfo";
import SenderInfo from "./SenderInfo";

function InfoForm({
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
  clientName,
  setClientName,
  clientAddress,
  setClientAddress,
  invoiceNumber,
  setInvoiceNumber,
  invoiceDate,
  setInvoiceDate,
  dueDate,
  setDueDate,
  description,
  setDescription,
  quntity,
  setQuntity,
  price,
  setPrice,
  amount,
  setAmount,
  total,
  setTotal,
  tax,
  setTax,
  list,
  setList,
  notes,
  setNotes,
  setShowInvoice,
}) {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col justify-center">
      <Header />

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
        description={description}
        setDescription={setDescription}
        quntity={quntity}
        setQuntity={setQuntity}
        price={price}
        setPrice={setPrice}
        amount={amount}
        setAmount={setAmount}
        list={list}
        setList={setList}
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
        onClick={() => setShowInvoice(true)}
      >
        {t("preview-invoice")}
      </button>
    </div>
  );
}

export default InfoForm;
