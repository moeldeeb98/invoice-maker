import React from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

function Table({ hasActions, list, total, editRow, deleteRow }) {
  return (
    <>
      <table width="100%">
        <thead>
          <tr className="bg-gray-100 p-1">
            <td className="font-bold">Description</td>
            <td className="font-bold">Quntity</td>
            <td className="font-bold">Price</td>
            <td className="font-bold">Amount</td>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <tr key={item.id}>
              <td>{item.description}</td>
              <td>{item.quntity}</td>
              <td>{item.price}</td>
              <td>{item.amount}</td>
              {hasActions && (
                <>
                  <td>
                    <button onClick={() => deleteRow(item.id)}>
                      <AiOutlineDelete className="text-red-500 font-bold text-xl" />
                    </button>
                  </td>
                  <td>
                    <button onClick={() => editRow(item.id)}>
                      <AiOutlineEdit className="text-green-500 font-bold text-xl" />
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h2 className="flex items-end justify-end text-gray-800 font-bold text-2xl my-2">
          Total. {total.toLocaleString()}
        </h2>
      </div>
    </>
  );
}

export default Table;
