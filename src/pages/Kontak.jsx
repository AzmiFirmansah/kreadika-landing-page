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
      <section className="bg-kreadika-navy text-white">
        <div className="mx-auto max-w-6xl px-4 pt-12 pb-14 sm:px-6 sm:pt-16 sm:pb-20 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-sky-200">
              <span className="h-2 w-2 rounded-full bg-sky-300"></span>
              Kontak
            </span>

            <h1 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.15]">
              Hubungi Kami
            </h1>

            <p className="mt-4 text-base leading-relaxed text-blue-100 sm:text-lg">
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
              <span className="inline-block rounded-md bg-kreadika-ice px-3 py-1 text-xs font-semibold uppercase tracking-wider text-kreadika-royal">
                Sekretariat
              </span>
              <h2 className="mt-4 text-2xl font-bold leading-snug text-kreadika-navy sm:text-3xl">
                Sekretariat KREADIKA
              </h2>
              <div className="mt-5 h-1 w-16 rounded-full bg-kreadika-royal"></div>
            </div>

            {/* Content Cards */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-7">
              {/* Alamat Sekretariat */}
              <div className="flex flex-col rounded-2xl border border-blue-100 bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-sky-600">
                  Alamat Kantor
                </p>
                <h3 className="mt-2 text-lg font-bold text-kreadika-navy">
                  Scientific Advantage Publishing
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Citraland Beaumont B7/21, Sepang, Kota Serang
                  <br />
                  Banten, Indonesia
                </p>
              </div>

              {/* Kontak Langsung */}
              <div className="flex flex-col justify-between rounded-2xl border border-blue-100 bg-white p-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-sky-600">
                    Kontak Langsung
                  </p>
                  <div className="mt-4 space-y-3">
                    <div>
                      <span className="block text-xs font-medium uppercase text-slate-500">
                        Email
                      </span>
                      <a
                        href="mailto:sekretariat@kreadika.id"
                        className="text-base font-semibold text-kreadika-royal hover:underline"
                      >
                        sekretariat@kreadika.id
                      </a>
                    </div>
                    <div>
                      <span className="block text-xs font-medium uppercase text-slate-500">
                        WhatsApp
                      </span>
                      <p className="text-base font-semibold text-kreadika-navy">
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
      <section className="border-y border-blue-100 bg-kreadika-ice py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block rounded-md bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-kreadika-royal">
              Unduhan
            </span>
            <h2 className="mt-3 text-2xl font-bold text-kreadika-navy sm:text-3xl">
              Dokumen &amp; Berkas
            </h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              Template makalah dan poster call for papers.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Template Makalah */}
            <div className="flex flex-col justify-between rounded-2xl border border-blue-100 bg-white p-6 sm:p-8">
              <div>
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-wider text-sky-600">
                    Format Makalah
                  </p>
                  <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
                    [segera tersedia]
                  </span>
                </div>
                <h3 className="mt-3 text-xl font-bold text-kreadika-navy">
                  Template makalah
                </h3>
              </div>
              <div className="mt-6">
                <a
                  href="https://kreadika.id/call-for-papers#ketentuan"
                  onClick={(e) =>
                    handleClick(e, "/call-for-papers#ketentuan")
                  }
                  className="inline-flex items-center justify-center rounded-lg bg-kreadika-royal px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Template makalah
                  <span aria-hidden="true" className="ml-1.5">
                    →
                  </span>
                </a>
              </div>
            </div>

            {/* Poster Call for Papers */}
            <div className="flex flex-col justify-between rounded-2xl border border-blue-100 bg-white p-6 sm:p-8">
              <div>
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-wider text-sky-600">
                    Publikasi
                  </p>
                  <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
                    [segera tersedia]
                  </span>
                </div>
                <h3 className="mt-3 text-xl font-bold text-kreadika-navy">
                  Poster call for papers
                </h3>
              </div>
              <div className="mt-6">
                <span className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-400 cursor-not-allowed">
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
          <div className="rounded-2xl bg-kreadika-navy px-6 py-10 sm:px-10 sm:py-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl">
                <span className="inline-block rounded-md bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-200">
                  Kanal Resmi
                </span>
                <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                  Media sosial
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 shrink-0">
                {/* Instagram */}
                <div className="flex flex-col rounded-xl border border-white/20 bg-white/10 px-6 py-4 text-white">
                  <p className="text-xs uppercase tracking-wider text-sky-300">
                    Instagram
                  </p>
                  <p className="mt-1 text-base font-semibold">[@akun]</p>
                </div>

                {/* YouTube */}
                <div className="flex flex-col rounded-xl border border-white/20 bg-white/10 px-6 py-4 text-white">
                  <p className="text-xs uppercase tracking-wider text-sky-300">
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

