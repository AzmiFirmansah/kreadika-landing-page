import { BrandMark } from "./SymposiumUI";
import { handleNavClick } from "../utils/navigation";

const FOOTER_LINKS = [
  { href: "/tentang", label: "Tentang KREADIKA" },
  { href: "/call-for-papers", label: "Call for Papers" },
  { href: "/pendaftaran", label: "Pendaftaran" },
  { href: "/pendaftaran-online", label: "Pendaftaran Online" },
  { href: "/prosiding", label: "Prosiding" },
  { href: "/mitra", label: "Mitra & Kerja Sama" },
  { href: "/kontak", label: "Kontak" },
];

function Footer({ onNavigate }) {
  return (
    <footer
      id="kontak"
      className="home-surface-dark font-editorial border-t border-white/15 bg-kreadika-950 text-kreadika-mist"
    >
      <div className="mx-auto max-w-6xl px-4 pt-14 pb-10 sm:px-6 sm:pt-18 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Brand identity and organizer */}
          <div className="lg:col-span-5">
            <a
              href="/"
              onClick={(e) => handleNavClick(e, "/", onNavigate)}
              aria-label="KREADIKA Beranda"
              className="inline-flex min-h-11 items-center transition-opacity duration-200 hover:opacity-90"
            >
              <BrandMark />
            </a>

            <p className="mt-5 font-display text-lg font-bold text-white">
              KREADIKA: Seminar Nasional Pendidikan Kreatif dan Adaptif
            </p>
            <p className="mt-1.5 text-sm font-medium text-amber-accent">
              “Mendidik Manusia di Tengah Perubahan”
            </p>

            <div className="mt-6 border-t border-white/15 pt-4">
              <p className="text-xs font-semibold tracking-[0.12em] uppercase text-kreadika-mist">
                Diselenggarakan oleh
              </p>
              <p className="mt-1 text-sm font-bold text-white">
                Scientific Advantage Publishing
              </p>
            </div>
          </div>

          {/* Secretariat contact details */}
          <div className="lg:col-span-4 lg:border-l lg:border-white/15 lg:pl-8">
            <h2 className="text-xs font-bold tracking-[0.14em] uppercase text-amber-accent">
              Sekretariat
            </h2>
            <dl className="mt-5 space-y-5 text-sm">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-kreadika-mist">
                  Surel resmi
                </dt>
                <dd className="mt-1">
                  <a
                    href="mailto:sekretariat@kreadika.id"
                    className="inline-flex min-h-11 items-center font-semibold text-white underline decoration-white/35 underline-offset-4 transition-colors duration-200 hover:text-amber-accent hover:decoration-amber-accent"
                  >
                    sekretariat@kreadika.id
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-kreadika-mist">
                  WhatsApp
                </dt>
                <dd className="mt-1 font-semibold text-white">
                  [nomor WhatsApp]
                </dd>
              </div>
            </dl>
          </div>

          {/* Direct site navigation */}
          <div className="lg:col-span-3 lg:border-l lg:border-white/15 lg:pl-8">
            <h2 className="text-xs font-bold tracking-[0.14em] uppercase text-amber-accent">
              Navigasi
            </h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-3 lg:grid-cols-1">
              {FOOTER_LINKS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href, onNavigate)}
                    className="inline-flex min-h-11 items-center text-sm font-medium text-kreadika-mist transition-colors duration-200 hover:text-white hover:underline underline-offset-4"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/15 pt-6 text-xs text-kreadika-mist sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Scientific Advantage Publishing · kreadika.id</p>
          <p>Co-host: [perguruan tinggi / organisasi profesi]</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
