import Image from "next/image";
import Link from "next/link";
import { Download, DownloadCloud } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section dengan Margin & Padding yang Pas */}
      <section className="relative bg-slate-50 dark:bg-[#0F172A] text-slate-900 dark:text-slate-100 overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-100/50 via-slate-50 to-slate-50 dark:from-teal-900/20 dark:via-[#0F172A] dark:to-[#0F172A]"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Kolom Teks (Kiri) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badge Rilis Terbaru */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/80 border border-teal-200 dark:border-teal-800/60 text-teal-700 dark:text-teal-400 text-xs font-semibold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-teal-500 dark:bg-teal-400 animate-pulse"></span>
                Rilis Terbaru v1.0.0
              </div>

              {/* Judul Utama */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
                Solusi Skrining TBC <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-500 dark:from-teal-400 dark:to-cyan-400">AI Akustik</span> & Pendamping Terapi Digital
              </h1>

              {/* Deskripsi */}
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
                Deteksi dini risiko TBC dari suara batuk secara 100% offline dan dampingi masa pengobatan 6 bulan hingga sembuh total. Pertama di Indonesia.
              </p>

              {/* Tombol Aksi (CTA) */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a 
                  href="https://drive.usercontent.google.com/download?id=1f2NfMWtivwcWRstrKtDgKpM76mOXGkQj&export=download&authuser=0" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-teal-600 hover:bg-teal-500 text-white font-semibold px-6 py-3.5 rounded-xl shadow-xl shadow-teal-900/40 transition-all flex items-center gap-2 text-sm"
                >
                  <DownloadCloud className="w-5 h-5" />
                  Unduh APK v1.0.0
                </a>
                <Link href="" target="_top" className="bg-white dark:bg-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700/80 font-semibold px-6 py-3.5 rounded-xl transition-all flex items-center gap-2 text-sm">
                  <Image src="/playstore-icon.png" alt="Play Store" width={20} height={20} className="w-5 h-5 object-contain" />
                  Segera Hadir di Play Store
                </Link>
              </div>
            </div>

            {/* Kolom Gambar Mockup HP (Kanan) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end mt-8 lg:mt-0">
              <div className="relative w-full max-w-md">
                {/* Efek Glow di belakang mockup */}
                <div className="absolute inset-0 bg-teal-500/10 blur-3xl rounded-full -z-10"></div>
                <Image 
                  src="/memegang ponsel tbcheck.png" 
                  alt="Mockup Aplikasi TBCheck" 
                  width={400} 
                  height={800} 
                  className="w-full h-auto object-contain drop-shadow-2xl" 
                  priority 
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Banner Metrik */}
      <section className="bg-slate-900 text-white py-8 md:py-12 border-y border-teal-900/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center divide-x divide-slate-800">
            <div className="px-2 sm:px-4">
              <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-teal-400 mb-2">9.6 KB</div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium">Model AI Super Ringan</div>
            </div>
            <div className="px-2 sm:px-4">
              <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-teal-400 mb-2">91.7%</div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium">Sensitivitas Skrining</div>
            </div>
            <div className="px-2 sm:px-4">
              <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-teal-400 mb-2">100%</div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium">Pemrosesan Offline</div>
            </div>
            <div className="px-2 sm:px-4">
              <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-teal-400 mb-2">UU PDP</div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium">Kepatuhan Privasi Data</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Pilar Utama */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">3 Pilar Solusi TBCheck</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Menghadirkan ekosistem kesehatan digital bagi Anda dan keluarga, mulai dari deteksi dini hingga pendampingan pengobatan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:shadow-teal-900/5 transition-all flex flex-col h-full">
              <div className="h-56 w-full relative mb-6 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center p-4 border border-slate-100 dark:border-slate-700">
                 <Image src="/cek batuk.png" alt="Skrining Suara Batuk" fill className="object-contain p-2" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Skrining Suara Batuk AI</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-auto">Hasil analisis spektrum batuk hanya dalam 5 detik secara on-device.</p>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:shadow-teal-900/5 transition-all flex flex-col h-full">
              <div className="h-56 w-full relative mb-6 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center p-4 border border-slate-100 dark:border-slate-700">
                 <Image src="/care-notification.png" alt="Pendamping Terapi" fill className="object-contain p-2" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Pendamping Terapi 6 Bulan</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-auto">Alarm obat optimistik & jurnal pengobatan harian agar tidak putus berobat.</p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:shadow-teal-900/5 transition-all flex flex-col h-full">
              <div className="h-56 w-full relative mb-6 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center p-4 border border-slate-100 dark:border-slate-700">
                 <Image src="/fitokimia.png" alt="Edukasi Fitokimia" fill className="object-contain p-2" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Edukasi Herbal & Fitokimia</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-auto">Panduan nutrisi tambahan dan obat herbal yang aman untuk penderita TBC.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cara Kerja */}
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-800/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">3 Langkah Mudah</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Skrining TBC kini semudah merekam suara di smartphone Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
            <div className="hidden md:block absolute top-[2rem] left-[16%] right-[16%] h-0.5 bg-slate-200 dark:bg-slate-700 z-0"></div>
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-teal-600 text-white flex items-center justify-center text-xl md:text-2xl font-bold mb-4 md:mb-6 shadow-lg shadow-teal-500/30">1</div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Rekam Suara</h3>
              <p className="text-slate-600 dark:text-slate-400">Buka aplikasi TBCheck dan rekam suara batuk Anda selama 5 detik.</p>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-teal-600 text-white flex items-center justify-center text-xl md:text-2xl font-bold mb-4 md:mb-6 shadow-lg shadow-teal-500/30">2</div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">AI Menganalisis</h3>
              <p className="text-slate-600 dark:text-slate-400">Teknologi Edge AI akan menganalisis spektrum audio secara instan tanpa internet.</p>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-teal-600 text-white flex items-center justify-center text-xl md:text-2xl font-bold mb-4 md:mb-6 shadow-lg shadow-teal-500/30">3</div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Dapatkan Hasil</h3>
              <p className="text-slate-600 dark:text-slate-400">Lihat skor risiko TBC Anda beserta rekomendasi langkah kesehatan selanjutnya.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
