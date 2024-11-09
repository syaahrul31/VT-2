import {
  FaUsers,
  FaArrowLeft,
  FaPlus,
  FaTrash,
  FaSearch,
} from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function DaftarTamu() {
  const navigate = useNavigate();
  const [guests, setGuests] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTamuList, setFilteredTamuList] = useState([]);

  // Fungsi untuk mengambil data dari localStorage saat komponen dimuat
  useEffect(() => {
    const storedGuests = JSON.parse(localStorage.getItem('tamuList')) || [];
    setGuests(storedGuests);
    setFilteredTamuList(storedGuests);
  }, []);

  useEffect(() => {
    const results = guests.filter(
      (tamu) =>
        tamu.namaLengkap.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tamu.noHp.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setFilteredTamuList(results);
  }, [searchTerm, guests]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Fungsi untuk menghapus tamu berdasarkan index
  const handleDelete = (index) => {
    const adjustedIndex = guests.length - 1 - index;
    const updatedGuests = guests.filter((_, i) => i !== adjustedIndex);
    setGuests(updatedGuests);
    localStorage.setItem('tamuList', JSON.stringify(updatedGuests));
    alert('Hapus Data Tamu Berhasil!');
  };

  // Fungsi untuk clear semua data tamu
  const handleClearData = () => {
    localStorage.removeItem('tamuList');
    setGuests([]);
    alert('Hapus Seluruh Data Tamu Berhasil!');
  };

  // Fungsi untuk navigasi ke halaman tambah tamu
  const handleAddGuest = () => {
    navigate('/tambah-tamu-page');
  };

  return (
    <>
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 flex items-center justify-center">
        <FaUsers className="text-yellow-500 mr-2" />
        Daftar Tamu
      </h2>

      <div className="mt-6 flex justify-between items-center text-sm mb-6">
        <Link
          to="/dashboard-page"
          className="flex items-center text-sm text-gray-600 hover:text-yellow-500 transition"
        >
          <FaArrowLeft className="text-yellow-500 mr-2" />
          Kembali
        </Link>
        <button
          onClick={handleAddGuest}
          className="bg-gradient-to-r from-orange-500 to-red-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg shadow-sm flex items-center transition"
        >
          <FaPlus className="mr-2" />
          Tambah Tamu
        </button>
      </div>

      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Cari Berdasarkan Nama atau No Telepon"
          value={searchTerm}
          onChange={handleSearch}
          className="w-full p-2 pl-10 border rounded-md shadow-md focus:ring-2 focus:ring-yellow-500 focus:outline-none transition duration-300"
        />
        <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
              <th className="px-4 py-2">No</th>
              <th className="px-6 py-2">Tanggal</th>
              <th className="px-6 py-2">Nama Tamu</th>
              <th className="px-6 py-2">No WA</th>
              <th className="px-6 py-2">Keperluan</th>
              <th className="px-6 py-2">Aksi</th>
            </tr>
          </thead>
          <tbody id="guestTableBody">
            {searchTerm !== '' ? (
              filteredTamuList.length > 0 ? (
                filteredTamuList
                  .slice()
                  .reverse()
                  .map((tamu, index) => (
                    <tr key={index}>
                      <td className="border px-4 py-2">{index + 1}</td>
                      <td className="border px-6 py-2">
                        {tamu.tanggal} {tamu.waktu}
                      </td>
                      <td className="border px-6 py-2">{tamu.namaLengkap}</td>
                      <td className="border px-6 py-2">{tamu.noHp}</td>
                      <td className="border px-6 py-2">{tamu.keperluan}</td>
                      <td className="border px-6 py-2">
                        <button
                          onClick={() => handleDelete(index)}
                          className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-md"
                        >
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center py-4">
                    Data Tidak Ditemukan
                  </td>
                </tr>
              )
            ) : guests.length > 0 ? (
              guests
                .slice()
                .reverse()
                .map((tamu, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">{index + 1}</td>
                    <td className="border px-6 py-2">
                      {tamu.tanggal} {tamu.waktu}
                    </td>
                    <td className="border px-6 py-2">{tamu.namaLengkap}</td>
                    <td className="border px-6 py-2">{tamu.noHp}</td>
                    <td className="border px-6 py-2">{tamu.keperluan}</td>
                    <td className="border px-6 py-2">
                      <button
                        onClick={() => handleDelete(index)}
                        className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-md"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center py-4">
                  Tidak ada tamu yang terdaftar
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <button
        onClick={handleClearData}
        className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
      >
        Clear Data
      </button>
    </>
  );
}

export default DaftarTamu;
