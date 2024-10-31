import {useEffect, useState} from 'react';
import { FaHotel, FaSave, FaTrash } from 'react-icons/fa';

function generateInvoiceCode() {
    return 'INV-' + Math.random().toString(36).substr(2, 9).toUpperCase();
  }

function CheckIn() {
    const [nomorKamar, setNomorKamar] = useState('0000');
    const [tamuList, setTamuList] = useState([]);
    const [reservasiList, setReservasiList] = useState([]);
    const [kodeInvoice, setKodeInvoice] = useState('');
    const [deposit, setDeposit] = useState(0);
    const [kamarList, setKamarList] = useState([]);

    // Load data tamu dari local storage saat komponen dimuat
    useEffect(() => {
        const storedGuests = JSON.parse(localStorage.getItem('tamuList')) || [];
        setTamuList(storedGuests);

        const storedReservations = JSON.parse(localStorage.getItem('reservasiList')) || [];
        setReservasiList(storedReservations);

        const storedRooms = JSON.parse(localStorage.getItem('kamarList')) || []; // Load data kamar
        setKamarList(storedRooms);

        setKodeInvoice(generateInvoiceCode());
        setDeposit(500000);
    }, []);

    // Fungsi untuk menangani klik nomor kamar
    const handleRoomClick = (roomNumber) => {
        setNomorKamar(roomNumber);
    };

    // Fungsi untuk menangani submit form
    const handleSubmit = (e) => {
        e.preventDefault();

        const newReservasi = {
        invoice: e.target.kodeInvoice.value,
        namaTamu: e.target.namaTamu.value,
        kamar: nomorKamar,
        checkIn: e.target.tanggalCheckIn.value,
        checkOut: e.target.tanggalCheckOut.value,
        deposit: e.target.deposit.value,
        };

        const updatedReservasiList = [...reservasiList, newReservasi];
        setReservasiList(updatedReservasiList);
        localStorage.setItem('reservasiList', JSON.stringify(updatedReservasiList));

        e.target.reset(); // Reset form setelah submit
    };

    // Fungsi untuk menghapus tamu berdasarkan index
    const handleDelete = (index) => {
        const updatedReservations = reservasiList.filter((_, i) => i !== index);
        setReservasiList(updatedReservations);
        localStorage.setItem('reservasiList', JSON.stringify(updatedReservations));
    };

    // Fungsi untuk menghapus semua data reservasi
    const clearData = () => {
        localStorage.removeItem('reservasiList');
        setReservasiList([]);
    };

    return (
      <>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-5">
        <div className="bg-white py-8 px-12 rounded-xl shadow-lg md:col-span-2">
            <h2 className="text-2xl font-bold mb-8 text-center flex items-center justify-center">
            <FaHotel className="text-yellow-500 mr-2" /> Tambah Reservasi
            </h2>
            <div className="grid grid-cols-10 gap-2 mx-auto text-sm">

                {/* Lantai 4 */}
                <div className="py-4">
                    <h3 className="font-semibold">LT-4</h3>
                </div>
                <div key="VT2-LOBBY" onClick={() => handleRoomClick("VT2-LOBBY")} className="col-span-4 text-center bg-yellow-50 p-2 border-yellow-500 border-2 rounded-lg cursor-pointer hover:border-orange-700 hover:border-4">
                    <h4 className="font-bold rext-sm text-center">Villa Tiara 2</h4>
                    <p className="text-center">Lobby/Meeting Room</p>
                </div>
                <div key="VT1-BALCONY" onClick={() => handleRoomClick("VT1-BALCONY")}  className="col-span-2 text-center bg-yellow-50 p-2 border-yellow-500 border-2 rounded-lg cursor-pointer hover:border-orange-700 hover:border-4">
                    <h4 className="font-bold text-sm text-center">Villa Tiara 1</h4>
                    <p className="text-center">Balcony</p>
                </div>
                <div className="col-span-3"></div>
        
                {/* Lantai 3 */}
                <div className="py-4">
                    <h3 className="font-semibold">LT-3</h3>
                </div>
                <div key="VT2-0301" onClick={() => handleRoomClick("VT2-0301")}  className="text-center bg-yellow-50 p-4 border-yellow-500 border-2 rounded-lg cursor-pointer hover:border-orange-700 hover:border-4">
                    <h3 className="font-semibold">1</h3>
                </div>
                <div key="VT2-0302" onClick={() => handleRoomClick("VT2-0302")} className="text-center bg-yellow-50 p-4 border-yellow-500 border-2 rounded-lg cursor-pointer hover:border-orange-700 hover:border-4">
                    <h3 className="font-semibold">2</h3>
                </div>
                <div key="VT2-0303" onClick={() => handleRoomClick("VT2-0303")} className="text-center bg-yellow-50 p-4 border-yellow-500 border-2 rounded-lg cursor-pointer hover:border-orange-700 hover:border-4">
                    <h3 className="font-semibold">3</h3>
                </div>
                <div key="VT2-0304" onClick={() => handleRoomClick("VT2-0304")} className="text-center bg-yellow-50 p-4 border-yellow-500 border-2 rounded-lg cursor-pointer hover:border-orange-700 hover:border-4">
                    <h3 className="font-semibold">4</h3>
                </div>
                <div key="VT1-0301" onClick={() => handleRoomClick("VT1-0301")} className="text-center bg-yellow-50 p-4 border-yellow-500 border-2 rounded-lg cursor-pointer hover:border-orange-700 hover:border-4">
                    <h3 className="font-semibold">1</h3>
                </div>
                <div className="col-span-3 grid grid-cols-3 rounded">
                    <div key="VT1-0302" onClick={() => handleRoomClick("VT1-0302")} className="text-center bg-yellow-50 p-4 border-yellow-500 border-2 rounded-tl-lg rounded-bl-lg cursor-pointer hover:border-orange-700 hover:border-4">
                        <h3 className="font-semibold">2</h3>
                    </div>
                    <div key="VT1-DAPUR" onClick={() => handleRoomClick("VT1-DAPUR")} className="text-center bg-yellow-50 p-4 border-yellow-500 border-y-2 cursor-pointer hover:border-orange-700 hover:border-4">
                        <h3 className="font-semibold">R/D</h3>
                    </div>
                    <div key="VT1-BALCONY2" onClick={() => handleRoomClick("VT1-BALCONY2")} className="text-center bg-yellow-50 p-4 border-yellow-500 border-2 rounded-tr-lg rounded-br-lg cursor-pointer hover:border-orange-700 hover:border-4">
                        <h3 className="font-semibold">B</h3>
                    </div>
                </div>
                <div key="VT1-0314" onClick={() => handleRoomClick("VT1-0314")} className="text-center bg-yellow-50 p-4 border-yellow-500 border-2 rounded-lg cursor-pointer hover:border-orange-700 hover:border-4">
                    <h3 className="font-semibold">14</h3>
                </div>
        
                {/* Lantai 2 */}
                <div className="py-4">
                    <h3 className="font-semibold">LT-2</h3>
                </div>
                <div key="VT2-0205" onClick={() => handleRoomClick("VT2-0205")} className="text-center bg-yellow-50 p-4 border-yellow-500 border-2 rounded-lg cursor-pointer hover:border-orange-700 hover:border-4">
                    <h3 className="font-semibold">5</h3>
                </div>
                <div key="VT2-0206" onClick={() => handleRoomClick("VT2-0206")} className="text-center bg-yellow-50 p-4 border-yellow-500 border-2 rounded-lg cursor-pointer hover:border-orange-700 hover:border-4">
                    <h3 className="font-semibold">6</h3>
                </div>
                <div key="VT2-0207" onClick={() => handleRoomClick("VT2-0207")} className="text-center bg-yellow-50 p-4 border-yellow-500 border-2 rounded-lg cursor-pointer hover:border-orange-700 hover:border-4">
                    <h3 className="font-semibold">7</h3>
                </div>
                <div key="VT2-0208" onClick={() => handleRoomClick("VT2-0208")} className="text-center bg-yellow-50 p-4 border-yellow-500 border-2 rounded-lg cursor-pointer hover:border-orange-700 hover:border-4">
                    <h3 className="font-semibold">8</h3>
                </div>
                <div key="VT1-0203" onClick={() => handleRoomClick("VT1-0203")} className="text-center bg-yellow-50 p-4 border-yellow-500 border-2 rounded-lg cursor-pointer hover:border-orange-700 hover:border-4">
                    <h3 className="font-semibold">3</h3>
                </div>
                <div key="VT1-0204" onClick={() => handleRoomClick("VT1-0204")} className="text-center bg-yellow-50 p-4 border-yellow-500 border-2 rounded-lg cursor-pointer hover:border-orange-700 hover:border-4">
                    <h3 className="font-semibold">4</h3>
                </div>
                <div key="VT1-0205" onClick={() => handleRoomClick("VT1-0205")} className="text-center bg-yellow-50 p-4 border-yellow-500 border-2 rounded-lg cursor-pointer hover:border-orange-700 hover:border-4">
                    <h3 className="font-semibold">5</h3>
                </div>
                <div key="VT1-0206" onClick={() => handleRoomClick("VT1-0206")} className="text-center bg-yellow-50 p-4 border-yellow-500 border-2 rounded-lg cursor-pointer hover:border-orange-700 hover:border-4">
                    <h3 className="font-semibold">6</h3>
                </div>
                <div key="VT1-0215" onClick={() => handleRoomClick("VT1-0215")} className="text-center bg-yellow-50 p-4 border-yellow-500 border-2 rounded-lg cursor-pointer hover:border-orange-700 hover:border-4">
                    <h3 className="font-semibold">15</h3>
                </div>
        
                {/* Lantai 1 */}
                <div className="py-4">
                    <h3 className="font-semibold">LT-1</h3>
                </div>
                <div className="col-span-2"></div>
                <div key="VT2-0110" onClick={() => handleRoomClick("VT2-0110")} className="text-center bg-yellow-50 p-4 border-yellow-500 border-2 rounded cursor-pointer hover:border-orange-700 hover:border-4">
                    <h3 className="font-semibold">10</h3>
                </div>
                <div key="VT2-0111" onClick={() => handleRoomClick("VT2-0111")} className="text-center bg-yellow-50 p-4 border-yellow-500 border-2 rounded cursor-pointer hover:border-orange-700 hover:border-4">
                    <h3 className="font-semibold">11</h3>
                </div>
                <div key="VT1-0107" onClick={() => handleRoomClick("VT1-0107")} className="text-center bg-yellow-50 p-4 border-yellow-500 border-2 rounded cursor-pointer hover:border-orange-700 hover:border-4">
                    <h3 className="font-semibold">7</h3>
                </div>
                <div key="VT1-0108" onClick={() => handleRoomClick("VT1-0108")} className="text-center bg-yellow-50 p-4 border-yellow-500 border-2 rounded cursor-pointer hover:border-orange-700 hover:border-4">
                    <h3 className="font-semibold">8</h3>
                </div>
                <div key="VT1-0109" onClick={() => handleRoomClick("VT1-0109")} className="text-center bg-yellow-50 p-4 border-yellow-500 border-2 rounded cursor-pointer hover:border-orange-700 hover:border-4">
                    <h3 className="font-semibold">9</h3>
                </div>
                <div key="VT1-0110" onClick={() => handleRoomClick("VT1-0110")} className="text-center bg-yellow-50 p-4 border-yellow-500 border-2 rounded cursor-pointer hover:border-orange-700 hover:border-4">
                    <h3 className="font-semibold">10</h3>
                </div>
                <div className="col-span-1"></div>
        
                {/* Basement/Additional Room*/}
                <div className="py-4"><h3 className="font-semibold">BASE</h3></div>
                <div className="col-span-4"></div>
                <div key="VT1-B11" onClick={() => handleRoomClick("VT1-B11")} className="text-center bg-yellow-50 p-4 border-yellow-500 border-2 rounded cursor-pointer hover:border-orange-700 hover:border-4">
                    <h3 className="font-semibold">11</h3>
                </div>
                <div key="VT1-B12" onClick={() => handleRoomClick("VT1-B12")} className="text-center bg-yellow-50 p-4 border-yellow-500 border-2 rounded cursor-pointer hover:border-orange-700 hover:border-4">
                    <h3 className="font-semibold">12</h3>
                </div>
                <div className="col-span-3"></div>
            </div>
        </div>

        {/* form reservasi */}
        <div className="bg-white py-8 px-12 rounded-xl shadow-lg w-full max-w-3xl md:col-span-1">
            <form id="bookingForm" className="space-y-4 text-sm" onSubmit={handleSubmit}>
                <div>
                    <h2 className="text-xl font-semibold mb-6 text-center">
                        ID Kamar : <span className="font-bold text-orange-600">{nomorKamar}</span>
                    </h2>
                </div>
                {/* Kode Invoice */}
                <div className="mb-4">
                    <label htmlFor="kodeInvoice" className="block text-gray-700 font-medium">Invoice:</label>
                    <input type="text" id="kodeInvoice" value={kodeInvoice} readOnly className="w-full px-4 py-2 border rounded-md" placeholder="Masukkan Kode Invoice" autocomplete="off" required />
                </div>

                {/* Nama Tamu/Drop Down */}
                <div className="mb-4">
                    <label htmlFor="namaTamu" className="block text-gray-700 font-medium">Nama Tamu:</label>
                    <select id="namaTamu" className="w-full px-4 py-2 border rounded-md" required>
                        <option value="">Pilih Tamu</option>
                        {tamuList.map((tamu, index) => (
                        <option key={index} value={tamu.namaDepan}>
                            {tamu.namaDepan} {tamu.namaBelakang}
                        </option>
                        ))}
                    </select>
                </div>

                <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Tanggal/waktu check in */}
                    <div>
                        <label htmlFor="tanggalCheckIn" className="block text-gray-700 font-medium">Check-in:</label>
                        <input type="datetime-local" id="tanggalCheckIn" className="w-full px-4 py-2 border rounded-md" required />
                    </div>

                    {/* Tanggal/waktu check out */}
                    <div>
                        <label htmlFor="tanggalCheckOut" className="block text-gray-700 font-medium">Check-out:</label>
                        <input type="datetime-local" id="tanggalCheckOut" className="w-full px-4 py-2 border rounded-md" required />
                    </div>
                </div>
                
                {/* Deposit */}
                <div className="mb-4">
                    <label htmlFor="deposit" className="block text-gray-700 font-medium">Jumlah Deposit (Rp):</label>
                    <input type="number" id="deposit" min="0"  value={deposit} readOnly className="w-full px-4 py-2 border rounded-md"
                        placeholder="Masukkan Jumlah Deposit" required />
                </div>

                {/* Tombol Submit */}
                <div className="flex justify-center items-center">
                <button 
                    type="submit" 
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg shadow-md transition flex items-center"
                >
                    <FaSave className="mr-2" /> 
                    Simpan Reservasi
                </button>
                </div>
            </form>
        </div>
    </div>

    {/* Tabel Reservasi */}
    <div className="overflow-x-auto bg-white text-left shadow-lg rounded-lg">
        <table className="table-auto w-full">
            <thead>
                <tr className="bg-orange-700 text-white">
                    <th className="px-4 py-2">No</th>
                    <th className="px-4 py-2">Invoice</th>
                    <th className="px-4 py-2">Tamu</th>
                    <th className="px-4 py-2">Kamar</th>
                    <th className="px-4 py-2">Check-in</th>
                    <th className="px-4 py-2">Check-out</th>
                    <th className="px-4 py-2">Aksi</th>
                </tr>
            </thead>
            <tbody>
                {reservasiList.length > 0 ? (
                    reservasiList.slice().reverse().map((reservasi, index) => (
                        <tr key={index}>
                            <td className="border px-4 py-2">{index + 1}</td>
                            <td className="border px-4 py-2">{reservasi.invoice}</td>
                            <td className="border px-4 py-2">{reservasi.namaTamu}</td>
                            <td className="border px-4 py-2">{reservasi.kamar}</td>
                            <td className="border px-4 py-2">{reservasi.checkIn}</td>
                            <td className="border px-4 py-2">{reservasi.checkOut}</td>
                            <td className="border px-4 py-2">
                                <button
                                    onClick={() => handleDelete(index)}
                                    className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-md">
                                    <FaTrash />
                                </button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="11" className="text-center py-4">
                            Tidak ada reservasi yang terdaftar.
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>

    <button onClick={clearData} className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 mb-20">
        Clear Data
    </button>
      </>
    );
  }
  
export default CheckIn;
  