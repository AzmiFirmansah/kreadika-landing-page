import { useState, useEffect, lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { ROUTES_SEO, SITE_INFO } from "./data/kreadikaData";

const Tentang = lazy(() => import("./pages/Tentang"));
const Panitia = lazy(() => import("./pages/Panitia"));
const Mitra = lazy(() => import("./pages/Mitra"));
const CallForPapers = lazy(() => import("./pages/CallForPapers"));
const Pendaftaran = lazy(() => import("./pages/Pendaftaran"));
const PendaftaranOnline = lazy(() => import("./pages/PendaftaranOnline"));
const Prosiding = lazy(() => import("./pages/Prosiding"));
const Kontak = lazy(() => import("./pages/Kontak"));

function resolveRouteSeo(currentPath) {
  const cleanPath = currentPath.split("#")[0] || "/";
  if (cleanPath.startsWith("/pendaftaran-online")) {
    return ROUTES_SEO["/pendaftaran-online"];
  }
  const matchedKey = Object.keys(ROUTES_SEO).find(
    (key) => key !== "/" && cleanPath.startsWith(key)
  );
  return ROUTES_SEO[matchedKey || "/"];
}

function App() {
  const [currentPath, setCurrentPath] = useState(
    window.location.pathname + window.location.hash
  );

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname + window.location.hash);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Sync document title, meta tags, canonical URL, and BreadcrumbList JSON-LD per route
  useEffect(() => {
    const seo = resolveRouteSeo(currentPath);
    const canonicalUrl = `${SITE_INFO.siteUrl}${
      seo.path === "/" ? "/" : seo.path
    }`;

    document.title = seo.title;

    const setMeta = (selector, attr, value, createAttrs) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        Object.entries(createAttrs).forEach(([k, v]) => el.setAttribute(k, v));
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]', "content", seo.description, {
      name: "description",
    });
    setMeta('meta[property="og:title"]', "content", seo.title, {
      property: "og:title",
    });
    setMeta('meta[property="og:description"]', "content", seo.description, {
      property: "og:description",
    });
    setMeta('meta[property="og:url"]', "content", canonicalUrl, {
      property: "og:url",
    });
    setMeta('meta[name="twitter:title"]', "content", seo.title, {
      name: "twitter:title",
    });
    setMeta('meta[name="twitter:description"]', "content", seo.description, {
      name: "twitter:description",
    });

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    const breadcrumbItems = [
      {
        "@type": "ListItem",
        position: 1,
        name: "Beranda",
        item: `${SITE_INFO.siteUrl}/`,
      },
    ];
    if (seo.path !== "/") {
      breadcrumbItems.push({
        "@type": "ListItem",
        position: 2,
        name: seo.breadcrumb,
        item: canonicalUrl,
      });
    }

    let ldScript = document.getElementById("route-breadcrumb-jsonld");
    if (!ldScript) {
      ldScript = document.createElement("script");
      ldScript.id = "route-breadcrumb-jsonld";
      ldScript.type = "application/ld+json";
      document.head.appendChild(ldScript);
    }
    ldScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbItems,
    });
  }, [currentPath]);

  useEffect(() => {
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

  const navigate = (path) => {
    window.history.pushState({}, "", path);
    setCurrentPath(path);

    const hashIndex = path.indexOf("#");
    if (hashIndex !== -1) {
      const hashId = path.substring(hashIndex + 1);
      setTimeout(() => {
        const el = document.getElementById(hashId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 60);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const activeRouteKey = currentPath.split("#")[0] || "/";

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
    <div className="bg-white text-kreadika-950 antialiased font-editorial selection:bg-kreadika-100 selection:text-kreadika-950">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-kreadika-950 focus:px-4 focus:py-2.5 focus:text-sm focus:font-bold focus:text-white"
      >
        Lewati ke konten utama
      </a>

      <Navbar currentPath={currentPath} onNavigate={navigate} />

      <div id="main-content" key={activeRouteKey} className="animate-page-enter">
        <Suspense
          fallback={
            <div
              role="status"
              aria-live="polite"
              className="flex min-h-[50vh] items-center justify-center bg-white text-sm font-semibold text-slate-700"
            >
              Memuat halaman...
            </div>
          }
        >
          {renderMainContent()}
        </Suspense>
      </div>

      <Footer onNavigate={navigate} />
    </div>
  );
}

export default App;
