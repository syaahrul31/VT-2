import React from 'react';
import { FaUser, FaLock, FaSignInAlt, FaArrowLeft } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function FormLogin() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
    navigate('/booking-page');
  };

  return (
    <div className="pattern min-h-screen flex items-center justify-center">
      {/* Container utama */}
      <div className="max-w-4xl bg-white rounded-3xl shadow-lg overflow-hidden flex">
        {/* Kolom Kiri: Gambar */}
        <div className="w-1/2 hidden md:block relative">
          <h1 className="logo absolute text-3xl text-white mt-16 ml-16 z-10">
            Villa Tiara
          </h1>
          <LazyLoadImage
            src="https://wallpapercave.com/wp/wp12352378.jpg"
            alt="Villa Tiara Sarangan"
            effect="blur"
            className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            wrapperClassName="w-full h-full z-0"
          />
        </div>

        {/* Kolom Kanan: Form Login */}
        <div className="w-full md:w-1/2 p-20">
          <h2 className="text-3xl font-bold pb-2 text-center text-gray-800">
            Login
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Selamat Datang di Villa Tiara
          </p>
          <form action="#" method="POST" className="space-y-5">
            {/* Input Username */}
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                Username
              </label>
              <div className="flex items-center border border-gray-300 rounded-md">
                <span className="px-3 text-gray-600">
                  <FaUser />
                </span>
                <input
                  type="text"
                  id="username"
                  name="username"
                  required
                  className="w-full px-3 py-2 border-l border-gray-300 focus:outline-none focus:ring focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>
            </div>
            {/* Input Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                Password
              </label>
              <div className="flex items-center border border-gray-300 rounded-md">
                <span className="px-3 text-gray-600">
                  <FaLock />
                </span>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  className="w-full px-3 py-2 border-l border-gray-300 focus:outline-none focus:ring focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>
            </div>
            {/* Checklist Saya Bukan Robot */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="not-robot"
                required
                className="w-5 h-5 text-yellow-500 border-gray-300 rounded focus:ring-yellow-500"
              />
              <label htmlFor="not-robot" className="text-sm text-gray-700">
                Saya bukan robot
              </label>
            </div>
            {/* Tombol Login */}
            <button
              type="submit"
              onClick={handleSubmit}
              className="flex items-center justify-center w-full bg-red-700 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors"
            >
              <FaSignInAlt className="mr-2" /> Login
            </button>

            {/* Link Kembali */}
            <div className="text-center mt-4">
              <Link
                to="/"
                className="flex items-center justify-center text-sm text-gray-500 hover:text-yellow-500"
              >
                <FaArrowLeft className="mr-1" /> Kembali
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormLogin;
