import {
  ClosingBand,
  PageHero,
  RoadmapSwitcher,
} from "../components/SymposiumUI";
import { SITE_INFO } from "../data/kreadikaData";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

const IDENTITAS_SEMINAR = [
  {
    label: "Nama resmi",
    value: "KREADIKA",
    note: "Seminar Nasional Pendidikan Kreatif dan Adaptif",
  },
  {
    label: "Akronim",
    value: "KREAtif, ADaptif, pendIDIKAn",
    note: "Tiga pilar pembentuk nama KREADIKA",
  },
  {
    label: "Tagline",
    value: `“${SITE_INFO.tagline}”`,
    note: "Prinsip pemandu seluruh rangkaian kegiatan",
  },
  {
    label: "Sifat pelaksanaan",
    value: "Tahunan, Hibrid",
    note: "Luring dan daring bagi peserta dari seluruh Indonesia",
  },
  {
    label: "Penyelenggara",
    value: SITE_INFO.organizer,
    note: "Pengelola sekretariat, sistem review, dan penerbitan prosiding",
  },
];

const RELEVANSI = [
  {
    no: "01",
    title: "Indonesia Emas 2045",
    desc: "Sejalan dengan arah pendidikan nasional menuju Indonesia Emas 2045, yang menuntut sumber daya manusia kreatif, adaptif, dan berkarakter.",
  },
  {
    no: "02",
    title: "Pembelajaran Mendalam dan AI",
    desc: "Mendukung penerapan pembelajaran mendalam dan Kurikulum Merdeka, termasuk mata pelajaran pilihan Koding dan Kecerdasan Artifisial (Permendikdasmen Nomor 13 Tahun 2025).",
  },
  {
    no: "03",
    title: "Praktik Baik bagi Pendidik",
    desc: "Menjawab kebutuhan pendidik dan pemimpin sekolah akan forum berbagi praktik baik dalam menghadapi perubahan kurikulum, teknologi, dan kebutuhan peserta didik.",
  },
];

const TARGET_PESERTA = [
  {
    no: "01",
    title: "Guru dan Tenaga Kependidikan",
    desc: "Pendidik di semua jenjang sekolah yang ingin berbagi modul, metode pembelajaran, dan praktik baik kelas.",
  },
  {
    no: "02",
    title: "Pengawas dan Kepala Sekolah",
    desc: "Pemimpin satuan pendidikan yang mengawal supervisi akademik dan manajemen perubahan di sekolah.",
  },
  {
    no: "03",
    title: "Pemangku Kebijakan Pendidikan",
    desc: "Dinas pendidikan, kementerian, dan badan pengembang kurikulum yang merumuskan tata kelola kebijakan.",
  },
  {
    no: "04",
    title: "Dosen dan Peneliti",
    desc: "Akademisi di bidang pendidikan yang mempublikasikan hasil riset empiris dan konseptual.",
  },
  {
    no: "05",
    title: "Mahasiswa Pendidikan",
    desc: "Calon guru masa depan yang menyiapkan skripsi, tesis, atau karya ilmiah inovasi pembelajaran.",
  },
];

