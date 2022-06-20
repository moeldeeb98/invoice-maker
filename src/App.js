import React, { useState, useRef, useEffect } from "react";
// import Header from "./components/Header";
import MainDetails from "./components/MainDetails";
import ClientDetails from "./components/ClientDetails";
import Dates from "./components/Dates";
import Table from "./components/Table";
import Notes from "./components/Notes";
import Footer from "./components/Footer";
import ReactToPrint from "react-to-print";
import { useTranslation } from "react-i18next";
import InfoForm from "./components/InfoForm";

function App() {
  const [showInvoice, setShowInvoice] = useState(false);
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
  const [description, setDescription] = useState("");
  const [quntity, setQuntity] = useState(1);
  const [price, setPrice] = useState(0);
  const [amount, setAmount] = useState(0);
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const [tax, setTax] = useState(0);

  const invoiceRef = useRef();

  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.querySelector("html").dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <>
      <main className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow">
        {showInvoice ? (
          <div>
            {/* <Header /> */}
            <ReactToPrint
              trigger={() => (
                <button className="bg-gray-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-gray-500 hover:bg-transparent hover:text-gray-500 transition-all duration-300">
                  {t("print")}
                </button>
              )}
              content={() => invoiceRef.current}
            />
            <div ref={invoiceRef} className="p-5">
              <MainDetails name={name} address={address} />
              <ClientDetails
                clientName={clientName}
                clientAddress={clientAddress}
              />
              <Dates
                invoiceNumber={invoiceNumber}
                invoiceDate={invoiceDate}
                dueDate={dueDate}
              />
              <Table list={list} total={total} tax={tax} />
              <Notes notes={notes} />
              <Footer
                name={name}
                email={email}
                phone={phone}
                bankName={bankName}
                bankAccount={bankAccount}
                website={website}
              />
            </div>
            <button
              className=" mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
              onClick={() => setShowInvoice(false)}
            >
              {t("edit-information")}
            </button>
          </div>
        ) : (
          <InfoForm
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
            clientName={clientName}
            setClientName={setClientName}
            clientAddress={clientAddress}
            setClientAddress={setClientAddress}
            invoiceNumber={invoiceNumber}
            setInvoiceNumber={setInvoiceNumber}
            invoiceDate={invoiceDate}
            setInvoiceDate={setInvoiceDate}
            dueDate={dueDate}
            setDueDate={setDueDate}
            description={description}
            setDescription={setDescription}
            quntity={quntity}
            setQuntity={setQuntity}
            price={price}
            setPrice={setPrice}
            amount={amount}
            setAmount={setAmount}
            total={total}
            setTotal={setTotal}
            tax={tax}
            setTax={setTax}
            list={list}
            setList={setList}
            notes={notes}
            setNotes={setNotes}
            setShowInvoice={setShowInvoice}
          />
        )}
      </main>
    </>
  );
}

export default App;
