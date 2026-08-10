import { cn } from "@/lib/utils";

/**
 * Container — centers content and applies the site's horizontal gutters.
 * Figma content width ≈ 1200px inside a 1440 frame; mobile-first padding.
 */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        // Figma: content gutter ≈ 123px on a 1440 frame → max-w 1320 + 64px lg padding
        "mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-16",
        className,
      )}
    >
      {children}
    </div>
  );
}

/**
 * Section — vertical rhythm wrapper for each landing section.
 */
export function Section({
  className,
  children,
  id,
}: {
  className?: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn("relative w-full py-16 sm:py-20 lg:py-28", className)}
    >
      {children}
    </section>
  );
}
