import {
  ClosingBand,
  RoadmapSwitcher,
  TimelineBand,
} from "../components/SymposiumUI";
import { RUANG_LINGKUP, SITE_INFO } from "../data/kreadikaData";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import { handleNavClick } from "../utils/navigation";

function Home({ onNavigate }) {
  const pageRef = useRevealOnScroll();

  return (
    <main
      id="beranda"
      ref={pageRef}
      className="font-editorial overflow-x-clip bg-white text-kreadika-950"
    >
      {/* Hero: full-bleed high-contrast symposium stage */}
      <section className="home-surface-dark bg-kreadika-950 text-white">
        <div className="mx-auto max-w-6xl px-4 pt-12 pb-14 sm:px-6 sm:pt-18 sm:pb-20 lg:px-8 lg:pt-22 lg:pb-24">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-8">
              <h1
                className="font-display font-extrabold tracking-[-0.03em] text-white"
                style={{
                  fontSize: "clamp(2.4rem, 5.8vw, 4.75rem)",
                  lineHeight: 1.03,
                }}
              >
                Pendidikan Kreatif dan Adaptif di Era Digital
              </h1>

              <p className="mt-6 max-w-2xl text-lg font-medium text-amber-accent sm:text-xl">
                “{SITE_INFO.tagline}”
              </p>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-kreadika-mist sm:text-lg">
                Forum nasional bagi guru, pengawas, kepala sekolah, pemangku
                kebijakan, dosen, dan mahasiswa pendidikan untuk berbagi
                gagasan, hasil penelitian, dan praktik baik dari lapangan.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                <a
                  href="/call-for-papers#kirim"
                  onClick={(e) =>
                    handleNavClick(e, "/call-for-papers#kirim", onNavigate)
                  }
                  className="inline-  flex min-h-12 items-center justify-center rounded-md bg-amber-accent px-7 py-3 text-sm font-bold text-kreadika-950 transition-colors duration-200 hover:bg-amber-hover active:scale-[0.99]"
                >
                  Kirim Abstrak
                </a>
                <a
                  href="/pendaftaran"
                  onClick={(e) => handleNavClick(e, "/pendaftaran", onNavigate)}
                  className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/40 bg-transparent px-7 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:border-white hover:bg-white/10 active:scale-[0.99]"
                >
                  Daftar Seminar
                </a>
                <a
                  href="#tanggal-penting"
                  className="inline-flex min-h-11 items-center justify-center px-2 py-2 text-sm font-semibold text-kreadika-mist underline decoration-white/35 underline-offset-4 transition-colors duration-200 hover:text-white hover:decoration-amber-accent sm:ml-2 sm:justify-start"
                >
                  Lihat tanggal penting
                </a>
              </div>
            </div>

            <aside
              aria-label="Informasi pelaksanaan seminar"
              className="flex flex-col justify-between border-t border-white/20 pt-8 lg:col-span-4 lg:border-t-0 lg:border-l lg:border-white/20 lg:pt-0 lg:pl-8"
            >
              <dl className="divide-y divide-white/15">
                <div className="pb-5">
                  <dt className="text-xs font-semibold tracking-[0.12em] uppercase text-kreadika-mist">
                    Waktu pelaksanaan
                  </dt>
                  <dd className="mt-1.5 font-display text-xl font-bold text-white">
                    [tanggal pelaksanaan]
                  </dd>
                  <dd className="mt-1 text-sm text-kreadika-mist">
                    Luring dan daring (hibrid)
                  </dd>
                </div>

                <div className="py-5">
                  <dt className="text-xs font-semibold tracking-[0.12em] uppercase text-kreadika-mist">
                    Lokasi
                  </dt>
                  <dd className="mt-1.5 font-display text-xl font-bold text-white">
                    [lokasi]
                  </dd>
                  <dd className="mt-1 text-sm text-kreadika-mist">
                    Peserta daring bergabung dari seluruh Indonesia
                  </dd>
                </div>

                <div className="pt-5">
                  <dt className="text-xs font-semibold tracking-[0.12em] uppercase text-kreadika-mist">
                    Penyelenggara
                  </dt>
                  <dd className="mt-1.5 text-base font-semibold text-white">
                    {SITE_INFO.organizer}
                  </dd>
                </div>
              </dl>
            </aside>
          </div>
        </div>
      </section>

      {/* Editorial Manifesto: Tentang KREADIKA */}
      <section id="tentang" className="border-b border-paper-line bg-paper">
        <div className="home-reveal mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-6">
              <p className="text-xs font-bold tracking-[0.14em] uppercase text-terracotta">
                Tentang KREADIKA
              </p>
              <h2
                className="mt-4 font-display font-bold tracking-[-0.02em] text-kreadika-950"
                style={{
                  fontSize: "clamp(1.75rem, 3.2vw, 2.65rem)",
                  lineHeight: 1.12,
                }}
              >
                Teknologi untuk memperkuat peran manusia dalam pendidikan, bukan
                menggantikannya.
              </h2>

              <div className="mt-8 border-t border-kreadika-950/20 pt-6">
                <p className="text-xs font-semibold tracking-[0.1em] uppercase text-slate-700">
                  Asal nama KREADIKA
                </p>
                <p className="mt-2 font-display text-2xl font-bold tracking-tight text-kreadika-950 sm:text-3xl">
                  <span className="text-terracotta">KREA</span>tif ·{" "}
                  <span className="text-terracotta">AD</span>aptif · pend
                  <span className="text-terracotta">IDIKA</span>n
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between space-y-5 text-base leading-relaxed text-slate-700 lg:col-span-6 lg:pt-8">
              <div className="space-y-4">
                <p>
                  KREADIKA adalah seminar nasional tahunan yang diselenggarakan
                  secara luring dan daring. Forum ini mempertemukan peneliti,
                  praktisi sekolah, dan pengambil kebijakan dalam satu ruang
                  diskusi yang membumi.
                </p>
                <p>
                  Seminar ini menegaskan bahwa perubahan, termasuk perkembangan
                  teknologi digital dan kecerdasan artifisial, harus
                  dimanfaatkan untuk memperkuat peran manusia dalam pendidikan.
                  Arah ini sejalan dengan cita-cita Indonesia Emas 2045,
                  pembelajaran mendalam, dan Kurikulum Merdeka.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="/tentang"
                  onClick={(e) => handleNavClick(e, "/tentang", onNavigate)}
                  className="inline-flex min-h-11 items-center border-b-2 border-kreadika-950 pb-1 text-sm font-bold text-kreadika-950 transition-colors duration-200 hover:border-terracotta hover:text-terracotta"
                >
                  Baca profil lengkap KREADIKA
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call for Papers: 7 Subthemes as an Editorial Symposium Index */}
      <section id="call-for-papers" className="bg-white">
        <div className="home-reveal mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4 lg:sticky lg:top-24 lg:self-start">
              <p className="text-xs font-bold tracking-[0.14em] uppercase text-kreadika-700">
                Call for Papers
              </p>
              <h2
                className="mt-3 font-display font-bold tracking-[-0.02em] text-kreadika-950"
                style={{
                  fontSize: "clamp(1.75rem, 3vw, 2.4rem)",
                  lineHeight: 1.12,
                }}
              >
                Ruang Lingkup Topik
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-700 sm:text-base">
                Makalah hasil penelitian, kajian konseptual, maupun praktik baik
                sekolah dapat mengacu pada salah satu dari tujuh subtema kajian
                berikut.
              </p>

              <div className="mt-7 flex flex-col items-start gap-3">
                <a
                  href="/call-for-papers"
                  onClick={(e) =>
                    handleNavClick(e, "/call-for-papers", onNavigate)
                  }
                  className="inline-flex min-h-11 items-center justify-center rounded-md bg-kreadika-950 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-kreadika-700 active:scale-[0.99]"
                >
                  Buka panduan naskah
                </a>
                <a
                  href="/call-for-papers#kirim"
                  onClick={(e) =>
                    handleNavClick(e, "/call-for-papers#kirim", onNavigate)
                  }
                  className="inline-flex min-h-11 items-center text-sm font-bold text-kreadika-700 underline decoration-kreadika-700/35 underline-offset-4 transition-colors duration-200 hover:text-terracotta hover:decoration-terracotta"
                >
                  Langsung ke formulir abstrak
                </a>
              </div>
            </div>

            <ol className="divide-y divide-slate-200 border-t border-b border-slate-200 lg:col-span-8">
              {RUANG_LINGKUP.map((item) => (
                <li
                  key={item.no}
                  className="grid grid-cols-1 gap-2 py-5 transition-colors duration-200 hover:bg-paper/60 sm:grid-cols-12 sm:items-baseline sm:gap-4 sm:px-4 sm:py-6"
                >
                  <span className="font-display text-sm font-extrabold tabular-nums text-terracotta sm:col-span-2 sm:text-base">
                    {item.no}
                  </span>
                  <h3 className="font-display text-lg font-bold text-kreadika-950 sm:col-span-4">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-700 sm:col-span-6">
                    {item.desc}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Shared DRY Timeline Band */}
      <TimelineBand
        id="tanggal-penting"
        heading="Tanggal Penting KREADIKA"
        showCta
        onNavigate={onNavigate}
      />

      {/* Luaran Artikel, Fasilitas Peserta, dan Mitra Co-host */}
      <section id="prosiding" className="border-b border-paper-line bg-paper">
        <div className="home-reveal mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[0.14em] uppercase text-terracotta">
              Publikasi dan Kepesertaan
            </p>
            <h2
              className="mt-3 font-display font-bold tracking-[-0.02em] text-kreadika-950"
              style={{
                fontSize: "clamp(1.75rem, 3.2vw, 2.5rem)",
                lineHeight: 1.12,
              }}
            >
              Luaran Artikel dan Fasilitas Peserta
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
            <article className="flex flex-col justify-between border-t-2 border-kreadika-950 bg-white p-6 sm:p-8 lg:col-span-7">
              <div>
                <p className="text-xs font-bold tracking-[0.12em] uppercase text-kreadika-700">
                  Luaran utama pemakalah
                </p>
                <h3 className="mt-3 font-display text-2xl font-bold text-kreadika-950 sm:text-3xl">
                  Prosiding ber-ISSN dan ber-DOI
                </h3>
                <p className="mt-4 text-base leading-relaxed text-slate-700">
                  Artikel terpilih diterbitkan dalam Prosiding KREADIKA
                  oleh {SITE_INFO.organizer} dengan nomor ISSN dan DOI sehingga
                  mudah dirujuk secara akademik.
                </p>
              </div>

              <div className="mt-8 border-t border-slate-200 pt-5">
                <a
                  href="/prosiding"
                  onClick={(e) => handleNavClick(e, "/prosiding", onNavigate)}
                  className="inline-flex min-h-11 items-center border-b-2 border-kreadika-950 pb-1 text-sm font-bold text-kreadika-950 transition-colors duration-200 hover:border-terracotta hover:text-terracotta"
                >
                  Lihat informasi prosiding
                </a>
              </div>
            </article>

            <div className="flex flex-col divide-y divide-paper-line border-t border-paper-line lg:col-span-5">
              <article className="py-6 first:pt-0">
                <h3 className="font-display text-xl font-bold text-kreadika-950">
                  Jurnal mitra
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700 sm:text-base">
                  Artikel terbaik direkomendasikan untuk diterbitkan di jurnal
                  mitra:{" "}
                  <span className="font-semibold text-kreadika-950">
                    [nama jurnal]
                  </span>
                  .
                </p>
                <a
                  href="/mitra"
                  onClick={(e) => handleNavClick(e, "/mitra", onNavigate)}
                  className="mt-4 inline-flex min-h-11 items-center text-sm font-bold text-kreadika-700 underline decoration-kreadika-700/35 underline-offset-4 transition-colors duration-200 hover:text-terracotta hover:decoration-terracotta"
                >
                  Lihat daftar mitra
                </a>
              </article>

              <article className="pt-6">
                <h3 className="font-display text-xl font-bold text-kreadika-950">
                  Sertifikat elektronik
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700 sm:text-base">
                  Pemakalah dan peserta non-pemakalah menerima sertifikat
                  elektronik resmi seusai kegiatan.
                </p>
                <a
                  href="/pendaftaran"
                  onClick={(e) => handleNavClick(e, "/pendaftaran", onNavigate)}
                  className="mt-4 inline-flex min-h-11 items-center text-sm font-bold text-kreadika-700 underline decoration-kreadika-700/35 underline-offset-4 transition-colors duration-200 hover:text-terracotta hover:decoration-terracotta"
                >
                  Lihat biaya dan cara mendaftar
                </a>
              </article>
            </div>
          </div>

          <div id="mitra" className="mt-14 border-t border-paper-line pt-8">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                <p className="shrink-0 text-xs font-bold tracking-[0.12em] uppercase text-slate-700">
                  Co-host dan Mitra
                </p>
                <ul className="flex flex-wrap gap-3">
                  <li className="border border-paper-line bg-white px-4 py-2 text-xs font-semibold text-slate-700">
                    [logo co-host]
                  </li>
                  <li className="border border-paper-line bg-white px-4 py-2 text-xs font-semibold text-slate-700">
                    [logo co-host]
                  </li>
                  <li className="border border-paper-line bg-white px-4 py-2 text-xs font-semibold text-slate-700">
                    [logo organisasi profesi]
                  </li>
                </ul>
              </div>
              <a
                href="/mitra"
                onClick={(e) => handleNavClick(e, "/mitra", onNavigate)}
                className="inline-flex min-h-11 shrink-0 items-center text-sm font-bold text-kreadika-700 underline decoration-kreadika-700/35 underline-offset-4 transition-colors duration-200 hover:text-terracotta hover:decoration-terracotta"
              >
                Pelajari peluang kemitraan
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Shared DRY 5-Year Roadmap */}
      <RoadmapSwitcher id="peta-jalan" bgClass="bg-white" />

      {/* Shared DRY Closing Band */}
      <ClosingBand
        id="kirim-abstrak"
        eyebrow="Call for Papers KREADIKA"
        title="Bagikan praktik baik dan hasil penelitian Anda"
        description="Kami mengundang artikel hasil penelitian, kajian konseptual, dan praktik baik dari sekolah maupun satuan pendidikan di seluruh Indonesia."
        primaryAction={{
          label: "Kirim Abstrak",
          href: "/call-for-papers#kirim",
        }}
        secondaryAction={{
          label: "Baca Ketentuan Makalah",
          href: "/call-for-papers",
        }}
        onNavigate={onNavigate}
      />
    </main>
  );
}

export default Home;
