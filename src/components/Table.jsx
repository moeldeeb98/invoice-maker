import React from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

function Table({ hasActions, list, total, editRow, deleteRow, tax }) {
  return (
    <>
      <table width="100%">
        <thead>
          <tr className="bg-gray-100 p-1">
            <td className="font-bold">Description</td>
            <td className="font-bold text-center">Quntity</td>
            <td className="font-bold text-center">Price</td>
            <td className="font-bold text-center">Amount</td>
            {hasActions && (
              <>
                <td></td>
                <td></td>
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <tr key={item.id} className="border-b border-gray-400">
              <td>{item.description}</td>
              <td className="text-center">{item.quntity}</td>
              <td className="text-center">{item.price}</td>
              <td className="text-center">{item.amount.toLocaleString()}</td>
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
          <tr>
            <td colSpan={2}></td>
            <td className="font-bold text-center border border-gray-400">
              Tax(14%):
            </td>
            <td className="font-bold text-center border border-gray-400">
              E&pound; {tax.toLocaleString()}
            </td>
          </tr>
          <tr>
            <td colSpan={2}></td>
            <td className="font-bold text-center border border-gray-400">
              Total:
            </td>
            <td className="font-bold text-center border border-gray-400">
              E&pound; {total.toLocaleString()}
            </td>
          </tr>
        </tbody>
      </table>
      {/* <div>
        <h2 className="flex items-end justify-end text-gray-800 font-bold text-2xl my-2">
          Total. {total.toLocaleString()}
        </h2>
      </div> */}
    </>
  );
}

export default Table;
