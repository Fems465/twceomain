"use client";

import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";
import { Container } from "@/components/landing/container";

type Commitment = { title: string; body: string };

const LEFT_COLUMN: Commitment[] = [
  {
    title: "Your Agreed Rate is Final",
    body: "Once your rate is locked, it stays locked. The terms you approve are the exact terms delivered.",
  },
  {
    title: "Funds Are Processed Immediately",
    body: "No holding periods. No delays. Completed exchanges are released immediately.",
  },
];

const RIGHT_COLUMN: Commitment[] = [
  {
    title: "Support is Always Available",
    body: "24/7 human support. Real answers, real assistance, whenever you need it.",
  },
  {
    title: "No Processing Fees",
    body: "What you see is what you pay. No hidden fees. No extra charges.",
  },
];

const ALL_COMMITMENTS = [...LEFT_COLUMN, ...RIGHT_COLUMN];

// Mobile-only: a single neat 1-column stack, each item divided by a hairline.
// Kept separate from the desktop staggered two-column layout below (which it
// replaces via `sm:hidden` / `hidden sm:grid`) rather than reusing its offset
// math, since that math depends on the two-column split.
function MobileStack() {
  return (
    <div className="flex flex-col divide-y divide-black/10 sm:hidden">
      {ALL_COMMITMENTS.map((item) => (
        <div key={item.title} className="py-6 first:pt-0 last:pb-0">
          <h3 className="font-heading text-lg font-semibold text-[#16192c]">
            {item.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[#5b5f6b]">
            {item.body}
          </p>
        </div>
      ))}
    </div>
  );
}

function Column({
  items,
  side,
}: {
  items: Commitment[];
  side: "left" | "right";
}) {
  return (
    <div className="flex flex-col">
      {/* Divider box is widened by half the column gap (in each breakpoint)
          so its bottom border reaches the vertical divider with no gap. */}
      <div
        className={cn(
          "border-b border-black/10 pb-6",
          side === "left" && "sm:w-[calc(100%+1.25rem)] lg:w-[calc(100%+2rem)]",
          side === "right" &&
            "sm:-ml-5 sm:w-[calc(100%+1.25rem)] lg:-ml-8 lg:w-[calc(100%+2rem)]",
        )}
      >
        <h3 className="ml-5 font-heading text-lg font-semibold text-[#16192c]">
          {items[0].title}
        </h3>
        <p className="mt-2 ml-5  text-sm leading-relaxed text-[#5b5f6b]">
          {items[0].body}
        </p>
      </div>
      <div className="pt-10">
        <h3 className="font-heading text-lg font-semibold text-[#16192c]">
          {items[1].title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[#5b5f6b]">
          {items[1].body}
        </p>
      </div>
    </div>
  );
}

export function Commitments() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-[#f4f1ea] py-16 sm:py-20 lg:py-28">
      <Container>
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16"
        >
          <h2 className="font-heading text-3xl font-semibold leading-[1.15] tracking-tight text-[#16192c] sm:text-4xl lg:text-[40px]">
            Our Commitments
            <br className="hidden lg:inline" /> to Every Client
          </h2>

          <MobileStack />

          {/* Staggered two-column layout (sm and up): the right column sits
              higher than the left, so rows don't align — matches the
              reference design rather than a symmetric 2x2 grid. sm:pt-24
              reserves the room the right column's -translate-y-24 rises
              into, so the stagger stays within this wrapper instead of
              eating into the section's own top padding (which stays
              consistent with other sections). Below sm, MobileStack renders
              instead — this layout's divider-box width math only works once
              the two columns actually sit side by side. */}
          <div className="relative hidden gap-x-10 gap-y-10 sm:grid sm:grid-cols-2 sm:gap-y-0 sm:pt-24 lg:gap-x-16">
            {/* Vertical divider spans only the overlap: from the right
                column's (raised) top down to the left column's bottom. */}
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-0 hidden w-px -translate-x-1/2 bg-black/10 sm:bottom-0 sm:block"
            />

            <Column items={LEFT_COLUMN} side="left" />
            <div className="sm:-translate-y-24">
              <Column items={RIGHT_COLUMN} side="right" />
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
