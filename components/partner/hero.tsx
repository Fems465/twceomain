"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "motion/react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/landing/container";

import heroBg from "@/public/hero/hero-bg.webp";
import handsImg from "@/public/partner-with-us-hero-img.png";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

export function PartnerHero() {
  const reduce = useReducedMotion();

  const item: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative isolate overflow-hidden bg-bg-hero pt-28 pb-16 lg:pt-36 lg:pb-20">
      {/* Glow backdrop */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/2 top-[8%] aspect-square w-[46%] -translate-x-1/2 rounded-full bg-brand-gold/12 blur-[130px]" />
        <div className="absolute -left-[10%] top-[38%] aspect-square w-[30%] rounded-full bg-glow-cyan/10 blur-[120px]" />
        <div className="absolute -right-[10%] top-[38%] aspect-square w-[30%] rounded-full bg-brand-purple/12 blur-[120px]" />
      </div>

      {/* Grain overlay */}
      <Image
        src={heroBg}
        alt=""
        fill
        priority
        sizes="100vw"
        className="pointer-events-none z-0 select-none object-cover object-top opacity-40 mix-blend-soft-light"
      />

      <Container className="relative z-10">
        <motion.div
          variants={container}
          initial={reduce ? false : "hidden"}
          animate="show"
          className="mx-auto max-w-3xl text-center"
        >
          <motion.h1
            variants={item}
            className="font-heading text-4xl font-semibold leading-[1.2] tracking-tight sm:text-5xl lg:text-[48px]"
          >
            <span className="text-white">Multiple Ways to Partner With</span>
            <br />
            <span className="text-brand-gold">TradeWithCEO.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-5 max-w-none text-[15px] leading-[1.9] text-foreground"
          >
            Whether your interest is in client referrals, business
            integration, affiliate income, or a corporate exchange
            arrangement, TradeWithCEO has a partnership model designed to meet
            your requirements.
          </motion.p>

          <motion.div variants={item} className="mt-8">
            <Button
              variant="purple"
              size="xl"
              nativeButton={false}
              className="transition-transform hover:-translate-y-0.5"
              render={<a href="#enquiry" />}
            >
              Discuss Partnership
            </Button>
          </motion.div>
        </motion.div>
      </Container>

      {/* Illustration — outside Container so it can bleed past the content
          gutters toward the section's full edge-to-edge width. */}
      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        className="relative z-10 mx-auto -mt-12 w-full max-w-[1600px] sm:-mt-20 lg:-mt-40"
      >
        <Image
          src={handsImg}
          alt="A Bitcoin coin passing between two hands holding phones"
          sizes="100vw"
          className="h-auto w-full"
        />
      </motion.div>
    </section>
  );
}
