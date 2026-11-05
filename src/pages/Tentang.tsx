import type { PageProps, LinkClickEvent } from "../types";

function Tentang({ onNavigate }: PageProps) {
  const handleClick = (e: LinkClickEvent, path: string) => {
    if (onNavigate && path.startsWith("/")) {
      e.preventDefault();
      onNavigate(path);
    }
  };

  return (
    <main id="tentang-kreadika">
      {/* ==================== 
          HERO / PAGE HEADER
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
          {/* Breadcrumb Navigation */}
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-kreadika-200 bg-white px-4 py-1.5 text-xs font-semibold tracking-wide text-kreadika-700 shadow-2xs">
              <span className="h-2 w-2 rounded-full bg-kreadika-600 animate-pulse"></span>
              <span>KREADIKA 2027</span>
              <span aria-hidden="true" className="text-slate-600">•</span>
              <span className="text-kreadika-600">Profil Seminar</span>
            </span>

            <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-kreadika-800 sm:text-4xl lg:text-5xl lg:leading-[1.15]">
              Seminar Nasional Pendidikan Kreatif dan Adaptif
            </h1>

            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              Diselenggarakan setiap tahun oleh Scientific Advantage Publishing.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== 
          MEANING & DIRECTION
      ==================== */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Section Headline */}
            <div className="lg:col-span-5">
              <span className="inline-block rounded-full border border-kreadika-200 bg-kreadika-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-kreadika-700">
                Makna dan Arah
              </span>
              <h2 className="mt-4 text-2xl font-bold leading-snug text-kreadika-800 sm:text-3xl">
                Mendidik manusia di tengah perubahan yang dinamis
              </h2>
              <div className="mt-5 h-1 w-14 rounded-full bg-kreadika-600"></div>
            </div>

            {/* Content Body */}
            <div className="space-y-5 text-base leading-relaxed text-slate-600 lg:col-span-7">
              <p>
                <strong className="font-semibold text-kreadika-800">
                  KREADIKA
                </strong>{" "}
                adalah forum nasional bagi guru, tenaga kependidikan, pengawas,
                kepala sekolah, pemangku kebijakan, dan mahasiswa pendidikan
                untuk berbagi gagasan, hasil penelitian, dan praktik baik dalam
                menghadirkan pendidikan yang kreatif dan adaptif.
              </p>
              <p>
                Seminar ini menegaskan bahwa perubahan, termasuk perkembangan
                teknologi digital dan kecerdasan artifisial, harus dimanfaatkan
                untuk memperkuat peran manusia dalam pendidikan, bukan
                menggantikannya.
              </p>
              <div className="rounded-2xl border border-kreadika-200/80 bg-kreadika-50/60 p-5 text-sm text-kreadika-800 shadow-2xs transition-all duration-300 hover:border-kreadika-400 hover:shadow-xs">
                <p className="font-medium italic text-slate-700">
                  “Perubahan teknologi bukan untuk menggantikan manusia,
                  melainkan mengokohkan nilai budi pekerti, nalar kritis, dan
                  empati dalam ekosistem pendidikan.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 
          SEMINAR IDENTITY
      ==================== */}
      <section className="border-y border-kreadika-200/70 bg-kreadika-50/60 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full border border-kreadika-200 bg-white px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-kreadika-700 shadow-2xs">
              Identitas Seminar
            </span>
            <h2 className="mt-3 text-2xl font-bold text-kreadika-800 sm:text-3xl">
              Profil &amp; Karakteristik KREADIKA
            </h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              Fondasi identitas seminar nasional KREADIKA yang memandu visi dan
              pelaksanaannya.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {/* Name */}
            <div className="group flex flex-col rounded-2xl border border-kreadika-200/80 bg-white p-6 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-kreadika-400 hover:shadow-md hover:shadow-kreadika-800/5">
              <p className="text-xs font-semibold uppercase tracking-wider text-kreadika-600">
                Nama
              </p>
              <p className="mt-2 text-xl font-bold text-kreadika-800 transition-colors duration-200 group-hover:text-kreadika-600">
                KREADIKA
              </p>
              <p className="mt-1 text-xs text-slate-600">
                Identitas resmi seminar nasional
              </p>
            </div>

            {/* Acronym */}
            <div className="group flex flex-col rounded-2xl border border-kreadika-200/80 bg-white p-6 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-kreadika-400 hover:shadow-md hover:shadow-kreadika-800/5">
              <p className="text-xs font-semibold uppercase tracking-wider text-kreadika-600">
                Akronim
              </p>
              <p className="mt-2 text-lg font-bold text-kreadika-800">
                <span className="text-kreadika-600">KREA</span>tif,{" "}
                <span className="text-kreadika-600">AD</span>aptif, pend
                <span className="text-kreadika-600">IDIKA</span>n
              </p>
              <p className="mt-1 text-xs text-slate-600">
                Tiga pilar pembentuk nama KREADIKA
              </p>
            </div>

            {/* Tagline */}
            <div className="group flex flex-col rounded-2xl border border-kreadika-200/80 bg-white p-6 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-kreadika-400 hover:shadow-md hover:shadow-kreadika-800/5 sm:col-span-2 lg:col-span-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-kreadika-600">
                Tagline
              </p>
              <p className="mt-2 text-lg font-bold italic text-kreadika-800 transition-colors duration-200 group-hover:text-kreadika-600">
                “Mendidik Manusia di Tengah Perubahan”
              </p>
              <p className="mt-1 text-xs text-slate-600">
                Prinsip pemandu seluruh rangkaian kegiatan
              </p>
            </div>

            {/* Nature */}
            <div className="group flex flex-col rounded-2xl border border-kreadika-200/80 bg-white p-6 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-kreadika-400 hover:shadow-md hover:shadow-kreadika-800/5">
              <p className="text-xs font-semibold uppercase tracking-wider text-kreadika-600">
                Sifat Pelaksanaan
              </p>
              <p className="mt-2 text-lg font-bold text-kreadika-800 transition-colors duration-200 group-hover:text-kreadika-600">
                Tahunan, Hibrid
              </p>
              <p className="mt-1 text-xs text-slate-600">
                Diselenggarakan luring dan daring dari seluruh Indonesia
              </p>
            </div>

            {/* Organizer */}
            <div className="group flex flex-col rounded-2xl border border-kreadika-200/80 bg-white p-6 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-kreadika-400 hover:shadow-md hover:shadow-kreadika-800/5 sm:col-span-2 lg:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-kreadika-600">
                Penyelenggara
              </p>
              <p className="mt-2 text-lg font-bold text-kreadika-800 transition-colors duration-200 group-hover:text-kreadika-600">
                Scientific Advantage Publishing
              </p>
              <p className="mt-1 text-xs text-slate-600">
                Lembaga penerbitan ilmiah bereputasi pengelola seminar dan
                prosiding
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 
          LONG-TERM RELEVANCE
      ==================== */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full border border-kreadika-200 bg-kreadika-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-kreadika-700">
              Relevansi Jangka Panjang
            </span>
            <h2 className="mt-3 text-2xl font-bold text-kreadika-800 sm:text-3xl">
              Menjawab Tantangan dan Arah Pendidikan Masa Depan
            </h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              KREADIKA dirancang untuk selaras dengan kebijakan pendidikan
              jangka panjang dan kebutuhan nyata pendidik di lapangan.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Relevance Item 1 */}
            <div className="group flex flex-col rounded-2xl border border-kreadika-200/80 bg-white p-6 shadow-2xs transition-all duration-300 hover:-translate-y-1.5 hover:border-kreadika-400 hover:shadow-md hover:shadow-kreadika-800/5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-kreadika-200/60 bg-kreadika-50 text-kreadika-600 transition-all duration-300 group-hover:scale-105 group-hover:border-kreadika-600 group-hover:bg-kreadika-600 group-hover:text-white">
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="mt-5 text-base font-bold text-kreadika-800 transition-colors duration-200 group-hover:text-kreadika-600">
                Indonesia Emas 2045
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Sejalan dengan arah pendidikan nasional menuju Indonesia Emas
                2045, yang menuntut sumber daya manusia kreatif, adaptif, dan
                berkarakter.
              </p>
            </div>

            {/* Relevance Item 2 */}
            <div className="group flex flex-col rounded-2xl border border-kreadika-200/80 bg-white p-6 shadow-2xs transition-all duration-300 hover:-translate-y-1.5 hover:border-kreadika-400 hover:shadow-md hover:shadow-kreadika-800/5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-kreadika-200/60 bg-kreadika-50 text-kreadika-600 transition-all duration-300 group-hover:scale-105 group-hover:border-kreadika-600 group-hover:bg-kreadika-600 group-hover:text-white">
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
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="mt-5 text-base font-bold text-kreadika-800 transition-colors duration-200 group-hover:text-kreadika-600">
                Pembelajaran Mendalam &amp; AI
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Mendukung penerapan pembelajaran mendalam dan Kurikulum Merdeka,
                termasuk mata pelajaran pilihan Koding dan Kecerdasan Artifisial
                (Permendikdasmen Nomor 13 Tahun 2025).
              </p>
            </div>

            {/* Relevance Item 3 */}
            <div className="group flex flex-col rounded-2xl border border-kreadika-200/80 bg-white p-6 shadow-2xs transition-all duration-300 hover:-translate-y-1.5 hover:border-kreadika-400 hover:shadow-md hover:shadow-kreadika-800/5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-kreadika-200/60 bg-kreadika-50 text-kreadika-600 transition-all duration-300 group-hover:scale-105 group-hover:border-kreadika-600 group-hover:bg-kreadika-600 group-hover:text-white">
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="mt-5 text-base font-bold text-kreadika-800 transition-colors duration-200 group-hover:text-kreadika-600">
                Praktik Baik bagi Pendidik
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Menjawab kebutuhan pendidik dan pemimpin sekolah akan forum
                berbagi praktik baik dalam menghadapi perubahan kurikulum,
                teknologi, dan kebutuhan peserta didik.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 
          TARGET AUDIENCE
      ==================== */}
      <section className="border-y border-kreadika-200/70 bg-kreadika-50/60 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full border border-kreadika-200 bg-white px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-kreadika-700 shadow-2xs">
              Target Peserta
            </span>
            <h2 className="mt-3 text-2xl font-bold text-kreadika-800 sm:text-3xl">
              Siapa yang Menjadi Bagian dari KREADIKA?
            </h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              KREADIKA mengundang seluruh insan pendidikan yang berkomitmen
              memajukan mutu pembelajaran.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* Target 1 */}
            <div className="group flex items-start gap-4 rounded-2xl border border-kreadika-200/80 bg-white p-5 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-kreadika-400 hover:shadow-md hover:shadow-kreadika-800/5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-kreadika-200/70 bg-kreadika-50 text-sm font-bold text-kreadika-700 transition-all duration-300 group-hover:scale-105 group-hover:border-kreadika-600 group-hover:bg-kreadika-600 group-hover:text-white">
                1
              </span>
              <div>
                <h3 className="text-base font-bold text-kreadika-800 transition-colors duration-200 group-hover:text-kreadika-600">
                  Guru &amp; Tenaga Kependidikan
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  Pendidik di semua jenjang sekolah yang ingin berbagi modul,
                  metode pembelajaran, dan praktik baik kelas.
                </p>
              </div>
            </div>

            {/* Target 2 */}
            <div className="group flex items-start gap-4 rounded-2xl border border-kreadika-200/80 bg-white p-5 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-kreadika-400 hover:shadow-md hover:shadow-kreadika-800/5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-kreadika-200/70 bg-kreadika-50 text-sm font-bold text-kreadika-700 transition-all duration-300 group-hover:scale-105 group-hover:border-kreadika-600 group-hover:bg-kreadika-600 group-hover:text-white">
                2
              </span>
              <div>
                <h3 className="text-base font-bold text-kreadika-800 transition-colors duration-200 group-hover:text-kreadika-600">
                  Pengawas &amp; Kepala Sekolah
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  Pemimpin satuan pendidikan yang mengawal supervisi akademik
                  dan manajemen perubahan di sekolah.
                </p>
              </div>
            </div>

            {/* Target 3 */}
            <div className="group flex items-start gap-4 rounded-2xl border border-kreadika-200/80 bg-white p-5 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-kreadika-400 hover:shadow-md hover:shadow-kreadika-800/5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-kreadika-200/70 bg-kreadika-50 text-sm font-bold text-kreadika-700 transition-all duration-300 group-hover:scale-105 group-hover:border-kreadika-600 group-hover:bg-kreadika-600 group-hover:text-white">
                3
              </span>
              <div>
                <h3 className="text-base font-bold text-kreadika-800 transition-colors duration-200 group-hover:text-kreadika-600">
                  Pemangku Kebijakan Pendidikan
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  Dinas pendidikan, kementerian, dan badan pengembang kurikulum
                  yang merumuskan tata kelola kebijakan.
                </p>
              </div>
            </div>

            {/* Target 4 */}
            <div className="group flex items-start gap-4 rounded-2xl border border-kreadika-200/80 bg-white p-5 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-kreadika-400 hover:shadow-md hover:shadow-kreadika-800/5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-kreadika-200/70 bg-kreadika-50 text-sm font-bold text-kreadika-700 transition-all duration-300 group-hover:scale-105 group-hover:border-kreadika-600 group-hover:bg-kreadika-600 group-hover:text-white">
                4
              </span>
              <div>
                <h3 className="text-base font-bold text-kreadika-800 transition-colors duration-200 group-hover:text-kreadika-600">
                  Dosen &amp; Peneliti
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  Akademisi di bidang pendidikan yang mempublikasikan hasil
                  riset empiris dan konseptual.
                </p>
              </div>
            </div>

            {/* Target 5 */}
            <div className="group flex items-start gap-4 rounded-2xl border border-kreadika-200/80 bg-white p-5 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-kreadika-400 hover:shadow-md hover:shadow-kreadika-800/5 sm:col-span-2 lg:col-span-2">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-kreadika-200/70 bg-kreadika-50 text-sm font-bold text-kreadika-700 transition-all duration-300 group-hover:scale-105 group-hover:border-kreadika-600 group-hover:bg-kreadika-600 group-hover:text-white">
                5
              </span>
              <div>
                <h3 className="text-base font-bold text-kreadika-800 transition-colors duration-200 group-hover:text-kreadika-600">
                  Mahasiswa Pendidikan
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  Calon guru masa depan yang menyiapkan skripsi, tesis, atau
                  karya ilmiah inovasi pembelajaran.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 
          5-YEAR SUBTHEME ROADMAP
      ==================== */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full border border-kreadika-200 bg-kreadika-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-kreadika-700">
              Peta Subtema Lima Tahun
            </span>
            <h2 className="mt-3 text-2xl font-bold text-kreadika-800 sm:text-3xl">
              Satu Tema Setiap Tahun, 2027–2031
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
              Setiap tahun KREADIKA mengangkat satu subtema yang membangun
              subtema sebelumnya.
            </p>
          </div>

          <ol className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {/* 2027 */}
            <li className="flex flex-col rounded-2xl bg-kreadika-800 p-5 text-white shadow-md ring-2 ring-kreadika-600/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xl font-bold">2027</span>
                <span className="rounded-full bg-kreadika-400 px-2.5 py-0.5 text-[11px] font-bold text-kreadika-950 shadow-2xs">
                  Tahun ini
                </span>
              </div>
              <p className="mt-4 text-sm font-medium leading-snug text-white/95">
                Pendidikan Kreatif dan Adaptif di Era Digital
              </p>
            </li>

            {/* 2028 */}
            <li className="group flex flex-col rounded-2xl border border-kreadika-200/80 bg-white p-5 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-kreadika-400 hover:shadow-md hover:shadow-kreadika-800/5">
              <span className="text-xl font-bold text-kreadika-600 transition-colors duration-200 group-hover:text-kreadika-800">
                2028
              </span>
              <p className="mt-4 text-sm font-medium leading-snug text-kreadika-800">
                Pembelajaran Mendalam untuk Generasi Emas 2045
              </p>
            </li>

            {/* 2029 */}
            <li className="group flex flex-col rounded-2xl border border-kreadika-200/80 bg-white p-5 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-kreadika-400 hover:shadow-md hover:shadow-kreadika-800/5">
              <span className="text-xl font-bold text-kreadika-600 transition-colors duration-200 group-hover:text-kreadika-800">
                2029
              </span>
              <p className="mt-4 text-sm font-medium leading-snug text-kreadika-800">
                Kepemimpinan Sekolah dan Kebijakan Pendidikan Berbasis Data
              </p>
            </li>

            {/* 2030 */}
            <li className="group flex flex-col rounded-2xl border border-kreadika-200/80 bg-white p-5 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-kreadika-400 hover:shadow-md hover:shadow-kreadika-800/5">
              <span className="text-xl font-bold text-kreadika-600 transition-colors duration-200 group-hover:text-kreadika-800">
                2030
              </span>
              <p className="mt-4 text-sm font-medium leading-snug text-kreadika-800">
                Teknologi dan Kecerdasan Artifisial yang Bertanggung Jawab dalam
                Pendidikan
              </p>
            </li>

            {/* 2031 */}
            <li className="group flex flex-col rounded-2xl border border-kreadika-200/80 bg-white p-5 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-kreadika-400 hover:shadow-md hover:shadow-kreadika-800/5">
              <span className="text-xl font-bold text-kreadika-600 transition-colors duration-200 group-hover:text-kreadika-800">
                2031
              </span>
              <p className="mt-4 text-sm font-medium leading-snug text-kreadika-800">
                Pendidikan Inklusif dan Pemerataan Mutu hingga Daerah 3T
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* ==================== 
          ORGANIZER & PARTNERSHIP
      ==================== */}
      <section className="border-t border-kreadika-200/70 bg-kreadika-50/60 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full border border-kreadika-200 bg-white px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-kreadika-700 shadow-2xs">
              Penyelenggara
            </span>
            <h2 className="mt-3 text-2xl font-bold text-kreadika-800 sm:text-3xl">
              Pengelolaan &amp; Kolaborasi Kemitraan
            </h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              Menjaga mutu, independensi review ilmiah, serta jangkauan dampak
              positif bagi dunia pendidikan.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Organizer Role */}
            <div className="group flex flex-col rounded-2xl border border-kreadika-200/80 bg-white p-6 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-kreadika-400 hover:shadow-md hover:shadow-kreadika-800/5 sm:p-8">
              <h3 className="text-lg font-bold text-kreadika-800 transition-colors duration-200 group-hover:text-kreadika-600">
                Scientific Advantage Publishing
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Scientific Advantage Publishing menyelenggarakan KREADIKA dan
                mengelola sekretariat, sistem pengiriman dan review makalah,
                serta penerbitan prosiding.
              </p>
            </div>

            {/* Co-host Role */}
            <div className="group flex flex-col rounded-2xl border border-kreadika-200/80 bg-white p-6 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-kreadika-400 hover:shadow-md hover:shadow-kreadika-800/5 sm:p-8">
              <h3 className="text-lg font-bold text-kreadika-800 transition-colors duration-200 group-hover:text-kreadika-600">
                Kolaborasi Co-Host
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                KREADIKA bekerja sama dengan perguruan tinggi dan organisasi
                profesi sebagai co-host untuk memperluas jangkauan peserta dan
                menjaga independensi review.
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
              <h3 className="text-2xl font-bold text-white sm:text-3xl">
                Ingin menjadi co-host atau mitra?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-kreadika-100/90 sm:text-base">
                Perguruan tinggi, organisasi profesi, dan jurnal dapat bergabung
                sebagai mitra KREADIKA.
              </p>
            </div>
            <div className="relative shrink-0">
              <a
                href="/mitra"
                onClick={(e) => handleClick(e, "/mitra")}
                className="group inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-kreadika-800 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-kreadika-50 hover:shadow-md active:translate-y-0 active:scale-[0.98]"
              >
                Lihat bentuk kerja sama{" "}
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

export default Tentang;
