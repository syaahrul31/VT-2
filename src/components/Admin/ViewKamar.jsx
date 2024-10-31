import { FaUsers, FaArrowLeft, FaPlus, FaTrash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function ViewKamar() {
    const navigate = useNavigate();
    const [rooms, setRooms] = useState([]);

    // Fungsi untuk mengambil data dari localStorage saat komponen dimuat
    useEffect(() => {
        const storedRooms = JSON.parse(localStorage.getItem('kamarList')) || [];
        setRooms(storedRooms);
    }, []);

    // Fungsi untuk menghapus kamar berdasarkan index
    const handleDelete = (index) => {
        const updatedRooms = rooms.filter((_, i) => i !== index);
        setRooms(updatedRooms);
        localStorage.setItem('kamarList', JSON.stringify(updatedRooms));
    };

    // Fungsi untuk clear semua data kamar
    const handleClearData = () => {
        localStorage.removeItem('kamarList');
        setRooms([]);
    };

    // Fungsi untuk navigasi ke halaman tambah kamar
    const handleAddRoom = () => {
        navigate('/tambah-kamar');
    };

    return (
        <>
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8 flex items-center justify-center">
                <FaUsers className="text-yellow-500 mr-2" />
                Daftar Kamar
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
                    onClick={handleAddRoom}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg shadow-sm flex items-center transition"
                >
                    <FaPlus className="mr-2" />
                    Tambah Kamar
                </button>
            </div>

            <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
                <table className="table-auto w-full">
                    <thead>
                        <tr className="bg-orange-700 text-white">
                            <th className="px-4 py-2">No</th>
                            <th className="px-6 py-2">Nama Kamar</th>
                            <th className="px-6 py-2">Tipe Kamar</th>
                            <th className="px-6 py-2">Status Kamar</th>
                            <th className="px-6 py-2">Harga Kamar</th>
                            <th className="px-6 py-2">Aksi</th>
                        </tr>
                    </thead>
                    <tbody id="roomTableBody">
                        {rooms.length > 0 ? (
                            rooms.slice().reverse().map((room, index) => (
                                <tr key={index}>
                                    <td className="border px-4 py-2 text-center">{index + 1}</td>
                                    <td className="border px-6 py-2">{room.namaKamar}</td>
                                    <td className="border px-6 py-2">{room.tipeKamar}</td>
                                    <td className="border px-6 py-2">{room.statusKamar}</td>
                                    <td className="border px-6 py-2">{room.hargaKamar}</td>
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
                                    Tidak ada kamar yang terdaftar.
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

export default ViewKamar;
