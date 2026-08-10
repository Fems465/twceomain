"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";
import { FloatingCoin } from "@/components/landing/floating-coin";

import phoneImg from "@/public/hero/phone.png";
import btcImg from "@/public/hero/coin-btc.png";
import usdtImg from "@/public/hero/coin-usdt.png";
import solImg from "@/public/hero/coin-sol.png";
import trafficImg from "@/public/hero/traffic-card.png";

/*
  Positions are % of a 780×743 "stage" (the artwork bounding region in Figma),
  computed from the exact frame coordinates so the composition scales cleanly.
*/
export function HeroArt({ className }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <div
      className={cn(
        "relative mx-auto aspect-[780/743] w-full max-w-[560px] lg:mx-0 lg:-mr-12 lg:w-[640px] lg:max-w-none xl:w-[720px]",
        className,
      )}
    >
      {/* USDT coin (top) — sits BEHIND the phone */}
      <FloatingCoin
        src={usdtImg}
        wrapperClassName="left-[59.5%] top-0 w-[11.7%]"
        delay={0.5}
        floatDuration={5}
        floatOffset={12}
        rotate={-5}
      />

      {/* Phone (main artwork) — entrance only, then holds still */}
      <motion.div
        className="absolute left-0 top-[7.3%] w-[95.1%]"
        initial={reduce ? false : { opacity: 0, scale: 0.94, y: 30 }}
        animate={reduce ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src={phoneImg}
          alt="TradeWithCEO app on a phone"
          sizes="(max-width: 1024px) 90vw, 45vw"
          priority
          className="h-auto w-full drop-shadow-[0_30px_60px_rgba(0,0,0,0.55)]"
        />
      </motion.div>

      {/* Traffic by Location card — fades in, then drifts */}
      <motion.div
        className="absolute left-[44.1%] top-[9.3%] w-[25%]"
        initial={reduce ? false : { opacity: 0, x: -20, y: -10 }}
        animate={reduce ? { opacity: 1 } : { opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          animate={reduce ? undefined : { y: [0, -8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src={trafficImg}
            alt="Traffic by location analytics"
            className="h-auto w-full drop-shadow-[0_12px_30px_rgba(0,0,0,0.5)]"
          />
        </motion.div>
      </motion.div>

      {/* Bitcoin coin (lower-right) */}
      <FloatingCoin
        src={btcImg}
        wrapperClassName="left-[81.7%] top-[54.6%] w-[12.8%]"
        delay={0.7}
        floatDuration={4.5}
        floatOffset={14}
        rotate={6}
      />

      {/* Solana coin (top-right) */}
      <FloatingCoin
        src={solImg}
        wrapperClassName="left-[88.8%] top-[5.5%] w-[11.2%]"
        delay={0.6}
        floatDuration={5.5}
        floatOffset={11}
        rotate={5}
      />
    </div>
  );
}
