import { Instagram, Phone, MapPin, Download } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-rose-400 mb-4">
              Sofia Az Zahra
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Salon & Spa Muslimah for Your Halal Me Time. Tempat perawatan
              yang nyaman dan private di Cimahi.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/sofiaazzahra.salon"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-rose-600 rounded-full flex items-center justify-center hover:bg-rose-700 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/6281235020325"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-rose-600 rounded-full flex items-center justify-center hover:bg-rose-700 transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-400 hover:text-rose-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-rose-400 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('treatments')}
                  className="text-gray-400 hover:text-rose-400 transition-colors"
                >
                  Treatments
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="text-gray-400 hover:text-rose-400 transition-colors"
                >
                  Testimonials
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Hair Care</li>
              <li>Body Treatment</li>
              <li>Face Treatment</li>
              <li>Waxing</li>
              <li>Combo Packages</li>
              <li>Pre-Wedding Package</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  No 81 A, Jl. Cihanjuang, Cibabat, Cimahi Utara, Kota Cimahi
                </span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a
                  href="tel:+6281235020325"
                  className="hover:text-rose-400 transition-colors"
                >
                  +62 812-3502-0325
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/6281235020325?text=Halo%20minsaz%2C%20saya%20ingin%20minta%20pricelist"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-rose-400 hover:text-rose-300 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download Pricelist
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; 2024 Sofia Az Zahra Salon & Spa. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm text-center md:text-right">
              Made with love for muslimah in Cimahi
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
