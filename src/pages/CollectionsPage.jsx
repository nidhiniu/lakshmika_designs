import ProductGrid from "../components/ProductGrid";
import { brand as defaultBrand } from "../data/siteContent";

export default function CollectionsPage({ products, selectedCategory, whatsappNumber = defaultBrand.whatsappNumber }) {
  const categoryOrder = ["Jewellery", "Sarees", "Dresses"];
  const filtered = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;
  const sorted = [...filtered].sort(
    (a, b) => categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category)
  );
  const subtitle = selectedCategory
    ? `${selectedCategory} collection. Contact us on WhatsApp from any product card.`
    : "Explore all curated pieces in Jewellery, Sarees, and Dresses.";
  const emptyMessage = selectedCategory
    ? `No products available in ${selectedCategory} yet.`
    : "No products available yet. Add products from admin.";

  return (
    <ProductGrid
      title="Collections"
      subtitle={subtitle}
      products={sorted}
      whatsappNumber={whatsappNumber}
      emptyMessage={emptyMessage}
    />
  );
}
