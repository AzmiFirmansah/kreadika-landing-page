function Kontak({ onNavigate }) {
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
    <main id="kontak-kreadika">
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
              <span className="text-kreadika-600">Layanan Sekretariat</span>
            </span>

            <h1 className="mt-5 text-3xl font-bold tracking-tight text-kreadika-800 sm:text-4xl lg:text-5xl lg:leading-[1.15]">
              Hubungi Kami
            </h1>

            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              Sekretariat KREADIKA siap membantu pertanyaan tentang makalah,
              pendaftaran, dan kerja sama.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== 
          SEKRETARIAT
      ==================== */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Section Headline */}
            <div className="lg:col-span-5">
              <span className="inline-block rounded-full border border-kreadika-200 bg-kreadika-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-kreadika-700">
                Sekretariat
              </span>
              <h2 className="mt-4 text-2xl font-bold leading-snug text-kreadika-800 sm:text-3xl">
                Sekretariat KREADIKA
              </h2>
              <div className="mt-5 h-1 w-14 rounded-full bg-kreadika-600"></div>
            </div>

            {/* Content Cards */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-7">
              {/* Alamat Sekretariat */}
              <div className="group flex flex-col rounded-2xl border border-kreadika-200/80 bg-white p-6 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-kreadika-400 hover:shadow-md hover:shadow-kreadika-800/5">
                <p className="text-xs font-semibold uppercase tracking-wider text-kreadika-600">
                  Alamat Kantor
                </p>
                <h3 className="mt-2 text-lg font-bold text-kreadika-800 transition-colors duration-200 group-hover:text-kreadika-600">
                  Scientific Advantage Publishing
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Citraland Beaumont B7/21, Sepang, Kota Serang
                  <br />
                  Banten, Indonesia
                </p>
              </div>

              {/* Kontak Langsung */}
              <div className="group flex flex-col justify-between rounded-2xl border border-kreadika-200/80 bg-white p-6 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-kreadika-400 hover:shadow-md hover:shadow-kreadika-800/5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-kreadika-600">
                    Kontak Langsung
                  </p>
                  <div className="mt-4 space-y-3">
                    <div>
                      <span className="block text-xs font-medium uppercase text-slate-600">
                        Email
                      </span>
                      <a
                        href="mailto:sekretariat@kreadika.id"
                        className="text-base font-semibold text-kreadika-600 transition-colors duration-200 hover:text-kreadika-800 hover:underline underline-offset-4"
                      >
                        sekretariat@kreadika.id
                      </a>
                    </div>
                    <div>
                      <span className="block text-xs font-medium uppercase text-slate-600">
                        WhatsApp
                      </span>
                      <p className="text-base font-semibold text-kreadika-800">
                        [nomor WhatsApp]
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 
          UNDUHAN
      ==================== */}
      <section className="border-y border-kreadika-200/70 bg-kreadika-50/60 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full border border-kreadika-200 bg-white px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-kreadika-700 shadow-2xs">
              Unduhan
            </span>
            <h2 className="mt-3 text-2xl font-bold text-kreadika-800 sm:text-3xl">
              Dokumen &amp; Berkas
            </h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              Template makalah dan poster call for papers.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Template Makalah */}
            <div className="group flex flex-col justify-between rounded-2xl border border-kreadika-200/80 bg-white p-6 shadow-2xs transition-all duration-300 hover:-translate-y-1.5 hover:border-kreadika-400 hover:shadow-md hover:shadow-kreadika-800/5 sm:p-8">
              <div>
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-wider text-kreadika-600">
                    Format Makalah
                  </p>
                  <span className="rounded-full border border-kreadika-200/70 bg-kreadika-50 px-2.5 py-0.5 text-xs font-medium text-kreadika-700">
                    [segera tersedia]
                  </span>
                </div>
                <h3 className="mt-3 text-xl font-bold text-kreadika-800 transition-colors duration-200 group-hover:text-kreadika-600">
                  Template makalah
                </h3>
              </div>
              <div className="mt-6">
                <a
                  href="https://kreadika.id/call-for-papers#ketentuan"
                  onClick={(e) => handleClick(e, "/call-for-papers#ketentuan")}
                  className="group/btn inline-flex items-center justify-center rounded-xl bg-kreadika-600 px-5 py-3 text-sm font-semibold text-white shadow-xs shadow-kreadika-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-kreadika-700 hover:shadow-md hover:shadow-kreadika-600/25 active:translate-y-0 active:scale-[0.98]"
                >
                  Template makalah
                  <span
                    aria-hidden="true"
                    className="ml-1.5 transition-transform duration-300 group-hover/btn:translate-x-1"
                  >
                    →
                  </span>
                </a>
              </div>
            </div>

            {/* Poster Call for Papers */}
            <div className="group flex flex-col justify-between rounded-2xl border border-kreadika-200/80 bg-white p-6 shadow-2xs transition-all duration-300 hover:-translate-y-1.5 hover:border-kreadika-400 hover:shadow-md hover:shadow-kreadika-800/5 sm:p-8">
              <div>
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-wider text-kreadika-600">
                    Publikasi
                  </p>
                  <span className="rounded-full border border-kreadika-200/70 bg-kreadika-50 px-2.5 py-0.5 text-xs font-medium text-kreadika-700">
                    [segera tersedia]
                  </span>
                </div>
                <h3 className="mt-3 text-xl font-bold text-kreadika-800 transition-colors duration-200 group-hover:text-kreadika-600">
                  Poster call for papers
                </h3>
              </div>
              <div className="mt-6">
                <span className="inline-flex cursor-not-allowed items-center justify-center rounded-xl border border-slate-200/90 bg-slate-100/80 px-5 py-3 text-sm font-semibold text-slate-600">
                  Poster call for papers [segera tersedia]
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 
          MEDIA SOSIAL
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
                  Kanal Resmi
                </span>
                <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                  Media sosial
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 shrink-0">
                {/* Instagram */}
                <div className="flex flex-col rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/15 hover:shadow-md">
                  <p className="text-xs font-semibold uppercase tracking-wider text-kreadika-200">
                    Instagram
                  </p>
                  <p className="mt-1 text-base font-semibold">[@akun]</p>
                </div>

                {/* YouTube */}
                <div className="flex flex-col rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/15 hover:shadow-md">
                  <p className="text-xs font-semibold uppercase tracking-wider text-kreadika-200">
                    YouTube
                  </p>
                  <p className="mt-1 text-base font-semibold">[kanal]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Kontak;
