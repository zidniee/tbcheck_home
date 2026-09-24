"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Moon, Sun } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Cek apakah user sebelumnya mensetting dark mode atau sistemnya dark mode
    if (document.documentElement.classList.contains("dark") || 
        (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  const links = [
    { name: "Beranda", href: "/" },
    { name: "Teknologi AI", href: "/teknologi" },
    { name: "Solusi", href: "/solusi" },
    { name: "Privasi", href: "/privasi-keamanan" },
    { name: "Download", href: "/download" },
    { name: "Bantuan", href: "/bantuan" },
    { name: "Kontak", href: "/kontak" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-[#0F172A]/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex-shrink-0">
            <Image src="/logoText.png" alt="TBCheck Logo" width={140} height={36} className="h-9 w-auto object-contain dark:invert dark:brightness-0" style={{ width: "auto" }} />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative py-2 transition-colors ${
                  isActive ? "text-teal-600 dark:text-teal-400 font-bold" : "hover:text-teal-600 dark:hover:text-teal-400"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-600 dark:bg-teal-400 rounded-t-md"></span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA & Theme Toggle */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <Link
            href="/download"
            className="bg-teal-600 hover:bg-teal-500 text-white font-semibold px-5 py-2.5 rounded-full shadow-lg shadow-teal-900/30 transition-all flex items-center gap-2 text-sm"
          >
            Unduh Aplikasi
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition-colors"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
          <div className="px-4 pt-2 pb-4 space-y-1 sm:px-6">
            <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2 ml-3">
              Lokasi Anda:
            </div>
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`${
                    isActive 
                      ? "text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-900/30 font-bold border-l-4 border-teal-600 dark:border-teal-400" 
                      : "text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 border-l-4 border-transparent"
                  } block pl-3 pr-4 py-2 rounded-r-md text-base transition-all`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="/download"
              className="block bg-teal-600 hover:bg-teal-500 text-white px-3 py-2.5 rounded-md text-base font-bold text-center mt-4 shadow-lg shadow-teal-900/30"
              onClick={() => setIsOpen(false)}
            >
              Unduh Aplikasi
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
