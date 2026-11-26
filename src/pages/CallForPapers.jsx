import {
  ClosingBand,
  PageHero,
  TimelineBand,
} from "../components/SymposiumUI";
import { RUANG_LINGKUP, SITE_INFO } from "../data/kreadikaData";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import { handleNavClick } from "../utils/navigation";

const JENIS_ARTIKEL = [
  {
    no: "01",
    kategori: "Empiris dan Riset",
    title: "Artikel Hasil Penelitian",
    desc: "Artikel yang bersumber dari hasil penelitian empiris, tindakan kelas, riset kuantitatif, kualitatif, atau metode campuran di berbagai jenjang satuan pendidikan.",
  },
  {
    no: "02",
    kategori: "Konseptual dan Teori",
    title: "Artikel Kajian Konseptual / Tinjauan Pustaka",
    desc: "Artikel berupa gagasan pemikiran teoritis, tinjauan pustaka kritis (literature review), sintesis konseptual baru, atau analisis kebijakan pendidikan.",
  },
  {
    no: "03",
    kategori: "Best Practice Sekolah",
    title: "Artikel Praktik Baik (Best Practice)",
    desc: "Artikel yang mendokumentasikan implementasi praktik baik inovatif dari sekolah atau satuan pendidikan yang berdampak nyata bagi mutu pembelajaran.",
  },
];

const KETENTUAN_UMUM = [
  {
    label: "Bahasa",
    value: "Bahasa Indonesia atau Inggris",
    note: "Ditulis dengan tata bahasa baku dan efektif",
  },
  {
    label: "Panjang naskah",
    value: "8 hingga 12 halaman, kertas A4",
    note: "Mengikuti template resmi KREADIKA",
  },
  {
    label: "Tipografi dan spasi",
    value: "Times New Roman 12, spasi 1,15",
    note: "Margin dan format teks proporsional",
  },
  {
    label: "Gaya sitasi",
    value: "APA Edisi ke-7",
    note: "Menggunakan Mendeley atau Zotero",
  },
  {
    label: "Daftar pustaka",
    value: "Minimal 15 rujukan",
    note: "80% terbit dalam 10 tahun terakhir",
  },
  {
    label: "Kemiripan dan sistem",
    value: "Similarity maksimal 20%",
    note: "Dikirim melalui sistem OJS prosiding KREADIKA",
  },
];

const SISTEMATIKA_PENELITIAN = [
  "Judul (maksimal 15 kata)",
  "Nama penulis, afiliasi, dan email",
  "Abstrak (150 hingga 250 kata) dan kata kunci (3 hingga 5 kata)",
  "Pendahuluan",
  "Metode",
  "Hasil dan Pembahasan",
  "Simpulan dan Saran",
  "Ucapan Terima Kasih (opsional)",
  "Daftar Pustaka",
];

const SISTEMATIKA_PRAKTIK_BAIK = [
  "Latar Belakang Masalah",
  "Deskripsi Praktik Baik",
  "Hasil dan Dampak",
  "Refleksi dan Rekomendasi",
  "Daftar Pustaka",
];

const ALUR_PENGIRIMAN = [
  {
    step: "01",
    title: "Buat Akun OJS",
    desc: "Buat akun di sistem OJS prosiding KREADIKA.",
  },
  {
    step: "02",
    title: "Kirim Abstrak",
    desc: "Kirim abstrak dan pilih ruang lingkup topik yang sesuai.",
  },
  {
    step: "03",
    title: "Pendaftaran Pemakalah",
    desc: "Setelah abstrak diterima, lakukan pendaftaran dan pembayaran sebagai pemakalah.",
  },
  {
    step: "04",
    title: "Unggah Artikel Lengkap",
    desc: "Unggah artikel lengkap sesuai template sebelum batas waktu untuk direview dan diterbitkan dalam prosiding.",
  },
];

