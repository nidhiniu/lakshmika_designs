import { useEffect, useMemo, useState } from "react";
import PageLayout from "./components/PageLayout";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Collections from "./components/Collections";
import Story from "./components/Story";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CollectionsPage from "./pages/CollectionsPage";
import NewArrivalsPage from "./pages/NewArrivalsPage";
import OffersPage from "./pages/OffersPage";
import AboutPage from "./pages/AboutPage";
import { initialProducts } from "./data/siteContent";
import { loadProducts } from "./lib/productStore";
import { defaultSettings, loadSiteSettings } from "./lib/siteSettingsStore";

function getLocationState() {
  return {
    path: window.location.pathname || "/",
    search: window.location.search || "",
  };
}

export default function App() {
  const [locationState, setLocationState] = useState(getLocationState);
  const [products, setProducts] = useState(initialProducts);
  const [settings, setSettings] = useState(defaultSettings);
  const path = locationState.path;
  const selectedCategory = new URLSearchParams(locationState.search).get("category");
  const validCategories = ["Jewellery", "Sarees", "Dresses"];
  const activeCategory = validCategories.includes(selectedCategory) ? selectedCategory : null;

  useEffect(() => {
    if (window.location.pathname === "/admin/" || window.location.pathname === "/admin") {
      window.location.replace("/admin/index.html");
    }
  }, []);

  useEffect(() => {
    const onPopState = () => setLocationState(getLocationState());
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    let mounted = true;
    Promise.all([loadProducts(), loadSiteSettings()]).then(([loadedProducts, loadedSettings]) => {
      if (mounted) {
        setProducts(loadedProducts);
        setSettings(loadedSettings);
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

  const navigate = (nextPath) => {
    window.history.pushState({}, "", nextPath);
    setLocationState(getLocationState());
  };

  const homePage = (
    <div className="antialiased" style={{ backgroundColor: "#F9F5F0", color: "#2D2926" }}>
      <Navbar brand={settings.brand} />
      <Hero brand={settings.brand} hero={settings.hero} />
      <Collections />
      <Story story={settings.story} />
      <Testimonials />
      <Contact brand={settings.brand} />
      <Footer brand={settings.brand} />
    </div>
  );

  const page = useMemo(() => {
    if (path === "/") {
      return homePage;
    }
    if (path === "/new-arrivals") {
      return <NewArrivalsPage products={products} whatsappNumber={settings.brand.whatsappNumber} />;
    }
    if (path === "/offers") {
      return <OffersPage products={products} whatsappNumber={settings.brand.whatsappNumber} />;
    }
    if (path === "/about") {
      return <AboutPage story={settings.story} about={settings.about} />;
    }
    return (
      <CollectionsPage
        products={products}
        selectedCategory={activeCategory}
        whatsappNumber={settings.brand.whatsappNumber}
      />
    );
  }, [path, products, homePage, activeCategory, settings]);

  if (path === "/") {
    return page;
  }

  return (
    <div className="antialiased">
      <PageLayout activePath={path} onNavigate={navigate} brand={settings.brand}>
        {page}
      </PageLayout>
    </div>
  );
}
