import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { bulan: "Jan", jumlah_penjualan: 120, total_pendapatan: 3600000 },
  { bulan: "Feb", jumlah_penjualan: 95, total_pendapatan: 2800000 },
  { bulan: "Mar", jumlah_penjualan: 140, total_pendapatan: 4200000 },
  { bulan: "Apr", jumlah_penjualan: 110, total_pendapatan: 3300000 },
  { bulan: "Mei", jumlah_penjualan: 160, total_pendapatan: 5000000 },
];

export default function Page2() {
  const totalPenjualan = data.reduce((acc, curr) => acc + curr.jumlah_penjualan, 0);
  const totalPendapatan = data.reduce((acc, curr) => acc + curr.total_pendapatan, 0);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard Penjualan Bulanan</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-semibold mb-2">Total Penjualan</h2>
          <p className="text-3xl font-bold text-blue-600">{totalPenjualan}</p>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-semibold mb-2">Total Pendapatan</h2>
          <p className="text-3xl font-bold text-green-600">
            Rp {totalPendapatan.toLocaleString("id-ID")}
          </p>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Grafik Penjualan</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="bulan" />
            <YAxis />
            <Tooltip
              formatter={(value, name) =>
                name === "total_pendapatan"
                  ? `Rp ${value.toLocaleString("id-ID")}`
                  : value
              }
            />
            <Bar dataKey="jumlah_penjualan" fill="#3b82f6" name="Jumlah Penjualan" />
            <Bar dataKey="total_pendapatan" fill="#10b981" name="Total Pendapatan" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
