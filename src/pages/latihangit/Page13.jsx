import React from 'react';

const kategoriData = [
  {
    nama_kategori: "Elektronik",
    keterangan: "Produk seperti laptop, smartphone, dan aksesoris elektronik lainnya.",
  },
  {
    nama_kategori: "Pakaian",
    keterangan: "Berbagai jenis pakaian pria dan wanita untuk berbagai keperluan.",
  },
  {
    nama_kategori: "Perabotan Rumah",
    keterangan: "Furniture dan peralatan rumah tangga untuk kebutuhan sehari-hari.",
  },
  {
    nama_kategori: "Kecantikan",
    keterangan: "Produk perawatan wajah, rambut, dan tubuh.",
  },
];

const Page13 = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Kategori Produk</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {kategoriData.map((kategori, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {kategori.nama_kategori}
            </h2>
            <p className="text-gray-600 text-sm">{kategori.keterangan}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page13;