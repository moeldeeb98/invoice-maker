import React, { useEffect } from "react";
import { v4 as uuid } from "uuid";

function TableForm({
  description,
  setDescription,
  quntity,
  setQuntity,
  price,
  setPrice,
  amount,
  setAmount,
  list,
  setList,
}) {
  useEffect(() => {
    setAmount(price * quntity);
  }, [setAmount, price, quntity]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: uuid(),
      description,
      quntity,
      amount,
      price,
    };

    setDescription("");
    setQuntity("");
    setAmount("");
    setPrice("");

    setList([...list, newItem]);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:mt-16">
          <label htmlFor="description">Item description</label>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Item description"
            autoComplete="off"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="md:grid grid-cols-3 gap-10">
          <div className="flex flex-col">
            <label htmlFor="quntity">Quntity</label>
            <input
              type="text"
              name="quntity"
              id="quntity"
              placeholder="Quntity"
              autoComplete="off"
              value={quntity}
              onChange={(e) => setQuntity(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="price">Price</label>
            <input
              type="text"
              name="price"
              id="price"
              placeholder="Price"
              autoComplete="off"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="amount">Amount</label>
            <p>{amount}</p>
          </div>
        </div>
        <button
          className="mb-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
          type="submit"
        >
          Add item
        </button>
      </form>
    </>
  );
}

export default TableForm;
