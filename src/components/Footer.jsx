import { brand as defaultBrand, footer } from "../data/siteContent";

export default function Footer({ brand = defaultBrand }) {
  const year = new Date().getFullYear();
  const whatsappUrl = `https://wa.me/${brand.whatsappNumber}`;
  const instagramUrl = `https://instagram.com/${brand.instagramHandle}`;

  return (
    <footer className="bg-white pt-20 pb-10 px-6 md:px-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        {/* Brand */}
        <div>
          <div className="flex flex-col mb-6">
            <span
              className="text-2xl leading-none"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {brand.name}
            </span>
            <span
              className="text-[10px] uppercase font-medium tracking-[0.2em]"
              style={{ color: "#C5A07F" }}
            >
              {brand.tagline}
            </span>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed">{footer.tagline}</p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest mb-6">
            Navigation
          </h4>
          <ul className="space-y-4 text-sm text-gray-600">
            {footer.navigation.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="hover:text-[#C5A07F] transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest mb-6">
            Support
          </h4>
          <ul className="space-y-4 text-sm text-gray-600">
            {footer.support.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="hover:text-[#C5A07F] transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest mb-6">
            Newsletter
          </h4>
          <p className="text-sm text-gray-500 mb-4">
            Join our inner circle for exclusive previews.
          </p>
          <div
            className="flex border-b pb-2"
            style={{ borderColor: "#2D2926" }}
          >
            <input
              type="email"
              placeholder="Email Address"
              className="bg-transparent border-none text-sm w-full focus:ring-0 focus:outline-none placeholder:text-gray-400"
            />
            <button
              className="material-symbols-outlined text-lg hover:text-[#C5A07F] transition-colors"
              aria-label="Subscribe"
            >
              arrow_forward
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-gray-400 uppercase tracking-widest">
        <p>© {year} Lakshmika Designs. All Rights Reserved.</p>
        <div className="flex gap-8">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#C5A07F] transition-colors"
          >
            Instagram
          </a>
          <a href="#" className="hover:text-[#C5A07F] transition-colors">
            Pinterest
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#C5A07F] transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
