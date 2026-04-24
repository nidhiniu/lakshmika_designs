import { initialProducts } from "../data/siteContent";

function normalizeProduct(product) {
  return {
    id: product?.id || `p-${Date.now()}`,
    name: product?.name || "",
    category: product?.category || "Jewellery",
    image: product?.image || "",
    priceLabel: product?.priceLabel || "",
    isNewArrival: Boolean(product?.isNewArrival),
    isOnSale: Boolean(product?.isOnSale),
  };
}

export async function loadProducts() {
  try {
    const response = await fetch("/data/products.json", { cache: "no-store" });
    if (!response.ok) {
      return initialProducts.map(normalizeProduct);
    }

    const parsed = await response.json();
    const list = Array.isArray(parsed) ? parsed : parsed?.products;
    if (!Array.isArray(list)) {
      return initialProducts.map(normalizeProduct);
    }

    return list.map(normalizeProduct);
  } catch (error) {
    return initialProducts.map(normalizeProduct);
  }
}
