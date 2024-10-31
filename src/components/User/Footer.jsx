import { FaInstagram, FaTiktok, FaYoutube, FaEnvelope } from 'react-icons/fa';
import { FaUserTie } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white pt-10">
      <div className="container mx-auto px-5 md:px-20">
        {/* Section CTA */}
        <div className="bg-white text-black rounded-lg p-6 mb-10 flex flex-col md:flex-row items-center justify-between">
          <h2 className="text-xl md:text-2xl font-semibold text-center md:text-left mb-4 md:mb-0">
            Punya kebutuhan pembuatan packaging custom? <br />
            Konsultasikan sekarang bersama kami!
          </h2>
          <a
            href="https://wa.me/1234567890"
            className="bg-green-500 text-white px-6 py-2 rounded-md text-lg hover:bg-green-400 transition duration-300"
          >
            Hubungi kami
          </a>
        </div>

        {/* Section Footer Info */}
        <div className="grid grid-cols-1 md:grid-cols-8 gap-10 mb-10">
          {/* Column 1 - logo/deskripsi */}
          <div className='col-span-2'>
            <h1 id="logo" className="text-3xl md:text-4xl items-center justify-center font-medium transition-colors text-white mb-3">
              Villa Tiara
            </h1>
            <p className='mb-6'>Villa Tiara Sarangan menawarkan pengalaman menginap nyaman dan mewah, sejalan dengan keindahan Telaga Sarangan.</p>
            <Link to="/login" className="inline-flex items-center text-lg font-semibold py-2 px-4 border-yellow-600 border-4 text-white rounded-6xl shadow-lg hover:bg-yellow-700 transition duration-300 transform hover:-translate-y-1">
              <FaUserTie className="mr-2" />
              Owner Login
            </Link>
          </div>

          {/* Column 2 - about & products */}
          <div className='col-span-1'>
            <h2 className="font-bold text-lg mb-4">About Villa</h2>
            <ul className='mb-4'>
              <li><a href="#" className="hover:underline">Fasilitas</a></li>
              <li><a href="#" className="hover:underline">Galeri</a></li>
              <li><a href="#" className="hover:underline">Artikel</a></li>
            </ul>
          </div>
          <div className='col-span-1'>
            <h2 className="font-bold text-lg mb-4">Tipe Kamar</h2>
            <ul>
              <li><a href="#" className="hover:underline">Standar</a></li>
              <li><a href="#" className="hover:underline">Deluxe</a></li>
              <li><a href="#" className="hover:underline">Family</a></li>
            </ul>
          </div>

          {/* Column 3 - kantor & sosmed */}
          <div className='col-span-2'>
            <h2 className="font-bold text-lg mb-4">Main Office</h2>
            <p className="mb-2">
              Jl. Veteran No. 31, Marga Jaya, Kec. Bekasi Selatan, <br />
              Kota Bekasi, Jawa Barat 17141
            </p>
            <p className="mb-10">Phone: (021) 8877756</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-400">
                <FaTiktok size={24} />
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <FaYoutube size={24} />
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>

          {/* Column 4 - Contact Info with Google Maps */}
          <div className='col-span-2'>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.0672071736167!2d111.21916971744382!3d-7.6759242999999895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e798f903e19578f%3A0x963948e3fb35ddef!2sVilla%20Tiara!5e0!3m2!1sid!2sid!4v1728476850917!5m2!1sid!2sid"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center py-5 bg-red-600">
        <p className="text-sm font-bold">
          &copy; 2024 Villa Tiara Sarangan | All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
