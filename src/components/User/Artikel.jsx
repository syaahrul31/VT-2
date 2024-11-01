import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function Artikel() {
  return (
    <div className="container mx-auto px-5 md:px-20 py-16">
      <section className="text-center mb-4">
        <h1 className="text-3xl md:text-5xl font-bold">Artikel</h1>
        <p className="text-gray-700 text-md py-6">Temukan informasi menarik seputar wisata di Telaga Sarangan</p>
      </section>
      {/* Grid untuk blog posts */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
          <img className="w-full h-48 object-cover" src="https://th.bing.com/th/id/OIP.eJXmC9pNGT3CqtVbtv3kaAHaEm?rs=1&pid=ImgDetMain" alt="Blog 1" />
          <div className="p-6">
            <div className="flex space-x-2 mb-2">
              <span className="bg-red-600 text-white text-sm font-semibold px-2 py-1 rounded-full">Blog</span>
              <span className="bg-red-600 text-white text-sm font-semibold px-2 py-1 rounded-full">Featured</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Lorem ipsum dolor sit amet consectetur.</h3>
            <p className="text-gray-500 text-sm mb-4">Posted on Oktober 12, 2024</p>
            <Link to="/artikel" className="inline-block py-2 px-4 bg-orange-600 text-white rounded-lg hover:bg-yellow-500 transition duration-300">View More</Link>          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
          <img className="w-full h-48 object-cover" src="https://th.bing.com/th/id/OIP.eJXmC9pNGT3CqtVbtv3kaAHaEm?rs=1&pid=ImgDetMain" alt="Blog 2" />
          <div className="p-6">
            <div className="flex space-x-2 mb-2">
              <span className="bg-red-600 text-white text-sm font-semibold px-2 py-1 rounded-full">Blog</span>
              <span className="bg-red-600 text-white text-sm font-semibold px-2 py-1 rounded-full">Featured</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Lorem ipsum dolor sit amet consectetur.</h3>
            <p className="text-gray-500 text-sm mb-4">Posted on Oktober 12, 2024</p>
            <Link to="/artikel" className="inline-block py-2 px-4 bg-orange-600 text-white rounded-lg hover:bg-yellow-500 transition duration-300">View More</Link>          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
          <img className="w-full h-48 object-cover" src="https://th.bing.com/th/id/OIP.eJXmC9pNGT3CqtVbtv3kaAHaEm?rs=1&pid=ImgDetMain" alt="Blog 3" />
          <div className="p-6">
            <div className="flex space-x-2 mb-2">
              <span className="bg-red-600 text-white text-sm font-semibold px-2 py-1 rounded-full">Blog</span>
              <span className="bg-red-600 text-white text-sm font-semibold px-2 py-1 rounded-full">Featured</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Lorem ipsum dolor sit amet consectetur.</h3>
            <p className="text-gray-500 text-sm mb-4">Posted on Oktober 12, 2024</p>
            <Link to="/artikel" className="inline-block py-2 px-4 bg-orange-600 text-white rounded-lg hover:bg-yellow-500 transition duration-300">View More</Link>          </div>
        </div>
      </section>
      <div class="px-5 text-white text-center">
          <Link to="/artikel" className="inline-flex text-lg font-semibold py-2 px-4 bg-red-600 text-white rounded-lg shadow-lg flex items-center justify-center hover:bg-yellow-500 transition duration-300 transform hover:-translate-y-1">
          <span>Selengkapnya</span><FaArrowRight className="ml-2" />
          </Link>
      </div>
    </div>
  );
}

export default Artikel;
