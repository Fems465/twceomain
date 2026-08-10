"use client";

import Image, { type StaticImageData } from "next/image";
import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

import btcIcon from "@/public/btc-icon.svg";
import usdtIcon from "@/public/usdt-icon.svg";
import tonIcon from "@/public/ton-icon.svg";

type Coin = {
  sym: string;
  name: string;
  icon: StaticImageData;
  price: string;
  change: string;
};

const COINS: Coin[] = [
  { sym: "BTC", name: "Bitcoin", icon: btcIcon, price: "$56,012", change: "+2.32%" },
  { sym: "USDT", name: "Tether", icon: usdtIcon, price: "$1.00", change: "+0.01%" },
  { sym: "TON", name: "Toncoin", icon: tonIcon, price: "$5.42", change: "+3.15%" },
];

function TickerItem({ c }: { c: Coin }) {
  const up = c.change.startsWith("+");
  return (
    <div className="flex items-center gap-3 border-r border-white/10 px-8">
      <Image src={c.icon} alt="" className="size-9 shrink-0" />
      <div className="leading-tight">
        <div className="font-heading text-sm font-semibold text-foreground-strong">
          {c.sym}
        </div>
        <div className="text-xs text-muted-foreground">{c.name}</div>
      </div>
      <div className="ml-4 text-right leading-tight">
        <div className="text-sm font-semibold text-foreground-strong">
          {c.price}
        </div>
        <div
          className={cn(
            "text-xs font-medium",
            up ? "text-brand-green" : "text-red-400",
          )}
        >
          {c.change}
        </div>
      </div>
    </div>
  );
}

export function TickerStrip() {
  const reduce = useReducedMotion();
  // Repeat the 3 coins enough to fill wide screens, then duplicate for a seamless loop.
  const base = Array.from({ length: 4 }, () => COINS).flat();
  const row = [...base, ...base];

  return (
    <div className="relative w-full border-y border-white/12 bg-white/8 py-4 backdrop-blur-xl">
      {/* Mask fades the marquee at both edges without covering the glass */}
      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_5%,#000_95%,transparent)]">
        <motion.div
          className="flex w-max"
          animate={reduce ? undefined : { x: ["0%", "-50%"] }}
          transition={{ duration: 45, ease: "linear", repeat: Infinity }}
        >
          {row.map((c, i) => (
            <TickerItem key={`${c.sym}-${i}`} c={c} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
