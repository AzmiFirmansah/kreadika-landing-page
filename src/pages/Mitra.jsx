function Mitra() {
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
          HERO / PAGE HEADER
      ==================== */}
      <section className="bg-kreadika-navy text-white">
        <div className="mx-auto max-w-6xl px-4 pt-12 pb-14 sm:px-6 sm:pt-16 sm:pb-20 lg:px-8">
          <div className="max-w-3xl">
            {/* Breadcrumb / Category Badge */}
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-sky-200">
              <span className="h-2 w-2 rounded-full bg-sky-300"></span>
              Kerja sama
            </span>

            {/* Title */}
            <h1 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.15]">
              Mitra KREADIKA
            </h1>

            {/* Description */}
            <p className="mt-4 text-base leading-relaxed text-blue-100 sm:text-lg">
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
            <span className="inline-block rounded-md bg-kreadika-ice px-3 py-1 text-xs font-semibold uppercase tracking-wider text-kreadika-royal">
              Mitra Penyelenggara
            </span>
            <h2 className="mt-3 text-2xl font-bold text-kreadika-navy sm:text-3xl">
              Co-host
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coHostList.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-between rounded-2xl border border-blue-100 bg-white p-6"
              >
                <div>
                  {/* Logo Placeholder */}
                  <div className="flex h-36 w-full items-center justify-center rounded-xl border-2 border-dashed border-blue-100 bg-kreadika-ice/50">
                    <div className="flex flex-col items-center gap-2 text-slate-400">
                      <svg
                        className="h-8 w-8 text-slate-300"
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
                      <span className="font-mono text-xs font-medium text-slate-400">
                        [logo]
                      </span>
                    </div>
                  </div>

                  {/* Partner Info */}
                  <div className="mt-5">
                    <h3 className="text-lg font-bold text-kreadika-navy">
                      {item.nama}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-slate-500">
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
      <section className="border-y border-blue-100 bg-kreadika-ice py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block rounded-md bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-kreadika-royal">
              Publikasi Ilmiah
            </span>
            <h2 className="mt-3 text-2xl font-bold text-kreadika-navy sm:text-3xl">
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
                className="flex flex-col justify-between rounded-2xl border border-blue-100 bg-white p-6 sm:p-8"
              >
                <div>
                  {/* Logo Placeholder */}
                  <div className="flex h-36 w-full items-center justify-center rounded-xl border-2 border-dashed border-blue-100 bg-slate-50">
                    <div className="flex flex-col items-center gap-2 text-slate-400">
                      <svg
                        className="h-8 w-8 text-slate-300"
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
                      <span className="font-mono text-xs font-medium text-slate-400">
                        [logo]
                      </span>
                    </div>
                  </div>

                  {/* Journal Info */}
                  <div className="mt-5">
                    <h3 className="text-xl font-bold text-kreadika-navy">
                      {item.nama}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-slate-500">
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
            <span className="inline-block rounded-md bg-kreadika-ice px-3 py-1 text-xs font-semibold uppercase tracking-wider text-kreadika-royal">
              Skema Kemitraan
            </span>
            <h2 className="mt-3 text-2xl font-bold text-kreadika-navy sm:text-3xl">
              Bentuk Kerja Sama
            </h2>
          </div>

          {/* Cards for Schemes */}
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {bentukKerjaSamaList.map((item, index) => (
              <div
                key={index}
                className="flex flex-col rounded-2xl border border-blue-100 bg-white p-6 sm:p-7"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-kreadika-royal text-sm font-bold text-white">
                  {item.nomor}
                </span>
                <h3 className="mt-5 text-lg font-bold text-kreadika-navy">
                  {item.judul}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.deskripsi}
                </p>
              </div>
            ))}
          </div>

          {/* Mitra Ditampilkan Statement Callout */}
          <div className="mt-10 rounded-2xl border border-blue-100 bg-kreadika-ice p-6 sm:p-7">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-kreadika-royal text-white">
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
              <p className="text-sm font-medium leading-relaxed text-kreadika-navy sm:text-base">
                Mitra ditampilkan di situs web, materi publikasi, sertifikat,
                dan prosiding.
              </p>
            </div>
          </div>

          {/* Partnership CTA Banner */}
          <div className="mt-8 rounded-2xl bg-kreadika-navy px-6 py-10 sm:px-10 sm:py-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl">
                <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Tertarik bermitra?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-blue-100 sm:text-base">
                  Kirim email kepada sekretariat dengan nama lembaga dan bentuk
                  kerja sama yang diminati.
                </p>
              </div>
              <div className="shrink-0">
                <a
                  href="mailto:sekretariat@kreadika.id"
                  className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-kreadika-royal px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-kreadika-royal-dark"
                >
                  <svg
                    className="h-4 w-4"
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
        </div>
      </section>
    </main>
  );
}

export default Mitra;
