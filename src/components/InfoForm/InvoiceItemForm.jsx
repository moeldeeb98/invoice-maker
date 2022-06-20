import React, { useState, useEffect } from "react";
import Table from "../Table";
import { v4 as uuid } from "uuid";
import { useTranslation } from "react-i18next";

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
  tax,
  setTax,
}) {
  const { t } = useTranslation();
  const [isEditing, setIsEditing] = useState(false);
  useEffect(() => {
    setAmount(price * quntity);
  }, [setAmount, price, quntity]);

  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < list.length; i++) {
      sum += list[i].amount;
    }
    const tax = (sum * 14) / 100;
    setTax(tax);
    setTotal(sum + tax);
  }, [list.length]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !price || !quntity) {
      alert("Please fill in all inputs");
    } else {
      const newItem = {
        id: uuid(),
        description,
        quntity,
        amount,
        price,
      };

      setDescription("");
      setQuntity(1);
      setPrice(0);

      setList([...list, newItem]);
      setIsEditing(false);
    }
  };

  const deleteRow = (id) => {
    const deletingRow = list.find((row) => row.id === id);
    setList(list.filter((row) => row.id !== id));
  };

  const editRow = (id) => {
    const editingRow = list.find((row) => row.id === id);
    setIsEditing(true);
    setList(list.filter((row) => row.id !== id));
    setDescription(editingRow.description);
    setQuntity(editingRow.quntity);
    setPrice(editingRow.price);
  };
  return (
    <article className="mb-10">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:mt-16">
          <label htmlFor="description">{t("description")}</label>
          <input
            type="text"
            name="description"
            id="description"
            placeholder={t("description")}
            autoComplete="off"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="md:grid grid-cols-3 gap-10">
          <div className="flex flex-col">
            <label htmlFor="quntity">{t("quntity")}</label>
            <input
              type="number"
              name="quntity"
              id="quntity"
              placeholder={t("quntity")}
              autoComplete="off"
              value={quntity}
              onChange={(e) => setQuntity(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="price">{t("price")}</label>
            <input
              type="number"
              name="price"
              id="price"
              placeholder={t("price")}
              autoComplete="off"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="amount">{t("amount")}</label>
            <p>{amount.toLocaleString()}</p>
          </div>
        </div>
        {isEditing ? (
          <button
            className="mb-5 bg-green-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-green-500 hover:bg-transparent hover:text-green-500 transition-all duration-300"
            type="submit"
          >
            {t("update-item")}
          </button>
        ) : (
          <button
            className="mb-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
            type="submit"
          >
            {t("add-item")}
          </button>
        )}
      </form>
      <Table
        hasActions={true}
        list={list}
        total={total}
        editRow={editRow}
        deleteRow={deleteRow}
        tax={tax}
      />
    </article>
  );
}

export default TableForm;
