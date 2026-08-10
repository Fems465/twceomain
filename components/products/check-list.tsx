/**
 * CheckList — the feature bullets used inside each ProductRow. Each bullet is
 * marked with the gold triangle from the Figma design.
 */
export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-4">
      {items.map((text) => (
        <li key={text} className="flex items-start gap-3">
          <svg
            width="8"
            height="9"
            viewBox="0 0 8 9"
            fill="none"
            aria-hidden
            className="mt-[7px] shrink-0 text-brand-gold"
          >
            <path
              d="M7.5 4.33008L0 8.66021L0 -4.91142e-05L7.5 4.33008Z"
              fill="currentColor"
            />
          </svg>
          <span className="text-[15px] leading-[1.7] text-muted-foreground">
            {text}
          </span>
        </li>
      ))}
    </ul>
  );
}
