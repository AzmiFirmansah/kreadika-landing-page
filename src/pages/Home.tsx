import type { PageProps, LinkClickEvent } from "../types";

function Home({ onNavigate }: PageProps) {
  const handleClick = (e: LinkClickEvent, path: string) => {
    if (onNavigate && path.startsWith("/")) {
      e.preventDefault();
      onNavigate(path);
    }
  };

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
      title: "Asesmen Pembelajaran",
      desc: "Asesmen dan evaluasi pembelajaran",
    },
    {
      no: 4,
      title: "Kepemimpinan Sekolah",
      desc: "Kepemimpinan, manajemen, dan supervisi pendidikan",
    },
    {
      no: 5,
      title: "Profesi Pendidik",
      desc: "Pengembangan profesional dan kesejahteraan pendidik",
    },
    {
      no: 6,
      title: "Pendidikan Inklusif",
      desc: "Pendidikan inklusif, karakter, dan pemerataan mutu",
    },
    {
      no: 7,
      title: "Kebijakan Pendidikan",
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

  return (
    <main id="beranda">
      {/* ==================== 
          HERO SECTION (MODERN ACADEMIC & CLEAN EVENT UI)
      ==================== */}
      <section className="relative overflow-hidden border-b border-kreadika-200/80 bg-linear-to-b from-kreadika-50 via-kreadika-50/40 to-white">
        {/* Subtle Academic Background Accents */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute -top-24 left-1/2 h-80 w-2xl -translate-x-1/2 rounded-full bg-kreadika-200/40 blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-6xl px-4 pt-16 pb-14 sm:px-6 sm:pt-24 sm:pb-20 lg:px-8">
          {/* Hero Intro & Action Buttons */}
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-kreadika-800 sm:text-5xl sm:leading-[1.15]">
              Pendidikan Kreatif dan Adaptif di Era Digital
            </h1>

            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              <span className="font-semibold text-kreadika-800">
                “Mendidik Manusia di Tengah Perubahan”
              </span>
              . Forum nasional bagi guru, pengawas, kepala sekolah, pemangku
              kebijakan, dosen, dan mahasiswa pendidikan untuk berbagi gagasan,
              hasil penelitian, dan praktik baik.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
              <a
                href="/call-for-papers#kirim"
                onClick={(e) => handleClick(e, "/call-for-papers#kirim")}
                className="inline-flex items-center justify-center rounded-xl bg-kreadika-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-kreadika-700 hover:shadow-md hover:shadow-kreadika-600/20 active:translate-y-0 active:scale-[0.98]"
              >
                Kirim Abstrak
              </a>
              <a
                href="/pendaftaran"
                onClick={(e) => handleClick(e, "/pendaftaran")}
                className="inline-flex items-center justify-center rounded-xl border border-kreadika-200 bg-white px-6 py-3.5 text-sm font-semibold text-kreadika-800 shadow-2xs transition-all duration-300 hover:-translate-y-0.5 hover:border-kreadika-400 hover:bg-kreadika-50 active:translate-y-0 active:scale-[0.98]"
              >
                Daftar Seminar
              </a>
            </div>
          </div>

          {/* Event Quick Details: Date & Location */}
          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="group flex items-start gap-4 rounded-2xl border border-kreadika-200/80 bg-white p-5 shadow-xs shadow-kreadika-800/5 transition-all duration-300 hover:-translate-y-1 hover:border-kreadika-400 hover:shadow-md">
<<<<<<< HEAD:src/pages/Home.tsx
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-kreadika-200/60 bg-kreadika-50 text-kreadika-600 transition-all duration-300 group-hover:scale-105 group-hover:border-kreadika-600 group-hover:bg-kreadika-600 group-hover:text-white">
=======
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rrounded-xl border border-kreadika-200/60 bg-kreadika-50 text-kreadika-600 transition-all duration-300 group-hover:scale-105 group-hover:border-kreadika-600 group-hover:bg-kreadika-600 group-hover:text-white">
>>>>>>> ecbb783abac959e176326c3f5a6995ee7b0e8127:src/pages/Home.jsx
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
                <p className="text-xs font-semibold uppercase tracking-wider text-kreadika-600">
                  Waktu
                </p>
                <p className="mt-1 text-base font-bold text-kreadika-800">
                  [tanggal pelaksanaan]
                </p>
                <p className="mt-0.5 text-sm text-slate-600">
                  Luring dan daring (hibrid)
                </p>
              </div>
            </div>

            <div className="group flex items-start gap-4 rounded-2xl border border-kreadika-200/80 bg-white p-5 shadow-xs shadow-kreadika-800/5 transition-all duration-300 hover:-translate-y-1 hover:border-kreadika-400 hover:shadow-md">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-kreadika-200/60 bg-kreadika-50 text-kreadika-600 transition-all duration-300 group-hover:scale-105 group-hover:border-kreadika-600 group-hover:bg-kreadika-600 group-hover:text-white">
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
                <p className="text-xs font-semibold uppercase tracking-wider text-kreadika-600">
                  Lokasi
                </p>
                <p className="mt-1 text-base font-bold text-kreadika-800">
                  [lokasi]
                </p>
                <p className="mt-0.5 text-sm text-slate-600">
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
      <section id="mitra" className="border-b border-kreadika-200/70 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-7 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
              <p className="shrink-0 text-xs font-semibold uppercase tracking-wider text-slate-600">
                Co-host
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="flex h-11 items-center justify-center rounded-xl border border-kreadika-200/80 bg-kreadika-50/60 px-5 text-xs font-medium text-kreadika-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-kreadika-400 hover:bg-kreadika-50 hover:shadow-2xs">
                  [logo co-host]
                </div>
                <div className="flex h-11 items-center justify-center rounded-xl border border-kreadika-200/80 bg-kreadika-50/60 px-5 text-xs font-medium text-kreadika-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-kreadika-400 hover:bg-kreadika-50 hover:shadow-2xs">
                  [logo co-host]
                </div>
                <div className="flex h-11 items-center justify-center rounded-xl border border-kreadika-200/80 bg-kreadika-50/60 px-5 text-xs font-medium text-kreadika-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-kreadika-400 hover:bg-kreadika-50 hover:shadow-2xs">
                  [logo organisasi profesi]
                </div>
              </div>
            </div>
            <a
              href="/mitra"
              onClick={(e) => handleClick(e, "/mitra")}
              className="group inline-flex shrink-0 items-center gap-1.5 self-start text-sm font-semibold text-kreadika-600 transition-colors duration-200 hover:text-kreadika-800 md:self-auto"
            >
              Semua mitra{" "}
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
          ABOUT KREADIKA
      ==================== */}
      <section id="tentang" className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Section Headline */}
            <div className="lg:col-span-5">
              <span className="inline-block rounded-full border border-kreadika-200 bg-kreadika-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-kreadika-700">
                Tentang KREADIKA
              </span>
              <h2 className="mt-4 text-2xl font-bold leading-snug text-kreadika-800 sm:text-3xl">
                Teknologi untuk memperkuat peran manusia dalam pendidikan, bukan
                menggantikannya
              </h2>
              <div className="mt-5 h-1 w-14 rounded-full bg-kreadika-600"></div>
            </div>

            {/* About Description */}
            <div className="space-y-4 text-base leading-relaxed text-slate-600 lg:col-span-7">
              <p>
                <strong className="font-semibold text-kreadika-800">
                  KREADIKA
                </strong>{" "}
                adalah seminar nasional tahunan yang diselenggarakan secara
                luring dan daring. Namanya gabungan dari{" "}
                <span className="font-semibold text-kreadika-600">KREA</span>
                tif, <span className="font-semibold text-kreadika-600">AD</span>
                aptif, dan pend
                <span className="font-semibold text-kreadika-600">IDIKA</span>
                n.
              </p>
              <p>
                Seminar ini menegaskan bahwa perubahan, termasuk perkembangan
                teknologi digital dan kecerdasan artifisial, harus dimanfaatkan
                untuk memperkuat peran manusia dalam pendidikan. Arah ini
                sejalan dengan cita-cita Indonesia Emas 2045, pembelajaran
                mendalam, dan Kurikulum Merdeka.
              </p>
              <a
                href="/tentang"
                onClick={(e) => handleClick(e, "/tentang")}
                className="group inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-kreadika-600 transition-colors duration-200 hover:text-kreadika-800"
              >
                Selengkapnya tentang KREADIKA{" "}
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
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
        className="border-y border-kreadika-200/70 bg-kreadika-50/60 py-16 sm:py-24"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="inline-block rounded-full border border-kreadika-200 bg-white px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-kreadika-700 shadow-2xs">
                Call for Papers
              </span>
              <h2 className="mt-3 text-2xl font-bold text-kreadika-800 sm:text-3xl">
                Ruang Lingkup Topik
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                Makalah yang dikirimkan dapat mencakup salah satu dari tujuh
                subtema kajian berikut:
              </p>
            </div>
            <a
              href="/call-for-papers"
              onClick={(e) => handleClick(e, "/call-for-papers")}
              className="group inline-flex items-center gap-1.5 self-start text-sm font-semibold text-kreadika-600 transition-colors duration-200 hover:text-kreadika-800 hover:underline md:self-auto"
            >
              Panduan lengkap naskah{" "}
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>

          {/* Conference Subthemes & Topics Scope */}
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
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-kreadika-200/70 bg-kreadika-50 text-xs font-bold text-kreadika-700 transition-all duration-300 group-hover:scale-105 group-hover:border-kreadika-600 group-hover:bg-kreadika-600 group-hover:text-white">
                      0{item.no}
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-600 transition-colors duration-200 group-hover:text-kreadika-600">
                      Subtema 0{item.no}
                    </span>
                  </div>
                  <h3 className="mt-4 text-base font-bold text-kreadika-800 transition-colors duration-200 group-hover:text-kreadika-600">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ==================== 
              TANGGAL PENTING KREADIKA 2027
          ==================== */}
          <div
            id="tanggal-penting"
            className="mt-16 border-t border-kreadika-200/80 pt-16"
          >
            <div className="max-w-2xl">
              <span className="inline-block rounded-full border border-kreadika-200 bg-white px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-kreadika-700 shadow-2xs">
                Agenda &amp; Lini Masa
              </span>
              <h3 className="mt-3 text-2xl font-bold text-kreadika-800 sm:text-3xl">
                Tanggal Penting KREADIKA 2027
              </h3>
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
                            : "bg-kreadika-50 text-kreadika-700 border border-kreadika-200/60 group-hover:scale-105 group-hover:bg-kreadika-600 group-hover:text-white group-hover:border-kreadika-600"
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

                    <h4
                      className={`mt-4 text-sm font-bold leading-snug transition-colors duration-200 ${
                        item.highlight
                          ? "text-white"
                          : "text-kreadika-800 group-hover:text-kreadika-600"
                      }`}
                    >
                      {item.label}
                    </h4>
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
            <div className="mt-6 flex flex-col gap-2 rounded-xl border border-kreadika-200/80 bg-white px-5 py-3.5 text-xs text-slate-600 shadow-2xs transition-shadow duration-300 hover:shadow-xs sm:flex-row sm:items-center sm:justify-between">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Seluruh batas waktu dan kegiatan menggunakan zona Waktu
                Indonesia Barat (WIB).
              </span>
              <a
                href="/call-for-papers#kirim"
                onClick={(e) => handleClick(e, "/call-for-papers#kirim")}
                className="group inline-flex items-center gap-1 font-semibold text-kreadika-600 transition-colors duration-200 hover:text-kreadika-800 hover:underline"
              >
                Kirim abstrak sekarang{" "}
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
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
            <span className="inline-block rounded-full border border-kreadika-200 bg-kreadika-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-kreadika-700">
              Publikasi &amp; Kepesertaan
            </span>
            <h2 className="mt-3 text-2xl font-bold text-kreadika-800 sm:text-3xl">
              Luaran Artikel &amp; Fasilitas Peserta
            </h2>
          </div>

          {/* Publication & Participant Cards */}
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
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
                Prosiding ber-ISSN dan ber-DOI
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                Artikel terpilih diterbitkan dalam Prosiding KREADIKA 2027 oleh
                Scientific Advantage Publishing.
              </p>
              <a
                href="/prosiding"
                onClick={(e) => handleClick(e, "/prosiding")}
                className="group/link mt-6 inline-flex items-center gap-1.5 border-t border-kreadika-100 pt-4 text-sm font-semibold text-kreadika-600 transition-colors duration-200 hover:text-kreadika-800"
              >
                Tentang prosiding{" "}
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover/link:translate-x-1"
                >
                  →
                </span>
              </a>
            </div>

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
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
              </div>
              <h3 className="mt-5 text-base font-bold text-kreadika-800 transition-colors duration-200 group-hover:text-kreadika-600">
                Jurnal mitra
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                Artikel terbaik direkomendasikan untuk diterbitkan di jurnal
                mitra:{" "}
                <span className="font-semibold text-kreadika-800">
                  [nama jurnal]
                </span>
                .
              </p>
              <a
                href="/mitra"
                onClick={(e) => handleClick(e, "/mitra")}
                className="group/link mt-6 inline-flex items-center gap-1.5 border-t border-kreadika-100 pt-4 text-sm font-semibold text-kreadika-600 transition-colors duration-200 hover:text-kreadika-800"
              >
                Lihat mitra{" "}
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover/link:translate-x-1"
                >
                  →
                </span>
              </a>
            </div>

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
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <h3 className="mt-5 text-base font-bold text-kreadika-800 transition-colors duration-200 group-hover:text-kreadika-600">
                Sertifikat
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                Pemakalah dan peserta menerima sertifikat elektronik.
              </p>
              <a
                href="/pendaftaran"
                onClick={(e) => handleClick(e, "/pendaftaran")}
                className="group/link mt-6 inline-flex items-center gap-1.5 border-t border-kreadika-100 pt-4 text-sm font-semibold text-kreadika-600 transition-colors duration-200 hover:text-kreadika-800"
              >
                Biaya dan cara mendaftar{" "}
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
          5-YEAR ROADMAP
      ==================== */}
      <section
        id="peta-jalan"
        className="border-y border-kreadika-200/70 bg-kreadika-50/60 py-16 sm:py-24"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-2xl">
            <span className="inline-block rounded-full border border-kreadika-200 bg-white px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-kreadika-700 shadow-2xs">
              Peta Jalan 5 Tahun
            </span>
            <h2 className="mt-3 text-2xl font-bold text-kreadika-800 sm:text-3xl">
              Satu Tema Setiap Tahun, 2027–2031
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
              KREADIKA dirancang sebagai seminar tahunan dengan subtema yang
              saling berkesinambungan.
            </p>
          </div>

          {/* Annual Themes List (2027-2031) */}
          <ol className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
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
            <li className="group flex flex-col rounded-2xl border border-kreadika-200/80 bg-white p-5 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-kreadika-400 hover:shadow-md hover:shadow-kreadika-800/5">
              <span className="text-xl font-bold text-kreadika-600 transition-colors duration-200 group-hover:text-kreadika-800">
                2028
              </span>
              <p className="mt-4 text-sm font-medium leading-snug text-kreadika-800">
                Pembelajaran Mendalam untuk Generasi Emas 2045
              </p>
            </li>
            <li className="group flex flex-col rounded-2xl border border-kreadika-200/80 bg-white p-5 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-kreadika-400 hover:shadow-md hover:shadow-kreadika-800/5">
              <span className="text-xl font-bold text-kreadika-600 transition-colors duration-200 group-hover:text-kreadika-800">
                2029
              </span>
              <p className="mt-4 text-sm font-medium leading-snug text-kreadika-800">
                Kepemimpinan Sekolah dan Kebijakan Pendidikan Berbasis Data
              </p>
            </li>
            <li className="group flex flex-col rounded-2xl border border-kreadika-200/80 bg-white p-5 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-kreadika-400 hover:shadow-md hover:shadow-kreadika-800/5">
              <span className="text-xl font-bold text-kreadika-600 transition-colors duration-200 group-hover:text-kreadika-800">
                2030
              </span>
              <p className="mt-4 text-sm font-medium leading-snug text-kreadika-800">
                Teknologi dan Kecerdasan Artifisial yang Bertanggung Jawab dalam
                Pendidikan
              </p>
            </li>
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
          CALL TO ACTION BANNER (MODERN ACADEMIC & CLEAN EVENT UI)
      ==================== */}
      <section id="kirim-abstrak" className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden flex flex-col gap-8 rounded-3xl border border-kreadika-700 bg-kreadika-800 p-8 sm:p-12 shadow-lg shadow-kreadika-800/10 transition-shadow duration-300 hover:shadow-xl lg:flex-row lg:items-center lg:justify-between">
            {/* Subtle Radial Glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-kreadika-600/30 blur-3xl"
            ></div>

            {/* CTA Copy */}
            <div className="relative max-w-2xl">
              <span className="inline-block rounded-full border border-kreadika-400/30 bg-white/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-kreadika-200 mb-3">
                Call for Papers KREADIKA 2027
              </span>
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Bagikan praktik baik dan hasil penelitian Anda
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-kreadika-100/90 sm:text-base">
                Kami mengundang artikel hasil penelitian, kajian konseptual, dan
                praktik baik dari sekolah atau satuan pendidikan.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="relative flex shrink-0 flex-wrap gap-3">
              <a
                href="/call-for-papers#kirim"
                onClick={(e) => handleClick(e, "/call-for-papers#kirim")}
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-kreadika-800 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-kreadika-50 hover:shadow-md active:translate-y-0 active:scale-[0.98]"
              >
                Kirim Abstrak
              </a>
              <a
                href="/call-for-papers"
                onClick={(e) => handleClick(e, "/call-for-papers")}
                className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/15 active:translate-y-0 active:scale-[0.98]"
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
