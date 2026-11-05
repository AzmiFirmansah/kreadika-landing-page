import type { PageProps, LinkClickEvent } from "../types";

function PendaftaranOnline({ onNavigate }: PageProps) {
  const handleClick = (e: LinkClickEvent, path: string) => {
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
      <section className="relative overflow-hidden border-b border-kreadika-200/80 bg-linear-to-b from-kreadika-50 via-kreadika-50/40 to-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute -top-24 left-1/2 h-80 w-2xl -translate-x-1/2 rounded-full bg-kreadika-200/40 blur-3xl"></div>
        </div>
        <div className="relative mx-auto max-w-6xl px-4 pt-14 pb-14 sm:px-6 sm:pt-20 sm:pb-18 lg:px-8">
          <div className="max-w-3xl">
            {/* Breadcrumb / Category Badge */}
            <span className="inline-flex items-center gap-2 rounded-full border border-kreadika-200 bg-white px-4 py-1.5 text-xs font-semibold tracking-wide text-kreadika-700 shadow-2xs transition-colors duration-300 hover:border-kreadika-300 hover:bg-kreadika-50">
              <span className="h-2 w-2 rounded-full bg-kreadika-600 animate-pulse"></span>
              <span>KREADIKA 2027</span>
              <span aria-hidden="true" className="text-slate-600">•</span>
              <span className="text-kreadika-600">Formulir Registrasi</span>
            </span>

            {/* Title */}
            <h1 className="mt-5 text-3xl font-bold tracking-tight text-kreadika-800 sm:text-4xl lg:text-5xl lg:leading-[1.15]">
              Pendaftaran Online
            </h1>

            {/* Description */}
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
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
            <span className="inline-block rounded-full border border-kreadika-200 bg-kreadika-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-kreadika-700">
              Status Pendaftaran
            </span>
            <h2 className="mt-3 text-2xl font-bold text-kreadika-800 sm:text-3xl">
              Pendaftaran online segera dibuka
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
              Formulir pendaftaran online dibuka bersamaan dengan pengumuman
              call for papers. Saat dibuka, tombol pendaftaran di situs ini
              langsung mengarah ke formulir.
            </p>
          </div>

          {/* Announcement Card */}
          <div className="mt-10 rounded-2xl border border-kreadika-200/80 bg-kreadika-50/50 p-6 shadow-2xs transition-all duration-300 hover:border-kreadika-400 hover:bg-white hover:shadow-md hover:shadow-kreadika-800/5 sm:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-kreadika-200/70 bg-white text-kreadika-600 shadow-2xs">
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
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200/80 bg-amber-50 px-2.5 py-0.5 text-xs font-semibold text-amber-800">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                      Segera Dibuka
                    </span>
                  </div>
                  <h3 className="mt-2 text-base font-bold text-kreadika-800 sm:text-lg">
                    Sistem Formulir Registrasi KREADIKA 2027
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Tautan langsung menuju formulir pendaftaran akan diaktifkan
                    secara otomatis saat periode registrasi dibuka.
                  </p>
                </div>
              </div>

              <div className="shrink-0">
                <span className="inline-flex cursor-not-allowed items-center justify-center rounded-xl border border-slate-200/90 bg-slate-100/80 px-5 py-3 text-sm font-semibold text-slate-600">
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
      <section className="border-y border-kreadika-200/70 bg-kreadika-50/60 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full border border-kreadika-200 bg-white px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-kreadika-700 shadow-2xs">
              Persyaratan Berkas
            </span>
            <h2 className="mt-3 text-2xl font-bold text-kreadika-800 sm:text-3xl">
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
            <div className="group flex flex-col justify-between rounded-2xl border border-kreadika-200/80 bg-white p-6 shadow-2xs transition-all duration-300 hover:-translate-y-1.5 hover:border-kreadika-400 hover:shadow-md hover:shadow-kreadika-800/5 sm:p-7">
              <div>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-kreadika-200/70 bg-kreadika-50 text-kreadika-600 shadow-2xs transition-all duration-300 group-hover:scale-105 group-hover:border-kreadika-600 group-hover:bg-kreadika-600 group-hover:text-white">
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
                  <span className="rounded-full border border-kreadika-200/70 bg-kreadika-50 px-3 py-1 text-xs font-semibold text-kreadika-700">
                    Khusus Pemakalah
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold text-kreadika-800 transition-colors duration-200 group-hover:text-kreadika-600">
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
            <div className="group flex flex-col justify-between rounded-2xl border border-kreadika-200/80 bg-white p-6 shadow-2xs transition-all duration-300 hover:-translate-y-1.5 hover:border-kreadika-400 hover:shadow-md hover:shadow-kreadika-800/5 sm:p-7">
              <div>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-kreadika-200/70 bg-kreadika-50 text-kreadika-600 shadow-2xs transition-all duration-300 group-hover:scale-105 group-hover:border-kreadika-600 group-hover:bg-kreadika-600 group-hover:text-white">
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
                  <span className="rounded-full border border-kreadika-200/70 bg-kreadika-50 px-3 py-1 text-xs font-semibold text-kreadika-700">
                    Maksimal 5 MB
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold text-kreadika-800 transition-colors duration-200 group-hover:text-kreadika-600">
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
          <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-kreadika-200/80 bg-white p-5 shadow-2xs transition-all duration-300 hover:border-kreadika-400 hover:shadow-md hover:shadow-kreadika-800/5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div className="flex items-center gap-3.5">
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
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p className="text-sm font-medium text-slate-600 sm:text-base">
                Biaya pendaftaran tercantum di halaman{" "}
                <strong className="font-semibold text-kreadika-800">
                  Pendaftaran
                </strong>
                .
              </p>
            </div>
            <a
              href="/pendaftaran"
              onClick={(e) => handleClick(e, "/pendaftaran")}
              className="group inline-flex shrink-0 items-center gap-1.5 self-start text-sm font-semibold text-kreadika-600 transition-colors duration-200 hover:text-kreadika-800 hover:underline sm:self-auto"
            >
              Lihat biaya pendaftaran{" "}
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ==================== 
          ADA PERTANYAAN (CTA BANNER)
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
                <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Ada pertanyaan?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-kreadika-100/90 sm:text-base">
                  Hubungi sekretariat melalui email.
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap items-center gap-3">
                <a
                  href="mailto:sekretariat@kreadika.id"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-kreadika-800 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:bg-kreadika-50 hover:shadow-md active:translate-y-0 active:scale-[0.98]"
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
                <a
                  href="/pendaftaran"
                  onClick={(e) => handleClick(e, "/pendaftaran")}
                  className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/15 hover:shadow-md active:translate-y-0 active:scale-[0.98]"
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
