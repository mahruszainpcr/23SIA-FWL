import React, { useState } from 'react';

const dataHargaDiskon = [
  { id: 1, harga: 'Rp 100.000', tanggal_diskon: '2025-06-01', status: true },
  { id: 2, harga: 'Rp 250.000', tanggal_diskon: '2025-06-10', status: false },
  { id: 3, harga: 'Rp 150.000', tanggal_diskon: '2025-07-05', status: true },
];

export default function Page15() {
  const [data, setData] = useState(dataHargaDiskon);

  const toggleStatus = (id) => {
    const updated = data.map(item =>
      item.id === id ? { ...item, status: !item.status } : item
    );
    setData(updated);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Harga & Diskon</h1>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-separate border-spacing-y-3">
            <thead>
              <tr className="text-gray-600 text-sm uppercase">
                <th>Harga</th>
                <th>Tanggal Diskon</th>
                <th>Status</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id} className="bg-white hover:bg-gray-100 shadow-sm rounded-lg transition duration-150">
                  <td className="py-3 px-4 text-base text-gray-800">{item.harga}</td>
                  <td className="py-3 px-4 text-base text-gray-600">{item.tanggal_diskon}</td>
                  <td className="py-3 px-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${item.status ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                      {item.status ? '✅ Aktif' : '❌ Nonaktif'}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <button
                      onClick={() => toggleStatus(item.id)}
                      className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition duration-150"
                    >
                      Toggle Status
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
