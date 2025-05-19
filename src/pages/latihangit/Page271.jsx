import React, { useState } from 'react';

const taskData = [
  { user: 'si bre', task: 'Kerjakan laporan', deadline: '2025-05-20', status: 'Selesai' },
  { user: 'si bro', task: 'Upload tugas', deadline: '2025-05-21', status: 'Belum Selesai' },
  { user: 'sobat', task: 'Review dokumen', deadline: '2025-05-22', status: 'Dalam Proses' },
];

const statusStyle = {
  'Selesai': 'bg-green-50 text-green-800 border-green-200',
  'Belum Selesai': 'bg-red-50 text-red-800 border-red-200',
  'Dalam Proses': 'bg-yellow-50 text-yellow-800 border-yellow-200'
};

const DaftarTugas = () => {
  const [userFilter, setUserFilter] = useState('All');
  const users = ['All', ...new Set(taskData.map(t => t.user))];
  const filtered = userFilter === 'All' ? taskData : taskData.filter(t => t.user === userFilter);

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <h1 className="text-3xl font-bold">📋 Daftar Tugas</h1>
        <span className="text-gray-500 text-sm">Total: {filtered.length}</span>
      </div>

      <div>
        <label className="mr-2 font-medium text-gray-700 text-sm">Filter by User:</label>
        <select
          className="px-3 py-2 text-sm border rounded shadow-sm"
          value={userFilter}
          onChange={(e) => setUserFilter(e.target.value)}
        >
          {users.map(user => (
            <option key={user} value={user}>{user}</option>
          ))}
        </select>
      </div>

      <div className="space-y-4">
        {filtered.map((task, idx) => (
          <div
            key={idx}
            className={`p-4 rounded-xl border shadow-sm hover:shadow-md transition duration-200 ${
              statusStyle[task.status]
            }`}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-semibold px-2 py-1 bg-gray-200 rounded-full text-gray-700">
                👤 {task.user}
              </span>
              <span className="text-xs font-medium">{task.status}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <div>
                <p className="text-sm text-gray-600">Tugas</p>
                <p className="text-base font-medium">{task.task}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Deadline</p>
                <p className="text-base">{task.deadline}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Status.</p>
                <p className="text-base font-semibold">{task.status}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DaftarTugas;
