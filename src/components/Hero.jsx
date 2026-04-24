import { brand as defaultBrand, hero as defaultHero } from "../data/siteContent";

export default function Hero({ brand = defaultBrand, hero = defaultHero }) {
  const whatsappUrl = `https://wa.me/${brand.whatsappNumber}?text=Hi%20Lakshmika%20Designs!%20I%20am%20interested%20in%20your%20collection.`;

  return (
    <header className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={hero.backgroundImage}
          alt="Elegant Jewelry and Fashion"
          className="w-full h-full object-cover"
        />
        {/* gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(249,245,240,0) 0%, rgba(249,245,240,0.8) 50%, rgba(249,245,240,1) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 pb-20 max-w-4xl animate-fade-up">
        <div className="flex items-center gap-2 mb-6">
          <span className="material-symbols-outlined text-xl" style={{ color: "#C5A07F" }}>
            auto_awesome
          </span>
          <span
            className="text-xs md:text-sm font-medium uppercase tracking-[0.2em]"
            style={{ color: "#C5A07F" }}
          >
            {hero.badge}
          </span>
        </div>

        <h1
          className="text-6xl md:text-8xl leading-[0.9] mb-4"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          <span className="block">{hero.headline1}</span>
          <span
            className="block"
            style={{ fontStyle: "italic", color: "#C5A07F" }}
          >
            {hero.headline2}
          </span>
        </h1>

        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
          {hero.subtext}
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#collections"
            className="group bg-[#2D2926] text-white px-10 py-5 flex items-center justify-center gap-4 hover:bg-[#C5A07F] transition-all duration-300"
          >
            <span className="text-sm font-medium uppercase tracking-widest">
              Shop Collection
            </span>
            <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover:translate-x-1">
              arrow_forward
            </span>
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="border border-[#2D2926] px-10 py-5 flex items-center justify-center gap-2 hover:bg-[#2D2926] hover:text-white transition-all duration-300"
          >
            <span className="text-sm font-medium uppercase tracking-widest">
              WhatsApp Order
            </span>
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 right-8 z-10 flex flex-col items-center gap-2 opacity-60">
        <span className="text-[10px] uppercase tracking-widest rotate-90 origin-center">
          Scroll
        </span>
        <div className="w-px h-12 bg-[#2D2926] animate-pulse" />
      </div>
    </header>
  );
}
