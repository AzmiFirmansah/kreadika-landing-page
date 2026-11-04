function Panitia() {
  return (
    <main id="panitia-kreadika">
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
              Panitia KREADIKA
            </h1>

            {/* Description */}
            <p className="mt-4 text-base leading-relaxed text-blue-100 sm:text-lg">
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
              <span className="inline-block rounded-md bg-kreadika-ice px-3 py-1 text-xs font-semibold uppercase tracking-wider text-kreadika-royal">
                Tata Kelola &amp; Integritas
              </span>
              <h2 className="mt-4 text-2xl font-bold leading-snug text-kreadika-navy sm:text-3xl">
                Kolaborasi Akademisi, Praktisi, dan Penyelenggara
              </h2>
            </div>

            {/* Content Body */}
            <div className="space-y-4 text-base leading-relaxed text-slate-600 lg:col-span-7">
              <p>
                Penyelenggaraan{" "}
                <strong className="font-semibold text-kreadika-navy">
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
              <div className="rounded-2xl border border-blue-100 bg-kreadika-ice p-5 text-sm text-kreadika-navy">
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
      <section className="border-y border-blue-100 bg-kreadika-ice py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block rounded-md bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-kreadika-royal">
              Narasumber Utama
            </span>
            <h2 className="mt-3 text-2xl font-bold text-kreadika-navy sm:text-3xl">
              Pembicara Kunci
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
              Tiga perspektif fundamental dalam menjawab tantangan perubahan
              lanskap pendidikan nasional.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Keynote 1: Kebijakan */}
            <div className="flex flex-col justify-between rounded-2xl border border-blue-100 bg-white p-6 sm:p-7">
              <div>
                {/* Speaker Photo Placeholder */}
                <div className="flex h-48 w-full items-center justify-center rounded-xl border-2 border-dashed border-blue-100 bg-kreadika-ice/50">
                  <div className="flex flex-col items-center gap-2 text-slate-400">
                    <svg
                      className="h-10 w-10 text-slate-300"
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
                    <span className="font-mono text-xs font-medium text-slate-400">
                      [Foto Pembicara]
                    </span>
                  </div>
                </div>

                {/* Speaker Info */}
                <div className="mt-5">
                  <span className="inline-block rounded-md bg-sky-50 px-2.5 py-1 text-xs font-semibold text-kreadika-royal border border-blue-100">
                    Perspektif Kebijakan
                  </span>
                  <h3 className="mt-3 text-xl font-bold text-kreadika-navy">
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
            <div className="flex flex-col justify-between rounded-2xl border border-blue-100 bg-white p-6 sm:p-7">
              <div>
                {/* Speaker Photo Placeholder */}
                <div className="flex h-48 w-full items-center justify-center rounded-xl border-2 border-dashed border-blue-100 bg-kreadika-ice/50">
                  <div className="flex flex-col items-center gap-2 text-slate-400">
                    <svg
                      className="h-10 w-10 text-slate-300"
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
                    <span className="font-mono text-xs font-medium text-slate-400">
                      [Foto Pembicara]
                    </span>
                  </div>
                </div>

                {/* Speaker Info */}
                <div className="mt-5">
                  <span className="inline-block rounded-md bg-sky-50 px-2.5 py-1 text-xs font-semibold text-kreadika-royal border border-blue-100">
                    Perspektif Akademik
                  </span>
                  <h3 className="mt-3 text-xl font-bold text-kreadika-navy">
                    [Nama pembicara]
                  </h3>
                  <p className="mt-1 text-sm font-medium text-slate-600">
                    Akademisi pendidikan atau teknologi pendidikan
                  </p>
                </div>
              </div>
            </div>

            {/* Keynote 3: Praktisi */}
            <div className="flex flex-col justify-between rounded-2xl border border-blue-100 bg-white p-6 sm:p-7">
              <div>
                {/* Speaker Photo Placeholder */}
                <div className="flex h-48 w-full items-center justify-center rounded-xl border-2 border-dashed border-blue-100 bg-kreadika-ice/50">
                  <div className="flex flex-col items-center gap-2 text-slate-400">
                    <svg
                      className="h-10 w-10 text-slate-300"
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
                    <span className="font-mono text-xs font-medium text-slate-400">
                      [Foto Pembicara]
                    </span>
                  </div>
                </div>

                {/* Speaker Info */}
                <div className="mt-5">
                  <span className="inline-block rounded-md bg-sky-50 px-2.5 py-1 text-xs font-semibold text-kreadika-royal border border-blue-100">
                    Perspektif Praktik Baik
                  </span>
                  <h3 className="mt-3 text-xl font-bold text-kreadika-navy">
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
            <span className="inline-block rounded-md bg-kreadika-ice px-3 py-1 text-xs font-semibold uppercase tracking-wider text-kreadika-royal">
              Dewan Ilmiah &amp; Reviewer
            </span>
            <h2 className="mt-3 text-2xl font-bold text-kreadika-navy sm:text-3xl">
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
            <div className="flex flex-col rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-kreadika-ice text-kreadika-royal">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.75"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-bold text-kreadika-navy">
                [Nama]
              </h3>
              <p className="mt-1 text-sm font-medium text-slate-500">
                [Afiliasi]
              </p>
              <div className="mt-4 border-t border-slate-100 pt-3">
                <span className="inline-block rounded bg-sky-50 px-2 py-0.5 text-xs font-semibold text-kreadika-royal">
                  Dosen / Peneliti
                </span>
              </div>
            </div>

            {/* Member 2 */}
            <div className="flex flex-col rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-kreadika-ice text-kreadika-royal">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.75"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-bold text-kreadika-navy">
                [Nama]
              </h3>
              <p className="mt-1 text-sm font-medium text-slate-500">
                [Afiliasi]
              </p>
              <div className="mt-4 border-t border-slate-100 pt-3">
                <span className="inline-block rounded bg-sky-50 px-2 py-0.5 text-xs font-semibold text-kreadika-royal">
                  Dosen / Peneliti
                </span>
              </div>
            </div>

            {/* Member 3 */}
            <div className="flex flex-col rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-kreadika-ice text-kreadika-royal">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.75"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-bold text-kreadika-navy">
                [Nama]
              </h3>
              <p className="mt-1 text-sm font-medium text-slate-500">
                [Afiliasi]
              </p>
              <div className="mt-4 border-t border-slate-100 pt-3">
                <span className="inline-block rounded bg-sky-50 px-2 py-0.5 text-xs font-semibold text-kreadika-royal">
                  Dosen / Peneliti
                </span>
              </div>
            </div>

            {/* Member 4 */}
            <div className="flex flex-col rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-kreadika-ice text-kreadika-royal">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.75"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-bold text-kreadika-navy">
                [Nama]
              </h3>
              <p className="mt-1 text-sm font-medium text-slate-500">
                [Afiliasi]
              </p>
              <div className="mt-4 border-t border-slate-100 pt-3">
                <span className="inline-block rounded bg-sky-50 px-2 py-0.5 text-xs font-semibold text-kreadika-royal">
                  Praktisi / Pengawas / Kepala Sekolah
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 
          SUSUNAN PANITIA (ORGANIZING COMMITTEE)
      ==================== */}
      <section className="border-t border-blue-100 bg-kreadika-ice py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block rounded-md bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-kreadika-royal">
              Struktur Organisasi
            </span>
            <h2 className="mt-3 text-2xl font-bold text-kreadika-navy sm:text-3xl">
              Susunan Panitia
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
              Panitia pelaksana seminar nasional KREADIKA 2027.
            </p>
          </div>

          {/* Committee Table (Desktop) */}
          <div className="mt-10 hidden overflow-hidden rounded-2xl border border-blue-100 bg-white md:block">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="border-b border-blue-100 bg-slate-50 text-xs font-bold uppercase tracking-wider text-kreadika-navy">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    Jabatan
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Nama
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-blue-50">
                {/* Row 1: Pengarah */}
                <tr className="hover:bg-blue-50/40">
                  <td className="px-6 py-4 font-bold text-kreadika-navy">
                    Pengarah
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-700">
                    Direktur Scientific Advantage Publishing
                  </td>
                </tr>

                {/* Row 2: Penanggung jawab */}
                <tr className="hover:bg-blue-50/40">
                  <td className="px-6 py-4 font-bold text-kreadika-navy">
                    Penanggung jawab
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-700">
                    [nama]
                  </td>
                </tr>

                {/* Row 3: Ketua */}
                <tr className="hover:bg-blue-50/40">
                  <td className="px-6 py-4 font-bold text-kreadika-navy">
                    Ketua
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-700">
                    [nama]
                  </td>
                </tr>

                {/* Row 4: Sekretaris */}
                <tr className="hover:bg-blue-50/40">
                  <td className="px-6 py-4 font-bold text-kreadika-navy">
                    Sekretaris
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-700">
                    [nama]
                  </td>
                </tr>

                {/* Row 5: Bendahara */}
                <tr className="hover:bg-blue-50/40">
                  <td className="px-6 py-4 font-bold text-kreadika-navy">
                    Bendahara
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-700">
                    [nama]
                  </td>
                </tr>

                {/* Row 6: Bidang Acara dan Pembicara */}
                <tr className="hover:bg-blue-50/40">
                  <td className="px-6 py-4 font-bold text-kreadika-navy">
                    Bidang Acara dan Pembicara
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-700">
                    [nama]
                  </td>
                </tr>

                {/* Row 7: Bidang Makalah dan Prosiding */}
                <tr className="hover:bg-blue-50/40">
                  <td className="px-6 py-4 font-bold text-kreadika-navy">
                    Bidang Makalah dan Prosiding
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-700">
                    [nama]
                  </td>
                </tr>

                {/* Row 8: Bidang Publikasi, Humas, dan Media Sosial */}
                <tr className="hover:bg-blue-50/40">
                  <td className="px-6 py-4 font-bold text-kreadika-navy">
                    Bidang Publikasi, Humas, dan Media Sosial
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-700">
                    [nama]
                  </td>
                </tr>

                {/* Row 9: Bidang Teknologi Informasi */}
                <tr className="hover:bg-blue-50/40">
                  <td className="px-6 py-4 font-bold text-kreadika-navy">
                    Bidang Teknologi Informasi
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-700">
                    [nama]
                  </td>
                </tr>

                {/* Row 10: Bidang Sponsor dan Kemitraan */}
                <tr className="hover:bg-blue-50/40">
                  <td className="px-6 py-4 font-bold text-kreadika-navy">
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
            <div className="rounded-2xl border border-blue-100 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-sky-600">
                Pengarah
              </p>
              <p className="mt-1 text-base font-bold text-kreadika-navy">
                Direktur Scientific Advantage Publishing
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl border border-blue-100 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-sky-600">
                Penanggung jawab
              </p>
              <p className="mt-1 text-base font-bold text-kreadika-navy">
                [nama]
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl border border-blue-100 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-sky-600">
                Ketua
              </p>
              <p className="mt-1 text-base font-bold text-kreadika-navy">
                [nama]
              </p>
            </div>

            {/* Card 4 */}
            <div className="rounded-2xl border border-blue-100 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-sky-600">
                Sekretaris
              </p>
              <p className="mt-1 text-base font-bold text-kreadika-navy">
                [nama]
              </p>
            </div>

            {/* Card 5 */}
            <div className="rounded-2xl border border-blue-100 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-sky-600">
                Bendahara
              </p>
              <p className="mt-1 text-base font-bold text-kreadika-navy">
                [nama]
              </p>
            </div>

            {/* Card 6 */}
            <div className="rounded-2xl border border-blue-100 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-sky-600">
                Bidang Acara dan Pembicara
              </p>
              <p className="mt-1 text-base font-bold text-kreadika-navy">
                [nama]
              </p>
            </div>

            {/* Card 7 */}
            <div className="rounded-2xl border border-blue-100 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-sky-600">
                Bidang Makalah dan Prosiding
              </p>
              <p className="mt-1 text-base font-bold text-kreadika-navy">
                [nama]
              </p>
            </div>

            {/* Card 8 */}
            <div className="rounded-2xl border border-blue-100 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-sky-600">
                Bidang Publikasi, Humas, dan Media Sosial
              </p>
              <p className="mt-1 text-base font-bold text-kreadika-navy">
                [nama]
              </p>
            </div>

            {/* Card 9 */}
            <div className="rounded-2xl border border-blue-100 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-sky-600">
                Bidang Teknologi Informasi
              </p>
              <p className="mt-1 text-base font-bold text-kreadika-navy">
                [nama]
              </p>
            </div>

            {/* Card 10 */}
            <div className="rounded-2xl border border-blue-100 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-sky-600">
                Bidang Sponsor dan Kemitraan
              </p>
              <p className="mt-1 text-base font-bold text-kreadika-navy">
                [nama]
              </p>
            </div>
          </div>

          {/* Partnership CTA Banner */}
          <div className="mt-10 rounded-2xl bg-kreadika-navy px-6 py-10 sm:px-10 sm:py-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl">
                <h3 className="text-2xl font-bold text-white">
                  Ingin berkolaborasi dengan panitia?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-blue-100">
                  Perguruan tinggi, organisasi profesi, dan sponsor dapat
                  menghubungi panitia untuk partisipasi dan kemitraan.
                </p>
              </div>
              <div className="shrink-0">
                <a
                  href="mailto:sekretariat@kreadika.id"
                  className="inline-flex items-center justify-center rounded-lg bg-kreadika-royal px-6 py-3.5 text-sm font-semibold text-white hover:bg-kreadika-royal-dark"
                >
                  Hubungi Sekretariat{" "}
                  <span aria-hidden="true" className="ml-1.5">
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

export default Panitia;
