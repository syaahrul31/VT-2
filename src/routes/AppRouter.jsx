import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Beranda from '../pages/User/Beranda';
import TentangDetail from '../pages/User/TentangDetail';
import TipeKamarDetail from '../pages/User/TipeKamarDetail';
import GalleryDetail from '../pages/User/GalleryDetail';
import LoginPage from '../pages/Admin/LoginPage';
import Dashboard from '../pages/Admin/Dashboard';
import CheckInPage from '../pages/Admin/CheckInPage';
import CheckOutPage from '../pages/Admin/CheckOutPage';
import TambahTamuPage from '../pages/Admin/TambahTamuPage';
import LihatTamuPage from '../pages/Admin/LihatTamuPage';
import TambahKamarPage from '../pages/Admin/TambahKamar';
import LihatKamarPage from '../pages/Admin/LihatKamar';

function AppRouter() {
  return (
    <Router  basename="/villatiarasarangan">
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/tentang-villa" element={<TentangDetail />} />
        <Route path="/tipe-kamar" element={<TipeKamarDetail />} />
        <Route path="/galeri" element={<GalleryDetail />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/check-in" element={<CheckInPage />} />
        <Route path="/check-out" element={<CheckOutPage />} />
        <Route path="/tambah-tamu" element={<TambahTamuPage />} />
        <Route path="/lihat-tamu" element={<LihatTamuPage />} />
        <Route path="/tambah-kamar" element={<TambahKamarPage />} />
        <Route path="/lihat-kamar" element={<LihatKamarPage />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
