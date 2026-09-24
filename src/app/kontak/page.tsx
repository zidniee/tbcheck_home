"use client";

import { Mail, MessageSquare, Briefcase, FileDown } from "lucide-react";

export default function Kontak() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-900">
      <section className="pt-12 pb-8 md:pt-20 md:pb-12 text-center max-w-3xl mx-auto px-6 lg:px-8">
        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 md:mb-6">
          Hubungi Kami
        </h1>
        <p className="text-base md:text-lg text-slate-600 dark:text-slate-400">
          Apakah Anda memiliki pertanyaan seputar penggunaan aplikasi atau ingin memberikan masukan? Jangan ragu untuk menghubungi tim layanan pelanggan kami.
        </p>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          
          <div>
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-700 shadow-xl">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-6">Kirim Pesan</h2>
              <form className="space-y-4 md:space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs md:text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Nama Lengkap</label>
                  <input type="text" className="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-shadow text-sm md:text-base" placeholder="Masukkan nama Anda" />
                </div>
                <div>
                  <label className="block text-xs md:text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email Aktif</label>
                  <input type="email" className="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-shadow text-sm md:text-base" placeholder="nama@email.com" />
                </div>
                <div>
                  <label className="block text-xs md:text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Kategori Pertanyaan</label>
                  <select className="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-shadow text-sm md:text-base">
                    <option>Pertanyaan Medis (Umum)</option>
                    <option>Kendala Teknis Aplikasi</option>
                    <option>Saran & Masukan</option>
                    <option>Lainnya</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs md:text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Pesan / Tujuan</label>
                  <textarea rows={4} className="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-shadow resize-none text-sm md:text-base" placeholder="Jelaskan kendala atau pertanyaan Anda..."></textarea>
                </div>
                <button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-4 rounded-lg shadow-md transition-colors flex items-center justify-center text-sm md:text-base mt-2">
                  Kirim Pesan Sekarang <MessageSquare className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-6 md:space-y-8 mt-6 lg:mt-0">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-6">Informasi Kontak</h2>
              <div className="space-y-5 md:space-y-6">

                <div className="flex items-start">
                  <div className="bg-teal-100 dark:bg-teal-900/50 p-2 md:p-3 rounded-full mr-4 shrink-0">
                    <Mail className="text-teal-600 dark:text-teal-400 w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm md:text-base">Email Layanan Pelanggan</h4>
                    <p className="text-slate-600 dark:text-slate-400 mt-1 text-xs md:text-sm">support@tbcheck.id<br/>info@tbcheck.id</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-teal-100 dark:bg-teal-900/50 p-2 md:p-3 rounded-full mr-4 shrink-0">
                    <Briefcase className="text-teal-600 dark:text-teal-400 w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm md:text-base">Jam Operasional Tim Bantuan</h4>
                    <p className="text-slate-600 dark:text-slate-400 mt-1 text-xs md:text-sm">Senin - Jumat: 09:00 - 17:00 WIB</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-teal-900 rounded-2xl p-6 md:p-8 text-white">
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Brosur & Panduan</h3>
              <p className="text-teal-100 text-xs md:text-sm mb-5 md:mb-6">
                Unduh brosur resmi panduan cara penggunaan aplikasi TBCheck secara lengkap.
              </p>
              <button className="flex items-center justify-center w-full px-4 py-3 bg-white text-teal-900 rounded-lg font-bold hover:bg-teal-50 transition-colors text-sm md:text-base">
                <FileDown className="w-4 h-4 md:w-5 md:h-5 mr-2 shrink-0" />
                Unduh Panduan PDF (3MB)
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
