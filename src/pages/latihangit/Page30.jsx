import React, { useState } from "react";
import { Switch } from "@headlessui/react";
import { BellIcon } from "lucide-react";

// Data dummy awal
const remindersData = [
  {
    id: 1,
    jenis: "Meeting",
    penerima: "Tim A",
    tanggal: "2025-05-22",
    aktif: true,
  },
  {
    id: 2,
    jenis: "Deadline",
    penerima: "Manager",
    tanggal: "2025-05-25",
    aktif: false,
  },
  {
    id: 3,
    jenis: "Follow-up",
    penerima: "Client X",
    tanggal: "2025-05-27",
    aktif: true,
  },
];

export default function Page30() {
  const [reminders, setReminders] = useState(remindersData);

  const toggleReminder = (id) => {
    setReminders((prev) =>
      prev.map((r) =>
        r.id === id ? { ...r, aktif: !r.aktif } : r
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <BellIcon className="w-7 h-7 text-indigo-500" />
          Reminder Otomatis
        </h1>

        <div className="grid gap-4">
          {reminders.map((reminder) => (
            <div
              key={reminder.id}
              className="bg-white shadow-md rounded-2xl p-4 flex items-center justify-between hover:shadow-lg transition"
            >
              <div>
                <p className="text-sm text-gray-500">{reminder.jenis}</p>
                <h2 className="text-lg font-semibold text-gray-800">{reminder.penerima}</h2>
                <p className="text-sm text-gray-400">{reminder.tanggal}</p>
              </div>

              <Switch
                checked={reminder.aktif}
                onChange={() => toggleReminder(reminder.id)}
                className={`${
                  reminder.aktif ? "bg-indigo-600" : "bg-gray-300"
                } relative inline-flex h-6 w-11 items-center rounded-full transition-colors`}
              >
                <span
                  className={`${
                    reminder.aktif ? "translate-x-6" : "translate-x-1"
                  } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                />
              </Switch>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}