export default function Page24() {
  const invoiceData = [
    { nomor_invoice: "INV-001", link: "/invoices/inv-001.pdf" },
    { nomor_invoice: "INV-002", link: "/invoices/inv-002.pdf" },
    { nomor_invoice: "INV-003", link: "/invoices/inv-003.pdf" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Download Invoice PDF
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Selamat datang! Silakan unduh invoice kamu di bawah ini 👇
        </p>

        <div className="space-y-5">
          {invoiceData.map((invoice, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-5 border border-gray-200 rounded-xl shadow-sm bg-gray-50 hover:shadow-md transition"
            >
              <div>
                <p className="text-lg font-semibold text-gray-700">
                  {invoice.nomor_invoice}
                </p>
                <p className="text-sm text-gray-500">Klik untuk mengunduh PDF</p>
              </div>
              <a
                href={invoice.link}
                download
                className="inline-block bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg text-sm font-medium transition"
              >
                Download
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
