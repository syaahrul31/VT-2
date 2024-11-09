import { FaUserPlus, FaArrowLeft, FaUserCheck } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

function TambahTamu() {
  const Navigate = useNavigate();

  // Fungsi untuk menangani submit form
  const handleSubmit = (e) => {
    e.preventDefault(); // Mencegah reload halaman

    // Ambil data dari form
    const guestData = {
      namaLengkap: e.target.nama_lengkap.value,
      noHp: e.target.no_hp.value,
      keperluan: e.target.keperluan.value,
      tanggal: new Date().toLocaleDateString(), // Tanggal saat ini
      waktu: new Date().toLocaleTimeString(), // Waktu saat ini
    };

    // Ambil data tamu yang sudah ada di local storage (jika ada)
    const existingGuests = JSON.parse(localStorage.getItem('tamuList')) || [];

    // Tambahkan data baru ke array
    existingGuests.push(guestData);

    // Simpan kembali ke local storage
    localStorage.setItem('tamuList', JSON.stringify(existingGuests));

    alert('Isi Buku Tamu Berhasil!');

    // Redirect ke halaman 'daftar-tamu'
    Navigate('/daftar-tamu-page');
  };

  return (
    <div className="bg-white mx-40 px-12 py-8 rounded-xl shadow-lg">
      <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-gray-800 flex items-center justify-center">
        <FaUserPlus className="text-yellow-500 mr-2" /> Tambah Tamu Baru
      </h2>

      <form
        id="guestForm"
        className="space-y-4 sm:space-y-6 text-sm sm:text-md"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          <div className="input-container col-span-1">
            <input
              type="text"
              id="nama_lengkap"
              name="nama_lengkap"
              required
              placeholder=" "
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
            />
            <label
              htmlFor="nama_lengkap"
              className="absolute left-4 top-3 text-gray-500 transition-all"
            >
              Nama Lengkap
            </label>
          </div>
          <div className="relative input-container col-span-1">
            <input
              type="tel"
              id="no_hp"
              name="no_hp"
              required
              placeholder=" "
              pattern="\d+"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              title="Nomor HP hanya boleh berisi angka"
            />
            <label
              htmlFor="no_hp"
              className="absolute left-4 top-3 text-gray-500 transition-all"
            >
              Nomor HP
            </label>
          </div>

          <div className="relative input-container col-span-2">
            <input
              type="text"
              id="keperluan"
              name="keperluan"
              required
              placeholder=" "
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              title="Masukkan format email yang valid"
            />
            <label
              htmlFor="keperluan"
              className="absolute left-4 top-3 text-gray-500 transition-all"
            >
              Keperluan
            </label>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center mt-6 space-y-4 sm:space-y-0">
          <Link
            to="/daftar-tamu-page"
            className="flex items-center text-sm text-gray-600 hover:text-yellow-500 transition"
          >
            <FaArrowLeft className="text-yellow-500 mr-2" /> Kembali
          </Link>
          <button
            type="submit"
            id="submitButtonGuest"
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:bg-yellow-600 text-white py-3 px-6 rounded-lg shadow-lg flex items-center transition"
          >
            <FaUserCheck className="mr-2" /> Tambah Tamu
          </button>
        </div>
      </form>
    </div>
  );
}

export default TambahTamu;
