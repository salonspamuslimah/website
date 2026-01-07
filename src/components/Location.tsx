import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

const Location = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Visit <span className="text-rose-600">Our Location</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Temukan kami di Cimahi, Jawa Barat
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-rose-50 to-amber-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-rose-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Address
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      No 81 A, Jl. Cihanjuang, Cibabat, Kec. Cimahi Utara, Kota
                      Cimahi, Jawa Barat
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <a
                      href="tel:+6281235020325"
                      className="text-rose-600 hover:text-rose-700 font-medium"
                    >
                      +62 812-3502-0325
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-stone-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Opening Hours
                    </h4>
                    <p className="text-gray-600">Setiap Hari : 09:00 - 20:00</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white rounded-lg border-l-4 border-rose-600">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-900">Note:</span>{' '}
                  Reservation by appointment is recommended, especially weekends
                  and holidays
                </p>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=No+81+A+Jl.+Cihanjuang+Cibabat+Cimahi+Utara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-rose-600 text-white px-6 py-3 rounded-full hover:bg-rose-700 transition-colors font-semibold"
                >
                  <Navigation className="w-5 h-5" />
                  Get Directions
                </a>
                <a
                  href="https://wa.me/6281235020325?text=Halo%20minsaz%2C%20saya%20ingin%20booking%20treatment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-white text-rose-600 border-2 border-rose-600 px-6 py-3 rounded-full hover:bg-rose-50 transition-colors font-semibold"
                >
                  <Phone className="w-5 h-5" />
                  Call Us
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.6884899999997!2d107.53!3d-6.87!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTInMTIuMCJTIDEwN8KwMzEnNDguMCJF!5e0!3m2!1sen!2sid!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
