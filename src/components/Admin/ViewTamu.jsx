import { FaUsers, FaArrowLeft, FaPlus, FaTrash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function ViewTamu() {
    const navigate = useNavigate();
    const [guests, setGuests] = useState([]);

    // Fungsi untuk mengambil data dari localStorage saat komponen dimuat
    useEffect(() => {
        const storedGuests = JSON.parse(localStorage.getItem('tamuList')) || [];
        setGuests(storedGuests);
    }, []);

    // Fungsi untuk menghapus tamu berdasarkan index
    const handleDelete = (index) => {
        const updatedGuests = guests.filter((_, i) => i !== index);
        setGuests(updatedGuests);
        localStorage.setItem('tamuList', JSON.stringify(updatedGuests));
    };

    // Fungsi untuk clear semua data tamu
    const handleClearData = () => {
        localStorage.removeItem('tamuList');
        setGuests([]);
    };

    // Fungsi untuk navigasi ke halaman tambah tamu
    const handleAddGuest = () => {
        navigate('/tambah-tamu');
    };

    return (
        <>
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8 flex items-center justify-center">
                <FaUsers className="text-yellow-500 mr-2" />
                Daftar Tamu
            </h2>

            <div className="mt-6 flex justify-between items-center text-sm mb-6">
                <Link
                    to="/dashboard"
                    className="flex items-center text-sm text-gray-600 hover:text-yellow-500 transition"
                >
                    <FaArrowLeft className="text-yellow-500 mr-2" />
                    Kembali
                </Link>
                <button
                    onClick={handleAddGuest}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg shadow-sm flex items-center transition"
                >
                    <FaPlus className="mr-2" />
                    Tambah Tamu
                </button>
            </div>

            <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
                <table className="table-auto w-full">
                    <thead>
                        <tr className="bg-orange-700 text-white">
                            <th className="px-4 py-2">No</th>
                            <th className="px-6 py-2">NIK</th>
                            <th className="px-6 py-2">Nama Tamu</th>
                            <th className="px-6 py-2">Warga Negara</th>
                            <th className="px-6 py-2">Alamat</th>
                            <th className="px-6 py-2">Kabupaten</th>
                            <th className="px-6 py-2">Provinsi</th>
                            <th className="px-6 py-2">No HP</th>
                            <th className="px-6 py-2">Email</th>
                            <th className="px-6 py-2">Aksi</th>
                        </tr>
                    </thead>
                    <tbody id="guestTableBody">
                        {guests.length > 0 ? (
                            guests.slice().reverse().map((guest, index) => (
                                <tr key={index}>
                                    <td className="border px-4 py-2 text-center">{index + 1}</td>
                                    <td className="border px-6 py-2">{guest.nik}</td>
                                    <td className="border px-6 py-2">{guest.namaDepan +' '+ guest.namaBelakang}</td>
                                    <td className="border px-6 py-2">{guest.wargaNegara}</td>
                                    <td className="border px-6 py-2">{guest.alamat}</td>
                                    <td className="border px-6 py-2">{guest.kabupaten}</td>
                                    <td className="border px-6 py-2">{guest.provinsi}</td>
                                    <td className="border px-6 py-2">{guest.noHp}</td>
                                    <td className="border px-6 py-2">{guest.email}</td>
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
                                <td colSpan="11" className="text-center py-4">
                                    Tidak ada tamu yang terdaftar.
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

export default ViewTamu;
