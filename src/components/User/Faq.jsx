import React, { useState } from 'react';

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="px-5 md:px-20 mb-20">
      <section className="text-center mb-4">
        <h1 className="text-3xl md:text-5xl font-bold">Pertanyaan Sering Diajukan</h1>
        <p className="text-gray-700 text-xl py-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt aspernatur obcaecati ipsa nulla rerum.</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-gray-200 rounded-lg">
          <button className="w-full text-left p-4 font-semibold flex justify-between items-center focus:outline-none" onClick={() => toggleAccordion(1)}>
            <span>Siapa Tuhanmu?</span>
            <span className="toggle-icon" id="toggle-icon-1">{activeIndex === 1 ? '-' : '+'}</span>
          </button>
          {activeIndex === 1 && (
            <div className="p-4">
              <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nam aspernatur provident praesentium cupiditate rem.</p>
            </div>
          )}
        </div>

        <div className="border border-gray-200 rounded-lg">
          <button className="w-full text-left p-4 font-semibold flex justify-between items-center focus:outline-none" onClick={() => toggleAccordion(2)}>
            <span>Apa Agamamu?</span>
            <span className="toggle-icon" id="toggle-icon-2">{activeIndex === 2 ? '-' : '+'}</span>
          </button>
          {activeIndex === 2 && (
            <div className="p-4">
              <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nam aspernatur provident praesentium cupiditate rem.</p>
            </div>
          )}
        </div>

        <div className="border border-gray-200 rounded-lg">
          <button className="w-full text-left p-4 font-semibold flex justify-between items-center focus:outline-none" onClick={() => toggleAccordion(3)}>
            <span>Siapa Nabimu?</span>
            <span className="toggle-icon" id="toggle-icon-3">{activeIndex === 3 ? '-' : '+'}</span>
          </button>
          {activeIndex === 3 && (
            <div className="p-4">
              <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nam aspernatur provident praesentium cupiditate rem.</p>
            </div>
          )}
        </div>

        <div className="border border-gray-200 rounded-lg">
          <button className="w-full text-left p-4 font-semibold flex justify-between items-center focus:outline-none" onClick={() => toggleAccordion(4)}>
            <span>Dimana kiblatmu?</span>
            <span className="toggle-icon" id="toggle-icon-4">{activeIndex === 4 ? '-' : '+'}</span>
          </button>
          {activeIndex === 4 && (
            <div className="p-4">
              <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nam aspernatur provident praesentium cupiditate rem.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Faq;