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
          <ul className="flex items-center gap-6 lg:gap-7 text-sm font-medium text-slate-700">
            <li>
              <a
                href="/"
                onClick={(e) => handleClick(e, "/")}
                className={`py-2 transition-colors ${
                  currentPath === "/"
                    ? "font-semibold text-kreadika-royal"
                    : "hover:text-kreadika-royal"
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
                className={`flex items-center gap-1.5 py-2 transition-colors cursor-pointer ${
                  currentPath.startsWith("/tentang") ||
                  currentPath.startsWith("/panitia") ||
                  currentPath.startsWith("/mitra")
                    ? "font-semibold text-kreadika-royal"
                    : "hover:text-kreadika-royal"
                }`}
              >
                <span>Tentang</span>
                <img
                  src={chevronDown}
                  alt=""
                  className="h-3 w-3 opacity-60 transition-transform duration-200 group-hover:rotate-180"
                />
              </a>
              <div
                id="dropdown-tentang"
                className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-150 absolute left-0 top-full z-50 w-60 pt-2"
              >
                <div className="rounded-xl border border-blue-100 bg-white p-1.5 shadow-lg shadow-blue-950/5">
                  <a
                    href="/tentang"
                    onClick={(e) => handleClick(e, "/tentang")}
                    className={`block rounded-lg px-3.5 py-2.5 text-sm transition-colors ${
                      currentPath === "/tentang"
                        ? "bg-kreadika-ice text-kreadika-royal"
                        : "hover:bg-slate-50 text-slate-700"
                    }`}
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
                    className={`block rounded-lg px-3.5 py-2.5 text-sm transition-colors ${
                      currentPath === "/panitia"
                        ? "bg-kreadika-ice text-kreadika-royal"
                        : "hover:bg-slate-50 text-slate-700"
                    }`}
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
                    className={`block rounded-lg px-3.5 py-2.5 text-sm transition-colors ${
                      currentPath.startsWith("/mitra")
                        ? "bg-kreadika-ice text-kreadika-royal"
                        : "hover:bg-slate-50 text-slate-700"
                    }`}
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

            <li>
              <a
                href="/call-for-papers"
                onClick={(e) => handleClick(e, "/call-for-papers")}
                className={`py-2 transition-colors ${
                  currentPath.startsWith("/call-for-papers")
                    ? "font-semibold text-kreadika-royal"
                    : "hover:text-kreadika-royal"
                }`}
              >
                Call for Papers
              </a>
            </li>

            <li>
              <a
                href="/pendaftaran"
                onClick={(e) => handleClick(e, "/pendaftaran")}
                className={`py-2 transition-colors ${
                  currentPath.startsWith("/pendaftaran")
                    ? "font-semibold text-kreadika-royal"
                    : "hover:text-kreadika-royal"
                }`}
              >
                Pendaftaran
              </a>
            </li>

            <li>
              <a
                href="/prosiding"
                onClick={(e) => handleClick(e, "/prosiding")}
                className={`py-2 transition-colors ${
                  currentPath.startsWith("/prosiding")
                    ? "font-semibold text-kreadika-royal"
                    : "hover:text-kreadika-royal"
                }`}
              >
                Prosiding
              </a>
            </li>

            <li>
              <a
                href="/kontak"
                onClick={(e) => handleClick(e, "/kontak")}
                className={`py-2 transition-colors ${
                  currentPath === "/kontak"
                    ? "font-semibold text-kreadika-royal"
                    : "hover:text-kreadika-royal"
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
        <div className="space-y-2">
          <a
            href="/"
            onClick={(e) => handleClick(e, "/")}
            className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              currentPath === "/"
                ? "bg-kreadika-ice font-semibold text-kreadika-royal"
                : "text-slate-700 hover:bg-slate-50"
            }`}
          >
            Beranda
          </a>

          {/* Group: Tentang */}
          <div className="rounded-lg bg-slate-50/70 p-2.5">
            <span className="block text-xs font-semibold uppercase tracking-wider text-kreadika-royal">
              Tentang
            </span>
            <div className="mt-2 space-y-1 pl-1">
              <a
                href="/tentang"
                onClick={(e) => handleClick(e, "/tentang")}
                className={`block rounded-md px-2.5 py-1.5 text-sm transition-colors ${
                  currentPath === "/tentang"
                    ? "bg-kreadika-ice font-semibold text-kreadika-royal"
                    : "text-slate-700 hover:text-kreadika-royal"
                }`}
              >
                Tentang KREADIKA
              </a>
              <a
                href="/panitia"
                onClick={(e) => handleClick(e, "/panitia")}
                className={`block rounded-md px-2.5 py-1.5 text-sm transition-colors ${
                  currentPath === "/panitia"
                    ? "bg-kreadika-ice font-semibold text-kreadika-royal"
                    : "text-slate-700 hover:text-kreadika-royal"
                }`}
              >
                Panitia
              </a>
              <a
                href="/mitra"
                onClick={(e) => handleClick(e, "/mitra")}
                className={`block rounded-md px-2.5 py-1.5 text-sm transition-colors ${
                  currentPath.startsWith("/mitra")
                    ? "bg-kreadika-ice font-semibold text-kreadika-royal"
                    : "text-slate-700 hover:text-kreadika-royal"
                }`}
              >
                Mitra
              </a>
            </div>
          </div>

          <a
            href="/call-for-papers"
            onClick={(e) => handleClick(e, "/call-for-papers")}
            className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              currentPath.startsWith("/call-for-papers")
                ? "bg-kreadika-ice font-semibold text-kreadika-royal"
                : "text-slate-700 hover:bg-slate-50"
            }`}
          >
            Call for Papers
          </a>

          <a
            href="/pendaftaran"
            onClick={(e) => handleClick(e, "/pendaftaran")}
            className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              currentPath.startsWith("/pendaftaran")
                ? "bg-kreadika-ice font-semibold text-kreadika-royal"
                : "text-slate-700 hover:bg-slate-50"
            }`}
          >
            Pendaftaran
          </a>

          <a
            href="/prosiding"
            onClick={(e) => handleClick(e, "/prosiding")}
            className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              currentPath.startsWith("/prosiding")
                ? "bg-kreadika-ice font-semibold text-kreadika-royal"
                : "text-slate-700 hover:bg-slate-50"
            }`}
          >
            Prosiding
          </a>

          <a
            href="/kontak"
            onClick={(e) => handleClick(e, "/kontak")}
            className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              currentPath === "/kontak"
                ? "bg-kreadika-ice font-semibold text-kreadika-royal"
                : "text-slate-700 hover:bg-slate-50"
            }`}
          >
            Kontak
          </a>

          <div className="pt-2">
            <a
              href="/call-for-papers#kirim"
              onClick={(e) => handleClick(e, "/call-for-papers#kirim")}
              className="block w-full rounded-lg bg-kreadika-royal px-4 py-2.5 text-center text-sm font-semibold text-white shadow-xs"
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
