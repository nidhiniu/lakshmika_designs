import { useMemo } from "react";

const preferredCategories = ["Jewellery", "Sarees", "Dresses"];

function canRenderImage(url) {
  if (!url || typeof url !== "string") {
    return false;
  }
  const lower = url.toLowerCase();
  return lower.startsWith("http") && !lower.includes("photos.google.com");
}

export default function Collections({ products = [] }) {
  const allCollectionsUrl = "/collections";
  const displayItems = useMemo(() => {
    const categoryCards = preferredCategories
      .map((category) => {
        const match = products.find(
          (product) => product.category === category && canRenderImage(product.image)
        );
        if (!match) {
          return null;
        }
        return {
          key: `${category}-${match.id}`,
          category,
          image: match.image,
          title: match.name,
          subtitle: category,
          offset: category === "Sarees",
        };
      })
      .filter(Boolean);

    const usedIds = new Set(categoryCards.map((item) => item.key.split("-").slice(1).join("-")));
    const additionalCards = products
      .filter((product) => canRenderImage(product.image) && !usedIds.has(product.id))
      .slice(0, Math.max(0, 3 - categoryCards.length))
      .map((product) => ({
        key: product.id,
        category: product.category,
        image: product.image,
        title: product.name,
        subtitle: product.category,
        offset: false,
      }));

    return [...categoryCards, ...additionalCards].slice(0, 3);
  }, [products]);

  return (
    <section id="collections" className="py-24 px-6 md:px-12 bg-white">
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
            className="text-4xl md:text-5xl mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Curated Selections
          </h2>
          <div className="w-12 h-px" style={{ backgroundColor: "#C5A07F" }} />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayItems.map((item) => (
            <a
              key={item.key}
              href={`${allCollectionsUrl}?category=${encodeURIComponent(item.category)}`}
              className={`group cursor-pointer block ${item.offset ? "md:mt-12" : ""}`}
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* hover overlay */}
                <div className="absolute inset-0 bg-[#2D2926]/0 group-hover:bg-[#2D2926]/20 transition-all duration-500 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white text-[#2D2926] px-6 py-3 text-xs uppercase tracking-widest font-medium">
                    Order Now
                  </span>
                </div>
              </div>
              <h3
                className="text-2xl"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                }}
              >
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 uppercase tracking-widest mt-1">
                {item.subtitle}
              </p>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href={allCollectionsUrl}
            className="inline-block border border-[#2D2926] px-12 py-4 text-sm uppercase tracking-widest hover:bg-[#2D2926] hover:text-white transition-all duration-300"
          >
            View All & Order
          </a>
        </div>
      </div>
    </section>
  );
}
