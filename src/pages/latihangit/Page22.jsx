export default function Page22() {
  const invoice = {
    produk: [
      { nama: "Produk A", qty: 2, harga: 50000 },
      { nama: "Produk B", qty: 1, harga: 75000 },
    ],
    total: 175000,
    catatan: "Harap dikirim sebelum akhir bulan.",
  };

  return (
    <div className="p-4 min-h-screen bg-gray-100 flex justify-center">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-8 space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">Detail Invoice</h1>

        {/* Produk List */}
        <div className="bg-gray-50 p-4 rounded-xl border shadow-sm">
          <h2 className="text-lg font-semibold mb-3 text-gray-700">Daftar Produk</h2>
          <table className="w-full text-sm text-left">
            <thead className="text-gray-600 border-b">
              <tr>
                <th className="pb-2">Nama Produk</th>
                <th className="pb-2">Jumlah</th>
                <th className="pb-2">Harga Satuan</th>
                <th className="pb-2">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {invoice.produk.map((item, index) => (
                <tr key={index} className="border-b last:border-0">
                  <td className="py-2">{item.nama}</td>
                  <td className="py-2">{item.qty}</td>
                  <td className="py-2">Rp {item.harga.toLocaleString()}</td>
                  <td className="py-2">
                    Rp {(item.qty * item.harga).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Total */}
        <div className="flex justify-end">
          <div className="bg-green-50 border border-green-200 rounded-xl px-6 py-4 shadow-sm">
            <p className="text-lg font-semibold text-gray-700">Total:</p>
            <p className="text-2xl font-bold text-green-600">
              Rp {invoice.total.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Catatan */}
        <div className="bg-yellow-50 p-4 border border-yellow-200 rounded-xl shadow-sm">
          <h3 className="font-semibold text-gray-700 mb-1">Catatan</h3>
          <p className="text-gray-600">{invoice.catatan}</p>
        </div>
      </div>
    </div>
  );
}
