function PendaftaranOnline({ onNavigate }) {
  const handleClick = (e, path) => {
    if (onNavigate && path.startsWith("/")) {
      e.preventDefault();
      onNavigate(path);
    }
  };

  return (
    <main id="pendaftaran-online">
      {/* ==================== 
          HERO / PAGE HEADER
      ==================== */}
      <section className="bg-kreadika-navy text-white">
        <div className="mx-auto max-w-6xl px-4 pt-12 pb-14 sm:px-6 sm:pt-16 sm:pb-20 lg:px-8">
          <div className="max-w-3xl">
            {/* Breadcrumb / Category Badge */}
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-sky-200">
              <span className="h-2 w-2 rounded-full bg-sky-300"></span>
              KREADIKA 2027
            </span>

            {/* Title */}
            <h1 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.15]">
              Pendaftaran Online
            </h1>

            {/* Description */}
            <p className="mt-4 text-base leading-relaxed text-blue-100 sm:text-lg">
              Pendaftaran dan pembayaran dilakukan melalui sistem registrasi
              Scientific Advantage Publishing.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== 
          STATUS PENDAFTARAN
      ==================== */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block rounded-md bg-kreadika-ice px-3 py-1 text-xs font-semibold uppercase tracking-wider text-kreadika-royal">
              Status Pendaftaran
            </span>
            <h2 className="mt-3 text-2xl font-bold text-kreadika-navy sm:text-3xl">
              Pendaftaran online segera dibuka
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
              Formulir pendaftaran online dibuka bersamaan dengan pengumuman call
              for papers. Saat dibuka, tombol pendaftaran di situs ini langsung
              mengarah ke formulir.
            </p>
          </div>

          {/* Announcement Card */}
          <div className="mt-10 rounded-2xl border border-blue-100 bg-kreadika-ice/60 p-6 sm:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-kreadika-royal shadow-xs">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-800">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                      Segera Dibuka
                    </span>
                  </div>
                  <h3 className="mt-2 text-base font-bold text-kreadika-navy sm:text-lg">
                    Sistem Formulir Registrasi KREADIKA 2027
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Tautan langsung menuju formulir pendaftaran akan diaktifkan
                    secara otomatis saat periode registrasi dibuka.
                  </p>
                </div>
              </div>

              <div className="shrink-0">
                <span className="inline-flex cursor-not-allowed items-center justify-center rounded-lg border border-slate-200 bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-500">
                  Formulir Belum Dibuka
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 
          YANG PERLU DISIAPKAN
      ==================== */}
      <section className="border-y border-blue-100 bg-kreadika-ice py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block rounded-md bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-kreadika-royal">
              Persyaratan Berkas
            </span>
            <h2 className="mt-3 text-2xl font-bold text-kreadika-navy sm:text-3xl">
              Yang perlu disiapkan:
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
              Pastikan Anda telah mempersiapkan informasi dan dokumen berikut
              sebelum mengisi formulir pendaftaran online:
            </p>
          </div>

          {/* Preparation Cards */}
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Card 1: ID Submission OJS & Judul Makalah */}
            <div className="flex flex-col justify-between rounded-2xl border border-blue-100 bg-white p-6 sm:p-7 shadow-xs">
              <div>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-kreadika-royal text-white shadow-xs">
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
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <span className="rounded-full bg-kreadika-ice px-3 py-1 text-xs font-semibold text-kreadika-royal">
                    Khusus Pemakalah
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold text-kreadika-navy">
                  ID submission OJS dan judul makalah
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Khusus bagi peserta pemakalah yang abstraknya telah diterima
                  oleh panitia, siapkan ID penyerahan naskah OJS dan judul
                  lengkap makalah yang diajukan.
                </p>
              </div>
            </div>

            {/* Card 2: Bukti Pembayaran */}
            <div className="flex flex-col justify-between rounded-2xl border border-blue-100 bg-white p-6 sm:p-7 shadow-xs">
              <div>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-kreadika-royal text-white shadow-xs">
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
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      />
                    </svg>
                  </div>
                  <span className="rounded-full bg-kreadika-ice px-3 py-1 text-xs font-semibold text-kreadika-royal">
                    Maksimal 5 MB
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold text-kreadika-navy">
                  Bukti pembayaran
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Bukti pembayaran berupa file JPG, PNG, atau PDF (maksimal 5
                  MB) yang sah dan dapat terbaca dengan jelas untuk verifikasi
                  panitia.
                </p>
              </div>
            </div>
          </div>

          {/* Biaya Pendaftaran Callout Banner */}
          <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-blue-100 bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6 shadow-xs">
            <div className="flex items-center gap-3.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-kreadika-ice text-kreadika-royal">
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
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p className="text-sm font-medium text-slate-700 sm:text-base">
                Biaya pendaftaran tercantum di halaman{" "}
                <strong className="font-semibold text-kreadika-navy">
                  Pendaftaran
                </strong>
                .
              </p>
            </div>
            <a
              href="/pendaftaran"
              onClick={(e) => handleClick(e, "/pendaftaran")}
              className="inline-flex items-center gap-1.5 self-start text-sm font-semibold text-kreadika-royal hover:underline sm:self-auto shrink-0"
            >
              Lihat biaya pendaftaran <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ==================== 
          ADA PERTANYAAN (CTA BANNER)
      ==================== */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-kreadika-navy px-6 py-10 sm:px-10 sm:py-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl">
                <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Ada pertanyaan?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-blue-100 sm:text-base">
                  Hubungi sekretariat melalui email.
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap items-center gap-3">
                <a
                  href="mailto:sekretariat@kreadika.id"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-kreadika-royal px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
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
                <a
                  href="/pendaftaran"
                  onClick={(e) => handleClick(e, "/pendaftaran")}
                  className="inline-flex items-center justify-center rounded-lg border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Lihat biaya pendaftaran
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default PendaftaranOnline;

