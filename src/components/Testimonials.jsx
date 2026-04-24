import { testimonials } from "../data/siteContent";

export default function Testimonials() {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#2D2926] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex flex-col items-center mb-16 text-center">
          <span
            className="material-symbols-outlined mb-2 text-xl"
            style={{ color: "#C5A07F" }}
          >
            auto_awesome
          </span>
          <h2
            className="text-4xl md:text-5xl text-white"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            What Our Clients Say
          </h2>
          <div className="w-12 h-px mt-4" style={{ backgroundColor: "#C5A07F" }} />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="border border-white/10 p-8 flex flex-col gap-4">
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <span key={i} style={{ color: "#C5A07F" }} className="text-lg">
                    ★
                  </span>
                ))}
              </div>
              <p
                className="text-white/80 leading-relaxed text-lg"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                }}
              >
                "{t.text}"
              </p>
              <div className="mt-auto pt-4 border-t border-white/10">
                <p className="font-medium text-sm">{t.name}</p>
                <p className="text-xs text-white/50 uppercase tracking-widest mt-1">
                  {t.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
