export default function Page01() {
    return (
          <div className="min-h-screen bg-[#F2F2F2] p-6 space-y-6 font-sans">
      <h1 className="text-3xl font-bold text-[#6C625B]">Dashboard Overview</h1>

      {/* Kartu Statistik */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#EAE4D5] p-4 rounded-2xl shadow-md">
          <h2 className="text-lg font-semibold text-[#6C625B]">Total Pelanggan</h2>
          <p className="text-3xl font-bold text-[#6C625B] mt-2">1,230</p>
        </div>
        <div className="bg-[#FFE1E0] p-4 rounded-2xl shadow-md">
          <h2 className="text-lg font-semibold text-[#6C625B]">Total Penjualan</h2>
          <p className="text-3xl font-bold text-[#6C625B] mt-2">Rp 23,500,000</p>
        </div>
        <div className="bg-[#B6B09F] text-white p-4 rounded-2xl shadow-md">
          <h2 className="text-lg font-semibold">Tugas Hari Ini</h2>
          <ul className="list-disc list-inside mt-2 text-sm">
            <li>Balas pesan pelanggan</li>
            <li>Stok produk</li>
            <li>Update katalog</li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-md">
          <h2 className="text-lg font-semibold text-[#6C625B]">Notifikasi</h2>
          <ul className="text-sm mt-2 space-y-1">
            <li>📦 2 pesanan baru</li>
            <li>💬 1 ulasan masuk</li>
            <li>⚠️ Produk hampir habis</li>
          </ul>
        </div>
      </div>

      {/* Grafik Penjualan (Mock Chart Manual) */}
      <div className="bg-white p-4 rounded-2xl shadow-md">
        <h2 className="text-xl font-semibold text-[#6C625B] mb-4">Grafik Penjualan Mingguan</h2>
        <div className="flex items-end space-x-2 h-40">
          {[12, 19, 3, 5, 2, 3, 7].map((val, i) => (
            <div key={i} className="flex flex-col items-center">
              <div
                className="w-6 bg-[#B6B09F] rounded-t"
                style={{ height: `${val * 4}px` }}
              ></div>
              <span className="text-xs mt-1 text-[#6C625B]">
                {["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"][i]}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline Aktivitas */}
      <div className="bg-white p-4 rounded-2xl shadow-md">
        <h2 className="text-xl font-semibold text-[#6C625B] mb-4">Aktivitas Terakhir</h2>
        <ul className="space-y-4 relative border-l-2 border-[#B6B09F] pl-6">
          <li className="relative">
            <span className="absolute -left-2 top-1 w-3 h-3 bg-[#B6B09F] rounded-full" />
            <p className="text-sm text-[#6C625B]">09:00 - Pesanan #1234 diproses</p>
          </li>
          <li className="relative">
            <span className="absolute -left-2 top-1 w-3 h-3 bg-[#B6B09F] rounded-full" />
            <p className="text-sm text-[#6C625B]">10:15 - Stok produk "Toner" diperbarui</p>
          </li>
          <li className="relative">
            <span className="absolute -left-2 top-1 w-3 h-3 bg-[#B6B09F] rounded-full" />
            <p className="text-sm text-[#6C625B]">13:45 - Pengguna baru mendaftar</p>
          </li>
        </ul>
      </div>
    </div>
  );
}