function Tentang({ onNavigate }) {
  const pageRef = useRevealOnScroll();

  return (
    <main
      id="tentang-kreadika"
      ref={pageRef}
      className="font-editorial overflow-x-clip bg-white text-kreadika-950"
    >
      <PageHero
        sectionLabel="Tentang KREADIKA"
        title="Seminar Nasional Pendidikan Kreatif dan Adaptif"
        description={`Diselenggarakan setiap tahun oleh ${SITE_INFO.organizer} secara luring dan daring.`}
        onNavigate={onNavigate}
        aside={
          <dl className="divide-y divide-white/15">
            <div className="pb-4">
              <dt className="text-xs font-semibold tracking-[0.12em] uppercase text-kreadika-mist">
                Asal nama
              </dt>
              <dd className="mt-1 font-display text-lg font-bold text-white">
                <span className="text-amber-accent">KREA</span>tif ·{" "}
                <span className="text-amber-accent">AD</span>aptif · pend
                <span className="text-amber-accent">IDIKA</span>n
              </dd>
            </div>
            <div className="pt-4">
              <dt className="text-xs font-semibold tracking-[0.12em] uppercase text-kreadika-mist">
                Format
              </dt>
              <dd className="mt-1 text-sm font-semibold text-white">
                Tahunan, Hibrid (Luring &amp; Daring)
              </dd>
            </div>
          </dl>
        }
      />

      {/* Makna dan Arah */}
      <section className="bg-white">
        <div className="home-reveal mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <p className="text-xs font-bold tracking-[0.14em] uppercase text-terracotta">
                Makna dan Arah
              </p>
              <h2
                className="mt-3 font-display font-bold tracking-[-0.02em] text-kreadika-950"
                style={{
                  fontSize: "clamp(1.75rem, 3vw, 2.45rem)",
                  lineHeight: 1.12,
                }}
              >
                Mendidik manusia di tengah perubahan yang dinamis
              </h2>
            </div>

            <div className="space-y-5 text-base leading-relaxed text-slate-700 lg:col-span-7">
              <p>
                <strong className="font-semibold text-kreadika-950">
                  KREADIKA
                </strong>{" "}
                adalah forum nasional bagi guru, tenaga kependidikan, pengawas,
                kepala sekolah, pemangku kebijakan, dan mahasiswa pendidikan
                untuk berbagi gagasan, hasil penelitian, dan praktik baik dalam
                menghadirkan pendidikan yang kreatif dan adaptif.
              </p>
              <p>
                Seminar ini menegaskan bahwa perubahan, termasuk perkembangan
                teknologi digital dan kecerdasan artifisial, harus dimanfaatkan
                untuk memperkuat peran manusia dalam pendidikan, bukan
                menggantikannya.
              </p>
              <blockquote className="border-l-2 border-terracotta bg-paper px-5 py-4 text-sm leading-relaxed font-medium text-kreadika-950 sm:text-base">
                “Perubahan teknologi bukan untuk menggantikan manusia, melainkan
                mengokohkan nilai budi pekerti, nalar kritis, dan empati dalam
                ekosistem pendidikan.”
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Identitas Seminar */}
      <section className="border-y border-paper-line bg-paper">
        <div className="home-reveal mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[0.14em] uppercase text-terracotta">
              Identitas Seminar
            </p>
            <h2
              className="mt-3 font-display font-bold tracking-[-0.02em] text-kreadika-950"
              style={{
                fontSize: "clamp(1.75rem, 3vw, 2.45rem)",
                lineHeight: 1.12,
              }}
            >
              Profil dan Karakteristik KREADIKA
            </h2>
          </div>

          <dl className="mt-10 divide-y divide-paper-line border-t border-b border-paper-line">
            {IDENTITAS_SEMINAR.map((item) => (
              <div
                key={item.label}
                className="grid grid-cols-1 gap-2 py-5 sm:grid-cols-12 sm:items-baseline sm:gap-4"
              >
                <dt className="text-xs font-bold tracking-[0.12em] uppercase text-kreadika-700 sm:col-span-3">
                  {item.label}
                </dt>
                <dd className="font-display text-lg font-bold text-kreadika-950 sm:col-span-4">
                  {item.value}
                </dd>
                <dd className="text-sm text-slate-700 sm:col-span-5">
                  {item.note}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Relevansi Jangka Panjang */}
      <section className="bg-white">
        <div className="home-reveal mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <p className="text-xs font-bold tracking-[0.14em] uppercase text-kreadika-700">
                Relevansi Jangka Panjang
              </p>
              <h2
                className="mt-3 font-display font-bold tracking-[-0.02em] text-kreadika-950"
                style={{
                  fontSize: "clamp(1.75rem, 3vw, 2.4rem)",
                  lineHeight: 1.12,
                }}
              >
                Menjawab Tantangan dan Arah Pendidikan Masa Depan
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-700 sm:text-base">
                KREADIKA dirancang selaras dengan kebijakan pendidikan jangka
                panjang dan kebutuhan nyata pendidik di lapangan.
              </p>
            </div>

            <ol className="divide-y divide-slate-200 border-t border-b border-slate-200 lg:col-span-8">
              {RELEVANSI.map((item) => (
                <li
                  key={item.no}
                  className="grid grid-cols-1 gap-2 py-6 sm:grid-cols-12 sm:gap-4"
                >
                  <span className="font-display text-sm font-extrabold tabular-nums text-terracotta sm:col-span-2">
                    {item.no}
                  </span>
                  <div className="sm:col-span-10">
                    <h3 className="font-display text-xl font-bold text-kreadika-950">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-700 sm:text-base">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Target Peserta (High-contrast Dark Band) */}
      <section className="home-surface-dark bg-kreadika-950 text-white">
        <div className="home-reveal mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[0.14em] uppercase text-amber-accent">
              Target Peserta
            </p>
            <h2
              className="mt-3 font-display font-bold tracking-[-0.02em] text-white"
              style={{
                fontSize: "clamp(1.75rem, 3vw, 2.45rem)",
                lineHeight: 1.12,
              }}
            >
              Siapa yang Menjadi Bagian dari KREADIKA
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-kreadika-mist sm:text-base">
              KREADIKA mengundang seluruh insan pendidikan yang berkomitmen
              memajukan mutu pembelajaran.
            </p>
          </div>

          <ol className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TARGET_PESERTA.map((item) => (
              <li
                key={item.no}
                className="border-t border-white/20 pt-5"
              >
                <span className="font-display text-sm font-extrabold tabular-nums text-amber-accent">
                  {item.no}
                </span>
                <h3 className="mt-2 font-display text-lg font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-kreadika-mist">
                  {item.desc}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Shared DRY 5-Year Roadmap */}
      <RoadmapSwitcher
        id="peta-subtema"
        eyebrow="Peta Subtema Lima Tahun"
        bgClass="bg-white"
      />

      {/* Pengelolaan dan Kolaborasi */}
      <section className="border-t border-paper-line bg-paper">
        <div className="home-reveal mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[0.14em] uppercase text-terracotta">
              Penyelenggara
            </p>
            <h2
              className="mt-3 font-display font-bold tracking-[-0.02em] text-kreadika-950"
              style={{
                fontSize: "clamp(1.75rem, 3vw, 2.45rem)",
                lineHeight: 1.12,
              }}
            >
              Pengelolaan dan Kolaborasi Kemitraan
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
            <article className="border-t-2 border-kreadika-950 bg-white p-6 sm:p-8">
              <h3 className="font-display text-xl font-bold text-kreadika-950">
                {SITE_INFO.organizer}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
                {SITE_INFO.organizer} menyelenggarakan KREADIKA dan mengelola
                sekretariat, sistem pengiriman dan review makalah, serta
                penerbitan prosiding.
              </p>
            </article>

            <article className="border-t-2 border-terracotta bg-white p-6 sm:p-8">
              <h3 className="font-display text-xl font-bold text-kreadika-950">
                Kolaborasi Co-Host
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
                KREADIKA bekerja sama dengan perguruan tinggi dan organisasi
                profesi sebagai co-host untuk memperluas jangkauan peserta dan
                menjaga independensi review.
              </p>
            </article>
          </div>
        </div>
      </section>

      <ClosingBand
        eyebrow="Kemitraan KREADIKA 2027"
        title="Ingin menjadi co-host atau mitra?"
        description="Perguruan tinggi, organisasi profesi, dan jurnal ilmiah dapat bergabung sebagai mitra penyelenggaraan KREADIKA."
        primaryAction={{ label: "Lihat bentuk kerja sama", href: "/mitra" }}
        secondaryAction={{
          label: "Hubungi sekretariat",
          href: `mailto:${SITE_INFO.email}`,
        }}
        onNavigate={onNavigate}
      />
    </main>
  );
}

export default Tentang;
