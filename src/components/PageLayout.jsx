import { useState } from "react";
import { brand as defaultBrand, sitePages } from "../data/siteContent";
import headerLogo from "../../favicon-64x64.png";

function NavLink({ item, activePath, onNavigate }) {
  const isActive = activePath === item.path;

  return (
    <button
      type="button"
      onClick={() => onNavigate(item.path)}
      className={`text-sm uppercase tracking-widest transition-colors ${
        isActive ? "text-[#C5A07F]" : "text-[#2D2926] hover:text-[#C5A07F]"
      }`}
    >
      {item.label}
    </button>
  );
}

export default function PageLayout({ activePath, onNavigate, children, brand = defaultBrand }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigate = (path) => {
    onNavigate(path);
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F9F5F0", color: "#2D2926" }}>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-[#EDE3D9]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex flex-wrap items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => handleNavigate("/collections")}
            className="text-left flex items-center gap-2 sm:gap-3 min-w-0"
          >
            <img src={headerLogo} alt={`${brand.name} logo`} className="h-10 sm:h-12 w-auto object-contain" />
            <span
              className="whitespace-nowrap text-lg sm:text-xl md:text-2xl leading-none"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {`${brand.name} ${brand.tagline}`}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-3xl">
              {menuOpen ? "close" : "menu"}
            </span>
          </button>

          <nav className="hidden md:flex flex-wrap items-center gap-4 md:gap-6">
            <button
              type="button"
              onClick={() => handleNavigate("/")}
              className={`text-sm uppercase tracking-widest transition-colors ${
                activePath === "/" ? "text-[#C5A07F]" : "text-[#2D2926] hover:text-[#C5A07F]"
              }`}
            >
              Home
            </button>
            {sitePages.map((item) => (
              <NavLink key={item.path} item={item} activePath={activePath} onNavigate={handleNavigate} />
            ))}
          </nav>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-[#EDE3D9] px-6 pb-4 flex flex-col gap-3">
            <button
              type="button"
              onClick={() => handleNavigate("/")}
              className={`text-sm uppercase tracking-widest text-left transition-colors ${
                activePath === "/" ? "text-[#C5A07F]" : "text-[#2D2926] hover:text-[#C5A07F]"
              }`}
            >
              Home
            </button>
            {sitePages.map((item) => (
              <button
                key={item.path}
                type="button"
                onClick={() => handleNavigate(item.path)}
                className={`text-sm uppercase tracking-widest text-left transition-colors ${
                  activePath === item.path ? "text-[#C5A07F]" : "text-[#2D2926] hover:text-[#C5A07F]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>

      <main>{children}</main>
    </div>
  );
}
