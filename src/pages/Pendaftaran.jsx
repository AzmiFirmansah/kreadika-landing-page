function Pendaftaran({ onNavigate }) {
  const handleClick = (e, path) => {
    if (onNavigate && path.startsWith("/")) {
      e.preventDefault();
      onNavigate(path);
    }
  };
  const biayaList = [
    {
      kategori: "Guru / tenaga kependidikan",
      pemakalah: "Rp [ ]",
      peserta: "Rp [ ]",
    },
    {
      kategori: "Dosen / umum",
      pemakalah: "Rp [ ]",
      peserta: "Rp [ ]",
    },
    {
      kategori: "Mahasiswa",
      pemakalah: "Rp [ ]",
      peserta: "Rp [ ]",
    },
  ];

  const caraMendaftarList = [
    "Pilih kategori dan status (pemakalah atau peserta), lalu lakukan pembayaran.",
    "Isi formulir pendaftaran online dan unggah bukti pembayaran (JPG, PNG, atau PDF).",
    "Pemakalah mencantumkan ID submission OJS dan judul makalah.",
    "Nomor pendaftaran dikirim ke email Anda. Sekretariat memverifikasi pembayaran dan mengirim konfirmasi.",
  ];

  return (
    <main id="pendaftaran-kreadika">
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
              <span className="text-kreadika-600">Registrasi Peserta</span>
            </span>

            {/* Title */}
            <h1 className="mt-5 text-3xl font-bold tracking-tight text-kreadika-800 sm:text-4xl lg:text-5xl lg:leading-[1.15]">
              Pendaftaran
            </h1>

            {/* Description */}
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              Pendaftaran dan pembayaran dilakukan secara online melalui sistem
              registrasi Scientific Advantage Publishing.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== 
          BIAYA PENDAFTARAN
      ==================== */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full border border-kreadika-200 bg-kreadika-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-kreadika-700">
              Tarif &amp; Investasi
            </span>
            <h2 className="mt-3 text-2xl font-bold text-kreadika-800 sm:text-3xl">
              Biaya Pendaftaran
            </h2>
          </div>

          {/* Tabel Biaya */}
          <div className="mt-10 overflow-hidden rounded-2xl border border-kreadika-200/80 bg-white shadow-2xs transition-shadow duration-300 hover:shadow-md hover:shadow-kreadika-800/5">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-kreadika-200/80 bg-kreadika-800 text-white">
                    <th scope="col" className="px-6 py-4 font-semibold">
                      Kategori
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 font-semibold text-center"
                    >
                      Pemakalah
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 font-semibold text-center"
                    >
                      Peserta
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-kreadika-100 text-slate-600">
                  {biayaList.map((item, index) => (
                    <tr
                      key={index}
                      className={`transition-colors duration-200 hover:bg-kreadika-50/70 ${
                        index % 2 === 0 ? "bg-white" : "bg-kreadika-50/30"
                      }`}
                    >
                      <td className="px-6 py-5 font-medium text-kreadika-800">
                        {item.kategori}
                      </td>
                      <td className="px-6 py-5 text-center font-semibold text-kreadika-600">
                        {item.pemakalah}
                      </td>
                      <td className="px-6 py-5 text-center font-semibold text-slate-700">
                        {item.peserta}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Keterangan Pemakalah & Peserta */}
          <div className="mt-6 rounded-2xl border border-kreadika-200/80 bg-kreadika-50/60 p-5 text-sm text-kreadika-800 shadow-2xs transition-all duration-300 hover:border-kreadika-400 hover:shadow-xs sm:p-6">
            <p className="leading-relaxed">
              Pemakalah adalah penulis yang abstraknya diterima. Peserta
              mengikuti seminar tanpa membawakan makalah.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== 
          CARA MENDAFTAR
      ==================== */}
      <section className="border-y border-kreadika-200/70 bg-kreadika-50/60 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full border border-kreadika-200 bg-white px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-kreadika-700 shadow-2xs">
              Alur Registrasi
            </span>
            <h2 className="mt-3 text-2xl font-bold text-kreadika-800 sm:text-3xl">
              Cara Mendaftar
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {caraMendaftarList.map((langkah, index) => (
              <div
                key={index}
                className="group flex flex-col justify-between rounded-2xl border border-kreadika-200/80 bg-white p-6 shadow-2xs transition-all duration-300 hover:-translate-y-1.5 hover:border-kreadika-400 hover:shadow-md hover:shadow-kreadika-800/5 sm:p-7"
              >
                <div>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-kreadika-600 text-sm font-bold text-white shadow-2xs transition-all duration-300 group-hover:scale-105 group-hover:bg-kreadika-700">
                    {index + 1}
                  </span>
                  <p className="mt-5 text-sm leading-relaxed text-slate-600">
                    {langkah}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 
          DAFTAR SEKARANG (CTA BANNER)
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
                  Daftar sekarang
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-kreadika-100/90 sm:text-base">
                  Siapkan bukti pembayaran sebelum mengisi formulir.
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap items-center gap-3">
                <a
                  href="/pendaftaran-online"
                  onClick={(e) => handleClick(e, "/pendaftaran-online")}
                  className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-kreadika-800 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:bg-kreadika-50 hover:shadow-md active:translate-y-0 active:scale-[0.98]"
                >
                  Isi formulir pendaftaran
                </a>
                <a
                  href="mailto:sekretariat@kreadika.id"
                  className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/15 hover:shadow-md active:translate-y-0 active:scale-[0.98]"
                >
                  Pertanyaan: sekretariat@kreadika.id
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Pendaftaran;
