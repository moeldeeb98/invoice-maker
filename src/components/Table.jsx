import React from "react";

function Table({ list }) {
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
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
