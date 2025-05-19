import React from "react";
import Chart from "react-apexcharts";

const dataProduk = [
  { nama_produk: "Produk A", jumlah_terjual: 120, kontribusi: 35 },
  { nama_produk: "Produk B", jumlah_terjual: 90, kontribusi: 25 },
  { nama_produk: "Produk C", jumlah_terjual: 60, kontribusi: 18 },
  { nama_produk: "Produk D", jumlah_terjual: 40, kontribusi: 12 },
  { nama_produk: "Produk E", jumlah_terjual: 20, kontribusi: 10 },
];

export default function Page4() {
  const chartConfig = {
    series: [
      {
        name: "Kontribusi (%)",
        data: dataProduk.map((produk) => produk.kontribusi),
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 300,
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        categories: dataProduk.map((produk) => produk.nama_produk),
      },
      colors: ["#3b82f6"],
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + "%";
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: false,
        },
      },
    },
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-xl font-bold text-gray-800 mb-2">
        Dashboard Produk Terlaris
      </h1>
      <p className="text-gray-600 mb-4">Selamat datang, Alifia Putri!</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {dataProduk.map((produk, index) => (
          <div
            key={index}
            className="bg-white shadow rounded p-4"
          >
            <h2 className="text-lg font-semibold text-gray-800 mb-1">
              {produk.nama_produk}
            </h2>
            <p className="text-gray-600">
              Jumlah Terjual:{" "}
              <span className="font-medium">{produk.jumlah_terjual}</span>
            </p>
            <p className="text-gray-600">
              Kontribusi:{" "}
              <span className="font-medium">{produk.kontribusi}%</span>
            </p>
          </div>
        ))}
      </div>

      <div className="bg-white shadow rounded p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          Kontribusi Penjualan Produk
        </h2>
        <Chart
          options={chartConfig.options}
          series={chartConfig.series}
          type="bar"
          height={300}
        />
      </div>
    </div>
  );
}
