import Sosmed from '../components/User/Sosmed';
import Navbar from '../components/User/Navbar';
import Footer from '../components/User/Footer';
import DirectWA from '../components/User/Direct-wa';

function UserLayout({ children }) {
  return (
    <>
      <Sosmed />
      <Navbar />
      {children}
      <Footer />
      <DirectWA />
    </>
  );
}

export default UserLayout;
