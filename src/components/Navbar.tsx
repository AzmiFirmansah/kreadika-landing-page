import { useState } from "react";
import chevronDown from "../assets/chevron-down-solid-full.svg";
import type { PageProps, LinkClickEvent } from "../types";

interface NavbarProps extends PageProps {
  currentPath?: string;
}

function Navbar({ currentPath = "/", onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleClick = (e: LinkClickEvent, path: string) => {
    if (onNavigate && path.startsWith("/")) {
      e.preventDefault();
      onNavigate(path);
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-kreadika-200/80 bg-white/95 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <a
          href="/"
          onClick={(e) => handleClick(e, "/")}
          aria-label="KREADIKA Beranda"
          className="flex items-center gap-3 transition-opacity duration-200 hover:opacity-90"
        >
          <img
            src="/logo-kreadika-horizontal.webp"
            alt="Logo KREADIKA 2027"
            width="454"
            height="132"
            fetchPriority="high"

            decoding="async"
            className="h-10 w-auto sm:h-11"
          />
        </a>

        {/* Desktop Navigation Menu */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex md:items-center"
        >
          <ul className="flex items-center gap-6 lg:gap-7 text-sm font-medium text-slate-600">
            <li>
              <a
                href="/"
                onClick={(e) => handleClick(e, "/")}
                className={`relative py-2 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:rounded-full after:bg-kreadika-600 after:transition-all after:duration-300 ${
                  currentPath === "/"
                    ? "font-semibold text-kreadika-600 after:w-full"
                    : "hover:text-kreadika-700 after:w-0 hover:after:w-full"
                }`}
              >
                Beranda
              </a>
            </li>

            {/* Dropdown Menu: Tentang */}
            <li className="relative group">
              <a
                href="/tentang"
                onClick={(e) => handleClick(e, "/tentang")}
                className={`relative flex items-center gap-1.5 py-2 transition-colors duration-200 cursor-pointer after:absolute after:bottom-0 after:left-0 after:h-0.5 after:rounded-full after:bg-kreadika-600 after:transition-all after:duration-300 ${
                  currentPath.startsWith("/tentang") ||
                  currentPath.startsWith("/panitia") ||
                  currentPath.startsWith("/mitra")
                    ? "font-semibold text-kreadika-600 after:w-full"
                    : "hover:text-kreadika-700 after:w-0 group-hover:after:w-full"
                }`}
              >
                <span>Tentang</span>
                <img
                  src={chevronDown}
                  alt=""
                  aria-hidden="true"
                  width="12"
                  height="12"
                  className="h-3 w-3 opacity-55 transition-transform duration-300 ease-out group-hover:rotate-180 group-hover:opacity-100"
                />
              </a>
              <div
                id="dropdown-tentang"
                className="invisible opacity-0 translate-y-2 scale-95 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-200 ease-out origin-top-left absolute left-0 top-full z-50 w-64 pt-2.5"
              >
                <div className="rounded-2xl border border-kreadika-200/80 bg-white p-2 shadow-xl shadow-kreadika-800/8">
                  <a
                    href="/tentang"
                    onClick={(e) => handleClick(e, "/tentang")}
                    className={`group/item block rounded-xl px-3.5 py-2.5 text-sm transition-all duration-200 ${
                      currentPath === "/tentang"
                        ? "bg-kreadika-50 text-kreadika-700"
                        : "hover:bg-kreadika-50/70 hover:pl-4 text-slate-700"
                    }`}
                  >
                    <span className="block font-semibold text-kreadika-800 transition-colors duration-200 group-hover/item:text-kreadika-600">
                      Tentang KREADIKA
                    </span>
                    <span className="mt-0.5 block text-xs text-slate-600">
                      Profil, visi, dan tema seminar
                    </span>
                  </a>
                  <a
                    href="/panitia"
                    onClick={(e) => handleClick(e, "/panitia")}
                    className={`group/item block rounded-xl px-3.5 py-2.5 text-sm transition-all duration-200 ${
                      currentPath === "/panitia"
                        ? "bg-kreadika-50 text-kreadika-700"
                        : "hover:bg-kreadika-50/70 hover:pl-4 text-slate-700"
                    }`}
                  >
                    <span className="block font-semibold text-kreadika-800 transition-colors duration-200 group-hover/item:text-kreadika-600">
                      Panitia
                    </span>
                    <span className="mt-0.5 block text-xs text-slate-600">
                      Susunan panitia penyelenggara
                    </span>
                  </a>
                  <a
                    href="/mitra"
                    onClick={(e) => handleClick(e, "/mitra")}
                    className={`group/item block rounded-xl px-3.5 py-2.5 text-sm transition-all duration-200 ${
                      currentPath.startsWith("/mitra")
                        ? "bg-kreadika-50 text-kreadika-700"
                        : "hover:bg-kreadika-50/70 hover:pl-4 text-slate-700"
                    }`}
                  >
                    <span className="block font-semibold text-kreadika-800 transition-colors duration-200 group-hover/item:text-kreadika-600">
                      Mitra
                    </span>
                    <span className="mt-0.5 block text-xs text-slate-600">
                      Co-host, jurnal, dan organisasi
                    </span>
                  </a>
                </div>
              </div>
            </li>

            <li>
              <a
                href="/call-for-papers"
                onClick={(e) => handleClick(e, "/call-for-papers")}
                className={`relative py-2 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:rounded-full after:bg-kreadika-600 after:transition-all after:duration-300 ${
                  currentPath.startsWith("/call-for-papers")
                    ? "font-semibold text-kreadika-600 after:w-full"
                    : "hover:text-kreadika-700 after:w-0 hover:after:w-full"
                }`}
              >
                Call for Papers
              </a>
            </li>

            <li>
              <a
                href="/pendaftaran"
                onClick={(e) => handleClick(e, "/pendaftaran")}
                className={`relative py-2 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:rounded-full after:bg-kreadika-600 after:transition-all after:duration-300 ${
                  currentPath.startsWith("/pendaftaran")
                    ? "font-semibold text-kreadika-600 after:w-full"
                    : "hover:text-kreadika-700 after:w-0 hover:after:w-full"
                }`}
              >
                Pendaftaran
              </a>
            </li>

            <li>
              <a
                href="/prosiding"
                onClick={(e) => handleClick(e, "/prosiding")}
                className={`relative py-2 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:rounded-full after:bg-kreadika-600 after:transition-all after:duration-300 ${
                  currentPath.startsWith("/prosiding")
                    ? "font-semibold text-kreadika-600 after:w-full"
                    : "hover:text-kreadika-700 after:w-0 hover:after:w-full"
                }`}
              >
                Prosiding
              </a>
            </li>

            <li>
              <a
                href="/kontak"
                onClick={(e) => handleClick(e, "/kontak")}
                className={`relative py-2 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:rounded-full after:bg-kreadika-600 after:transition-all after:duration-300 ${
                  currentPath === "/kontak"
                    ? "font-semibold text-kreadika-600 after:w-full"
                    : "hover:text-kreadika-700 after:w-0 hover:after:w-full"
                }`}
              >
                Kontak
              </a>
            </li>
          </ul>
        </nav>

        {/* Call to Action Button */}
        <div className="hidden md:flex md:items-center">
          <a
            href="/call-for-papers#kirim"
            onClick={(e) => handleClick(e, "/call-for-papers#kirim")}
            className="inline-flex items-center justify-center rounded-xl bg-kreadika-600 px-5 py-2.5 text-sm font-semibold text-white shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:bg-kreadika-700 hover:shadow-md hover:shadow-kreadika-600/20 active:translate-y-0 active:scale-[0.98]"
          >
            Kirim Abstrak
          </a>
        </div>

        {/* Mobile Hamburger Menu Icon */}
        <button
          id="mobile-menu-btn"
          type="button"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="inline-flex items-center justify-center rounded-xl border border-kreadika-200 bg-white p-2 text-kreadika-800 md:hidden cursor-pointer transition-all duration-200 hover:border-kreadika-400 hover:bg-kreadika-50 active:scale-95"
        >
          {mobileMenuOpen ? (
            <svg
              className="h-5 w-5 transition-transform duration-200 rotate-90"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-5 w-5 transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* ==================== 
          MOBILE DRAWER MENU 
      ==================== */}
      <div
        id="mobile-menu"
        className={`${
          mobileMenuOpen ? "block animate-page-enter" : "hidden"
        } border-t border-kreadika-200/80 bg-white px-4 pt-3 pb-5 shadow-lg md:hidden`}
      >
        <div className="space-y-1.5">
          <a
            href="/"
            onClick={(e) => handleClick(e, "/")}
            className={`block rounded-xl px-3.5 py-2.5 text-sm font-medium transition-all duration-200 ${
              currentPath === "/"
                ? "bg-kreadika-50 font-semibold text-kreadika-600"
                : "text-slate-600 hover:bg-kreadika-50/60 hover:pl-4 hover:text-kreadika-700"
            }`}
          >
            Beranda
          </a>

          {/* Group: Tentang */}
          <div className="rounded-xl bg-kreadika-50/70 border border-kreadika-200/70 p-3">
            <span className="block text-[11px] font-semibold uppercase tracking-wider text-kreadika-700">
              Tentang
            </span>
            <div className="mt-2 space-y-1 pl-1">
              <a
                href="/tentang"
                onClick={(e) => handleClick(e, "/tentang")}
                className={`block rounded-lg px-2.5 py-1.5 text-sm transition-all duration-200 ${
                  currentPath === "/tentang"
                    ? "bg-white font-semibold text-kreadika-600 shadow-2xs"
                    : "text-slate-600 hover:bg-white hover:pl-3.5 hover:text-kreadika-700"
                }`}
              >
                Tentang KREADIKA
              </a>
              <a
                href="/panitia"
                onClick={(e) => handleClick(e, "/panitia")}
                className={`block rounded-lg px-2.5 py-1.5 text-sm transition-all duration-200 ${
                  currentPath === "/panitia"
                    ? "bg-white font-semibold text-kreadika-600 shadow-2xs"
                    : "text-slate-600 hover:bg-white hover:pl-3.5 hover:text-kreadika-700"
                }`}
              >
                Panitia
              </a>
              <a
                href="/mitra"
                onClick={(e) => handleClick(e, "/mitra")}
                className={`block rounded-lg px-2.5 py-1.5 text-sm transition-all duration-200 ${
                  currentPath.startsWith("/mitra")
                    ? "bg-white font-semibold text-kreadika-600 shadow-2xs"
                    : "text-slate-600 hover:bg-white hover:pl-3.5 hover:text-kreadika-700"
                }`}
              >
                Mitra
              </a>
            </div>
          </div>

          <a
            href="/call-for-papers"
            onClick={(e) => handleClick(e, "/call-for-papers")}
            className={`block rounded-xl px-3.5 py-2.5 text-sm font-medium transition-all duration-200 ${
              currentPath.startsWith("/call-for-papers")
                ? "bg-kreadika-50 font-semibold text-kreadika-600"
                : "text-slate-600 hover:bg-kreadika-50/60 hover:pl-4 hover:text-kreadika-700"
            }`}
          >
            Call for Papers
          </a>

          <a
            href="/pendaftaran"
            onClick={(e) => handleClick(e, "/pendaftaran")}
            className={`block rounded-xl px-3.5 py-2.5 text-sm font-medium transition-all duration-200 ${
              currentPath.startsWith("/pendaftaran")
                ? "bg-kreadika-50 font-semibold text-kreadika-600"
                : "text-slate-600 hover:bg-kreadika-50/60 hover:pl-4 hover:text-kreadika-700"
            }`}
          >
            Pendaftaran
          </a>

          <a
            href="/prosiding"
            onClick={(e) => handleClick(e, "/prosiding")}
            className={`block rounded-xl px-3.5 py-2.5 text-sm font-medium transition-all duration-200 ${
              currentPath.startsWith("/prosiding")
                ? "bg-kreadika-50 font-semibold text-kreadika-600"
                : "text-slate-600 hover:bg-kreadika-50/60 hover:pl-4 hover:text-kreadika-700"
            }`}
          >
            Prosiding
          </a>

          <a
            href="/kontak"
            onClick={(e) => handleClick(e, "/kontak")}
            className={`block rounded-xl px-3.5 py-2.5 text-sm font-medium transition-all duration-200 ${
              currentPath === "/kontak"
                ? "bg-kreadika-50 font-semibold text-kreadika-600"
                : "text-slate-600 hover:bg-kreadika-50/60 hover:pl-4 hover:text-kreadika-700"
            }`}
          >
            Kontak
          </a>

          <div className="pt-2">
            <a
              href="/call-for-papers#kirim"
              onClick={(e) => handleClick(e, "/call-for-papers#kirim")}
              className="block w-full rounded-xl bg-kreadika-600 px-4 py-2.5 text-center text-sm font-semibold text-white shadow-xs transition-all duration-300 hover:bg-kreadika-700 hover:shadow-md active:scale-[0.99]"
            >
              Kirim Abstrak
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

