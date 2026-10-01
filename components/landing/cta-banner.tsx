"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Container, Section } from "@/components/landing/container";
import { WhatsAppIcon } from "@/components/landing/icons";
import { WhatsAppCta } from "@/components/landing/whatsapp-cta";

import ctaBg from "@/public/cta-bg.webp";

type CtaBannerProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  cta?: { label: string; href: string };
  /** Optional outline button beside the primary CTA. */
  secondaryCta?: { label: string; href: string } | null;
  /** Icon before the CTA label; pass null to omit. */
  ctaIcon?: ReactNode;
  /** Small line under the CTA; pass null to omit. */
  footnote?: string | null;
  /** Max-width class for the title, tuning where it wraps. */
  titleMaxWidthClass?: string;
  /** Extra classes on the primary CTA button — e.g. to swap the filled gold fill for an outline treatment. */
  ctaClassName?: string;
};

export function CtaBanner({
  id = "download",
  title = "Ready to Make Your First Exchange?",
  subtitle = "Send us a message on WhatsApp. Tell us what you want to do and we will take it from there.",
  cta = { label: "Chat WhatsApp", href: "#chat" },
  secondaryCta = null,
  ctaIcon = <WhatsAppIcon />,
  footnote = "No sign up required to get your first rate.",
  titleMaxWidthClass = "max-w-[460px]",
  ctaClassName,
}: CtaBannerProps = {}) {
  const reduce = useReducedMotion();

  return (
    <Section id={id} className="bg-background">
      <Container>
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl px-6 py-16 text-center sm:py-20 lg:py-24"
          style={{ background: "linear-gradient(135deg, #6F45BE, #4A2A8C)" }}
        >
          {/* Chevron texture blended over the purple */}
          <Image
            src={ctaBg}
            alt=""
            fill
            sizes="(max-width: 1320px) 100vw, 1320px"
            className="pointer-events-none object-cover opacity-[0.32] mix-blend-overlay"
          />

          <div className="relative z-10 mx-auto max-w-2xl">
            <h2
              className={cn(
                "mx-auto font-heading text-3xl font-semibold leading-[1.2] tracking-tight text-white sm:text-4xl lg:text-5xl",
                titleMaxWidthClass,
              )}
            >
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[15px] leading-[1.7] text-white/80">
              {subtitle}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              {cta.href === "#chat" ? (
                <WhatsAppCta
                  variant="gold"
                  size="xl"
                  className={cn(
                    "transition-transform hover:-translate-y-0.5",
                    ctaClassName,
                  )}
                >
                  {ctaIcon}
                  {cta.label}
                </WhatsAppCta>
              ) : (
                <Button
                  variant="gold"
                  size="xl"
                  nativeButton={false}
                  className={cn(
                    "transition-transform hover:-translate-y-0.5",
                    ctaClassName,
                  )}
                  render={<a href={cta.href} />}
                >
                  {ctaIcon}
                  {cta.label}
                </Button>
              )}
              {secondaryCta ? (
                <Button
                  variant="hero"
                  size="xl"
                  nativeButton={false}
                  className="transition-transform hover:-translate-y-0.5"
                  render={<a href={secondaryCta.href} />}
                >
                  {secondaryCta.label}
                </Button>
              ) : null}
            </div>

            {footnote ? (
              <p className="mt-5 text-sm text-white/60">{footnote}</p>
            ) : null}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
