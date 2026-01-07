import { Shield, Sparkles, Coffee } from 'lucide-react';

const About = () => {
  const keyPoints = [
    {
      icon: Shield,
      text: 'No male staff, ruangan tertutup, privacy terjaga sepenuhnya',
    },
    {
      icon: Sparkles,
      text: 'Perawatan rambut, badan, dan wajah dengan sentuhan professional',
    },
    {
      icon: Coffee,
      text: 'Complimentary traditional drink setelah treatment',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tentang <span className="text-rose-600">Sofia Az Zahra</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Salon & Spa Muslimah yang memberikan layanan khusus untuk perempuan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {keyPoints.map((point, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-rose-50 to-amber-50 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-rose-600 rounded-full flex items-center justify-center mb-4">
                <point.icon className="w-8 h-8 text-white" />
              </div>
              <p className="text-gray-700 leading-relaxed">{point.text}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-600 leading-relaxed">
            Cocok untuk <span className="font-semibold text-gray-800">daily self-care</span>,{' '}
            <span className="font-semibold text-gray-800">pre-wedding preparation</span>, dan{' '}
            <span className="font-semibold text-gray-800">special occasions</span>. Let us
            pamper you in a safe, comfortable, and syar'i environment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
