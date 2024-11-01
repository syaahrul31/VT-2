import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from 'react-photo-view';

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
    <div className="bg-white">
      <div className="container mx-auto px-5 md:px-20 py-16 ">
        <section className="text-center mb-4">
          <h1 className="text-3xl md:text-5xl font-bold">Gallery</h1>
          <p className="text-gray-700 text-md py-6">
            Temukan spot menarik di setiap sudut Villa Tiara Sarangan
          </p>
        </section>
        {/* PhotoProvider untuk Lightbox */}
        <PhotoProvider>
          <section className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {images.map((src, index) => (
              index === images.length - 1 ? (
                <div key={index} className="relative">
                  <Link to="/more-gallery">
                    <img
                      className="w-full h-64 object-cover rounded-lg shadow-md cursor-pointer"
                      src={src}
                      alt={`Villa ${index + 1}`}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center rounded-lg">
                      <span className="text-white text-xl font-bold">View More</span>
                    </div>
                  </Link>
                </div>
              ) : (
                <PhotoView key={index} src={src}>
                  <div className="relative group">
                    <img
                      className="w-full h-64 object-cover rounded-lg shadow-md cursor-pointer transition-all duration-300 group-hover:bg-black group-hover:bg-opacity-40"
                      src={src}
                      alt={`Villa ${index + 1}`}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 flex items-center justify-center rounded-lg transition-opacity duration-300">
                      <span className="text-white text-lg opacity-0 group-hover:opacity-100 font-bold"></span>
                    </div>
                  </div>
                </PhotoView>
              )
            ))}
          </section>
        </PhotoProvider>
      </div>
    </div>
  );
}

export default Galeri;
