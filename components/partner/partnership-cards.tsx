"use client";

import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "motion/react";

import { cn } from "@/lib/utils";
import { Container, Section } from "@/components/landing/container";
import { Eyebrow } from "@/components/landing/eyebrow";
import { EyebrowDot } from "@/components/products/eyebrow-dot";

type Partner = {
  color: "purple" | "gold";
  label: string;
  title: string;
  body: string;
  bullets: string[];
  cta: string;
};

const PARTNERS: Partner[] = [
  {
    color: "purple",
    label: "Referral Partner",
    title: "Refer Clients. Earn Commission.",
    body: "Earn from every completed exchange through your referral network. Simple, ongoing earnings, no risk.",
    bullets: [
      "Share your referral link",
      "Earn on completed exchanges",
      "Track your activity anytime",
    ],
    cta: "Become a Referral Partner",
  },
  {
    color: "gold",
    label: "Business Integration",
    title: "Crypto Exchange Built Into Your Business.",
    body: "A seamless exchange solution for businesses handling payments, settlements, and crypto operations.",
    bullets: [
      "Get custom exchange terms",
      "Submit requests through a dedicated channel",
      "Receive priority processing & documentation",
    ],
    cta: "Explore Business Integration",
  },
  {
    color: "purple",
    label: "Affiliate Programme",
    title: "Monetise Your Audience. Earn More.",
    body: "Help your community access reliable crypto exchange while earning from every transaction.",
    bullets: [
      "Join the affiliate programme",
      "Share your unique link",
      "Earn from completed exchanges",
    ],
    cta: "Apply for the Affiliate Programme",
  },
  {
    color: "gold",
    label: "Institutional & Corporate",
    title: "Enterprise Exchange. Custom Solutions.",
    body: "Tailored crypto services for organisations requiring volume, reliability, and dedicated support.",
    bullets: [
      "Define your exchange requirements",
      "Build a custom structure",
      "Receive dedicated account management",
    ],
    cta: "Request an Institutional Partnership",
  },
];

function PartnerCard({ partner, variants }: { partner: Partner; variants: Variants }) {
  const isPurple = partner.color === "purple";

  return (
    <motion.div
      variants={variants}
      className="flex w-full flex-col rounded-lg border border-white/12 bg-white/8 p-7 backdrop-blur-xl sm:aspect-square sm:p-8"
    >
      <div
        className={cn(
          "flex items-center gap-2 text-xs font-semibold uppercase tracking-wide",
          isPurple ? "text-brand-purple" : "text-brand-gold",
        )}
      >
        <span
          className={cn(
            "size-1.5 rounded-full",
            isPurple ? "bg-brand-purple" : "bg-brand-gold",
          )}
        />
        {partner.label}
      </div>

      <h3 className="mt-4 font-heading text-xl font-semibold text-foreground-strong">
        {partner.title}
      </h3>

      <p className="mt-3 text-[15px] leading-[1.8] text-muted-foreground">
        {partner.body}
      </p>

      <div className="mt-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          How It Works:
        </p>
        <ul className="mt-3 space-y-2">
          {partner.bullets.map((b) => (
            <li
              key={b}
              className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"
            >
              <span
                className={cn(
                  "mt-2 size-1 shrink-0 rounded-full",
                  isPurple ? "bg-brand-purple" : "bg-brand-gold",
                )}
              />
              {b}
            </li>
          ))}
        </ul>
      </div>

      <a
        href="#enquiry"
        className={cn(
          "group/link mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold transition-colors hover:underline",
          isPurple ? "text-brand-purple" : "text-brand-gold",
        )}
      >
        {partner.cta}
        <ArrowRight className="size-4 transition-transform group-hover/link:translate-x-0.5" />
      </a>
    </motion.div>
  );
}

export function PartnershipCards() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
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
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="flex justify-center">
            <Eyebrow icon={<EyebrowDot />}>Partnership Options</Eyebrow>
          </div>
          <h2 className="mt-4 font-heading text-3xl font-semibold leading-[1.25] tracking-tight text-foreground-strong sm:text-4xl lg:text-[38px]">
            Structured Partnerships for Businesses, Operators, and Individuals
            With the Right Networks.
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial={reduce ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mx-auto mt-14 grid grid-cols-[minmax(0,420px)] justify-center gap-6 sm:grid-cols-[repeat(2,minmax(0,420px))] lg:mt-16 lg:gap-8"
        >
          {PARTNERS.map((partner) => (
            <PartnerCard key={partner.label} partner={partner} variants={item} />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
