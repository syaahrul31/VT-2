import { Link } from "react-router-dom";
import { FaArrowRight } from 'react-icons/fa';
import Kamar from '../../assets/kamar.JPG';

function TipeKamar() {
  const rooms = [
    {
      type: "Standar",
      description: "Kamar dengan tempat tidur double sliding, ideal untuk pasangan. Dilengkapi fasilitas modern.",
      img: Kamar
    },
    {
      type: "Family",
      description: "Kamar keluarga dengan 1 double bed dan 1 single bed. Cocok untuk keluarga kecil.",
      img: Kamar
    },
    {
      type: "Deluxe",
      description: "Kamar deluxe dengan 2 double bed, menawarkan kenyamanan ekstra untuk grup atau keluarga.",
      img: Kamar
    }
  ];

  return (
    <div className="bg-gray-100 px-4 md:px-10 justify-center items-center py-20">
      <section className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold">Tipe <span className="text-red-600">Kamar</span></h1>
        <p className="text-gray-700 text-lg md:text-xl py-4">Temukan jenis kamar yang sesuai dengan kebutuhan dan nikmati kenyamanan serta fasilitas terbaik dari Villa Tiara Sarangan.</p>
      </section>
      <section className="flex flex-wrap items-center justify-center space-y-8 md:space-y-0 pb-10">
        {rooms.map((room) => (
          <div key={room.type} className="w-full md:w-1/4 mx-4 rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105">
            <img src={room.img} alt={room.type} className="w-full h-48 object-cover rounded-t-xl" />
            <div className="p-6 bg-white">
              <h2 className="text-2xl font-bold mb-3 text-red-600">{room.type}</h2>
              <p className="text-gray-700 mb-4">{room.description}</p>
              <Link to="/tipe-kamar" className="inline-block py-2 px-4 bg-orange-600 text-white rounded-lg hover:bg-yellow-500 transition duration-300">View More</Link>
            </div>
          </div>
        ))}
      </section>
      <div className="text-center">
        <Link to="/tipe-kamar" className="inline-flex items-center text-lg font-semibold py-2 px-4 bg-red-600 text-white rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300 transform hover:-translate-y-1">
          <span>Selengkapnya</span>
          <FaArrowRight className="ml-2" />
        </Link>
      </div>
    </div>
  );
}

export default TipeKamar;
