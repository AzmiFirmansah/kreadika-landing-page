import { ClosingBand, PageHero } from "../components/SymposiumUI";
import { SITE_INFO } from "../data/kreadikaData";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

const PEMBICARA_KUNCI = [
  {
    no: "01",
    perspektif: "Perspektif Kebijakan",
    nama: "[Nama pembicara]",
    peran: "Perwakilan Kemendikdasmen atau Dinas Pendidikan: perspektif kebijakan",
  },
  {
    no: "02",
    perspektif: "Perspektif Akademik",
    nama: "[Nama pembicara]",
    peran: "Akademisi pendidikan atau teknologi pendidikan",
  },
  {
    no: "03",
    perspektif: "Perspektif Praktik Baik",
    nama: "[Nama pembicara]",
    peran: "Praktisi: kepala sekolah atau guru penggerak dengan praktik baik",
  },
];

const KOMITE_ILMIAH = [
  { no: "01", peran: "Dosen / Peneliti", nama: "[Nama]", afiliasi: "[Afiliasi]" },
  { no: "02", peran: "Dosen / Peneliti", nama: "[Nama]", afiliasi: "[Afiliasi]" },
  { no: "03", peran: "Dosen / Peneliti", nama: "[Nama]", afiliasi: "[Afiliasi]" },
  {
    no: "04",
    peran: "Praktisi / Pengawas / Kepala Sekolah",
    nama: "[Nama]",
    afiliasi: "[Afiliasi]",
  },
];

const SUSUNAN_PANITIA = [
  { jabatan: "Pengarah", nama: `Direktur ${SITE_INFO.organizer}` },
  { jabatan: "Penanggung jawab", nama: "[nama]" },
  { jabatan: "Ketua", nama: "[nama]" },
  { jabatan: "Sekretaris", nama: "[nama]" },
  { jabatan: "Bendahara", nama: "[nama]" },
  { jabatan: "Bidang Acara dan Pembicara", nama: "[nama]" },
  { jabatan: "Bidang Makalah dan Prosiding", nama: "[nama]" },
  { jabatan: "Bidang Publikasi, Humas, dan Media Sosial", nama: "[nama]" },
  { jabatan: "Bidang Teknologi Informasi", nama: "[nama]" },
  { jabatan: "Bidang Sponsor dan Kemitraan", nama: "[nama]" },
];

