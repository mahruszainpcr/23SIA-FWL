import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { BarChart3, Star, BadgeDollarSign } from "lucide-react";

const data = [
  { kategori: "Platinum", value: 25, avg: "Rp 2.500.000", icon: <Star /> },
  { kategori: "Gold", value: 40, avg: "Rp 1.750.000", icon: <BarChart3 /> },
  { kategori: "Silver", value: 35, avg: "Rp 980.000", icon: <BadgeDollarSign /> },
];

const COLORS = ["#10b981", "#3b82f6", "#f59e0b"]; // green, blue, amber

export default function Page9() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-1 flex items-center gap-2">
        📊 Segmentasi Pelanggan
      </h1>
      <p className="text-sm text-gray-500 mb-6">
        Visualisasi kategori pelanggan berdasarkan rata-rata belanja
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart Section */}
        <div className="col-span-1 lg:col-span-2 bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Distribusi Pelanggan</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="kategori"
                cx="50%"
                cy="50%"
                outerRadius={90}
                label={({ name, percent }) =>
                  `${name} (${(percent * 100).toFixed(0)}%)`
                }
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend verticalAlign="bottom" height={36} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Cards Section */}
        <div className="flex flex-col gap-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-white to-gray-50 border-l-4"
              style={{ borderColor: COLORS[index] }}
            >
              <div className="p-4 rounded-xl shadow flex items-center justify-between">
                <div>
                  <h3 className="text-sm text-gray-500">{item.kategori}</h3>
                  <p className="text-xl font-bold text-gray-800">{item.avg}</p>
                </div>
                <div
                  className={`w-11 h-11 rounded-full flex items-center justify-center text-white shadow`}
                  style={{ backgroundColor: COLORS[index] }}
                >
                  {item.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
