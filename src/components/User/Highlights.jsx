import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const sections = [
  {
    title: 'TELAGA SARANGAN',
    caption: 'Pemandangan Indah Telaga Sarangan',
    caption2:
      'Nikmati keindahan dan ketenangan Telaga Sarangan, tempat yang sempurna untuk melepas penat dan menikmati alam.',
    img: 'https://img.inews.co.id/media/1200/files/inews_new/2019/08/29/Sarangan.jpg',
  },
  {
    title: 'BALKON & MEET ROOM',
    caption: 'Ruang Nyaman untuk Pertemuan ',
    caption2:
      'Ruang pertemuan nyaman dengan pemandangan indah, cocok untuk ngobrol santai, bekerja, atau bertemu dengan teman.',
    img: 'https://voenews.com.br/wp-content/uploads/2020/06/A-vista-de-tirara-o-folego-do-Blue-Mountain-Resort-Spa-em-Campos-do-Jord%C3%A3o-SP.jpg',
  },
  {
    title: 'KAFE VILLA',
    caption: 'Tempat Bersantai dan Menikmati Hidangan',
    caption2:
      'Cafe Tiara menghadirkan suasana hangat dan nyaman, tempat terbaik untuk bersantai sambil menikmati hidangan lezat.',
    img: 'https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10011479-9e1d7420b3c3b1187f707d713260c357.jpeg',
  },
];

function Highlights() {
  return (
    <div className="container atas bg-red-600 mx-auto py-8 px-4 mb-10 rounded-3xl shadow-xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
        {sections.map((section, index) => (
          <div key={index} className="flip-card">
            <div className="flip-card-inner">
              {/* Sisi Depan */}
              <div className="flip-card-front rounded-3xl relative border-4">
                <LazyLoadImage
                  src={section.img}
                  alt={section.title}
                  effect="blur"
                  className="w-full h-full object-cover rounded-3xl"
                  wrapperClassName="w-full h-full"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black to-transparent rounded-3xl">
                  <div className="absolute inset-8 items-center justify-center">
                    <h2 className="text-white text-center text-xl font-bold">
                      {section.title}
                    </h2>
                    <p className="text-white text-center text-sm font-normal">
                      {section.caption}
                    </p>
                  </div>
                </div>
              </div>
              {/* Sisi Belakang */}
              <div className="flip-card-back rounded-3xl flex items-center justify-center px-14">
                <div className="text-center">
                  <h2 className="text-xl font-bold mb-3 text-white">
                    {section.title}
                  </h2>
                  <p className="text-white">{section.caption2}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Highlights;
