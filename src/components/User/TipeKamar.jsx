import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Standart from '../../assets/Standart.JPG';
import Family from '../../assets/Family.JPG';
import Deluxe from '../../assets/Deluxe.JPG';

function TipeKamar() {
  const rooms = [
    {
      type: 'Standar',
      description:
        'Kamar dengan tempat tidur double sliding, ideal untuk pasangan. Dilengkapi fasilitas modern.',
      img: Standart,
    },
    {
      type: 'Family',
      description:
        'Kamar keluarga dengan 1 double bed dan 1 single bed. Cocok untuk keluarga kecil.',
      img: Family,
    },
    {
      type: 'Deluxe',
      description:
        'Kamar deluxe dengan 2 double bed, menawarkan kenyamanan ekstra untuk grup atau keluarga.',
      img: Deluxe,
    },
  ];

  return (
    <div className="container mx-auto my-14 px-4 md:px-10 justify-center items-center">
      <section className="text-center mb-6">
        <h1 className="text-3xl md:text-5xl font-bold">
          Tipe <span className="text-red-600">Kamar</span>
        </h1>
        <p className="text-gray-700 text-md md:text-md py-4">
          Temukan jenis kamar yang sesuai dengan kebutuhan dan nikmati
          kenyamanan serta fasilitas terbaik dari Villa Tiara Sarangan.
        </p>
      </section>
      <section className="flex flex-wrap items-center justify-center space-y-8 md:space-y-0 mb-6">
        {rooms.map((room) => (
          <div
            key={room.type}
            className="w-full md:w-1/4 mx-4 rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105"
          >
            <LazyLoadImage
              src={room.img}
              alt={room.type}
              effect="blur"
              className="w-full object-cover rounded-t-xl"
              wrapperClassName="w-full h-48"
            />
            <div className="py-6 px-10 bg-white">
              <h2 className="text-2xl font-bold mb-3 text-red-600">
                {room.type}
              </h2>
              <p className="text-sm text-gray-700 mb-4">{room.description}</p>
              <Link
                to="/tipe-kamar"
                className="text-sm inline-flex items-center py-2 px-4 bg-orange-600 text-white rounded-lg hover:bg-yellow-500 transition duration-300"
              >
                View More <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default TipeKamar;
