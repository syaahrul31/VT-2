import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { PhotoProvider, PhotoView } from 'react-photo-view'; // Import Lightbox components

function Galeri() {
  const images = [
    "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10011479-9fc40c87b7c08e70296547d0c97dc3cd.jpeg",
    "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10011479-43300d1713b75257b064b79df6654401.jpeg",
    "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10011479-5c9c6a49c99dee99b1ea62a8b1122086.jpeg",
    "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10011479-0317d107c478aa5272bfdcde77220bcc.jpeg",
    "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10011479-38f3c3cd58fc93e46a54609fb79e8e6f.jpeg",
    "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10011479-529fba50e81e68b49c0a8de1f780e89f.jpeg"
  ];

  return (
    <div className="px-5 md:px-20 mb-16">
      <section className="text-center mb-4">
        <h1 className="text-3xl md:text-5xl font-bold">Gallery</h1>
        <p className="text-gray-700 text-xl py-6">
          Temukan spot menarik di setiap sudut Villa Tiara Sarangan
        </p>
      </section>

      {/* PhotoProvider untuk Lightbox */}
      <PhotoProvider>
        <section className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
          {images.map((src, index) => (
            <PhotoView key={index} src={src}>
              <img
                className="w-full h-64 object-cover rounded-lg shadow-md cursor-pointer transition-transform duration-300 hover:scale-105"
                src={src}
                alt={`Villa ${index + 1}`}
              />
            </PhotoView>
          ))}
        </section>
      </PhotoProvider>

      <div className="text-center">
        <Link
          to="/galeri"
          className="inline-flex items-center text-lg font-semibold py-2 px-4 bg-red-600 text-white rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300 transform hover:-translate-y-1"
        >
          <span>Selengkapnya</span>
          <FaArrowRight className="ml-2" />
        </Link>
      </div>
    </div>
  );
}

export default Galeri;
