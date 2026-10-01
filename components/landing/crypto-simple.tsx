"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

import { Container, Section } from "@/components/landing/container";
import { Eyebrow } from "@/components/landing/eyebrow";
import { WhatsAppIcon } from "@/components/landing/icons";
import { WhatsAppCta } from "@/components/landing/whatsapp-cta";

import ringImg from "@/public/coin-ring-features.webp";

export function CryptoSimple() {
  const reduce = useReducedMotion();

  return (
    <Section id="approach" className="overflow-hidden bg-background">
      {/* Glow backdrop — hero-style blurred ellipses (cyan behind the ring,
          purple on the text side, a soft gold accent) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -left-[6%] top-[8%] aspect-square w-[40%] rounded-full bg-glow-cyan/10 blur-[130px]" />
        <div className="absolute right-[2%] top-[34%] aspect-square w-[34%] rounded-full bg-brand-purple/12 blur-[120px]" />
        <div className="absolute left-[46%] -bottom-[24%] aspect-square w-[30%] rounded-full bg-glow-gold/6 blur-[130px]" />
      </div>

      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Coin ring (left on desktop, top on mobile) */}
          <motion.div
            className="relative mx-auto w-full max-w-[380px] lg:max-w-[520px]"
            initial={reduce ? false : { opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="pointer-events-none absolute inset-[12%] -z-10 rounded-full bg-glow-cyan/10 blur-[90px]" />
            <motion.div
              animate={reduce ? undefined : { rotate: 360 }}
              transition={{ duration: 60, ease: "linear", repeat: Infinity }}
            >
              <Image
                src={ringImg}
                alt="A ring of crypto coins"
                className="h-auto w-full"
              />
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl"
          >
            <Eyebrow
              icon={<span className="size-2 rounded-full bg-brand-purple" />}
            >
              What We Do
            </Eyebrow>

            <h2 className="mt-4 font-heading text-3xl font-semibold leading-[1.3] tracking-tight sm:text-4xl lg:text-[40px] lg:leading-[1.25]">
              <span className="text-foreground-strong">
                Crypto Made Simple. Fast. And{" "}
              </span>
              <span className="text-brand-gold">Built Around You.</span>
            </h2>

            <div className="mt-6 space-y-4 text-[15px] leading-[1.9] text-muted-foreground">
              <p>
                Most people have had a bad experience with crypto platforms.
                Rates that changed without warning. Funds that disappeared into a
                queue. Support that was nowhere to be found.
              </p>
              <p>
                TradeWithCEO was built to be the opposite of all that. You see
                your rate before you commit to anything. We lock it in. Your
                funds arrive fast. And whether you are sending a message at 2am
                or 2pm, a real person is on the other end.
              </p>
            </div>

            <div className="mt-8">
              <WhatsAppCta
                variant="whatsapp"
                size="xl"
                className="transition-transform hover:-translate-y-0.5"
              >
                <WhatsAppIcon />
                Chat WhatsApp
              </WhatsAppCta>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
