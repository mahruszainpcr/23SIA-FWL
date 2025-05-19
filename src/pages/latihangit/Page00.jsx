import React from 'react';

const pesanData = [
  {
    id: 1,
    judul: 'Judul Pesan 1',
    isi: 'Ini adalah isi pesan singkat. Kontennya menjelaskan informasi penting yang disampaikan melalui pesan ini...',
    media: {
      type: 'image',
      url: 'https://via.placeholder.com/300x150'
    }
  },
  {
    id: 2,
    judul: 'Judul Pesan 2',
    isi: 'Contoh isi pesan lainnya yang singkat namun memberikan penjelasan yang cukup...',
    media: {
      type: 'video',
      url: 'https://www.w3schools.com/html/mov_bbb.mp4'
    }
  }
];

const CardPesan = ({ pesan }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition duration-300 ease-in-out">
      <h2 className="text-xl font-semibold mb-2 truncate">{pesan.judul}</h2>
      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{pesan.isi}</p>

      <div className="mb-4">
        {pesan.media.type === 'image' ? (
          <img
            src={pesan.media.url}
            alt="Preview Media"
            className="w-full rounded-md object-cover"
          />
        ) : pesan.media.type === 'video' ? (
          <video controls className="w-full rounded-md">
            <source src={pesan.media.url} type="video/mp4" />
            Browser tidak mendukung video.
          </video>
        ) : null}
      </div>

      <div className="text-right">
        <button className="bg-blue-600 text-white px-4 py-2 text-sm rounded-xl hover:bg-blue-700 transition">
          Preview
        </button>
      </div>
    </div>
  );
};

const Page00 = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Daftar Template Pesan</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pesanData.map((pesan) => (
            <CardPesan key={pesan.id} pesan={pesan} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page00;
