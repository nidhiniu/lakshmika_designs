import { brand as defaultBrand, sitePages } from "../data/siteContent";

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
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F9F5F0", color: "#2D2926" }}>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-[#EDE3D9]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex flex-wrap items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => onNavigate("/collections")}
            className="text-left"
          >
            <p className="text-2xl leading-none" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              {brand.name}
            </p>
            <p className="text-[10px] uppercase tracking-[0.2em]" style={{ color: "#C5A07F" }}>
              {brand.tagline}
            </p>
          </button>

          <nav className="flex flex-wrap items-center gap-4 md:gap-6">
            <button
              type="button"
              onClick={() => onNavigate("/")}
              className={`text-sm uppercase tracking-widest transition-colors ${
                activePath === "/" ? "text-[#C5A07F]" : "text-[#2D2926] hover:text-[#C5A07F]"
              }`}
            >
              Home
            </button>
            {sitePages.map((item) => (
              <NavLink key={item.path} item={item} activePath={activePath} onNavigate={onNavigate} />
            ))}
            <a
              href="/admin/index.html"
              className="text-sm uppercase tracking-widest transition-colors text-[#2D2926] hover:text-[#C5A07F]"
            >
              Admin
            </a>
          </nav>
        </div>
      </header>

      <main>{children}</main>
    </div>
  );
}
