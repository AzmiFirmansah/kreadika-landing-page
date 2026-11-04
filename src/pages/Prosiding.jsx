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
      <section className="bg-kreadika-navy text-white">
        <div className="mx-auto max-w-6xl px-4 pt-12 pb-14 sm:px-6 sm:pt-16 sm:pb-20 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-sky-200">
              <span className="h-2 w-2 rounded-full bg-sky-300"></span>
              Publikasi
            </span>

            <h1 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.15]">
              Prosiding KREADIKA
            </h1>

            <p className="mt-4 text-base leading-relaxed text-blue-100 sm:text-lg">
              Artikel terpilih diterbitkan dalam prosiding ber-ISSN dan ber-DOI yang dapat diakses terbuka.
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
              <span className="inline-block rounded-md bg-kreadika-ice px-3 py-1 text-xs font-semibold uppercase tracking-wider text-kreadika-royal">
                Publikasi Ilmiah
              </span>
              <h2 className="mt-4 text-2xl font-bold leading-snug text-kreadika-navy sm:text-3xl">
                Tentang Prosiding
              </h2>
              <div className="mt-5 h-1 w-16 rounded-full bg-kreadika-royal"></div>
            </div>

            {/* Content Body */}
            <div className="space-y-5 text-base leading-relaxed text-slate-600 lg:col-span-7">
              <p>
                <strong className="font-semibold text-kreadika-navy">
                  Prosiding KREADIKA
                </strong>{" "}
                diterbitkan oleh Scientific Advantage Publishing setelah setiap
                penyelenggaraan seminar. Setiap artikel direview oleh Komite
                Ilmiah dan memperoleh DOI melalui Crossref.
              </p>
              <div className="rounded-2xl border border-blue-100 bg-kreadika-ice p-5 text-sm text-kreadika-navy">
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
      <section className="border-y border-blue-100 bg-kreadika-ice py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block rounded-md bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-kreadika-royal">
              Informasi Publikasi
            </span>
            <h2 className="mt-3 text-2xl font-bold text-kreadika-navy sm:text-3xl">
              Ketentuan &amp; Akses Prosiding
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {/* ISSN */}
            <div className="flex flex-col rounded-2xl border border-blue-100 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-sky-600">
                ISSN
              </p>
              <p className="mt-2 text-xl font-bold text-kreadika-navy">
                [dalam proses pengajuan]
              </p>
            </div>

            {/* DOI */}
            <div className="flex flex-col rounded-2xl border border-blue-100 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-sky-600">
                DOI
              </p>
              <p className="mt-2 text-xl font-bold text-kreadika-navy">
                Setiap artikel
              </p>
            </div>

            {/* Akses */}
            <div className="flex flex-col rounded-2xl border border-blue-100 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-sky-600">
                Akses
              </p>
              <p className="mt-2 text-xl font-bold text-kreadika-navy">
                Terbuka (open access)
              </p>
            </div>

            {/* Pengiriman dan review */}
            <div className="flex flex-col rounded-2xl border border-blue-100 bg-white p-6 sm:col-span-2 lg:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-sky-600">
                Pengiriman dan review
              </p>
              <p className="mt-2 text-base font-bold text-kreadika-navy sm:text-lg">
                Melalui sistem OJS prosiding KREADIKA
              </p>
            </div>

            {/* Rekomendasi Jurnal */}
            <div className="flex flex-col rounded-2xl border border-blue-100 bg-white p-6 sm:col-span-2 lg:col-span-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-sky-600">
                Rekomendasi
              </p>
              <p className="mt-2 text-base font-bold text-kreadika-navy sm:text-lg">
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
          <div className="rounded-2xl bg-kreadika-navy px-6 py-10 sm:px-10 sm:py-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl">
                <span className="inline-block rounded-md bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-200">
                  Arsip Publikasi
                </span>
                <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                  Arsip prosiding
                </h2>
                <p className="mt-2 text-base leading-relaxed text-blue-100">
                  Prosiding KREADIKA 2027 terbit pada [tanggal].
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <a
                  href="https://kreadika.id/prosiding"
                  onClick={(e) => handleClick(e, "/prosiding")}
                  className="inline-flex items-center justify-center rounded-lg bg-kreadika-royal px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Lihat arsip prosiding
                  <span aria-hidden="true" className="ml-1.5">
                    →
                  </span>
                </a>
                <a
                  href="https://kreadika.id/call-for-papers#ketentuan"
                  onClick={(e) => handleClick(e, "/call-for-papers#ketentuan")}
                  className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/20"
                >
                  Ketentuan makalah
                  <span aria-hidden="true" className="ml-1.5">
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

