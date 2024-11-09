import { FaBed, FaCalendar, FaUsers, FaStar } from 'react-icons/fa';

function BerandaAdmin() {
  return (
    <div className="mb-20">
      <h2 className="text-2xl font-semibold text-gray-800">
        Selamat Datang di Dashboard Villa Tiara
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center">
            <div className="w-16 h-16 bg-yellow-500 text-white flex justify-center items-center rounded-full">
              <FaBed size={35} />
            </div>
            <div className="ml-4">
              <h3 className="text-md font-medium text-gray-600">
                Kamar Tersedia
              </h3>
              <p className="text-2xl font-bold text-gray-800">32</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center">
            <div className="w-16 h-16 bg-blue-500 text-white flex justify-center items-center rounded-full">
              <FaCalendar size={30} />
            </div>
            <div className="ml-4">
              <h3 className="text-md font-medium text-gray-600">
                Kamar Terpakai
              </h3>
              <p className="text-2xl font-bold text-gray-800">12</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center">
            <div className="w-16 h-16 bg-green-500 text-white flex justify-center items-center rounded-full">
              <FaUsers size={35} />
            </div>
            <div className="ml-4">
              <h3 className="text-md font-medium text-gray-600">
                Tamu Terdaftar
              </h3>
              <p className="text-2xl font-bold text-gray-800">150</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center">
            <div className="w-16 h-16 bg-red-500 text-white flex justify-center items-center rounded-full">
              <FaStar size={35} />
            </div>
            <div className="ml-4">
              <h3 className="text-md font-medium text-gray-600">Ulasan</h3>
              <p className="text-2xl font-bold text-gray-800">120</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <h3 className="font-semibold text-gray-800 mb-4">
            Reservasi Terbaru
          </h3>
          <div className="overflow-x-auto bg-white shadow-lg rounded-xl">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 bg-gray-300 text-left text-black">
                    Nama
                  </th>
                  <th className="py-2 px-4 bg-gray-300 text-left text-black">
                    Tipe Kamar
                  </th>
                  <th className="py-2 px-4 bg-gray-300 text-left text-black">
                    Tanggal
                  </th>
                  <th className="py-2 px-4 bg-gray-300 text-left text-black">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b border-gray-200">
                    John Doe
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">Deluxe</td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    11 Okt 2024
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200 text-green-500">
                    Dikonfirmasi
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-gray-200">
                    Jane Smith
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">Suite</td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    10 Okt 2024
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200 text-yellow-500">
                    Menunggu
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-gray-200">
                    Richard Roe
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    Standard
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    9 Okt 2024
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200 text-red-500">
                    Dibatalkan
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white-4 col-span-1">
          <h3 className="font-semibold text-gray-800 mb-4">Pengumuman</h3>
          <div className="bg-white rounded-xl shadow-lg">
            <div className="py-4 px-5">
              <p className="mb-2">
                Libur Nasional{' '}
                <span className=" text-white bg-red-500 text-xs px-3 py-1 rounded-2xl mb-5">
                  Penting
                </span>
              </p>
              <p className="text-xs text-gray-500">
                Oleh: Nama Syahrul - 2022-03-02 00:00
              </p>
            </div>
            <div className="py-4 px-5">
              <p className="mb-2">
                Libur Nasional{' '}
                <span className=" text-white bg-yellow-500 text-xs px-3 py-1 rounded-2xl mb-5">
                  Penting
                </span>
              </p>
              <p className="text-xs text-gray-500">
                Oleh: Nama Syahrul - 2022-03-02 00:00
              </p>
            </div>
            <div className="py-4 px-5">
              <p className="mb-2">
                Libur Nasional{' '}
                <span className=" text-white bg-red-500 text-xs px-3 py-1 rounded-2xl mb-5">
                  Penting
                </span>
              </p>
              <p className="text-xs text-gray-500">
                Oleh: Nama Syahrul - 2022-03-02 00:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BerandaAdmin;
