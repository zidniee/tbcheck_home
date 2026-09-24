import Image from "next/image";
import { UserCheck, ShieldPlus, Bell } from "lucide-react";

export default function Solusi() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-900">
      <section className="pt-12 pb-10 md:pt-20 md:pb-16 text-center max-w-4xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 md:mb-6">
          Solusi Kesehatan Untuk Anda
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Membantu Anda dan keluarga mendeteksi risiko TBC lebih awal dari rumah, serta mendampingi masa pengobatan hingga sembuh total.
        </p>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center mb-6">
                <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center mr-4">
                  <UserCheck className="h-5 w-5 md:h-6 md:w-6 text-teal-600 dark:text-teal-400" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Fokus Pada Kesembuhan Pasien</h2>
              </div>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <ShieldPlus className="h-5 w-5 md:h-6 md:w-6 text-teal-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-base md:text-lg font-bold text-slate-900 dark:text-white">Skrining Mandiri Mudah dari Rumah</h4>
                    <p className="text-slate-600 dark:text-slate-400 mt-1 text-sm md:text-base">Tidak perlu cemas mengantre, cukup rekam suara batuk dan isi kuesioner medis singkat untuk mengetahui tingkat risiko Anda.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Bell className="h-5 w-5 md:h-6 md:w-6 text-teal-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-base md:text-lg font-bold text-slate-900 dark:text-white">Pengingat Minum Obat 6 Bulan</h4>
                    <p className="text-slate-600 dark:text-slate-400 mt-1 text-sm md:text-base">Sistem alarm cerdas agar Anda tidak putus berobat selama fase intensif maupun lanjutan. Disertai dengan jurnal perkembangan harian.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 md:h-6 md:w-6 text-teal-500 mr-3 flex-shrink-0 mt-1 rounded-full bg-teal-100 flex items-center justify-center text-[10px] md:text-xs font-bold">3</div>
                  <div>
                    <h4 className="text-base md:text-lg font-bold text-slate-900 dark:text-white">Materi Edukasi Fitokimia</h4>
                    <p className="text-slate-600 dark:text-slate-400 mt-1 text-sm md:text-base">Akses informasi panduan nutrisi tambahan dan obat herbal pendamping yang tervalidasi aman dikonsumsi oleh penderita TBC.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="order-1 lg:order-2 flex justify-center">
               <div className="rounded-3xl overflow-hidden shadow-xl bg-white dark:bg-slate-800 p-2 md:p-4 border border-slate-200 dark:border-slate-700 max-w-[280px] md:max-w-[320px] w-full">
                  <Image src="/care-notification.png" alt="Pasien App" width={320} height={600} className="w-full h-auto rounded-2xl object-contain" />
               </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
