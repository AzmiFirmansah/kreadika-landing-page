import { ClosingBand, PageHero } from "../components/SymposiumUI";
import { SITE_INFO } from "../data/kreadikaData";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

const KETENTUAN_PROSIDING = [
  { label: "ISSN", value: "[dalam proses pengajuan]" },
  { label: "DOI", value: "Setiap artikel melalui Crossref" },
  { label: "Akses", value: "Terbuka (open access)" },
  {
    label: "Pengiriman dan review",
    value: "Melalui sistem OJS prosiding KREADIKA",
  },
  {
    label: "Rekomendasi jurnal",
    value: "Artikel terbaik direkomendasikan ke jurnal mitra",
  },
];

function Prosiding({ onNavigate }) {
  const pageRef = useRevealOnScroll();

  return (
    <main
      id="prosiding-kreadika"
      ref={pageRef}
      className="font-editorial overflow-x-clip bg-white text-kreadika-950"
    >
      <PageHero
        sectionLabel="Prosiding"
        title="Prosiding KREADIKA"
        description="Artikel terpilih diterbitkan dalam prosiding ber-ISSN dan ber-DOI yang dapat diakses terbuka."
        onNavigate={onNavigate}
        aside={
          <dl className="divide-y divide-white/15">
            <div className="pb-4">
              <dt className="text-xs font-semibold tracking-[0.12em] uppercase text-kreadika-mist">
                Penerbit
              </dt>
              <dd className="mt-1 text-sm font-semibold text-white">
                {SITE_INFO.organizer}
              </dd>
            </div>
            <div className="pt-4">
              <dt className="text-xs font-semibold tracking-[0.12em] uppercase text-kreadika-mist">
                Jadwal terbit edisi 2027
              </dt>
              <dd className="mt-1 font-display text-lg font-bold text-amber-accent">
                [tanggal]
              </dd>
            </div>
          </dl>
        }
      />

      {/* Tentang Prosiding */}
      <section className="bg-white">
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
                Tentang Prosiding KREADIKA
              </h2>
            </div>

            <div className="space-y-5 text-base leading-relaxed text-slate-700 lg:col-span-7">
              <p>
                <strong className="font-semibold text-kreadika-950">
                  Prosiding KREADIKA
                </strong>{" "}
                diterbitkan oleh {SITE_INFO.organizer} setelah setiap
                penyelenggaraan seminar. Setiap artikel direview oleh Komite
                Ilmiah dan memperoleh DOI melalui Crossref.
              </p>
              <p className="border-l-2 border-terracotta bg-paper px-5 py-4 text-sm font-medium text-kreadika-950 sm:text-base">
                Artikel terbaik direkomendasikan ke jurnal mitra untuk proses
                penerbitan berkala ilmiah.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Identitas & Ketentuan Prosiding */}
      <section className="border-t border-paper-line bg-paper">
        <div className="home-reveal mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[0.14em] uppercase text-kreadika-700">
              Informasi Publikasi
            </p>
            <h2
              className="mt-3 font-display font-bold tracking-[-0.02em] text-kreadika-950"
              style={{
                fontSize: "clamp(1.75rem, 3vw, 2.45rem)",
                lineHeight: 1.12,
              }}
            >
              Ketentuan dan Akses Prosiding
            </h2>
          </div>

          <dl className="mt-10 divide-y divide-paper-line border-t border-b border-paper-line">
            {KETENTUAN_PROSIDING.map((item) => (
              <div
                key={item.label}
                className="grid grid-cols-1 gap-2 py-5 sm:grid-cols-12 sm:items-baseline sm:gap-4"
              >
                <dt className="text-xs font-bold tracking-[0.12em] uppercase text-terracotta sm:col-span-4">
                  {item.label}
                </dt>
                <dd className="font-display text-lg font-bold text-kreadika-950 sm:col-span-8">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <ClosingBand
        eyebrow="Arsip Publikasi"
        title="Arsip Prosiding KREADIKA"
        description="Prosiding KREADIKA terbit pada [tanggal]. Sementara itu, Anda dapat mempelajari ketentuan penulisan makalah."
        primaryAction={{
          label: "Arsip Segera Tersedia",
          disabled: true,
        }}
        secondaryAction={{
          label: "Baca ketentuan makalah",
          href: "/call-for-papers#ketentuan",
        }}
        onNavigate={onNavigate}
      />
    </main>
  );
}

export default Prosiding;
