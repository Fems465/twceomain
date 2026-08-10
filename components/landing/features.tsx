"use client";

import Image, { type StaticImageData } from "next/image";
import { motion, useReducedMotion, type Variants } from "motion/react";

import { Container, Section } from "@/components/landing/container";

import lightningIcon from "@/public/lightning-icon.svg";
import shieldIcon from "@/public/shield-icon.svg";
import cloudIcon from "@/public/cloud-icon.svg";

type Feature = {
  icon: StaticImageData;
  title: string;
  desc: string;
};

const FEATURES: Feature[] = [
  {
    icon: lightningIcon,
    title: "Reliable, Fast Processing",
    desc: "Every exchange is processed the moment it's confirmed, with no queues, delays, or dependency on manual approvals.",
  },
  {
    icon: shieldIcon,
    title: "Human Support. Always Available.",
    desc: "Transactions are monitored in real time by trained specialists, ensuring direct human response whenever attention is needed.",
  },
  {
    icon: cloudIcon,
    title: "Your Rate. Locked. Guaranteed.",
    desc: "What you confirm is what you receive. The rate remains fixed from agreement to payout, reflecting our commitment to rate integrity.",
  },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
};

export function Features() {
  const reduce = useReducedMotion();
  const item: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <Section id="what-we-do" className="bg-background">
      <Container>
        <motion.h2
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-[540px] text-center font-heading text-3xl font-semibold leading-[1.3] tracking-tight sm:text-4xl lg:text-[40px] lg:leading-[1.25]"
        >
          <span className="text-brand-gold">Every Exchange Platform </span>
          <span className="text-foreground-strong">
            Promises Speed and Safety. Here Is How We Deliver Both.
          </span>
        </motion.h2>

        <motion.div
          variants={container}
          initial={reduce ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-14 grid gap-16 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-24"
        >
          {FEATURES.map((f) => (
            <motion.div
              key={f.title}
              variants={item}
              className="mx-auto flex max-w-sm flex-col items-center text-center"
            >
              <div className="flex size-29 items-center justify-center rounded-lg border border-white/10 bg-white/5 backdrop-blur-md">
                <Image src={f.icon} alt="" className="max-h-16 w-auto" />
              </div>
              <h3 className="mt-6 font-heading text-xl font-semibold text-foreground-strong">
                {f.title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.8] text-muted-foreground">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
