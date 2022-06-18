import React, { useState, useEffect } from "react";
import Table from "./Table";
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
  total,
  setTotal,
}) {
  const [isEditing, setIsEditing] = useState(false);
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
    setTotal(total + amount);
    setIsEditing(false);
  };

  const deleteRow = (id) => {
    const deletingRow = list.find((row) => row.id === id);
    setList(list.filter((row) => row.id !== id));
    setTotal(total - deletingRow.amount);
  };

  const editRow = (id) => {
    const editingRow = list.find((row) => row.id === id);
    setIsEditing(true);
    setList(list.filter((row) => row.id !== id));
    setDescription(editingRow.description);
    setQuntity(editingRow.quntity);
    setPrice(editingRow.price);
    setTotal(total - editingRow.amount);
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
        {isEditing ? (
          <button
            className="mb-5 bg-green-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-green-500 hover:bg-transparent hover:text-green-500 transition-all duration-300"
            type="submit"
          >
            Update item
          </button>
        ) : (
          <button
            className="mb-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
            type="submit"
          >
            Add item
          </button>
        )}
      </form>
      <Table
        hasActions={true}
        list={list}
        total={total}
        editRow={editRow}
        deleteRow={deleteRow}
      />
    </>
  );
}

export default TableForm;
