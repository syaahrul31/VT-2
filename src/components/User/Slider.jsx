import { Swiper, SwiperSlide } from 'swiper/react'; 
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { FaBed, FaParking, FaWifi, FaConciergeBell } from 'react-icons/fa';

function Slider() {
  return (
    <div className="bg-red-600 flex flex-col md:flex-row items-center md:space-x-5 py-10 md:py-2 px-6 md:px-16 mb-10">
      <section className="w-full md:w-3/6 mb-4 md:mb-0">
        {/* Swiper Container */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          loop={true} // Slide will loop continuously
          autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay settings
          pagination={{ clickable: true }} // Enable pagination bullets
          navigation // Enable navigation buttons
          effect="fade" // Fade effect for smooth transition
          className="mySwiper rounded-lg shadow-md "
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <img
              className="w-full object-cover rounded-lg"
              src="https://th.bing.com/th/id/OIP.Q5PhvQcyfw9nORh1VgHySAHaEo?rs=1&pid=ImgDetMain"
              alt="Tiara Village"
            />
          </SwiperSlide>
          {/* Slide 2 */}
          <SwiperSlide>
            <img
              className="w-full object-cover rounded-lg"
              src="https://wallpaperaccess.com/full/1403954.jpg"
              alt="Villa Tiara"
            />
          </SwiperSlide>
          {/* Slide 3 */}
          <SwiperSlide>
            <img
              className="w-full object-cover rounded-lg"
              src="https://wallpaperaccess.com/full/2527120.jpg"
              alt="Beautiful Villa"
            />
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Section Fasilitas */}
      <section className="w-full md:w-4/6 flex items-center justify-center text-center md:text-left text-white md:p-20">
        <div>
          <h1 className="text-3xl md:text-6xl mb-8 font-bold animate-fadeIn">Fasilitas</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Fasilitas Items */}
            <FasilitasItem icon={<FaBed />} text="Fasilitas Kamar: Meja, Pancuran, TV" />
            <FasilitasItem icon={<FaParking />} text="Fasilitas Publik: Area parkir, Restoran" />
            <FasilitasItem icon={<FaWifi />} text="Konektivitas: WiFi gratis" />
            <FasilitasItem icon={<FaConciergeBell />} text="Umum: Teras" />
            <FasilitasItem icon={<FaConciergeBell />} text="Servis Hotel: Resepsionis 24 jam" />
          </div>
        </div>
      </section>
    </div>
  );
}

// Komponen untuk Item Fasilitas
function FasilitasItem({ icon, text }) {
  return (
    <div className="flex items-center space-x-4 animate-slideIn">
      <div className="text-2xl">{icon}</div>
      <span>{text}</span>
    </div>
  );
}

export default Slider;
