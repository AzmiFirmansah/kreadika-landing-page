import type { PageProps } from "../types";

function Panitia(_props: PageProps = {}) {
  return (
    <main id="panitia-kreadika">
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
              <span className="text-kreadika-600">Komite &amp; Pembicara</span>
            </span>

            {/* Title */}
            <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-kreadika-800 sm:text-4xl lg:text-5xl lg:leading-[1.15]">
              Panitia KREADIKA
            </h1>

            {/* Description */}
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              Panitia penyelenggara, Komite Ilmiah, dan pembicara kunci yang
              mengawal tata kelola dan kualitas akademik KREADIKA 2027.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== 
          OVERVIEW / TATA KELOLA SEMINAR
      ==================== */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Section Headline */}
            <div className="lg:col-span-5">
              <span className="inline-block rounded-full border border-kreadika-200 bg-kreadika-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-kreadika-700">
                Tata Kelola &amp; Integritas
              </span>
              <h2 className="mt-4 text-2xl font-bold leading-snug text-kreadika-800 sm:text-3xl">
                Kolaborasi Akademisi, Praktisi, dan Penyelenggara
              </h2>
            </div>

            {/* Content Body */}
            <div className="space-y-4 text-base leading-relaxed text-slate-600 lg:col-span-7">
              <p>
                Penyelenggaraan{" "}
                <strong className="font-semibold text-kreadika-800">
                  KREADIKA 2027
                </strong>{" "}
                didukung oleh susunan kepanitiaan yang solid, komite penelaah
                ilmiah independen, serta narasumber kunci yang kredibel di
                bidang kebijakan, sains pendidikan, dan implementasi praktik
                baik.
              </p>
              <p>
                Komite Ilmiah bertugas menyeleksi dan menelaah naskah melalui
                proses <em>peer-review</em> yang objektif, sementara panitia
                pelaksana memastikan seluruh rangkaian seminar luring maupun
                daring berjalan tertib, inklusif, dan tepat waktu.
              </p>
              <div className="rounded-2xl border border-kreadika-200/80 bg-kreadika-50/60 p-5 text-sm text-kreadika-800 shadow-2xs transition-all duration-300 hover:border-kreadika-400 hover:shadow-xs">
                <p className="font-medium italic text-slate-700">
                  “Sinergi antara pemangku kebijakan, ilmuwan pendidikan, dan
                  guru di garis depan adalah kunci lahirnya pendidikan yang
                  kreatif dan adaptif.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 
          PEMBICARA KUNCI (KEYNOTE SPEAKERS)
      ==================== */}
      <section className="border-y border-kreadika-200/70 bg-kreadika-50/60 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full border border-kreadika-200 bg-white px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-kreadika-700 shadow-2xs">
              Narasumber Utama
            </span>
            <h2 className="mt-3 text-2xl font-bold text-kreadika-800 sm:text-3xl">
              Pembicara Kunci
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
              Tiga perspektif fundamental dalam menjawab tantangan perubahan
              lanskap pendidikan nasional.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Keynote 1: Kebijakan */}
            <div className="group flex flex-col justify-between rounded-2xl border border-kreadika-200/80 bg-white p-6 shadow-2xs transition-all duration-300 hover:-translate-y-1.5 hover:border-kreadika-400 hover:shadow-md hover:shadow-kreadika-800/5 sm:p-7">
              <div>
                {/* Speaker Photo Placeholder */}
                <div className="flex h-48 w-full items-center justify-center rounded-xl border-2 border-dashed border-kreadika-200/80 bg-kreadika-50/50 transition-colors duration-300 group-hover:border-kreadika-400 group-hover:bg-kreadika-50">
                  <div className="flex flex-col items-center gap-2 text-slate-500">
                    <svg
                      className="h-10 w-10 text-kreadika-300 transition-all duration-300 group-hover:scale-110 group-hover:text-kreadika-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                    <span className="font-mono text-xs font-semibold text-slate-600 transition-colors duration-200 group-hover:text-kreadika-700">
                      [Foto Pembicara]
                    </span>
                  </div>
                </div>

                {/* Speaker Info */}
                <div className="mt-5">
                  <span className="inline-block rounded-md bg-kreadika-50 px-2.5 py-1 text-xs font-semibold text-kreadika-700 border border-kreadika-200/70 transition-colors duration-200 group-hover:bg-kreadika-600 group-hover:text-white group-hover:border-kreadika-600">
                    Perspektif Kebijakan
                  </span>
                  <h3 className="mt-3 text-xl font-bold text-kreadika-800 transition-colors duration-200 group-hover:text-kreadika-600">
                    [Nama pembicara]
                  </h3>
                  <p className="mt-1 text-sm font-medium text-slate-600">
                    Perwakilan Kemendikdasmen atau Dinas Pendidikan: perspektif
                    kebijakan
                  </p>
                </div>
              </div>
            </div>

            {/* Keynote 2: Akademisi */}
            <div className="group flex flex-col justify-between rounded-2xl border border-kreadika-200/80 bg-white p-6 shadow-2xs transition-all duration-300 hover:-translate-y-1.5 hover:border-kreadika-400 hover:shadow-md hover:shadow-kreadika-800/5 sm:p-7">
              <div>
                {/* Speaker Photo Placeholder */}
                <div className="flex h-48 w-full items-center justify-center rounded-xl border-2 border-dashed border-kreadika-200/80 bg-kreadika-50/50 transition-colors duration-300 group-hover:border-kreadika-400 group-hover:bg-kreadika-50">
                  <div className="flex flex-col items-center gap-2 text-slate-500">
                    <svg
                      className="h-10 w-10 text-kreadika-300 transition-all duration-300 group-hover:scale-110 group-hover:text-kreadika-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                    <span className="font-mono text-xs font-semibold text-slate-600 transition-colors duration-200 group-hover:text-kreadika-700">
                      [Foto Pembicara]
                    </span>
                  </div>
                </div>

                {/* Speaker Info */}
                <div className="mt-5">
                  <span className="inline-block rounded-md bg-kreadika-50 px-2.5 py-1 text-xs font-semibold text-kreadika-700 border border-kreadika-200/70 transition-colors duration-200 group-hover:bg-kreadika-600 group-hover:text-white group-hover:border-kreadika-600">
                    Perspektif Akademik
                  </span>
                  <h3 className="mt-3 text-xl font-bold text-kreadika-800 transition-colors duration-200 group-hover:text-kreadika-600">
                    [Nama pembicara]
                  </h3>
                  <p className="mt-1 text-sm font-medium text-slate-600">
                    Akademisi pendidikan atau teknologi pendidikan
                  </p>
                </div>
              </div>
            </div>

            {/* Keynote 3: Praktisi */}
            <div className="group flex flex-col justify-between rounded-2xl border border-kreadika-200/80 bg-white p-6 shadow-2xs transition-all duration-300 hover:-translate-y-1.5 hover:border-kreadika-400 hover:shadow-md hover:shadow-kreadika-800/5 sm:p-7">
              <div>
                {/* Speaker Photo Placeholder */}
                <div className="flex h-48 w-full items-center justify-center rounded-xl border-2 border-dashed border-kreadika-200/80 bg-kreadika-50/50 transition-colors duration-300 group-hover:border-kreadika-400 group-hover:bg-kreadika-50">
                  <div className="flex flex-col items-center gap-2 text-slate-500">
                    <svg
                      className="h-10 w-10 text-kreadika-300 transition-all duration-300 group-hover:scale-110 group-hover:text-kreadika-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                    <span className="font-mono text-xs font-semibold text-slate-600 transition-colors duration-200 group-hover:text-kreadika-700">
                      [Foto Pembicara]
                    </span>
                  </div>
                </div>

                {/* Speaker Info */}
                <div className="mt-5">
                  <span className="inline-block rounded-md bg-kreadika-50 px-2.5 py-1 text-xs font-semibold text-kreadika-700 border border-kreadika-200/70 transition-colors duration-200 group-hover:bg-kreadika-600 group-hover:text-white group-hover:border-kreadika-600">
                    Perspektif Praktik Baik
                  </span>
                  <h3 className="mt-3 text-xl font-bold text-kreadika-800 transition-colors duration-200 group-hover:text-kreadika-600">
                    [Nama pembicara]
                  </h3>
                  <p className="mt-1 text-sm font-medium text-slate-600">
                    Praktisi: kepala sekolah atau guru penggerak dengan praktik
                    baik
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 
          KOMITE ILMIAH (SCIENTIFIC COMMITTEE)
      ==================== */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full border border-kreadika-200 bg-kreadika-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-kreadika-700">
              Dewan Ilmiah &amp; Reviewer
            </span>
            <h2 className="mt-3 text-2xl font-bold text-kreadika-800 sm:text-3xl">
              Komite Ilmiah
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
              Lima sampai sepuluh dosen atau peneliti dari beberapa perguruan
              tinggi yang berbeda, ditambah praktisi seperti pengawas atau
              kepala sekolah berprestasi.
            </p>
          </div>

          {/* Scientific Committee Member Cards */}
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Member 1 */}
            <div className="group flex flex-col justify-between rounded-2xl border border-kreadika-200/80 bg-white p-6 shadow-2xs transition-all duration-300 hover:-translate-y-1.5 hover:border-kreadika-400 hover:shadow-md hover:shadow-kreadika-800/5">
              <div>
                {/* Member Photo Placeholder */}
                <div className="flex h-44 w-full items-center justify-center rounded-xl border-2 border-dashed border-kreadika-200/80 bg-kreadika-50/50 transition-colors duration-300 group-hover:border-kreadika-400 group-hover:bg-kreadika-50">
                  <div className="flex flex-col items-center gap-2 text-slate-500">
                    <svg
                      className="h-10 w-10 text-kreadika-300 transition-all duration-300 group-hover:scale-110 group-hover:text-kreadika-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                    <span className="font-mono text-xs font-semibold text-slate-600 transition-colors duration-200 group-hover:text-kreadika-700">
                      [Foto]
                    </span>
                  </div>
                </div>

                {/* Member Info */}
                <div className="mt-5">
                  <span className="inline-block rounded-md bg-kreadika-50 px-2.5 py-1 text-xs font-semibold text-kreadika-700 border border-kreadika-200/70 transition-colors duration-200 group-hover:bg-kreadika-600 group-hover:text-white group-hover:border-kreadika-600">
                    Dosen / Peneliti
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-kreadika-800 transition-colors duration-200 group-hover:text-kreadika-600">
                    [Nama]
                  </h3>
                  <p className="mt-1 text-sm font-medium text-slate-600">
                    [Afiliasi]
                  </p>
                </div>
              </div>
            </div>

            {/* Member 2 */}
            <div className="group flex flex-col justify-between rounded-2xl border border-kreadika-200/80 bg-white p-6 shadow-2xs transition-all duration-300 hover:-translate-y-1.5 hover:border-kreadika-400 hover:shadow-md hover:shadow-kreadika-800/5">
              <div>
                {/* Member Photo Placeholder */}
                <div className="flex h-44 w-full items-center justify-center rounded-xl border-2 border-dashed border-kreadika-200/80 bg-kreadika-50/50 transition-colors duration-300 group-hover:border-kreadika-400 group-hover:bg-kreadika-50">
                  <div className="flex flex-col items-center gap-2 text-slate-500">
                    <svg
                      className="h-10 w-10 text-kreadika-300 transition-all duration-300 group-hover:scale-110 group-hover:text-kreadika-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                    <span className="font-mono text-xs font-semibold text-slate-600 transition-colors duration-200 group-hover:text-kreadika-700">
                      [Foto]
                    </span>
                  </div>
                </div>

                {/* Member Info */}
                <div className="mt-5">
                  <span className="inline-block rounded-md bg-kreadika-50 px-2.5 py-1 text-xs font-semibold text-kreadika-700 border border-kreadika-200/70 transition-colors duration-200 group-hover:bg-kreadika-600 group-hover:text-white group-hover:border-kreadika-600">
                    Dosen / Peneliti
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-kreadika-800 transition-colors duration-200 group-hover:text-kreadika-600">
                    [Nama]
                  </h3>
                  <p className="mt-1 text-sm font-medium text-slate-600">
                    [Afiliasi]
                  </p>
                </div>
              </div>
            </div>

            {/* Member 3 */}
            <div className="group flex flex-col justify-between rounded-2xl border border-kreadika-200/80 bg-white p-6 shadow-2xs transition-all duration-300 hover:-translate-y-1.5 hover:border-kreadika-400 hover:shadow-md hover:shadow-kreadika-800/5">
              <div>
                {/* Member Photo Placeholder */}
                <div className="flex h-44 w-full items-center justify-center rounded-xl border-2 border-dashed border-kreadika-200/80 bg-kreadika-50/50 transition-colors duration-300 group-hover:border-kreadika-400 group-hover:bg-kreadika-50">
                  <div className="flex flex-col items-center gap-2 text-slate-500">
                    <svg
                      className="h-10 w-10 text-kreadika-300 transition-all duration-300 group-hover:scale-110 group-hover:text-kreadika-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                    <span className="font-mono text-xs font-semibold text-slate-600 transition-colors duration-200 group-hover:text-kreadika-700">
                      [Foto]
                    </span>
                  </div>
                </div>

                {/* Member Info */}
                <div className="mt-5">
                  <span className="inline-block rounded-md bg-kreadika-50 px-2.5 py-1 text-xs font-semibold text-kreadika-700 border border-kreadika-200/70 transition-colors duration-200 group-hover:bg-kreadika-600 group-hover:text-white group-hover:border-kreadika-600">
                    Dosen / Peneliti
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-kreadika-800 transition-colors duration-200 group-hover:text-kreadika-600">
                    [Nama]
                  </h3>
                  <p className="mt-1 text-sm font-medium text-slate-600">
                    [Afiliasi]
                  </p>
                </div>
              </div>
            </div>

            {/* Member 4 */}
            <div className="group flex flex-col justify-between rounded-2xl border border-kreadika-200/80 bg-white p-6 shadow-2xs transition-all duration-300 hover:-translate-y-1.5 hover:border-kreadika-400 hover:shadow-md hover:shadow-kreadika-800/5">
              <div>
                {/* Member Photo Placeholder */}
                <div className="flex h-44 w-full items-center justify-center rounded-xl border-2 border-dashed border-kreadika-200/80 bg-kreadika-50/50 transition-colors duration-300 group-hover:border-kreadika-400 group-hover:bg-kreadika-50">
                  <div className="flex flex-col items-center gap-2 text-slate-500">
                    <svg
                      className="h-10 w-10 text-kreadika-300 transition-all duration-300 group-hover:scale-110 group-hover:text-kreadika-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                    <span className="font-mono text-xs font-semibold text-slate-600 transition-colors duration-200 group-hover:text-kreadika-700">
                      [Foto]
                    </span>
                  </div>
                </div>

                {/* Member Info */}
                <div className="mt-5">
                  <span className="inline-block rounded-md bg-kreadika-50 px-2.5 py-1 text-xs font-semibold text-kreadika-700 border border-kreadika-200/70 transition-colors duration-200 group-hover:bg-kreadika-600 group-hover:text-white group-hover:border-kreadika-600">
                    Praktisi / Pengawas / Kepala Sekolah
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-kreadika-800 transition-colors duration-200 group-hover:text-kreadika-600">
                    [Nama]
                  </h3>
                  <p className="mt-1 text-sm font-medium text-slate-600">
                    [Afiliasi]
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 
          SUSUNAN PANITIA (ORGANIZING COMMITTEE)
      ==================== */}
      <section className="border-t border-kreadika-200/70 bg-kreadika-50/60 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full border border-kreadika-200 bg-white px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-kreadika-700 shadow-2xs">
              Struktur Organisasi
            </span>
            <h2 className="mt-3 text-2xl font-bold text-kreadika-800 sm:text-3xl">
              Susunan Panitia
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
              Panitia pelaksana seminar nasional KREADIKA 2027.
            </p>
          </div>

          {/* Committee Table (Desktop) */}
          <div className="mt-10 hidden overflow-hidden rounded-2xl border border-kreadika-200/80 bg-white shadow-2xs md:block">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="border-b border-kreadika-200/80 bg-kreadika-50/80 text-xs font-bold uppercase tracking-wider text-kreadika-800">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    Jabatan
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Nama
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-kreadika-100">
                {/* Row 1: Pengarah */}
                <tr className="transition-colors duration-200 hover:bg-kreadika-50/50">
                  <td className="px-6 py-4 font-bold text-kreadika-800">
                    Pengarah
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-700">
                    Direktur Scientific Advantage Publishing
                  </td>
                </tr>

                {/* Row 2: Penanggung jawab */}
                <tr className="transition-colors duration-200 hover:bg-kreadika-50/50">
                  <td className="px-6 py-4 font-bold text-kreadika-800">
                    Penanggung jawab
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-700">
                    [nama]
                  </td>
                </tr>

                {/* Row 3: Ketua */}
                <tr className="transition-colors duration-200 hover:bg-kreadika-50/50">
                  <td className="px-6 py-4 font-bold text-kreadika-800">
                    Ketua
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-700">
                    [nama]
                  </td>
                </tr>

                {/* Row 4: Sekretaris */}
                <tr className="transition-colors duration-200 hover:bg-kreadika-50/50">
                  <td className="px-6 py-4 font-bold text-kreadika-800">
                    Sekretaris
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-700">
                    [nama]
                  </td>
                </tr>

                {/* Row 5: Bendahara */}
                <tr className="transition-colors duration-200 hover:bg-kreadika-50/50">
                  <td className="px-6 py-4 font-bold text-kreadika-800">
                    Bendahara
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-700">
                    [nama]
                  </td>
                </tr>

                {/* Row 6: Bidang Acara dan Pembicara */}
                <tr className="transition-colors duration-200 hover:bg-kreadika-50/50">
                  <td className="px-6 py-4 font-bold text-kreadika-800">
                    Bidang Acara dan Pembicara
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-700">
                    [nama]
                  </td>
                </tr>

                {/* Row 7: Bidang Makalah dan Prosiding */}
                <tr className="transition-colors duration-200 hover:bg-kreadika-50/50">
                  <td className="px-6 py-4 font-bold text-kreadika-800">
                    Bidang Makalah dan Prosiding
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-700">
                    [nama]
                  </td>
                </tr>

                {/* Row 8: Bidang Publikasi, Humas, dan Media Sosial */}
                <tr className="transition-colors duration-200 hover:bg-kreadika-50/50">
                  <td className="px-6 py-4 font-bold text-kreadika-800">
                    Bidang Publikasi, Humas, dan Media Sosial
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-700">
                    [nama]
                  </td>
                </tr>

                {/* Row 9: Bidang Teknologi Informasi */}
                <tr className="transition-colors duration-200 hover:bg-kreadika-50/50">
                  <td className="px-6 py-4 font-bold text-kreadika-800">
                    Bidang Teknologi Informasi
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-700">
                    [nama]
                  </td>
                </tr>

                {/* Row 10: Bidang Sponsor dan Kemitraan */}
                <tr className="transition-colors duration-200 hover:bg-kreadika-50/50">
                  <td className="px-6 py-4 font-bold text-kreadika-800">
                    Bidang Sponsor dan Kemitraan
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-700">
                    [nama]
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Committee Cards (Mobile) */}
          <div className="mt-8 space-y-3 md:hidden">
            {/* Card 1 */}
            <div className="rounded-2xl border border-kreadika-200/80 bg-white p-5 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-kreadika-400 hover:shadow-xs">
              <p className="text-xs font-semibold uppercase tracking-wider text-kreadika-600">
                Pengarah
              </p>
              <p className="mt-1 text-base font-bold text-kreadika-800">
                Direktur Scientific Advantage Publishing
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl border border-kreadika-200/80 bg-white p-5 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-kreadika-400 hover:shadow-xs">
              <p className="text-xs font-semibold uppercase tracking-wider text-kreadika-600">
                Penanggung jawab
              </p>
              <p className="mt-1 text-base font-bold text-kreadika-800">
                [nama]
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl border border-kreadika-200/80 bg-white p-5 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-kreadika-400 hover:shadow-xs">
              <p className="text-xs font-semibold uppercase tracking-wider text-kreadika-600">
                Ketua
              </p>
              <p className="mt-1 text-base font-bold text-kreadika-800">
                [nama]
              </p>
            </div>

            {/* Card 4 */}
            <div className="rounded-2xl border border-kreadika-200/80 bg-white p-5 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-kreadika-400 hover:shadow-xs">
              <p className="text-xs font-semibold uppercase tracking-wider text-kreadika-600">
                Sekretaris
              </p>
              <p className="mt-1 text-base font-bold text-kreadika-800">
                [nama]
              </p>
            </div>

            {/* Card 5 */}
            <div className="rounded-2xl border border-kreadika-200/80 bg-white p-5 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-kreadika-400 hover:shadow-xs">
              <p className="text-xs font-semibold uppercase tracking-wider text-kreadika-600">
                Bendahara
              </p>
              <p className="mt-1 text-base font-bold text-kreadika-800">
                [nama]
              </p>
            </div>

            {/* Card 6 */}
            <div className="rounded-2xl border border-kreadika-200/80 bg-white p-5 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-kreadika-400 hover:shadow-xs">
              <p className="text-xs font-semibold uppercase tracking-wider text-kreadika-600">
                Bidang Acara dan Pembicara
              </p>
              <p className="mt-1 text-base font-bold text-kreadika-800">
                [nama]
              </p>
            </div>

            {/* Card 7 */}
            <div className="rounded-2xl border border-kreadika-200/80 bg-white p-5 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-kreadika-400 hover:shadow-xs">
              <p className="text-xs font-semibold uppercase tracking-wider text-kreadika-600">
                Bidang Makalah dan Prosiding
              </p>
              <p className="mt-1 text-base font-bold text-kreadika-800">
                [nama]
              </p>
            </div>

            {/* Card 8 */}
            <div className="rounded-2xl border border-kreadika-200/80 bg-white p-5 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-kreadika-400 hover:shadow-xs">
              <p className="text-xs font-semibold uppercase tracking-wider text-kreadika-600">
                Bidang Publikasi, Humas, dan Media Sosial
              </p>
              <p className="mt-1 text-base font-bold text-kreadika-800">
                [nama]
              </p>
            </div>

            {/* Card 9 */}
            <div className="rounded-2xl border border-kreadika-200/80 bg-white p-5 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-kreadika-400 hover:shadow-xs">
              <p className="text-xs font-semibold uppercase tracking-wider text-kreadika-600">
                Bidang Teknologi Informasi
              </p>
              <p className="mt-1 text-base font-bold text-kreadika-800">
                [nama]
              </p>
            </div>

            {/* Card 10 */}
            <div className="rounded-2xl border border-kreadika-200/80 bg-white p-5 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-kreadika-400 hover:shadow-xs">
              <p className="text-xs font-semibold uppercase tracking-wider text-kreadika-600">
                Bidang Sponsor dan Kemitraan
              </p>
              <p className="mt-1 text-base font-bold text-kreadika-800">
                [nama]
              </p>
            </div>
          </div>

          {/* Partnership CTA Banner */}
          <div className="relative overflow-hidden mt-10 flex flex-col gap-6 rounded-3xl border border-kreadika-700 bg-kreadika-800 p-8 sm:p-10 shadow-lg shadow-kreadika-800/10 transition-shadow duration-300 hover:shadow-xl md:flex-row md:items-center md:justify-between">
            {/* Subtle Radial Glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-kreadika-600/30 blur-3xl"
            ></div>

            <div className="relative max-w-xl">
              <h3 className="text-2xl font-bold text-white sm:text-3xl">
                Ingin berkolaborasi dengan panitia?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-kreadika-100/90 sm:text-base">
                Perguruan tinggi, organisasi profesi, dan sponsor dapat
                menghubungi panitia untuk partisipasi dan kemitraan.
              </p>
            </div>
            <div className="relative shrink-0">
              <a
                href="mailto:sekretariat@kreadika.id"
                className="group inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-kreadika-800 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-kreadika-50 hover:shadow-md active:translate-y-0 active:scale-[0.98]"
              >
                Hubungi Sekretariat{" "}
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
      </section>
    </main>
  );
}

export default Panitia;
