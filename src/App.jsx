import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Tentang from "./pages/Tentang";

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // Sync state on browser back / forward navigation
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Update document title dynamically based on active route
  useEffect(() => {
    if (currentPath === "/tentang" || currentPath === "/tentang/") {
      document.title =
        "Tentang KREADIKA | Seminar Nasional Pendidikan Kreatif dan Adaptif";
    } else {
      document.title =
        "Beranda | KREADIKA - Seminar Nasional Pendidikan Kreatif dan Adaptif";
    }
  }, [currentPath]);

  // Programmatic client-side navigation handler
  const navigate = (path) => {
    window.history.pushState({}, "", path);
    setCurrentPath(path);
    window.scrollTo(0, 0);
  };

  // Route selector
  const renderMainContent = () => {
    if (currentPath === "/tentang" || currentPath === "/tentang/") {
      return <Tentang onNavigate={navigate} />;
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
