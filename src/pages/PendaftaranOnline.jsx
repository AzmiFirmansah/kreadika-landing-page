import { ClosingBand, PageHero } from "../components/SymposiumUI";
import { SITE_INFO } from "../data/kreadikaData";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import { handleNavClick } from "../utils/navigation";

function PendaftaranOnline({ onNavigate }) {
  const pageRef = useRevealOnScroll();

  return (
    <main
      id="pendaftaran-online"
      ref={pageRef}
      className="font-editorial overflow-x-clip bg-white text-kreadika-950"
    >
      <PageHero
        sectionLabel="Pendaftaran Online"
        title="Pendaftaran Online KREADIKA"
        description={`Pendaftaran dan pembayaran dilakukan melalui sistem registrasi ${SITE_INFO.organizer}.`}
        onNavigate={onNavigate}
        aside={
          <div className="space-y-2">
            <p className="text-xs font-bold tracking-[0.12em] uppercase text-amber-accent">
              Status formulir
            </p>
            <p className="font-display text-xl font-bold text-white">
              Segera dibuka
            </p>
            <p className="text-sm text-kreadika-mist">
              Dibuka bersamaan dengan pengumuman resmi call for papers.
            </p>
          </div>
        }
      />

      {/* Status Pendaftaran */}
      <section className="bg-white">
        <div className="home-reveal mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid grid-cols-1 gap-8 border-t-2 border-kreadika-950 bg-paper p-6 sm:p-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <p className="text-xs font-bold tracking-[0.14em] uppercase text-terracotta">
                Status Pendaftaran
              </p>
              <h2
                className="mt-3 font-display font-bold tracking-[-0.02em] text-kreadika-950"
                style={{
                  fontSize: "clamp(1.65rem, 3vw, 2.3rem)",
                  lineHeight: 1.15,
                }}
              >
                Pendaftaran online segera dibuka
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
                Formulir pendaftaran online dibuka bersamaan dengan pengumuman
                call for papers. Saat dibuka, tombol pendaftaran di halaman ini
                langsung mengarah ke formulir registrasi resmi.
              </p>
            </div>

            <div className="lg:col-span-4 lg:text-right">
              <button
                type="button"
                disabled
                className="inline-flex min-h-12 w-full items-center justify-center rounded-md border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-700 lg:w-auto"
              >
                Formulir Belum Dibuka
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Berkas yang Perlu Disiapkan */}
      <section className="border-t border-paper-line bg-paper">
        <div className="home-reveal mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <p className="text-xs font-bold tracking-[0.14em] uppercase text-kreadika-700">
                Persyaratan Berkas
              </p>
              <h2
                className="mt-3 font-display font-bold tracking-[-0.02em] text-kreadika-950"
                style={{
                  fontSize: "clamp(1.75rem, 3vw, 2.4rem)",
                  lineHeight: 1.12,
                }}
              >
                Yang Perlu Disiapkan
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
                Siapkan dua informasi berikut sebelum mengisi formulir
                pendaftaran online.
              </p>
              <a
                href="/pendaftaran"
                onClick={(e) => handleNavClick(e, "/pendaftaran", onNavigate)}
                className="mt-5 inline-flex min-h-11 items-center border-b-2 border-kreadika-950 pb-1 text-sm font-bold text-kreadika-950 transition-colors duration-200 hover:border-terracotta hover:text-terracotta"
              >
                Lihat rincian biaya pendaftaran
              </a>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-8">
              <article className="border-t-2 border-kreadika-950 bg-white p-6 sm:p-7">
                <p className="text-xs font-bold tracking-[0.12em] uppercase text-terracotta">
                  01 / Khusus Pemakalah
                </p>
                <h3 className="mt-3 font-display text-xl font-bold text-kreadika-950">
                  ID submission OJS dan judul makalah
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-700">
                  Khusus bagi peserta pemakalah yang abstraknya telah diterima
                  panitia, siapkan ID penyerahan naskah OJS dan judul lengkap
                  makalah yang diajukan.
                </p>
              </article>

              <article className="border-t-2 border-terracotta bg-white p-6 sm:p-7">
                <p className="text-xs font-bold tracking-[0.12em] uppercase text-kreadika-700">
                  02 / Maksimal 5 MB
                </p>
                <h3 className="mt-3 font-display text-xl font-bold text-kreadika-950">
                  Bukti pembayaran
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-700">
                  Bukti pembayaran berupa file JPG, PNG, atau PDF (maksimal 5
                  MB) yang sah dan terbaca jelas untuk verifikasi sekretariat.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <ClosingBand
        eyebrow="Bantuan Registrasi"
        title="Ada pertanyaan seputar pendaftaran?"
        description="Hubungi sekretariat KREADIKA melalui surel resmi untuk bantuan teknis maupun konfirmasi pembayaran."
        primaryAction={{
          label: `Kirim surel ke ${SITE_INFO.email}`,
          href: `mailto:${SITE_INFO.email}`,
        }}
        secondaryAction={{
          label: "Lihat biaya dan alur daftar",
          href: "/pendaftaran",
        }}
        onNavigate={onNavigate}
      />
    </main>
  );
}

export default PendaftaranOnline;
