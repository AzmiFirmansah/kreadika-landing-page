import { useState } from "react";
import logoKreadika from "../assets/icons/logo-kreadika-horizontal.png";
import chevronDown from "../assets/icons/chevron-down-solid-full.svg";

function Navbar({ currentPath = "/", onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleClick = (e, path) => {
    if (onNavigate && path.startsWith("/")) {
      e.preventDefault();
      onNavigate(path);
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-blue-100 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <a
          href="/"
          onClick={(e) => handleClick(e, "/")}
          className="flex items-center gap-3"
        >
          <img
            src={logoKreadika}
            alt="Logo KREADIKA"
            className="h-10 w-auto sm:h-11"
          />
        </a>

        {/* Desktop Navigation Menu */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex md:items-center"
        >
          <ul className="flex items-center gap-7 text-sm font-medium text-slate-700">
            <li>
              <a
                href="/"
                onClick={(e) => handleClick(e, "/")}
                className={currentPath === "/" ? "font-semibold text-kreadika-royal" : ""}
              >
                Beranda
              </a>
            </li>

            {/* Dropdown Menu: About Seminar */}
            <li className="relative group">
              <button
                type="button"
                data-dropdown-toggle="dropdown-tentang"
                aria-expanded="false"
                className={`flex items-center gap-1.5 py-2 cursor-pointer ${
                  currentPath.startsWith("/tentang") ||
                  currentPath.startsWith("/panitia") ||
                  currentPath.startsWith("/mitra")
                    ? "font-semibold text-kreadika-royal"
                    : "text-slate-700"
                }`}
              >
                <span>Tentang</span>
                <img
                  src={chevronDown}
                  alt=""
                  className="h-3.5 w-3.5 opacity-60"
                />
              </button>
              <div
                id="dropdown-tentang"
                className="hidden group-hover:block absolute left-0 top-full z-50 w-60 pt-1"
              >
                <div className="rounded-xl border border-blue-100 bg-white p-1.5 shadow-lg shadow-blue-950/5">
                  <a
                    href="/tentang"
                    onClick={(e) => handleClick(e, "/tentang")}
                    className="block rounded-lg px-3.5 py-2.5 text-sm"
                  >
                    <span className="block font-semibold text-kreadika-navy">
                      Tentang KREADIKA
                    </span>
                    <span className="block text-xs text-slate-500">
                      Profil, visi, dan tema seminar
                    </span>
                  </a>
                  <a
                    href="/panitia"
                    onClick={(e) => handleClick(e, "/panitia")}
                    className="block rounded-lg px-3.5 py-2.5 text-sm"
                  >
                    <span className="block font-semibold text-kreadika-navy">
                      Panitia
                    </span>
                    <span className="block text-xs text-slate-500">
                      Susunan panitia penyelenggara
                    </span>
                  </a>
                  <a
                    href="/mitra"
                    onClick={(e) => handleClick(e, "/mitra")}
                    className="block rounded-lg px-3.5 py-2.5 text-sm"
                  >
                    <span className="block font-semibold text-kreadika-navy">
                      Mitra
                    </span>
                    <span className="block text-xs text-slate-500">
                      Co-host, jurnal, dan organisasi
                    </span>
                  </a>
                </div>
              </div>
            </li>

            {/* Dropdown Menu: Registration & Papers */}
            <li className="relative group">
              <button
                type="button"
                data-dropdown-toggle="dropdown-seminar"
                aria-expanded="false"
                className="flex items-center gap-1.5 py-2 text-slate-700 cursor-pointer"
              >
                <span>Seminar</span>
                <img
                  src={chevronDown}
                  alt=""
                  className="h-3.5 w-3.5 opacity-60"
                />
              </button>
              <div
                id="dropdown-seminar"
                className="hidden group-hover:block absolute left-0 top-full z-50 w-60 pt-1"
              >
                <div className="rounded-xl border border-blue-100 bg-white p-1.5 shadow-lg shadow-blue-950/5">
                  <a
                    href="/call-for-papers"
                    onClick={(e) => handleClick(e, "/call-for-papers")}
                    className="block rounded-lg px-3.5 py-2.5 text-sm"
                  >
                    <span className="block font-semibold text-kreadika-navy">
                      Call for Papers
                    </span>
                    <span className="block text-xs text-slate-500">
                      Topik, ketentuan, dan jadwal
                    </span>
                  </a>
                  <a
                    href="/pendaftaran"
                    onClick={(e) => handleClick(e, "/pendaftaran")}
                    className="block rounded-lg px-3.5 py-2.5 text-sm"
                  >
                    <span className="block font-semibold text-kreadika-navy">
                      Pendaftaran
                    </span>
                    <span className="block text-xs text-slate-500">
                      Biaya dan cara mendaftar
                    </span>
                  </a>
                  <a
                    href="/prosiding"
                    onClick={(e) => handleClick(e, "/prosiding")}
                    className="block rounded-lg px-3.5 py-2.5 text-sm"
                  >
                    <span className="block font-semibold text-kreadika-navy">
                      Prosiding
                    </span>
                    <span className="block text-xs text-slate-500">
                      Terbitan ber-ISSN dan ber-DOI
                    </span>
                  </a>
                </div>
              </div>
            </li>

            <li>
              <a
                href="/kontak"
                onClick={(e) => handleClick(e, "/kontak")}
                className={currentPath === "/kontak" ? "font-semibold text-kreadika-royal" : ""}
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
            className="inline-flex items-center justify-center rounded-lg bg-kreadika-royal px-5 py-2.5 text-sm font-semibold text-white"
          >
            Kirim Abstrak
          </a>
        </div>

        {/* Mobile Hamburger Menu Icon */}
        <button
          id="mobile-menu-btn"
          type="button"
          aria-expanded={mobileMenuOpen}
          aria-label="Open navigation menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="inline-flex items-center justify-center rounded-lg border border-blue-200 bg-kreadika-ice p-2 text-kreadika-navy md:hidden cursor-pointer"
        >
          {mobileMenuOpen ? (
            <svg
              className="h-5 w-5"
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
              className="h-5 w-5"
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
          mobileMenuOpen ? "block" : "hidden"
        } border-t border-blue-100 bg-white px-4 pt-3 pb-5 md:hidden`}
      >
        <div className="space-y-3">
          <a
            href="/"
            onClick={(e) => handleClick(e, "/")}
            className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700"
          >
            Beranda
          </a>

          <div className="px-3 py-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-kreadika-sky">
              Tentang
            </p>
            <div className="mt-2 space-y-1 border-l-2 border-blue-100 pl-3">
              <a
                href="/tentang"
                onClick={(e) => handleClick(e, "/tentang")}
                className="block py-1.5 text-sm text-slate-700"
              >
                Tentang KREADIKA
              </a>
              <a
                href="/panitia"
                onClick={(e) => handleClick(e, "/panitia")}
                className="block py-1.5 text-sm text-slate-700"
              >
                Panitia
              </a>
              <a
                href="/mitra"
                onClick={(e) => handleClick(e, "/mitra")}
                className="block py-1.5 text-sm text-slate-700"
              >
                Mitra
              </a>
            </div>
          </div>

          <div className="px-3 py-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-kreadika-sky">
              Seminar
            </p>
            <div className="mt-2 space-y-1 border-l-2 border-blue-100 pl-3">
              <a
                href="/call-for-papers"
                onClick={(e) => handleClick(e, "/call-for-papers")}
                className="block py-1.5 text-sm text-slate-700"
              >
                Call for Papers
              </a>
              <a
                href="/pendaftaran"
                onClick={(e) => handleClick(e, "/pendaftaran")}
                className="block py-1.5 text-sm text-slate-700"
              >
                Pendaftaran
              </a>
              <a
                href="/prosiding"
                onClick={(e) => handleClick(e, "/prosiding")}
                className="block py-1.5 text-sm text-slate-700"
              >
                Prosiding
              </a>
            </div>
          </div>

          <a
            href="/kontak"
            onClick={(e) => handleClick(e, "/kontak")}
            className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700"
          >
            Kontak
          </a>

          <div className="pt-2">
            <a
              href="/call-for-papers#kirim"
              onClick={(e) => handleClick(e, "/call-for-papers#kirim")}
              className="block w-full rounded-lg bg-kreadika-royal px-4 py-2.5 text-center text-sm font-semibold text-white"
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

