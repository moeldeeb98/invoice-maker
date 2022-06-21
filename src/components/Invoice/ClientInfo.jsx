import React from "react";
import { useSelector } from "react-redux";

function ClientInfo() {
  const { client } = useSelector((state) => state.InvoiceReducer);
  return (
    <>
      <section className="mt-10">
        <h2 className="text-2xl uppercase font-bold mb-1">
          {client.clientName}
        </h2>
        <p>{client.clientAddress}</p>
      </section>
    </>
  );
}

export default ClientInfo;
