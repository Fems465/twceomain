"use client";

import { motion, useReducedMotion } from "motion/react";

import { Container, Section } from "@/components/landing/container";

/**
 * IntroBand — centered statement that introduces the product rows.
 */
export function IntroBand() {
  const reduce = useReducedMotion();

  return (
    <Section className="bg-background">
      <Container>
        <motion.h2
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center font-heading text-2xl font-semibold leading-snug tracking-tight text-foreground-strong sm:text-3xl lg:text-[34px] lg:leading-tight"
        >
          One Platform. Multiple Solutions.
          <br className="hidden sm:inline" /> One Standard of Excellence.
        </motion.h2>
      </Container>
    </Section>
  );
}
