import { useState } from "react";

const tabs = [
  { name: "Profil Lengkap", key: "profil" },
  { name: "Transaksi", key: "transaksi" },
  { name: "Catatan", key: "catatan" },
  { name: "Rekomendasi", key: "rekomendasi" },
];

export default function Page07() {
  const [activeTab, setActiveTab] = useState("profil");

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Profile Card */}
      <div className="bg-white rounded-xl shadow-lg flex items-center p-6 mb-6">
        <img
          src="https://randomuser.me/api/portraits/men/7.jpg"
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-green-400 object-cover"
        />
        <div className="ml-6">
          <h2 className="text-2xl font-bold text-gray-800">Fadhil Ramadhan Arsyah</h2>
          <p className="text-gray-500">Pelanggan Premium</p>
          <div className="mt-2 flex gap-4 text-sm text-gray-600">
            <span>Email: fadhil@email.com</span>
            <span>Telp: 0812-3456-7890</span>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex border-b mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`py-2 px-4 -mb-px border-b-2 font-semibold transition-all ${
              activeTab === tab.key
                ? "border-green-500 text-green-600"
                : "border-transparent text-gray-500 hover:text-green-600"
            }`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-lg shadow p-6 min-h-[200px]">
        {activeTab === "profil" && (
          <div>
            <h3 className="font-bold mb-2">Data Diri</h3>
            <ul className="text-gray-700 space-y-1">
              <li>Nama: Fadhil Ramadhan Arsyah</li>
              <li>Email: fadhil@email.com</li>
              <li>Alamat: Jl. Contoh No. 7, Pekanbaru</li>
              <li>Tanggal Lahir: 7 Juli 2001</li>
            </ul>
          </div>
        )}
        {activeTab === "transaksi" && (
          <div>
            <h3 className="font-bold mb-2">Riwayat Transaksi</h3>
            <table className="w-full text-left border">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2">Tanggal</th>
                  <th className="p-2">Produk</th>
                  <th className="p-2">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2">2024-05-01</td>
                  <td className="p-2">Paket A</td>
                  <td className="p-2">Rp 500.000</td>
                </tr>
                <tr>
                  <td className="p-2">2024-04-15</td>
                  <td className="p-2">Paket B</td>
                  <td className="p-2">Rp 350.000</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {activeTab === "catatan" && (
          <div>
            <h3 className="font-bold mb-2">Catatan Pelanggan</h3>
            <ul className="list-disc ml-5 text-gray-700">
              <li>Sering order di akhir bulan</li>
              <li>Responsif terhadap promo</li>
            </ul>
          </div>
        )}
        {activeTab === "rekomendasi" && (
          <div>
            <h3 className="font-bold mb-2">Rekomendasi Untuk Pelanggan</h3>
            <ul className="list-disc ml-5 text-gray-700">
              <li>Tawarkan paket langganan tahunan</li>
              <li>Kirimkan voucher ulang tahun</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}