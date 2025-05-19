import React from 'react';

const products = [
  {
    id: 1,
    code: 'PRD001',
    name: 'Produk A',
    stock: 120,
    price: 25000,
    image: 'https://picsum.photos/seed/produkA/50', // Gambar aman dan muncul
  },
  {
    id: 2,
    code: 'PRD002',
    name: 'Produk B',
    stock: 85,
    price: 40000,
    image: 'https://picsum.photos/seed/produkB/50',
  },
  {
    id: 3,
    code: 'PRD003',
    name: 'Produk C',
    stock: 50,
    price: 30000,
    image: 'https://picsum.photos/seed/produkC/50',
  },
];

export default function Page11() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Daftar Produk</h1>
        <p className="text-gray-600 mt-1">Selamat datang! Berikut adalah daftar produk tersedia.</p>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-x-auto">
        <table className="min-w-full text-left border-collapse">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="py-3 px-4">Thumbnail</th>
              <th className="py-3 px-4">Kode</th>
              <th className="py-3 px-4">Nama</th>
              <th className="py-3 px-4">Stok</th>
              <th className="py-3 px-4">Harga</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {products.map((product) => (
              <tr
                key={product.id}
                className="hover:bg-gray-50 border-b last:border-b-0"
              >
                <td className="py-3 px-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-12 h-12 object-cover rounded-full border"
                  />
                </td>
                <td className="py-3 px-4">{product.code}</td>
                <td className="py-3 px-4">{product.name}</td>
                <td className="py-3 px-4">{product.stock}</td>
                <td className="py-3 px-4">
                  Rp {product.price.toLocaleString('id-ID')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
