export default function Page14() {
    const produkList = [
        { nama: "Air Mineral", stok: 120 },
        { nama: "Roti Bakar", stok: 15 },
        { nama: "Indomie", stok: 40 },
        { nama: "Teh Botol", stok: 5 },
        { nama: "Coklat", stok: 80 },
    ];

    const isLowStock = (stok) => stok < 20;

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            {/* Header */}
            <header className="mb-6">
                <h1 className="text-3xl font-semibold text-gray-800">📦 Stok Produk</h1>
                <p className="text-gray-500 mt-1">
                    Pantau ketersediaan stok dan perhatikan produk dengan stok rendah.
                </p>
            </header>

            {/* Card */}
            <div className="bg-white rounded-2xl shadow-md p-6">
                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm">
                        <thead>
                            <tr className="text-gray-700 bg-gray-50 border-b">
                                <th className="px-6 py-4 text-left font-medium">Nama Produk</th>
                                <th className="px-6 py-4 text-left font-medium">Stok</th>
                                <th className="px-6 py-4 text-left font-medium">Status</th>
                                <th className="px-6 py-4 text-left font-medium">Status Bar</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {produkList.map((produk, index) => {
                                const isLow = isLowStock(produk.stok);
                                const stokMax = 150;
                                const persentase = (produk.stok / stokMax) * 100;

                                return (
                                    <tr key={index} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 font-medium text-gray-800">
                                            {produk.nama}
                                        </td>
                                        <td className="px-6 py-4">{produk.stok}</td>
                                        <td className="px-6 py-4">
                                            <span
                                                className={`px-3 py-1 text-xs font-bold rounded-full ${
                                                    isLow ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"
                                                }`}
                                            >
                                                {isLow ? "Stok Rendah" : "Tersedia"}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="w-full bg-gray-200 rounded-full h-2">
                                                <div
                                                    className={`h-2 rounded-full ${
                                                        isLow ? "bg-red-500" : "bg-green-500"
                                                    }`}
                                                    style={{ width: `${persentase}%` }}
                                                ></div>
                                            </div>
                                            <p className="text-xs text-gray-500 mt-1">{persentase.toFixed(0)}%</p>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
