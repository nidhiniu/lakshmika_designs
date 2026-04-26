import { useState, useEffect } from "react";
import { brand as defaultBrand } from "../data/siteContent";
import headerLogo from "../../favicon-64x64.png";

export default function Navbar({ brand = defaultBrand }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const mobileMenuLinks = [
    { label: "Collections", href: "/collections" },
    { label: "New Arrivals", href: "/new-arrivals" },
    { label: "Offers / Sale", href: "/offers" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-50 px-6 md:px-12 py-4 flex justify-between items-center transition-all duration-500 ${
          scrolled ? "bg-white shadow-sm" : "bg-white/10 backdrop-blur-sm"
        }`}
      >
        <a href="#" className="flex items-center gap-2 sm:gap-3 min-w-0">
          <img src={headerLogo} alt={`${brand.name} logo`} className="h-10 sm:h-12 w-auto object-contain" />
          <span
            className="whitespace-nowrap text-lg sm:text-xl md:text-2xl leading-none"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {`${brand.name} ${brand.tagline}`}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          <a href="/collections" className="text-sm uppercase tracking-widest hover:text-[#C5A07F] transition-colors">
            Collections
          </a>
          <a href="/new-arrivals" className="text-sm uppercase tracking-widest hover:text-[#C5A07F] transition-colors">
            New Arrivals
          </a>
          <a href="/offers" className="text-sm uppercase tracking-widest hover:text-[#C5A07F] transition-colors">
            Offers / Sale
          </a>
          <a href="/about" className="text-sm uppercase tracking-widest hover:text-[#C5A07F] transition-colors">
            About Us
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-2xl md:hidden"
            aria-label="Menu"
          >
            <span className="material-symbols-outlined text-3xl">
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-[76px] left-0 right-0 z-40 md:hidden border-t border-[#EDE3D9] bg-white/95 backdrop-blur px-6 pb-4 pt-2 shadow-sm">
          <div className="flex flex-col gap-3">
            {mobileMenuLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm uppercase tracking-widest text-left hover:text-[#C5A07F] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
