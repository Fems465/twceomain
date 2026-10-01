import Image from "next/image";

import { Container } from "@/components/landing/container";

import heroBg from "@/public/hero/hero-bg.webp";

/**
 * LegalPage — shared chrome for long-form legal documents (Privacy Policy,
 * Terms of Service). Renders a compact hero header and a readable prose column.
 * Content is passed as children and styled via the `.legal-prose` rules in
 * globals.css, so page files stay content-only.
 */
export function LegalPage({
  title,
  intro,
  lastUpdated,
  children,
}: {
  title: string;
  intro?: string;
  lastUpdated: string;
  children: React.ReactNode;
}) {
  return (
    <main className="flex-1">
      {/* Header */}
      <section className="relative isolate overflow-hidden bg-bg-hero pt-28 pb-14 lg:pt-36 lg:pb-20">
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute right-[4%] top-[2%] aspect-square w-[40%] rounded-full bg-brand-purple/15 blur-[130px]" />
          <div className="absolute -left-[12%] top-[30%] aspect-square w-[30%] rounded-full bg-glow-cyan/10 blur-[120px]" />
        </div>
        <Image
          src={heroBg}
          alt=""
          fill
          priority
          sizes="100vw"
          className="pointer-events-none z-0 select-none object-cover object-top opacity-40 mix-blend-soft-light"
        />
        <Container className="relative z-10">
          <p className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-brand-purple">
            Legal
          </p>
          <h1 className="mt-4 font-heading text-3xl font-semibold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[44px]">
            {title}
          </h1>
          {intro ? (
            <p className="mt-5 max-w-2xl text-base leading-[1.9] text-foreground">
              {intro}
            </p>
          ) : null}
          <p className="mt-6 text-sm text-muted-foreground">
            Last updated: {lastUpdated}
          </p>
        </Container>
      </section>

      {/* Body */}
      <section className="py-14 lg:py-20">
        <Container>
          <div className="legal-prose max-w-3xl">{children}</div>
        </Container>
      </section>
    </main>
  );
}
