"use client";

import { Fragment } from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";

import { cn } from "@/lib/utils";
import { Container, Section } from "@/components/landing/container";
import { Eyebrow } from "@/components/landing/eyebrow";
import { EyebrowDot } from "@/components/products/eyebrow-dot";

type Step = {
  num: string;
  sub: string;
  title: string;
  body: string;
  principle: string;
};

const STEPS: Step[] = [
  {
    num: "01",
    sub: "Full Visibility Before Any Commitment",
    title: "Initiate and Lock In",
    body: "Choose your asset, amount, and destination. TradeWithCEO locks your rate instantly and shows your full breakdown before you commit. Review. Confirm. Trade with confidence.",
    principle:
      "Complete transparency precedes every transaction. No funds change hands until the terms are fully understood and agreed.",
  },
  {
    num: "02",
    sub: "Every Transaction Monitored From Start to Finish",
    title: "Send and Confirm",
    body: "After approval, your exchange is handled in real time by our team. We track, verify, and manage every step until completion, keeping you supported throughout the journey.",
    principle:
      "Speed of processing supported by direct human oversight at every stage.",
  },
  {
    num: "03",
    sub: "Payout Delivered. Transaction Complete.",
    title: "Receive Your Funds",
    body: "Once confirmed, your fiat or crypto is released instantly. No queues, no batch delays, no office-hour limits—most payouts arrive within 60–120 seconds.",
    principle:
      "Immediate release upon completion. No unnecessary delays at any stage.",
  },
];

// Figma connector paths (926×273). rtl = right→left (step 01→02); ltr mirrors it.
const CONNECTOR_RTL =
  "M925.25 0V87.2753C925.25 118.756 899.73 144.275 868.25 144.275H57.25C25.7698 144.275 0.25 169.795 0.25 201.275V273";
const CONNECTOR_LTR =
  "M0.25 0V87.2753C0.25 118.756 25.7698 144.275 57.25 144.275H868.25C899.73 144.275 925.25 169.795 925.25 201.275V273";

function Connector({ rtl }: { rtl: boolean }) {
  return (
    <div aria-hidden>
      {/* Desktop: curved Figma connector spanning the full width */}
      <svg
        viewBox="0 0 926 273"
        fill="none"
        className="hidden h-auto w-full lg:-my-4 lg:block"
      >
        <path
          d={rtl ? CONNECTOR_RTL : CONNECTOR_LTR}
          stroke="#9170D0"
          strokeOpacity="0.55"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      {/* Mobile: simple vertical line */}
      <div className="mx-auto my-6 h-14 w-px bg-gradient-to-b from-brand-purple/50 to-brand-purple/10 lg:hidden" />
    </div>
  );
}

export function ThreeSteps() {
  const reduce = useReducedMotion();

  const fade: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <Section id="how-it-works" className="scroll-mt-24 bg-background">
      <Container>
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="flex justify-center">
            <Eyebrow icon={<EyebrowDot />}>How Every Exchange Works</Eyebrow>
          </div>
          <h2 className="mt-4 font-heading text-3xl font-semibold leading-[1.25] tracking-tight sm:text-4xl lg:text-[40px]">
            <span className="text-brand-gold">Three Steps. </span>
            <span className="text-foreground-strong">
              Completed in Under Five Minutes.
            </span>
          </h2>
        </motion.div>

        <div className="relative mt-14 lg:mt-24">
          {STEPS.map((step, i) => {
            const contentLeft = i % 2 === 0;
            return (
              <Fragment key={step.num}>
                <motion.div
                  variants={fade}
                  initial={reduce ? false : "hidden"}
                  whileInView="show"
                  viewport={{ once: true, amount: 0.4 }}
                  className="relative"
                >
                  {/* Big faint numeral on the outer edge (desktop) */}
                  <span
                    aria-hidden
                    className={cn(
                      "pointer-events-none absolute top-1/2 hidden -translate-y-1/2 font-heading text-[150px] font-bold leading-none text-white/[0.06] lg:block xl:text-[170px]",
                      contentLeft ? "right-0" : "left-0",
                    )}
                  >
                    {step.num}
                  </span>

                  {/* Content */}
                  <div
                    className={cn(
                      "relative max-w-[820px]",
                      contentLeft ? "" : "lg:ml-auto",
                    )}
                  >
                    <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-brand-purple">
                      <span className="size-1.5 rounded-full bg-brand-purple" />
                      {step.sub}
                    </div>
                    <h3 className="mt-3 font-heading text-3xl font-semibold text-foreground-strong sm:text-4xl lg:text-[36px]">
                      {step.title}
                    </h3>
                    <p className="mt-4 max-w-[620px] text-[15px] leading-[1.9] text-muted-foreground">
                      {step.body}
                    </p>
                    <div className="mt-6 rounded-xl border border-brand-purple/15 bg-brand-purple/[0.07] px-4 py-3 text-sm leading-relaxed">
                      <span className="font-medium text-brand-purple">
                        Principle:{" "}
                      </span>
                      <span className="text-muted-foreground">
                        {step.principle}
                      </span>
                    </div>
                  </div>
                </motion.div>

                {i < STEPS.length - 1 ? <Connector rtl={contentLeft} /> : null}
              </Fragment>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
