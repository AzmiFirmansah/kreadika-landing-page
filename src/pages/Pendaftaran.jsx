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
              Pendaftaran
            </h1>

            {/* Description */}
            <p className="mt-4 text-base leading-relaxed text-blue-100 sm:text-lg">
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
            <span className="inline-block rounded-md bg-kreadika-ice px-3 py-1 text-xs font-semibold uppercase tracking-wider text-kreadika-royal">
              Tarif &amp; Investasi
            </span>
            <h2 className="mt-3 text-2xl font-bold text-kreadika-navy sm:text-3xl">
              Biaya Pendaftaran
            </h2>
          </div>

          {/* Tabel Biaya */}
          <div className="mt-10 overflow-hidden rounded-2xl border border-blue-100 bg-white">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-blue-100 bg-kreadika-navy text-white">
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
                <tbody className="divide-y divide-blue-50 text-slate-700">
                  {biayaList.map((item, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-white" : "bg-slate-50/50"}
                    >
                      <td className="px-6 py-5 font-medium text-kreadika-navy">
                        {item.kategori}
                      </td>
                      <td className="px-6 py-5 text-center font-semibold text-kreadika-royal">
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
          <div className="mt-6 rounded-2xl border border-blue-100 bg-kreadika-ice p-5 sm:p-6 text-sm text-kreadika-navy">
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
      <section className="border-y border-blue-100 bg-kreadika-ice py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block rounded-md bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-kreadika-royal">
              Alur Registrasi
            </span>
            <h2 className="mt-3 text-2xl font-bold text-kreadika-navy sm:text-3xl">
              Cara Mendaftar
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {caraMendaftarList.map((langkah, index) => (
              <div
                key={index}
                className="flex flex-col justify-between rounded-2xl border border-blue-100 bg-white p-6 sm:p-7"
              >
                <div>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-kreadika-royal text-sm font-bold text-white">
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
          <div className="rounded-2xl bg-kreadika-navy px-6 py-10 sm:px-10 sm:py-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl">
                <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Daftar sekarang
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-blue-100 sm:text-base">
                  Siapkan bukti pembayaran sebelum mengisi formulir.
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap items-center gap-3">
                <a
                  href="/pendaftaran-online"
                  onClick={(e) => handleClick(e, "/pendaftaran-online")}
                  className="inline-flex items-center justify-center rounded-lg bg-kreadika-royal px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
                >
                  Isi formulir pendaftaran
                </a>
                <a
                  href="mailto:sekretariat@kreadika.id"
                  className="inline-flex items-center justify-center rounded-lg border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold text-white"
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

