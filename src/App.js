import React, { useState, useRef } from "react";
// import Header from "./components/Header";
import MainDetails from "./components/MainDetails";
import ClientDetails from "./components/ClientDetails";
import Dates from "./components/Dates";
import Table from "./components/Table";
import Notes from "./components/Notes";
import Footer from "./components/Footer";
import TableForm from "./components/TableForm";
import ReactToPrint from "react-to-print";
import MultiLang from "./components/MultiLang";
import { useTranslation } from "react-i18next";

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

  const { t, i18n, language } = useTranslation();

  console.log("lang", i18n.language);
  return (
    <>
      <main className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow">
        {showInvoice ? (
          <div>
            {/* <Header /> */}
            <ReactToPrint
              trigger={() => (
                <button className="bg-gray-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-gray-500 hover:bg-transparent hover:text-gray-500 transition-all duration-300">
                  Print / Download
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
              Edit Information
            </button>
          </div>
        ) : (
          <div className="flex flex-col justify-center">
            <MultiLang />

            <div>{t("title")}</div>
            <article className="md:grid grid-cols-2 gap-10">
              <div className="flex flex-col">
                <label htmlFor="name">Your full name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your full name"
                  autoComplete="off"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="address">Your address</label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Your address"
                  autoComplete="off"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </article>

            <article className="md:grid grid-cols-3 gap-10">
              <div className="flex flex-col">
                <label htmlFor="email">Your email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Your email"
                  autoComplete="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="phone">Your phone</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Your phone number"
                  autoComplete="off"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="website">Your website</label>
                <input
                  type="url"
                  name="website"
                  id="website"
                  placeholder="Your website"
                  autoComplete="off"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </div>
            </article>

            <article className="md:grid grid-cols-2 gap-10">
              <div className="flex flex-col">
                <label htmlFor="bankName">Your bank name</label>
                <input
                  type="text"
                  name="bankName"
                  id="bankName"
                  placeholder="Your bank name"
                  autoComplete="off"
                  value={bankName}
                  onChange={(e) => setBankName(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="bankAccount">Your bank account number</label>
                <input
                  type="text"
                  name="bankAccount"
                  id="bankAccount"
                  placeholder="Your bank account number"
                  autoComplete="off"
                  value={bankAccount}
                  onChange={(e) => setBankAccount(e.target.value)}
                />
              </div>
            </article>

            <article className="md:grid grid-cols-2 gap-10 md:mt-16">
              <div className="flex flex-col">
                <label htmlFor="clientName">Client's name</label>
                <input
                  type="text"
                  name="clientName"
                  id="clientName"
                  placeholder="Client's name"
                  autoComplete="off"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="clientAddress">Client's address</label>
                <input
                  type="text"
                  name="clientAddress"
                  id="clientAddress"
                  placeholder="Client's address"
                  autoComplete="off"
                  value={clientAddress}
                  onChange={(e) => setClientAddress(e.target.value)}
                />
              </div>
            </article>

            <article className="md:grid grid-cols-3 gap-10">
              <div className="flex flex-col">
                <label htmlFor="invoiceNumber">Invoice number</label>
                <input
                  type="text"
                  name="invoiceNumber"
                  id="invoiceNumber"
                  placeholder="Invoice number"
                  autoComplete="off"
                  value={invoiceNumber}
                  onChange={(e) => setInvoiceNumber(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="invoiceDate">Invoice date</label>
                <input
                  type="date"
                  name="invoiceDate"
                  id="invoiceDate"
                  placeholder="Invoice date"
                  autoComplete="off"
                  value={invoiceDate}
                  onChange={(e) => setInvoiceDate(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="dueDate">Due date</label>
                <input
                  type="date"
                  name="dueDate"
                  id="dueDate"
                  placeholder="Due date"
                  autoComplete="off"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                />
              </div>
            </article>

            <article className="mb-10">
              <TableForm
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
            </article>

            <label htmlFor="notes">Additional Notes</label>
            <textarea
              cols="30"
              rows="10"
              name="notes"
              id="notes"
              placeholder="Additional Notes to the client"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            ></textarea>

            <button
              className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
              onClick={() => setShowInvoice(true)}
            >
              Preview Invoice
            </button>
          </div>
        )}
      </main>
    </>
  );
}

export default App;
