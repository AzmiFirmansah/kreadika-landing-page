function Prosiding({ onNavigate }) {
  const handleClick = (e, path) => {
    if (onNavigate) {
      if (path.startsWith("/")) {
        e.preventDefault();
        onNavigate(path);
      } else if (path.includes("kreadika.id")) {
        const localPath = path.replace(/https?:\/\/(www\.)?kreadika\.id/, "");
        if (localPath.startsWith("/")) {
          e.preventDefault();
          onNavigate(localPath);
        }
      }
    }
  };

  return (
    <main id="prosiding-kreadika">
      {/* ==================== 
          HERO / PAGE HEADER
      ==================== */}
      <section className="relative overflow-hidden border-b border-kreadika-200/80 bg-linear-to-b from-kreadika-50 via-kreadika-50/40 to-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute -top-24 left-1/2 h-80 w-2xl -translate-x-1/2 rounded-full bg-kreadika-200/40 blur-3xl"></div>
        </div>
        <div className="relative mx-auto max-w-6xl px-4 pt-14 pb-14 sm:px-6 sm:pt-20 sm:pb-18 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-kreadika-200 bg-white px-4 py-1.5 text-xs font-semibold tracking-wide text-kreadika-700 shadow-2xs transition-colors duration-300 hover:border-kreadika-300 hover:bg-kreadika-50">
              <span className="h-2 w-2 rounded-full bg-kreadika-600 animate-pulse"></span>
              <span>KREADIKA 2027</span>
              <span aria-hidden="true" className="text-slate-600">•</span>
              <span className="text-kreadika-600">Publikasi Ilmiah</span>
            </span>

            <h1 className="mt-5 text-3xl font-bold tracking-tight text-kreadika-800 sm:text-4xl lg:text-5xl lg:leading-[1.15]">
              Prosiding KREADIKA
            </h1>

            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              Artikel terpilih diterbitkan dalam prosiding ber-ISSN dan ber-DOI
              yang dapat diakses terbuka.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== 
          TENTANG PROSIDING
      ==================== */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Section Headline */}
            <div className="lg:col-span-5">
              <span className="inline-block rounded-full border border-kreadika-200 bg-kreadika-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-kreadika-700">
                Publikasi Ilmiah
              </span>
              <h2 className="mt-4 text-2xl font-bold leading-snug text-kreadika-800 sm:text-3xl">
                Tentang Prosiding
              </h2>
              <div className="mt-5 h-1 w-14 rounded-full bg-kreadika-600"></div>
            </div>

            {/* Content Body */}
            <div className="space-y-5 text-base leading-relaxed text-slate-600 lg:col-span-7">
              <p>
                <strong className="font-semibold text-kreadika-800">
                  Prosiding KREADIKA
                </strong>{" "}
                diterbitkan oleh Scientific Advantage Publishing setelah setiap
                penyelenggaraan seminar. Setiap artikel direview oleh Komite
                Ilmiah dan memperoleh DOI melalui Crossref.
              </p>
              <div className="rounded-2xl border border-kreadika-200/80 bg-kreadika-50/60 p-5 text-sm text-kreadika-800 shadow-2xs transition-all duration-300 hover:border-kreadika-400 hover:shadow-xs">
                <p className="font-medium text-slate-700">
                  Artikel terbaik direkomendasikan ke jurnal mitra.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 
          IDENTITAS & KETENTUAN PROSIDING
      ==================== */}
      <section className="border-y border-kreadika-200/70 bg-kreadika-50/60 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full border border-kreadika-200 bg-white px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-kreadika-700 shadow-2xs">
              Informasi Publikasi
            </span>
            <h2 className="mt-3 text-2xl font-bold text-kreadika-800 sm:text-3xl">
              Ketentuan &amp; Akses Prosiding
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {/* ISSN */}
            <div className="group flex flex-col rounded-2xl border border-kreadika-200/80 bg-white p-6 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-kreadika-400 hover:shadow-md hover:shadow-kreadika-800/5">
              <p className="text-xs font-semibold uppercase tracking-wider text-kreadika-600">
                ISSN
              </p>
              <p className="mt-2 text-xl font-bold text-kreadika-800 transition-colors duration-200 group-hover:text-kreadika-600">
                [dalam proses pengajuan]
              </p>
            </div>

            {/* DOI */}
            <div className="group flex flex-col rounded-2xl border border-kreadika-200/80 bg-white p-6 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-kreadika-400 hover:shadow-md hover:shadow-kreadika-800/5">
              <p className="text-xs font-semibold uppercase tracking-wider text-kreadika-600">
                DOI
              </p>
              <p className="mt-2 text-xl font-bold text-kreadika-800 transition-colors duration-200 group-hover:text-kreadika-600">
                Setiap artikel
              </p>
            </div>

            {/* Akses */}
            <div className="group flex flex-col rounded-2xl border border-kreadika-200/80 bg-white p-6 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-kreadika-400 hover:shadow-md hover:shadow-kreadika-800/5">
              <p className="text-xs font-semibold uppercase tracking-wider text-kreadika-600">
                Akses
              </p>
              <p className="mt-2 text-xl font-bold text-kreadika-800 transition-colors duration-200 group-hover:text-kreadika-600">
                Terbuka (open access)
              </p>
            </div>

            {/* Pengiriman dan review */}
            <div className="group flex flex-col rounded-2xl border border-kreadika-200/80 bg-white p-6 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-kreadika-400 hover:shadow-md hover:shadow-kreadika-800/5 sm:col-span-2 lg:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-kreadika-600">
                Pengiriman dan review
              </p>
              <p className="mt-2 text-base font-bold text-kreadika-800 transition-colors duration-200 group-hover:text-kreadika-600 sm:text-lg">
                Melalui sistem OJS prosiding KREADIKA
              </p>
            </div>

            {/* Rekomendasi Jurnal */}
            <div className="group flex flex-col rounded-2xl border border-kreadika-200/80 bg-white p-6 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-kreadika-400 hover:shadow-md hover:shadow-kreadika-800/5 sm:col-span-2 lg:col-span-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-kreadika-600">
                Rekomendasi
              </p>
              <p className="mt-2 text-base font-bold text-kreadika-800 transition-colors duration-200 group-hover:text-kreadika-600 sm:text-lg">
                Artikel terbaik direkomendasikan ke jurnal mitra.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 
          ARSIP PROSIDING
      ==================== */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-kreadika-700 bg-kreadika-800 px-6 py-10 text-white shadow-lg shadow-kreadika-800/10 transition-shadow duration-300 hover:shadow-xl sm:px-10 sm:py-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-kreadika-600/30 blur-3xl"
            />
            <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl">
                <span className="inline-block rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-kreadika-200">
                  Arsip Publikasi
                </span>
                <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                  Arsip prosiding
                </h2>
                <p className="mt-2 text-base leading-relaxed text-kreadika-100/90">
                  Prosiding KREADIKA 2027 terbit pada [tanggal].
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <a
                  href="https://kreadika.id/prosiding"
                  onClick={(e) => handleClick(e, "/prosiding")}
                  className="group inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-kreadika-800 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:bg-kreadika-50 hover:shadow-md active:translate-y-0 active:scale-[0.98]"
                >
                  Lihat arsip prosiding
                  <span
                    aria-hidden="true"
                    className="ml-1.5 transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
                <a
                  href="https://kreadika.id/call-for-papers#ketentuan"
                  onClick={(e) => handleClick(e, "/call-for-papers#ketentuan")}
                  className="group inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/15 hover:shadow-md active:translate-y-0 active:scale-[0.98]"
                >
                  Ketentuan makalah
                  <span
                    aria-hidden="true"
                    className="ml-1.5 transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Prosiding;
