"use client";

import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "motion/react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Container, Section } from "@/components/landing/container";
import { Eyebrow } from "@/components/landing/eyebrow";
import { CheckList } from "@/components/products/check-list";
import { EyebrowDot } from "@/components/products/eyebrow-dot";

export type Product = {
  id?: string;
  eyebrow: string;
  title: string;
  intro: string;
  bullets: string[];
  cta: { label: string; href: string; variant: "purple" | "gold" };
  /** Framed card image. `src` is a public path; drop the PNG there. */
  image: { src: string; alt: string };
  /** Which side the image sits on at lg+ (mobile always stacks image on top). */
  imageSide: "left" | "right";
};

/**
 * ProductRow — one product feature block: eyebrow tag + heading + intro +
 * ticked bullet list + CTA, paired with a framed image that alternates side.
 * Reused for all four products; only the data differs.
 */
export function ProductRow({ product }: { product: Product }) {
  const reduce = useReducedMotion();
  const { id, eyebrow, title, intro, bullets, cta, image, imageSide } = product;
  const imageRight = imageSide === "right";

  const fade: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <Section id={id} className="scroll-mt-24 bg-background">
      <Container>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-stretch lg:gap-24">
          {/* Image (framed rounded card). DOM-first so it stacks on top on
              mobile; lg:order controls the desktop side. */}
          <motion.div
            variants={fade}
            initial={reduce ? false : "hidden"}
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className={cn(
              "relative w-full lg:w-[42%] lg:shrink-0",
              imageRight ? "lg:order-2" : "lg:order-1",
            )}
          >
            <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] bg-glow-cyan/8 blur-[80px]" />
            {/* Images are pre-framed cards (own rounded corners/border), so we
                contain them (no crop, no double-frame). Height tracks the text. */}
            <div
              className="aspect-[11/10] w-full bg-contain bg-center bg-no-repeat lg:aspect-auto lg:h-full"
              style={{ backgroundImage: `url('${image.src}')` }}
              role="img"
              aria-label={image.alt}
            />
          </motion.div>

          {/* Text */}
          <motion.div
            variants={fade}
            initial={reduce ? false : "hidden"}
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className={cn(
              "lg:flex-1",
              imageRight ? "lg:order-1" : "lg:order-2",
            )}
          >
            <Eyebrow icon={<EyebrowDot />}>{eyebrow}</Eyebrow>

            <h2 className="mt-4 font-heading text-xl font-semibold leading-snug tracking-tight text-foreground-strong">
              {title}
            </h2>

            <p className="mt-5 text-[15px] leading-[1.9] text-muted-foreground">
              {intro}
            </p>

            <div className="mt-7">
              <CheckList items={bullets} />
            </div>

            <div className="mt-9">
              <Button
                variant={cta.variant}
                size="xl"
                nativeButton={false}
                className="group/cta transition-transform hover:-translate-y-0.5"
                render={<a href={cta.href} />}
              >
                {cta.label}
                <ArrowRight className="transition-transform group-hover/cta:translate-x-0.5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
