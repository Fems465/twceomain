"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";

import { Button } from "@/components/ui/button";
import { Container, Section } from "@/components/landing/container";
import { Eyebrow } from "@/components/landing/eyebrow";
import { EyebrowDot } from "@/components/products/eyebrow-dot";

const ROADMAP = [
  "Mobile application for iOS and Android",
  "Automated recurring exchange scheduling",
  "Portfolio tracking dashboard for full transaction history",
  "Expanded fiat currency and regional support",
];

export function Expanding() {
  const reduce = useReducedMotion();

  const fadeUp: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const grid: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
  };

  const card: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <Section id="whats-next" className="scroll-mt-24 bg-background">
      <Container>
        <motion.div
          variants={fadeUp}
          initial={reduce ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="flex justify-center">
            <Eyebrow icon={<EyebrowDot />}>What&apos;s Next</Eyebrow>
          </div>
          <h2 className="mt-4 font-heading text-3xl font-semibold leading-[1.25] tracking-tight text-foreground-strong sm:text-4xl lg:text-[40px]">
            We Are Expanding. Here Is
            <br className="hidden sm:inline" /> What Is in Development.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-[1.8] text-muted-foreground">
            TradeWithCEO continues to evolve. Our development roadmap includes
            tools designed to give individuals and businesses greater
            flexibility and control over their crypto activity.
          </p>
          <div className="mt-8 flex justify-center">
            <Button
              variant="hero"
              nativeButton={false}
              className="h-11 rounded-full px-6 text-sm font-semibold font-heading transition-transform hover:-translate-y-0.5"
              render={<a href="#chat" />}
            >
              Register your interest for early access
            </Button>
          </div>
        </motion.div>

        <motion.div
          variants={grid}
          initial={reduce ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-2 lg:mt-16"
        >
          {ROADMAP.map((item, i) => (
            <motion.div
              key={item}
              variants={card}
              className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-5"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-purple/15 font-heading text-sm font-semibold text-brand-purple">
                {i + 1}
              </span>
              <span className="text-[15px] leading-snug text-foreground">
                {item}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
