"use client";
import { useState } from "react";

export default function Page18() {
  const [viewMode, setViewMode] = useState("table");

  const messages = [
    {
      id: 1,
      title: "Pengumuman Kegiatan Kampus",
      media: "https://via.placeholder.com/300x150",
    },
    {
      id: 2,
      title: "Undangan Seminar",
      media: "https://via.placeholder.com/300x150",
    },
    {
      id: 3,
      title: "Jadwal Libur Nasional",
      media: "https://via.placeholder.com/300x150",
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold text-gray-800">Halaman, Lidya Rahmawati</h1>
      <p className="mt-2 text-gray-600">Halo Selamat Datang</p>

      {/* Toggle Tampilan */}
      <div className="mt-6 space-x-2">
        <button
          onClick={() => setViewMode("table")}
          className={`px-4 py-2 rounded-lg text-sm font-medium shadow-sm ${
            viewMode === "table"
              ? "bg-blue-600 text-white"
              : "bg-white border border-gray-300 text-gray-700"
          }`}
        >
          Tabel
        </button>
        <button
          onClick={() => setViewMode("card")}
          className={`px-4 py-2 rounded-lg text-sm font-medium shadow-sm ${
            viewMode === "card"
              ? "bg-blue-600 text-white"
              : "bg-white border border-gray-300 text-gray-700"
          }`}
        >
          Kartu
        </button>
      </div>

      {/* Konten */}
      <div className="mt-6">
        {viewMode === "table" ? (
          <div className="overflow-x-auto bg-white rounded-xl shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Judul</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Media</th>
                  <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700">Aksi</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 text-sm">
                {messages.map((msg) => (
                  <tr key={msg.id}>
                    <td className="px-6 py-4 text-gray-800">{msg.title}</td>
                    <td className="px-6 py-4">
                      <img
                        src={msg.media}
                        alt={msg.title}
                        className="w-28 h-16 object-cover rounded-md shadow-sm"
                      />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                        Preview
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
              >
                <img
                  src={msg.media}
                  alt={msg.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4 flex flex-col flex-grow">
                  <h2 className="text-lg font-semibold text-gray-800 mb-2">
                    {msg.title}
                  </h2>
                  <button className="mt-auto px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition">
                    Preview
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
