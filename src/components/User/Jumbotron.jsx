function Jumbotron() {
  return (
    <div className="gambar bg-cover bg-center">
      <div className="h-768 flex items-center justify-center bg-black bg-opacity-70">
        <div className="container px-16 text-white text-center items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Villa Tiara<br />Sarangan</h1>
          <p className="text-md md:text-xl mb-12 max-w-lg mx-auto">
            Nikmati pengalaman menginap terbaik di Sarangan dengan pemandangan yang memukau.
          </p>
          <div className="flex justify-center">
            <a href="https://wa.me/083127605430" target="_blank" rel="noreferrer" className="bg-red-600 text-white font-bold shadow-md px-5 py-2 rounded-5xl hover:bg-yellow-500 transition duration-300 transform hover:-translate-y-1 hover:shadow-xl items-center space-x-2 border-4">
              <h1 className="text-xl animate-pulse">Book Now</h1>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
