// ============================================================
//  LAKSHMIKA DESIGNS — SITE CONTENT
//  Edit THIS file to update any text or photos on the website.
//  After editing, push to GitHub → Netlify auto-deploys in ~1 min.
// ============================================================

export const brand = {
  name: "Lakshmika",
  tagline: "Designs",
  whatsappNumber: "919876543210", // Replace with actual number (country code + number, no +)
  instagramHandle: "lakshmika.designs",
  email: "hello@lakshmika.in",
};

export const sitePages = [
  { label: "Collections", path: "/collections" },
  { label: "New Arrivals", path: "/new-arrivals" },
  { label: "Offers / Sale", path: "/offers" },
  { label: "About Us", path: "/about" },
];

export const initialProducts = [
  {
    id: "p-1",
    name: "Temple Gold Choker",
    category: "Jewellery",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBrdLUna85P8ze-yk8K7ep5PaC5BiNMRrE3yC0E-LM53JgXszD-gJ7X7oRJOz_D4keJS8QYPqW4c7f2uz66ib9WtmqhT82pdWiXkqzCuu5tZIgYUciMqPgfaAdFHfAGgDc7dO28OExAsgBXflHPYDVU6N0UZ6tLsl_vNJKcUyNO2oG0MSr6FgS8YsFvSJIsS0iFBPW0nD0ERCYSvSX18yRpHJOhyvMjmmg-_dtC-3IWSQYh-FTxQraCvsIVfftIIh2RpIwwwcni5tPs",
    priceLabel: "INR 6,500",
    isNewArrival: true,
    isOnSale: false,
  },
  {
    id: "p-2",
    name: "Kanchipuram Bridal Saree",
    category: "Sarees",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDSINIcf1tOODiSdJo3K7rInObrcQka9_Po4G7UXnM3pSaQ3j-ByOALUxenBidgTnD0-hMNDPQgrt06Egk5CqXSq7lEM-BqbjmBTRo50VX3-u5uZ1vTPeoM_CryYSyN4DqI98MYbg5Ctzszs8MBCOT_CZQNMmPV5_3PYd6XROgy_Mt5DsgStzP6sQq92sXQEQHr3GTCv_wYBbo7vxy4FhzEcllVxca8qac4P05aCBxoteqOdE7neZBo6ZhVADjAXO9_unQD4noaD8Fh",
    priceLabel: "INR 18,900",
    isNewArrival: true,
    isOnSale: true,
  },
  {
    id: "p-3",
    name: "Embroidered Anarkali Set",
    category: "Dresses",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDMO4kC0s6Szi5EyAnDcPTyXIY14zDpdWxHXNxECxrmruHIRjz6lpTURB2A8EHC3leFqrt--8EShirdNiN6OycYu00H5c-aB5utxDp0tvDQBAVR-epoklUxGcNgp2Jxk-Ceq-zuYWeM85V0XKNxOMedIVVjfXdZJVeJ39U7zTifWUyOYsAECVCp7kjJaFF3ZsKG-wz5LvrPuayRe9is9aGWlOLobDGRXoZsYj0H6cLvx0mKoAyzLRdn27WnGhNBFrbX4wdyYH9t6",
    priceLabel: "INR 4,950",
    isNewArrival: false,
    isOnSale: true,
  },
];

export const hero = {
  badge: "A Boutique of Timeless Elegance",
  headline1: "Elegance",
  headline2: "Worn Beautifully",
  subtext:
    "Jewellery, fashion & style curated for you — handpicked pieces that celebrate the modern woman with quiet luxury and grace.",
  // Replace the URL below with your own image hosted on Google Drive / Cloudinary / Netlify
  backgroundImage:
    "https://lh3.googleusercontent.com/aida/ADBb0uhM9tL_l9fYu0CYXMF_wq5pD6TUYcPeRIYnSrWRo0kUmad4PGlOttEkEPp2hKzSHij4LWPudOZz-oul25E8_0uBmkKcdl4v1LCWHgdLRs4_ct4ukeVGbMaRneL9J-BJ3Sp9zEq50c7tysUtIXwg3CwZCPcvfdj-qNFN0mKPqrWAaWYlMrkapT0EG2v51o0IFu2QWM566KNkF4mdQRmyE0Bshcpgks9u7tAsQ_sHh3-R-KPZivDaYRQIQnZiP8NDX5WKxiXn3Ultsd8",
};

