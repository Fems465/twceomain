import type { Metadata } from "next";

import { ApproachHero } from "@/components/approach/hero";
import { BeliefSection } from "@/components/approach/belief-section";
import { QuoteBand } from "@/components/approach/quote-band";
import { ThreeSteps } from "@/components/approach/three-steps";
import { CombineSection } from "@/components/approach/combine-section";
import { Commitments } from "@/components/approach/commitments";
import { CtaBanner } from "@/components/landing/cta-banner";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "How It Works: Fast, Fair Crypto Exchange | TradeWithCEO",
  description:
    "How TradeWithCEO makes crypto simple, fast, and fair — rates locked before you send, payouts that settle in seconds, and real human support whenever you need it.",
  path: "/approach",
  image: "/our-approach-hero-img.png",
});

export default function ApproachPage() {
  return (
    <main className="flex-1">
      <ApproachHero />
      <BeliefSection />
      <QuoteBand />
      <ThreeSteps />
      <CombineSection />
      <Commitments />
      <CtaBanner
        id="start"
        title="Ready to Experience a Better Standard of Exchange?"
        subtitle="Begin an exchange and see the difference for yourself."
        cta={{ label: "Start Exchange", href: "#chat" }}
        secondaryCta={{ label: "Learn More", href: "#how-it-works" }}
        ctaIcon={null}
        footnote={null}
        titleMaxWidthClass="max-w-[640px]"
      />
    </main>
  );
}
