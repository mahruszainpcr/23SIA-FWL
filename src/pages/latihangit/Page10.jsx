import React, { useState } from 'react';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid';

export default function Page10() {
  const [interactionData, setInteractionData] = useState([
    {
      id: 1,
      tanggal: '2025-05-15',
      media: 'Email',
      hasil: 'Berhasil',
      tindakLanjut: 'Follow-up minggu depan',
      status: 'Selesai',
    },
    {
      id: 2,
      tanggal: '2025-05-16',
      media: 'Telepon',
      hasil: 'Tidak tersambung',
      tindakLanjut: 'Coba lagi nanti',
      status: 'Pending',
    },
    {
      id: 3,
      tanggal: '2025-05-17',
      media: 'WhatsApp',
      hasil: 'Respon positif',
      tindakLanjut: 'Kirim proposal',
      status: 'Dalam Proses',
    },
  ]);

  const getStatusBadge = (status) => {
    let style = '';
    switch (status) {
      case 'Selesai':
        style = 'bg-emerald-100 text-emerald-800';
        break;
      case 'Pending':
        style = 'bg-yellow-100 text-yellow-800';
        break;
      case 'Dalam Proses':
        style = 'bg-sky-100 text-sky-800';
        break;
      default:
        style = 'bg-gray-100 text-gray-800';
    }
    return (
      <span className={`px-3 py-1 text-xs font-medium rounded-full ${style}`}>
        {status}
      </span>
    );
  };

  const handleEdit = (id) => {
    alert(`Edit data dengan ID ${id}`);
  };

  const handleDelete = (id) => {
    if (confirm('Apakah Anda yakin ingin menghapus data ini?')) {
      setInteractionData(interactionData.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="p-6 md:p-10 bg-gradient-to-br from-white via-gray-50 to-white rounded-xl shadow-xl">
      <h1 className="text-2xl font-extrabold text-gray-800 mb-1">
        Halaman, Ginta Sabil Ramadhani
      </h1>
      <p className="mb-6 text-gray-500">Halo Selamat Datang 👋</p>

      <h2 className="text-xl font-semibold text-gray-700 mb-4">📋 Riwayat Interaksi</h2>
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full bg-white text-sm text-left text-gray-700">
          <thead className="bg-gray-100 text-xs text-gray-600 uppercase tracking-wider">
            <tr>
              <th className="px-4 py-3">Tanggal</th>
              <th className="px-4 py-3">Media</th>
              <th className="px-4 py-3">Hasil</th>
              <th className="px-4 py-3">Tindak Lanjut</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {interactionData.map((item) => (
              <tr key={item.id} className="border-b hover:bg-gray-50 transition">
                <td className="px-4 py-2">{item.tanggal}</td>
                <td className="px-4 py-2">{item.media}</td>
                <td className="px-4 py-2">{item.hasil}</td>
                <td className="px-4 py-2">{item.tindakLanjut}</td>
                <td className="px-4 py-2">{getStatusBadge(item.status)}</td>
                <td className="px-4 py-2 flex gap-2">
                  <button
                    onClick={() => handleEdit(item.id)}
                    className="flex items-center gap-1 px-2 py-1 text-white bg-blue-500 hover:bg-blue-600 text-xs font-medium rounded transition"
                  >
                    <PencilIcon className="w-4 h-4" /> Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="flex items-center gap-1 px-2 py-1 text-white bg-red-500 hover:bg-red-600 text-xs font-medium rounded transition"
                  >
                    <TrashIcon className="w-4 h-4" /> Hapus
                  </button>
                </td>
              </tr>
            ))}
            {interactionData.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center px-4 py-5 text-gray-500">
                  Tidak ada data interaksi.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
