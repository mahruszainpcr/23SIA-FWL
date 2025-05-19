import { useState } from "react";

export default function GenerateInvoice() {
    // State untuk form input dan preview
    const [formData, setFormData] = useState({
        customerName: '',
        invoiceNumber: '',
        date: '',
        items: [
            { description: '', quantity: '', price: '' }
        ]
    });

    // Fungsi untuk menangani perubahan input
    const handleInputChange = (e, index, field) => {
        const { name, value } = e.target;
        if (name === 'items') {
            const newItems = [...formData.items];
            newItems[index][field] = value;
            setFormData(prevState => ({ ...prevState, items: newItems }));
        } else {
            setFormData(prevState => ({ ...prevState, [name]: value }));
        }
    };

    // Fungsi untuk menambahkan baris item ke dalam invoice
    const handleAddItem = () => {
        setFormData(prevState => ({
            ...prevState,
            items: [...prevState.items, { description: '', quantity: '', price: '' }]
        }));
    };

    // Fungsi untuk menghitung total harga
    const calculateTotal = () => {
        return formData.items.reduce((total, item) => {
            return total + (parseFloat(item.quantity) * parseFloat(item.price) || 0);
        }, 0).toFixed(2);
    };

    return (
        <div className="p-6 bg-gradient-to-r from-teal-50 via-pink-50 to-indigo-50 min-h-screen">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-center text-teal-600 mb-6">Generate Invoice</h1>
                <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label htmlFor="customerName" className="block text-sm font-medium text-gray-700">Customer Name</label>
                            <input
                                type="text"
                                name="customerName"
                                id="customerName"
                                value={formData.customerName}
                                onChange={e => handleInputChange(e, null, 'customerName')}
                                className="mt-1 p-3 border border-gray-300 rounded-md w-full"
                                placeholder="Enter Customer Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="invoiceNumber" className="block text-sm font-medium text-gray-700">Invoice Number</label>
                            <input
                                type="text"
                                name="invoiceNumber"
                                id="invoiceNumber"
                                value={formData.invoiceNumber}
                                onChange={e => handleInputChange(e, null, 'invoiceNumber')}
                                className="mt-1 p-3 border border-gray-300 rounded-md w-full"
                                placeholder="Enter Invoice Number"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
                            <input
                                type="date"
                                name="date"
                                id="date"
                                value={formData.date}
                                onChange={e => handleInputChange(e, null, 'date')}
                                className="mt-1 p-3 border border-gray-300 rounded-md w-full"
                            />
                        </div>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-xl font-semibold text-teal-600">Items</h2>
                        {formData.items.map((item, index) => (
                            <div key={index} className="grid grid-cols-3 gap-6 mb-4">
                                <div>
                                    <label htmlFor={`description-${index}`} className="block text-sm font-medium text-gray-700">Description</label>
                                    <input
                                        type="text"
                                        name="items"
                                        value={item.description}
                                        onChange={e => handleInputChange(e, index, 'description')}
                                        className="mt-1 p-3 border border-gray-300 rounded-md w-full"
                                        placeholder="Item Description"
                                    />
                                </div>
                                <div>
                                    <label htmlFor={`quantity-${index}`} className="block text-sm font-medium text-gray-700">Quantity</label>
                                    <input
                                        type="number"
                                        name="items"
                                        value={item.quantity}
                                        onChange={e => handleInputChange(e, index, 'quantity')}
                                        className="mt-1 p-3 border border-gray-300 rounded-md w-full"
                                        placeholder="Quantity"
                                    />
                                </div>
                                <div>
                                    <label htmlFor={`price-${index}`} className="block text-sm font-medium text-gray-700">Price</label>
                                    <input
                                        type="number"
                                        name="items"
                                        value={item.price}
                                        onChange={e => handleInputChange(e, index, 'price')}
                                        className="mt-1 p-3 border border-gray-300 rounded-md w-full"
                                        placeholder="Price"
                                    />
                                </div>
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={handleAddItem}
                            className="px-6 py-2 bg-teal-600 text-white font-semibold rounded-md hover:bg-teal-700 transition duration-300"
                        >
                            Add Item
                        </button>
                    </div>

                    <div className="mt-6 text-right">
                        <button
                            type="button"
                            className="px-6 py-2 bg-teal-600 text-white font-semibold rounded-md hover:bg-teal-700 transition duration-300"
                            onClick={() => alert('Invoice Preview')}
                        >
                            Preview Invoice
                        </button>
                    </div>
                </form>

                {/* Preview Section */}
                <div className="mt-10 bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-teal-600 mb-4">Invoice Preview</h2>
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <strong>Customer Name: </strong> {formData.customerName}
                        </div>
                        <div>
                            <strong>Invoice Number: </strong> {formData.invoiceNumber}
                        </div>
                        <div>
                            <strong>Date: </strong> {formData.date}
                        </div>
                    </div>

                    <div className="mt-6">
                        <h3 className="text-xl font-semibold text-teal-600">Items</h3>
                        <table className="min-w-full mt-4 table-auto">
                            <thead className="bg-teal-600 text-white">
                                <tr>
                                    <th className="px-4 py-2 text-left">Description</th>
                                    <th className="px-4 py-2 text-left">Quantity</th>
                                    <th className="px-4 py-2 text-left">Price</th>
                                    <th className="px-4 py-2 text-left">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {formData.items.map((item, index) => (
                                    <tr key={index} className="border-b">
                                        <td className="px-4 py-2">{item.description}</td>
                                        <td className="px-4 py-2">{item.quantity}</td>
                                        <td className="px-4 py-2">${item.price}</td>
                                        <td className="px-4 py-2">${(item.quantity * item.price).toFixed(2)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-6 text-right">
                        <h3 className="text-xl font-semibold">Total: ${calculateTotal()}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}
