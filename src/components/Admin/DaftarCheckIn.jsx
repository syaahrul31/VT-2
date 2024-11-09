import { useEffect, useState } from 'react';
import {
  FaCreditCard,
  FaFileInvoice,
  FaArrowLeft,
  FaPrint,
  FaSignOutAlt,
  FaTimesCircle,
  FaSearch,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

function DaftarCheckIn() {
  const [checkInList, setCheckInList] = useState([]);
  const [invoiceData, setInvoiceData] = useState(null);
  const [showInvoiceModal, setShowInvoiceModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCheckInList, setFilteredCheckInList] = useState([]);

  // Load data checkout dari local storage saat komponen dimuat
  useEffect(() => {
    const storedCheckIns =
      JSON.parse(localStorage.getItem('checkInList')) || [];
    setCheckInList(storedCheckIns);
    setFilteredCheckInList(storedCheckIns);
  }, []);

  useEffect(() => {
    const results = checkInList.filter((checkin) =>
      checkin.idKamar.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setFilteredCheckInList(results);
  }, [searchTerm, checkInList]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Fungsi untuk melihat invoice
  const viewInvoice = (reservation) => {
    setInvoiceData(reservation);
    setShowInvoiceModal(true);
  };

  // Fungsi untuk mencetak invoice
  const printInvoice = () => {
    window.print();
  };

  // Fungsi untuk melakukan checkout (contoh alert, bisa disesuaikan)
  const checkoutReservation = () => {
    alert('Check-Out Berhasil!');
    // Di sini bisa ditambahkan logika untuk redirect atau API call
  };

  // Fungsi format Rupiah
  const formatRupiah = (number) => {
    return `Rp${number.toLocaleString('id-ID')}`;
  };

  return (
    <>
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 flex items-center justify-center">
        <FaCreditCard className="text-yellow-500 mr-2" />
        CheckOut Reservasi
      </h2>

      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h3 className="text-xl font-bold mb-4">Daftar Kamar Aktif</h3>

        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Cari Berdasarkan Nama ID Kamar"
            value={searchTerm}
            onChange={handleSearch}
            className="w-full p-2 pl-10 border rounded-md shadow-md focus:ring-2 focus:ring-yellow-500 focus:outline-none transition duration-300"
          />
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {searchTerm !== '' ? (
            filteredCheckInList.length > 0 ? (
              filteredCheckInList
                .slice()
                .reverse()
                .map((checkin, index) => (
                  <div
                    key={index}
                    className="border p-4 rounded-lg shadow-md bg-gray-50 hover:shadow-lg transition-transform transform hover:scale-105"
                  >
                    <div className="flex flex-col justify-between h-full">
                      <div className="mb-4">
                        <h4 className="text-lg font-bold text-gray-700">
                          {checkin.idKamar}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Check-in: {checkin.tanggalCheckIn}
                        </p>
                        <p className="text-gray-600 text-sm">
                          Check-out: {checkin.tanggalCheckOut}
                        </p>
                      </div>
                      <button
                        onClick={() => viewInvoice(checkin)}
                        className="flex items-center justify-center w-full bg-gradient-to-r from-orange-500 to-red-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg shadow transition"
                      >
                        <FaFileInvoice className="mr-2" />
                        Lihat Invoice
                      </button>
                    </div>
                  </div>
                ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center py-4">
                  Data Tidak Ditemukan
                </td>
              </tr>
            )
          ) : checkInList.length > 0 ? (
            checkInList
              .slice()
              .reverse()
              .map((checkin, index) => (
                <div
                  key={index}
                  className="border p-4 rounded-lg shadow-md bg-gray-50 hover:shadow-lg transition-transform transform hover:scale-105"
                >
                  <div className="flex flex-col justify-between h-full">
                    <div className="mb-4">
                      <h4 className="text-lg font-bold text-gray-700">
                        {checkin.idKamar}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Check-in: {checkin.tanggalCheckIn}
                      </p>
                      <p className="text-gray-600 text-sm">
                        Check-out: {checkin.tanggalCheckOut}
                      </p>
                    </div>
                    <button
                      onClick={() => viewInvoice(checkin)}
                      className="flex items-center justify-center w-full bg-gradient-to-r from-orange-500 to-red-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg shadow transition"
                    >
                      <FaFileInvoice className="mr-2" />
                      Lihat Invoice
                    </button>
                  </div>
                </div>
              ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center py-4">
                Tidak ada check-in yang terdaftar
              </td>
            </tr>
          )}
        </div>

        <div className="mt-8 flex justify-between items-center">
          <Link
            to="/daftar-booking-page"
            className="flex items-center text-sm text-gray-600 hover:text-yellow-500 transition"
          >
            <FaArrowLeft className="mr-2" />
            Kembali
          </Link>
        </div>
      </div>

      {/* Modal Invoice */}
      {showInvoiceModal && invoiceData && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg max-w-lg w-full mx-4">
            <h3 className="text-2xl font-bold mb-4 text-center">
              Invoice Reservasi
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-700">Kode Invoice:</span>
                <span className="font-semibold">INV-{invoiceData.idKamar}</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-700">Nama Tamu:</span>
                <span className="font-semibold">{invoiceData.namaTamu}</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-700">Kamar:</span>
                <span className="font-semibold">{invoiceData.idKamar}</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-700">Check-in:</span>
                <span className="font-semibold">
                  {invoiceData.tanggalCheckIn}
                </span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-700">Check-out:</span>
                <span className="font-semibold">
                  {invoiceData.tanggalCheckOut}
                </span>
              </div>
              <div className="flex justify-between border-t pt-2">
                <span className="font-bold">Total Biaya:</span>
                <span className="font-bold">
                  {formatRupiah(invoiceData.deposit)}
                </span>
              </div>
            </div>

            <div className="mt-6 flex justify-between items-center">
              <button
                onClick={printInvoice}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg transition flex items-center justify-center"
              >
                <FaPrint className="mr-2" />
                Print
              </button>
              <button
                onClick={checkoutReservation}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg transition flex items-center justify-center"
              >
                <FaSignOutAlt className="mr-2" />
                Checkout
              </button>
              <button
                onClick={() => setShowInvoiceModal(false)}
                className="text-gray-600 hover:text-red-500 transition flex items-center justify-center"
              >
                <FaTimesCircle className="mr-2" />
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DaftarCheckIn;