export const collections = [
  {
    id: 1,
    title: "Heirloom Pieces",
    subtitle: "Fine Gold & Gems",
    category: "Jewellery",
    // Replace image URL to update this photo
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBrdLUna85P8ze-yk8K7ep5PaC5BiNMRrE3yC0E-LM53JgXszD-gJ7X7oRJOz_D4keJS8QYPqW4c7f2uz66ib9WtmqhT82pdWiXkqzCuu5tZIgYUciMqPgfaAdFHfAGgDc7dO28OExAsgBXflHPYDVU6N0UZ6tLsl_vNJKcUyNO2oG0MSr6FgS8YsFvSJIsS0iFBPW0nD0ERCYSvSX18yRpHJOhyvMjmmg-_dtC-3IWSQYh-FTxQraCvsIVfftIIh2RpIwwwcni5tPs",
    alt: "Heirloom Jewelry",
    offset: false,
  },
  {
    id: 2,
    title: "Pure Silks",
    subtitle: "Traditional Weaves",
    category: "Sarees",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDSINIcf1tOODiSdJo3K7rInObrcQka9_Po4G7UXnM3pSaQ3j-ByOALUxenBidgTnD0-hMNDPQgrt06Egk5CqXSq7lEM-BqbjmBTRo50VX3-u5uZ1vTPeoM_CryYSyN4DqI98MYbg5Ctzszs8MBCOT_CZQNMmPV5_3PYd6XROgy_Mt5DsgStzP6sQq92sXQEQHr3GTCv_wYBbo7vxy4FhzEcllVxca8qac4P05aCBxoteqOdE7neZBo6ZhVADjAXO9_unQD4noaD8Fh",
    alt: "Silk Sarees",
    offset: true,
  },
  {
    id: 3,
    title: "Modern Minimal",
    subtitle: "Daily Luxury",
    category: "Dresses",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDMO4kC0s6Szi5EyAnDcPTyXIY14zDpdWxHXNxECxrmruHIRjz6lpTURB2A8EHC3leFqrt--8EShirdNiN6OycYu00H5c-aB5utxDp0tvDQBAVR-epoklUxGcNgp2Jxk-Ceq-zuYWeM85V0XKNxOMedIVVjfXdZJVeJ39U7zTifWUyOYsAECVCp7kjJaFF3ZsKG-wz5LvrPuayRe9is9aGWlOLobDGRXoZsYj0H6cLvx0mKoAyzLRdn27WnGhNBFrbX4wdyYH9t6",
    alt: "Modern Minimal",
    offset: false,
  },
];

export const story = {
  title1: "Crafted with Heart,",
  title2: "Worn with Grace",
  body: "At Lakshmika Designs, we believe every piece tells a story. We source materials from heritage clusters, supporting local artisans while ensuring every stitch and setting meets our standard of luminous excellence.",
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDgENkAqyRVXeJn8Y1_4AKuUPqntDN-fHOgmJexSdP-L8juzXxSCW5cVmKf0hRZX87r6Ib6Dz5v-DG5Q2cxzo5OFx9ctIHohioM-yrJL2tn0dSCQQmpbQyE7eMCmWikfTpKFxZI8hbPKwyDXrzuesKj0zDXU4dT2-iOlm-V7rssgoeYH_1qIXV9YReLDyGLAncSUZE2U8iLB2_Al1N5kHBqq88DE1GPEzUeQheaPuve4XuGkJwFXipZ5YnQNAGsn9cgzKlNQfWSZXOR",
  imageAlt: "Craftsmanship",
};

export const testimonials = [
  {
    id: 1,
    name: "Priya Nair",
    location: "Thrissur",
    text: "The silk saree I ordered was beyond beautiful. Packaging was pristine and delivery was fast. Lakshmika has a customer for life!",
    stars: 5,
  },
  {
    id: 2,
    name: "Ananya Menon",
    location: "Kochi",
    text: "Ordered a gold necklace set for my wedding. The quality is stunning and the personal attention I received on WhatsApp was exceptional.",
    stars: 5,
  },
  {
    id: 3,
    name: "Divya Krishnan",
    location: "Calicut",
    text: "Found my favourite churidar set here. The fabric is premium and the fit is perfect. Will definitely be ordering more!",
    stars: 5,
  },
];

export const footer = {
  tagline: "Celebrating the essence of modern womanhood through curated luxury.",
  navigation: [
    { label: "Collections", href: "#collections" },
    { label: "New Arrivals", href: "#collections" },
    { label: "Bespoke Orders", href: "#contact" },
    { label: "About Us", href: "#story" },
  ],
  support: [
    { label: "Shipping Info", href: "#contact" },
    { label: "Returns & Exchange", href: "#contact" },
    { label: "Care Guide", href: "#contact" },
    { label: "Contact", href: "#contact" },
  ],
};
