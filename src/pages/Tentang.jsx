function Tentang({ onNavigate }) {
  const handleClick = (e, path) => {
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
      <section className="bg-kreadika-navy text-white">
        <div className="mx-auto max-w-6xl px-4 pt-12 pb-14 sm:px-6 sm:pt-16 sm:pb-20 lg:px-8">
          {/* Breadcrumb Navigation */}
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-sky-200 transition-colors duration-300 hover:border-sky-300/50 hover:bg-sky-400/15">
              <span className="h-2 w-2 rounded-full bg-sky-300 animate-pulse"></span>
              Tentang KREADIKA
            </span>

            <h1 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.15]">
              Seminar Nasional Pendidikan Kreatif dan Adaptif
            </h1>

            <p className="mt-4 text-base leading-relaxed text-blue-100 sm:text-lg">
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
              <span className="inline-block rounded-md bg-kreadika-ice px-3 py-1 text-xs font-semibold uppercase tracking-wider text-kreadika-royal">
                Makna dan Arah
              </span>
              <h2 className="mt-4 text-2xl font-bold leading-snug text-kreadika-navy sm:text-3xl">
                Mendidik manusia di tengah perubahan yang dinamis
              </h2>
              <div className="mt-5 h-1 w-16 rounded-full bg-kreadika-royal"></div>
            </div>

            {/* Content Body */}
            <div className="space-y-5 text-base leading-relaxed text-slate-600 lg:col-span-7">
              <p>
                <strong className="font-semibold text-kreadika-navy">
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
              <div className="rounded-2xl border border-blue-100 bg-kreadika-ice p-5 text-sm text-kreadika-navy transition-all duration-300 hover:border-kreadika-royal/30 hover:shadow-sm">
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
      <section className="border-y border-blue-100 bg-kreadika-ice py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block rounded-md bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-kreadika-royal">
              Identitas Seminar
            </span>
            <h2 className="mt-3 text-2xl font-bold text-kreadika-navy sm:text-3xl">
              Profil &amp; Karakteristik KREADIKA
            </h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              Fondasi identitas seminar nasional KREADIKA yang memandu visi dan
              pelaksanaannya.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {/* Name */}
            <div className="group flex flex-col rounded-2xl border border-blue-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-kreadika-royal/40 hover:shadow-md hover:shadow-blue-950/5">
              <p className="text-xs font-semibold uppercase tracking-wider text-sky-600">
                Nama
              </p>
              <p className="mt-2 text-xl font-bold text-kreadika-navy transition-colors duration-200 group-hover:text-kreadika-royal">
                KREADIKA
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Identitas resmi seminar nasional
              </p>
            </div>

            {/* Acronym */}
            <div className="group flex flex-col rounded-2xl border border-blue-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-kreadika-royal/40 hover:shadow-md hover:shadow-blue-950/5">
              <p className="text-xs font-semibold uppercase tracking-wider text-sky-600">
                Akronim
              </p>
              <p className="mt-2 text-lg font-bold text-kreadika-navy">
                <span className="text-kreadika-royal">KREA</span>tif,{" "}
                <span className="text-kreadika-royal">AD</span>aptif, pend
                <span className="text-kreadika-royal">IDIKA</span>n
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Tiga pilar pembentuk nama KREADIKA
              </p>
            </div>

            {/* Tagline */}
            <div className="group flex flex-col rounded-2xl border border-blue-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-kreadika-royal/40 hover:shadow-md hover:shadow-blue-950/5 sm:col-span-2 lg:col-span-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-sky-600">
                Tagline
              </p>
              <p className="mt-2 text-lg font-bold italic text-kreadika-navy transition-colors duration-200 group-hover:text-kreadika-royal">
                “Mendidik Manusia di Tengah Perubahan”
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Prinsip pemandu seluruh rangkaian kegiatan
              </p>
            </div>

            {/* Nature */}
            <div className="group flex flex-col rounded-2xl border border-blue-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-kreadika-royal/40 hover:shadow-md hover:shadow-blue-950/5">
              <p className="text-xs font-semibold uppercase tracking-wider text-sky-600">
                Sifat Pelaksanaan
              </p>
              <p className="mt-2 text-lg font-bold text-kreadika-navy transition-colors duration-200 group-hover:text-kreadika-royal">
                Tahunan, Hibrid
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Diselenggarakan luring dan daring dari seluruh Indonesia
              </p>
            </div>

            {/* Organizer */}
            <div className="group flex flex-col rounded-2xl border border-blue-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-kreadika-royal/40 hover:shadow-md hover:shadow-blue-950/5 sm:col-span-2 lg:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-sky-600">
                Penyelenggara
              </p>
              <p className="mt-2 text-lg font-bold text-kreadika-navy transition-colors duration-200 group-hover:text-kreadika-royal">
                Scientific Advantage Publishing
              </p>
              <p className="mt-1 text-xs text-slate-500">
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
            <span className="inline-block rounded-md bg-kreadika-ice px-3 py-1 text-xs font-semibold uppercase tracking-wider text-kreadika-royal">
              Relevansi Jangka Panjang
            </span>
            <h2 className="mt-3 text-2xl font-bold text-kreadika-navy sm:text-3xl">
              Menjawab Tantangan dan Arah Pendidikan Masa Depan
            </h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              KREADIKA dirancang untuk selaras dengan kebijakan pendidikan
              jangka panjang dan kebutuhan nyata pendidik di lapangan.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Relevance Item 1 */}
            <div className="group flex flex-col rounded-2xl border border-blue-100 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-kreadika-royal/40 hover:shadow-lg hover:shadow-blue-950/5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-kreadika-ice text-kreadika-royal transition-all duration-300 group-hover:scale-110 group-hover:bg-kreadika-royal group-hover:text-white">
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
              <h3 className="mt-5 text-base font-bold text-kreadika-navy transition-colors duration-200 group-hover:text-kreadika-royal">
                Indonesia Emas 2045
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Sejalan dengan arah pendidikan nasional menuju Indonesia Emas
                2045, yang menuntut sumber daya manusia kreatif, adaptif, dan
                berkarakter.
              </p>
            </div>

            {/* Relevance Item 2 */}
            <div className="group flex flex-col rounded-2xl border border-blue-100 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-kreadika-royal/40 hover:shadow-lg hover:shadow-blue-950/5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-kreadika-ice text-kreadika-royal transition-all duration-300 group-hover:scale-110 group-hover:bg-kreadika-royal group-hover:text-white">
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
              <h3 className="mt-5 text-base font-bold text-kreadika-navy transition-colors duration-200 group-hover:text-kreadika-royal">
                Pembelajaran Mendalam &amp; AI
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Mendukung penerapan pembelajaran mendalam dan Kurikulum Merdeka,
                termasuk mata pelajaran pilihan Koding dan Kecerdasan Artifisial
                (Permendikdasmen Nomor 13 Tahun 2025).
              </p>
            </div>

            {/* Relevance Item 3 */}
            <div className="group flex flex-col rounded-2xl border border-blue-100 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-kreadika-royal/40 hover:shadow-lg hover:shadow-blue-950/5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-kreadika-ice text-kreadika-royal transition-all duration-300 group-hover:scale-110 group-hover:bg-kreadika-royal group-hover:text-white">
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
              <h3 className="mt-5 text-base font-bold text-kreadika-navy transition-colors duration-200 group-hover:text-kreadika-royal">
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
      <section className="border-y border-blue-100 bg-kreadika-ice py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block rounded-md bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-kreadika-royal">
              Target Peserta
            </span>
            <h2 className="mt-3 text-2xl font-bold text-kreadika-navy sm:text-3xl">
              Siapa yang Menjadi Bagian dari KREADIKA?
            </h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              KREADIKA mengundang seluruh insan pendidikan yang berkomitmen
              memajukan mutu pembelajaran.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* Target 1 */}
            <div className="group flex items-start gap-4 rounded-2xl border border-blue-100 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-kreadika-royal/40 hover:shadow-md hover:shadow-blue-950/5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-kreadika-royal text-sm font-bold text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-kreadika-royal-dark">
                1
              </span>
              <div>
                <h3 className="text-base font-bold text-kreadika-navy transition-colors duration-200 group-hover:text-kreadika-royal">
                  Guru &amp; Tenaga Kependidikan
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  Pendidik di semua jenjang sekolah yang ingin berbagi modul,
                  metode pembelajaran, dan praktik baik kelas.
                </p>
              </div>
            </div>

            {/* Target 2 */}
            <div className="group flex items-start gap-4 rounded-2xl border border-blue-100 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-kreadika-royal/40 hover:shadow-md hover:shadow-blue-950/5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-kreadika-royal text-sm font-bold text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-kreadika-royal-dark">
                2
              </span>
              <div>
                <h3 className="text-base font-bold text-kreadika-navy transition-colors duration-200 group-hover:text-kreadika-royal">
                  Pengawas &amp; Kepala Sekolah
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  Pemimpin satuan pendidikan yang mengawal supervisi akademik
                  dan manajemen perubahan di sekolah.
                </p>
              </div>
            </div>

            {/* Target 3 */}
            <div className="group flex items-start gap-4 rounded-2xl border border-blue-100 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-kreadika-royal/40 hover:shadow-md hover:shadow-blue-950/5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-kreadika-royal text-sm font-bold text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-kreadika-royal-dark">
                3
              </span>
              <div>
                <h3 className="text-base font-bold text-kreadika-navy transition-colors duration-200 group-hover:text-kreadika-royal">
                  Pemangku Kebijakan Pendidikan
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  Dinas pendidikan, kementerian, dan badan pengembang kurikulum
                  yang merumuskan tata kelola kebijakan.
                </p>
              </div>
            </div>

            {/* Target 4 */}
            <div className="group flex items-start gap-4 rounded-2xl border border-blue-100 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-kreadika-royal/40 hover:shadow-md hover:shadow-blue-950/5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-kreadika-royal text-sm font-bold text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-kreadika-royal-dark">
                4
              </span>
              <div>
                <h3 className="text-base font-bold text-kreadika-navy transition-colors duration-200 group-hover:text-kreadika-royal">
                  Dosen &amp; Peneliti
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  Akademisi di bidang pendidikan yang mempublikasikan hasil
                  riset empiris dan konseptual.
                </p>
              </div>
            </div>

            {/* Target 5 */}
            <div className="group flex items-start gap-4 rounded-2xl border border-blue-100 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-kreadika-royal/40 hover:shadow-md hover:shadow-blue-950/5 sm:col-span-2 lg:col-span-2">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-kreadika-royal text-sm font-bold text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-kreadika-royal-dark">
                5
              </span>
              <div>
                <h3 className="text-base font-bold text-kreadika-navy transition-colors duration-200 group-hover:text-kreadika-royal">
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
            <span className="inline-block rounded-md bg-kreadika-ice px-3 py-1 text-xs font-semibold uppercase tracking-wider text-kreadika-royal">
              Peta Subtema Lima Tahun
            </span>
            <h2 className="mt-3 text-2xl font-bold text-kreadika-navy sm:text-3xl">
              Satu Tema Setiap Tahun, 2027–2031
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
              Setiap tahun KREADIKA mengangkat satu subtema yang membangun
              subtema sebelumnya.
            </p>
          </div>

          <ol className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {/* 2027 */}
            <li className="flex flex-col rounded-2xl bg-kreadika-royal p-5 text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-kreadika-royal/30">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xl font-bold">2027</span>
                <span className="rounded-full bg-white px-2.5 py-0.5 text-[11px] font-bold text-kreadika-navy shadow-xs">
                  Tahun ini
                </span>
              </div>
              <p className="mt-4 text-sm font-medium leading-snug">
                Pendidikan Kreatif dan Adaptif di Era Digital
              </p>
            </li>

            {/* 2028 */}
            <li className="group flex flex-col rounded-2xl border border-blue-100 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-kreadika-royal/40 hover:shadow-md hover:shadow-blue-950/5">
              <span className="text-xl font-bold text-kreadika-royal transition-colors duration-200 group-hover:text-kreadika-royal-dark">
                2028
              </span>
              <p className="mt-4 text-sm font-medium leading-snug text-kreadika-navy">
                Pembelajaran Mendalam untuk Generasi Emas 2045
              </p>
            </li>

            {/* 2029 */}
            <li className="group flex flex-col rounded-2xl border border-blue-100 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-kreadika-royal/40 hover:shadow-md hover:shadow-blue-950/5">
              <span className="text-xl font-bold text-kreadika-royal transition-colors duration-200 group-hover:text-kreadika-royal-dark">
                2029
              </span>
              <p className="mt-4 text-sm font-medium leading-snug text-kreadika-navy">
                Kepemimpinan Sekolah dan Kebijakan Pendidikan Berbasis Data
              </p>
            </li>

            {/* 2030 */}
            <li className="group flex flex-col rounded-2xl border border-blue-100 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-kreadika-royal/40 hover:shadow-md hover:shadow-blue-950/5">
              <span className="text-xl font-bold text-kreadika-royal transition-colors duration-200 group-hover:text-kreadika-royal-dark">
                2030
              </span>
              <p className="mt-4 text-sm font-medium leading-snug text-kreadika-navy">
                Teknologi dan Kecerdasan Artifisial yang Bertanggung Jawab dalam
                Pendidikan
              </p>
            </li>

            {/* 2031 */}
            <li className="group flex flex-col rounded-2xl border border-blue-100 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-kreadika-royal/40 hover:shadow-md hover:shadow-blue-950/5">
              <span className="text-xl font-bold text-kreadika-royal transition-colors duration-200 group-hover:text-kreadika-royal-dark">
                2031
              </span>
              <p className="mt-4 text-sm font-medium leading-snug text-kreadika-navy">
                Pendidikan Inklusif dan Pemerataan Mutu hingga Daerah 3T
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* ==================== 
          ORGANIZER & PARTNERSHIP
      ==================== */}
      <section className="border-t border-blue-100 bg-kreadika-ice py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block rounded-md bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-kreadika-royal">
              Penyelenggara
            </span>
            <h2 className="mt-3 text-2xl font-bold text-kreadika-navy sm:text-3xl">
              Pengelolaan &amp; Kolaborasi Kemitraan
            </h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              Menjaga mutu, independensi review ilmiah, serta jangkauan dampak
              positif bagi dunia pendidikan.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Organizer Role */}
            <div className="group flex flex-col rounded-2xl border border-blue-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-kreadika-royal/40 hover:shadow-md hover:shadow-blue-950/5 sm:p-8">
              <h3 className="text-lg font-bold text-kreadika-navy transition-colors duration-200 group-hover:text-kreadika-royal">
                Scientific Advantage Publishing
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Scientific Advantage Publishing menyelenggarakan KREADIKA dan
                mengelola sekretariat, sistem pengiriman dan review makalah,
                serta penerbitan prosiding.
              </p>
            </div>

            {/* Co-host Role */}
            <div className="group flex flex-col rounded-2xl border border-blue-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-kreadika-royal/40 hover:shadow-md hover:shadow-blue-950/5 sm:p-8">
              <h3 className="text-lg font-bold text-kreadika-navy transition-colors duration-200 group-hover:text-kreadika-royal">
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
          <div className="mt-8 rounded-2xl bg-kreadika-navy px-6 py-10 transition-shadow duration-300 hover:shadow-xl hover:shadow-kreadika-navy/15 sm:px-10 sm:py-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl">
                <h3 className="text-2xl font-bold text-white">
                  Ingin menjadi co-host atau mitra?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-blue-100">
                  Perguruan tinggi, organisasi profesi, dan jurnal dapat
                  bergabung sebagai mitra KREADIKA.
                </p>
              </div>
              <div className="shrink-0">
                <a
                  href="/mitra"
                  onClick={(e) => handleClick(e, "/mitra")}
                  className="group inline-flex items-center justify-center rounded-lg bg-kreadika-royal px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-kreadika-royal-dark hover:shadow-lg hover:shadow-kreadika-royal/30 active:translate-y-0 active:scale-[0.98]"
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
        </div>
      </section>
    </main>
  );
}

export default Tentang;
