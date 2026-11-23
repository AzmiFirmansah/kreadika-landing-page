import { ClosingBand, PageHero } from "../components/SymposiumUI";
import { SITE_INFO } from "../data/kreadikaData";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

const CO_HOST_LIST = [
  { nama: "[Nama perguruan tinggi]", kategori: "Perguruan tinggi" },
  { nama: "[Nama perguruan tinggi]", kategori: "Perguruan tinggi" },
  { nama: "[Nama organisasi profesi]", kategori: "Organisasi profesi" },
];

const JURNAL_MITRA_LIST = [
  { nama: "[Nama jurnal]", kategori: "Jurnal mitra" },
  { nama: "[Nama jurnal]", kategori: "Jurnal mitra" },
];

const BENTUK_KERJA_SAMA = [
  {
    no: "01",
    judul: "Co-host",
    deskripsi:
      "Perguruan tinggi (misalnya FKIP) atau organisasi profesi (misalnya PGRI atau Asosiasi Dosen Indonesia) ikut menyelenggarakan, menyebarkan informasi, dan menempatkan perwakilan di Komite Ilmiah.",
  },
  {
    no: "02",
    judul: "Jurnal mitra",
    deskripsi:
      "Menerima rekomendasi artikel terbaik dari KREADIKA melalui proses review jurnal mitra tersebut.",
  },
  {
    no: "03",
    judul: "Sponsor",
    deskripsi: "Lembaga yang mendukung penyelenggaraan seminar nasional.",
  },
];

function Mitra({ onNavigate }) {
  const pageRef = useRevealOnScroll();

  return (
    <main
      id="mitra-kreadika"
      ref={pageRef}
      className="font-editorial overflow-x-clip bg-white text-kreadika-950"
    >
      <PageHero
        sectionLabel="Mitra & Kerja Sama"
        title="Mitra KREADIKA 2027"
        description="Perguruan tinggi, organisasi profesi, dan jurnal yang bekerja sama dalam penyelenggaraan KREADIKA."
        onNavigate={onNavigate}
      />

      {/* Co-host */}
      <section className="bg-white">
        <div className="home-reveal mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[0.14em] uppercase text-kreadika-700">
              Mitra Penyelenggara
            </p>
            <h2
              className="mt-3 font-display font-bold tracking-[-0.02em] text-kreadika-950"
              style={{
                fontSize: "clamp(1.75rem, 3vw, 2.45rem)",
                lineHeight: 1.12,
              }}
            >
              Co-host
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CO_HOST_LIST.map((item, index) => (
              <article
                key={index}
                className="flex flex-col border-t-2 border-kreadika-950 bg-paper p-6"
              >
                <div className="flex h-28 w-full items-center justify-center border border-dashed border-paper-line bg-white text-xs font-semibold text-slate-700">
                  [logo]
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-kreadika-950">
                  {item.nama}
                </h3>
                <p className="mt-1 text-sm text-slate-700">{item.kategori}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Jurnal Mitra */}
      <section className="border-y border-paper-line bg-paper">
        <div className="home-reveal mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <p className="text-xs font-bold tracking-[0.14em] uppercase text-terracotta">
                Publikasi Ilmiah
              </p>
              <h2
                className="mt-3 font-display font-bold tracking-[-0.02em] text-kreadika-950"
                style={{
                  fontSize: "clamp(1.75rem, 3vw, 2.45rem)",
                  lineHeight: 1.12,
                }}
              >
                Jurnal Mitra
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
                Artikel terbaik KREADIKA direkomendasikan untuk diterbitkan di
                jurnal mitra, melalui proses review jurnal tersebut.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-7">
              {JURNAL_MITRA_LIST.map((item, index) => (
                <article
                  key={index}
                  className="flex flex-col border border-paper-line bg-white p-6"
                >
                  <div className="flex h-28 w-full items-center justify-center border border-dashed border-paper-line bg-paper text-xs font-semibold text-slate-700">
                    [logo]
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-kreadika-950">
                    {item.nama}
                  </h3>
                  <p className="mt-1 text-sm text-slate-700">{item.kategori}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bentuk Kerja Sama */}
      <section className="bg-white">
        <div className="home-reveal mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <p className="text-xs font-bold tracking-[0.14em] uppercase text-kreadika-700">
                Skema Kemitraan
              </p>
              <h2
                className="mt-3 font-display font-bold tracking-[-0.02em] text-kreadika-950"
                style={{
                  fontSize: "clamp(1.75rem, 3vw, 2.4rem)",
                  lineHeight: 1.12,
                }}
              >
                Bentuk Kerja Sama
              </h2>
              <p className="mt-4 border-l-2 border-terracotta bg-paper px-4 py-3 text-sm font-medium text-kreadika-950">
                Mitra ditampilkan di situs web, materi publikasi, sertifikat,
                dan prosiding.
              </p>
            </div>

            <ol className="divide-y divide-slate-200 border-t border-b border-slate-200 lg:col-span-8">
              {BENTUK_KERJA_SAMA.map((item) => (
                <li
                  key={item.no}
                  className="grid grid-cols-1 gap-2 py-6 sm:grid-cols-12 sm:gap-4"
                >
                  <span className="font-display text-sm font-extrabold tabular-nums text-terracotta sm:col-span-2">
                    {item.no}
                  </span>
                  <div className="sm:col-span-10">
                    <h3 className="font-display text-xl font-bold text-kreadika-950">
                      {item.judul}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-700 sm:text-base">
                      {item.deskripsi}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <ClosingBand
        eyebrow="Ajukan Kemitraan"
        title="Tertarik bermitra dengan KREADIKA 2027?"
        description="Kirim surel kepada sekretariat dengan mencantumkan nama lembaga dan bentuk kerja sama yang diminati."
        primaryAction={{
          label: `Kirim surel ke ${SITE_INFO.email}`,
          href: `mailto:${SITE_INFO.email}`,
        }}
        secondaryAction={{ label: "Lihat kontak sekretariat", href: "/kontak" }}
        onNavigate={onNavigate}
      />
    </main>
  );
}

export default Mitra;
