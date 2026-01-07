import { Scissors, Flower2, Sparkles, Wind, PackageOpen, ExternalLink, Baby } from 'lucide-react';

const TreatmentCategories = () => {
  const categories = [
    {
      icon: Scissors,
      title: 'Hair Care',
      description: 'Complete hair treatments untuk kesehatan rambutmu',
      startingPrice: '35k',
      color: 'bg-rose-100',
      iconColor: 'text-rose-600',
      treatments: [
        'Haircut (Potong Rambut)',
        'Hairwash & Dry',
        'Hair Variasi (Styling)',
        'Creambath Tradisional',
        'Hair Mask',
        'Hair Spa',
        'Coloring (Short/Medium/Long)',
        'Highlight, Lowlight & Balayage',
        'Coloring & Bleaching',
        'Bleaching',
        'Coloring Peek A Boo',
        'Smoothing',
        'Keratin Treatment',
        'Infus Keratin',
        'Toning',
        'Perawatan Rambut Ketombe',
        'Perawatan Rambut Rontok',
        'Perming'
      ],
    },
    {
      icon: Flower2,
      title: 'Body Treatment',
      description: 'Relaksasi total untuk tubuh yang lelah',
      startingPrice: '55k',
      color: 'bg-amber-100',
      iconColor: 'text-amber-600',
      treatments: [
        'Back Massage',
        'Back Massage Hot Stone',
        'Back Scrub',
        'Full Body Massage (60/90/120 menit)',
        'Full Body Massage Hot Stone',
        'Full Body Massage Scrub',
        'Full Body Spa (150 menit)',
        'Full Body Scrub',
        'Reflexology (Pijat Kaki)',
        'Reflexology Hot Stone',
        'Foot Scrub',
        'RF Lipo Perut',
        'RF Lipo Lengan',
        'RF Lipo Paha'
      ],
    },
    {
      icon: Sparkles,
      title: 'Face Treatment',
      description: 'Perawatan wajah untuk kulit glowing',
      startingPrice: '40k',
      color: 'bg-stone-200',
      iconColor: 'text-stone-700',
      treatments: [
        'Facial + Totok Wajah',
        'Facial + Totok Wajah + Hot Stone',
        'Facial Detox Wajah',
        'Facial + Totok Wajah + Detox',
        'RF Lipo Wajah',
        'RF Lipo Double Chin'
      ],
    },
    {
      icon: Wind,
      title: 'Waxing',
      description: 'Hair removal yang aman dan nyaman',
      startingPrice: '60k',
      color: 'bg-rose-200',
      iconColor: 'text-rose-700',
      treatments: [
        'Armpit Waxing (Ketiak)',
        'Hand Waxing (Tangan)',
        'Foot Waxing (Kaki)',
        'Combination Waxing (All)'
      ],
    },
    {
      icon: PackageOpen,
      title: 'Combo Packages',
      description: 'Paket kombinasi hemat dan praktis',
      startingPrice: '145k',
      color: 'bg-amber-200',
      iconColor: 'text-amber-700',
      treatments: [
        'Haircut + Creambath',
        'Haircut + Hair Mask',
        'Haircut + Hair Spa',
        'Creambath + Facial Totok',
        'Hair Mask + Facial Totok',
        'Hair Spa + Facial Totok',
        'Creambath + Reflexology',
        'Hair Mask + Reflexology',
        'Hair Spa + Reflexology',
        'Creambath + Manipadi',
        'Hair Mask + Manipadi',
        'Hair Spa + Manipadi',
        'Hair Spa + Perawatan Rambut Rontok',
        'Creambath + Perawatan Rambut Ketombe',
        'Creambath + Facial Detox',
        'Back Massage + Manipadi',
        'Full Body Scrub + Ratus Miss V',
        'Full Body Scrub + Manipadi',
        'Full Body Massage + Breast + Ratus',
        'Full Body Spa + Manipadi',
        'Full Body Spa + Hair Spa + Breast + Miss V + Manipadi',
        'Haircut + Full Body Spa + Manipadi',
        'Haircut + Totok Wajah',
        'Haircut + Perawatan Rambut Rontok',
        'Full Body Scrub + Totok Wajah',
        'Reflexology + Foot Scrub',
        'Back Scrub + Reflexology',
        'Back Massage + Reflexology',
        'And many more...'
      ],
    },
    {
      icon: Baby,
      title: 'Kids Treatment',
      description: 'Perawatan khusus untuk anak-anak (under 12 tahun)',
      startingPrice: '40k',
      color: 'bg-rose-100',
      iconColor: 'text-rose-600',
      treatments: [
        'Haircut Kids',
        'Creambath Tradisional Kids',
        'Haircut + Creambath Kids',
        'Creambath + Manipadi Kids',
        'Manipadi Kids'
      ],
    },
  ];

  const additionalTreatments = {
    title: 'Additional Treatment',
    items: [
      'Breast Massage',
      'Ear Candle',
      'Manicure',
      'Pedicure',
      'Manipadi Cure',
      'Sauna',
      'Ratus Miss V',
      'Bathub',
      'Kuteks Halal',
      'Hair Mask Instan',
      'Hair Vitamin',
      'Curly Style',
      'Body Scraping (Kerokan)'
    ]
  };

  const handleViewPricelist = () => {
    window.open('https://drive.google.com/file/d/1Bna9UFaBdVPjbfseJHtVVOEDVD-fqAKj/view?usp=drivesdk', '_blank');
  };

  return (
    <section id="treatments" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-rose-600">Treatment Categories</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pilih dari berbagai kategori treatment yang kami tawarkan
          </p>
        </div>

        {/* Main Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <div
                className={`w-16 h-16 ${category.color} rounded-xl flex items-center justify-center mb-4`}
              >
                <category.icon className={`w-8 h-8 ${category.iconColor}`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {category.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {category.description}
              </p>
              <p className="text-rose-600 font-semibold mb-4">
                from IDR {category.startingPrice}
              </p>
              <div className="max-h-64 overflow-y-auto pr-2">
                <ul className="space-y-2">
                  {category.treatments.map((treatment, idx) => (
                    <li
                      key={idx}
                      className="text-gray-600 text-sm flex items-start"
                    >
                      <span className="w-1.5 h-1.5 bg-rose-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                      <span>{treatment}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Treatments Section */}
        <div className="bg-gradient-to-br from-stone-50 to-rose-50 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            ✨ {additionalTreatments.title}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {additionalTreatments.items.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow"
              >
                <p className="text-gray-700 text-sm font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center space-y-2">
          <button
            onClick={handleViewPricelist}
            className="inline-flex items-center gap-2 bg-rose-600 text-white px-8 py-4 rounded-full hover:bg-rose-700 transition-all transform hover:scale-105 font-semibold shadow-lg"
          >
            <ExternalLink className="w-5 h-5" />
            Lihat Full Pricelist (Click Disini)
          </button>
          <p className="text-sm text-gray-500">
            Semua pricelist dengan detail semua treatment
          </p>
        </div>
      </div>
    </section>
  );
};

export default TreatmentCategories;
