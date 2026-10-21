"use client";

import { useEffect, useState } from "react";
import { Accordion } from "@base-ui/react/accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Container, Section } from "@/components/landing/container";
import { Reveal } from "@/components/ui/reveal";
import {
  FAQ_CATEGORIES,
  type FaqBlock,
} from "@/components/faq/faq-data";

function Answer({ blocks }: { blocks: FaqBlock[] }) {
  return (
    <div className="space-y-3 text-[15px] leading-[1.8] text-foreground">
      {blocks.map((block, i) => {
        if (block.type === "p") return <p key={i}>{block.text}</p>;

        const List = block.type;
        return (
          <List
            key={i}
            className={
              block.type === "ol"
                ? "list-decimal space-y-2 pl-5 marker:font-heading marker:text-brand-purple"
                : "list-disc space-y-2 pl-5 marker:text-brand-purple"
            }
          >
            {block.items.map((item) => (
              <li key={item.text} className="pl-1">
                {item.label ? (
                  <>
                    <strong className="font-semibold text-foreground-strong">
                      {item.label}:
                    </strong>{" "}
                  </>
                ) : null}
                {item.text}
              </li>
            ))}
          </List>
        );
      })}
    </div>
  );
}

/** Tracks which category is currently in the reading zone of the viewport. */
function useActiveCategory() {
  const [active, setActive] = useState(FAQ_CATEGORIES[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) setActive(visible[0].target.id);
      },
      // A thin band ~30% down the viewport: whichever section crosses it is active.
      { rootMargin: "-30% 0px -65% 0px" },
    );
    FAQ_CATEGORIES.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return active;
}

/**
 * FaqList — scroll-tracking category nav plus animated accordions. Panels use
 * `hiddenUntilFound`, so closed answers stay in the server-rendered HTML
 * (crawlable, and reachable with the browser's find-in-page).
 */
export function FaqList() {
  const active = useActiveCategory();

  return (
    <Section className="bg-background">
      <Container className="grid gap-10 lg:grid-cols-[260px_1fr] lg:gap-16">
        {/* Category nav */}
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <nav aria-label="FAQ categories">
            <p className="font-heading text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Categories
            </p>
            <ul className="mt-4 flex flex-wrap gap-2 lg:flex-col lg:gap-1">
              {FAQ_CATEGORIES.map((category) => {
                const isActive = category.id === active;
                return (
                  <li key={category.id}>
                    <a
                      href={`#${category.id}`}
                      aria-current={isActive ? "true" : undefined}
                      className={cn(
                        "block rounded-full border px-4 py-2 text-sm transition-all hover:text-brand-gold lg:rounded-lg lg:border-transparent lg:px-3 lg:hover:translate-x-1",
                        isActive
                          ? "border-brand-purple/50 bg-brand-purple/10 text-brand-gold lg:border-transparent"
                          : "border-white/10 text-foreground hover:border-brand-purple/50",
                      )}
                    >
                      {category.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </Reveal>

        {/* Questions */}
        <div className="space-y-14">
          {FAQ_CATEGORIES.map((category) => (
            <Reveal key={category.id}>
              <div id={category.id} className="scroll-mt-28">
                <h2 className="font-heading text-2xl font-semibold text-foreground-strong">
                  {category.title}
                </h2>
                <Accordion.Root className="mt-6 space-y-3">
                  {category.items.map((item) => (
                    <Accordion.Item
                      key={item.question}
                      className="rounded-xl border border-white/10 bg-white/3 transition-colors hover:border-white/20 data-open:border-brand-purple/40 data-open:bg-white/5"
                    >
                      <Accordion.Header>
                        <Accordion.Trigger className="group flex w-full cursor-pointer items-center justify-between gap-4 rounded-xl px-5 py-4 text-left font-heading text-base font-semibold text-foreground-strong transition-colors outline-none hover:text-brand-gold focus-visible:ring-3 focus-visible:ring-ring/50">
                          {item.question}
                          <ChevronDown
                            aria-hidden
                            className="size-5 shrink-0 text-brand-purple transition-transform duration-300 group-data-panel-open:rotate-180"
                          />
                        </Accordion.Trigger>
                      </Accordion.Header>
                      <Accordion.Panel
                        hiddenUntilFound
                        className="h-(--accordion-panel-height) overflow-hidden opacity-100 transition-[height,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] data-ending-style:h-0 data-ending-style:opacity-0 data-starting-style:h-0 data-starting-style:opacity-0"
                      >
                        <div className="px-5 pb-5">
                          <Answer blocks={item.answer} />
                        </div>
                      </Accordion.Panel>
                    </Accordion.Item>
                  ))}
                </Accordion.Root>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
