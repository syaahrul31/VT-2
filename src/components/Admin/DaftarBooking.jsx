import { useEffect, useState } from 'react';
import {
  FaPlus,
  FaBookOpen,
  FaArrowLeft,
  FaTrash,
  FaSearch,
  FaSignInAlt,
} from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

function DaftarBooking() {
  const navigate = useNavigate();
  const [reservasiList, setReservasiList] = useState([]);
  const [checkInList, setCheckInList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredReservasiList, setFilteredReservasiList] = useState([]);

  // Load data tamu dari local storage saat komponen dimuat
  useEffect(() => {
    const storedReservations =
      JSON.parse(localStorage.getItem('reservasiList')) || [];
    const storedCheckInList =
      JSON.parse(localStorage.getItem('checkInList')) || [];
    setReservasiList(storedReservations);
    setCheckInList(storedCheckInList);
    setFilteredReservasiList(storedReservations);
  }, []);

  useEffect(() => {
    const results = reservasiList.filter(
      (reservasi) =>
        reservasi.namaTamu.toLowerCase().includes(searchTerm.toLowerCase()) ||
        reservasi.idKamar.toLowerCase().includes(searchTerm.toLowerCase()) ||
        reservasi.noTelepon.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setFilteredReservasiList(results);
  }, [searchTerm, reservasiList]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Fungsi untuk checkIn berdasarkan index
  const handleCheckInClick = (index) => {
    // Menyesuaikan index untuk mencocokkan dengan urutan terbalik
    const adjustedIndex = reservasiList.length - 1 - index;
    const updatedReservations = reservasiList.filter(
      (_, i) => i !== adjustedIndex,
    );
    const updatedReservation = {
      ...reservasiList[adjustedIndex],
      statusReservasi: 'checkin',
    };

    const newCheckInList = [...checkInList, updatedReservation];

    setReservasiList(updatedReservations);
    setCheckInList(newCheckInList);

    localStorage.setItem('reservasiList', JSON.stringify(updatedReservations));
    localStorage.setItem('checkInList', JSON.stringify(newCheckInList));

    // Ambil data tamu yang sudah ada di local storage (jika ada)
    const existingGuests = JSON.parse(localStorage.getItem('tamuList')) || [];

    // Data tamu baru untuk disimpan
    const newGuest = {
      namaLengkap: updatedReservation.namaTamu,
      noHp: updatedReservation.noTelepon,
      keperluan: 'Check-in',
      tanggal: new Date().toLocaleDateString(),
      waktu: new Date().toLocaleTimeString(),
    };
    // Tambahkan data tamu baru ke array
    existingGuests.push(newGuest); // Simpan kembali ke local storage
    localStorage.setItem('tamuList', JSON.stringify(existingGuests));

    alert('Check-In Berhasil!');
  };

  // Fungsi untuk menghapus tamu berdasarkan index
  const handleDelete = (index) => {
    const adjustedIndex = reservasiList.length - 1 - index;
    const updatedReservations = reservasiList.filter(
      (_, i) => i !== adjustedIndex,
    );
    setReservasiList(updatedReservations);
    localStorage.setItem('reservasiList', JSON.stringify(updatedReservations));
    alert('Hapus Data Berhasil!');
  };

  // Fungsi untuk menghapus semua data reservasi
  const clearData = () => {
    localStorage.removeItem('reservasiList');
    setReservasiList([]);
    alert('Hapus Seluruh Data Berhasil!');
  };

  // Fungsi untuk navigasi ke halaman tambah tamu
  const handleAddGuest = () => {
    navigate('/booking-page');
  };

  return (
    <>
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 flex items-center justify-center">
        <FaBookOpen className="text-yellow-500 mr-2" />
        Daftar Reservasi
      </h2>

      <div className="mt-6 flex justify-between items-center text-sm mb-6">
        <Link
          to="/dashboard-page"
          className="flex items-center text-md font-semibold text-gray-600 hover:text-yellow-500 transition"
        >
          <FaArrowLeft className="text-yellow-500 mr-2" />
          Kembali
        </Link>
        <button
          onClick={handleAddGuest}
          className="bg-gradient-to-r from-orange-500 to-red-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg shadow-sm flex items-center transition"
        >
          <FaPlus className="mr-2" />
          Tambah Booking
        </button>
      </div>

      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Cari Berdasarkan Nama, ID Kamar, atau No Telepon"
          value={searchTerm}
          onChange={handleSearch}
          className="w-full p-2 pl-10 border rounded-md shadow-md focus:ring-2 focus:ring-yellow-500 focus:outline-none transition duration-300"
        />
        <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>

      {/* Tabel Reservasi */}
      <div className="overflow-x-auto bg-white text-left shadow-lg rounded-lg">
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
              <th className="px-4 py-2">No</th>
              <th className="px-4 py-2">ID Kamar</th>
              <th className="px-4 py-2">Nama Tamu</th>
              <th className="px-4 py-2">No Telepon</th>
              <th className="px-4 py-2">Check-in</th>
              <th className="px-4 py-2">Check-out</th>
              <th className="px-4 py-2">Total Harga</th>
              <th className="px-4 py-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {searchTerm !== '' ? (
              filteredReservasiList.length > 0 ? (
                filteredReservasiList
                  .slice()
                  .reverse()
                  .map((reservasi, index) => (
                    <tr key={index}>
                      <td className="border px-4 py-2">{index + 1}</td>
                      <td className="border px-4 py-2">{reservasi.idKamar}</td>
                      <td className="border px-4 py-2">{reservasi.namaTamu}</td>
                      <td className="border px-4 py-2">
                        {reservasi.noTelepon}
                      </td>
                      <td className="border px-4 py-2">
                        {reservasi.tanggalCheckIn}
                      </td>
                      <td className="border px-4 py-2">
                        {reservasi.tanggalCheckOut}
                      </td>
                      <td className="border px-4 py-2">{reservasi.deposit}</td>
                      <td className="border px-4 py-2">
                        <button
                          className="bg-green-600 hover:bg-green-500 text-white px-2 mx-1 py-1 rounded-md"
                          onClick={() => handleCheckInClick(index)}
                        >
                          <FaSignInAlt />
                        </button>
                        <button
                          onClick={() => handleDelete(index)}
                          className="bg-red-500 hover:bg-red-600 text-white px-2 mx-1 py-1 rounded-md"
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
            ) : reservasiList.length > 0 ? (
              reservasiList
                .slice()
                .reverse()
                .map((reservasi, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">{index + 1}</td>
                    <td className="border px-4 py-2">{reservasi.idKamar}</td>
                    <td className="border px-4 py-2">{reservasi.namaTamu}</td>
                    <td className="border px-4 py-2">{reservasi.noTelepon}</td>
                    <td className="border px-4 py-2">
                      {reservasi.tanggalCheckIn}
                    </td>
                    <td className="border px-4 py-2">
                      {reservasi.tanggalCheckOut}
                    </td>
                    <td className="border px-4 py-2">{reservasi.deposit}</td>
                    <td className="border px-4 py-2">
                      <button
                        className="bg-green-600 hover:bg-green-500 text-white px-2 mx-1 py-1 rounded-md"
                        onClick={() => handleCheckInClick(index)}
                      >
                        <FaSignInAlt />
                      </button>
                      <button
                        onClick={() => handleDelete(index)}
                        className="bg-red-500 hover:bg-red-600 text-white px-2 mx-1 py-1 rounded-md"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center py-4">
                  Tidak ada reservasi yang terdaftar
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <button
        onClick={clearData}
        className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 mb-20"
      >
        Clear Data
      </button>
    </>
  );
}

export default DaftarBooking;
