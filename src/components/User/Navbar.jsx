import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram, FaTwitter, FaTiktok, FaYoutube } from 'react-icons/fa';

const menuItems = [
  { name: 'Beranda', target: 'beranda' },
  { name: 'Tentang', target: 'tentang' },
  { name: 'Tipe Kamar', target: 'tipe-kamar' },
  { name: 'Fasilitas', target: 'fasilitas' },
  { name: 'Galeri', target: 'galeri' },
  { name: 'Testimoni', target: 'testimoni' },
  { name: 'Artikel', target: 'artikel' },
  { name: 'FAQ', target: 'faq' },
];

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Fungsi untuk toggle menu mobile
  const handleMenuToggle = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  // Fungsi untuk menutup menu mobile
  const handleCloseMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Menangani perubahan warna navbar saat scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.pageYOffset > 5);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="navbar"
      className={`fixed left-0 right-0 top-0 z-10 transition-all duration-300 ${
        scrolled
          ? 'bg-white bg-opacity-100 text-black shadow-lg'
          : 'bg-opacity-0 text-white'
      }`}
    >
      <div className={`space-x-4 bg-black bg-opacity-40 text-white text-sm transition-all duration-300 ${
        scrolled ? 'hidden py-2' : 'flex py-4'}`}>
        <div className="container mx-auto md:px-4 flex md:justify-between justify-center">
          <div className="flex space-x-5 items-center">
            <a href="https://maps.app.goo.gl/jC6gnaMxtjUnpU8q9" target="_blank" className="hidden md:flex items-center hover:text-yellow-300" title="Location">
              <FaMapMarkerAlt className="mr-2 text-red-500" />
              <span>No. 193, Jl, Raya Telaga Sarangan 63361 Magetan</span>
            </a>
            <a href="https://wa.me/6281234567890" target="_blank" className="flex items-center hover:text-yellow-300" title="WhatsApp">
              <FaPhoneAlt className="mr-2  text-red-500" />
              <span>0831-2760-5430</span>
            </a>
            <a href="mailto:email@example.com" target="_blank" className="flex items-center hover:text-yellow-300" title="Email">
              <FaEnvelope className="mr-2  text-red-500" />
              <span>villatiara@gmail.com</span>
            </a>
          </div>
          <div className="hidden md:flex space-x-4 items-center">
            <a href="https://instagram.com/villatiara.sarangan" target="_blank" className="hover:text-yellow-300" title="Instagram">
              <FaInstagram className="mr-2" />
            </a>
            <a href="https://x.com/@username" target="_blank" className="hover:text-yellow-300" title="X">
              <FaTwitter className="mr-2" />
            </a>
            <a href="https://tiktok.com/@tiarasarangan" target="_blank" className="hover:text-yellow-300" title="TikTok">
              <FaTiktok className="mr-2" />
            </a>
            <a href="https://youtube.com/c/username" target="_blank" className="hover:text-yellow-300" title="YouTube">
              <FaYoutube className="mr-2" />
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex justify-between items-center py-4 px-10">
        <h1
          id="logo"
          className={`logo text-3xl md:text-4xl mt-1 items-center justify-center ${
            scrolled ? 'text-red-700' : 'text-white'
          }`}
        >
          Villa Tiara
        </h1>
        <nav>
          <button
            id="menu-toggle"
            className="md:hidden text-2xl font-bold focus:outline-none"
            onClick={handleMenuToggle}
          >
            ☰
          </button>
          {/* Menu Desktop */}
          <ul className="hidden md:flex space-x-8 text-md py-3 font-semibold">
            {menuItems.map((item) => (
              <li key={item.target}>
                <Link
                  to={item.target}
                  smooth={true}
                  duration={500}
                  className="hover:text-yellow-300 cursor-pointer"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* Menu Mobile */}
      <div
        id="mobile-menu"
        className={`fixed top-0 left-0 h-full w-64 bg-black bg-opacity-90 text-white transform transition-transform duration-300 flex flex-col items-start p-5 space-y-6 text-lg z-20 ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <button
          id="close-menu"
          className="text-2xl font-bold self-end focus:outline-none"
          onClick={handleCloseMenu}
        >
          ✖
        </button>
        <ul className="text-lg pl-5">
          {menuItems.map((item) => (
            <li key={item.target} className="py-2">
              <Link
                to={item.target}
                smooth={true}
                duration={500}
                className="hover:text-yellow-300 hover:text-xl cursor-pointer"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
