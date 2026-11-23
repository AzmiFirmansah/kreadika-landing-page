import { useEffect, useRef, useState } from "react";
import { BrandMark } from "./SymposiumUI";
import { handleNavClick } from "../utils/navigation";

const TENTANG_LINKS = [
  {
    href: "/tentang",
    label: "Tentang KREADIKA",
    desc: "Profil, visi, dan tema seminar",
  },
  {
    href: "/panitia",
    label: "Panitia",
    desc: "Susunan panitia penyelenggara",
  },
  {
    href: "/mitra",
    label: "Mitra",
    desc: "Co-host, jurnal, dan organisasi",
  },
];

function Navbar({ currentPath = "/", onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [tentangOpen, setTentangOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dropdownBtnRef = useRef(null);
  const mobileBtnRef = useRef(null);

  const isTentangActive =
    currentPath.startsWith("/tentang") ||
    currentPath.startsWith("/panitia") ||
    currentPath.startsWith("/mitra");

  const navigateAndClose = (e, path) => {
    handleNavClick(e, path, onNavigate);
    setMobileMenuOpen(false);
    setTentangOpen(false);
  };

  useEffect(() => {
    if (!tentangOpen && !mobileMenuOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        if (tentangOpen) {
          setTentangOpen(false);
          dropdownBtnRef.current?.focus();
        }
        if (mobileMenuOpen) {
          setMobileMenuOpen(false);
          mobileBtnRef.current?.focus();
        }
      }
    };

    const handlePointerDown = (e) => {
      if (
        tentangOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setTentangOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handlePointerDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handlePointerDown);
    };
  }, [tentangOpen, mobileMenuOpen]);

  const navLinkClass = (active) =>
    `relative inline-flex min-h-11 items-center px-1 text-sm font-semibold transition-colors duration-200 ${
      active
        ? "text-white after:absolute after:right-1 after:bottom-0 after:left-1 after:h-0.5 after:bg-amber-accent"
        : "text-kreadika-mist hover:text-white"
    }`;

  return (
    <header className="home-surface-dark font-editorial sticky top-0 z-50 border-b border-white/15 bg-kreadika-950 text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="/"
          onClick={(e) => navigateAndClose(e, "/")}
          aria-label="KREADIKA Beranda"
          className="inline-flex min-h-11 items-center transition-opacity duration-200 hover:opacity-90"
        >
          <BrandMark priority />
        </a>

        <nav
          aria-label="Navigasi utama"
          className="hidden md:flex md:items-center"
        >
          <ul className="flex items-center gap-5 lg:gap-7">
            <li>
              <a
                href="/"
                onClick={(e) => navigateAndClose(e, "/")}
                aria-current={currentPath === "/" ? "page" : undefined}
                className={navLinkClass(currentPath === "/")}
              >
                Beranda
              </a>
            </li>

            <li ref={dropdownRef} className="relative">
              <button
                ref={dropdownBtnRef}
                type="button"
                aria-expanded={tentangOpen}
                aria-haspopup="true"
                aria-controls="dropdown-tentang"
                onClick={() => setTentangOpen((prev) => !prev)}
                className={`${navLinkClass(isTentangActive)} gap-1.5`}
              >
                <span>Tentang</span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  fill="none"
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    tentangOpen ? "rotate-180" : ""
                  }`}
                >
                  <path
                    d="M4 6l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="square"
                  />
                </svg>
              </button>

              {tentangOpen && (
                <div
                  id="dropdown-tentang"
                  className="absolute top-full left-0 z-50 mt-2 w-68 border border-white/20 bg-kreadika-950 py-2 shadow-sm"
                >
                  {TENTANG_LINKS.map((item) => {
                    const active =
                      item.href === "/mitra"
                        ? currentPath.startsWith("/mitra")
                        : currentPath === item.href;
                    return (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={(e) => navigateAndClose(e, item.href)}
                        aria-current={active ? "page" : undefined}
                        className={`block border-l-2 px-4 py-2.5 transition-colors duration-150 ${
                          active
                            ? "border-amber-accent bg-white/10 text-white"
                            : "border-transparent text-kreadika-mist hover:bg-white/8 hover:text-white"
                        }`}
                      >
                        <span className="block text-sm font-bold text-white">
                          {item.label}
                        </span>
                        <span className="mt-0.5 block text-xs text-kreadika-mist">
                          {item.desc}
                        </span>
                      </a>
                    );
                  })}
                </div>
              )}
            </li>

            <li>
              <a
                href="/call-for-papers"
                onClick={(e) => navigateAndClose(e, "/call-for-papers")}
                aria-current={
                  currentPath.startsWith("/call-for-papers")
                    ? "page"
                    : undefined
                }
                className={navLinkClass(
                  currentPath.startsWith("/call-for-papers"),
                )}
              >
                Call for Papers
              </a>
            </li>

            <li>
              <a
                href="/pendaftaran"
                onClick={(e) => navigateAndClose(e, "/pendaftaran")}
                aria-current={
                  currentPath.startsWith("/pendaftaran") ? "page" : undefined
                }
                className={navLinkClass(currentPath.startsWith("/pendaftaran"))}
              >
                Pendaftaran
              </a>
            </li>

            <li>
              <a
                href="/prosiding"
                onClick={(e) => navigateAndClose(e, "/prosiding")}
                aria-current={
                  currentPath.startsWith("/prosiding") ? "page" : undefined
                }
                className={navLinkClass(currentPath.startsWith("/prosiding"))}
              >
                Prosiding
              </a>
            </li>

            <li>
              <a
                href="/kontak"
                onClick={(e) => navigateAndClose(e, "/kontak")}
                aria-current={currentPath === "/kontak" ? "page" : undefined}
                className={navLinkClass(currentPath === "/kontak")}
              >
                Kontak
              </a>
            </li>
          </ul>
        </nav>

        <div className="hidden md:flex md:items-center">
          <a
            href="/call-for-papers#kirim"
            onClick={(e) => navigateAndClose(e, "/call-for-papers#kirim")}
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-amber-accent px-5 py-2.5 text-sm font-bold text-kreadika-950 transition-colors duration-200 hover:bg-amber-hover active:scale-[0.99]"
          >
            Kirim Abstrak
          </a>
        </div>

        <button
          ref={mobileBtnRef}
          id="mobile-menu-btn"
          type="button"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={
            mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"
          }
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="inline-flex min-h-11 items-center gap-2 rounded-md border border-white/30 bg-transparent px-3.5 py-2 text-sm font-bold text-white transition-colors duration-200 hover:border-amber-accent hover:text-amber-accent active:scale-[0.98] md:hidden"
        >
          <span>{mobileMenuOpen ? "Tutup" : "Menu"}</span>
          <svg
            aria-hidden="true"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.2"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="square"
                strokeLinejoin="miter"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="square"
                strokeLinejoin="miter"
                d="M4 7h16M4 12h16M4 17h16"
              />
            )}
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Navigasi seluler"
          className="border-t border-white/15 bg-kreadika-950 px-4 pt-3 pb-6 md:hidden"
        >
          <div className="divide-y divide-white/15">
            <a
              href="/"
              onClick={(e) => navigateAndClose(e, "/")}
              aria-current={currentPath === "/" ? "page" : undefined}
              className={`flex min-h-11 items-center py-2.5 text-sm font-semibold ${
                currentPath === "/"
                  ? "text-amber-accent"
                  : "text-white hover:text-amber-accent"
              }`}
            >
              Beranda
            </a>

            <div className="py-3">
              <p className="text-xs font-bold tracking-[0.12em] uppercase text-kreadika-mist">
                Tentang
              </p>
              <div className="mt-2 space-y-1 border-l-2 border-white/20 pl-3">
                {TENTANG_LINKS.map((item) => {
                  const active =
                    item.href === "/mitra"
                      ? currentPath.startsWith("/mitra")
                      : currentPath === item.href;
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => navigateAndClose(e, item.href)}
                      aria-current={active ? "page" : undefined}
                      className={`flex min-h-11 items-center text-sm font-semibold ${
                        active
                          ? "text-amber-accent"
                          : "text-kreadika-mist hover:text-white"
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </div>
            </div>

            <a
              href="/call-for-papers"
              onClick={(e) => navigateAndClose(e, "/call-for-papers")}
              aria-current={
                currentPath.startsWith("/call-for-papers") ? "page" : undefined
              }
              className={`flex min-h-11 items-center py-2.5 text-sm font-semibold ${
                currentPath.startsWith("/call-for-papers")
                  ? "text-amber-accent"
                  : "text-white hover:text-amber-accent"
              }`}
            >
              Call for Papers
            </a>

            <a
              href="/pendaftaran"
              onClick={(e) => navigateAndClose(e, "/pendaftaran")}
              aria-current={
                currentPath.startsWith("/pendaftaran") ? "page" : undefined
              }
              className={`flex min-h-11 items-center py-2.5 text-sm font-semibold ${
                currentPath.startsWith("/pendaftaran")
                  ? "text-amber-accent"
                  : "text-white hover:text-amber-accent"
              }`}
            >
              Pendaftaran
            </a>

            <a
              href="/prosiding"
              onClick={(e) => navigateAndClose(e, "/prosiding")}
              aria-current={
                currentPath.startsWith("/prosiding") ? "page" : undefined
              }
              className={`flex min-h-11 items-center py-2.5 text-sm font-semibold ${
                currentPath.startsWith("/prosiding")
                  ? "text-amber-accent"
                  : "text-white hover:text-amber-accent"
              }`}
            >
              Prosiding
            </a>

            <a
              href="/kontak"
              onClick={(e) => navigateAndClose(e, "/kontak")}
              aria-current={currentPath === "/kontak" ? "page" : undefined}
              className={`flex min-h-11 items-center py-2.5 text-sm font-semibold ${
                currentPath === "/kontak"
                  ? "text-amber-accent"
                  : "text-white hover:text-amber-accent"
              }`}
            >
              Kontak
            </a>
          </div>

          <div className="mt-5">
            <a
              href="/call-for-papers#kirim"
              onClick={(e) => navigateAndClose(e, "/call-for-papers#kirim")}
              className="flex min-h-12 w-full items-center justify-center rounded-md bg-amber-accent px-5 py-3 text-sm font-bold text-kreadika-950 transition-colors duration-200 hover:bg-amber-hover active:scale-[0.99]"
            >
              Kirim Abstrak
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
