// components/TransactionTable.tsx
import React from 'react';
import { transactions } from '@/constants';

 const TransactionTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-white text-black">
            <th className=" border-b border-r border-black px-4 py-2 text-left">
              Date
            </th>
            <th className=" border-b border-r border-black px-4 py-2 text-left">
              Transaction Type
            </th>
            <th className="border-b border-black px-4 py-2 text-left">
              Amount
            </th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(({ id, date, type, amount }) => (
            <tr key={id} className="hover:bg-white">
              <td className=" border-r border-black px-4 py-2">{date}</td>
              <td className=" border-r border-black px-4 py-2">{type}</td>
              <td className=" px-4 py-2">{amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionTable;
