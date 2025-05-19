import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa'; // Importing media icons

// Data Dummy untuk Riwayat Follow-Up
const followUpData = [
  {
    id: 1,
    media: 'telepon',
    hasil: 'Sukses',
    pelanggan: 'John Doe',
  },
  {
    id: 2,
    media: 'email',
    hasil: 'Gagal',
    pelanggan: 'Jane Smith',
  },
  {
    id: 3,
    media: 'whatsapp',
    hasil: 'Sukses',
    pelanggan: 'Alice Johnson',
  },
];

// Fungsi untuk menampilkan Icon media yang sesuai
const MediaIcon = ({ media }) => {
  switch (media) {
    case 'telepon':
      return <FaPhoneAlt className="text-green-500" />;
    case 'email':
      return <FaEnvelope className="text-blue-500" />;
    case 'whatsapp':
      return <FaWhatsapp className="text-green-600" />;
    default:
      return null;
  }
};

// Komponen untuk Riwayat Follow-Up
const RiwayatFollowUp = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-semibold text-gray-700 mb-4">Riwayat Follow-Up</h1>
      <table className="w-full table-auto border-collapse text-left">
        <thead className="border-b-2 border-gray-200">
          <tr>
            <th className="px-4 py-2 text-sm font-medium text-gray-600">No</th>
            <th className="px-4 py-2 text-sm font-medium text-gray-600">Media</th>
            <th className="px-4 py-2 text-sm font-medium text-gray-600">Hasil</th>
            <th className="px-4 py-2 text-sm font-medium text-gray-600">Pelanggan</th>
          </tr>
        </thead>
        <tbody>
          {followUpData.map((item, index) => (
            <tr key={item.id} className="border-b hover:bg-gray-50">
              <td className="px-4 py-2 text-sm text-gray-700">{index + 1}</td>
              <td className="px-4 py-2 text-sm text-gray-700 flex items-center space-x-2">
                {/* Menampilkan icon dan nama media */}
                <MediaIcon media={item.media} />
                <span>{item.media.charAt(0).toUpperCase() + item.media.slice(1)}</span>
              </td>
              <td className="px-4 py-2 text-sm text-gray-700">{item.hasil}</td>
              <td className="px-4 py-2 text-sm text-gray-700">{item.pelanggan}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RiwayatFollowUp;
