import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      text: 'Tempatnya nyaman banget, privacy terjaga. Staffnya ramah dan profesional. Treatment body massage-nya juara!',
      name: 'Siti Nurhaliza',
      instagram: '@siti.nurh',
      rating: 5,
    },
    {
      text: 'Akhirnya nemu salon muslimah yang bener-bener private. Bisa lepas hijab dengan tenang. Hair spa-nya recommended!',
      name: 'Aisha Kamila',
      instagram: '@aisha.k',
      rating: 5,
    },
    {
      text: 'Harga affordable, hasil memuaskan. Facial totok-nya bikin wajah glowing. Minuman tradisionalnya juga enak!',
      name: 'Fatimah Az Zahra',
      instagram: '@fatimah.zhr',
      rating: 5,
    },
    {
      text: 'Paket pre-wedding-nya lengkap banget. Dari rambut, wajah, sampai body treatment. Puas banget sama hasilnya!',
      name: 'Dina Mariana',
      instagram: '@dina.m',
      rating: 5,
    },
    {
      text: 'Ruangannya bersih, adem, dan wangi. Treatment-nya profesional. Jadi langganan deh setiap bulan ke sini!',
      name: 'Rania Putri',
      instagram: '@rania.ptr',
      rating: 5,
    },
    {
      text: 'Pelayanannya ramah, tempatnya cozy. RF lipo slimming-nya efektif banget. Recommended for muslimah!',
      name: 'Zahra Amalia',
      instagram: '@zahra.aml',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-amber-50 to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-rose-600">Clients Say</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Testimoni dari pelanggan setia Sofia Az Zahra
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              <div className="relative mb-4">
                <Quote className="w-8 h-8 text-rose-200 absolute -top-2 -left-2" />
                <p className="text-gray-700 leading-relaxed pl-6">
                  {testimonial.text}
                </p>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-900">
                  {testimonial.name}
                </p>
                <p className="text-sm text-rose-600">{testimonial.instagram}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Join ratusan muslimah yang sudah merasakan perawatan kami
          </p>
          <a
            href="https://wa.me/6281235020325?text=Halo%20Sofia%20Az%20Zahra%2C%20saya%20ingin%20booking%20treatment"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-rose-600 text-white px-8 py-4 rounded-full hover:bg-rose-700 transition-all transform hover:scale-105 font-semibold shadow-lg"
          >
            Book Your Treatment Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
