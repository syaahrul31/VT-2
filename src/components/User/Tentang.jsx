import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

function Tentang() {
  return (
    <div className="py-10 flex flex-col md:flex-row items-center md:space-x-10">
      <section className="md:w-3/6 text-center md:text-left flex items-center justify-center mb-6 md:mb-0 px-4 animate-slideIn">
        <div className="md:pl-10">
          <p className="text-lg md:text-xl text-gray-600 mb-4 font-semibold animate-fadeIn">Tentang Villa</p>
          <h1 className="text-4xl md:text-5xl text-black mb-4 font-bold animate-slideIn">
            Temukan Kenyamanan & Keindahan di <span className="text-red-600">Villa Tiara Sarangan</span>
          </h1>
          <p className="text-gray-700 text-sm md:text-md leading-relaxed mb-6 animate-fadeIn">
            Villa Tiara Sarangan menawarkan pengalaman menginap nyaman dan mewah, sejalan dengan keindahan Telaga Sarangan. Terletak di kawasan menawan Telaga Sarangan, Villa Tiara adalah pilihan ideal bagi yang mencari kenyamanan modern di tengah suasana alami. Nikmati ketenangan Telaga Sarangan, tempat sempurna untuk melarikan diri dari hiruk-pikuk kota.
          </p>
          <Link to="/tentang-villa" className="inline-flex text-lg font-semibold py-2 px-4 bg-red-600 text-white rounded-lg shadow-lg flex items-center justify-center hover:bg-yellow-500 transition duration-300 transform hover:-translate-y-1">
            <span>Selengkapnya</span>
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
      <section className="md:w-3/6 mb-6 md:mb-0 p-4 relative right-0">
        <img className="w-full object-cover rounded-tl-5xl rounded-bl-5xl shadow-lg transition-transform duration-300 hover:scale-105" 
             src="https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10011479-e4002b1853479e2f3330a1e79ed8b5f7.jpeg" 
             alt="Tiara Village" />
      </section>
    </div>
  );
}

export default Tentang;
