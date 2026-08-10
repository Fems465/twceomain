import { Hero } from "@/components/landing/hero";
import { TickerStrip } from "@/components/landing/ticker-strip";
import { Features } from "@/components/landing/features";
import { CryptoSimple } from "@/components/landing/crypto-simple";
import { Testimonials } from "@/components/landing/testimonials";
import { CtaBanner } from "@/components/landing/cta-banner";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      {/* Ticker overlaps the hero bottom so the hand sits behind it */}
      <div className="relative z-30 -mt-12 lg:-mt-16">
        <TickerStrip />
      </div>
      <Features />
      <CryptoSimple />
      <Testimonials />
      <CtaBanner />
    </main>
  );
}
