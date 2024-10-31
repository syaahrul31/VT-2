import UserLayout from '../../layouts/UserLayout';
import Jumbotron from '../../components/User/Jumbotron';
import Highlights from '../../components/User/Highlights';
import Slider from '../../components/User/Slider';
import TipeKamar from '../../components/User/TipeKamar';
import Tentang from '../../components/User/Tentang';
import Testimoni from '../../components/User/Testimoni';
import Galeri from '../../components/User/Gallery';
import Artikel from '../../components/User/Artikel';
import Faq from '../../components/User/Faq';

function Beranda() {
  return (
    <>
      <UserLayout>
        <div id="beranda">
          <Jumbotron />
        </div>
        <div id="">
          <Highlights />
        </div>
        <div id="tentang">
          <Tentang />
        </div>
        <div id="tipe-kamar">
          <TipeKamar />
        </div>
        <div id="fasilitas">
          <Slider />
        </div>
        <div id="galeri">
          <Galeri />
        </div>
        <div id="testimoni">
          <Testimoni />
        </div>
        <div id="artikel">
          <Artikel />
        </div>
        <div id="faq">
          <Faq />
        </div>
      </UserLayout>
    </>
  );
}

export default Beranda;
