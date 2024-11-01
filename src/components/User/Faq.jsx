import React, { useState } from 'react';

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='bg-white'>
      <div className="container py-16 mx-auto px-20">
        <section className="text-center mb-4">
          <h1 className="text-3xl md:text-4xl font-bold">Pertanyaan Sering Diajukan</h1>
          <p className="text-gray-700 text-md py-6">Temukan jawaban atas pertanyaan yang sering diajukan tentang Villa Tiara Sarangan</p>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-lg">
            <button className="w-full text-left p-4 font-semibold flex justify-between items-center focus:outline-none" onClick={() => toggleAccordion(1)}>
              <span>Fasilitas apa saja yang tersedia di Villa Tiara Sarangan?</span>
              <span className="toggle-icon" id="toggle-icon-1">{activeIndex === 1 ? '-' : '+'}</span>
            </button>
            {activeIndex === 1 && (
              <div className="p-4">
                <p className="text-gray-600">Villa Tiara memiliki fasilitas terbaik seperti: Restoran, Resepsionis 24 Jam, Parkir, WiFi. (Beberapa fasilitas lain mungkin memerlukan biaya tambahan)</p>
              </div>
            )}
          </div>

          <div className="border border-gray-200 rounded-lg">
            <button className="w-full text-left p-4 font-semibold flex justify-between items-center focus:outline-none" onClick={() => toggleAccordion(2)}>
              <span>Kapan waktu check-in & check out di Villa Tiara Sarangan?</span>
              <span className="toggle-icon" id="toggle-icon-2">{activeIndex === 2 ? '-' : '+'}</span>
            </button>
            {activeIndex === 2 && (
              <div className="p-4">
                <p className="text-gray-600">Waktu untuk check-in di OYO 1342 Villa Tiara adalah mulai dari pukul Dari 14:00 sedangkan waktu check-out paling lambat pukul Sebelum 12:00</p>
              </div>
            )}
          </div>

          <div className="border border-gray-200 rounded-lg">
            <button className="w-full text-left p-4 font-semibold flex justify-between items-center focus:outline-none" onClick={() => toggleAccordion(3)}>
              <span>Fasilitas apa saja yang tersedia di Villa Tiara Sarangan?</span>
              <span className="toggle-icon" id="toggle-icon-3">{activeIndex === 3 ? '-' : '+'}</span>
            </button>
            {activeIndex === 3 && (
              <div className="p-4">
                <p className="text-gray-600">Villa Tiara memiliki fasilitas terbaik seperti: Restoran, Resepsionis 24 Jam, Parkir, WiFi. (Beberapa fasilitas lain mungkin memerlukan biaya tambahan)</p>
              </div>
            )}
          </div>

          <div className="border border-gray-200 rounded-lg">
            <button className="w-full text-left p-4 font-semibold flex justify-between items-center focus:outline-none" onClick={() => toggleAccordion(4)}>
              <span>Kapan waktu check-in & check out di Villa Tiara Sarangan?</span>
              <span className="toggle-icon" id="toggle-icon-4">{activeIndex === 4 ? '-' : '+'}</span>
            </button>
            {activeIndex === 4 && (
              <div className="p-4">
                <p className="text-gray-600">Waktu untuk check-in di OYO 1342 Villa Tiara adalah mulai dari pukul Dari 14:00 sedangkan waktu check-out paling lambat pukul Sebelum 12:00</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Faq;