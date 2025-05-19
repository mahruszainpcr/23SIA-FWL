import { useState } from "react";

export default function Page31() {
    const [template, setTemplate] = useState("");
    const [recipients, setRecipients] = useState([]);
    const [tanggal, setTanggal] = useState("");
    const [waktu, setWaktu] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Contoh aksi ketika tombol diklik
        const data = {
            template,
            recipients,
            tanggal,
            waktu,
        };

        console.log("Data Broadcast:", data);
        alert("Broadcast berhasil disiapkan!");
    };

    return (
        <div className="p-6 max-w-3xl mx-auto bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen rounded-xl shadow-lg">
            <h1 className="text-2xl font-bold text-indigo-700 mb-6">📣 Kirim Broadcast - Wahyu Apriliana</h1>

            <form onSubmit={handleSubmit}>
                {/* Template */}
                <div className="mb-5">
                    <label className="block text-sm font-medium text-indigo-700 mb-1">🎨 Template Pesan</label>
                    <select
                        value={template}
                        onChange={(e) => setTemplate(e.target.value)}
                        className="w-full border border-indigo-300 rounded-lg px-4 py-2 bg-white focus:ring-2 focus:ring-indigo-400"
                    >
                        <option value="">Pilih template...</option>
                        <option value="promo">Promo Spesial</option>
                        <option value="update">Update Produk</option>
                        <option value="reminder">Reminder Event</option>
                    </select>
                </div>

                {/* Penerima */}
                <div className="mb-5">
                    <label className="block text-sm font-medium text-indigo-700 mb-1">👥 Pilih Penerima</label>
                    <select
                        multiple
                        value={recipients}
                        onChange={(e) =>
                            setRecipients([...e.target.selectedOptions].map((o) => o.value))
                        }
                        className="w-full border border-indigo-300 rounded-lg px-4 py-2 h-32 bg-white focus:ring-2 focus:ring-indigo-400"
                    >
                        <option value="user-a">User A</option>
                        <option value="user-b">User B</option>
                        <option value="user-c">User C</option>
                    </select>
                    <p className="text-xs text-gray-500 mt-1 italic">
                        Tekan Ctrl (Cmd di Mac) untuk memilih lebih dari satu.
                    </p>
                </div>

                {/* Jadwal */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                        <label className="block text-sm font-medium text-indigo-700 mb-1">📅 Tanggal Kirim</label>
                        <input
                            type="date"
                            value={tanggal}
                            onChange={(e) => setTanggal(e.target.value)}
                            className="w-full border border-indigo-300 rounded-lg px-4 py-2 bg-white focus:ring-2 focus:ring-indigo-400"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-indigo-700 mb-1">⏰ Waktu Kirim</label>
                        <input
                            type="time"
                            value={waktu}
                            onChange={(e) => setWaktu(e.target.value)}
                            className="w-full border border-indigo-300 rounded-lg px-4 py-2 bg-white focus:ring-2 focus:ring-indigo-400"
                        />
                    </div>
                </div>

                {/* Tombol Kirim */}
                <button
                    type="submit"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-2 rounded-lg transition-all duration-200"
                >
                    🚀 Kirim Broadcast
                </button>
            </form>
        </div>
    );
}
