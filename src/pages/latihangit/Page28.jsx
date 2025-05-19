import React, { useState } from "react";
import { CheckCircle, Flag } from "lucide-react";

export default function Page28() {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("normal");
  const [tasks, setTasks] = useState([]); // daftar tugas

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;

    const newTask = {
      id: Date.now(),
      title: task,
      priority,
    };

    setTasks([...tasks, newTask]); // tambahkan tugas ke daftar
    setTask(""); // reset input
    setPriority("normal"); // reset prioritas
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Form Tambah Tugas */}
      <div className="w-full max-w-xl mx-auto bg-white shadow-lg rounded-2xl p-8 space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Tambah Tugas</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Input tugas */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Judul Tugas
            </label>
            <input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Masukkan nama tugas"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Tag prioritas */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Prioritas
            </label>
            <div className="flex gap-3">
              {["low", "normal", "high"].map((level) => (
                <button
                  key={level}
                  type="button"
                  onClick={() => setPriority(level)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-medium transition ${
                    priority === level
                      ? "bg-blue-100 border-blue-500 text-blue-700"
                      : "bg-white border-gray-300 text-gray-600 hover:border-blue-300"
                  }`}
                >
                  <Flag
                    size={16}
                    className={`${
                      level === "low"
                        ? "text-green-500"
                        : level === "normal"
                        ? "text-yellow-500"
                        : "text-red-500"
                    }`}
                  />
                  {level.charAt(0).toUpperCase() + level.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Tombol Submit */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
            >
              <CheckCircle size={18} />
              Simpan Tugas
            </button>
          </div>
        </form>
      </div>

      {/* Daftar Tugas */}
      <div className="w-full max-w-xl mx-auto mt-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Daftar Tugas
        </h3>
        <ul className="space-y-3">
          {tasks.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between p-4 bg-white rounded-xl shadow"
            >
              <div>
                <p className="font-medium text-gray-800">{item.title}</p>
                <p className="text-sm text-gray-500">
                  Prioritas:{" "}
                  <span
                    className={`${
                      item.priority === "low"
                        ? "text-green-600"
                        : item.priority === "normal"
                        ? "text-yellow-600"
                        : "text-red-600"
                    }`}
                  >
                    {item.priority}
                  </span>
                </p>
              </div>
            </li>
          ))}
          {tasks.length === 0 && (
            <li className="text-gray-500 text-center">Belum ada tugas.</li>
          )}
        </ul>
      </div>
    </div>
  );
}
