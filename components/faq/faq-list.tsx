import { ChevronDown } from "lucide-react";

import { Container, Section } from "@/components/landing/container";
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

/**
 * FaqList — category jump links plus native <details> accordions, so every
 * answer is server-rendered and crawlable without client JS.
 */
export function FaqList() {
  return (
    <Section className="bg-background">
      <Container className="grid gap-10 lg:grid-cols-[260px_1fr] lg:gap-16">
        {/* Category nav */}
        <nav aria-label="FAQ categories" className="lg:sticky lg:top-28 lg:self-start">
          <p className="font-heading text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Categories
          </p>
          <ul className="mt-4 flex flex-wrap gap-2 lg:flex-col lg:gap-1">
            {FAQ_CATEGORIES.map((category) => (
              <li key={category.id}>
                <a
                  href={`#${category.id}`}
                  className="block rounded-full border border-white/10 px-4 py-2 text-sm text-foreground transition-colors hover:border-brand-purple/50 hover:text-brand-gold lg:rounded-lg lg:border-transparent lg:px-3"
                >
                  {category.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Questions */}
        <div className="space-y-14">
          {FAQ_CATEGORIES.map((category) => (
            <div key={category.id} id={category.id} className="scroll-mt-28">
              <h2 className="font-heading text-2xl font-semibold text-foreground-strong">
                {category.title}
              </h2>
              <div className="mt-6 space-y-3">
                {category.items.map((item) => (
                  <details
                    key={item.question}
                    className="group rounded-xl border border-white/10 bg-white/[0.03] transition-colors open:border-brand-purple/40 open:bg-white/[0.05]"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-heading text-base font-semibold text-foreground-strong [&::-webkit-details-marker]:hidden">
                      {item.question}
                      <ChevronDown
                        aria-hidden
                        className="size-5 shrink-0 text-brand-purple transition-transform duration-200 group-open:rotate-180"
                      />
                    </summary>
                    <div className="px-5 pb-5">
                      <Answer blocks={item.answer} />
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
