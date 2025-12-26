import React, { useState, useEffect, useRef } from 'react';
import { Coffee, MapPin, Instagram, Music2, ChevronLeft, ChevronRight } from 'lucide-react';

const KitKopWebsite = () => {
  const [activeTab, setActiveTab] = useState('WHITE-MILK');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [visibleSections, setVisibleSections] = useState({});
  const [isHovering, setIsHovering] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const options = {
      threshold: [0.1, 0.5],
      rootMargin: '-50px 0px -50px 0px'
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.id;
        setVisibleSections((prev) => ({
          ...prev,
          [id]: entry.isIntersecting
        }));
      });
    }, options);

    const sections = document.querySelectorAll('.reveal-section');
    sections.forEach((section) => {
      if (observerRef.current) {
        observerRef.current.observe(section);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const menuData = {
    'WHITE-MILK': [
      { 
        name: 'Americano (Ice / Hot)', 
        price: '20k', 
        icon: '🫘',
        desc: 'Americano smooth, espresso pekat dengan air panas'
      },
      { 
        name: 'Cappuccino', 
        price: '23k', 
        icon: '🫘',
        desc: 'Cappuccino klasik dengan busa susu lembut dan tebal'
      },
      { 
        name: 'Caffe Latte', 
        price: '23k', 
        icon: '🫘',
        desc: 'Caffe latte creamy dengan rasa kopi yang seimbang'
      },
      { 
        name: 'Dolce Latte', 
        price: '23k', 
        icon: '🫘',
        desc: 'Dolce latte manis dengan sentuhan sirup karamel'
      },
      { 
        name: 'Affogato', 
        price: '25k', 
        icon: '🫘',
        desc: 'Affogato lezat dengan es krim vanila dan espresso panas'
      },
    ],
    'ICED COFFEE': [
      { 
        name: 'Es Kopi Gula Aren', 
        price: '21k', 
        icon: '☕',
        desc: 'Kopi dingin dengan manis alami gula aren'
      },
      { 
        name: 'Es Kopi Butterscotch', 
        price: '23k', 
        icon: '☕',
        desc: 'Kopi dingin dengan rasa karamel gurih yang kaya'
      },
      { 
        name: 'Es Kopi Susu Jasmine', 
        price: '23k', 
        icon: '☕',
        desc: 'Kopi dingin dengan aroma melati yang harum'
      },
      { 
        name: 'Es Kopi Susu KitKop', 
        price: '24k', 
        icon: '☕',
        desc: 'Kopi dingin signature KitKop dengan susu lembut'
      }
    ],
    'NON-COFFEE': [
      { 
        name: 'Taro ( Ice / Hot )', 
        price: '21k', 
        icon: '🥤',
        desc: 'Taro creamy dengan rasa manis yang unik'
      },
      { 
        name: 'Matcha ( Ice / Hot )', 
        price: '25k', 
        icon: '🥤',
        desc: 'Earthy, creamy, dengan umami yang khas'
      },
      { 
        name: 'Avocado ( Ice / Hot )', 
        price: '21k', 
        icon: '🥤',
        desc: 'Avocado lembut dengan sentuhan manis'
      },
      { 
        name: 'Red Velvet ( Ice / Hot )', 
        price: '21k', 
        icon: '🥤',
        desc: 'Red velvet creamy dengan rasa cokelat dan vanilla'
      },
      { 
        name: 'Chocolate ( Ice / Hot )', 
        price: '21k', 
        icon: '🥤',
        desc: 'Cokelat kaya dan creamy untuk pecinta manis'
      },
    ],
    'MAIN COURSE': [
{
  name: 'Nasi Goreng Teri',
  price: '26K',
  icon: '🍳',
  desc: 'Nasi goreng gurih dengan teri renyah dan aroma khas'
},
{
  name: 'Nasi Goreng Cumi Ijo',
  price: '26K',
  icon: '🦑',
  desc: 'Nasi goreng pedas dengan cumi empuk dan cabai hijau'
},
{
  name: 'Nasi Goreng Kitkop',
  price: '27K',
  icon: '🍚',
  desc: 'Signature nasi goreng khas KitKop dengan rasa spesial'
},
{
  name: 'Bakmi Goreng',
  price: '26K',
  icon: '🍜',
  desc: 'Bakmi goreng dengan bumbu gurih dan topping sederhana'
},
{
  name: 'Butter Milk',
  price: '27K',
  icon: '🍗',
  desc: 'Ayam saus butter milk yang creamy dan lembut'
},
{
  name: 'Sambal Korek',
  price: '27K',
  icon: '🌶️',
  desc: 'Ayam goreng dengan sambal korek pedas dan wangi'
},
{
  name: 'Sambal Matah',
  price: '27K',
  icon: '🥗',
  desc: 'Ayam sambal matah segar khas Bali'
},
{
  name: 'Black Pepper',
  price: '27K',
  icon: '🧂',
  desc: 'Ayam saus lada hitam dengan rasa gurih pedas'
},
{
  name: 'Beef Bumbu Bali',
  price: '30K',
  icon: '🥩',
  desc: 'Daging sapi empuk dengan bumbu Bali yang kaya rempah'
},
{
  name: 'Chicken Katsu',
  price: '28K',
  icon: '🍗',
  desc: 'Chicken katsu crispy dengan saus pendamping'
},
{
  name: 'Chicken Chop',
  price: '28K',
  icon: '🍖',
  desc: 'Chicken chop juicy disajikan dengan saus gurih'
},
{
  name: 'Dimsum',
  price: '20',
  icon: '🥠',
  desc: 'Dimsum hangat dengan isian lezat'
}
    ],
  };

  const galleryImages = [
    '/gallery1.webp',
    '/gallery2.webp',
    '/gallery3.webp',
    '/gallery4.webp',
    '/gallery5.webp',
  ];

  useEffect(() => {
    if (!isHovering) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [isHovering, galleryImages.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white text-black font-mono">
      {/* Load Caveat Brush Font */}
      <link href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap" rel="stylesheet" />

      {/* Navbar */}
      <nav className={`fixed w-full z-[9999] transition-all duration-500 ${
        isScrolled 
          ? 'bg-white shadow-lg py-4' 
          : 'bg-black bg-opacity-50 backdrop-blur-md py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className={`flex items-center gap-3 text-2xl font-bold tracking-tight transition-colors duration-500 ${
            isScrolled ? 'text-black' : 'text-white'
          }`}>
            <img src="/logo.png" alt="KitKop Logo" className="w-12 h-12" />
            <div style={{ fontFamily: "'Patrick Hand', cursive" }} className="text-3xl">
              KitKop <span className="text-lg opacity-80"></span>
            </div>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            {[
              { name: 'Home', id: 'home' },
              { name: 'Tentang', id: 'tentang' },
              { name: 'Menu', id: 'menu' },
              { name: 'Galeri', id: 'galeri' },
              { name: 'Lokasi', id: 'lokasi' },
              { name: 'Kontak', id: 'kontak' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative group py-2 transition-colors duration-500 ${
                  isScrolled ? 'text-black' : 'text-white'
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isScrolled ? 'bg-black' : 'bg-white'
                }`}></span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section - WITH REAL COFFEE SHOP IMAGE */}
      <section 
        id="home"
        className="h-screen relative flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(/heropict.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-center space-y-6 px-6 animate-fadeInUp">
          <div 
            className="text-8xl md:text-[12rem] font-bold tracking-tighter leading-none text-white drop-shadow-2xl"
            style={{ fontFamily: "'Patrick Hand', cursive" }}
          >
            KITKOP
          </div>
          <div 
            className="text-3xl md:text-5xl tracking-widest text-white opacity-95 drop-shadow-lg"
            style={{ fontFamily: "'Caveat Brush', cursive" }}
          >
            KITA KOPI
          </div>
          <div className="w-24 h-px bg-white mx-auto mt-8 opacity-80"></div>
          <p className="text-sm md:text-base tracking-wide text-white opacity-90 max-w-md mx-auto drop-shadow-md">
            Secangkir Cerita, Sejuta Rasa<br/>
            Temukan Kebersamaan Dalam Setiap Tegukan
          </p>
        </div>
      </section>

      {/* Tentang Kami Section - TWO-WAY SCROLL ANIMATION */}
      <section 
        id="tentang" 
        className={`py-24 px-6 bg-white reveal-section transition-all duration-700 ease-out ${
          visibleSections.tentang 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <h2 
            className="text-6xl md:text-8xl font-bold text-center mb-16 tracking-tight"
            style={{ fontFamily: "'Patrick Hand', cursive" }}
          >
            TENTANG KAMI
          </h2>
          <div className="space-y-8 text-lg leading-relaxed">
            <p className="first-letter:text-8xl first-letter:font-bold first-letter:float-left first-letter:mr-4 first-letter:leading-none first-letter:mt-1">
              KitKop bukan sekadar tempat minum kopi. Kami percaya bahwa setiap cangkir adalah jembatan untuk mempertemukan cerita, tawa, dan kebersamaan. "Kita Kopi" adalah filosofi kami—kopi adalah milik bersama, untuk dinikmati bersama.
            </p>
            <p>
              Sejak 2024, kami telah menyajikan kopi pilihan dengan proses yang penuh perhatian. Dari biji hingga cangkir, setiap langkah dilakukan dengan dedikasi untuk menghadirkan pengalaman terbaik bagi Anda.
            </p>
            <p>
              Di KitKop, ruang dan waktu bertemu dalam harmoni. Desain minimalis kami menciptakan suasana tenang di tengah hiruk-pikuk kota, tempat Anda bisa merenung, bekerja, atau sekadar berbincang santai dengan orang-orang terkasih.
            </p>
            <div className="border-l-4 border-black pl-6 py-4 italic text-xl my-8">
              "Kopi yang baik dimulai dari biji yang baik, diolah dengan hati, dan dinikmati bersama orang-orang terbaik."
            </div>
            <p>
              Kami memilih biji kopi terbaik dari petani lokal, merawat setiap proses roasting dengan presisi, dan menyeduhnya dengan teknik yang tepat. Hasilnya? Secangkir kopi yang tidak hanya nikmat, tetapi juga penuh makna.
            </p>
          </div>
        </div>
      </section>

      {/* Menu Section - TWO-WAY SCROLL ANIMATION */}
      <section 
        id="menu" 
        className={`py-24 px-6 bg-gray-50 reveal-section transition-all duration-700 ease-out ${
          visibleSections.menu 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-6xl md:text-8xl font-bold text-center mb-16 tracking-tight"
            style={{ fontFamily: "'Patrick Hand', cursive" }}
          >
            MENU
          </h2>

          {/* Tabs */}
         <div className="flex flex-wrap justify-center gap-4 mb-12 border-b-2 border-black pb-4">
  {Object.keys(menuData).map((tab) => {
    const labelMap = {
      'WHITE-MILK': 'Coffee Based',
      'ICED COFFEE': 'Iced Coffee',
      'NON-COFFEE': 'Non Coffee',
      'MAIN COURSE': 'Main Course',
    };

    return (
      <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={`px-6 py-3 text-sm tracking-wider transition-all duration-300 ${
          activeTab === tab
            ? 'bg-black text-white'
            : 'bg-white text-black border border-black hover:bg-black hover:text-white'
        }`}
      >
        {labelMap[tab] || tab}
      </button>
    );
  })}
</div>

          {/* Menu Items with Descriptions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuData[activeTab].map((item, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-black p-6 hover:bg-black hover:text-white transition-all duration-500 group cursor-pointer"
                style={{
                  animation: `fadeInStagger 0.6s ease-out ${idx * 0.1}s both`,
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <h3 className="text-lg font-bold mb-2 tracking-tight">{item.name}</h3>
                  </div>
                  <div className="text-xl font-bold">{item.price}</div>
                </div>
                <p className="text-sm opacity-70 italic leading-relaxed group-hover:opacity-90 transition-opacity">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section - IMPROVED ANIMATIONS */}
      <section 
        id="galeri" 
        className={`py-24 bg-black text-white reveal-section transition-all duration-700 ease-out ${
          visibleSections.galeri 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 
            className="text-6xl md:text-8xl font-bold text-center mb-16 tracking-tight"
            style={{ fontFamily: "'Patrick Hand', cursive" }}
          >
            GALERI
          </h2>
          <div 
            className="relative group"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="overflow-hidden h-96 md:h-[500px] bg-gray-900 rounded-lg shadow-2xl">
              {galleryImages.map((img, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-all duration-[1200ms] ease-in-out ${
                    currentSlide === idx 
                      ? 'opacity-100 scale-100 rotate-0' 
                      : idx === (currentSlide - 1 + galleryImages.length) % galleryImages.length
                      ? 'opacity-0 scale-95 -rotate-2'
                      : 'opacity-0 scale-105 rotate-2'
                  }`}
                >
                  <img
                    src={img}
                    alt={`Gallery ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 transition-opacity duration-1000 ${
                    currentSlide === idx ? 'opacity-50' : 'opacity-0'
                  }`}></div>
                </div>
              ))}
            </div>
            
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-90 text-black p-4 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-opacity-100 hover:scale-110 shadow-lg"
            >
              <ChevronLeft size={28} strokeWidth={2.5} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-90 text-black p-4 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-opacity-100 hover:scale-110 shadow-lg"
            >
              <ChevronRight size={28} strokeWidth={2.5} />
            </button>
            
            {/* Indicator Dots */}
            <div className="flex justify-center mt-8 gap-3">
              {galleryImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`transition-all duration-500 rounded-full ${
                    currentSlide === idx 
                      ? 'bg-white w-10 h-3 shadow-lg' 
                      : 'bg-gray-500 w-3 h-3 hover:bg-gray-300 hover:scale-125'
                  }`}
                />
              ))}
            </div>
            
            {/* Image Counter */}
            <div className="text-center mt-4 text-sm opacity-70 font-mono">
              {currentSlide + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      </section>

      {/* Location Section - TWO-WAY SCROLL ANIMATION */}
      <section 
        id="lokasi" 
        className={`py-24 px-6 bg-white reveal-section transition-all duration-700 ease-out ${
          visibleSections.lokasi 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-6xl md:text-8xl font-bold mb-16 tracking-tight"
            style={{ fontFamily: "'Patrick Hand', cursive" }}
          >
            LOKASI
          </h2>
          <div className="bg-gray-50 border-2 border-black p-8 md:p-12 rounded-lg shadow-lg">
            <MapPin size={48} className="mx-auto mb-6" />
            <p className="text-xl mb-4 tracking-wide font-bold">
              Jl. Koramil, Purwasari, Kec. Cicurug,<br/>
              Kabupaten Sukabumi, Jawa Barat 43359
            </p>
            <p className="text-sm opacity-70 mb-6">
              Open Hours Weekday: 10.00 - 22.00 WIB<br></br>
              Open Hours Weekend: 10.00 - 23.00 WIB
            </p>
            <a
              href="https://share.google/qHGBgP00nJFgxwI4h"
              className="inline-block bg-black text-white px-8 py-3 hover:bg-gray-800 transition-all duration-300 hover:scale-105 rounded"
            >
              BUKA MAPS
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="kontak" className="bg-black text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Coffee size={28} />
                <h3 
                  className="text-3xl font-bold"
                  style={{ fontFamily: "'Caveat Brush', cursive" }}
                >
                  KitKop
                </h3>
              </div>
              <p className="text-sm opacity-70 leading-relaxed">
                Secangkir cerita,<br/>sejuta rasa
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">KONTAK</h4>
              <p className="text-sm opacity-70 mb-2"><a href="https://wa.me/6282197721615">0821-9772-1615</a></p>
              <p className="text-sm opacity-70">hello@kitkop.id</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">IKUTI KAMI</h4>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/kitkop.id/" className="hover:opacity-70 transition-all duration-300 hover:scale-110">
                  <Instagram size={24} />
                </a>
                <a href="https://www.tiktok.com/@kitkop.id" className="hover:opacity-70 transition-all duration-300 hover:scale-110">
                  <Music2 size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm opacity-50">
            © 2025 KitKop / Kita Kopi. All rights reserved.
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInStagger {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 1.2s ease-out;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        .first-letter\\:text-8xl::first-letter {
          font-size: 5rem;
        }
        .first-letter\\:font-bold::first-letter {
          font-weight: 700;
        }
        .first-letter\\:float-left::first-letter {
          float: left;
        }
        .first-letter\\:mr-4::first-letter {
          margin-right: 1rem;
        }
        .first-letter\\:leading-none::first-letter {
          line-height: 1;
        }
        .first-letter\\:mt-1::first-letter {
          margin-top: 0.25rem;
        }
      `}</style>
    </div>
  );
};

export default KitKopWebsite;