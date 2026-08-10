"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

import { Container } from "@/components/landing/container";

import ctaBg from "@/public/cta-bg.webp";

export function QuoteBand() {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
      style={{ background: "linear-gradient(135deg, #6F45BE, #4A2A8C)" }}
    >
      {/* Chevron texture blended over the purple (shared with CtaBanner) */}
      <Image
        src={ctaBg}
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none object-cover opacity-[0.32] mix-blend-overlay"
      />

      <Container className="relative z-10">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <span
            aria-hidden
            className="block font-heading text-6xl font-bold leading-none text-white/90 sm:text-7xl"
          >
            &ldquo;
          </span>
          <p className="mt-4 text-lg leading-[1.8] text-white/90 sm:text-xl sm:leading-[1.8]">
            Our position is straightforward. When a rate is agreed, it is
            honoured. When an exchange is confirmed, the payout follows within
            seconds. When a client requires assistance, a member of our team is
            reachable immediately. This is not a set of aspirations. It is our
            operational standard.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
