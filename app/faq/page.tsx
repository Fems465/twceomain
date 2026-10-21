import type { Metadata } from "next";
import Image from "next/image";

import { Container } from "@/components/landing/container";
import { CtaBanner } from "@/components/landing/cta-banner";
import { FaqList } from "@/components/faq/faq-list";
import { FAQ_CATEGORIES, answerToText } from "@/components/faq/faq-data";
import { Reveal } from "@/components/ui/reveal";
import { pageMetadata } from "@/lib/metadata";

import heroBg from "@/public/hero/hero-bg.webp";

export const metadata: Metadata = pageMetadata({
  title: "Frequently Asked Questions | TradeWithCEO",
  description:
    "Answers about TradeWithCEO — getting started, KYC tiers and limits, crypto and Naira deposits and withdrawals, buying, selling and swapping, the WhatsApp AI Trading Agent, and fees.",
  path: "/faq",
  image: "/hero/phone.png",
});

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_CATEGORIES.flatMap((category) =>
    category.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: answerToText(item.answer) },
    })),
  ),
};

export default function FaqPage() {
  return (
    <main className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Header */}
      <section className="relative isolate overflow-hidden bg-bg-hero pt-28 pb-14 lg:pt-36 lg:pb-20">
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute right-[4%] top-[2%] aspect-square w-[40%] rounded-full bg-brand-purple/15 blur-[130px]" />
          <div className="absolute -left-[12%] top-[30%] aspect-square w-[30%] rounded-full bg-glow-cyan/10 blur-[120px]" />
        </div>
        <Image
          src={heroBg}
          alt=""
          fill
          priority
          sizes="100vw"
          className="pointer-events-none z-0 select-none object-cover object-top opacity-40 mix-blend-soft-light"
        />
        <Container className="relative z-10">
          <Reveal>
            <p className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-brand-purple">
              Help Centre
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-4 font-heading text-3xl font-semibold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[44px]">
              Frequently Asked{" "}
              <span className="text-brand-purple">Questions</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-2xl text-base leading-[1.9] text-foreground">
              Everything you need to know about getting started, verifying
              your account, moving crypto and Naira, and trading on TWCEO.
            </p>
          </Reveal>
        </Container>
      </section>

      <FaqList />

      <CtaBanner
        id="support"
        title="Still Have Questions?"
        subtitle="Our support team is a message away. Chat with us on WhatsApp and we will help you sort it out."
        footnote={null}
      />
    </main>
  );
}
