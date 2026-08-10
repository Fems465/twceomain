"use client";

import { motion, useReducedMotion } from "motion/react";

import { Container, Section } from "@/components/landing/container";
import { Eyebrow } from "@/components/landing/eyebrow";
import { EyebrowDot } from "@/components/products/eyebrow-dot";

export function CombineSection() {
  const reduce = useReducedMotion();

  return (
    <Section className="relative overflow-hidden bg-background">
      {/* Green glow (left) */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -left-[10%] top-[16%] aspect-square w-[34%] rounded-full bg-glow-green/12 blur-[130px]" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="flex justify-center">
            <Eyebrow icon={<EyebrowDot />}>What We Believe</Eyebrow>
          </div>
          <h2 className="mt-4 font-heading text-3xl font-semibold leading-[1.2] tracking-tight text-foreground-strong sm:text-4xl lg:text-[38px]">
            Instant Speed. Human Control. Reliable Delivery.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-[1.9] text-muted-foreground">
            Most platforms choose between automation and human support.
            Automation brings speed but lacks accountability, while manual
            processing offers control but creates delays. TradeWithCEO combines
            both.
          </p>
        </motion.div>
      </Container>
    </Section>
  );
}
