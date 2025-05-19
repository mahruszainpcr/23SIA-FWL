import { useState, useEffect } from 'react';
import { FiEdit, FiTrash2, FiPlus, FiSearch, FiChevronDown, FiChevronUp } from 'react-icons/fi';

const Page06 = () => {
  // Data state
  const [customers, setCustomers] = useState([]);
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  
  // Form state
  const [formData, setFormData] = useState({
    id: '',
    nama: '',
    email: '',
    telepon: '',
    kategori: 'Reguler'
  });
  
  // UI state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  
  // Categories
  const categories = ['Semua', 'Reguler', 'Premium', 'VIP'];
  
  // Initialize with sample data
  useEffect(() => {
    const sampleData = [
      { id: 1, nama: 'John Doe', email: 'john@example.com', telepon: '08123456789', kategori: 'Premium' },
      { id: 2, nama: 'Jane Smith', email: 'jane@example.com', telepon: '08234567890', kategori: 'Reguler' },
      { id: 3, nama: 'Robert Johnson', email: 'robert@example.com', telepon: '08345678901', kategori: 'VIP' },
      { id: 4, nama: 'Emily Davis', email: 'emily@example.com', telepon: '08456789012', kategori: 'Premium' },
      { id: 5, nama: 'Michael Brown', email: 'michael@example.com', telepon: '08567890123', kategori: 'Reguler' },
    ];
    setCustomers(sampleData);
    setFilteredCustomers(sampleData);
  }, []);
  
  // Filter and sort effect
  useEffect(() => {
    let result = [...customers];
    
    // Apply search filter
    if (searchTerm) {
      result = result.filter(customer => 
        customer.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.telepon.includes(searchTerm)
      );
    }
    
    // Apply category filter
    if (selectedCategory !== 'Semua') {
      result = result.filter(customer => customer.kategori === selectedCategory);
    }
    
    // Apply sorting
    if (sortConfig.key) {
      result.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    
    setFilteredCustomers(result);
  }, [customers, searchTerm, selectedCategory, sortConfig]);
  
  // Handle sort request
  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };
  
  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isEditMode) {
      // Update existing customer
      setCustomers(customers.map(customer => 
        customer.id === formData.id ? formData : customer
      ));
    } else {
      // Add new customer
      const newCustomer = {
        ...formData,
        id: Date.now() // Simple ID generation
      };
      setCustomers([...customers, newCustomer]);
    }
    
    // Reset form and close modal
    resetForm();
    setIsModalOpen(false);
  };
  
  // Edit customer
  const handleEdit = (customer) => {
    setFormData(customer);
    setIsEditMode(true);
    setIsModalOpen(true);
  };
  
  // Delete customer
  const handleDelete = (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus pelanggan ini?')) {
      setCustomers(customers.filter(customer => customer.id !== id));
    }
  };
  
  // Reset form
  const resetForm = () => {
    setFormData({
      id: '',
      nama: '',
      email: '',
      telepon: '',
      kategori: 'Reguler'
    });
    setIsEditMode(false);
  };
  
  // Get sort icon
  const getSortIcon = (key) => {
    if (sortConfig.key !== key) return null;
    return sortConfig.direction === 'ascending' ? <FiChevronUp /> : <FiChevronDown />;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Daftar Pelanggan</h1>
          <p className="text-gray-600">Kelola data pelanggan Anda dengan mudah</p>
        </div>
        
        {/* Action Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          {/* Search */}
          <div className="relative w-full md:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Cari pelanggan..."
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          {/* Category Filter */}
          <div className="flex items-center gap-2 w-full md:w-auto">
            <label className="text-gray-700 whitespace-nowrap">Kategori:</label>
            <select
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          
          {/* Add Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full md:w-auto flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition duration-200"
          >
            <FiPlus /> Tambah Pelanggan
          </button>
        </div>
        
        
        {/* Table */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-green-50">
                <tr>
                  <th 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider cursor-pointer"
                    onClick={() => requestSort('nama')}
                  >
                    <div className="flex items-center gap-1">
                      Nama
                      {getSortIcon('nama')}
                    </div>
                  </th>
                  <th 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider cursor-pointer"
                    onClick={() => requestSort('email')}
                  >
                    <div className="flex items-center gap-1">
                      Email
                      {getSortIcon('email')}
                    </div>
                  </th>
                  <th 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider cursor-pointer"
                    onClick={() => requestSort('telepon')}
                  >
                    <div className="flex items-center gap-1">
                      Telepon
                      {getSortIcon('telepon')}
                    </div>
                  </th>
                  <th 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider cursor-pointer"
                    onClick={() => requestSort('kategori')}
                  >
                    <div className="flex items-center gap-1">
                      Kategori
                      {getSortIcon('kategori')}
                    </div>
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredCustomers.length > 0 ? (
                  filteredCustomers.map((customer) => (
                    <tr key={customer.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{customer.nama}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-600">{customer.email}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-600">{customer.telepon}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                          ${customer.kategori === 'VIP' ? 'bg-purple-100 text-purple-800' :
                            customer.kategori === 'Premium' ? 'bg-blue-100 text-blue-800' :
                            'bg-green-100 text-green-800'}`}>
                          {customer.kategori}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => handleEdit(customer)}
                          className="text-green-600 hover:text-green-900 mr-4"
                        >
                          <FiEdit />
                        </button>
                        <button
                          onClick={() => handleDelete(customer.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <FiTrash2 />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="px-6 py-4 text-center text-sm text-gray-500">
                      Tidak ada data pelanggan yang ditemukan
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  {isEditMode ? 'Edit Pelanggan' : 'Tambah Pelanggan'}
                </h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="nama">
                      Nama
                    </label>
                    <input
                      type="text"
                      id="nama"
                      name="nama"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      value={formData.nama}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="telepon">
                      Telepon
                    </label>
                    <input
                      type="tel"
                      id="telepon"
                      name="telepon"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      value={formData.telepon}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="kategori">
                      Kategori
                    </label>
                    <select
                      id="kategori"
                      name="kategori"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      value={formData.kategori}
                      onChange={handleInputChange}
                    >
                      <option value="Reguler">Reguler</option>
                      <option value="Premium">Premium</option>
                      <option value="VIP">VIP</option>
                    </select>
                  </div>
                  
                  <div className="flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setIsModalOpen(false);
                        resetForm();
                      }}
                      className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                    >
                      Batal
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg"
                    >
                      {isEditMode ? 'Simpan Perubahan' : 'Tambah Pelanggan'}
                    </button>
                  </div>
                </form>
                
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page06;