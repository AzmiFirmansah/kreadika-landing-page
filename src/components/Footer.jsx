import logoKreadika from "../assets/icons/logo-kreadika-horizontal.png";

function Footer({ onNavigate }) {
  const handleClick = (e, path) => {
    if (onNavigate && path.startsWith("/")) {
      e.preventDefault();
      onNavigate(path);
    }
  };

  return (
    <footer id="kontak" className="bg-kreadika-navy text-blue-100">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand & Organizer Info */}
          <div className="md:col-span-5">
            <div className="inline-block rounded-xl bg-white px-4 py-2.5 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-black/20">
              <img
                src={logoKreadika}
                alt="Logo KREADIKA"
                className="h-9 w-auto"
              />
            </div>
            <p className="mt-4 text-sm font-semibold text-white">
              KREADIKA – Seminar Nasional Pendidikan Kreatif dan Adaptif
            </p>
            <p className="mt-1 text-sm italic text-sky-300">
              “Mendidik Manusia di Tengah Perubahan”
            </p>
            <p className="mt-5 text-xs font-medium uppercase tracking-wider text-blue-300">
              Diselenggarakan oleh
            </p>
            <p className="mt-1 text-sm font-semibold text-white">
              Scientific Advantage Publishing
            </p>
          </div>

          {/* Secretariat & Contact */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-sky-300">
              Sekretariat
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <span className="block text-xs text-blue-300">Surel</span>
                <a
                  href="mailto:sekretariat@kreadika.id"
                  className="font-medium text-white transition-colors duration-200 hover:text-kreadika-sky hover:underline underline-offset-4"
                >
                  sekretariat@kreadika.id
                </a>
              </li>
              <li>
                <span className="block text-xs text-blue-300">WhatsApp</span>
                <span className="font-medium text-white">
                  [nomor WhatsApp]
                </span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-sky-300">
              Tautan cepat
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm font-medium md:grid-cols-1">
              <li>
                <a
                  href="/call-for-papers"
                  onClick={(e) => handleClick(e, "/call-for-papers")}
                  className="inline-block text-blue-100 transition-all duration-200 hover:translate-x-1 hover:text-white"
                >
                  Call for Papers
                </a>
              </li>
              <li>
                <a
                  href="/pendaftaran"
                  onClick={(e) => handleClick(e, "/pendaftaran")}
                  className="inline-block text-blue-100 transition-all duration-200 hover:translate-x-1 hover:text-white"
                >
                  Pendaftaran
                </a>
              </li>
              <li>
                <a
                  href="/pendaftaran-online"
                  onClick={(e) => handleClick(e, "/pendaftaran-online")}
                  className="inline-block text-blue-100 transition-all duration-200 hover:translate-x-1 hover:text-white"
                >
                  Pendaftaran Online
                </a>
              </li>
              <li>
                <a
                  href="/prosiding"
                  onClick={(e) => handleClick(e, "/prosiding")}
                  className="inline-block text-blue-100 transition-all duration-200 hover:translate-x-1 hover:text-white"
                >
                  Prosiding
                </a>
              </li>
              <li>
                <a
                  href="/mitra"
                  onClick={(e) => handleClick(e, "/mitra")}
                  className="inline-block text-blue-100 transition-all duration-200 hover:translate-x-1 hover:text-white"
                >
                  Mitra &amp; Kerja Sama
                </a>
              </li>
              <li>
                <a
                  href="/kontak"
                  onClick={(e) => handleClick(e, "/kontak")}
                  className="inline-block text-blue-100 transition-all duration-200 hover:translate-x-1 hover:text-white"
                >
                  Kontak
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright & Attribution */}
        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-blue-300">
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