function Panitia({ onNavigate }) {
  const pageRef = useRevealOnScroll();

  return (
    <main
      id="panitia-kreadika"
      ref={pageRef}
      className="font-editorial overflow-x-clip bg-white text-kreadika-950"
    >
      <PageHero
        sectionLabel="Panitia & Pembicara"
        title="Panitia KREADIKA 2027"
        description="Panitia penyelenggara, Komite Ilmiah, dan pembicara kunci yang mengawal tata kelola dan kualitas akademik KREADIKA 2027."
        onNavigate={onNavigate}
        aside={
          <dl className="divide-y divide-white/15">
            <div className="pb-4">
              <dt className="text-xs font-semibold tracking-[0.12em] uppercase text-kreadika-mist">
                Pengarah
              </dt>
              <dd className="mt-1 text-sm font-semibold text-white">
                Direktur {SITE_INFO.organizer}
              </dd>
            </div>
            <div className="pt-4">
              <dt className="text-xs font-semibold tracking-[0.12em] uppercase text-kreadika-mist">
                Penelaahan naskah
              </dt>
              <dd className="mt-1 text-sm text-kreadika-mist">
                Komite Ilmiah lintas perguruan tinggi dan praktisi pendidikan
              </dd>
            </div>
          </dl>
        }
      />

      {/* Tata Kelola */}
      <section className="bg-white">
        <div className="home-reveal mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <p className="text-xs font-bold tracking-[0.14em] uppercase text-terracotta">
                Tata Kelola dan Integritas
              </p>
              <h2
                className="mt-3 font-display font-bold tracking-[-0.02em] text-kreadika-950"
                style={{
                  fontSize: "clamp(1.75rem, 3vw, 2.45rem)",
                  lineHeight: 1.12,
                }}
              >
                Kolaborasi Akademisi, Praktisi, dan Penyelenggara
              </h2>
            </div>

            <div className="space-y-4 text-base leading-relaxed text-slate-700 lg:col-span-7">
              <p>
                Penyelenggaraan{" "}
                <strong className="font-semibold text-kreadika-950">
                  KREADIKA 2027
                </strong>{" "}
                didukung oleh susunan kepanitiaan, komite penelaah ilmiah
                independen, serta narasumber kunci di bidang kebijakan, sains
                pendidikan, dan implementasi praktik baik.
              </p>
              <p>
                Komite Ilmiah bertugas menyeleksi dan menelaah naskah melalui
                proses <em>peer-review</em> yang objektif, sementara panitia
                pelaksana memastikan rangkaian seminar luring maupun daring
                berjalan tertib, inklusif, dan tepat waktu.
              </p>
              <blockquote className="border-l-2 border-terracotta bg-paper px-5 py-4 text-sm font-medium text-kreadika-950 sm:text-base">
                “Sinergi antara pemangku kebijakan, ilmuwan pendidikan, dan guru
                di garis depan adalah kunci lahirnya pendidikan yang kreatif dan
                adaptif.”
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Pembicara Kunci */}
      <section className="border-y border-paper-line bg-paper">
        <div className="home-reveal mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[0.14em] uppercase text-terracotta">
              Narasumber Utama
            </p>
            <h2
              className="mt-3 font-display font-bold tracking-[-0.02em] text-kreadika-950"
              style={{
                fontSize: "clamp(1.75rem, 3vw, 2.45rem)",
                lineHeight: 1.12,
              }}
            >
              Pembicara Kunci
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
              Tiga perspektif utama dalam menjawab tantangan perubahan
              pendidikan nasional.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {PEMBICARA_KUNCI.map((speaker) => (
              <article
                key={speaker.no}
                className="flex flex-col border-t-2 border-kreadika-950 bg-white p-6"
              >
                <div className="flex aspect-4/3 w-full items-center justify-center border border-dashed border-paper-line bg-paper text-xs font-semibold text-slate-700">
                  [Foto Pembicara]
                </div>

                <div className="mt-5">
                  <p className="text-xs font-bold tracking-[0.12em] uppercase text-terracotta">
                    {speaker.no} / {speaker.perspektif}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-bold text-kreadika-950">
                    {speaker.nama}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">
                    {speaker.peran}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Komite Ilmiah */}
      <section className="bg-white">
        <div className="home-reveal mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <p className="text-xs font-bold tracking-[0.14em] uppercase text-kreadika-700">
                Dewan Ilmiah dan Reviewer
              </p>
              <h2
                className="mt-3 font-display font-bold tracking-[-0.02em] text-kreadika-950"
                style={{
                  fontSize: "clamp(1.75rem, 3vw, 2.4rem)",
                  lineHeight: 1.12,
                }}
              >
                Komite Ilmiah
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
                Lima sampai sepuluh dosen atau peneliti dari beberapa perguruan
                tinggi yang berbeda, ditambah praktisi seperti pengawas atau
                kepala sekolah berprestasi.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-8">
              {KOMITE_ILMIAH.map((member) => (
                <article
                  key={member.no}
                  className="flex flex-col border border-slate-200 bg-paper p-5"
                >
                  <div className="flex aspect-16/10 w-full items-center justify-center border border-dashed border-paper-line bg-white text-xs font-semibold text-slate-700">
                    [Foto]
                  </div>
                  <p className="mt-4 text-xs font-bold tracking-[0.1em] uppercase text-kreadika-700">
                    {member.peran}
                  </p>
                  <h3 className="mt-1 font-display text-lg font-bold text-kreadika-950">
                    {member.nama}
                  </h3>
                  <p className="mt-0.5 text-sm text-slate-700">
                    {member.afiliasi}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Susunan Panitia */}
      <section className="border-t border-paper-line bg-paper">
        <div className="home-reveal mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[0.14em] uppercase text-terracotta">
              Struktur Organisasi
            </p>
            <h2
              className="mt-3 font-display font-bold tracking-[-0.02em] text-kreadika-950"
              style={{
                fontSize: "clamp(1.75rem, 3vw, 2.45rem)",
                lineHeight: 1.12,
              }}
            >
              Susunan Panitia
            </h2>
            <p className="mt-2 text-sm text-slate-700 sm:text-base">
              Panitia pelaksana seminar nasional KREADIKA 2027.
            </p>
          </div>

          <div className="mt-8 overflow-x-auto border border-paper-line bg-white">
            <table className="w-full border-collapse text-left text-sm">
              <caption className="sr-only">
                Daftar jabatan dan nama panitia pelaksana KREADIKA 2027
              </caption>
              <thead>
                <tr className="border-b-2 border-kreadika-950 bg-kreadika-950 text-white">
                  <th
                    scope="col"
                    className="px-5 py-3.5 text-xs font-bold tracking-[0.12em] uppercase"
                  >
                    Jabatan
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3.5 text-xs font-bold tracking-[0.12em] uppercase"
                  >
                    Nama
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {SUSUNAN_PANITIA.map((row) => (
                  <tr
                    key={row.jabatan}
                    className="transition-colors duration-150 hover:bg-paper/70"
                  >
                    <th
                      scope="row"
                      className="px-5 py-4 font-bold text-kreadika-950"
                    >
                      {row.jabatan}
                    </th>
                    <td className="px-5 py-4 text-slate-700">{row.nama}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <ClosingBand
        eyebrow="Kolaborasi Panitia"
        title="Ingin berkolaborasi dengan panitia?"
        description="Perguruan tinggi, organisasi profesi, dan sponsor dapat menghubungi sekretariat untuk partisipasi dan kemitraan."
        primaryAction={{
          label: "Hubungi Sekretariat",
          href: `mailto:${SITE_INFO.email}`,
        }}
        secondaryAction={{ label: "Lihat skema kemitraan", href: "/mitra" }}
        onNavigate={onNavigate}
      />
    </main>
  );
}

export default Panitia;
