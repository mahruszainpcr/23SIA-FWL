import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const dataRetur = [
  {
    id: 1,
    produk: "Kemeja Linen Putih",
    alasan: "Ukuran tidak sesuai",
    status: "Diproses",
  },
  {
    id: 2,
    produk: "Celana Jeans Hitam",
    alasan: "Barang cacat",
    status: "Dibatalkan",
  },
  {
    id: 3,
    produk: "Jaket Denim",
    alasan: "Ganti model",
    status: "Selesai",
  },
];

function getStatusColor(status) {
  switch (status.toLowerCase()) {
    case "diproses":
      return "bg-yellow-100 text-yellow-700";
    case "selesai":
      return "bg-green-100 text-green-700";
    case "dibatalkan":
      return "bg-red-100 text-red-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
}

export default function Page20() {
  const [open, setOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-blue-100 p-6">
      <div className="max-w-5xl mx-auto backdrop-blur-xl bg-white/70 border border-white/30 rounded-2xl shadow-xl p-8 transition-all duration-300">
        <h1 className="text-3xl font-bold text-gray-800 mb-1">
          Retur & Pembatalan
        </h1>
        <p className="text-gray-500 mb-6">Halo Naila Nurzalika! Selamat datang ✨</p>

        <div className="rounded-xl bg-white/60 border border-gray-200 shadow-inner overflow-hidden transition-all duration-300">
          <button
            onClick={() => setOpen(!open)}
            className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-semibold text-gray-800 hover:bg-white/40 transition"
          >
            <span className="tracking-wide">Daftar Permintaan Retur Produk</span>
            {open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>

          {open && (
            <div className="overflow-x-auto px-4 pb-6 transition-all duration-500 ease-in-out">
              <table className="w-full mt-2 text-sm rounded-xl overflow-hidden">
                <thead className="bg-white/40 backdrop-blur-sm text-gray-700">
                  <tr>
                    <th className="px-4 py-3 text-left">#</th>
                    <th className="px-4 py-3 text-left">Produk</th>
                    <th className="px-4 py-3 text-left">Alasan</th>
                    <th className="px-4 py-3 text-left">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white/60 text-gray-800 divide-y divide-gray-200">
                  {dataRetur.map((item, index) => (
                    <tr key={item.id} className="hover:bg-white/80 transition">
                      <td className="px-4 py-3 font-medium">{index + 1}</td>
                      <td className="px-4 py-3">{item.produk}</td>
                      <td className="px-4 py-3">{item.alasan}</td>
                      <td className="px-4 py-3">
                        <span
                          className={`px-3 py-1 text-xs rounded-full font-semibold shadow-sm ${getStatusColor(
                            item.status
                          )}`}
                        >
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
