"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "motion/react";

import { Container, Section } from "@/components/landing/container";
import { Eyebrow } from "@/components/landing/eyebrow";
import { EyebrowDot } from "@/components/products/eyebrow-dot";
import { FloatingCoin } from "@/components/landing/floating-coin";

import personImg from "@/public/why-partner-section-img.png";
import usdtCoin from "@/public/hero/coin-usdt.png";
import solCoin from "@/public/hero/coin-sol.png";

const RECEIVES = [
  "Transparent commission and rate structures with no undisclosed terms",
  "Real-time visibility into exchange status for referred clients",
  "A named contact within TradeWithCEO for all partner-related matters",
  "Priority support for every client introduced through a partner relationship",
  "Consistent, prompt payment with no delays or complications",
];

function PersonWithCoins() {
  return (
    <div className="relative w-full">
      <div className="pointer-events-none absolute inset-[6%] -z-10 rounded-full bg-brand-purple/10 blur-[100px]" />
      <Image
        src={personImg}
        alt="A TradeWithCEO partner checking their phone"
        sizes="(max-width: 1024px) 70vw, 34vw"
        className="h-auto w-full"
      />
      <FloatingCoin
        src={usdtCoin}
        wrapperClassName="left-[-6%] bottom-[14%] w-[20%]"
        delay={0.3}
        floatDuration={5}
      />
      <FloatingCoin
        src={solCoin}
        wrapperClassName="right-[-4%] top-[8%] w-[16%]"
        delay={0.5}
        floatDuration={4.5}
      />
    </div>
  );
}

export function WhyPartner() {
  const reduce = useReducedMotion();

  const fade: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <Section className="relative isolate overflow-hidden bg-background lg:min-h-[780px]">
      {/* Glow behind the photo */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute right-[6%] top-1/2 aspect-square w-[36%] -translate-y-1/2 rounded-full bg-brand-gold/12 blur-[130px]" />
      </div>

      <Container className="relative z-10">
        <motion.div
          variants={fade}
          initial={reduce ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-xl"
        >
          <Eyebrow icon={<EyebrowDot />}>Why Partner with TradeWithCEO</Eyebrow>

          <h2 className="mt-4 font-heading text-3xl font-semibold leading-[1.25] tracking-tight text-foreground-strong sm:text-4xl lg:text-[38px]">
            When You Associate Your Name With a Platform, That Platform
            Reflects on You.
          </h2>

          <p className="mt-5 text-[15px] leading-[1.9] text-muted-foreground">
            TradeWithCEO does not regard partnership as a transactional
            arrangement. When a client, follower, or colleague is referred to
            us, the quality of their experience directly reflects on the
            individual or organisation that sent them.
          </p>

          <div className="mt-7">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              All Partners Receive:
            </p>
            <ul className="mt-4 space-y-3">
              {RECEIVES.map((r) => (
                <li
                  key={r}
                  className="flex items-start gap-3 text-[15px] leading-relaxed text-muted-foreground"
                >
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-purple" />
                  {r}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-7 text-[15px] leading-[1.9] text-muted-foreground">
            Our success is directly tied to yours. That principle governs
            every partnership we enter.
          </p>
        </motion.div>

        {/* Mobile photo — in-flow, contained, no bleed. */}
        <motion.div
          variants={fade}
          initial={reduce ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative mx-auto mt-12 w-full max-w-[420px] lg:hidden"
        >
          <PersonWithCoins />
        </motion.div>
      </Container>

      {/* Desktop photo — right + bottom edges snap flush to the section's
          own edges (fully visible, nothing cropped). */}
      <motion.div
        variants={fade}
        initial={reduce ? false : "hidden"}
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="pointer-events-none absolute bottom-0 right-0 z-10 hidden w-[36vw] max-w-[490px] lg:block"
      >
        <PersonWithCoins />
      </motion.div>
    </Section>
  );
}
