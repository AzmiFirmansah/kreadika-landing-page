import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Tentang from "./pages/Tentang";
import Panitia from "./pages/Panitia";
import Mitra from "./pages/Mitra";
import CallForPapers from "./pages/CallForPapers";
import Pendaftaran from "./pages/Pendaftaran";
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

  // Update document title dynamically based on active route
  useEffect(() => {
    if (currentPath.startsWith("/tentang")) {
      document.title =
        "Tentang KREADIKA | Seminar Nasional Pendidikan Kreatif dan Adaptif";
    } else if (currentPath.startsWith("/panitia")) {
      document.title = "Panitia & Pembicara | KREADIKA 2027";
    } else if (currentPath.startsWith("/mitra")) {
      document.title = "Mitra & Kerja Sama | KREADIKA 2027";
    } else if (currentPath.startsWith("/call-for-papers")) {
      document.title = "Call for Papers | KREADIKA 2027";
    } else if (currentPath.startsWith("/pendaftaran")) {
      document.title = "Pendaftaran | KREADIKA 2027";
    } else if (currentPath.startsWith("/prosiding")) {
      document.title = "Prosiding | KREADIKA 2027";
    } else if (currentPath.startsWith("/kontak")) {
      document.title = "Kontak | KREADIKA 2027";
    } else {
      document.title =
        "Beranda | KREADIKA - Seminar Nasional Pendidikan Kreatif dan Adaptif";
    }
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
      window.scrollTo(0, 0);
    }
  };

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
      {renderMainContent()}

      {/* ==================== 
          FOOTER
      ==================== */}
      <Footer onNavigate={navigate} />
    </div>
  );
}

export default App;
