import { FaEnvelope, FaWhatsapp, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';

function Sosmed() {
  return (
    <div className="flex justify-center items-center space-x-4 py-2 bg-red-600 text-white text-xs">
      <a href="mailto:email@example.com" className="flex items-center hover:text-yellow-300" title="Email">
        <FaEnvelope className="mr-2" />
        <span className="hidden md:inline">villatiara@gmail.com</span>
      </a>
      <span className="hidden md:inline text-white">|</span>
      <a href="https://wa.me/6281234567890" className="flex items-center hover:text-yellow-300" title="WhatsApp">
        <FaWhatsapp className="mr-2" />
        <span className="hidden md:inline">0831-2760-5430</span>
      </a>
      <span className="hidden md:inline text-white">|</span>
      <a href="https://instagram.com/username" className="flex items-center hover:text-yellow-300" title="Instagram">
        <FaInstagram className="mr-2" />
        <span className="hidden md:inline">villatiara.sarangan</span>
      </a>
      <span className="hidden md:inline text-white">|</span>
      <a href="https://tiktok.com/@username" className="flex items-center hover:text-yellow-300" title="TikTok">
        <FaTiktok className="mr-2" />
        <span className="hidden md:inline">tiarasarangan</span>
      </a>
      <span className="hidden md:inline text-white">|</span>
      <a href="https://youtube.com/c/username" className="flex items-center hover:text-yellow-300" title="YouTube">
        <FaYoutube className="mr-2" />
        <span className="hidden md:inline">Villa Tiara Sarangan</span>
      </a>
    </div>
  );
}

export default Sosmed;
