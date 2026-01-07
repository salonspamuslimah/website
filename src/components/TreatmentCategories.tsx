import { Scissors, Flower2, Sparkles, Wind, PackageOpen, Download } from 'lucide-react';

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
        'Haircut & Styling',
        'Creambath Tradisional',
        'Hair Mask & Hair Spa',
        'Coloring, Highlight, Balayage',
        'Smoothing & Keratin',
        'Anti-Hairfall & Anti-Dandruff'
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
        'Full Body Massage',
        'Hot Stone Massage',
        'Body Scrub & Body Spa',
        'Back Massage',
        'Reflexology',
        'RF Lipo Slimming'
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
        'Facial Detox',
        'Facial + Hot Stone',
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
        'Armpit Waxing',
        'Hand Waxing',
        'Foot Waxing',
        'Combination Waxing'
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
        'Full Body Spa + Manipadi',
        'Full Body Massage + Ratus',
        'Creambath + Facial',
        'Hair Spa + Reflexology',
        'And many more...'
      ],
    },
  ];

  const handleDownloadPricelist = () => {
    const link = document.createElement('a');
    link.href = '/PRICELIST-AGT-2025.pdf';
    link.download = 'Sofia_Az_Zahra_Pricelist.pdf';
    link.click();
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
              <ul className="space-y-2">
                {category.treatments.map((treatment, idx) => (
                  <li
                    key={idx}
                    className="text-gray-600 text-sm flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-rose-600 rounded-full mr-2"></span>
                    {treatment}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center space-y-2">
          <button
            onClick={handleDownloadPricelist}
            className="inline-flex items-center gap-2 bg-rose-600 text-white px-8 py-4 rounded-full hover:bg-rose-700 transition-all transform hover:scale-105 font-semibold shadow-lg"
          >
            <Download className="w-5 h-5" />
            Download Full Pricelist (PDF)
          </button>
          <p className="text-sm text-gray-500">
            Complete pricelist dengan detail semua treatment
          </p>
        </div>
      </div>
    </section>
  );
};

export default TreatmentCategories;
