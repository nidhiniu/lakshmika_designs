function buildWhatsAppUrl(number, product) {
  const text = encodeURIComponent(
    `Hi Lakshmika Designs! I want to order this product.\nProduct ID: ${product.id}\nProduct Name: ${product.name}\nProduct Image: ${product.image}`
  );
  return `https://wa.me/${number}?text=${text}`;
}

export default function ProductGrid({
  title,
  subtitle,
  products,
  whatsappNumber,
  emptyMessage,
}) {
  return (
    <section className="py-14 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            {title}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        {products.length === 0 ? (
          <p className="text-center text-gray-500">{emptyMessage}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <article key={product.id} className="bg-white border border-[#EFE4DA]">
                <div className="aspect-[3/4] bg-[#F1E8DE] overflow-hidden">
                  {product.image ? (
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                      Add product image in admin
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs uppercase tracking-wider px-2 py-1 bg-[#F7EFE6] text-[#8B6E54]">
                      {product.category}
                    </span>
                    {product.isNewArrival && (
                      <span className="text-xs uppercase tracking-wider px-2 py-1 bg-[#E7F7EF] text-[#2C6B4A]">
                        New
                      </span>
                    )}
                    {product.isOnSale && (
                      <span className="text-xs uppercase tracking-wider px-2 py-1 bg-[#FDEDEC] text-[#A34A40]">
                        Sale
                      </span>
                    )}
                  </div>

                  <h2 className="text-2xl mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {product.name}
                  </h2>
                  <p className="text-sm text-gray-600 mb-5">{product.priceLabel || "Price on request"}</p>

                  <a
                    href={buildWhatsAppUrl(whatsappNumber, product)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center w-full bg-[#2D2926] text-white px-4 py-3 text-sm uppercase tracking-widest hover:bg-[#C5A07F] transition-colors"
                  >
                    Order on WhatsApp
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
