import { useEffect, useMemo, useState } from "react";
import { brand as defaultBrand, hero as defaultHero } from "../data/siteContent";
import heroSlide1 from "../../pexels-galt-couture-2159829575-36536856.jpg";
import heroSlide2 from "../../pexels-kunal-lakhotia-781256899-32988532.jpg";
import heroSlide3 from "../../pexels-skgphotography-19955775.jpg";

export default function Hero({ brand = defaultBrand, hero = defaultHero }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const whatsappUrl = `https://wa.me/${brand.whatsappNumber}?text=Hi%20Lakshmika%20Designs!%20I%20am%20interested%20in%20your%20collection.`;
  const slides = useMemo(() => {
    const cmsSlides = Array.isArray(hero.backgroundImages)
      ? hero.backgroundImages.filter(Boolean)
      : [];

    if (cmsSlides.length > 0) {
      return cmsSlides;
    }

    return [heroSlide1, heroSlide2, heroSlide3];
  }, [hero.backgroundImages]);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => window.clearInterval(intervalId);
  }, [slides.length]);

  return (
    <header className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <img
            key={slide}
            src={slide}
            alt="Elegant Jewelry and Fashion"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === activeSlide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
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

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide}
            type="button"
            onClick={() => setActiveSlide(index)}
            aria-label={`Show slide ${index + 1}`}
            className={`h-2.5 rounded-full transition-all ${
              index === activeSlide ? "w-8 bg-[#2D2926]" : "w-2.5 bg-[#2D2926]/40"
            }`}
          />
        ))}
      </div>
    </header>
  );
}
