import UserLayout from '../../layouts/UserLayout';
import {
  FaBed,
  FaConciergeBell,
  FaWifi,
  FaParking,
  FaTree,
  FaUtensils,
} from 'react-icons/fa';
import { GiMountainCave } from 'react-icons/gi';
import { IoIosWalk } from 'react-icons/io';

function TentangDetail() {
  return (
    <UserLayout>
      <div className="tentang-container p-6 bg-gray-50 text-gray-800">
        <section className="intro-section text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-800">
            Tentang Villa Tiara Sarangan
          </h1>
          <p className="mt-4 text-lg">
            Villa Tiara Sarangan adalah penginapan strategis dekat destinasi
            wisata populer Telaga Sarangan di Magetan, Jawa Timur. Dengan
            fasilitas lengkap dan harga terjangkau, villa ini cocok untuk agenda
            healing Anda bersama keluarga.
          </p>
        </section>

        <section className="why-choose mb-8">
          <h2 className="text-2xl font-semibold text-blue-700">
            Kenapa Harus Menginap di Villa Tiara Sarangan
          </h2>
          <p className="mt-2 text-lg">
            Villa ini menawarkan pemandangan indah Telaga Sarangan dan akses
            mudah ke destinasi wisata. Harga yang terjangkau dan pelayanan
            maksimal membuatnya ideal bagi Anda yang ingin berlibur dengan
            nyaman tanpa menguras kantong.
          </p>
        </section>

        <section className="facilities mb-8">
          <h2 className="text-2xl font-semibold text-blue-700">
            Fasilitas Utama
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-4">
            <div className="facility-item flex items-center">
              <FaConciergeBell className="text-3xl text-blue-500 mr-4" />
              <span className="text-lg">Resepsionis 24 Jam</span>
            </div>
            <div className="facility-item flex items-center">
              <FaUtensils className="text-3xl text-blue-500 mr-4" />
              <span className="text-lg">Restoran</span>
            </div>
            <div className="facility-item flex items-center">
              <FaWifi className="text-3xl text-blue-500 mr-4" />
              <span className="text-lg">WiFi Gratis</span>
            </div>
            <div className="facility-item flex items-center">
              <FaParking className="text-3xl text-blue-500 mr-4" />
              <span className="text-lg">Parkir</span>
            </div>
            <div className="facility-item flex items-center">
              <FaBed className="text-3xl text-blue-500 mr-4" />
              <span className="text-lg">Kamar dengan Balkon</span>
            </div>
          </div>
        </section>

        <section className="room-types mb-8">
          <h2 className="text-2xl font-semibold text-blue-700">Jenis Kamar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="room-item bg-white p-4 rounded shadow-lg">
              <h3 className="text-xl font-bold text-blue-600">
                Kamar Keluarga
              </h3>
              <p className="mt-2 text-gray-700">
                Kamar berukuran 13 m² ini bisa menampung hingga 3 tamu. Tersedia
                1 double bed, 1 twin bed, kamar mandi, TV, WiFi, dan balkon.
              </p>
            </div>
            <div className="room-item bg-white p-4 rounded shadow-lg">
              <h3 className="text-xl font-bold text-blue-600">
                Kamar Double Deluxe
              </h3>
              <p className="mt-2 text-gray-700">
                Kamar seluas 12 m² untuk 2 tamu, dengan 1 double bed, kamar
                mandi, TV, WiFi, dan balkon.
              </p>
            </div>
          </div>
        </section>

        <section className="nearby-attractions mb-8">
          <h2 className="text-2xl font-semibold text-blue-700">
            Tempat Wisata Dekat Villa
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="attraction-item flex items-center bg-white p-4 rounded shadow-lg">
              <GiMountainCave className="text-3xl text-green-500 mr-4" />
              <div>
                <h3 className="text-xl font-bold">Telaga Sarangan</h3>
                <p className="text-gray-700">
                  Danau alami untuk berkuda, naik speed boat, dan kulineran.
                </p>
              </div>
            </div>
            <div className="attraction-item flex items-center bg-white p-4 rounded shadow-lg">
              <FaTree className="text-3xl text-green-500 mr-4" />
              <div>
                <h3 className="text-xl font-bold">Air Terjun Ngadiloyo</h3>
                <p className="text-gray-700">
                  Air terjun dengan jalur trekking sejauh 500 m.
                </p>
              </div>
            </div>
            <div className="attraction-item flex items-center bg-white p-4 rounded shadow-lg">
              <IoIosWalk className="text-3xl text-green-500 mr-4" />
              <div>
                <h3 className="text-xl font-bold">Mojosemi Forest Park</h3>
                <p className="text-gray-700">
                  Spot foto, high rope adventure, dan zona dino park untuk
                  anak-anak.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </UserLayout>
  );
}

export default TentangDetail;
