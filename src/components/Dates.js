import React from "react";

export default function Dates({ invoiceNumber, invoiceDate, dueDate }) {
  return (
    <>
      <article className="mt-10 mb-14 flex  items-end justify-end">
        <ul>
          <li className="p-1 ">
            <span className="font-bold"></span>Invoice number:{invoiceNumber}
          </li>
          <li className=" p-1 bg-gray-100 font-bold">
            <span className="font-bold"></span>Invoice date:{invoiceDate}
          </li>
          <li className="p-1 ">
            <span className="font-bold"></span>Due date:{dueDate}
          </li>
        </ul>
      </article>
    </>
  );
}
