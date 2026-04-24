import ProductGrid from "../components/ProductGrid";
import { brand as defaultBrand } from "../data/siteContent";

export default function OffersPage({ products, whatsappNumber = defaultBrand.whatsappNumber }) {
  const offers = products.filter((product) => product.isOnSale);

  return (
    <ProductGrid
      title="Offers / Sale"
      subtitle="Special prices on selected pieces."
      products={offers}
      whatsappNumber={whatsappNumber}
      emptyMessage="No products on offer yet. Mark products as 'On sale' in admin."
    />
  );
}
