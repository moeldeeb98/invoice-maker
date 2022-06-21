import React from "react";
import { useSelector } from "react-redux";

function Notes() {
  const { core } = useSelector((state) => state.InvoiceReducer);
  return (
    <>
      <section className="mb-5 mt-10">
        <p className="lg:w-1/2 text-justify">{core.notes}</p>
      </section>
    </>
  );
}

export default Notes;
