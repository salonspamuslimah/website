import { MessageCircle, Calendar, CheckCircle, Sparkles, Coffee, Heart } from 'lucide-react';

const ExperienceFlow = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: 'Chat Us via WhatsApp',
      description: 'Hubungi kami untuk konsultasi treatment yang sesuai kebutuhan Anda',
    },
    {
      icon: Calendar,
      title: 'Choose Your Treatment & Time',
      description: 'Pilih treatment favorit dan jadwal yang sesuai dengan waktu Anda',
    },
    {
      icon: CheckCircle,
      title: 'Confirm Your Booking',
      description: 'Konfirmasi booking dan dapatkan reminder sebelum jadwal treatment',
    },
    {
      icon: Sparkles,
      title: 'Enjoy Your Treatment',
      description: 'Nikmati perawatan profesional di ruangan private yang nyaman',
    },
    {
      icon: Coffee,
      title: 'Get Complimentary Drink',
      description: 'Rasakan kehangatan minuman tradisional setelah treatment',
    },
    {
      icon: Heart,
      title: 'Share Your Experience',
      description: 'Bagikan pengalaman Anda dan dapatkan promo menarik',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It <span className="text-rose-600">Works</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Proses mudah dari booking hingga treatment selesai
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-rose-200 via-amber-200 to-stone-200 transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-6 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="flex-1 md:text-right">
                  <div
                    className={`bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow ${
                      index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                    }`}
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center border-2 border-rose-500 font-bold text-rose-600 text-sm">
                    {index + 1}
                  </div>
                </div>

                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <a
            href="https://wa.me/6281235020325?text=Halo%20minsaz%2C%20saya%20ingin%20booking%20treatment"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-rose-600 text-white px-8 py-4 rounded-full hover:bg-rose-700 transition-all transform hover:scale-105 font-semibold shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            Start Your Journey Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExperienceFlow;
