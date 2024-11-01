import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { FaArrowRight, FaParking, FaWifi, FaConciergeBell, FaUtensils, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Fasilitas() {
  return (
    <div className='bg-red-600'>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 p-14 rounded-xl shadow-md animate-fadeIn">
      {/* Swiper Section */}
        <section className="w-full md:w-1/2">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation
            effect="fade"
            className="rounded-xl shadow-lg"
          >
            <SwiperSlide>
              <img
                className="w-full h-448 object-cover rounded-xl hover:scale-105"
                src="https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10011479-74c2b886c0303fb917779d9ac5940ae4.jpeg"
                alt="Tiara Village"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-full h-448 object-cover rounded-xl hover:scale-105"
                src="https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10011479-147640908bf0184df67e31f2c26009fa.jpeg"
                alt="Villa Tiara"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-full h-448 object-cover rounded-xl hover:scale-105"
                src="https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10011479-5c9c6a49c99dee99b1ea62a8b1122086.jpeg"
                alt="Beautiful Villa"
              />
            </SwiperSlide>
          </Swiper>
        </section>

        {/* Fasilitas Section */}
        <section className="w-full pl-4">
          <h2 className="text-5xl font-bold mb-8 text-white">Fasilitas Villa</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Fasilitas Utama */}
            <div className='col-span-1 text-white'>
              <h3 className="text-xl font-medium mb-3">Fasilitas Utama</h3>
              <div className="flex items-center mb-2 text-sm">
                <FaUtensils className="mr-2" /> <span>Restoran</span>
              </div>
              <div className="flex items-center mb-2 text-sm">
                <FaParking className="mr-2" /> <span>Parkir</span>
              </div>
              <div className="flex items-center mb-2 text-sm">
                <FaConciergeBell className="mr-2" /> <span>Resepsionis 24 Jam</span>
              </div>
              <div className="flex items-center mb-2 text-sm">
                <FaWifi className="mr-2"/> <span>WiFi</span>
              </div>
            </div>
            {/* Tempat di Sekitar Villa */}
            <div className='col-span-2 text-white mb-6'>
              <h3 className="text-xl font-medium mb-3">Tempat di Sekitar Villa</h3>
              <div className="flex items-center mb-2 text-sm">
                <FaMapMarkerAlt className="mr-2" /> <span>Telaga Sarangan (383 m)</span>
              </div>
              <div className="flex items-center mb-2 text-sm">
                <FaMapMarkerAlt className="mr-2" /> <span>Bank Jatim KCP Plaosan (2.79 km)</span>
              </div>
              <div className="flex items-center mb-2 text-sm">
                <FaMapMarkerAlt className="mr-2" /> <span>Mojosemi Forest Park (1.23 km)</span>
              </div>
              <div className="flex items-center mb-2 text-sm">
                <FaMapMarkerAlt className="mr-2" /> <span>Rumah Retret & Kapel Domus (456 m)</span>
              </div>
            </div>
          </div>
          <Link 
            to="/fasilitas-villa" 
            className="inline-flex text-lg font-bold py-2 px-4 text-red-600 bg-white rounded-lg shadow-lg items-center justify-center hover:bg-yellow-500 transition duration-300 transform hover:-translate-y-1"
          >
            <span>Selengkapnya</span>
            <FaArrowRight className="ml-2" />
          </Link>
        </section>
      </div>
    </div>
  );
}


export default Fasilitas;
