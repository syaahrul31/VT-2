import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const menuItems = [
  { name: 'Beranda', target: 'beranda' },
  { name: 'Tentang Kami', target: 'tentang' },
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
      className={`fixed left-0 right-0 z-10 transition-all duration-300 ${
        scrolled
          ? 'bg-white bg-opacity-100 top-0 text-black shadow-lg'
          : 'bg-black bg-opacity-30 top-7 md:top-8 text-white'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-3 px-10 md:py-3 md:px-5">
        <h1
          id="logo"
          className={`logo text-3xl md:text-4xl items-center justify-center font-medium transition-colors ${
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
                  className="hover:text-yellow-600 cursor-pointer"
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
                className="hover:text-yellow-600 cursor-pointer"
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
