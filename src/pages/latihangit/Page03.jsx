export default function Page03() {
  const users = [
    {
      id: 1,
      name: 'Dian Putra',
      avatar: 'https://i.pravatar.cc/150?img=3',
      transaksi: 25,
      followUp: 'Sudah'
    },
    {
      id: 2,
      name: 'Sarah Amalia',
      avatar: 'https://i.pravatar.cc/150?img=5',
      transaksi: 14,
      followUp: 'Belum'
    },
    {
      id: 3,
      name: 'Rizky Ramadhan',
      avatar: 'https://i.pravatar.cc/150?img=7',
      transaksi: 8,
      followUp: 'Sudah'
    },
  ];

  return (
    <div className="p-4 min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">Dashboard Aktivitas Tim</h1>

        <div className="bg-white shadow-md rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-gray-50 text-gray-600">
                <tr>
                  <th className="px-6 py-4 text-left">Pengguna</th>
                  <th className="px-6 py-4 text-left">Jumlah Transaksi</th>
                  <th className="px-6 py-4 text-left">Status Follow Up</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50 transition duration-150">
                    <td className="px-6 py-4 flex items-center gap-3">
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-10 h-10 rounded-full object-cover shadow-sm"
                      />
                      <span className="font-medium text-gray-800">{user.name}</span>
                    </td>
                    <td className="px-6 py-4">{user.transaksi}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                          user.followUp === 'Sudah'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-yellow-100 text-yellow-700'
                        }`}
                      >
                        {user.followUp}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
