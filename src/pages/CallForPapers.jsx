function CallForPapers({ onNavigate }) {
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

  const infoSeminar = [
    {
      label: "Waktu",
      value: "[tanggal pelaksanaan]",
      desc: "Pelaksanaan luring dan daring",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      ),
    },
    {
      label: "Tempat",
      value: "[lokasi], hibrid",
      desc: "Luring & daring interaktif",
      icon: (
        <>
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
        </>
      ),
    },
    {
      label: "Penyelenggara",
      value: "Scientific Advantage Publishing",
      desc: "Penerbitan ilmiah & prosiding",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      ),
    },
    {
      label: "Co-host",
      value: "[perguruan tinggi / organisasi profesi]",
      desc: "Mitra kolaborasi akademik",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      ),
    },
  ];

  const jenisArtikel = [
    {
      title: "Artikel Hasil Penelitian",
      desc: "Artikel yang bersumber dari hasil penelitian empiris, tindakan kelas, riset kuantitatif, kualitatif, atau metode campuran di berbagai jenjang satuan pendidikan.",
      badge: "Empiris & Riset",
    },
    {
      title: "Artikel Kajian Konseptual / Tinjauan Pustaka",
      desc: "Artikel berupa gagasan pemikiran teoritis, tinjauan pustaka kritis (literature review), sintesis konseptual baru, atau analisis kebijakan pendidikan.",
      badge: "Konseptual & Teori",
    },
    {
      title: "Artikel Praktik Baik (Best Practice)",
      desc: "Artikel yang mendokumentasikan implementasi praktik baik inovatif dari sekolah atau satuan pendidikan yang terbukti berdampak positif nyata bagi mutu pembelajaran.",
      badge: "Best Practice Sekolah",
    },
  ];

  const ruangLingkup = [
    {
      no: 1,
      title: "Inovasi Pembelajaran",
      desc: "Inovasi pembelajaran, kurikulum, dan pembelajaran mendalam",
    },
    {
      no: 2,
      title: "Teknologi Pendidikan",
      desc: "Teknologi pendidikan, transformasi digital, dan kecerdasan artifisial",
    },
    {
      no: 3,
      title: "Asesmen dan Evaluasi",
      desc: "Asesmen dan evaluasi pembelajaran",
    },
    {
      no: 4,
      title: "Kepemimpinan Pendidikan",
      desc: "Kepemimpinan, manajemen, dan supervisi pendidikan",
    },
    {
      no: 5,
      title: "Profesi & Kesejahteraan Pendidik",
      desc: "Pengembangan profesional dan kesejahteraan pendidik",
    },
    {
      no: 6,
      title: "Pendidikan Inklusif & Karakter",
      desc: "Pendidikan inklusif, karakter, dan pemerataan mutu",
    },
    {
      no: 7,
      title: "Kebijakan & Tata Kelola",
      desc: "Kebijakan dan tata kelola pendidikan",
    },
  ];

  const timelineDates = [
    {
      step: "01",
      label: "Batas pengiriman abstrak",
      date: "[tanggal]",
      highlight: false,
    },
    {
      step: "02",
      label: "Pengumuman abstrak diterima",
      date: "[tanggal]",
      highlight: false,
    },
    {
      step: "03",
      label: "Batas pengiriman artikel lengkap",
      date: "[tanggal]",
      highlight: false,
    },
    {
      step: "04",
      label: "Pelaksanaan seminar",
      date: "[tanggal]",
      highlight: true,
      tag: "Hari H",
    },
    {
      step: "05",
      label: "Terbit prosiding",
      date: "[tanggal]",
      highlight: false,
    },
  ];

  const submissionSteps = [
    {
      step: 1,
      title: "Buat Akun OJS",
      desc: "Buat akun di sistem OJS prosiding KREADIKA.",
    },
    {
      step: 2,
      title: "Kirim Abstrak",
      desc: "Kirim abstrak dan pilih ruang lingkup topik yang sesuai.",
    },
    {
      step: 3,
      title: "Pendaftaran Pemakalah",
      desc: "Setelah abstrak diterima, lakukan pendaftaran dan pembayaran sebagai pemakalah.",
    },
    {
      step: 4,
      title: "Unggah Artikel Lengkap",
      desc: "Unggah artikel lengkap sesuai template sebelum batas waktu untuk direview dan diterbitkan dalam prosiding.",
    },
  ];

  return (
    <main id="call-for-papers">
      {/* ==================== 
          HERO / PAGE HEADER (Identik dengan format Tentang KREADIKA)
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
              <span className="text-kreadika-600">Call for Papers</span>
            </span>

            <h1 className="mt-5 text-3xl font-bold tracking-tight text-kreadika-800 sm:text-4xl lg:text-5xl lg:leading-[1.15]">
              Call for Papers
            </h1>

            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              Tema: Pendidikan Kreatif dan Adaptif di Era Digital. Kami
              mengundang artikel hasil penelitian, kajian konseptual, dan
              praktik baik.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== 
          UNDANGAN & INFORMASI SEMINAR
      ==================== */}
      <section id="undangan" className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Headline & Narasi Undangan */}
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <span className="inline-block rounded-full border border-kreadika-200 bg-kreadika-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-kreadika-700">
                Undangan Terbuka
              </span>
              <h2 className="mt-4 text-2xl font-bold leading-snug text-kreadika-800 sm:text-3xl">
                Undangan Pengiriman Makalah KREADIKA 2027
              </h2>
            </div>

            <div className="space-y-4 text-base leading-relaxed text-slate-600 lg:col-span-7">
              <p>
                Panitia{" "}
                <strong className="font-semibold text-kreadika-800">
                  KREADIKA 2027
                </strong>{" "}
                mengundang guru, tenaga kependidikan, pengawas sekolah, kepala
                sekolah, pemangku kebijakan pendidikan, dosen, peneliti, dan
                mahasiswa untuk menyumbangkan artikel hasil penelitian, kajian
                konseptual, atau praktik baik dalam bidang pendidikan sesuai
                ruang lingkup topik seminar.
              </p>
              <p>
                Seminar ini menjadi ruang kolaborasi ilmiah nasional untuk
                menyebarluaskan gagasan inovatif, temuan empiris, serta solusi
                praktis dalam mendidik manusia di tengah transformasi era
                digital.
              </p>
            </div>
          </div>

          {/* Kartu Informasi Pelaksanaan Seminar */}
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {infoSeminar.map((item, index) => (
              <div
                key={index}
                className="group flex flex-col rounded-2xl border border-kreadika-200/80 bg-kreadika-50/40 p-5 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-kreadika-400 hover:bg-white hover:shadow-md hover:shadow-kreadika-800/5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-kreadika-200/70 bg-white text-kreadika-600 shadow-2xs transition-all duration-300 group-hover:scale-105 group-hover:border-kreadika-600 group-hover:bg-kreadika-600 group-hover:text-white">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    {item.icon}
                  </svg>
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-kreadika-600">
                  {item.label}
                </p>
                <p className="mt-1 text-base font-bold text-kreadika-800 transition-colors duration-200 group-hover:text-kreadika-600">
                  {item.value}
                </p>
                <p className="mt-0.5 text-xs text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Jenis Artikel Cards */}
          <div className="mt-16">
            <div className="max-w-2xl">
              <span className="inline-block rounded-full border border-kreadika-200 bg-kreadika-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-kreadika-700">
                Kategori Artikel
              </span>
              <h3 className="mt-3 text-2xl font-bold text-kreadika-800">
                Jenis Artikel yang Diterima
              </h3>
              <p className="mt-2 text-sm text-slate-600 sm:text-base">
                Pemakalah dapat mengirimkan artikel dalam salah satu dari tiga
                kategori naskah berikut:
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              {jenisArtikel.map((artikel, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col justify-between rounded-2xl border border-kreadika-200/80 bg-white p-6 shadow-2xs transition-all duration-300 hover:-translate-y-1.5 hover:border-kreadika-400 hover:shadow-md hover:shadow-kreadika-800/5"
                >
                  <div>
                    <span className="inline-block rounded-full border border-kreadika-200/70 bg-kreadika-50 px-3 py-1 text-xs font-semibold text-kreadika-700 transition-colors duration-200 group-hover:border-kreadika-600 group-hover:bg-kreadika-600 group-hover:text-white">
                      {artikel.badge}
                    </span>
                    <h4 className="mt-4 text-lg font-bold text-kreadika-800 transition-colors duration-200 group-hover:text-kreadika-600">
                      {artikel.title}
                    </h4>
                    <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                      {artikel.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 
          RUANG LINGKUP TOPIK (FOKUS KAJIAN)
      ==================== */}
      <section
        id="topik"
        className="border-y border-kreadika-200/70 bg-kreadika-50/60 py-16 sm:py-24"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full border border-kreadika-200 bg-white px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-kreadika-700 shadow-2xs">
              Subtema Kajian
            </span>
            <h2 className="mt-3 text-2xl font-bold text-kreadika-800 sm:text-3xl">
              Ruang Lingkup Topik
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
              Makalah yang dikirimkan dapat mencakup salah satu dari tujuh ruang
              lingkup fokus kajian seminar:
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ruangLingkup.map((item, index) => (
              <div
                key={item.no}
                className={`group flex flex-col justify-between rounded-2xl border border-kreadika-200/80 bg-white p-6 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-kreadika-400 hover:shadow-md hover:shadow-kreadika-800/5 ${
                  index === 6 ? "sm:col-span-2 lg:col-span-3" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-kreadika-200/70 bg-kreadika-50 text-sm font-bold text-kreadika-700 transition-all duration-300 group-hover:scale-105 group-hover:border-kreadika-600 group-hover:bg-kreadika-600 group-hover:text-white">
                      0{item.no}
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-600 transition-colors duration-200 group-hover:text-kreadika-600">
                      Topik 0{item.no}
                    </span>
                  </div>
                  <h3 className="mt-4 text-base font-bold text-kreadika-800 transition-colors duration-200 group-hover:text-kreadika-600">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 
          TANGGAL PENTING (AGENDA & LINI MASA)
          Desain Baru: Timeline Card Grid yang Lega, Rapi, & Proporsional
      ==================== */}
      <section id="tanggal-penting" className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-2xl">
            <span className="inline-block rounded-full border border-kreadika-200 bg-kreadika-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-kreadika-700">
              Agenda &amp; Lini Masa
            </span>
            <h2 className="mt-3 text-2xl font-bold text-kreadika-800 sm:text-3xl">
              Tanggal Penting
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
              Perhatikan batas waktu pengiriman naskah dan kegiatan seminar
              KREADIKA 2027.
            </p>
          </div>

          {/* 5-Milestone Timeline Cards */}
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {timelineDates.map((item, index) => (
              <div
                key={index}
                className={`group relative flex flex-col justify-between rounded-2xl p-5.5 transition-all duration-300 hover:-translate-y-1 ${
                  item.highlight
                    ? "bg-kreadika-800 text-white ring-2 ring-kreadika-600/30 shadow-md hover:shadow-xl hover:shadow-kreadika-800/15"
                    : "border border-kreadika-200/80 bg-white shadow-2xs hover:border-kreadika-400 hover:shadow-md hover:shadow-kreadika-800/5"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-lg text-xs font-bold transition-all duration-300 ${
                        item.highlight
                          ? "bg-white/15 text-kreadika-200 group-hover:scale-105 group-hover:bg-kreadika-400 group-hover:text-kreadika-950"
                          : "border border-kreadika-200/60 bg-kreadika-50 text-kreadika-700 group-hover:scale-105 group-hover:border-kreadika-600 group-hover:bg-kreadika-600 group-hover:text-white"
                      }`}
                    >
                      {item.step}
                    </span>
                    {item.highlight && (
                      <span className="rounded-full bg-kreadika-400 px-2.5 py-0.5 text-[10px] font-bold tracking-wide uppercase text-kreadika-950 shadow-2xs">
                        {item.tag}
                      </span>
                    )}
                  </div>

                  <h3
                    className={`mt-4 text-sm font-bold leading-snug transition-colors duration-200 ${
                      item.highlight
                        ? "text-white"
                        : "text-kreadika-800 group-hover:text-kreadika-600"
                    }`}
                  >
                    {item.label}
                  </h3>
                </div>

                <div
                  className={`mt-6 border-t pt-3.5 ${
                    item.highlight ? "border-white/15" : "border-kreadika-100"
                  }`}
                >
                  <p
                    className={`text-xs font-semibold uppercase tracking-wider ${
                      item.highlight ? "text-kreadika-200" : "text-slate-600"
                    }`}
                  >
                    Jadwal
                  </p>
                  <p
                    className={`mt-0.5 text-base font-bold ${
                      item.highlight ? "text-white" : "text-kreadika-700"
                    }`}
                  >
                    {item.date}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline Bottom Notification */}
          <div className="mt-6 flex flex-col gap-2 rounded-xl border border-kreadika-200/80 bg-kreadika-50/60 px-5 py-3.5 text-xs text-slate-600 shadow-2xs transition-shadow duration-300 hover:shadow-xs sm:flex-row sm:items-center sm:justify-between">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Seluruh batas waktu dan kegiatan menggunakan zona Waktu Indonesia
              Barat (WIB).
            </span>
            <span className="font-semibold text-kreadika-800">
              Seminar Nasional KREADIKA 2027
            </span>
          </div>
        </div>
      </section>

      {/* ==================== 
          LUARAN / PUBLIKASI ARTIKEL
      ==================== */}
      <section
        id="luaran"
        className="border-y border-kreadika-200/70 bg-kreadika-50/60 py-16 sm:py-24"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full border border-kreadika-200 bg-white px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-kreadika-700 shadow-2xs">
              Luaran Seminar
            </span>
            <h2 className="mt-3 text-2xl font-bold text-kreadika-800 sm:text-3xl">
              Publikasi dan Luaran Artikel
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
              Setiap artikel yang lolos seleksi dan disajikan memperoleh luaran
              ilmiah resmi berikut:
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Prosiding */}
            <div className="group flex flex-col justify-between rounded-2xl border border-kreadika-200/80 bg-white p-6 shadow-2xs transition-all duration-300 hover:-translate-y-1.5 hover:border-kreadika-400 hover:shadow-md hover:shadow-kreadika-800/5">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-kreadika-200/70 bg-kreadika-50 text-kreadika-600 transition-all duration-300 group-hover:scale-105 group-hover:border-kreadika-600 group-hover:bg-kreadika-600 group-hover:text-white">
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
                <h3 className="mt-5 text-lg font-bold text-kreadika-800 transition-colors duration-200 group-hover:text-kreadika-600">
                  Prosiding KREADIKA 2027
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Artikel terpilih diterbitkan dalam Prosiding KREADIKA 2027
                  oleh Scientific Advantage Publishing (ber-ISSN dan ber-DOI).
                </p>
              </div>
              <a
                href="/prosiding"
                onClick={(e) => handleClick(e, "/prosiding")}
                className="group/link mt-6 inline-flex items-center gap-1.5 border-t border-kreadika-100 pt-4 text-sm font-semibold text-kreadika-600 transition-colors duration-200 hover:text-kreadika-800"
              >
                Informasi prosiding{" "}
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover/link:translate-x-1"
                >
                  →
                </span>
              </a>
            </div>

            {/* Rekomendasi Jurnal */}
            <div className="group flex flex-col justify-between rounded-2xl border border-kreadika-200/80 bg-white p-6 shadow-2xs transition-all duration-300 hover:-translate-y-1.5 hover:border-kreadika-400 hover:shadow-md hover:shadow-kreadika-800/5">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-kreadika-200/70 bg-kreadika-50 text-kreadika-600 transition-all duration-300 group-hover:scale-105 group-hover:border-kreadika-600 group-hover:bg-kreadika-600 group-hover:text-white">
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
                <h3 className="mt-5 text-lg font-bold text-kreadika-800 transition-colors duration-200 group-hover:text-kreadika-600">
                  Rekomendasi Jurnal Mitra
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Artikel terbaik direkomendasikan ke jurnal mitra:{" "}
                  <span className="font-semibold text-kreadika-800">
                    [nama jurnal]
                  </span>{" "}
                  untuk proses penerbitan artikel berkala ilmiah.
                </p>
              </div>
              <a
                href="/mitra"
                onClick={(e) => handleClick(e, "/mitra")}
                className="group/link mt-6 inline-flex items-center gap-1.5 border-t border-kreadika-100 pt-4 text-sm font-semibold text-kreadika-600 transition-colors duration-200 hover:text-kreadika-800"
              >
                Lihat daftar mitra{" "}
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover/link:translate-x-1"
                >
                  →
                </span>
              </a>
            </div>

            {/* Sertifikat */}
            <div className="group flex flex-col justify-between rounded-2xl border border-kreadika-200/80 bg-white p-6 shadow-2xs transition-all duration-300 hover:-translate-y-1.5 hover:border-kreadika-400 hover:shadow-md hover:shadow-kreadika-800/5">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-kreadika-200/70 bg-kreadika-50 text-kreadika-600 transition-all duration-300 group-hover:scale-105 group-hover:border-kreadika-600 group-hover:bg-kreadika-600 group-hover:text-white">
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
                <h3 className="mt-5 text-lg font-bold text-kreadika-800 transition-colors duration-200 group-hover:text-kreadika-600">
                  Sertifikat Resmi
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Sertifikat pemakalah dan peserta seminar ber-SK resmi dari
                  penyelenggara dan co-host seminar nasional.
                </p>
              </div>
              <a
                href="/pendaftaran"
                onClick={(e) => handleClick(e, "/pendaftaran")}
                className="group/link mt-6 inline-flex items-center gap-1.5 border-t border-kreadika-100 pt-4 text-sm font-semibold text-kreadika-600 transition-colors duration-200 hover:text-kreadika-800"
              >
                Informasi kepesertaan{" "}
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover/link:translate-x-1"
                >
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 
          KETENTUAN MAKALAH
      ==================== */}
      <section id="ketentuan" className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full border border-kreadika-200 bg-kreadika-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-kreadika-700">
              Pedoman Penulisan
            </span>
            <h2 className="mt-3 text-2xl font-bold text-kreadika-800 sm:text-3xl">
              Ketentuan Makalah
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
              Naskah yang diajukan wajib memenuhi standar penulisan naskah
              ilmiah berikut:
            </p>
          </div>

            {/* Ketentuan Umum Cards */}
          <div className="mt-10 rounded-2xl border border-kreadika-200/80 bg-white p-6 shadow-2xs sm:p-8">
            <h3 className="text-lg font-bold text-kreadika-800">
              Ketentuan Umum
            </h3>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl border border-kreadika-200/70 bg-kreadika-50/50 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-kreadika-400 hover:bg-white hover:shadow-2xs">
                <p className="text-xs font-semibold uppercase tracking-wider text-kreadika-600">
                  Bahasa
                </p>
                <p className="mt-1 text-sm font-bold text-kreadika-800">
                  Bahasa Indonesia atau Inggris
                </p>
                <p className="mt-0.5 text-xs text-slate-600">
                  Ditulis dengan tata bahasa baku dan efektif
                </p>
              </div>

              <div className="rounded-xl border border-kreadika-200/70 bg-kreadika-50/50 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-kreadika-400 hover:bg-white hover:shadow-2xs">
                <p className="text-xs font-semibold uppercase tracking-wider text-kreadika-600">
                  Panjang Naskah
                </p>
                <p className="mt-1 text-sm font-bold text-kreadika-800">
                  Panjang 8–12 halaman, kertas A4
                </p>
                <p className="mt-0.5 text-xs text-slate-600">
                  Format dokumen standar template KREADIKA
                </p>
              </div>

              <div className="rounded-xl border border-kreadika-200/70 bg-kreadika-50/50 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-kreadika-400 hover:bg-white hover:shadow-2xs">
                <p className="text-xs font-semibold uppercase tracking-wider text-kreadika-600">
                  Tipografi &amp; Spasi
                </p>
                <p className="mt-1 text-sm font-bold text-kreadika-800">
                  Times New Roman 12, spasi 1,15
                </p>
                <p className="mt-0.5 text-xs text-slate-600">
                  Margin dan format teks proporsional
                </p>
              </div>

              <div className="rounded-xl border border-kreadika-200/70 bg-kreadika-50/50 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-kreadika-400 hover:bg-white hover:shadow-2xs">
                <p className="text-xs font-semibold uppercase tracking-wider text-kreadika-600">
                  Gaya Sitasi
                </p>
                <p className="mt-1 text-sm font-bold text-kreadika-800">
                  APA Edisi ke-7
                </p>
                <p className="mt-0.5 text-xs text-slate-600">
                  Menggunakan Mendeley atau Zotero
                </p>
              </div>

              <div className="rounded-xl border border-kreadika-200/70 bg-kreadika-50/50 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-kreadika-400 hover:bg-white hover:shadow-2xs">
                <p className="text-xs font-semibold uppercase tracking-wider text-kreadika-600">
                  Daftar Pustaka
                </p>
                <p className="mt-1 text-sm font-bold text-kreadika-800">
                  Minimal 15 rujukan
                </p>
                <p className="mt-0.5 text-xs text-slate-600">
                  80% terbit dalam 10 tahun terakhir
                </p>
              </div>

              <div className="rounded-xl border border-kreadika-200/70 bg-kreadika-50/50 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-kreadika-400 hover:bg-white hover:shadow-2xs">
                <p className="text-xs font-semibold uppercase tracking-wider text-kreadika-600">
                  Kemiripan &amp; Sistem
                </p>
                <p className="mt-1 text-sm font-bold text-kreadika-800">
                  Similarity Maksimal 20%
                </p>
                <p className="mt-0.5 text-xs text-slate-600">
                  Dikirim melalui sistem OJS prosiding KREADIKA
                </p>
              </div>
            </div>
          </div>

          {/* Sistematika Penulisan (2 Kolom) */}
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Format 1: Penelitian & Konseptual */}
            <div className="group flex flex-col rounded-2xl border border-kreadika-200/80 bg-white p-6 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-kreadika-400 hover:shadow-md hover:shadow-kreadika-800/5 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-kreadika-600 text-white shadow-2xs transition-transform duration-300 group-hover:scale-105 group-hover:bg-kreadika-700">
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
                </span>
                <h3 className="text-lg font-bold text-kreadika-800 transition-colors duration-200 group-hover:text-kreadika-600">
                  Artikel Penelitian dan Konseptual
                </h3>
              </div>
              <p className="mt-2 text-xs text-slate-600">
                Sistematika struktur penulisan artikel hasil penelitian dan
                kajian konseptual:
              </p>

              <ol className="mt-5 space-y-2.5 text-sm text-slate-600">
                <li className="flex items-start gap-2.5">
                  <span className="font-semibold text-kreadika-600">1.</span>
                  <span>Judul (maksimal 15 kata)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-semibold text-kreadika-600">2.</span>
                  <span>Nama penulis, afiliasi, dan email</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-semibold text-kreadika-600">3.</span>
                  <span>Abstrak (150–250 kata) dan kata kunci (3–5 kata)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-semibold text-kreadika-600">4.</span>
                  <span>Pendahuluan</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-semibold text-kreadika-600">5.</span>
                  <span>Metode</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-semibold text-kreadika-600">6.</span>
                  <span>Hasil dan Pembahasan</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-semibold text-kreadika-600">7.</span>
                  <span>Simpulan dan Saran</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-semibold text-kreadika-600">8.</span>
                  <span>Ucapan Terima Kasih (opsional)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-semibold text-kreadika-600">9.</span>
                  <span>Daftar Pustaka</span>
                </li>
              </ol>
            </div>

            {/* Format 2: Praktik Baik */}
            <div className="group flex flex-col rounded-2xl border border-kreadika-200/80 bg-white p-6 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-kreadika-400 hover:shadow-md hover:shadow-kreadika-800/5 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-kreadika-600 text-white shadow-2xs transition-transform duration-300 group-hover:scale-105 group-hover:bg-kreadika-700">
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
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </span>
                <h3 className="text-lg font-bold text-kreadika-800 transition-colors duration-200 group-hover:text-kreadika-600">
                  Artikel Praktik Baik (Best Practice)
                </h3>
              </div>
              <p className="mt-2 text-xs text-slate-600">
                Sistematika struktur penulisan artikel praktik baik dari satuan
                pendidikan:
              </p>

              <ol className="mt-5 space-y-2.5 text-sm text-slate-600">
                <li className="flex items-start gap-2.5">
                  <span className="font-semibold text-kreadika-600">1.</span>
                  <span>Latar Belakang Masalah</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-semibold text-kreadika-600">2.</span>
                  <span>Deskripsi Praktik Baik</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-semibold text-kreadika-600">3.</span>
                  <span>Hasil dan Dampak</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-semibold text-kreadika-600">4.</span>
                  <span>Refleksi dan Rekomendasi</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-semibold text-kreadika-600">5.</span>
                  <span>Daftar Pustaka</span>
                </li>
              </ol>

              <div className="mt-auto pt-6">
                <div className="rounded-xl border border-kreadika-200/70 bg-kreadika-50/60 p-4 text-xs text-kreadika-800">
                  <p className="leading-relaxed">
                    Format naskah praktik baik memfasilitasi pendidik dan
                    praktisi untuk mendokumentasikan terobosan nyata
                    pembelajaran secara ilmiah dan aplikatif.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 
          CARA MENGIRIM & REVIEW
      ==================== */}
      <section
        id="cara-mengirim"
        className="border-y border-kreadika-200/70 bg-kreadika-50/60 py-16 sm:py-24"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full border border-kreadika-200 bg-white px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-kreadika-700 shadow-2xs">
              Alur Pengiriman
            </span>
            <h2 className="mt-3 text-2xl font-bold text-kreadika-800 sm:text-3xl">
              Cara Mengirim
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
              Langkah pengiriman artikel pemakalah melalui sistem OJS KREADIKA:
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {submissionSteps.map((item) => (
              <div
                key={item.step}
                className="group flex flex-col justify-between rounded-2xl border border-kreadika-200/80 bg-white p-6 shadow-2xs transition-all duration-300 hover:-translate-y-1.5 hover:border-kreadika-400 hover:shadow-md hover:shadow-kreadika-800/5 sm:p-7"
              >
                <div>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-kreadika-600 text-sm font-bold text-white shadow-2xs transition-all duration-300 group-hover:scale-105 group-hover:bg-kreadika-700">
                    {item.step}
                  </span>
                  <h3 className="mt-5 text-base font-bold text-kreadika-800 transition-colors duration-200 group-hover:text-kreadika-600">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Independensi Review Callout */}
          <div className="mt-8 rounded-2xl border border-kreadika-200/80 bg-white p-6 shadow-2xs transition-all duration-300 hover:border-kreadika-400 hover:shadow-md hover:shadow-kreadika-800/5 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
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
              <div>
                <h4 className="text-base font-bold text-kreadika-800">
                  Independensi dan Integritas Review Ilmiah
                </h4>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                  Review dilakukan oleh Komite Ilmiah dari beberapa perguruan
                  tinggi yang berbeda. Biaya pendaftaran tidak memengaruhi
                  keputusan review. Penilaian artikel dilakukan secara objektif
                  berdasarkan kriteria kualitas ilmiah, kebaruan ide, dan
                  relevansi topik.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 
          CTA: SIAP MENGIRIM ABSTRAK?
      ==================== */}
      <section id="kirim" className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-kreadika-700 bg-kreadika-800 px-6 py-10 text-white shadow-lg shadow-kreadika-800/10 sm:px-10 sm:py-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-kreadika-600/30 blur-3xl"
            />
            <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl">
                <span className="inline-block rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-kreadika-200">
                  Pengiriman Naskah
                </span>
                <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Siap mengirim abstrak?
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-kreadika-100/90 sm:text-base">
                  Sistem pengiriman dibuka bersamaan dengan pengumuman call for
                  papers.
                </p>
              </div>

              <div className="flex shrink-0 flex-wrap items-center gap-3">
                <a
                  href="https://kreadika.id/call-for-papers#kirim"
                  onClick={(e) =>
                    handleClick(e, "https://kreadika.id/call-for-papers#kirim")
                  }
                  className="group inline-flex items-center justify-center rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-kreadika-800 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:bg-kreadika-50 hover:shadow-md active:translate-y-0 active:scale-[0.98]"
                >
                  Kirim melalui OJS
                  <span
                    aria-hidden="true"
                    className="ml-1.5 transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
                <a
                  href="https://kreadika.id/kontak"
                  onClick={(e) => handleClick(e, "/kontak")}
                  className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/10 px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/15 hover:shadow-md active:translate-y-0 active:scale-[0.98]"
                >
                  Unduh template makalah
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default CallForPapers;
