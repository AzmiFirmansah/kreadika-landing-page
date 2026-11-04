import logoKreadika from "../assets/logo-kreadika-horizontal.webp";

function Footer({ onNavigate }) {
  const handleClick = (e, path) => {
    if (onNavigate && path.startsWith("/")) {
      e.preventDefault();
      onNavigate(path);
    }
  };

  return (
    <footer
      id="kontak"
      className="border-t border-kreadika-700 bg-kreadika-800 text-kreadika-100"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand & Organizer Info */}
          <div className="md:col-span-5">
            <a
              href="/"
              onClick={(e) => handleClick(e, "/")}
              aria-label="KREADIKA Beranda"
              className="inline-block rounded-xl bg-white px-4 py-2.5 shadow-xs transition-opacity duration-200 hover:opacity-95"
            >
              <img
                src={logoKreadika}
                alt="Logo KREADIKA - Seminar Nasional Pendidikan Kreatif dan Adaptif"
                width="153"
                height="40"
                loading="lazy"
                className="h-9 w-auto"
              />
            </a>
            <p className="mt-4 text-sm font-semibold text-white">
              KREADIKA – Seminar Nasional Pendidikan Kreatif dan Adaptif
            </p>
            <p className="mt-1 text-sm italic text-kreadika-200">
              “Mendidik Manusia di Tengah Perubahan”
            </p>
            <div className="mt-5 inline-flex flex-col rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-kreadika-200">
                Diselenggarakan oleh
              </p>
              <p className="mt-0.5 text-sm font-semibold text-white">
                Scientific Advantage Publishing
              </p>
            </div>
          </div>

          {/* Secretariat & Contact */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-kreadika-200">
              Sekretariat
            </h3>
            <ul className="mt-4 space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-kreadika-200">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <div>
                  <span className="block text-xs text-kreadika-200">Surel</span>
                  <a
                    href="mailto:sekretariat@kreadika.id"
                    className="font-medium text-white transition-colors duration-200 hover:text-kreadika-200 hover:underline underline-offset-4"
                  >
                    sekretariat@kreadika.id
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-kreadika-200">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </span>
                <div>
                  <span className="block text-xs text-kreadika-200">
                    WhatsApp
                  </span>
                  <span className="font-medium text-white">
                    [nomor WhatsApp]
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-kreadika-200">
              Tautan cepat
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm font-medium md:grid-cols-1">
              <li>
                <a
                  href="/call-for-papers"
                  onClick={(e) => handleClick(e, "/call-for-papers")}
                  className="inline-block text-kreadika-100 transition-all duration-200 hover:translate-x-1 hover:text-white"
                >
                  Call for Papers
                </a>
              </li>
              <li>
                <a
                  href="/pendaftaran"
                  onClick={(e) => handleClick(e, "/pendaftaran")}
                  className="inline-block text-kreadika-100 transition-all duration-200 hover:translate-x-1 hover:text-white"
                >
                  Pendaftaran
                </a>
              </li>
              <li>
                <a
                  href="/pendaftaran-online"
                  onClick={(e) => handleClick(e, "/pendaftaran-online")}
                  className="inline-block text-kreadika-100 transition-all duration-200 hover:translate-x-1 hover:text-white"
                >
                  Pendaftaran Online
                </a>
              </li>
              <li>
                <a
                  href="/prosiding"
                  onClick={(e) => handleClick(e, "/prosiding")}
                  className="inline-block text-kreadika-100 transition-all duration-200 hover:translate-x-1 hover:text-white"
                >
                  Prosiding
                </a>
              </li>
              <li>
                <a
                  href="/mitra"
                  onClick={(e) => handleClick(e, "/mitra")}
                  className="inline-block text-kreadika-100 transition-all duration-200 hover:translate-x-1 hover:text-white"
                >
                  Mitra &amp; Kerja Sama
                </a>
              </li>
              <li>
                <a
                  href="/kontak"
                  onClick={(e) => handleClick(e, "/kontak")}
                  className="inline-block text-kreadika-100 transition-all duration-200 hover:translate-x-1 hover:text-white"
                >
                  Kontak
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright & Attribution */}
        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-kreadika-200">
          <p>
            © 2026 Scientific Advantage Publishing · kreadika.id · Co-host:
            [perguruan tinggi / organisasi profesi]
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
