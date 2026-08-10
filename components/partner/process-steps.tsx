"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";

import { cn } from "@/lib/utils";
import { Container, Section } from "@/components/landing/container";

type Step = {
  num: string;
  title: string;
  body: string;
  accent: "gold" | "purple";
};

const STEPS: Step[] = [
  {
    num: "1",
    title: "Make Contact",
    body: "Complete the form below or reach out directly via WhatsApp. Indicate the partnership model you are interested in and provide a brief overview of your situation.",
    accent: "gold",
  },
  {
    num: "2",
    title: "Initial Consultation",
    body: "A member of our partnerships team will be in contact within 24 hours to understand your objectives and identify the arrangement most suited to your needs.",
    accent: "purple",
  },
  {
    num: "3",
    title: "Onboarding and Activation",
    body: "Once terms are agreed, onboarding is completed promptly. Referral partners receive their tracking link. Business partners are assigned a dedicated channel. Affiliates receive their materials and are ready to begin.",
    accent: "gold",
  },
];

export function ProcessSteps() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };

  const item: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <Section className="bg-background">
      <Container>
        <motion.div
          variants={container}
          initial={reduce ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative mx-auto max-w-4xl"
        >
          {/* Dashed connector spanning the row of circles */}
          <div
            aria-hidden
            className="absolute top-7 right-7 left-7 hidden border-t border-dashed border-white/15 sm:block"
          />

          <div className="grid gap-10 sm:grid-cols-3 sm:gap-8">
            {STEPS.map((step) => (
              <motion.div
                key={step.num}
                variants={item}
                className="relative flex flex-col items-center text-center"
              >
                <div
                  className={cn(
                    "relative z-10 flex size-14 items-center justify-center rounded-full font-heading text-lg font-semibold",
                    step.accent === "purple"
                      ? "bg-brand-purple text-white"
                      : "border border-brand-gold/50 bg-background text-white",
                  )}
                >
                  {step.num}
                </div>
                <h3 className="mt-5 font-heading text-lg font-semibold text-foreground-strong">
                  {step.title}
                </h3>
                <p className="mx-auto mt-2 max-w-[280px] text-sm leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
