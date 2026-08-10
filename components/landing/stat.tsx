import { cn } from "@/lib/utils";

/**
 * Stat — a single metric (value + label). Hero uses three:
 * 5,000+ / Transactions Completed · 20+ / Assets Supported · 24/7 / Human support
 */
export function Stat({
  value,
  label,
  className,
}: {
  value: string;
  label: string;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col", className)}>
      <span className="font-heading text-3xl font-extrabold leading-none tracking-tight text-foreground-strong sm:text-4xl">
        {value}
      </span>
      <span className="mt-1.5 text-sm text-muted-foreground">{label}</span>
    </div>
  );
}
