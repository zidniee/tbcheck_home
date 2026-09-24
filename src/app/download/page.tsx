import { Download, CheckCircle2, AlertTriangle, ArrowDownToLine, Zap, Shield, Bug, Smartphone, Package, SearchCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function DownloadPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-900">
      
      {/* Header & Main Download Card */}
      <section className="pt-10 pb-16 md:pt-16 md:pb-20 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
              Pusat Unduhan Resmi
            </h1>
            <p className="text-base md:text-lg text-slate-600 dark:text-slate-400">
              Dapatkan versi terbaru aplikasi TBCheck atau lihat riwayat pembaruan sistem kami.
            </p>
          </div>

          <div className="bg-gradient-to-b from-teal-50 to-white dark:from-slate-800 dark:to-slate-800/50 rounded-3xl p-6 md:p-12 border border-teal-100 dark:border-slate-700 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 hidden md:block">
              <Download className="w-48 h-48 text-teal-600" />
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-300 font-bold text-xs md:text-sm mb-4">
                  Latest / Production
                </div>
                <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-2">
                  TBCheck v1.0.0 Stable
                </h2>
                <div className="flex flex-wrap gap-3 md:gap-4 text-xs md:text-sm text-slate-600 dark:text-slate-400 mt-4 mb-6">
                  <div className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-1 text-teal-500" /> 3 September 2026</div>
                  <div className="flex items-center"><Package className="w-4 h-4 mr-1 text-teal-500" /> 93.4 MB</div>
                  <div className="flex items-center"><Smartphone className="w-4 h-4 mr-1 text-teal-500" /> Android 8.0 (Oreo)+</div>
                </div>
                
                <div className="bg-slate-100 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700 mb-6 font-mono text-[10px] md:text-xs text-slate-500 dark:text-slate-400 break-all">
                  <div className="font-bold mb-1 text-slate-700 dark:text-slate-300">SHA-256 Verification Hash:</div>
                  e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
                </div>
                <div className="flex items-center text-xs md:text-sm font-medium text-teal-700 dark:text-teal-400 mb-6 md:mb-8">
                  <SearchCheck className="w-4 h-4 md:w-5 md:h-5 mr-2 shrink-0" />
                  Sertifikasi Biner: Signed APK (Release Key) | Clean Security Scan
                </div>
              </div>

              <div className="flex flex-col gap-4 w-full md:w-auto md:min-w-[250px]">
                <a 
                  href="https://drive.usercontent.google.com/download?id=1f2NfMWtivwcWRstrKtDgKpM76mOXGkQj&export=download&authuser=0" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full px-6 py-4 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-bold shadow-lg transition-colors text-sm md:text-base"
                >
                  <ArrowDownToLine className="w-5 h-5 mr-2" />
                  Unduh APK
                </a>
                <div className="text-center">
                  <p className="text-[10px] md:text-xs text-slate-500 dark:text-slate-400 mb-2">Status Distribusi Store:</p>
                  <div className="flex justify-center items-center opacity-50 grayscale cursor-not-allowed border border-slate-200 dark:border-slate-700 rounded-lg p-2 bg-slate-50 dark:bg-slate-800">
                    <Image src="/playstore-icon.png" alt="Google Play" width={16} height={16} className="mr-2 md:w-5 md:h-5" />
                    <span className="text-xs md:text-sm font-medium text-slate-700 dark:text-slate-300">Dalam Proses</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Version History & Install Guide */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-12">
          
          <div className="lg:col-span-2">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-6 md:mb-8">Riwayat Versi Kronologis</h3>
            
            <div className="space-y-6 md:space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 dark:before:via-slate-700 before:to-transparent">
              
              {/* Item v1.0.0 */}
              <div className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-900 bg-teal-500 text-slate-50 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow"></div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-slate-800 p-5 md:p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                  <div className="flex flex-wrap items-center justify-between mb-2">
                    <h4 className="font-bold text-base md:text-lg text-slate-900 dark:text-white">v1.0.0</h4>
                    <span className="px-2 py-0.5 md:py-1 text-[10px] md:text-xs font-semibold rounded bg-teal-100 text-teal-800 dark:bg-teal-900/50 dark:text-teal-300">Production</span>
                  </div>
                  <div className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mb-4">3 September 2026</div>
                  <ul className="space-y-3 text-xs md:text-sm">
                    <li className="flex items-start">
                      <span className="mr-2 text-base md:text-lg">•</span>
                      <span><strong>Fitur Baru:</strong> Peluncuran teknologi deteksi suara akustik (MFCC), fitur pendamping pengobatan TBC 6 bulan, dan radar faskes terdekat.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-base md:text-lg">•</span>
                      <span><strong>Peningkatan Performa:</strong> Optimasi Sliding-Window + Mean-Top3 pada audio 5 detik (AUC naik ke 0.64), latensi inferensi &lt;5 ms.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-base md:text-lg">•</span>
                      <span><strong>Privasi & Keamanan:</strong> Implementasi enkripsi AES-256-CBC pada payload medis dan zero-cloud audio storage.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-base md:text-lg">•</span>
                      <span><strong>Perbaikan Bug:</strong> Perbaikan error sinkronisasi offline, optimasi Optimistic UI pada jadwal obat.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Item v0.9.5 */}
              <div className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-900 bg-slate-300 dark:bg-slate-600 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow"></div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-slate-800 p-5 md:p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm opacity-80">
                  <div className="flex flex-wrap items-center justify-between mb-2">
                    <h4 className="font-bold text-base md:text-lg text-slate-900 dark:text-white">v0.9.5 Beta</h4>
                    <span className="px-2 py-0.5 md:py-1 text-[10px] md:text-xs font-semibold rounded bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300">Beta</span>
                  </div>
                  <div className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mb-4">15 Agustus 2026</div>
                  <ul className="space-y-2 text-xs md:text-sm text-slate-600 dark:text-slate-400 mb-4">
                    <li>- Uji coba tertutup fitur alarm pintar.</li>
                    <li>- Optimalisasi respons UI pada layar kecil.</li>
                  </ul>
                  <button className="text-[10px] md:text-xs font-bold text-teal-600 dark:text-teal-400 hover:underline flex items-center">
                    <ArrowDownToLine className="w-3 h-3 mr-1" /> Unduh APK Versi v0.9.5
                  </button>
                </div>
              </div>

            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-slate-800 text-white p-6 rounded-2xl lg:sticky lg:top-24 mt-8 lg:mt-0">
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-5 h-5 md:w-6 md:h-6 text-amber-400 mr-2 shrink-0" />
                <h3 className="text-lg md:text-xl font-bold">Panduan Instalasi APK</h3>
              </div>
              <p className="text-slate-300 text-xs md:text-sm mb-6">
                Karena mengunduh di luar Play Store, Anda perlu memberikan izin instalasi khusus pada perangkat Android Anda.
              </p>
              <ol className="space-y-4 text-xs md:text-sm text-slate-300">
                <li className="flex">
                  <span className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-slate-700 flex items-center justify-center mr-3 shrink-0 font-bold text-[10px] md:text-xs">1</span>
                  <span>Unduh berkas APK melalui tombol di atas.</span>
                </li>
                <li className="flex">
                  <span className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-slate-700 flex items-center justify-center mr-3 shrink-0 font-bold text-[10px] md:text-xs">2</span>
                  <span>Buka berkas yang telah diunduh. Jika muncul peringatan keamanan, pilih <strong>Pengaturan (Settings)</strong>.</span>
                </li>
                <li className="flex">
                  <span className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-slate-700 flex items-center justify-center mr-3 shrink-0 font-bold text-[10px] md:text-xs">3</span>
                  <span>Aktifkan opsi <strong>Izinkan dari sumber ini (Allow from this source)</strong>.</span>
                </li>
                <li className="flex">
                  <span className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-slate-700 flex items-center justify-center mr-3 shrink-0 font-bold text-[10px] md:text-xs">4</span>
                  <span>Kembali dan pilih <strong>Instal</strong>. Tunggu hingga proses selesai.</span>
                </li>
              </ol>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
