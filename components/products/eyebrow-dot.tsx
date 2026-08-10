/**
 * EyebrowDot — the purple halo dot used as the eyebrow marker across the
 * Products page. Inline width/height beats the Eyebrow wrapper's [&_svg]:size-5.
 */
export function EyebrowDot() {
  return (
    <svg
      viewBox="0 0 13 13"
      fill="none"
      aria-hidden
      style={{ width: 13, height: 13 }}
      className="shrink-0 text-brand-purple"
    >
      <rect
        width="13"
        height="13"
        rx="6.5"
        fill="currentColor"
        fillOpacity="0.29"
      />
      <rect
        x="4"
        y="4"
        width="5"
        height="5"
        rx="2.5"
        fill="currentColor"
        fillOpacity="0.88"
      />
    </svg>
  );
}
