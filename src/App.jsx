import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Tentang from "./pages/Tentang";
import Panitia from "./pages/Panitia";
import Mitra from "./pages/Mitra";
import CallForPapers from "./pages/CallForPapers";
import Pendaftaran from "./pages/Pendaftaran";
import PendaftaranOnline from "./pages/PendaftaranOnline";
import Prosiding from "./pages/Prosiding";
import Kontak from "./pages/Kontak";

function App() {
  const [currentPath, setCurrentPath] = useState(
    window.location.pathname + window.location.hash
  );

  // Sync state on browser back / forward navigation
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname + window.location.hash);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Update document title and SEO meta tags dynamically based on active route
  useEffect(() => {
    let title = "Beranda | KREADIKA - Seminar Nasional Pendidikan Kreatif dan Adaptif";
    let description =
      "KREADIKA 2027 – Seminar Nasional Pendidikan Kreatif dan Adaptif di Era Digital. Menghubungkan pendidik, peneliti, dan praktisi untuk inovasi pendidikan Indonesia.";
    let path = "/";

    if (currentPath.startsWith("/tentang")) {
      title = "Tentang KREADIKA | Seminar Nasional Pendidikan Kreatif dan Adaptif";
      description =
        "Profil, visi, tema, dan latar belakang Seminar Nasional Pendidikan Kreatif dan Adaptif (KREADIKA) 2027.";
      path = "/tentang";
    } else if (currentPath.startsWith("/panitia")) {
      title = "Panitia & Pembicara | KREADIKA 2027";
      description =
        "Susunan panitia pengarah, panitia pelaksana, dan jajaran pembicara utama (keynote speaker) KREADIKA 2027.";
      path = "/panitia";
    } else if (currentPath.startsWith("/mitra")) {
      title = "Mitra & Kerja Sama | KREADIKA 2027";
      description =
        "Peluang kemitraan dan daftar institusi rekanan, co-host perguruan tinggi, serta organisasi profesi KREADIKA 2027.";
      path = "/mitra";
    } else if (currentPath.startsWith("/call-for-papers")) {
      title = "Call for Papers | KREADIKA 2027 - Seminar Nasional Pendidikan";
      description =
        "Pengiriman makalah (call for papers) KREADIKA 2027. Subtema, tanggal penting, panduan penulisan, dan publikasi prosiding ber-ISBN.";
      path = "/call-for-papers";
    } else if (currentPath.startsWith("/pendaftaran-online")) {
      title = "Pendaftaran Online | KREADIKA 2027";
      description =
        "Formulir pendaftaran online peserta dan pemakalah Seminar Nasional Pendidikan Kreatif dan Adaptif KREADIKA 2027.";
      path = "/pendaftaran-online";
    } else if (currentPath.startsWith("/pendaftaran")) {
      title = "Pendaftaran & Biaya Kepesertaan | KREADIKA 2027";
      description =
        "Informasi alur pendaftaran, biaya kepesertaan pemakalah dan non-pemakalah Seminar Nasional KREADIKA 2027.";
      path = "/pendaftaran";
    } else if (currentPath.startsWith("/prosiding")) {
      title = "Prosiding & Publikasi Ilmiah | KREADIKA 2027";
      description =
        "Informasi prosiding ber-ISBN, akses terbuka (open access), dan publikasi artikel ilmiah KREADIKA 2027.";
      path = "/prosiding";
    } else if (currentPath.startsWith("/kontak")) {
      title = "Kontak & Sekretariat | KREADIKA 2027";
      description =
        "Hubungi sekretariat KREADIKA 2027 melalui surel dan WhatsApp resmi untuk informasi pendaftaran, makalah, dan kerja sama.";
      path = "/kontak";
    }

    document.title = title;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description;

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.content = title;
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.content = description;
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.content = `https://kreadika.id${path === "/" ? "" : path}`;

    // Update Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `https://kreadika.id${path === "/" ? "" : path}`;
  }, [currentPath]);

  // Handle hash scrolling and anchor jumps on path change
  useEffect(() => {
    if (currentPath.endsWith("#kontak")) {
      setTimeout(() => {
        const el = document.getElementById("kontak");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return;
    }

    const hashIndex = currentPath.indexOf("#");
    if (hashIndex !== -1) {
      const hashId = currentPath.substring(hashIndex + 1);
      setTimeout(() => {
        const el = document.getElementById(hashId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [currentPath]);

  // Programmatic client-side navigation handler
  const navigate = (path) => {
    window.history.pushState({}, "", path);
    setCurrentPath(path);

    const isHashKontak = path.endsWith("#kontak");
    const hashIndex = path.indexOf("#");

    if (isHashKontak) {
      setTimeout(() => {
        const el = document.getElementById("kontak");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 50);
    } else if (hashIndex !== -1) {
      const hashId = path.substring(hashIndex + 1);
      setTimeout(() => {
        const el = document.getElementById(hashId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const activeRouteKey = currentPath.split("#")[0] || "/";

  // Route selector
  const renderMainContent = () => {
    if (currentPath.startsWith("/tentang")) {
      return <Tentang onNavigate={navigate} />;
    }
    if (currentPath.startsWith("/panitia")) {
      return <Panitia onNavigate={navigate} />;
    }
    if (currentPath.startsWith("/mitra")) {
      return <Mitra onNavigate={navigate} />;
    }
    if (currentPath.startsWith("/call-for-papers")) {
      return <CallForPapers onNavigate={navigate} />;
    }
    if (currentPath.startsWith("/pendaftaran-online")) {
      return <PendaftaranOnline onNavigate={navigate} />;
    }
    if (currentPath.startsWith("/pendaftaran")) {
      return <Pendaftaran onNavigate={navigate} />;
    }
    if (currentPath.startsWith("/prosiding")) {
      return <Prosiding onNavigate={navigate} />;
    }
    if (currentPath.startsWith("/kontak")) {
      return <Kontak onNavigate={navigate} />;
    }
    return <Home onNavigate={navigate} />;
  };

  return (
    <div className="bg-white text-kreadika-navy antialiased font-sans selection:bg-blue-100 selection:text-kreadika-navy">
      {/* ==================== 
          MAIN NAVBAR
      ==================== */}
      <Navbar currentPath={currentPath} onNavigate={navigate} />

      {/* ==================== 
          MAIN CONTENT (ROUTER)
      ==================== */}
      <div key={activeRouteKey} className="animate-page-enter">
        {renderMainContent()}
      </div>

      {/* ==================== 
          FOOTER
      ==================== */}
      <Footer onNavigate={navigate} />
    </div>
  );
}

export default App;
