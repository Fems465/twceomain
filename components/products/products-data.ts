import type { Product } from "@/components/products/product-row";

// Copy transcribed from the Figma mockup. Images drop at public/products/*.png.
export const PRODUCTS: Product[] = [
  {
    id: "core-products",
    eyebrow: "Core Products",
    title: "The Most Reliable Way to Exchange Crypto in Africa.",
    intro:
      "Choose your asset, lock your rate, confirm, and get paid. Every transaction is monitored by our team from start to finish, with most exchanges completed in under 120 seconds.",
    bullets: [
      "20+ supported assets including BTC, ETH, USDT and SOL",
      "Rate locked at confirmation with no mid-transaction changes",
      "Payouts processed in seconds, not hours",
      "Available 24 hours a day, 7 days a week",
    ],
    cta: { label: "Start Exchange", variant: "purple" },
    image: {
      src: "/product-section-1.png",
      alt: "Map of Africa overlaid with a network of connected nodes",
    },
    imageSide: "left",
  },
  {
    id: "bulk-exchange",
    eyebrow: "For Businesses & High-Volume Traders",
    title: "High Volume. Competitive Rates. Dedicated Account Management.",
    intro:
      "Built for businesses and high-volume traders. Enjoy competitive rates, priority processing, and direct account management for every transaction.",
    bullets: [
      "Minimum volume thresholds apply. Contact us for details.",
      "Custom rate structures for consistent volume",
      "Dedicated relationship manager assigned per account",
      "Full transaction records available for business and accounting purposes",
    ],
    cta: {
      label: "Enquire About Bulk Exchange",
      variant: "gold",
    },
    image: {
      src: "/product-section-2.png",
      alt: "Two people shaking hands on a business agreement",
    },
    imageSide: "right",
  },
  {
    id: "market-intelligence",
    eyebrow: "Market Intelligence",
    title: "Exchange With Intelligence. Know When to Move.",
    intro:
      "Get timely market updates and actionable insights delivered directly to your WhatsApp or email, helping you make informed exchange decisions.",
    bullets: [
      "Delivered via WhatsApp and email",
      "Focused on assets supported by TradeWithCEO",
      "Concise, practical signals with no unnecessary noise",
      "Available to all TradeWithCEO clients",
    ],
    cta: {
      label: "Subscribe to Market Signals",
      variant: "purple",
    },
    image: {
      src: "/product-section-3.png",
      alt: "Candlestick trading chart",
    },
    imageSide: "left",
  },
  {
    id: "business-account",
    eyebrow: "For Companies & Operators",
    title: "A Professional Exchange Solution for Businesses That Deal in Crypto.",
    intro:
      "Designed for companies that regularly exchange crypto. Access streamlined transactions, dedicated support, and business-focused reporting.",
    bullets: [
      "Dedicated account manager",
      "Comprehensive transaction history and reporting",
      "Priority exchange processing",
      "Custom rate structure based on volume",
    ],
    cta: {
      label: "Open a Business Account",
      variant: "gold",
    },
    image: {
      src: "/product-section-4.png",
      alt: "A cluster of 3D cryptocurrency coins",
    },
    imageSide: "right",
  },
];
