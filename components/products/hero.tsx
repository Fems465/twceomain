"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "motion/react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/landing/container";
import { Eyebrow } from "@/components/landing/eyebrow";
import { WhatsAppIcon } from "@/components/landing/icons";
import { WhatsAppCta } from "@/components/landing/whatsapp-cta";

import heroBg from "@/public/hero/hero-bg.webp";
import overviewDash from "@/public/product-hero-2.png"; // tilted "Overview"
import revenueDash from "@/public/product-hero-1.png"; // flat "Revenue & Analytics"

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

/**
 * The two composited dashboard screenshots (absolute, fills its positioned
 * parent). Flat "Revenue & Analytics" is the smaller BACK layer (upper-right);
 * tilted "Overview" is the large FRONT layer that bleeds off the right + bottom
 * edges. Each layer bobs with a different phase for parallax depth. Sizing
 * differs slightly between the mobile (in-flow) and desktop (full-bleed) hosts
 * via lg: variants — only one host is ever mounted at a given breakpoint.
 */
function DashboardComposite({ reduce }: { reduce: boolean | null }) {
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className="absolute inset-0"
    >
      <div className="pointer-events-none absolute inset-[14%] -z-10 rounded-[30%] bg-glow-cyan/12 blur-[110px]" />

      {/* Back: flat Revenue & Analytics (smaller, upper-right) */}
      <motion.div
        animate={reduce ? undefined : { y: [0, -10, 0] }}
        transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}
        className="absolute right-[3%] top-[1%] z-0 w-[56%] lg:right-[-6%] lg:top-[14%] lg:w-[54%]"
      >
        <Image
          src={revenueDash}
          alt="TradeWithCEO revenue and analytics dashboard"
          sizes="(max-width: 1024px) 45vw, 24vw"
          className="h-auto w-full drop-shadow-2xl"
        />
      </motion.div>

      {/* Front: tilted Overview (large, bleeds right + bottom) */}
      <motion.div
        animate={reduce ? undefined : { y: [0, -14, 0] }}
        transition={{
          duration: 6,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 0.3,
        }}
        className="absolute -bottom-[5%] right-[-6%] z-10 w-[104%] lg:-bottom-[7%] lg:right-[-7%] lg:w-[92%]"
      >
        <Image
          src={overviewDash}
          alt="TradeWithCEO admin overview dashboard"
          priority
          sizes="(max-width: 1024px) 100vw, 58vw"
          className="h-auto w-full drop-shadow-2xl"
        />
      </motion.div>
    </motion.div>
  );
}

export function ProductsHero() {
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
    <section className="relative isolate overflow-hidden bg-bg-hero pt-28 pb-16 lg:min-h-[760px] lg:pt-36 lg:pb-0">
      {/* Glow backdrop — blurred ellipses (green left, cyan behind the art) */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -left-[22%] top-[16%] aspect-square w-[42%] rounded-full bg-glow-green/18 blur-[130px]" />
        <div className="absolute left-[52%] top-[8%] aspect-square w-[40%] rounded-full bg-glow-cyan/12 blur-[120px]" />
        <div className="absolute left-[64%] top-[34%] aspect-square w-[26%] rounded-full bg-glow-green/10 blur-[110px]" />
      </div>

      {/* Grain overlay (shared with the landing hero) */}
      <Image
        src={heroBg}
        alt=""
        fill
        priority
        sizes="100vw"
        className="pointer-events-none z-0 select-none object-cover object-top opacity-40 mix-blend-soft-light"
      />

      {/* Desktop art — anchored to the full-width section so it bleeds to the
          true viewport right edge regardless of the centered container width. */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-[56vw] max-w-[1120px] lg:block">
        <DashboardComposite reduce={reduce} />
      </div>

      <Container className="relative z-10">
        <div className="lg:flex lg:min-h-[664px] lg:flex-col lg:justify-center">
          {/* Text column */}
          <motion.div
            variants={container}
            initial={reduce ? false : "hidden"}
            animate="show"
            className="max-w-[560px]"
          >
            <motion.div variants={item}>
              <Eyebrow
                icon={<span className="size-2 rounded-full bg-brand-purple" />}
              >
                Our Products
              </Eyebrow>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-5 font-heading text-4xl font-semibold leading-[1.2] tracking-tight sm:text-5xl lg:text-[52px] lg:leading-[1.15]"
            >
              <span className="text-white">Purpose-Built Tools for </span>
              <br className="hidden lg:inline" />
              <span className="text-brand-gold">Faster, Smarter </span>
              <br className="hidden lg:inline" />
              <span className="text-white">Crypto Exchange.</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-lg text-base leading-[1.9] text-foreground"
            >
              From fast retail exchanges to dedicated business services,
              TradeWithCEO makes crypto-to-fiat transactions simple, secure, and
              reliable.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <WhatsAppCta
                variant="whatsapp"
                size="xl"
                className="transition-transform hover:-translate-y-0.5"
              >
                <WhatsAppIcon />
                Chat WhatsApp
              </WhatsAppCta>
              <Button
                variant="hero"
                size="xl"
                nativeButton={false}
                className="transition-transform hover:-translate-y-0.5"
                render={<a href="#whats-next" />}
              >
                Join the waitlist
              </Button>
            </motion.div>
          </motion.div>

          {/* Mobile art — in-flow below the text (contained, no bleed). */}
          <div className="relative mx-auto mt-12 aspect-[5/4] w-full max-w-[520px] lg:hidden">
            <DashboardComposite reduce={reduce} />
          </div>
        </div>
      </Container>
    </section>
  );
}
