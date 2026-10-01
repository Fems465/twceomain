"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "motion/react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/landing/container";
import { WhatsAppCta } from "@/components/landing/whatsapp-cta";

import heroBg from "@/public/hero/hero-bg.webp";
import sphereImg from "@/public/our-approach-hero-img.png";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

export function ApproachHero() {
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
    <section className="relative isolate overflow-hidden bg-bg-hero pt-28 pb-16 lg:min-h-[600px] lg:pt-40 lg:pb-24">
      {/* Glow backdrop */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute right-[4%] top-[2%] aspect-square w-[44%] rounded-full bg-brand-purple/20 blur-[130px]" />
        <div className="absolute -left-[14%] top-[34%] aspect-square w-[32%] rounded-full bg-glow-cyan/10 blur-[120px]" />
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

      {/* Desktop sphere — anchored to the section bottom, bleeds off the right */}
      <motion.div
        aria-hidden
        initial={reduce ? false : { opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="pointer-events-none absolute bottom-0 right-[-4%] z-0 hidden w-[42vw] max-w-[600px] lg:block"
      >
        <Image src={sphereImg} alt="" priority className="h-auto w-full" />
      </motion.div>

      <Container className="relative z-10">
        <div className="lg:flex lg:min-h-[440px] lg:flex-col lg:justify-center">
          <motion.div
            variants={container}
            initial={reduce ? false : "hidden"}
            animate="show"
            className="max-w-2xl"
          >
            <motion.h1
              variants={item}
              className="font-heading text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl lg:text-[44px] lg:leading-[1.14]"
            >
              <span className="text-white">Speed Without Compromise.</span>
              <br />
              <span className="text-brand-purple">Trust Without Question.</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-md text-base leading-[1.9] text-foreground"
            >
              Every TradeWithCEO exchange follows a trusted process built to
              protect your funds, secure your agreed rate, and deliver payouts
              quickly.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <WhatsAppCta
                variant="purple"
                size="xl"
                className="transition-transform hover:-translate-y-0.5"
              >
                Start Exchange
              </WhatsAppCta>
              <Button
                variant="hero"
                size="xl"
                nativeButton={false}
                className="transition-transform hover:-translate-y-0.5"
                render={<a href="#how-it-works" />}
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>

          {/* Mobile sphere — in-flow below the text */}
          <div className="mt-12 lg:hidden">
            <Image
              src={sphereImg}
              alt=""
              aria-hidden
              sizes="60vw"
              className="mx-auto h-auto w-2/3 max-w-xs"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
