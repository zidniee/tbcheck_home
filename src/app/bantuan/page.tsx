"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, PhoneCall, HelpCircle, Wrench } from "lucide-react";

export default function Bantuan() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "Apakah TBCheck menggantikan diagnosis dokter?",
      a: "Tidak. TBCheck adalah alat skrining awal berbasis kecerdasan buatan untuk mendeteksi potensi risiko TBC dari pola suara batuk. Hasil skrining bukan merupakan diagnosis definitif medis. Jika aplikasi menunjukkan risiko tinggi, Anda diwajibkan untuk segera mengunjungi fasilitas kesehatan terdekat untuk pemeriksaan laboratorium lanjutan (seperti tes TCM atau Rontgen Toraks)."
    },
    {
      q: "Bagaimana cara melakukan skrining batuk yang benar?",
      a: "Pastikan Anda berada di ruangan yang tenang tanpa suara bising latar. Pegang smartphone sekitar 15-20 cm dari mulut Anda, tekan tombol rekam, dan batuklah secara alami selama durasi 5 detik yang diminta oleh aplikasi."
    },
    {
      q: "Apakah aplikasi dapat digunakan tanpa koneksi internet?",
      a: "Ya. Setelah Anda mengunduh aplikasi dan model AI, fitur skrining batuk dapat berjalan 100% secara offline. Namun, untuk mengunduh materi edukasi terbaru atau memperbarui jadwal obat, koneksi internet mungkin diperlukan."
    },
    {
      q: "Bagaimana privasi data suara saya dijaga?",
      a: "Semua rekaman suara batuk diproses sepenuhnya di dalam perangkat ponsel Anda (Zero-Cloud Storage). File suara tersebut langsung dihapus setelah hasil keluar dan tidak pernah diunggah ke server kami."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-900">
      <section className="pt-12 pb-8 md:pt-20 md:pb-12 text-center max-w-3xl mx-auto px-6 lg:px-8">
        <HelpCircle className="h-12 w-12 md:h-16 md:w-16 mx-auto text-teal-600 dark:text-teal-400 mb-4 md:mb-6" />
        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 md:mb-6">
          Pusat Bantuan
        </h1>
        <p className="text-base md:text-lg text-slate-600 dark:text-slate-400">
          Temukan jawaban atas pertanyaan Anda dan panduan teknis penggunaan TBCheck.
        </p>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-5 md:p-10 mb-10 md:mb-16">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-6 md:mb-8">Pertanyaan Umum (FAQ)</h2>
            <div className="space-y-3 md:space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-4 md:p-5 text-left bg-slate-50 hover:bg-slate-100 dark:bg-slate-800/50 dark:hover:bg-slate-700/50 transition-colors focus:outline-none"
                  >
                    <span className="font-semibold text-sm md:text-base text-slate-900 dark:text-white pr-4">{faq.q}</span>
                    {openFaq === index ? (
                      <ChevronUp className="h-5 w-5 text-slate-500 shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-slate-500 shrink-0" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="p-4 md:p-5 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
                      <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-700 shadow-sm">
              <div className="flex items-center mb-4">
                <Wrench className="h-5 w-5 md:h-6 md:w-6 text-amber-500 mr-3 shrink-0" />
                <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white">Kendala Teknis</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200 text-xs md:text-sm">Izin Mikrofon Ditolak</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm mt-1">Buka Pengaturan Android &gt; Aplikasi &gt; TBCheck &gt; Izin (Permissions) &gt; Aktifkan Mikrofon.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200 text-xs md:text-sm">Aplikasi Tidak Bisa Dibuka</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm mt-1">Pastikan OS Android minimal versi 8.0 (Oreo). Jika masih bermasalah, coba hapus cache aplikasi atau instal ulang dari halaman Unduhan.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-rose-500 to-red-600 rounded-2xl p-6 md:p-8 text-white shadow-lg shadow-red-500/20">
              <div className="flex items-center mb-4">
                <PhoneCall className="h-5 w-5 md:h-6 md:w-6 text-white mr-3 shrink-0" />
                <h3 className="text-lg md:text-xl font-bold">Layanan Darurat</h3>
              </div>
              <p className="text-rose-100 text-xs md:text-sm mb-6">
                Jika Anda mengalami batuk darah, sesak napas berat, atau nyeri dada akut, segera hubungi layanan gawat darurat medis.
              </p>
              <div className="space-y-3">
                <div className="bg-white/20 p-3 rounded-lg flex items-center justify-between">
                  <span className="font-semibold text-sm md:text-base">Hotline Kemenkes RI</span>
                  <span className="font-bold text-lg md:text-xl">119</span>
                </div>
                <div className="bg-white/20 p-3 rounded-lg flex items-center justify-between">
                  <span className="font-semibold text-sm md:text-base">Ambulans Gawat Darurat</span>
                  <span className="font-bold text-lg md:text-xl">118</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
