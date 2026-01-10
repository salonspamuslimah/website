import { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'Apakah ini khusus perempuan?',
      answer:
        'Ya, Sofia Az Zahra adalah salon & spa khusus muslimah. 100% staff perempuan dan tidak ada male staff sama sekali. Ruangan juga tertutup sehingga Anda bisa lepas hijab dengan tenang dan nyaman.',
    },
    {
      question: 'Apakah harus booking dulu?',
      answer:
        'Sangat disarankan untuk booking terlebih dahulu via WhatsApp, terutama untuk weekend dan hari libur. Namun, walk-in juga diterima jika slot tersedia.',
    },
    {
      question: 'Apakah hijab-friendly dan private?',
      answer:
        'Sangat hijab-friendly! Ruangan kami tertutup dan private. Anda bisa lepas hijab dengan aman karena tidak ada male staff dan ruangan terjaga privacynya.',
    },
    {
      question: 'Apakah tersedia paket rombongan / arisan / bridal?',
      answer:
        'Ya, kami menyediakan paket khusus untuk rombongan, arisan, dan pre-wedding/bridal. Silakan hubungi kami via WhatsApp untuk konsultasi dan harga spesial.',
    },
    {
      question: 'Berapa lama treatment biasanya?',
      answer:
        'Durasi treatment bervariasi tergantung jenis layanan. Express treatment sekitar 60 menit, treatment standar 90-120 menit, dan paket lengkap bisa 150-180 menit.',
    },
    {
      question: 'Apakah ada biaya tambahan?',
      answer:
        'Tidak ada biaya tersembunyi. Semua harga sudah termasuk treatment, produk yang digunakan, dan complimentary drink. Harga yang tertera adalah harga final.',
    },
    {
      question: 'Metode pembayaran apa saja?',
      answer:
        'Kami menerima pembayaran cash, transfer bank, QRIS, dan card (metode pembayaran card dikenakan biaya admin 1%). Pembayaran dilakukan setelah treatment selesai.',
    },
    {
      question: 'Apakah bisa reschedule atau cancel?',
      answer:
        'Bisa. Jika ada perubahan jadwal, mohon informasikan minimal H-1 via WhatsApp. Kami akan bantu reschedule ke waktu yang tersedia.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-rose-600">Questions</span>
          </h2>
          <p className="text-lg text-gray-600">
            Pertanyaan yang sering diajukan tentang layanan kami
          </p>
        </div>

        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-100 rounded-xl overflow-hidden hover:border-rose-200 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-rose-600 transition-transform flex-shrink-0 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center bg-gradient-to-r from-rose-50 to-amber-50 rounded-xl p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Masih ada pertanyaan lain?
          </h3>
          <p className="text-gray-600 mb-6">
            Jangan ragu untuk menghubungi kami via WhatsApp
          </p>
          <a
            href="https://wa.me/6281235020325?text=Halo%20minsaz%2C%20saya%20ingin%20bertanya"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-rose-600 text-white px-8 py-3 rounded-full hover:bg-rose-700 transition-all transform hover:scale-105 font-semibold shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            Chat Us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
