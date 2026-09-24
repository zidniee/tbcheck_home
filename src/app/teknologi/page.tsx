import Image from "next/image";
import { Cpu, Zap, Lock, BarChart3, Fingerprint } from "lucide-react";

export default function Teknologi() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-10 pb-16 md:pt-16 md:pb-24 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 md:mb-6">
              Teknologi AI & Riset Akustik
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Inovasi riset dan validasi ilmiah dari engine AI akustik TBCheck.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 md:mb-6">Showcase Teknologi Analisis Suara (MFCC & Edge AI)</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                TBCheck menggunakan mekanisme <strong>MFCC (Mel-Frequency Cepstral Coefficients)</strong> untuk mengekstrak dan mengubah suara batuk menjadi pola data yang lebih eksplisit dan mudah dipahami oleh sistem. 
              </p>
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 md:h-12 md:w-12 rounded-lg bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center mt-1">
                    <Zap className="h-5 w-5 md:h-6 md:w-6 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">Edge AI (On-Device Inference)</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">Berjalan 100% tanpa internet, latensi &lt; 5 ms, dan tanpa menghabiskan kuota data.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 md:h-12 md:w-12 rounded-lg bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center mt-1">
                    <Lock className="h-5 w-5 md:h-6 md:w-6 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">Privasi Terjaga</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">Data suara tidak pernah dikirim ke server cloud, menjaga kerahasiaan pasien 100%.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-8">
              <Image src="/ai.png" alt="AI Technology Illustration" width={500} height={500} className="w-full max-w-md h-auto object-contain drop-shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6 text-center">Pipeline Pemrosesan Sinyal Audio (DSP)</h2>
            <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-700">
              <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 relative">
                <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-teal-200 dark:bg-teal-900 -translate-y-1/2 z-0"></div>
                
                {[
                  { title: "Input Audio", desc: "Rekaman batuk 5 detik" },
                  { title: "High-pass 80Hz", desc: "Pembersihan noise background" },
                  { title: "Ekstraksi MFCC", desc: "Ubah ke pola data eksplisit" },
                  { title: "Drop C0 & Z-Score", desc: "Normalisasi energi" },
                  { title: "Inferensi AI", desc: "Visual Score Risiko" }
                ].map((step, idx) => (
                  <div key={idx} className="relative z-10 flex flex-col items-center text-center bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 w-full md:w-36 lg:w-40">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold mb-2 md:mb-3">{idx + 1}</div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-xs md:text-sm mb-1">{step.title}</h4>
                    <p className="text-[10px] md:text-xs text-slate-500 dark:text-slate-400 leading-tight">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4">Algoritma Sliding-Window + Mean-Top3</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed text-sm md:text-base">
                Untuk meningkatkan akurasi analisis pada durasi audio 5 detik, aplikasi seluler memecah rekaman menjadi beberapa jendela (window) kecil.
                Skor akhir dihitung menggunakan rata-rata dari 3 skor tertinggi (Mean-Top3).
              </p>
              <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg border border-teal-100 dark:border-teal-800">
                <p className="text-sm font-semibold text-teal-800 dark:text-teal-300">
                  Hasil: Peningkatan metrik Area Under Curve (AUC) yang signifikan dari 0.51 menjadi 0.64 dalam evaluasi internal.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4">Validasi Riset & Benchmark Datasets</h2>
              <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700">
                <table className="w-full text-left text-sm text-slate-600 dark:text-slate-400">
                  <thead className="text-xs text-slate-700 uppercase bg-slate-100 dark:bg-slate-800 dark:text-slate-300">
                    <tr>
                      <th className="px-4 py-3">Dataset</th>
                      <th className="px-4 py-3">ROC-AUC</th>
                      <th className="px-4 py-3">Recall</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b dark:bg-slate-900 dark:border-slate-800">
                      <td className="px-4 py-3 font-medium text-slate-900 dark:text-white">CODA (Public)</td>
                      <td className="px-4 py-3">0.765</td>
                      <td className="px-4 py-3">89.4%</td>
                    </tr>
                    <tr className="bg-slate-50 dark:bg-slate-800/50">
                      <td className="px-4 py-3 font-medium text-slate-900 dark:text-white">OWN (Proprietary)</td>
                      <td className="px-4 py-3 text-teal-600 dark:text-teal-400 font-bold">0.782</td>
                      <td className="px-4 py-3 text-teal-600 dark:text-teal-400 font-bold">91.7%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
