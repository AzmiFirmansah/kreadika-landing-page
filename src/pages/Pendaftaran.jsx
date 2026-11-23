import { ClosingBand, PageHero } from "../components/SymposiumUI";
import { SITE_INFO } from "../data/kreadikaData";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

const BIAYA_LIST = [
  {
    kategori: "Guru / tenaga kependidikan",
    pemakalah: "Rp [ ]",
    peserta: "Rp [ ]",
  },
  {
    kategori: "Dosen / umum",
    pemakalah: "Rp [ ]",
    peserta: "Rp [ ]",
  },
  {
    kategori: "Mahasiswa",
    pemakalah: "Rp [ ]",
    peserta: "Rp [ ]",
  },
];

const CARA_MENDAFTAR = [
  "Pilih kategori dan status (pemakalah atau peserta), lalu lakukan pembayaran.",
  "Isi formulir pendaftaran online dan unggah bukti pembayaran (JPG, PNG, atau PDF).",
  "Pemakalah mencantumkan ID submission OJS dan judul makalah.",
  "Nomor pendaftaran dikirim ke email Anda. Sekretariat memverifikasi pembayaran dan mengirim konfirmasi.",
];

function Pendaftaran({ onNavigate }) {
  const pageRef = useRevealOnScroll();

  return (
    <main
      id="pendaftaran-kreadika"
      ref={pageRef}
      className="font-editorial overflow-x-clip bg-white text-kreadika-950"
    >
      <PageHero
        sectionLabel="Pendaftaran"
        title="Pendaftaran dan Biaya Kepesertaan"
        description={`Pendaftaran dan pembayaran dilakukan secara online melalui sistem registrasi ${SITE_INFO.organizer}.`}
        onNavigate={onNavigate}
      />

      {/* Biaya Pendaftaran */}
      <section className="bg-white">
        <div className="home-reveal mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <p className="text-xs font-bold tracking-[0.14em] uppercase text-terracotta">
                Tarif Kepesertaan
              </p>
              <h2
                className="mt-3 font-display font-bold tracking-[-0.02em] text-kreadika-950"
                style={{
                  fontSize: "clamp(1.75rem, 3vw, 2.4rem)",
                  lineHeight: 1.12,
                }}
              >
                Biaya Pendaftaran
              </h2>
              <p className="mt-4 border-l-2 border-terracotta bg-paper px-4 py-3 text-sm leading-relaxed text-kreadika-950">
                Pemakalah adalah penulis yang abstraknya diterima. Peserta
                mengikuti seminar tanpa membawakan makalah.
              </p>
            </div>

            <div className="overflow-x-auto border border-slate-200 lg:col-span-8">
              <table className="w-full border-collapse text-left text-sm">
                <caption className="sr-only">
                  Tabel biaya pendaftaran KREADIKA 2027 berdasarkan kategori
                  pemakalah dan peserta
                </caption>
                <thead>
                  <tr className="border-b-2 border-kreadika-950 bg-kreadika-950 text-white">
                    <th
                      scope="col"
                      className="px-5 py-4 text-xs font-bold tracking-[0.12em] uppercase"
                    >
                      Kategori
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-4 text-center text-xs font-bold tracking-[0.12em] uppercase"
                    >
                      Pemakalah
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-4 text-center text-xs font-bold tracking-[0.12em] uppercase"
                    >
                      Peserta
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {BIAYA_LIST.map((item) => (
                    <tr
                      key={item.kategori}
                      className="transition-colors duration-150 hover:bg-paper/70"
                    >
                      <th
                        scope="row"
                        className="px-5 py-5 font-bold text-kreadika-950"
                      >
                        {item.kategori}
                      </th>
                      <td className="px-5 py-5 text-center font-display text-base font-bold tabular-nums text-kreadika-700">
                        {item.pemakalah}
                      </td>
                      <td className="px-5 py-5 text-center font-display text-base font-bold tabular-nums text-slate-700">
                        {item.peserta}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Cara Mendaftar */}
      <section className="border-t border-paper-line bg-paper">
        <div className="home-reveal mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[0.14em] uppercase text-kreadika-700">
              Alur Registrasi
            </p>
            <h2
              className="mt-3 font-display font-bold tracking-[-0.02em] text-kreadika-950"
              style={{
                fontSize: "clamp(1.75rem, 3vw, 2.45rem)",
                lineHeight: 1.12,
              }}
            >
              Cara Mendaftar
            </h2>
          </div>

          <ol className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CARA_MENDAFTAR.map((langkah, index) => (
              <li
                key={langkah}
                className="border-t-2 border-kreadika-950 bg-white p-6"
              >
                <span className="font-display text-sm font-extrabold tabular-nums text-terracotta">
                  0{index + 1}
                </span>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">
                  {langkah}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ClosingBand
        eyebrow="Registrasi KREADIKA 2027"
        title="Siapkan bukti pembayaran sebelum mengisi formulir"
        description="Cek status pembukaan formulir online atau hubungi sekretariat jika ada pertanyaan terkait kepesertaan."
        primaryAction={{
          label: "Buka halaman pendaftaran online",
          href: "/pendaftaran-online",
        }}
        secondaryAction={{
          label: `Tanya via ${SITE_INFO.email}`,
          href: `mailto:${SITE_INFO.email}`,
        }}
        onNavigate={onNavigate}
      />
    </main>
  );
}

export default Pendaftaran;
