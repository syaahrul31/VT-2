import { FaCreditCard, FaFileInvoice, FaArrowLeft, FaPrint, FaCheckCircle, FaTimesCircle} from 'react-icons/fa';
import { Link } from 'react-router-dom';

function CheckOut() {
    const toggleInvoiceModal = () => {
        const modal = document.getElementById('invoiceModal');
        modal.classList.toggle('hidden');
    }

    // Fungsi untuk mencetak invoice
    const printInvoice = () => {
        window.print();
    }

    // Fungsi untuk melakukan checkout (contoh alert, bisa disesuaikan)
    const checkoutReservation = () => {
        alert('Checkout berhasil!');
        // Di sini bisa ditambahkan logika untuk redirect atau API call
    }

    return (
      <>
        <h2 className="text-3xl font-bold text-center text-yellow-500 mb-8 flex items-center justify-center">
        <FaCreditCard className="mr-2" /> Checkout Reservasi
        </h2>

        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Hotel Aktif</h3>

            <div className="space-y-6">
                {/* Daftar Hotel yang Aktif */}
                <div className="border p-4 rounded-lg shadow-md flex justify-between items-center">
                    <div>
                        <h4 className="text-xl font-semibold">Villa Tiara 1</h4>
                        <p className="text-gray-600">Check-in: 15 Okt 2024</p>
                        <p className="text-gray-600">Check-out: 17 Okt 2024</p>
                    </div>
                    <button
                    onClick={toggleInvoiceModal}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-lg shadow-lg transition flex items-center justify-center"
                    >
                    <FaFileInvoice className="mr-2" />
                    Lihat Invoice
                    </button>
                </div>
                {/* Tambahkan daftar hotel lainnya di sini */}
            </div>

            <div className="mt-8 flex justify-between items-center">
                <Link to="/check-in" className="flex items-center text-sm text-gray-600 hover:text-yellow-500 transition">
                <FaArrowLeft className="mr-2" />
                Kembali
                </Link>
            </div>
        </div>

        {/* Modal Invoice */}
        <div id="invoiceModal" className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center hidden">
            <div className="bg-white p-8 rounded-xl shadow-lg max-w-xl w-full">
                <h3 className="text-2xl font-bold mb-4 text-center">Invoice Reservasi</h3>
                <div className="space-y-4">
                    <div className="flex justify-between border-b pb-2">
                        <span className="text-gray-700">Kode Invoice:</span>
                        <span className="font-semibold">INV-00045</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                        <span className="text-gray-700">Nama Tamu:</span>
                        <span className="font-semibold">John Doe</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                        <span className="text-gray-700">Kamar:</span>
                        <span className="font-semibold">Villa Tiara 1</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                        <span className="text-gray-700">Check-in:</span>
                        <span className="font-semibold">15 Okt 2024</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                        <span className="text-gray-700">Check-out:</span>
                        <span className="font-semibold">17 Okt 2024</span>
                    </div>
                    <div className="flex justify-between border-t pt-2">
                        <span className="font-bold">Total Biaya:</span>
                        <span className="font-bold">Rp 2.500.000</span>
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
                        <FaCheckCircle className="mr-2" /> 
                        Checkout
                    </button>
                    <button
                        onClick={toggleInvoiceModal}
                        className="text-gray-600 hover:text-red-500 transition flex items-center justify-center"
                    >
                        <FaTimesCircle className="mr-2" /> 
                        Tutup
                    </button>
                </div>
            </div>
        </div>
      </>
    );
  }
  
export default CheckOut;
  