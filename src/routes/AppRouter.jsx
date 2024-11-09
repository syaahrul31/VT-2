import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Beranda from '../pages/User/Beranda';
import TentangDetail from '../pages/User/TentangDetail';
import TipeKamarDetail from '../pages/User/TipeKamarDetail';
import GalleryDetail from '../pages/User/GalleryDetail';
import LoginPage from '../pages/Admin/LoginPage';
import DashboardPage from '../pages/Admin/DashboardPage';
import BookingPage from '../pages/Admin/BookingPage';
import DaftarBookingPage from '../pages/Admin/DaftarBookingPage';
import CheckInPage from '../pages/Admin/DaftarCheckInPage';
import TambahTamuPage from '../pages/Admin/TambahTamuPage';
import DaftarTamuPage from '../pages/Admin/DaftarTamuPage';
import DaftarKamarPage from '../pages/Admin/DaftarKamarPage';

function AppRouter() {
  return (
    <Router basename="/villatiarasarangan">
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/tentang-villa" element={<TentangDetail />} />
        <Route path="/tipe-kamar" element={<TipeKamarDetail />} />
        <Route path="/galeri" element={<GalleryDetail />} />
        <Route path="/login-page" element={<LoginPage />} />
        <Route path="/dashboard-page" element={<DashboardPage />} />
        <Route path="/booking-page" element={<BookingPage />} />
        <Route path="/daftar-booking-page" element={<DaftarBookingPage />} />
        <Route path="/daftar-check-in-page" element={<CheckInPage />} />
        <Route path="/tambah-tamu-page" element={<TambahTamuPage />} />
        <Route path="/daftar-tamu-page" element={<DaftarTamuPage />} />
        <Route path="/daftar-kamar-page" element={<DaftarKamarPage />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
