import { FaUserPlus, FaArrowLeft, FaUserCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function AddKamar() {

  // Fungsi untuk menangani submit form
  const handleSubmit = (e) => {
    e.preventDefault(); // Mencegah reload halaman

    // Ambil data dari form
    const roomData = {
      namaKamar: e.target.nama_kamar.value,
      tipeKamar: e.target.tipe_kamar.value,
      statusKamar: e.target.status_kamar.value,
      hargaKamar: e.target.harga_kamar.value,
    };

    // Ambil data kamar yang sudah ada di local storage (jika ada)
    const existingRooms = JSON.parse(localStorage.getItem('kamarList')) || [];

    // Tambahkan data baru ke array
    existingRooms.push(roomData);

    // Simpan kembali ke local storage
    localStorage.setItem('kamarList', JSON.stringify(existingRooms));

    // Beri notifikasi atau redirect (opsional)
    alert('Kamar berhasil ditambahkan!');
    
    // Redirect ke halaman 'lihat-kamar' atau kosongkan form (opsional)
    e.target.reset();
  };

  return (
    <div className="bg-white mx-4 sm:mx-12 lg:mx-40 xl:mx-60 px-6 py-8 sm:py-14 rounded-xl shadow-lg">
      <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-gray-800 flex items-center justify-center">
        <FaUserPlus className='text-yellow-500 mr-2' /> Tambah Kamar Baru
      </h2>
      <form
        id="roomForm"
        className="space-y-4 sm:space-y-6 text-sm sm:text-md"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div className="input-container">
            <input type="text" id="nama_kamar" name="nama_kamar" required placeholder=" "
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
            />
            <label htmlFor="nama_kamar" className="absolute left-4 top-3 text-gray-500 transition-all">
              Nama Kamar
            </label>
          </div>
          <div className="relative input-container">
            <select id="tipe_kamar" name="tipe_kamar" required
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none">
              <option value="">Tipe Kamar</option>
              <option value="standart">Standart</option>
              <option value="deluxe">Deluxe</option>
              <option value="family">Family</option>
            </select>
            <label htmlFor="tipe_kamar" className="absolute left-4 top-3 text-gray-500 transition-all"></label>
          </div>
          <div className="relative input-container">
            <select id="status_kamar" name="status_kamar" required
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none">
              <option value="">Status Kamar</option>
              <option value="dipakai">Dipakai</option>
              <option value="kosong">Kosong</option>
            </select>
            <label htmlFor="status_kamar" className="absolute left-4 top-3 text-gray-500 transition-all">
            </label>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div className="relative input-container">
            <input type="number" id="harga_kamar" name="harga_kamar" required placeholder=" "
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
            />
            <label htmlFor="harga_kamar" className="absolute left-4 top-3 text-gray-500 transition-all">
              Harga Kamar
            </label>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center mt-6 space-y-4 sm:space-y-0">
          <Link to='/lihat-kamar' className="flex items-center text-sm text-gray-600 hover:text-yellow-500 transition">
            <FaArrowLeft className='text-yellow-500 mr-2' /> Kembali
          </Link>
          <button type="submit" id="submitButtonRoom"
            className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-6 rounded-lg shadow-lg flex items-center transition">
            <FaUserCheck className='mr-2' /> Tambah Kamar
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddKamar;
