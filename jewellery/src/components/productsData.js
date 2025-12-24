// src/pages/productsData.js
// NOTE: Put your images in public/assets/products/...
// Example: public/assets/products/p1/1.jpg, 2.jpg, 3.jpg...
// You can add more fields later (weight, karat, stone, etc.)

export const SHOW_PRICES = false; // set true if you want to display prices

export const PRODUCTS = [
  // RINGS / GOLD
  {
    id: "rg-gold-001",
    category: "gold",
    sub: "rings",
    title: "Heritage Filigree Gold Ring",
    subtitle: "Traditional detailing with a modern comfort-fit",
    tags: ["Traditional", "Daily Wear", "Comfort Fit"],
    metal: "Gold",
    style: "Filigree",
    price: 58999,
    images: [
      "/assets/products/rg-gold-001/1.jpg",
      "/assets/products/rg-gold-001/1.jpg",
      "/assets/products/rg-gold-001/1.jpg",
      "/assets/products/rg-gold-001/1.jpg",
    ],
  },
  {
    id: "rg-gold-002",
    category: "gold",
    sub: "rings",
    title: "Minimal Gold Band",
    subtitle: "Clean lines, timeless shine",
    tags: ["Minimal", "Everyday", "Elegant"],
    metal: "Gold",
    style: "Band",
    price: 29999,
    images: [
      "/assets/products/rg-gold-002/1.jpg",
      "/assets/products/rg-gold-002/1.jpg",
      "/assets/products/rg-gold-002/1.jpg",
    ],
  },

  // RINGS / DIAMOND
  {
    id: "rg-diamond-001",
    category: "rings",
    sub: "diamond",
    title: "Classic Solitaire Ring",
    subtitle: "Brilliance crafted to last a lifetime",
    tags: ["Bridal", "Classic", "Signature"],
    metal: "Gold",
    style: "Solitaire",
    price: 145999,
    images: [
      "/assets/products/rg-diamond-001/1.jpg",
      "/assets/products/rg-diamond-001/2.jpg",
      "/assets/products/rg-diamond-001/3.jpg",
      "/assets/products/rg-diamond-001/4.jpg",
    ],
  },

  // BANGLES / SILVER
  {
    id: "bg-silver-001",
    category: "bangles",
    sub: "silver",
    title: "Oxidised Silver Bangle Set",
    subtitle: "Bold texture, artisan finish",
    tags: ["Trendy", "Oxidised", "Statement"],
    metal: "Silver",
    style: "Oxidised",
    price: 6999,
    images: [
      "/assets/products/bg-silver-001/1.jpg",
      "/assets/products/bg-silver-001/2.jpg",
      "/assets/products/bg-silver-001/3.jpg",
    ],
  },

  // CHAINS / GOLD
  {
    id: "ch-gold-001",
    category: "chains",
    sub: "gold",
    title: "Temple Style Gold Chain",
    subtitle: "Auspicious motifs with premium polish",
    tags: ["Temple", "Traditional", "Festive"],
    metal: "Gold",
    style: "Temple",
    price: 87999,
    images: [
      "/assets/products/ch-gold-001/1.jpg",
      "/assets/products/ch-gold-001/2.jpg",
      "/assets/products/ch-gold-001/3.jpg",
    ],
  },

  // ANKLETS / SILVER
  {
    id: "an-silver-001",
    category: "anklets",
    sub: "silver",
    title: "Ghungroo Silver Anklet",
    subtitle: "Soft chime, smooth comfort",
    tags: ["Classic", "Ghungroo", "Daily Wear"],
    metal: "Silver",
    style: "Ghungroo",
    price: 3499,
    images: [
      "/assets/products/an-silver-001/1.jpg",
      "/assets/products/an-silver-001/2.jpg",
      "/assets/products/an-silver-001/3.jpg",
    ],
  },

  // COINS / GOLD
  {
    id: "cn-gold-001",
    category: "coins",
    sub: "gold",
    title: "Lakshmi Gold Coin",
    subtitle: "Blessings for new beginnings",
    tags: ["Pooja", "Gifting", "Auspicious"],
    metal: "Gold",
    style: "Coin",
    price: 21999,
    images: [
      "/assets/products/cn-gold-001/1.jpg",
      "/assets/products/cn-gold-001/2.jpg",
    ],
  },
];

export function getProducts(category, sub) {
  return PRODUCTS.filter((p) => p.category === category && p.sub === sub);
}

export function getProductById(productId) {
  return PRODUCTS.find((p) => p.id === productId) || null;
}

export function getCategorySubs(category) {
  const subs = new Set(PRODUCTS.filter((p) => p.category === category).map((p) => p.sub));
  return Array.from(subs);
}

export function formatINR(value) {
  try {
    return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(value);
  } catch {
    return `₹${value}`;
  }
}
