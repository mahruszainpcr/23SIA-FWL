import React, { useState } from 'react';

export default function Page17() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const transactions = [
    { no_transaksi: "001", pelanggan: "John Doe", total: "$100" },
    { no_transaksi: "002", pelanggan: "Jane Smith", total: "$200" },
    { no_transaksi: "003", pelanggan: "Bob Johnson", total: "$150" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Daftar Transaksi</h1>
          <div className="flex flex-col md:flex-row md:items-end gap-6 mb-8">
            <div className="flex flex-col w-full md:w-1/2">
              <label className="text-sm font-medium text-gray-700 mb-2">Tanggal Mulai</label>
              <input
                type="date"
                value={startDate || ""}
                onChange={(e) => setStartDate(e.target.value)}
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col w-full md:w-1/2">
              <label className="text-sm font-medium text-gray-700 mb-2">Tanggal Akhir</label>
              <input
                type="date"
                value={endDate || ""}
                onChange={(e) => setEndDate(e.target.value)}
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none transition">Filter</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow border border-gray-200">
              <thead className="bg-blue-100">
                <tr>
                  <th className="text-left p-4 text-gray-700 font-medium border-b">No. Transaksi</th>
                  <th className="text-left p-4 text-gray-700 font-medium border-b">Pelanggan</th>
                  <th className="text-left p-4 text-gray-700 font-medium border-b">Total</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction, index) => (
                  <tr key={index} className="hover:bg-blue-50">
                    <td className="p-4 border-b text-gray-600">{transaction.no_transaksi}</td>
                    <td className="p-4 border-b text-gray-600">{transaction.pelanggan}</td>
                    <td className="p-4 border-b text-gray-600">{transaction.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}