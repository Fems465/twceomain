"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { Container, Section } from "@/components/landing/container";
import { Eyebrow } from "@/components/landing/eyebrow";
import { EyebrowDot } from "@/components/products/eyebrow-dot";

import coinsImg from "@/public/supported-assets-img.png";

export function SupportedAssets() {
  const reduce = useReducedMotion();

  const fadeUp = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  } as const;

  return (
    <Section className="relative overflow-hidden bg-background">
      {/* Soft glow behind the coins */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/2 top-1/2 aspect-square w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-purple/10 blur-[130px]" />
      </div>

      <Container className="relative z-10">
        <motion.div
          variants={fadeUp}
          initial={reduce ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="text-center"
        >
          <div className="flex justify-center">
            <Eyebrow icon={<EyebrowDot />}>Supported Assets</Eyebrow>
          </div>
          <h2 className="mt-4 font-heading text-2xl font-semibold leading-[1.25] tracking-tight sm:text-3xl lg:text-[34px] lg:whitespace-nowrap">
            <span className="text-brand-gold">20+ Assets. </span>
            <span className="text-foreground-strong">
              All Exchangeable Instantly.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-[1.8] text-muted-foreground">
            All major digital assets and an expanding selection of alternatives,
            each exchangeable at real-time rates confirmed and locked at the
            point of transaction.
          </p>
        </motion.div>

        {/* Coin cluster */}
        <motion.div
          variants={fadeUp}
          initial={reduce ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto mt-12 w-full max-w-[845px] lg:mt-16"
        >
          <Image
            src={coinsImg}
            alt="Solana, Bitcoin, Tether, USD and Ethereum coins"
            sizes="(max-width: 1024px) 95vw, 845px"
            className="h-auto w-full"
          />
        </motion.div>

        {/* Sample rate card */}
        <motion.div
          variants={fadeUp}
          initial={reduce ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="mx-auto mt-8 w-full max-w-sm"
        >
          <div className="flex items-center justify-between gap-3">
            <span className="text-sm text-muted-foreground">
              Sample rate · BTC/NGN
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-brand-green/15 px-2.5 py-1 text-xs font-medium text-brand-green">
              <Check className="size-3.5" strokeWidth={3} />
              Rate Locked
            </span>
          </div>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="font-heading text-2xl font-semibold text-foreground-strong sm:text-3xl">
              ₦98,450,000
            </span>
            <span className="text-sm text-muted-foreground">per BTC</span>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
