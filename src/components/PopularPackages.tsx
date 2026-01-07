import { Clock, Award, MessageCircle } from 'lucide-react';

const PopularPackages = () => {
  const packages = [
    {
      name: 'Full Body Spa Package',
      description:
        'Body massage + scrub + mask + hair creambath untuk relaksasi total',
      duration: '150 min',
      idealFor: 'Deep relaxation & stress relief',
      price: '349k',
      isBestSeller: true,
    },
    {
      name: 'Hair Spa + Facial Totok',
      description:
        'Perawatan rambut lengkap dengan facial totok untuk wajah glowing',
      duration: '90 min',
      idealFor: 'Hair & face care combo',
      price: '240k',
      isBestSeller: true,
    },
    {
      name: 'Hair Cut + Full Body Spa + Manipadi',
      description:
        'Paket lengkap untuk me-time maksimal dari ujung rambut hingga kaki',
      duration: '180 min',
      idealFor: 'Ultimate self-care day',
      price: '550k',
      isBestSeller: true,
    },
    {
      name: 'Pre-Wedding Glow Package',
      description:
        'Facial brightening + body scrub + hair treatment untuk pengantin',
      duration: '120 min',
      idealFor: 'Persiapan sebelum hari H',
      price: '450k',
      isBestSeller: false,
    },
    {
      name: 'Express Refresh Package',
      description: 'Hair wash & blow + facial express untuk yang sibuk',
      duration: '60 min',
      idealFor: 'Quick refresh after work',
      price: '145k',
      isBestSeller: false,
    },
    {
      name: 'Monthly Self-Care Package',
      description:
        'Body massage + facial + manicure untuk perawatan rutin bulanan',
      duration: '100 min',
      idealFor: 'Regular maintenance',
      price: '380k',
      isBestSeller: false,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-rose-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Popular <span className="text-rose-600">Packages</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Paket-paket favorit yang paling diminati pelanggan kami
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 relative"
            >
              {pkg.isBestSeller && (
                <div className="absolute -top-3 -right-3 bg-rose-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1 shadow-lg">
                  <Award className="w-4 h-4" />
                  Best Seller
                </div>
              )}

              <h3 className="text-xl font-bold text-gray-900 mb-3 pr-8">
                {pkg.name}
              </h3>

              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {pkg.description}
              </p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Clock className="w-4 h-4 text-rose-600" />
                  <span>{pkg.duration}</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-gray-700">
                  <MessageCircle className="w-4 h-4 text-rose-600 mt-0.5" />
                  <span>{pkg.idealFor}</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Starting from</p>
                  <p className="text-2xl font-bold text-rose-600">
                    IDR {pkg.price}
                  </p>
                </div>
                <a
                  href={`https://wa.me/6281235020325?text=Halo%20minsaz%2C%20saya%20ingin%20booking%20${encodeURIComponent(
                    pkg.name
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-rose-600 text-white px-6 py-2.5 rounded-full hover:bg-rose-700 transition-colors font-medium text-sm"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularPackages;
