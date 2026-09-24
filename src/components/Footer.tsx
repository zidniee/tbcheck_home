import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Image src="/logoText.png" alt="TBCheck Logo" width={150} height={40} className="mb-4 brightness-0 invert opacity-80" style={{ width: "auto", height: "auto" }} />
            <p className="text-sm text-slate-400 mt-4 leading-relaxed">
              Mendeteksi risiko TBC lebih awal melalui analisis suara batuk berbasis Artificial Intelligence.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Fitur Utama</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-teal-400">Beranda</Link></li>
              <li><Link href="/teknologi" className="hover:text-teal-400">Teknologi AI</Link></li>
              <li><Link href="/solusi" className="hover:text-teal-400">Solusi Kami</Link></li>
              <li><Link href="/download" className="hover:text-teal-400">Unduh Aplikasi</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Dukungan</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/bantuan" className="hover:text-teal-400">Pusat Bantuan (FAQ)</Link></li>
              <li><Link href="/privasi-keamanan" className="hover:text-teal-400">Privasi & Keamanan</Link></li>
              <li><Link href="/kontak" className="hover:text-teal-400">Hubungi Kami</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Hubungi Kami</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-slate-400">Email: info@tbcheck.id</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} TBCheck - PT Solusi Kode Medika. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}