function CallForPapers({ onNavigate }) {
  const pageRef = useRevealOnScroll();

  return (
    <main
      id="call-for-papers"
      ref={pageRef}
      className="font-editorial overflow-x-clip bg-white text-kreadika-950"
    >
      <PageHero
        sectionLabel="Call for Papers"
        title="Call for Papers KREADIKA"
        description="Tema: Pendidikan Kreatif dan Adaptif di Era Digital. Kami mengundang artikel hasil penelitian, kajian konseptual, dan praktik baik."
        onNavigate={onNavigate}
        aside={
          <dl className="divide-y divide-white/15">
            <div className="pb-3.5">
              <dt className="text-xs font-semibold tracking-[0.12em] uppercase text-kreadika-mist">
                Waktu pelaksanaan
              </dt>
              <dd className="mt-1 font-display text-lg font-bold text-white">
                [tanggal pelaksanaan]
              </dd>
            </div>
            <div className="py-3.5">
              <dt className="text-xs font-semibold tracking-[0.12em] uppercase text-kreadika-mist">
                Tempat
              </dt>
              <dd className="mt-1 text-sm font-semibold text-white">
                [lokasi], hibrid (luring &amp; daring)
              </dd>
            </div>
            <div className="pt-3.5">
              <dt className="text-xs font-semibold tracking-[0.12em] uppercase text-kreadika-mist">
                Co-host
              </dt>
              <dd className="mt-1 text-sm text-kreadika-mist">
                [perguruan tinggi / organisasi profesi]
              </dd>
            </div>
          </dl>
        }
      />

      {/* Undangan & Jenis Artikel */}
      <section id="undangan" className="bg-white">
        <div className="home-reveal mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <p className="text-xs font-bold tracking-[0.14em] uppercase text-terracotta">
                Undangan Terbuka
              </p>
              <h2
                className="mt-3 font-display font-bold tracking-[-0.02em] text-kreadika-950"
                style={{
                  fontSize: "clamp(1.75rem, 3vw, 2.45rem)",
                  lineHeight: 1.12,
                }}
              >
                Undangan Pengiriman Makalah KREADIKA
              </h2>
            </div>

            <div className="space-y-4 text-base leading-relaxed text-slate-700 lg:col-span-7">
              <p>
                Panitia{" "}
                <strong className="font-semibold text-kreadika-950">
                  KREADIKA
                </strong>{" "}
                mengundang guru, tenaga kependidikan, pengawas sekolah, kepala
                sekolah, pemangku kebijakan pendidikan, dosen, peneliti, dan
                mahasiswa untuk menyumbangkan artikel hasil penelitian, kajian
                konseptual, atau praktik baik sesuai ruang lingkup topik
                seminar.
              </p>
              <p>
                Seminar ini diselenggarakan oleh {SITE_INFO.organizer} sebagai
                ruang kolaborasi ilmiah nasional untuk menyebarluaskan gagasan,
                temuan empiris, serta solusi praktis dalam mendidik manusia di
                tengah perubahan era digital.
              </p>
            </div>
          </div>

          <div className="mt-14 border-t border-slate-200 pt-12">
            <h3 className="font-display text-2xl font-bold text-kreadika-950">
              Jenis Artikel yang Diterima
            </h3>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              {JENIS_ARTIKEL.map((artikel) => (
                <article
                  key={artikel.no}
                  className="border-t-2 border-kreadika-950 bg-paper p-6"
                >
                  <p className="text-xs font-bold tracking-[0.12em] uppercase text-terracotta">
                    {artikel.no} / {artikel.kategori}
                  </p>
                  <h4 className="mt-3 font-display text-lg font-bold text-kreadika-950">
                    {artikel.title}
                  </h4>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-700">
                    {artikel.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ruang Lingkup Topik (DRY shared data) */}
      <section id="topik" className="border-y border-paper-line bg-paper">
        <div className="home-reveal mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4 lg:sticky lg:top-24 lg:self-start">
              <p className="text-xs font-bold tracking-[0.14em] uppercase text-terracotta">
                Subtema Kajian
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
                Makalah yang dikirimkan dapat mencakup salah satu dari tujuh
                ruang lingkup kajian seminar berikut.
              </p>
            </div>

            <ol className="divide-y divide-paper-line border-t border-b border-paper-line lg:col-span-8">
              {RUANG_LINGKUP.map((item) => (
                <li
                  key={item.no}
                  className="grid grid-cols-1 gap-2 py-5 sm:grid-cols-12 sm:items-baseline sm:gap-4"
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
        heading="Tanggal Penting"
        showCta={false}
        onNavigate={onNavigate}
      />

      {/* Luaran Artikel */}
      <section id="luaran" className="bg-white">
        <div className="home-reveal mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[0.14em] uppercase text-kreadika-700">
              Luaran Seminar
            </p>
            <h2
              className="mt-3 font-display font-bold tracking-[-0.02em] text-kreadika-950"
              style={{
                fontSize: "clamp(1.75rem, 3vw, 2.45rem)",
                lineHeight: 1.12,
              }}
            >
              Publikasi dan Luaran Artikel
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
            <article className="flex flex-col justify-between border-t-2 border-kreadika-950 bg-paper p-6 sm:p-8 lg:col-span-7">
              <div>
                <p className="text-xs font-bold tracking-[0.12em] uppercase text-kreadika-700">
                  Luaran utama pemakalah
                </p>
                <h3 className="mt-3 font-display text-2xl font-bold text-kreadika-950">
                  Prosiding KREADIKA
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
                  Artikel terpilih diterbitkan dalam Prosiding KREADIKA
                  oleh {SITE_INFO.organizer} (ber-ISSN dan ber-DOI).
                </p>
              </div>
              <div className="mt-6 border-t border-paper-line pt-4">
                <a
                  href="/prosiding"
                  onClick={(e) => handleNavClick(e, "/prosiding", onNavigate)}
                  className="inline-flex min-h-11 items-center border-b-2 border-kreadika-950 pb-1 text-sm font-bold text-kreadika-950 transition-colors duration-200 hover:border-terracotta hover:text-terracotta"
                >
                  Lihat informasi prosiding
                </a>
              </div>
            </article>

            <div className="flex flex-col divide-y divide-slate-200 border-t border-slate-200 lg:col-span-5">
              <article className="py-5 first:pt-0">
                <h3 className="font-display text-lg font-bold text-kreadika-950">
                  Rekomendasi Jurnal Mitra
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  Artikel terbaik direkomendasikan ke jurnal mitra:{" "}
                  <span className="font-semibold text-kreadika-950">
                    [nama jurnal]
                  </span>{" "}
                  untuk proses penerbitan berkala ilmiah.
                </p>
                <a
                  href="/mitra"
                  onClick={(e) => handleNavClick(e, "/mitra", onNavigate)}
                  className="mt-3 inline-flex min-h-11 items-center text-sm font-bold text-kreadika-700 underline decoration-kreadika-700/35 underline-offset-4 hover:text-terracotta hover:decoration-terracotta"
                >
                  Lihat daftar mitra
                </a>
              </article>

              <article className="pt-5">
                <h3 className="font-display text-lg font-bold text-kreadika-950">
                  Sertifikat Resmi
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  Sertifikat pemakalah dan peserta seminar resmi dari
                  penyelenggara dan co-host seminar nasional.
                </p>
                <a
                  href="/pendaftaran"
                  onClick={(e) => handleNavClick(e, "/pendaftaran", onNavigate)}
                  className="mt-3 inline-flex min-h-11 items-center text-sm font-bold text-kreadika-700 underline decoration-kreadika-700/35 underline-offset-4 hover:text-terracotta hover:decoration-terracotta"
                >
                  Lihat informasi kepesertaan
                </a>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Ketentuan Makalah */}
      <section id="ketentuan" className="border-y border-paper-line bg-paper">
        <div className="home-reveal mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[0.14em] uppercase text-terracotta">
              Pedoman Penulisan
            </p>
            <h2
              className="mt-3 font-display font-bold tracking-[-0.02em] text-kreadika-950"
              style={{
                fontSize: "clamp(1.75rem, 3vw, 2.45rem)",
                lineHeight: 1.12,
              }}
            >
              Ketentuan Makalah
            </h2>
          </div>

          <dl className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {KETENTUAN_UMUM.map((item) => (
              <div
                key={item.label}
                className="border border-paper-line bg-white p-5"
              >
                <dt className="text-xs font-bold tracking-[0.12em] uppercase text-kreadika-700">
                  {item.label}
                </dt>
                <dd className="mt-2 font-display text-base font-bold text-kreadika-950">
                  {item.value}
                </dd>
                <dd className="mt-1 text-xs leading-relaxed text-slate-700">
                  {item.note}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <article className="border-t-2 border-kreadika-950 bg-white p-6 sm:p-8">
              <h3 className="font-display text-xl font-bold text-kreadika-950">
                Sistematika: Artikel Penelitian dan Konseptual
              </h3>
              <ol className="mt-5 space-y-2.5 text-sm text-slate-700">
                {SISTEMATIKA_PENELITIAN.map((step, idx) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="font-display font-bold tabular-nums text-terracotta">
                      0{idx + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </article>

            <article className="flex flex-col justify-between border-t-2 border-terracotta bg-white p-6 sm:p-8">
              <div>
                <h3 className="font-display text-xl font-bold text-kreadika-950">
                  Sistematika: Artikel Praktik Baik (Best Practice)
                </h3>
                <ol className="mt-5 space-y-2.5 text-sm text-slate-700">
                  {SISTEMATIKA_PRAKTIK_BAIK.map((step, idx) => (
                    <li key={step} className="flex items-start gap-3">
                      <span className="font-display font-bold tabular-nums text-terracotta">
                        0{idx + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <p className="mt-6 border-t border-slate-200 pt-4 text-xs leading-relaxed text-slate-700">
                Format naskah praktik baik memfasilitasi pendidik dan praktisi
                untuk mendokumentasikan terobosan nyata pembelajaran secara
                ilmiah dan aplikatif.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Cara Mengirim & Independensi Review */}
      <section id="cara-mengirim" className="bg-white">
        <div className="home-reveal mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[0.14em] uppercase text-kreadika-700">
              Alur Pengiriman
            </p>
            <h2
              className="mt-3 font-display font-bold tracking-[-0.02em] text-kreadika-950"
              style={{
                fontSize: "clamp(1.75rem, 3vw, 2.45rem)",
                lineHeight: 1.12,
              }}
            >
              Cara Mengirim Makalah
            </h2>
          </div>

          <ol className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ALUR_PENGIRIMAN.map((item) => (
              <li
                key={item.step}
                className="border-t-2 border-kreadika-950 pt-5"
              >
                <span className="font-display text-sm font-extrabold tabular-nums text-terracotta">
                  {item.step}
                </span>
                <h3 className="mt-2 font-display text-lg font-bold text-kreadika-950">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  {item.desc}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-12 border-l-2 border-kreadika-950 bg-paper p-6 sm:p-8">
            <h3 className="font-display text-lg font-bold text-kreadika-950">
              Independensi dan Integritas Review Ilmiah
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-700 sm:text-base">
              Review dilakukan oleh Komite Ilmiah dari beberapa perguruan tinggi
              yang berbeda. Biaya pendaftaran tidak memengaruhi keputusan
              review. Penilaian artikel dilakukan secara objektif berdasarkan
              kualitas ilmiah, kebaruan ide, dan relevansi topik.
            </p>
          </div>
        </div>
      </section>

      <ClosingBand
        id="kirim"
        eyebrow="Pengiriman Naskah"
        title="Siap mengirim abstrak?"
        description="Sistem pengiriman OJS dibuka bersamaan dengan pengumuman resmi call for papers KREADIKA."
        primaryAction={{ label: "Sistem OJS Segera Dibuka", disabled: true }}
        secondaryAction={{
          label: "Lihat halaman unduhan & kontak",
          href: "/kontak",
        }}
        onNavigate={onNavigate}
      />
    </main>
  );
}

export default CallForPapers;
