import { Phone, MapPin, Clock, Flame } from 'lucide-react';
import shawarma1 from './assets/shawarma-1.jpg';
import shawarma2 from './assets/shawarma-2.jpg';
import shawarma3 from './assets/shawarma-3.jpg';
import shawarma4 from './assets/shawarma-4.jpg';
import shawarma5 from './assets/shawarma-5.jpg';
import shawarma6 from './assets/shawarma-6.jpg';

function App() {
  const whatsappNumber = "2349064473598";
  const whatsappMessage = encodeURIComponent("Hi! I'd like to order from Roll 'n' Go Sharwama");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Hero background images with rotation - shawarma-5 shows 70% of time */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-bg-rotate-1"
          style={{ backgroundImage: `url(${shawarma5})` }}
        />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-bg-rotate-2"
          style={{ backgroundImage: `url(${shawarma6})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/85 to-black/95"></div>
      </div>
      
      {/* Accent gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-950/40 via-transparent to-red-950/40"></div>

      <div className="relative z-10">
        <header className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-md border-b border-red-900/30 z-50">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Flame className="w-8 h-8 text-orange-500 animate-pulse" />
              <div>
                <h1 className="text-2xl font-bold text-white">Roll 'n' Go</h1>
                <p className="text-sm text-red-500 font-semibold">SHARWAMA</p>
              </div>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-6 py-2.5 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-900/50 flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Order Now
            </a>
          </div>
        </header>

        <section className="pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8 animate-bounce-slow">
              <div className="inline-block bg-gradient-to-r from-red-600 to-orange-500 text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg transform -rotate-2">
                FEBRUARY SPECIAL
              </div>
            </div>

            <h2 className="text-6xl md:text-8xl font-extrabold mb-6 bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 bg-clip-text text-transparent drop-shadow-2xl animate-gradient">
              50% OFF!
            </h2>

            <p className="text-3xl md:text-4xl font-bold text-yellow-300 mb-4 drop-shadow-lg">
              Buy 1 Sharwama
            </p>
            <p className="text-3xl md:text-4xl font-bold text-orange-400 mb-8 drop-shadow-lg">
              Get a FREE Drink!
            </p>

            <div className="bg-gradient-to-br from-red-900/40 to-orange-900/40 backdrop-blur-sm border-2 border-orange-500/50 rounded-3xl p-8 max-w-2xl mx-auto shadow-2xl">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-orange-400" />
                <p className="text-2xl font-bold text-orange-300">
                  ALL FEBRUARY LONG!
                </p>
              </div>
              <div className="flex items-start justify-center gap-3">
                <MapPin className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                <p className="text-xl text-gray-200">
                  OBAS Hotel Junction, Ipakodo<br />
                  Ebute Ikorodu, Lagos
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gradient-to-b from-transparent via-black/60 to-transparent">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Our Menu
            </h3>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-orange-900/60 to-red-900/60 backdrop-blur-md rounded-2xl p-8 border-2 border-orange-600/40 hover:border-orange-500 transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-orange-900/50">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-2xl font-bold text-white">One Sausage</h4>
                  <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    50% OFF
                  </div>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl text-gray-400 line-through">₦4000</span>
                  <span className="text-5xl font-extrabold text-yellow-300">₦2000</span>
                </div>
                <p className="text-orange-200 mb-6">Perfectly seasoned chicken wrapped in warm flatbread with fresh veggies</p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white text-center py-3 rounded-xl font-bold transition-all duration-300 shadow-lg"
                >
                  Order Now
                </a>
              </div>

              <div className="bg-gradient-to-br from-orange-900/60 to-red-900/60 backdrop-blur-md rounded-2xl p-8 border-2 border-orange-600/40 hover:border-orange-500 transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-orange-900/50">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-2xl font-bold text-white">Two Sausages</h4>
                  <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    50% OFF
                  </div>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl text-gray-400 line-through">₦4500</span>
                  <span className="text-5xl font-extrabold text-yellow-300">₦2500</span>
                </div>
                <p className="text-orange-200 mb-6">Double the deliciousness! Extra sausage for the ultimate satisfaction</p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white text-center py-3 rounded-xl font-bold transition-all duration-300 shadow-lg"
                >
                  Order Now
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gradient-to-b from-transparent via-black/40 to-transparent">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Taste the Flavor
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-orange-900/50 transition-all duration-300 hover:scale-105">
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-orange-900 to-red-900">
                  <img
                    src={shawarma1}
                    alt="Fresh Sharwama"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-xl font-bold text-white">Fresh & Juicy</h4>
                  <p className="text-sm text-orange-300">Premium quality meat</p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-orange-900/50 transition-all duration-300 hover:scale-105">
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-orange-900 to-red-900">
                  <img
                    src={shawarma2}
                    alt="Spicy Flavors"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-xl font-bold text-white">Spicy & Bold</h4>
                  <p className="text-sm text-orange-300">Perfectly seasoned</p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-orange-900/50 transition-all duration-300 hover:scale-105">
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-orange-900 to-red-900">
                  <img
                    src={shawarma3}
                    alt="Flavorful Experience"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-xl font-bold text-white">Crispy Exterior</h4>
                  <p className="text-sm text-orange-300">Golden brown perfection</p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-orange-900/50 transition-all duration-300 hover:scale-105">
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-orange-900 to-red-900">
                  <img
                    src={shawarma4}
                    alt="Gourmet Quality"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-xl font-bold text-white">Gourmet Quality</h4>
                  <p className="text-sm text-orange-300">Premium experience</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-black/60 to-red-900/40 backdrop-blur-md rounded-3xl p-12 border-2 border-orange-500/50 shadow-2xl">
              <Flame className="w-20 h-20 text-orange-500 mx-auto mb-6 animate-pulse" />
              <h3 className="text-4xl font-bold mb-6 text-yellow-300">
                Ready to Experience the Best?
              </h3>
              <p className="text-xl text-gray-300 mb-8">
                Order now and enjoy 50% OFF all February long!
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-12 py-5 rounded-full text-2xl font-bold transition-all duration-300 transform hover:scale-110 shadow-2xl shadow-orange-900/50"
              >
                <Phone className="w-6 h-6" />
                Order on WhatsApp
              </a>
            </div>
          </div>
        </section>

        <footer className="bg-black/90 border-t border-red-900/30 py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Flame className="w-10 h-10 text-orange-500" />
                <div>
                  <h4 className="text-3xl font-bold text-white">Roll 'n' Go</h4>
                  <p className="text-red-500 font-semibold">SHARWAMA</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-center md:text-left">
                <h5 className="font-bold text-orange-400 mb-3 flex items-center justify-center md:justify-start gap-2">
                  <MapPin className="w-5 h-5" />
                  Location
                </h5>
                <p className="text-gray-300">
                  OBAS Hotel Junction<br />
                  Ipakodo Ebute Ikorodu<br />
                  Lagos, Nigeria
                </p>
              </div>

              <div className="text-center md:text-right">
                <h5 className="font-bold text-orange-400 mb-3 flex items-center justify-center md:justify-end gap-2">
                  <Phone className="w-5 h-5" />
                  Contact
                </h5>
                <p className="text-gray-300">
                  <a href="tel:+2349064473598" className="hover:text-orange-400 transition-colors block">
                    +234 906 447 3598
                  </a>
                  <a href="tel:+2347018425783" className="hover:text-orange-400 transition-colors block">
                    +234 701 842 5783
                  </a>
                </p>
              </div>
            </div>

            <div className="text-center pt-8 border-t border-red-900/30">
              <p className="text-gray-500">
                &copy; 2026 Roll 'n' Go Sharwama. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
