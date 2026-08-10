import type { Metadata } from "next";

import { ProductsHero } from "@/components/products/hero";
import { IntroBand } from "@/components/products/intro-band";
import { ProductRow } from "@/components/products/product-row";
import { PRODUCTS } from "@/components/products/products-data";
import { SupportedAssets } from "@/components/products/supported-assets";
import { Expanding } from "@/components/products/expanding";
import { CtaBanner } from "@/components/landing/cta-banner";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Crypto Exchange Products & Tools | TradeWithCEO",
  description:
    "Purpose-built tools for faster, smarter crypto exchange — from retail exchanges to dedicated business services, all simple, secure, and reliable.",
  path: "/products",
  image: "/product-hero-1.png",
});

export default function ProductsPage() {
  return (
    <main className="flex-1">
      <ProductsHero />
      <IntroBand />
      {PRODUCTS.map((product) => (
        <ProductRow key={product.id} product={product} />
      ))}
      <SupportedAssets />
      <Expanding />
      <CtaBanner
        id="speak-to-team"
        title="Not Sure Which Product Suits Your Needs?"
        subtitle="Contact our team with your requirements and we will recommend the most appropriate solution."
        cta={{ label: "Speak to Our Team", href: "#chat" }}
        ctaIcon={null}
        footnote={null}
        titleMaxWidthClass="max-w-[620px]"
      />
    </main>
  );
}
