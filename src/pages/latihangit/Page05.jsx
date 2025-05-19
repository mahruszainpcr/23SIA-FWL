import { User, CreditCard, Repeat } from "lucide-react";

const customers = [
  {
    nama: "Ibrahim",
    transaksi: 100,
    frekuensi: "Tahunan",
  },
  {
    nama: "Bento",
    transaksi: 80,
    frekuensi: "Mingguan",
  },
  {
    nama: "Ucok",
    transaksi: 20,
    frekuensi: "Harian",
  },
];

const MetricCard = ({ icon: Icon, label, value, color }) => (
  <div className="flex items-center gap-3">
    <div className={`p-3 rounded-xl ${color.bg} text-white shadow-inner`}>
      <Icon className="w-5 h-5" />
    </div>
    <div className="text-sm">
      <p className="text-gray-500">{label}</p>
      <p className="font-semibold text-gray-800">{value}</p>
    </div>
  </div>
);

export default function CustomerMetrics() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-200 to-slate-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-slate-800 mb-12 tracking-tight">
          💼 Data Pelanggan Aktif
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {customers.map((cust, i) => (
            <div
              key={i}
              className="group relative bg-white backdrop-blur-sm rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 p-6 cursor-pointer hover:scale-[1.01]"
            >
              <div className="absolute top-0 right-0 m-3 p-2 bg-white border border-slate-100 rounded-xl shadow-sm text-xs font-medium text-slate-400 group-hover:text-slate-600 transition">
                {i + 1}
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-tr from-blue-500 to-indigo-500 text-white p-4 rounded-full shadow-md">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-800">
                    {cust.nama}
                  </h2>
                  <p className="text-sm text-slate-500">Pelanggan Prioritas</p>
                </div>
              </div>

              <div className="space-y-4">
                <MetricCard
                  icon={CreditCard}
                  label="Total Transaksi"
                  value={`${cust.transaksi} kali`}
                  color={{ bg: "bg-emerald-500" }}
                />
                <MetricCard
                  icon={Repeat}
                  label="Frekuensi"
                  value={cust.frekuensi}
                  color={{ bg: "bg-purple-500" }}
                />
              </div>

              <div className="mt-6 text-sm text-indigo-600 font-medium group-hover:underline">
                Lihat Detail →
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
