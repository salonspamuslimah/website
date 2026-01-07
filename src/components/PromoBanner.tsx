import { Gift, Clock, MessageCircle } from 'lucide-react';

const PromoBanner = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-rose-600 via-pink-600 to-rose-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Gift className="w-4 h-4" />
            Special Promo
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Dapatkan Diskon 20% untuk Customer Baru!
          </h2>

          <p className="text-lg md:text-xl text-white/90 mb-6 max-w-2xl mx-auto">
            Nikmati perawatan pertama Anda dengan harga spesial. Berlaku untuk
            semua treatment.
          </p>

          <div className="flex items-center justify-center gap-2 text-white/90 mb-8">
            <Clock className="w-5 h-5" />
            <span className="font-medium">
              Promo terbatas hingga akhir bulan ini
            </span>
          </div>

          <a
            href="https://wa.me/6281235020325?text=Halo%20minsaz%2C%20saya%20ingin%20memanfaatkan%20promo%20diskon%2020%25"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-rose-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 font-bold text-lg shadow-xl"
          >
            <MessageCircle className="w-5 h-5" />
            Klaim Promo Sekarang
          </a>

          <p className="text-white/80 text-sm mt-6">
            *Syarat dan ketentuan berlaku. Hubungi kami untuk detail lengkap.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
