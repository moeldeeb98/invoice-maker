import React from "react";
import { useSelector } from "react-redux";

function SendertInfo() {
  const { sender } = useSelector((state) => state.InvoiceReducer);
  return (
    <>
      <section className="flex flex-col items-end justify-end">
        <h2 className="font-bold text-xl uppercase md:text-4xl mb-1">
          {sender.name}
        </h2>
        <p>{sender.address}</p>
      </section>
    </>
  );
}

export default SendertInfo;
