import React, { useState } from "react";

export default function CustomerForm({ onSubmit, initialData = {} }) {
  const [formData, setFormData] = useState({
    name: initialData.name || "",
    email: initialData.email || "",
    phone: initialData.phone || "",
    address: initialData.address || "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Nama wajib diisi";
    if (!formData.email) newErrors.email = "Email wajib diisi";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Format email tidak valid";
    if (!formData.phone) newErrors.phone = "Nomor telepon wajib diisi";
    if (!formData.address) newErrors.address = "Alamat wajib diisi";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) onSubmit(formData);
  };

  return (
    <div className="max-w-2xl mx-auto p-8 mt-10 bg-gradient-to-br from-white to-blue-50 shadow-2xl rounded-3xl">
      <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
        {initialData.id ? "Edit" : "Tambah"} Pelanggan
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Nama</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-5 py-3 rounded-xl shadow-sm border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.name ? "border-red-500" : "border-gray-300"}`}
            placeholder="Masukkan nama pelanggan"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-5 py-3 rounded-xl shadow-sm border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? "border-red-500" : "border-gray-300"}`}
            placeholder="contoh@email.com"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Nomor Telepon</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-5 py-3 rounded-xl shadow-sm border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.phone ? "border-red-500" : "border-gray-300"}`}
            placeholder="08xxxxxxxxxx"
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>

        {/* Address */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Alamat</label>
          <textarea
            name="address"
            rows="3"
            value={formData.address}
            onChange={handleChange}
            className={`w-full px-5 py-3 rounded-xl shadow-sm border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.address ? "border-red-500" : "border-gray-300"}`}
            placeholder="Masukkan alamat lengkap"
          />
          {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
        </div>

        {/* Button */}
        <div className="pt-6 text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-8 py-3 text-sm font-semibold rounded-xl hover:bg-blue-700 transition duration-200"
          >
            {initialData.id ? "Simpan Perubahan" : "Tambah Pelanggan"}
          </button>
        </div>
      </form>
    </div>
  );
}
