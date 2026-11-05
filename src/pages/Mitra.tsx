import type { PageProps } from "../types";

function Mitra(_props: PageProps = {}) {
  const coHostList = [
    {
      nama: "[Nama perguruan tinggi]",
      kategori: "Perguruan tinggi",
    },
    {
      nama: "[Nama perguruan tinggi]",
      kategori: "Perguruan tinggi",
    },
    {
      nama: "[Nama organisasi profesi]",
      kategori: "Organisasi profesi",
    },
  ];

  const jurnalMitraList = [
    {
      nama: "[Nama jurnal]",
      kategori: "Jurnal mitra",
    },
    {
      nama: "[Nama jurnal]",
      kategori: "Jurnal mitra",
    },
  ];

  const bentukKerjaSamaList = [
    {
      nomor: "1",
      judul: "Co-host",
      deskripsi:
        "perguruan tinggi (misalnya FKIP) atau organisasi profesi (misalnya PGRI atau Asosiasi Dosen Indonesia) ikut menyelenggarakan, menyebarkan informasi, dan menempatkan perwakilan di Komite Ilmiah.",
    },
    {
      nomor: "2",
      judul: "Jurnal mitra",
      deskripsi: "menerima rekomendasi artikel terbaik dari KREADIKA.",
    },
    {
      nomor: "3",
      judul: "Sponsor",
      deskripsi: "lembaga yang mendukung penyelenggaraan seminar.",
    },
  ];

  return (
    <main id="mitra-kreadika">
      {/* ==================== 
          HERO / PAGE HEADER (MODERN ACADEMIC & CLEAN EVENT UI)
      ==================== */}
      <section className="relative overflow-hidden border-b border-kreadika-200/80 bg-linear-to-b from-kreadika-50 via-kreadika-50/40 to-white">
        {/* Subtle Academic Background Accent */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute -top-24 left-1/2 h-80 w-2xl -translate-x-1/2 rounded-full bg-kreadika-200/40 blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-6xl px-4 pt-14 pb-14 sm:px-6 sm:pt-20 sm:pb-18 lg:px-8">
          <div className="max-w-3xl">
            {/* Breadcrumb / Category Badge */}
            <span className="inline-flex items-center gap-2 rounded-full border border-kreadika-200 bg-white px-4 py-1.5 text-xs font-semibold tracking-wide text-kreadika-700 shadow-2xs">
              <span className="h-2 w-2 rounded-full bg-kreadika-600 animate-pulse"></span>
              <span>KREADIKA 2027</span>
              <span aria-hidden="true" className="text-slate-600">•</span>
              <span className="text-kreadika-600">Kolaborasi &amp; Mitra</span>
            </span>

            {/* Title */}
            <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-kreadika-800 sm:text-4xl lg:text-5xl lg:leading-[1.15]">
              Mitra KREADIKA
            </h1>

            {/* Description */}
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              Perguruan tinggi, organisasi profesi, dan jurnal yang bekerja sama
              dalam penyelenggaraan KREADIKA.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== 
          CO-HOST
      ==================== */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full border border-kreadika-200 bg-kreadika-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-kreadika-700">
              Mitra Penyelenggara
            </span>
            <h2 className="mt-3 text-2xl font-bold text-kreadika-800 sm:text-3xl">
              Co-host
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coHostList.map((item, index) => (
              <div
                key={index}
                className="group flex flex-col justify-between rounded-2xl border border-kreadika-200/80 bg-white p-6 shadow-2xs transition-all duration-300 hover:-translate-y-1.5 hover:border-kreadika-400 hover:shadow-md hover:shadow-kreadika-800/5"
              >
                <div>
                  {/* Logo Placeholder */}
                  <div className="flex h-36 w-full items-center justify-center rounded-xl border-2 border-dashed border-kreadika-200/80 bg-kreadika-50/50 transition-colors duration-300 group-hover:border-kreadika-400 group-hover:bg-kreadika-50">
                    <div className="flex flex-col items-center gap-2 text-slate-500">
                      <svg
                        className="h-8 w-8 text-kreadika-300 transition-all duration-300 group-hover:scale-110 group-hover:text-kreadika-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                        />
                      </svg>
                      <span className="font-mono text-xs font-semibold text-slate-600 transition-colors duration-200 group-hover:text-kreadika-700">
                        [logo]
                      </span>
                    </div>
                  </div>

                  {/* Partner Info */}
                  <div className="mt-5">
                    <h3 className="text-lg font-bold text-kreadika-800 transition-colors duration-200 group-hover:text-kreadika-600">
                      {item.nama}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-slate-600">
                      {item.kategori}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 
          JURNAL MITRA
      ==================== */}
      <section className="border-y border-kreadika-200/70 bg-kreadika-50/60 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full border border-kreadika-200 bg-white px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-kreadika-700 shadow-2xs">
              Publikasi Ilmiah
            </span>
            <h2 className="mt-3 text-2xl font-bold text-kreadika-800 sm:text-3xl">
              Jurnal Mitra
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
              Artikel terbaik KREADIKA direkomendasikan untuk diterbitkan di
              jurnal mitra, melalui proses review jurnal tersebut.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {jurnalMitraList.map((item, index) => (
              <div
                key={index}
                className="group flex flex-col justify-between rounded-2xl border border-kreadika-200/80 bg-white p-6 shadow-2xs transition-all duration-300 hover:-translate-y-1.5 hover:border-kreadika-400 hover:shadow-md hover:shadow-kreadika-800/5 sm:p-8"
              >
                <div>
                  {/* Logo Placeholder */}
                  <div className="flex h-36 w-full items-center justify-center rounded-xl border-2 border-dashed border-kreadika-200/80 bg-kreadika-50/50 transition-colors duration-300 group-hover:border-kreadika-400 group-hover:bg-kreadika-50">
                    <div className="flex flex-col items-center gap-2 text-slate-500">
                      <svg
                        className="h-8 w-8 text-kreadika-300 transition-all duration-300 group-hover:scale-110 group-hover:text-kreadika-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                        />
                      </svg>
                      <span className="font-mono text-xs font-semibold text-slate-600 transition-colors duration-200 group-hover:text-kreadika-700">
                        [logo]
                      </span>
                    </div>
                  </div>

                  {/* Journal Info */}
                  <div className="mt-5">
                    <h3 className="text-xl font-bold text-kreadika-800 transition-colors duration-200 group-hover:text-kreadika-600">
                      {item.nama}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-slate-600">
                      {item.kategori}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 
          BENTUK KERJA SAMA
      ==================== */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full border border-kreadika-200 bg-kreadika-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-kreadika-700">
              Skema Kemitraan
            </span>
            <h2 className="mt-3 text-2xl font-bold text-kreadika-800 sm:text-3xl">
              Bentuk Kerja Sama
            </h2>
          </div>

          {/* Cards for Schemes */}
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {bentukKerjaSamaList.map((item, index) => (
              <div
                key={index}
                className="group flex flex-col rounded-2xl border border-kreadika-200/80 bg-white p-6 shadow-2xs transition-all duration-300 hover:-translate-y-1.5 hover:border-kreadika-400 hover:shadow-md hover:shadow-kreadika-800/5 sm:p-7"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-kreadika-200/70 bg-kreadika-50 text-sm font-bold text-kreadika-700 transition-all duration-300 group-hover:scale-105 group-hover:border-kreadika-600 group-hover:bg-kreadika-600 group-hover:text-white">
                  {item.nomor}
                </span>
                <h3 className="mt-5 text-lg font-bold text-kreadika-800 transition-colors duration-200 group-hover:text-kreadika-600">
                  {item.judul}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.deskripsi}
                </p>
              </div>
            ))}
          </div>

          {/* Mitra Ditampilkan Statement Callout */}
          <div className="mt-10 rounded-2xl border border-kreadika-200/80 bg-kreadika-50/60 p-6 shadow-2xs transition-all duration-300 hover:border-kreadika-400 hover:shadow-xs sm:p-7">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-kreadika-200/70 bg-kreadika-50 text-kreadika-600">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p className="text-sm font-medium leading-relaxed text-kreadika-800 sm:text-base">
                Mitra ditampilkan di situs web, materi publikasi, sertifikat,
                dan prosiding.
              </p>
            </div>
          </div>

          {/* Partnership CTA Banner */}
          <div className="relative overflow-hidden mt-8 flex flex-col gap-6 rounded-3xl border border-kreadika-700 bg-kreadika-800 p-8 sm:p-10 shadow-lg shadow-kreadika-800/10 transition-shadow duration-300 hover:shadow-xl md:flex-row md:items-center md:justify-between">
            {/* Subtle Radial Glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-kreadika-600/30 blur-3xl"
            ></div>

            <div className="relative max-w-xl">
              <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Tertarik bermitra?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-kreadika-100/90 sm:text-base">
                Kirim email kepada sekretariat dengan nama lembaga dan bentuk
                kerja sama yang diminati.
              </p>
            </div>
            <div className="relative shrink-0">
              <a
                href="mailto:sekretariat@kreadika.id"
                className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-kreadika-800 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-kreadika-50 hover:shadow-md active:translate-y-0 active:scale-[0.98]"
              >
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:scale-110"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                sekretariat@kreadika.id
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Mitra;
