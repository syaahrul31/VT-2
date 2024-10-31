import { FaTachometerAlt, FaCalendarAlt, FaBed, FaBook, FaFileAlt, FaSignOutAlt, FaChevronDown } from 'react-icons/fa';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
     
    // Fungsi untuk toggle menu mobile
    const handleMenuToggle = () => {
        setIsMobileMenuOpen((prevState) => !prevState);
    };
        
    const toggleDropdown = (id) => {
        const menu = document.getElementById(id);
        menu.classList.toggle('hidden');
    };

    return (
        <>
            <aside id="sidebar" className={`fixed inset-y-0 left-0 w-64 bg-gradient-to-b from-red-700 to-orange-700 text-white h-screen transition-transform transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <h1 className="logo text-3xl font-bold px-6 mb-4 pt-6">Villa Tiara</h1>
                <div className="flex items-center p-6 bg-orange-600">
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" className="w-10 h-10 rounded-full" alt="Admin" />
                    <div className="ml-3">
                        <p className="text-sm font-bold">ADMIN</p>
                        <p className="text-xs text-gray-300">Senin, 30 Oktober 2024</p>
                    </div>
                </div>
                <nav>
                    <ul className="space-y-4 py-5">
                        <li className="px-6 hover:bg-orange-600">
                            <Link to="/dashboard" className="flex items-center px-2 py-2 text-gray-300 hover:text-white rounded-md">
                            <FaTachometerAlt className='w-6' />
                            <span className="ml-3">Dashboard</span>
                            </Link>
                        </li>
                        <li className="px-6 hover:bg-orange-600">
                            <button className="w-full flex items-center px-2 py-2 text-gray-300 hover:text-white rounded-md focus:outline-none" onClick={() => toggleDropdown('reservasi-menu')}>
                                <FaCalendarAlt className='w-6' />
                                <span className="ml-3">Reservasi</span>
                                <FaChevronDown className='ml-auto' />
                            </button>
                            <ul id="reservasi-menu" className="ml-8 mt-2 hidden space-y-2 pb-3">
                                <li><Link to='/check-in' className="text-gray-300 hover:text-white">Check In</Link></li>
                                <li><Link to='/check-out' className="text-gray-300 hover:text-white">Check Out</Link></li>
                                <li><a href="#" className="text-gray-300 hover:text-white">Sedang di Villa</a></li>
                            </ul>
                        </li>
                        <li className="px-6 hover:bg-orange-600">
                            <button className="w-full flex items-center px-2 py-2 text-gray-300 hover:text-white rounded-md focus:outline-none" onClick={() => toggleDropdown('kamar-menu')}>
                                <FaBed className='w-6' />
                                <span className="ml-3">Kamar</span>
                                <FaChevronDown className='ml-auto' />
                            </button>
                            <ul id="kamar-menu" className="ml-8 mt-2 hidden space-y-2 pb-3">
                                <li><Link to='/tambah-kamar' className="text-gray-300 hover:text-white">Tambah Kamar</Link></li>
                                <li><Link to='/lihat-kamar' className="text-gray-300 hover:text-white">Lihat Kamar</Link></li>
                            </ul>
                        </li>
                        <li className="px-6 hover:bg-orange-600">
                            <button className="w-full flex items-center px-2 py-2 text-gray-300 hover:text-white rounded-md focus:outline-none" onClick={() => toggleDropdown('bukutamu-menu')}>
                                <FaBook className='w-6' />
                                <span className="ml-3">Buku Tamu</span>
                                <FaChevronDown className='ml-auto' />
                            </button>
                            <ul id="bukutamu-menu" className="ml-8 mt-2 hidden space-y-2 pb-3">
                                <li><Link to='/tambah-tamu' className="text-gray-300 hover:text-white">Tambah Tamu</Link></li>
                                <li><Link to='/lihat-tamu' className="text-gray-300 hover:text-white">Lihat Tamu</Link></li>
                            </ul>
                        </li>
                        <li className="px-6 hover:bg-orange-600">
                            <button className="w-full flex items-center px-2 py-2 text-gray-300 hover:text-white rounded-md focus:outline-none" onClick={() => toggleDropdown('laporan-menu')}>
                                <FaFileAlt className='w-6' />
                                <span className="ml-3">Laporan</span>
                                <FaChevronDown className='ml-auto' />
                            </button>
                            <ul id="laporan-menu" className="ml-8 mt-2 hidden space-y-2 pb-3">
                                <li><a href="#" className="text-gray-300 hover:text-white">Transaksi Kamar</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white">Daftar Tamu</a></li>
                            </ul>
                        </li>
                        <li className="px-6 hover:bg-orange-600">
                            <Link to="/login" className="flex items-center px-2 text-gray-300 hover:bg-orange-600 hover:text-white rounded-md py-2">
                            <FaSignOutAlt className='w-6' />
                            <span className="ml-3">Logout</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </aside>
            <nav className="fixed md:hidden p-4 top-0 left-0 right-0 bg-gradient-to-br from-red-700 to-orange-700 flex justify-between items-center z-50">
                <div className="logo text-white px-4 text-2xl font-bold">Villa Tiara</div>
                <button id="menu-toggle" onClick={handleMenuToggle} className="text-2xl text-white p-2 rounded-md focus:outline-none">
                    ☰
                </button>
            </nav>
        </>
    )
}

export default Sidebar;
