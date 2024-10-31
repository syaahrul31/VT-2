import { FaUserPlus, FaArrowLeft, FaUserCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function AddTamu() {

  // Fungsi untuk menangani submit form
  const handleSubmit = (e) => {
    e.preventDefault(); // Mencegah reload halaman

    // Ambil data dari form
    const guestData = {
      namaDepan: e.target.nama_depan.value,
      namaBelakang: e.target.nama_belakang.value,
      nik: e.target.nik.value,
      wargaNegara: e.target.warga_negara.value,
      alamat: e.target.alamat.value,
      kabupaten: e.target.kabupaten.value,
      provinsi: e.target.provinsi.value,
      noHp: e.target.no_hp.value,
      email: e.target.email.value,
    };

    // Ambil data tamu yang sudah ada di local storage (jika ada)
    const existingGuests = JSON.parse(localStorage.getItem('tamuList')) || [];

    // Tambahkan data baru ke array
    existingGuests.push(guestData);

    // Simpan kembali ke local storage
    localStorage.setItem('tamuList', JSON.stringify(existingGuests));

    // Beri notifikasi atau redirect (opsional)
    alert('Tamu berhasil ditambahkan!');
    
    // Redirect ke halaman 'lihat-tamu' atau kosongkan form (opsional)
    e.target.reset();
  };

  return (
    <div className="bg-white mx-4 sm:mx-12 lg:mx-40 xl:mx-60 px-6 py-8 sm:py-14 rounded-xl shadow-lg">
      <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-gray-800 flex items-center justify-center">
        <FaUserPlus className='text-yellow-500 mr-2' /> Tambah Tamu Baru
      </h2>

      <form 
        id="guestForm" 
        className="space-y-4 sm:space-y-6 text-sm sm:text-md" 
        autoComplete="off" 
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div className="input-container">
            <input type="text" id="nama_depan" name="nama_depan" required placeholder=" "
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
            />
            <label htmlFor="nama_depan" className="absolute left-4 top-3 text-gray-500 transition-all">
              Nama Depan
            </label>
          </div>

          <div className="input-container">
            <input type="text" id="nama_belakang" name="nama_belakang" required placeholder=" "
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
            />
            <label htmlFor="nama_belakang" className="absolute left-4 top-3 text-gray-500 transition-all">
              Nama Belakang
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div className="relative input-container">
            <input type="text" id="nik" name="nik" required placeholder=" " pattern="\d{16}" maxLength="16"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              title="NIK harus berisi tepat 16 digit angka"
            />
            <label htmlFor="nik" className="absolute left-4 top-3 text-gray-500 transition-all">NIK KTP</label>
          </div>

          <div className="relative input-container">
            <input type="text" id="warga_negara" name="warga_negara" required placeholder=" "
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
            />
            <label htmlFor="warga_negara" className="absolute left-4 top-3 text-gray-500 transition-all">
              Warga Negara
            </label>
          </div>
        </div>

        <div className="relative input-container">
          <input id="alamat" name="alamat" rows="2" required placeholder=" "
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
          ></input>
          <label htmlFor="alamat" className="absolute left-4 top-3 text-gray-500 transition-all">
            Alamat Lengkap
          </label>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div className="relative input-container">
            <input type="text" id="kabupaten" name="kabupaten" required placeholder=" "
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
            />
            <label htmlFor="kabupaten" className="absolute left-4 top-3 text-gray-500 transition-all">
              Kabupaten
            </label>
          </div>

          <div className="relative input-container">
            <input type="text" id="provinsi" name="provinsi" required placeholder=" "
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
            />
            <label htmlFor="provinsi" className="absolute left-4 top-3 text-gray-500 transition-all">
              Provinsi
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div className="relative input-container">
            <input type="tel" id="no_hp" name="no_hp" required placeholder=" " pattern="\d+"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              title="Nomor HP hanya boleh berisi angka"
            />
            <label htmlFor="no_hp" className="absolute left-4 top-3 text-gray-500 transition-all">
              Nomor HP
            </label>
          </div>

          <div className="relative input-container">
            <input type="email" id="email" name="email" required placeholder=" "
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              title="Masukkan format email yang valid"
            />
            <label htmlFor="email" className="absolute left-4 top-3 text-gray-500 transition-all">
              Email
            </label>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center mt-6 space-y-4 sm:space-y-0">
          <Link to='/lihat-tamu' className="flex items-center text-sm text-gray-600 hover:text-yellow-500 transition">
            <FaArrowLeft className='text-yellow-500 mr-2' /> Kembali
          </Link>
          <button type="submit" id="submitButtonGuest"
            className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-6 rounded-lg shadow-lg flex items-center transition">
            <FaUserCheck className='mr-2' /> Tambah Tamu
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTamu;
