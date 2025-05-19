import React from "react";

const events = [
  {
    date: "2025-05-01",
    event: "Meeting Project A",
    jenis: "Meeting",
    status: "Selesai",
    rekomendasi: "Review hasil meeting",
  },
  {
    date: "2025-05-03",
    event: "Deadline Proposal",
    jenis: "Deadline",
    status: "Tertunda",
    rekomendasi: "Segera revisi dan submit",
  },
  {
    date: "2025-05-05",
    event: "Workshop Internal",
    jenis: "Workshop",
    status: "Terjadwal",
    rekomendasi: "Persiapkan materi",
  },
];

export default function Page26() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4 text-indigo-700">Halaman R dimas zayuki</h1>

      <div className="mb-6">
        <p className="text-gray-700">Hallo, selamat datang!</p>
      </div>

      <h2 className="text-lg font-semibold text-gray-800 mb-2">Daftar Aktivitas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map((item, index) => (
          <div key={index} className="border border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-md transition">
            <h3 className="text-md font-bold text-indigo-600">{item.event}</h3>
            <p className="text-sm text-gray-700">Tanggal: {item.date}</p>
            <p className="text-sm text-gray-700">Jenis: {item.jenis}</p>
            <p className="text-sm text-gray-700">Status: <span className="font-medium">{item.status}</span></p>
            <p className="text-sm text-gray-500 italic mt-2">Rekomendasi: {item.rekomendasi}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
