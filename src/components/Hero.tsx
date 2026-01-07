import { Sparkles, Shield, Home } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { icon: Shield, text: '100% Muslimah Only' },
    { icon: Sparkles, text: '50+ Treatment Options' },
    { icon: Home, text: 'Private Closed Rooms' },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 via-white to-amber-50 pt-16 md:pt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block mb-4 px-4 py-2 bg-rose-100 text-rose-600 rounded-full text-sm font-medium">
            Salon & Spa Muslimah
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Sofia Az Zahra <span className="text-rose-600">Salon & Spa</span>
          </h1>

          <p className="text-xl md:text-2xl text-rose-600 font-semibold mb-6">
            for Your Halal Me Time
          </p>

          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Tempat perawatan yang nyaman, dan private untuk muslimah di Cimahi.
            Ruangan tertutup, bisa lepas hijab dengan tenang.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="https://wa.me/6281235020325?text=Halo%20Sofia%20Az%20Zahra%2C%20saya%20ingin%20booking%20treatment"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-rose-600 text-white px-8 py-4 rounded-full hover:bg-rose-700 transition-all transform hover:scale-105 font-semibold text-lg shadow-lg"
            >
              Book Treatment
            </a>
            <button
              onClick={() => scrollToSection('treatments')}
              className="bg-white text-rose-600 border-2 border-rose-600 px-8 py-4 rounded-full hover:bg-rose-50 transition-all font-semibold text-lg"
            >
              See Treatment Menu
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mb-3">
                  <stat.icon className="w-6 h-6 text-rose-600" />
                </div>
                <p className="text-gray-700 font-medium text-center">
                  {stat.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
