function Home({ onNavigate }) {
  const handleClick = (e, path) => {
    if (onNavigate && path.startsWith("/")) {
      e.preventDefault();
      onNavigate(path);
    }
  };

  return (
    <main id="beranda">
      {/* ==================== 
          HERO SECTION
      ==================== */}
      <section className="bg-kreadika-navy text-white">
        <div className="mx-auto max-w-6xl px-4 pt-16 pb-14 sm:px-6 sm:pt-24 sm:pb-20 lg:px-8">
          {/* Hero Intro & Action Buttons */}
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-sky-200">
              <span className="h-2 w-2 rounded-full bg-sky-300"></span>
              Seminar Nasional Pendidikan Kreatif dan Adaptif · 2027
            </span>

            <h1 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-5xl sm:leading-[1.15]">
              Pendidikan Kreatif dan Adaptif di Era Digital
            </h1>

            <p className="mt-5 text-base leading-relaxed text-blue-100 sm:text-lg">
              <span className="font-semibold text-white">
                “Mendidik Manusia di Tengah Perubahan”
              </span>
              . Forum nasional bagi guru, pengawas, kepala sekolah, pemangku
              kebijakan, dosen, dan mahasiswa pendidikan untuk berbagi
              gagasan, hasil penelitian, dan praktik baik.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="/call-for-papers#kirim"
                onClick={(e) => handleClick(e, "/call-for-papers#kirim")}
                className="inline-flex items-center justify-center rounded-lg bg-kreadika-royal px-6 py-3.5 text-sm font-semibold text-white"
              >
                Kirim Abstrak
              </a>
              <a
                href="/pendaftaran"
                onClick={(e) => handleClick(e, "/pendaftaran")}
                className="inline-flex items-center justify-center rounded-lg border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white"
              >
                Daftar Seminar
              </a>
            </div>
          </div>

          {/* Event Quick Details: Date & Location */}
          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-kreadika-royal text-white">
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
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-xs font-semibold uppercase tracking-wider text-sky-300">
                  Waktu
                </p>
                <p className="mt-1 text-base font-bold text-white">
                  [tanggal pelaksanaan]
                </p>
                <p className="mt-0.5 text-sm text-blue-200">
                  Luring dan daring (hibrid)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-kreadika-royal text-white">
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
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-xs font-semibold uppercase tracking-wider text-sky-300">
                  Lokasi
                </p>
                <p className="mt-1 text-base font-bold text-white">
                  [lokasi]
                </p>
                <p className="mt-0.5 text-sm text-blue-200">
                  Peserta daring bergabung dari seluruh Indonesia
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 
          PARTNERS & CO-HOSTS
      ==================== */}
      <section id="mitra" className="border-b border-blue-100 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
              <p className="shrink-0 text-xs font-bold uppercase tracking-wider text-kreadika-royal">
                Co-host
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="flex h-12 items-center justify-center rounded-xl border border-blue-100 bg-kreadika-ice px-5 text-xs font-medium text-slate-500">
                  [logo co-host]
                </div>
                <div className="flex h-12 items-center justify-center rounded-xl border border-blue-100 bg-kreadika-ice px-5 text-xs font-medium text-slate-500">
                  [logo co-host]
                </div>
                <div className="flex h-12 items-center justify-center rounded-xl border border-blue-100 bg-kreadika-ice px-5 text-xs font-medium text-slate-500">
                  [logo organisasi profesi]
                </div>
              </div>
            </div>
            <a
              href="/mitra"
              onClick={(e) => handleClick(e, "/mitra")}
              className="inline-flex shrink-0 items-center gap-1.5 self-start text-sm font-semibold text-kreadika-royal md:self-auto"
            >
              Semua mitra <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ==================== 
          ABOUT KREADIKA
      ==================== */}
      <section id="tentang" className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Section Headline */}
            <div className="lg:col-span-5">
              <span className="inline-block rounded-md bg-kreadika-ice px-3 py-1 text-xs font-semibold uppercase tracking-wider text-kreadika-royal">
                Tentang KREADIKA
              </span>
              <h2 className="mt-4 text-2xl font-bold leading-snug text-kreadika-navy sm:text-3xl">
                Teknologi untuk memperkuat peran manusia dalam pendidikan,
                bukan menggantikannya
              </h2>
              <div className="mt-5 h-1 w-16 rounded-full bg-kreadika-royal"></div>
            </div>

            {/* About Description */}
            <div className="space-y-4 text-base leading-relaxed text-slate-600 lg:col-span-7">
              <p>
                <strong className="font-semibold text-kreadika-navy">
                  KREADIKA
                </strong>{" "}
                adalah seminar nasional tahunan yang diselenggarakan secara
                luring dan daring. Namanya gabungan dari{" "}
                <span className="font-semibold text-kreadika-royal">
                  KREA
                </span>
                tif,
                <span className="font-semibold text-kreadika-royal">AD</span>
                aptif, dan pend
                <span className="font-semibold text-kreadika-royal">
                  IDIKA
                </span>
                n.
              </p>
              <p>
                Seminar ini menegaskan bahwa perubahan, termasuk perkembangan
                teknologi digital dan kecerdasan artifisial, harus
                dimanfaatkan untuk memperkuat peran manusia dalam pendidikan.
                Arah ini sejalan dengan cita-cita Indonesia Emas 2045,
                pembelajaran mendalam, dan Kurikulum Merdeka.
              </p>
              <a
                href="/tentang"
                onClick={(e) => handleClick(e, "/tentang")}
                className="inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-kreadika-royal"
              >
                Selengkapnya tentang KREADIKA{" "}
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 
          CALL FOR PAPERS & TIMELINE
      ==================== */}
      <section
        id="call-for-papers"
        className="border-y border-blue-100 bg-kreadika-ice py-16 sm:py-24"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-2xl">
            <span className="inline-block rounded-md bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-kreadika-royal">
              Call for Papers
            </span>
            <h2 className="mt-3 text-2xl font-bold text-kreadika-navy sm:text-3xl">
              Ruang Lingkup Topik
            </h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              Makalah yang dikirimkan dapat mencakup salah satu dari tujuh
              subtema kajian berikut.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12">
            {/* Conference Subthemes & Topics Scope */}
            <ol className="grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
              <li className="flex h-full items-start gap-4 rounded-2xl border border-blue-100 bg-white p-5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-kreadika-royal text-sm font-bold text-white">
                  1
                </span>
                <div>
                  <h3 className="text-sm font-bold text-kreadika-navy">
                    Inovasi pembelajaran
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600">
                    Inovasi pembelajaran, kurikulum, dan pembelajaran mendalam
                  </p>
                </div>
              </li>
              <li className="flex h-full items-start gap-4 rounded-2xl border border-blue-100 bg-white p-5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-kreadika-royal text-sm font-bold text-white">
                  2
                </span>
                <div>
                  <h3 className="text-sm font-bold text-kreadika-navy">
                    Teknologi pendidikan
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600">
                    Teknologi pendidikan, transformasi digital, dan kecerdasan
                    artifisial
                  </p>
                </div>
              </li>
              <li className="flex h-full items-start gap-4 rounded-2xl border border-blue-100 bg-white p-5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-kreadika-royal text-sm font-bold text-white">
                  3
                </span>
                <div>
                  <h3 className="text-sm font-bold text-kreadika-navy">
                    Asesmen
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600">
                    Asesmen dan evaluasi pembelajaran
                  </p>
                </div>
              </li>
              <li className="flex h-full items-start gap-4 rounded-2xl border border-blue-100 bg-white p-5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-kreadika-royal text-sm font-bold text-white">
                  4
                </span>
                <div>
                  <h3 className="text-sm font-bold text-kreadika-navy">
                    Kepemimpinan sekolah
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600">
                    Kepemimpinan, manajemen, dan supervisi pendidikan
                  </p>
                </div>
              </li>
              <li className="flex h-full items-start gap-4 rounded-2xl border border-blue-100 bg-white p-5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-kreadika-royal text-sm font-bold text-white">
                  5
                </span>
                <div>
                  <h3 className="text-sm font-bold text-kreadika-navy">
                    Profesi pendidik
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600">
                    Pengembangan profesional dan kesejahteraan pendidik
                  </p>
                </div>
              </li>
              <li className="flex h-full items-start gap-4 rounded-2xl border border-blue-100 bg-white p-5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-kreadika-royal text-sm font-bold text-white">
                  6
                </span>
                <div>
                  <h3 className="text-sm font-bold text-kreadika-navy">
                    Pendidikan inklusif
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600">
                    Pendidikan inklusif, karakter, dan pemerataan mutu
                  </p>
                </div>
              </li>
              <li className="flex h-full items-start gap-4 rounded-2xl border border-blue-100 bg-white p-5 sm:col-span-2">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-kreadika-royal text-sm font-bold text-white">
                  7
                </span>
                <div>
                  <h3 className="text-sm font-bold text-kreadika-navy">
                    Kebijakan pendidikan
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600">
                    Kebijakan dan tata kelola pendidikan
                  </p>
                </div>
              </li>
            </ol>

            {/* Key Dates & Timeline Card */}
            <div id="tanggal-penting" className="lg:col-span-5">
              <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-blue-100 bg-white">
                <div className="bg-kreadika-navy px-6 py-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-sky-300">
                    Agenda &amp; Lini Masa
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-white">
                    Tanggal Penting KREADIKA 2027
                  </h3>
                </div>
                <ul className="flex flex-1 flex-col justify-around divide-y divide-blue-50 px-6 py-2">
                  <li className="flex items-center justify-between gap-4 py-3.5">
                    <span className="text-sm font-medium text-slate-700">
                      Batas pengiriman abstrak
                    </span>
                    <span className="shrink-0 rounded-md bg-kreadika-ice px-3 py-1 text-xs font-semibold text-kreadika-royal">
                      [tanggal]
                    </span>
                  </li>
                  <li className="flex items-center justify-between gap-4 py-3.5">
                    <span className="text-sm font-medium text-slate-700">
                      Pengumuman abstrak diterima
                    </span>
                    <span className="shrink-0 rounded-md bg-kreadika-ice px-3 py-1 text-xs font-semibold text-kreadika-royal">
                      [tanggal]
                    </span>
                  </li>
                  <li className="flex items-center justify-between gap-4 py-3.5">
                    <span className="text-sm font-medium text-slate-700">
                      Batas pengiriman artikel lengkap
                    </span>
                    <span className="shrink-0 rounded-md bg-kreadika-ice px-3 py-1 text-xs font-semibold text-kreadika-royal">
                      [tanggal]
                    </span>
                  </li>
                  <li className="flex items-center justify-between gap-4 py-3.5">
                    <span className="text-sm font-semibold text-kreadika-navy">
                      Pelaksanaan seminar
                    </span>
                    <span className="shrink-0 rounded-md bg-kreadika-royal px-3 py-1 text-xs font-semibold text-white">
                      [tanggal]
                    </span>
                  </li>
                  <li className="flex items-center justify-between gap-4 py-3.5">
                    <span className="text-sm font-medium text-slate-700">
                      Terbit prosiding
                    </span>
                    <span className="shrink-0 rounded-md bg-kreadika-ice px-3 py-1 text-xs font-semibold text-kreadika-royal">
                      [tanggal]
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 
          PUBLICATIONS & BENEFITS
      ==================== */}
      <section id="prosiding" className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-2xl">
            <span className="inline-block rounded-md bg-kreadika-ice px-3 py-1 text-xs font-semibold uppercase tracking-wider text-kreadika-royal">
              Publikasi &amp; Kepesertaan
            </span>
            <h2 className="mt-3 text-2xl font-bold text-kreadika-navy sm:text-3xl">
              Luaran Artikel &amp; Fasilitas Peserta
            </h2>
          </div>

          {/* Publication & Participant Cards */}
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="flex flex-col rounded-2xl border border-blue-100 bg-white p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-kreadika-ice text-kreadika-royal">
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
              <h3 className="mt-5 text-base font-bold text-kreadika-navy">
                Prosiding ber-ISSN dan ber-DOI
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                Artikel terpilih diterbitkan dalam Prosiding KREADIKA 2027
                oleh Scientific Advantage Publishing.
              </p>
              <a
                href="/prosiding"
                onClick={(e) => handleClick(e, "/prosiding")}
                className="mt-6 inline-flex items-center gap-1.5 border-t border-blue-50 pt-4 text-sm font-semibold text-kreadika-royal"
              >
                Tentang prosiding <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="flex flex-col rounded-2xl border border-blue-100 bg-white p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-kreadika-ice text-kreadika-royal">
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
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
              </div>
              <h3 className="mt-5 text-base font-bold text-kreadika-navy">
                Jurnal mitra
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                Artikel terbaik direkomendasikan untuk diterbitkan di jurnal
                mitra:
                <span className="font-semibold text-kreadika-navy">
                  [nama jurnal]
                </span>
                .
              </p>
              <a
                href="/mitra"
                onClick={(e) => handleClick(e, "/mitra")}
                className="mt-6 inline-flex items-center gap-1.5 border-t border-blue-50 pt-4 text-sm font-semibold text-kreadika-royal"
              >
                Lihat mitra <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="flex flex-col rounded-2xl border border-blue-100 bg-white p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-kreadika-ice text-kreadika-royal">
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
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <h3 className="mt-5 text-base font-bold text-kreadika-navy">
                Sertifikat
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                Pemakalah dan peserta menerima sertifikat elektronik.
              </p>
              <a
                href="/pendaftaran"
                onClick={(e) => handleClick(e, "/pendaftaran")}
                className="mt-6 inline-flex items-center gap-1.5 border-t border-blue-50 pt-4 text-sm font-semibold text-kreadika-royal"
              >
                Biaya dan cara mendaftar <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 
          5-YEAR ROADMAP
      ==================== */}
      <section
        id="peta-jalan"
        className="border-y border-blue-100 bg-kreadika-ice py-16 sm:py-24"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-2xl">
            <span className="inline-block rounded-md bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-kreadika-royal">
              Peta Jalan 5 Tahun
            </span>
            <h2 className="mt-3 text-2xl font-bold text-kreadika-navy sm:text-3xl">
              Satu Tema Setiap Tahun, 2027–2031
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
              KREADIKA dirancang sebagai seminar tahunan dengan subtema yang
              saling berkesinambungan.
            </p>
          </div>

          {/* Annual Themes List (2027-2031) */}
          <ol className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            <li className="flex flex-col rounded-2xl bg-kreadika-royal p-5 text-white">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xl font-bold">2027</span>
                <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-[11px] font-semibold">
                  Tahun ini
                </span>
              </div>
              <p className="mt-4 text-sm font-medium leading-snug">
                Pendidikan Kreatif dan Adaptif di Era Digital
              </p>
            </li>
            <li className="flex flex-col rounded-2xl border border-blue-100 bg-white p-5">
              <span className="text-xl font-bold text-kreadika-sky">
                2028
              </span>
              <p className="mt-4 text-sm font-medium leading-snug text-kreadika-navy">
                Pembelajaran Mendalam untuk Generasi Emas 2045
              </p>
            </li>
            <li className="flex flex-col rounded-2xl border border-blue-100 bg-white p-5">
              <span className="text-xl font-bold text-kreadika-sky">
                2029
              </span>
              <p className="mt-4 text-sm font-medium leading-snug text-kreadika-navy">
                Kepemimpinan Sekolah dan Kebijakan Pendidikan Berbasis Data
              </p>
            </li>
            <li className="flex flex-col rounded-2xl border border-blue-100 bg-white p-5">
              <span className="text-xl font-bold text-kreadika-sky">
                2030
              </span>
              <p className="mt-4 text-sm font-medium leading-snug text-kreadika-navy">
                Teknologi dan Kecerdasan Artifisial yang Bertanggung Jawab
                dalam Pendidikan
              </p>
            </li>
            <li className="flex flex-col rounded-2xl border border-blue-100 bg-white p-5">
              <span className="text-xl font-bold text-kreadika-sky">
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
          CALL TO ACTION BANNER
      ==================== */}
      <section id="kirim-abstrak" className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 rounded-2xl bg-kreadika-navy px-6 py-10 sm:px-10 sm:py-12 lg:flex-row lg:items-center lg:justify-between">
            {/* CTA Copy */}
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Bagikan praktik baik dan hasil penelitian Anda
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-blue-100 sm:text-base">
                Kami mengundang artikel hasil penelitian, kajian konseptual,
                dan praktik baik dari sekolah atau satuan pendidikan.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex shrink-0 flex-wrap gap-3">
              <a
                href="/call-for-papers#kirim"
                onClick={(e) => handleClick(e, "/call-for-papers#kirim")}
                className="inline-flex items-center justify-center rounded-lg bg-kreadika-royal px-6 py-3 text-sm font-semibold text-white"
              >
                Kirim Abstrak
              </a>
              <a
                href="/call-for-papers"
                onClick={(e) => handleClick(e, "/call-for-papers")}
                className="inline-flex items-center justify-center rounded-lg border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white"
              >
                Ketentuan makalah
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;

