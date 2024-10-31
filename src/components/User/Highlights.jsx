const sections = [
  {
    title: "VIEW TELAGA SARANGAN",
    caption: "Nikmati keindahan dan ketenangan Telaga Sarangan, tempat yang sempurna untuk melepas penat dan menikmati alam.",
    img: "https://img.inews.co.id/media/1200/files/inews_new/2019/08/29/Sarangan.jpg",
  },
  {
    title: "BALKON & MEET ROOM",
    caption: "Ruang pertemuan nyaman dengan pemandangan indah, cocok untuk ngobrol santai, bekerja, atau bertemu dengan teman.",
    img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/568924965.jpg?k=fbac665c00d408d50a71a80970185777e26d5adee29a69bf20a29a9aa535f0d7&o=&hp=1",
  },
  {
    title: "KAFE VILLA",
    caption: "Cafe Tiara menghadirkan suasana hangat dan nyaman, tempat terbaik untuk bersantai sambil menikmati hidangan lezat.",
    img: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10011479-38f3c3cd58fc93e46a54609fb79e8e6f.jpeg",
  },
];

function Highlights() {
  return (
    <div className="container atas bg-red-600 mx-auto py-10 px-5 rounded-3xl shadow-xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
        {sections.map((section, index) => (
          <div key={index} className="flip-card">
            <div className="flip-card-inner">
              {/* Sisi Depan */}
              <div className="flip-card-front rounded-6xl relative">
                <img src={section.img} alt={section.title} className="w-full h-full object-cover rounded-3xl" />
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black to-transparent rounded-3xl">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="text-white text-center text-xl font-bold">{section.title}</h2>
                  </div>
                </div>
              </div>
              {/* Sisi Belakang */}
              <div className="flip-card-back rounded-3xl flex items-center justify-center px-14">
                <div className="text-center">
                  <h2 className="text-xl font-bold mb-3 text-white">{section.title}</h2>
                  <p className="text-white">{section.caption}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Highlights;
