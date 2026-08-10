"use client";

import Image from "next/image";
import { Megaphone } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "motion/react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/landing/container";
import { Eyebrow } from "@/components/landing/eyebrow";
import { Stat } from "@/components/landing/stat";
import { WhatsAppIcon } from "@/components/landing/icons";
import { HeroArt } from "@/components/landing/hero-art";

import heroBg from "@/public/hero/hero-bg.webp";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

export function Hero() {
  const reduce = useReducedMotion();

  // Fade-up per item; disabled when the user prefers reduced motion.
  const item: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative isolate overflow-hidden bg-bg-hero pt-28 pb-0 lg:pt-36">
      {/* Glow backdrop — Figma blurred ellipses (positions as % of 1440×853 frame) */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -left-[31%] top-[29%] aspect-square w-[36%] rounded-full bg-glow-green/20 blur-[130px]" />
        <div className="absolute left-[42%] top-[36%] h-[49%] w-[50%] rounded-full bg-glow-cyan/12 blur-[120px]" />
        <div className="absolute left-[65%] top-[28%] aspect-square w-[24%] rounded-full bg-glow-green/12 blur-[110px]" />
        <div className="absolute left-[59%] top-[24%] aspect-square w-[29%] rounded-full bg-white/5 blur-[120px]" />
        <div className="absolute -right-[10%] -top-[16%] aspect-square w-[36%] rounded-full bg-glow-gold/8 blur-[130px]" />
      </div>

      {/* Grain overlay (Figma "October copy 4 1") */}
      <Image
        src={heroBg}
        alt=""
        fill
        priority
        sizes="100vw"
        className="pointer-events-none z-0 select-none object-cover object-top opacity-40 mix-blend-soft-light"
      />

      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,700px)_minmax(0,1fr)] lg:gap-8">
          {/* Text column */}
          <motion.div
            variants={container}
            initial={reduce ? false : "hidden"}
            animate="show"
            className="lg:self-start lg:pt-4"
          >
            <motion.div variants={item}>
              <Eyebrow icon={<Megaphone />}>
                Zero fees on your first three transactions
              </Eyebrow>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-5 font-heading text-4xl font-semibold leading-[1.3] tracking-tight sm:text-5xl lg:text-[52px] lg:leading-[1.35]"
            >
              <span className="text-white">Buy, Sell and Manage </span>
              <span className="text-brand-gold">Crypto</span>
              <br className="hidden lg:inline" />{" "}
              <span className="text-brand-gold">with a Team </span>
              <span className="text-brand-purple">You can</span>
              <br className="hidden lg:inline" />{" "}
              <span className="text-brand-purple">Actually Reach.</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-lg text-base leading-[1.9] text-foreground"
            >
              TradeWithCEO makes it simple to buy, sell, and manage BTC, ETH and
              USDT. Your rate is locked before you send. Your funds arrive in
              seconds. And a real person is always available when you need them.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Button
                variant="whatsapp"
                size="xl"
                nativeButton={false}
                className="transition-transform hover:-translate-y-0.5"
                render={<a href="#chat" />}
              >
                <WhatsAppIcon />
                Chat WhatsApp
              </Button>
              <Button
                variant="hero"
                size="xl"
                nativeButton={false}
                className="transition-transform hover:-translate-y-0.5"
                render={<a href="#learn-more" />}
              >
                Learn More
              </Button>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-12 flex flex-wrap gap-x-12 gap-y-6"
            >
              <Stat value="5,000+" label="Transactions Completed" />
              <Stat value="20+" label="Assets Supported" />
              <Stat value="24/7" label="Human support" />
            </motion.div>
          </motion.div>

          {/* Art column */}
          <div className="relative lg:justify-self-end">
            <HeroArt />
          </div>
        </div>
      </Container>
    </section>
  );
}
