import { PageHero } from "../components/SymposiumUI";
import { SITE_INFO } from "../data/kreadikaData";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import { handleNavClick } from "../utils/navigation";

function Kontak({ onNavigate }) {
  const pageRef = useRevealOnScroll();

  return (
    <main
      id="kontak-kreadika"
      ref={pageRef}
      className="font-editorial overflow-x-clip bg-white text-kreadika-950"
    >
      <PageHero
        sectionLabel="Kontak & Sekretariat"
        title="Hubungi Sekretariat KREADIKA"
        description="Sekretariat KREADIKA siap membantu pertanyaan tentang makalah, pendaftaran, dan kerja sama kemitraan."
        onNavigate={onNavigate}
      />

      {/* Sekretariat */}
      <section className="bg-white">
        <div className="home-reveal mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <p className="text-xs font-bold tracking-[0.14em] uppercase text-terracotta">
                Sekretariat
              </p>
              <h2
                className="mt-3 font-display font-bold tracking-[-0.02em] text-kreadika-950"
                style={{
                  fontSize: "clamp(1.75rem, 3vw, 2.4rem)",
                  lineHeight: 1.12,
                }}
              >
                Alamat dan Kontak Resmi
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-8">
              <article className="border-t-2 border-kreadika-950 bg-paper p-6 sm:p-7">
                <p className="text-xs font-bold tracking-[0.12em] uppercase text-kreadika-700">
                  Alamat kantor
                </p>
                <h3 className="mt-3 font-display text-xl font-bold text-kreadika-950">
                  {SITE_INFO.organizer}
                </h3>
                <address className="mt-3 not-italic text-sm leading-relaxed text-slate-700">
                  {SITE_INFO.addressLine1}
                  <br />
                  {SITE_INFO.addressLine2}
                </address>
              </article>

              <article className="border-t-2 border-terracotta bg-paper p-6 sm:p-7">
                <p className="text-xs font-bold tracking-[0.12em] uppercase text-terracotta">
                  Kontak langsung
                </p>
                <dl className="mt-4 space-y-4 text-sm">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-slate-700">
                      Surel resmi
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={`mailto:${SITE_INFO.email}`}
                        className="inline-flex min-h-11 items-center font-bold text-kreadika-700 underline decoration-kreadika-700/35 underline-offset-4 transition-colors duration-200 hover:text-terracotta hover:decoration-terracotta"
                      >
                        {SITE_INFO.email}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-slate-700">
                      WhatsApp
                    </dt>
                    <dd className="mt-1 font-bold text-kreadika-950">
                      {SITE_INFO.whatsapp}
                    </dd>
                  </div>
                </dl>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Unduhan Dokumen */}
      <section className="border-y border-paper-line bg-paper">
        <div className="home-reveal mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[0.14em] uppercase text-kreadika-700">
              Unduhan
            </p>
            <h2
              className="mt-3 font-display font-bold tracking-[-0.02em] text-kreadika-950"
              style={{
                fontSize: "clamp(1.75rem, 3vw, 2.45rem)",
                lineHeight: 1.12,
              }}
            >
              Dokumen dan Berkas Resmi
            </h2>
            <p className="mt-2 text-sm text-slate-700 sm:text-base">
              Template makalah dan poster call for papers KREADIKA 2027.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <article className="flex flex-col justify-between border border-paper-line bg-white p-6 sm:p-8">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <p className="text-xs font-bold tracking-[0.12em] uppercase text-kreadika-700">
                    Format Makalah
                  </p>
                  <span className="bg-paper px-2.5 py-1 text-xs font-semibold text-slate-700">
                    [segera tersedia]
                  </span>
                </div>
                <h3 className="mt-3 font-display text-xl font-bold text-kreadika-950">
                  Template makalah KREADIKA 2027
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  Berkas template sedang difinalisasi. Sambil menunggu, Anda
                  dapat membaca pedoman penulisan lengkap.
                </p>
              </div>
              <div className="mt-6">
                <a
                  href="/call-for-papers#ketentuan"
                  onClick={(e) =>
                    handleNavClick(e, "/call-for-papers#ketentuan", onNavigate)
                  }
                  className="inline-flex min-h-11 items-center justify-center rounded-md bg-kreadika-950 px-5 py-2.5 text-sm font-bold text-white transition-colors duration-200 hover:bg-kreadika-700 active:scale-[0.99]"
                >
                  Baca ketentuan makalah
                </a>
              </div>
            </article>

            <article className="flex flex-col justify-between border border-paper-line bg-white p-6 sm:p-8">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <p className="text-xs font-bold tracking-[0.12em] uppercase text-kreadika-700">
                    Publikasi
                  </p>
                  <span className="bg-paper px-2.5 py-1 text-xs font-semibold text-slate-700">
                    [segera tersedia]
                  </span>
                </div>
                <h3 className="mt-3 font-display text-xl font-bold text-kreadika-950">
                  Poster Call for Papers
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  Poster resmi untuk dibagikan di institusi atau komunitas
                  pendidik akan tersedia di sini.
                </p>
              </div>
              <div className="mt-6">
                <button
                  type="button"
                  disabled
                  className="inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 bg-paper px-5 py-2.5 text-sm font-semibold text-slate-700"
                >
                  Poster Segera Tersedia
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Media Sosial (High-Contrast Closing Band) */}
      <section className="home-surface-dark border-t border-white/15 bg-kreadika-700 text-white">
        <div className="home-reveal mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <p className="text-xs font-bold tracking-[0.14em] uppercase text-kreadika-100">
                Kanal Resmi
              </p>
              <h2
                className="mt-3 font-display font-bold tracking-[-0.02em] text-white"
                style={{
                  fontSize: "clamp(1.75rem, 3vw, 2.45rem)",
                  lineHeight: 1.12,
                }}
              >
                Media Sosial KREADIKA
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-kreadika-100 sm:text-base">
                Pembaruan jadwal, pembicara, dan publikasi akan diumumkan
                melalui kanal resmi berikut.
              </p>
            </div>

            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-6">
              <div className="border border-white/25 bg-kreadika-950/35 px-6 py-5">
                <dt className="text-xs font-bold tracking-[0.12em] uppercase text-kreadika-100">
                  Instagram
                </dt>
                <dd className="mt-1.5 font-display text-lg font-bold text-white">
                  [@akun]
                </dd>
              </div>
              <div className="border border-white/25 bg-kreadika-950/35 px-6 py-5">
                <dt className="text-xs font-bold tracking-[0.12em] uppercase text-kreadika-100">
                  YouTube
                </dt>
                <dd className="mt-1.5 font-display text-lg font-bold text-white">
                  [kanal]
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Kontak;
