import { Lock, Sparkles, Home, Tag } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Lock,
      title: 'Muslimah-Only & Fully Private',
      description:
        'No male staff, ruangan tertutup, bisa lepas hijab dengan tenang',
      color: 'from-rose-500 to-pink-500',
    },
    {
      icon: Sparkles,
      title: 'Complete Hair, Body & Face Treatments',
      description:
        'Dari haircut, massage, facial, hingga RF lipo slimming',
      color: 'from-amber-500 to-yellow-500',
    },
    {
      icon: Home,
      title: 'Warm Hospitality',
      description: 'Complimentary traditional drink setelah treatment',
      color: 'from-stone-500 to-neutral-500',
    },
    {
      icon: Tag,
      title: 'Affordable Packages with Clear Pricelist',
      description:
        'Harga jelas, banyak pilihan paket combo yang value for money',
      color: 'from-rose-600 to-rose-500',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-rose-600">Us</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mengapa Sofia Az Zahra menjadi pilihan terbaik untuk perawatan Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <div
                className={`w-14 h-14 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center mb-4`}
              >
                <benefit.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
