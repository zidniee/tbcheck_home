import { ShieldCheck, Lock, CheckCircle2 } from "lucide-react";

export default function Privasi() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-900">
      <section className="pt-16 pb-16 md:pt-20 md:pb-20 bg-teal-900 text-white border-b border-teal-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-400 via-transparent to-transparent"></div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <ShieldCheck className="h-16 w-16 md:h-20 md:w-20 mx-auto text-teal-400 mb-4 md:mb-6" />
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 md:mb-6">
            Privasi Data & Keamanan
          </h1>
          <p className="text-lg md:text-xl text-teal-100 max-w-2xl mx-auto">
            Kepercayaan Anda adalah prioritas utama kami. Sistem keamanan TBCheck didesain dari awal untuk menjamin kerahasiaan medis pengguna.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Prinsip Perlindungan Data Pasien</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-24">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-center">
              <div className="h-12 w-12 md:h-14 md:w-14 rounded-full bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center mb-5 md:mb-6">
                <Lock className="h-6 w-6 md:h-7 md:w-7 text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3 md:mb-4">Analisis On-Device (Zero-Cloud)</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
                Pemrosesan sinyal akustik dan inferensi AI dilakukan <strong>sepenuhnya secara luring (offline)</strong> di dalam memori ponsel cerdas Anda (Edge AI). Suara batuk Anda tidak pernah ditransmisikan, diunggah, maupun disimpan di server cloud.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-center">
              <div className="h-12 w-12 md:h-14 md:w-14 rounded-full bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center mb-5 md:mb-6">
                <ShieldCheck className="h-6 w-6 md:h-7 md:w-7 text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3 md:mb-4">Data Pribadi Tersandi</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
                Seluruh data profil dan jurnal pengobatan dilindungi menggunakan teknik pseudonimisasi dan terenkripsi secara ketat di perangkat Anda, sehingga tidak dapat dibaca oleh pihak manapun tanpa otorisasi.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-700 shadow-sm text-left max-w-4xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4">Persetujuan Eksplisit (User Consent)</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm md:text-base">
              TBCheck mematuhi sepenuhnya asas persetujuan berdasarkan Undang-Undang Pelindungan Data Pribadi (UU PDP). 
              Anda memiliki kendali penuh atas data Anda di dalam aplikasi.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-teal-600 dark:text-teal-400 mt-1 mr-3 shrink-0" />
                <span className="text-slate-700 dark:text-slate-300 text-sm md:text-base">Rekaman batuk otomatis <strong>dihapus dari perangkat</strong> setelah probabilitas risiko berhasil diekstrak. Tidak ada suara batuk yang disimpan secara permanen.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-teal-600 dark:text-teal-400 mt-1 mr-3 shrink-0" />
                <span className="text-slate-700 dark:text-slate-300 text-sm md:text-base">Anda bebas meminta penghapusan seluruh data akun, profil, dan rekam jejak pengobatan secara permanen kapan saja (Right to Erasure).</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4">Pernyataan Kebijakan Privasi Resmi</h3>
            <p className="text-sm md:text-base">
              Kami berkomitmen untuk melindungi privasi dan keamanan data pengguna ("Anda"). Kebijakan privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi Anda ketika Anda menggunakan aplikasi TBCheck.
            </p>
            <p className="text-sm md:text-base">
              Sistem keamanan informasi kami secara rutin diaudit dan didesain sejak awal (Privacy by Design) untuk memastikan kepatuhan penuh terhadap regulasi kesehatan digital.
            </p>
            <h4 className="font-bold text-slate-900 dark:text-white mt-6 md:mt-8 mb-2">Hak Anda Berdasarkan UU PDP</h4>
            <ul className="list-disc pl-6 space-y-1 md:space-y-2 text-sm md:text-base">
              <li>Hak atas informasi identitas pengelola data.</li>
              <li>Hak untuk melengkapi, memperbarui, dan memperbaiki kesalahan data.</li>
              <li>Hak untuk mengakses data pribadi.</li>
              <li>Hak untuk menghapus atau memusnahkan data pribadi (Right to be Forgotten).</li>
              <li>Hak untuk menarik kembali persetujuan pemrosesan data (Consent Withdrawal).</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
