"use client";

import { useCallback, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";
import { Container, Section } from "@/components/landing/container";
import type { Testimonial } from "@/components/landing/testimonials";

import quoteIcon from "@/public/quote-testimonial-icon.svg";

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
}

function Card({ t }: { t: Testimonial }) {
  return (
    <div
      data-card
      className="snap-start shrink-0 basis-full pr-6 last:pr-0 sm:basis-1/2 lg:basis-1/3"
    >
      <div className="flex h-full flex-col rounded-lg bg-gradient-to-br from-[#6b4fb3] to-[#432c86] p-6 ring-1 ring-inset ring-white/10">
        <Image src={quoteIcon} alt="" className="h-auto w-6" />
        <p className="mt-4 flex-1 text-sm leading-[1.8] text-white/90">
          {t.quote}
        </p>
        <div className="mt-10 flex items-center gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/20 text-sm font-semibold text-white">
            {initials(t.name)}
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold text-white">{t.name}</div>
            <div className="text-xs text-white/70">{t.role}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Shared scroll-snap testimonial carousel — heading content (eyebrow, copy,
 * colored spans, whatever a given page needs) is supplied by the caller;
 * this owns only the carousel mechanics (scroller ref, arrows, dots) that
 * would otherwise be duplicated per page.
 */
export function TestimonialCarousel({
  id,
  testimonials,
  heading,
}: {
  id: string;
  testimonials: Testimonial[];
  heading: ReactNode;
}) {
  const reduce = useReducedMotion();
  const scroller = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const step = useCallback(() => {
    const el = scroller.current;
    if (!el) return 0;
    const card = el.querySelector<HTMLElement>("[data-card]");
    return card ? card.offsetWidth : el.clientWidth;
  }, []);

  const onScroll = useCallback(() => {
    const el = scroller.current;
    const s = step();
    if (!el || !s) return;
    setActive(Math.round(el.scrollLeft / s));
  }, [step]);

  const scrollToIndex = useCallback(
    (i: number) => {
      const el = scroller.current;
      if (!el) return;
      const clamped = Math.max(0, Math.min(i, testimonials.length - 1));
      el.scrollTo({ left: clamped * step(), behavior: "smooth" });
    },
    [step, testimonials.length],
  );

  return (
    <Section id={id} className="bg-[#0d0f1a]">
      <Container>
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          {heading}
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-14 max-w-[960px] lg:mt-16"
        >
          {/* Track */}
          <div
            ref={scroller}
            onScroll={onScroll}
            className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {testimonials.map((t) => (
              <Card key={t.name} t={t} />
            ))}
          </div>

          {/* Arrows */}
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => scrollToIndex(active - 1)}
            className="absolute -left-3 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-bg-hero/70 text-foreground-strong backdrop-blur transition-colors hover:bg-bg-hero disabled:opacity-40 lg:-left-5"
            disabled={active === 0}
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => scrollToIndex(active + 1)}
            className="absolute -right-3 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-bg-hero/70 text-foreground-strong backdrop-blur transition-colors hover:bg-bg-hero disabled:opacity-40 lg:-right-5"
            disabled={active >= testimonials.length - 1}
          >
            <ChevronRight className="size-5" />
          </button>
        </motion.div>

        {/* Dots */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              type="button"
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => scrollToIndex(i)}
              className={cn(
                "h-2 rounded-full transition-all",
                i === active
                  ? "w-6 bg-brand-purple"
                  : "w-2 bg-white/20 hover:bg-white/40",
              )}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
