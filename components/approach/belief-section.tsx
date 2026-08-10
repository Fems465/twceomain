"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "motion/react";

import { Container, Section } from "@/components/landing/container";
import { Eyebrow } from "@/components/landing/eyebrow";
import { EyebrowDot } from "@/components/products/eyebrow-dot";

import coinImg from "@/public/believe-section-img.png";

export function BeliefSection() {
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
    <Section className="bg-background">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Coin (left on desktop, top on mobile) */}
          <motion.div
            variants={fade}
            initial={reduce ? false : "hidden"}
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="relative mx-auto w-full max-w-[340px] lg:mx-0 lg:max-w-[420px]"
          >
            <div className="pointer-events-none absolute inset-[10%] -z-10 rounded-full bg-brand-gold/15 blur-[90px]" />
            <motion.div
              animate={reduce ? undefined : { y: [0, -10, 0] }}
              transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
            >
              <Image
                src={coinImg}
                alt="A 3D Bitcoin coin"
                sizes="(max-width: 1024px) 60vw, 420px"
                className="h-auto w-full"
              />
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            variants={fade}
            initial={reduce ? false : "hidden"}
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-xl"
          >
            <Eyebrow icon={<EyebrowDot />}>What We Believe</Eyebrow>
            <h2 className="mt-4 font-heading text-2xl font-semibold leading-[1.25] tracking-tight text-foreground-strong sm:text-3xl lg:text-[32px]">
              Crypto Exchange Should Be Simple, Fast, and Transparent.
            </h2>
            <p className="mt-5 text-[15px] leading-[1.9] text-muted-foreground">
              Many crypto users have experienced changing rates, delayed
              payouts, or support that disappears when it&apos;s needed most.
              TradeWithCEO was built to eliminate these problems and provide a
              faster, more reliable exchange experience.
            </p>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
