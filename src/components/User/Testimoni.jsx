import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaBed } from 'react-icons/fa';

const testimonials = [
  {
    avatar: "NH",
    name: "Nurul H.",
    type: "Backpacking",
    rating: "6.3 / 10",
    date: "02 Feb 2020",
    review: "Pintu kamar mandi rusak, selimut ada bekas noda, gorden nerawang banget padahal lantai dasar pinggir jalan, tapi untungnya dikasih air mineral, air panas, sabun. Meski sikat gigi tidak ada.",
    likes: 1,
  },
  {
    avatar: "AJ",
    name: "Anak Jujur.",
    type: "Backpacking",
    rating: "6.3 / 10",
    date: "02 Feb 2020",
    review: "Pintu kamar mandi rusak, selimut ada bekas noda, gorden nerawang banget padahal lantai dasar pinggir jalan, tapi untungnya dikasih air mineral, air panas, sabun. Meski sikat gigi tidak ada.",
    likes: 1,
  },
  {
    avatar: "UL",
    name: "Ulil Amer",
    type: "Backpacking",
    rating: "6.3 / 10",
    date: "02 Feb 2020",
    review: "Pintu kamar mandi rusak, selimut ada bekas noda, gorden nerawang banget padahal lantai dasar pinggir jalan, tapi untungnya dikasih air mineral, air panas, sabun. Meski sikat gigi tidak ada.",
    likes: 1,
  },
];

function Testimoni() {
  return (
    <div className="bg-red-600 flex flex-col md:flex-row items-center md:space-x-5 px-6 md:px-16">
      <section className="md:w-2/6 text-center md:text-left items-center justify-center p-10 md:p-10 text-white">
        <h1 className="text-6xl my-5"><span className="font-bold">Testimoni</span></h1>
        <p className="text-xl leading-relaxed mb-6">Dengarkan apa yang pelanggan kami katakan tentang pengalaman mereka menginap di Villa Tiara.</p>
      </section>
      <section className="w-full md:w-4/6">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          pagination={{ clickable: true }}   
          navigation
          autoplay={{ delay: 5000 }}
          className="mySwiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="border rounded-lg shadow-lg p-8 max-w-2xl mx-20 my-8 bg-white animate-slideIn">
                {/* Header: Avatar + Nama + Skor */}
                <div className="flex items-center space-x-4 mb-4">
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-xl font-bold text-white">
                    {testimonial.avatar}
                  </div>
                  {/* Nama dan Skor */}
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold">{testimonial.name}</h2>
                    <p className="text-sm text-gray-500">{testimonial.type}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-2.5 py-0.5 rounded">
                      {testimonial.rating}
                    </span>
                  </div>
                </div>
                {/* Isi Review */}
                <p className="text-gray-700 leading-relaxed mb-4">
                  {testimonial.review}
                </p>
                {/* Footer: Reaksi */}
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <FaBed className="text-xl text-gray-500" />
                    <span>{testimonial.likes} orang menyukai review ini</span>
                  </div>
                  <span className="text-gray-400">{testimonial.date}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}

export default Testimoni;
