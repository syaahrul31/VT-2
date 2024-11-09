import React, { useState, useEffect } from 'react';
import { FaHotel, FaSave, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { FaBed, FaDollarSign, FaTags } from 'react-icons/fa';

function TambahBooking() {
  const Navigate = useNavigate();
  const [selectedRoomId, setSelectedRoomId] = useState('000');
  const [selectedRoomType, setSelectedRoomType] = useState('none');
  const [selectedBed, setSelectedBed] = useState('-');
  const [selectedStatus, setSelectedStatus] = useState('-');
  const [selectedRoomDeposit, setSelectedRoomDeposit] = useState(0);
  const [totalDeposit, setTotalDeposit] = useState(0);
  const [reservasiList, setReservasiList] = useState([]);
  const [villaTiara1, setVillaTiara1] = useState([]);
  const [villaTiara2, setVillaTiara2] = useState([]);
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [today, setToday] = useState('');

  // Ambil data kamar dari localStorage
  useEffect(() => {
    const storedKamarList = JSON.parse(localStorage.getItem('kamarList'));
    setVillaTiara1(storedKamarList.VillaTiara1 || []);
    setVillaTiara2(storedKamarList.VillaTiara2 || []);

    const storedReservations =
      JSON.parse(localStorage.getItem('reservasiList')) || [];
    setReservasiList(storedReservations);

    const date = new Date();
    const formattedDate = date.toISOString().split('T')[0];
    setToday(formattedDate);
  }, []);

  // Fungsi untuk menangani klik pada tombol kamar
  const handleRoomClick = (roomId) => {
    const allRooms = [...villaTiara1, ...villaTiara2];
    const room = allRooms.find((kamar) => kamar.kode_kamar === roomId);
    if (room) {
      setSelectedRoomId(room.kode_kamar);
      setSelectedRoomType(room.tipe_kamar);
      setSelectedRoomDeposit(room.harga);
      setSelectedBed(room.jumlah_bed);
      setSelectedStatus(room.status);
      calculateTotalDeposit(room.harga, checkInDate, checkOutDate);
    }
  };

  const calculateTotalDeposit = (hargaPerMalam, checkIn, checkOut) => {
    if (checkIn && checkOut) {
      const checkInTime = new Date(checkIn);
      const checkOutTime = new Date(checkOut);
      const timeDifference = checkOutTime - checkInTime;
      const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

      const total = daysDifference * hargaPerMalam;
      setTotalDeposit(total);
    }
  };

  const handleCheckInChange = (e) => {
    setCheckInDate(e.target.value);
    calculateTotalDeposit(selectedRoomDeposit, e.target.value, checkOutDate);
  };

  const handleCheckOutChange = (e) => {
    setCheckOutDate(e.target.value);
    calculateTotalDeposit(selectedRoomDeposit, checkInDate, e.target.value);
  };

  //Fungsi untuk submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    const newReservasi = {
      idKamar: selectedRoomId,
      tipeKamar: selectedRoomType,
      namaTamu: e.target.namaTamu.value,
      noTelepon: e.target.noTelepon.value,
      tanggalCheckIn: e.target.tanggalCheckIn.value,
      tanggalCheckOut: e.target.tanggalCheckOut.value,
      deposit: totalDeposit,
      statusReservasi: 'terdaftar',
    };

    const updatedReservasiList = [...reservasiList, newReservasi];
    setReservasiList(updatedReservasiList);
    localStorage.setItem('reservasiList', JSON.stringify(updatedReservasiList));
    handleClear();
    Navigate('/daftar-booking-page');
  };

  const handleClear = (e) => {
    setSelectedRoomId('000');
    setSelectedRoomType('none');
    setSelectedRoomDeposit('-');
    setSelectedBed('-');
    setSelectedStatus('-');
    setTotalDeposit(0);
    setCheckInDate('');
    setCheckOutDate('');
    document.getElementById('bookingForm').reset();

    alert('Booking Berhasil!');
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
        <div className="bg-white py-8 px-12 rounded-xl shadow-lg md:col-span-2">
          <h2 className="text-2xl font-bold mb-8 text-center flex items-center justify-center">
            <FaHotel className="text-yellow-500 mr-2" /> Tambah Reservasi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="logo bg-gradient-to-br from-orange-500 to-red-500 text-white text-md rounded-lg p-2 mb-4 text-center font-bold">
                Villa Tiara 2
              </h2>
              <div className="grid grid-cols-5 md:grid-cols-4 gap-2 text-sm">
                {villaTiara2.map((kamar) => (
                  <div
                    key={kamar.kode_kamar}
                    className="text-center bg-yellow-50 p-2 border-yellow-500 border-2 rounded-lg cursor-pointer hover:border-orange-700 hover:border-4"
                    onClick={() => handleRoomClick(kamar.kode_kamar)}
                  >
                    <h3 className="font-semibold">{kamar.kode_kamar}</h3>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="logo bg-gradient-to-br from-orange-500 to-red-500 text-white text-md rounded-lg p-2 mb-4 text-center font-bold">
                Villa Tiara 1
              </h2>
              <div className="grid grid-cols-5 md:grid-cols-4 gap-2 text-sm">
                {villaTiara1.map((kamar) => (
                  <div
                    key={kamar.kode_kamar}
                    className="text-center bg-yellow-50 p-2 border-yellow-500 border-2 rounded-lg cursor-pointer hover:border-orange-700 hover:border-4"
                    onClick={() => handleRoomClick(kamar.kode_kamar)}
                  >
                    <h3 className="font-semibold">{kamar.kode_kamar}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="p-4 bg-gray-200 rounded-xl mt-4 shadow-lg border-2 border-gray-400">
            <div className="grid grid-cols-1 md:grid-cols-11 gap-2">
              <div className="flex p-2 col-span-4 items-center shadow-md justify-start rounded-lg bg-white">
                <FaBed className="text-yellow-600 text-xl mx-4" />
                <div>
                  <h4 className="text-xs font-semibold text-gray-700">
                    Jumlah Bed:
                  </h4>
                  <p className="text-gray-800 text-md font-bold">
                    {selectedBed}
                  </p>
                </div>
              </div>
              <div className="flex p-2 col-span-3 items-center shadow-md justify-start rounded-lg bg-white">
                <FaTags className="text-yellow-600 text-xl mx-4" />
                <div>
                  <h4 className="text-xs font-semibold text-gray-700">
                    Status:
                  </h4>
                  <p
                    className={`text-gray-800 text-md font-bold ${selectedStatus === 'kosong' ? 'text-green-600' : 'text-red-600'}`}
                  >
                    {selectedStatus}
                  </p>
                </div>
              </div>
              <div className="flex p-2 col-span-4 items-center shadow-md justify-start rounded-lg bg-white">
                <FaDollarSign className="text-yellow-600 text-xl mx-4" />
                <div>
                  <h4 className="text-xs font-semibold text-gray-700">
                    Harga per Malam :
                  </h4>
                  <p className="text-gray-800 text-md font-bold">
                    Rp. {selectedRoomDeposit.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* form reservasi */}
        <div className="bg-white py-8 px-12 rounded-xl shadow-lg w-full max-w-3xl md:col-span-1">
          <form
            id="bookingForm"
            className="space-y-4 text-sm"
            onSubmit={handleSubmit}
          >
            <div>
              <h2 className="text-xl font-semibold mb-2 text-center">
                ID Kamar:{' '}
                <span className="font-bold text-orange-600">
                  {selectedRoomId}
                </span>
              </h2>
              <h2 className="text-md font-semibold mb-4 text-center">
                <span className="font-bold">"{selectedRoomType}"</span>
              </h2>
            </div>

            {/* Nama Tamu */}
            <div className="mb-4">
              <label
                htmlFor="namaTamu"
                className="block text-gray-700 font-medium"
              >
                Nama Tamu:
              </label>
              <input
                type="text"
                id="namaTamu"
                className="w-full px-4 py-2 border rounded-md"
                required
                placeholder="Masukkan Nama Lengkap"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="noTelepon"
                className="block text-gray-700 font-medium"
              >
                No Telepon:
              </label>
              <input
                type="number"
                id="noTelepon"
                className="w-full px-4 py-2 border rounded-md"
                required
                placeholder="Masukkan No Telepon"
              />
            </div>

            <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Tanggal/waktu check in */}
              <div>
                <label
                  htmlFor="tanggalCheckIn"
                  className="block text-gray-700 font-medium"
                >
                  Check-in:
                </label>
                <input
                  type="datetime-local"
                  id="tanggalCheckIn"
                  className="w-full px-4 py-2 border rounded-md"
                  onChange={handleCheckInChange}
                  min={today + 'T00:00'}
                  required
                />
              </div>

              {/* Tanggal/waktu check out */}
              <div>
                <label
                  htmlFor="tanggalCheckOut"
                  className="block text-gray-700 font-medium"
                >
                  Check-out:
                </label>
                <input
                  type="datetime-local"
                  id="tanggalCheckOut"
                  className="w-full px-4 py-2 border rounded-md"
                  onChange={handleCheckOutChange}
                  min={checkInDate}
                  required
                />
              </div>
            </div>

            {/* Deposit */}
            <div className="mb-4">
              <label
                htmlFor="deposit"
                className="block text-gray-700 font-medium"
              >
                Total Harga (Rp):
              </label>
              <input
                type="number"
                id="deposit"
                min="0"
                value={totalDeposit}
                readOnly
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Masukkan Jumlah Deposit"
                required
              />
            </div>

            {/* Tombol Submit */}
            <div className="flex justify-center items-center space-x-2">
              <button
                type="button"
                onClick={handleClear}
                className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg shadow-md transition flex items-center"
              >
                <FaTrash className="mr-2" />
                Clear
              </button>
              <button
                type="submit"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg shadow-md transition flex items-center"
              >
                <FaSave className="mr-2" />
                Book
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default TambahBooking;
