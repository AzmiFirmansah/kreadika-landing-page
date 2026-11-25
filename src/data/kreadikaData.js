export const SITE_INFO = {
  name: "KREADIKA",
  year: "2027",
  fullName: "KREADIKA 2027: Seminar Nasional Pendidikan Kreatif dan Adaptif",
  tagline: "Mendidik Manusia di Tengah Perubahan",
  organizer: "Scientific Advantage Publishing",
  email: "sekretariat@kreadika.id",
  whatsapp: "[nomor WhatsApp]",
  addressLine1: "Citraland Beaumont B7/21, Sepang, Kota Serang",
  addressLine2: "Banten, Indonesia",
  siteUrl: "https://kreadika.vercel.app",
};

export const RUANG_LINGKUP = [
  {
    no: "01",
    title: "Inovasi Pembelajaran",
    desc: "Inovasi pembelajaran, kurikulum, dan pembelajaran mendalam.",
  },
  {
    no: "02",
    title: "Teknologi Pendidikan",
    desc: "Teknologi pendidikan, transformasi digital, dan kecerdasan artifisial.",
  },
  {
    no: "03",
    title: "Asesmen Pembelajaran",
    desc: "Asesmen dan evaluasi pembelajaran di kelas maupun satuan pendidikan.",
  },
  {
    no: "04",
    title: "Kepemimpinan Sekolah",
    desc: "Kepemimpinan, manajemen, dan supervisi pendidikan.",
  },
  {
    no: "05",
    title: "Profesi Pendidik",
    desc: "Pengembangan profesional dan kesejahteraan pendidik.",
  },
  {
    no: "06",
    title: "Pendidikan Inklusif",
    desc: "Pendidikan inklusif, karakter, dan pemerataan mutu.",
  },
  {
    no: "07",
    title: "Kebijakan Pendidikan",
    desc: "Kebijakan dan tata kelola pendidikan di tingkat daerah hingga nasional.",
  },
];

export const TANGGAL_PENTING = [
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

export const PETA_JALAN = [
  {
    year: "2027",
    status: "Edisi berjalan",
    theme: "Pendidikan Kreatif dan Adaptif di Era Digital",
    note: "Fokus edisi perdana pada penguatan peran manusia, pembelajaran mendalam, dan pemanfaatan teknologi digital secara bertanggung jawab.",
  },
  {
    year: "2028",
    status: "Agenda tahunan",
    theme: "Pembelajaran Mendalam untuk Generasi Emas 2045",
    note: "Pendalaman praktik kelas yang menumbuhkan nalar kritis, kreativitas, dan kemandirian belajar menuju 2045.",
  },
  {
    year: "2029",
    status: "Agenda tahunan",
    theme: "Kepemimpinan Sekolah dan Kebijakan Pendidikan Berbasis Data",
    note: "Penguatan tata kelola satuan pendidikan dan pengambilan keputusan berbasis bukti lapangan.",
  },
  {
    year: "2030",
    status: "Agenda tahunan",
    theme: "Teknologi dan Kecerdasan Artifisial yang Bertanggung Jawab dalam Pendidikan",
    note: "Etika, literasi, dan batas penggunaan kecerdasan artifisial agar tetap berpihak pada peserta didik dan pendidik.",
  },
  {
    year: "2031",
    status: "Agenda tahunan",
    theme: "Pendidikan Inklusif dan Pemerataan Mutu hingga Daerah 3T",
    note: "Memperluas akses, dukungan pendidik, dan standar mutu pembelajaran bagi seluruh wilayah Indonesia.",
  },
];

export const ROUTES_SEO = {
  "/": {
    title: "Beranda | KREADIKA 2027: Seminar Nasional Pendidikan Kreatif dan Adaptif",
    description:
      "KREADIKA 2027 adalah Seminar Nasional Pendidikan Kreatif dan Adaptif di Era Digital. Forum nasional bagi pendidik, peneliti, dan praktisi pendidikan Indonesia.",
    path: "/",
    breadcrumb: "Beranda",
  },
  "/tentang": {
    title: "Tentang KREADIKA | Seminar Nasional Pendidikan Kreatif dan Adaptif",
    description:
      "Profil, visi, makna nama, target peserta, dan peta jalan 5 tahun Seminar Nasional Pendidikan Kreatif dan Adaptif (KREADIKA) 2027.",
    path: "/tentang",
    breadcrumb: "Tentang KREADIKA",
  },
  "/panitia": {
    title: "Panitia & Pembicara | KREADIKA 2027",
    description:
      "Susunan panitia pelaksana, Komite Ilmiah penelaah naskah, dan jajaran pembicara kunci KREADIKA 2027.",
    path: "/panitia",
    breadcrumb: "Panitia",
  },
  "/mitra": {
    title: "Mitra & Kerja Sama | KREADIKA 2027",
    description:
      "Daftar co-host perguruan tinggi, organisasi profesi, jurnal mitra, dan skema kerja sama KREADIKA 2027.",
    path: "/mitra",
    breadcrumb: "Mitra & Kerja Sama",
  },
  "/call-for-papers": {
    title: "Call for Papers | KREADIKA 2027: Seminar Nasional Pendidikan",
    description:
      "Pengiriman makalah KREADIKA 2027. Tujuh ruang lingkup topik, tanggal penting, ketentuan penulisan, dan publikasi prosiding ber-ISSN dan ber-DOI.",
    path: "/call-for-papers",
    breadcrumb: "Call for Papers",
  },
  "/pendaftaran": {
    title: "Pendaftaran & Biaya Kepesertaan | KREADIKA 2027",
    description:
      "Informasi alur registrasi dan biaya kepesertaan pemakalah serta peserta non-pemakalah Seminar Nasional KREADIKA 2027.",
    path: "/pendaftaran",
    breadcrumb: "Pendaftaran",
  },
  "/pendaftaran-online": {
    title: "Pendaftaran Online | KREADIKA 2027",
    description:
      "Status pembukaan formulir pendaftaran online dan berkas yang perlu disiapkan untuk Seminar Nasional KREADIKA 2027.",
    path: "/pendaftaran-online",
    breadcrumb: "Pendaftaran Online",
  },
  "/prosiding": {
    title: "Prosiding & Publikasi Ilmiah | KREADIKA 2027",
    description:
      "Informasi prosiding ber-ISSN dan ber-DOI akses terbuka (open access) serta rekomendasi jurnal mitra KREADIKA 2027.",
    path: "/prosiding",
    breadcrumb: "Prosiding",
  },
  "/kontak": {
    title: "Kontak & Sekretariat | KREADIKA 2027",
    description:
      "Alamat sekretariat, surel resmi, WhatsApp, dokumen unduhan, dan kanal media sosial resmi KREADIKA 2027.",
    path: "/kontak",
    breadcrumb: "Kontak",
  },
};
