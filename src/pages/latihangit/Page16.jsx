import { useState } from "react";

export default function Page16() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    produk: "",
    pelanggan: "",
    total: ""
  });

  const produkList = [
    "Nugget Ayam 500gr",
    "Sosis Sapi 1kg",
    "Bakso Ikan 250gr",
    "Ayam Fillet 1kg",
    "Kornet Sapi Kaleng"
  ];

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    alert(`Data terkirim:\n${JSON.stringify(formData, null, 2)}`);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md space-y-6">
      <h1 className="text-2xl font-bold text-center">Form Pemesanan Produk</h1>

      {/* Step Indicator */}
      <div className="flex justify-between text-sm font-medium text-gray-600">
        <div className={step === 1 ? "text-blue-600 font-bold" : ""}>1. Produk</div>
        <div className={step === 2 ? "text-blue-600 font-bold" : ""}>2. Pelanggan</div>
        <div className={step === 3 ? "text-blue-600 font-bold" : ""}>3. Total</div>
      </div>

      {/* Step Form Content */}
      {step === 1 && (
        <div>
          <label className="block mb-2 font-semibold">Produk</label>
          <input
            type="text"
            list="produk-list"
            value={formData.produk}
            onChange={(e) => handleChange("produk", e.target.value)}
            placeholder="Ketik nama produk..."
            className="w-full p-2 border rounded"
          />
          <datalist id="produk-list">
            {produkList.map((item, idx) => (
              <option key={idx} value={item} />
            ))}
          </datalist>
        </div>
      )}

      {step === 2 && (
        <div>
          <label className="block mb-2 font-semibold">Nama Pelanggan</label>
          <input
            type="text"
            value={formData.pelanggan}
            onChange={(e) => handleChange("pelanggan", e.target.value)}
            placeholder="Masukkan nama pelanggan"
            className="w-full p-2 border rounded"
          />
        </div>
      )}

      {step === 3 && (
        <div>
          <label className="block mb-2 font-semibold">Total Pembelian (Rp)</label>
          <input
            type="number"
            value={formData.total}
            onChange={(e) => handleChange("total", e.target.value)}
            placeholder="Contoh: 75000"
            className="w-full p-2 border rounded"
          />
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between pt-4">
        <button
          onClick={handlePrev}
          disabled={step === 1}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Sebelumnya
        </button>
        {step < 3 ? (
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Selanjutnya
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-green-600 text-white rounded"
          >
            Kirim
          </button>
        )}
      </div>
    </div>
  );
}
