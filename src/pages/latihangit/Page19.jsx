import React from "react";

const payments = [
  {
    invoice: "INV-001",
    metode: "Bank Transfer",
    bukti: "https://via.placeholder.com/100x60",
    status: "Paid",
  },
  {
    invoice: "INV-002",
    metode: "E-Wallet",
    bukti: "https://via.placeholder.com/100x60",
    status: "Pending",
  },
  {
    invoice: "INV-003",
    metode: "Credit Card",
    bukti: "https://via.placeholder.com/100x60",
    status: "Failed",
  },
];

const statusColor = {
  Paid: "bg-green-100 text-green-800",
  Pending: "bg-yellow-100 text-yellow-800",
  Failed: "bg-red-100 text-red-800",
};

const Page19 = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Status Pembayaran</h1>

      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full text-sm text-left text-gray-700">
          <thead className="text-xs uppercase bg-gray-100">
            <tr>
              <th className="px-6 py-4">Invoice</th>
              <th className="px-6 py-4">Metode</th>
              <th className="px-6 py-4">Bukti</th>
              <th className="px-6 py-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((p, index) => (
              <tr key={index} className="border-b hover:bg-gray-50 transition">
                <td className="px-6 py-4 font-medium">{p.invoice}</td>
                <td className="px-6 py-4">{p.metode}</td>
                <td className="px-6 py-4">
                  <img
                    src={p.bukti}
                    alt={`Bukti pembayaran ${p.invoice}`}
                    className="w-24 h-auto rounded-md shadow"
                  />
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full ${statusColor[p.status] || "bg-gray-100 text-gray-600"}`}
                  >
                    {p.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page19;
