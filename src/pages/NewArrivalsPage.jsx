import ProductGrid from "../components/ProductGrid";
import { brand as defaultBrand } from "../data/siteContent";

export default function NewArrivalsPage({ products, whatsappNumber = defaultBrand.whatsappNumber }) {
  const newProducts = products.filter((product) => product.isNewArrival);

  return (
    <ProductGrid
      title="New Arrivals"
      subtitle="Fresh drops curated for this season."
      products={newProducts}
      whatsappNumber={whatsappNumber}
      emptyMessage="No new arrivals marked yet. Toggle products as 'New arrival' in admin."
    />
  );
}
