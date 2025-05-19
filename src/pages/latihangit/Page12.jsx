import React, { useState } from 'react';

export default function Page12() {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    image: null,
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProduct({ ...product, image: file });
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic simpan data produk di sini
    console.log(product);
  };

  return (
    <div className="p-4">
      <div className="max-w-3xl mx-auto bg-white p-8 shadow-md rounded-2xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Tambah / Edit Produk</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nama Produk</label>
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-xl shadow-sm focus:ring-green-500 focus:border-green-500"
              placeholder="Masukkan nama produk"
              required
            />
          </div>

          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">Harga</label>
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-xl shadow-sm focus:ring-green-500 focus:border-green-500"
              placeholder="Contoh: 25000"
              required
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Deskripsi</label>
            <textarea
              name="description"
              value={product.description}
              onChange={handleChange}
              rows="4"
              className="mt-1 block w-full border-gray-300 rounded-xl shadow-sm focus:ring-green-500 focus:border-green-500"
              placeholder="Tuliskan deskripsi produk"
            ></textarea>
          </div>

          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">Upload Gambar</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
            />
            {preview && (
              <div className="mt-4">
                <p className="text-sm text-gray-600 mb-1">Preview:</p>
                <img src={preview} alt="Preview" className="h-48 w-auto rounded-xl border" />
              </div>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-xl shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Simpan Produk
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
