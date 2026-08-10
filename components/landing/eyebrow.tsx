import { cn } from "@/lib/utils";

/**
 * Eyebrow — small labelled tag used above headings.
 * Hero uses it as "Zero fees on your first three transactions" (purple, w/ icon).
 */
export function Eyebrow({
  className,
  icon,
  children,
}: {
  className?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-sm font-medium text-brand-purple",
        className,
      )}
    >
      {icon ? (
        <span className="inline-flex size-5 items-center justify-center [&_svg]:size-5">
          {icon}
        </span>
      ) : null}
      {children}
    </span>
  );
}
