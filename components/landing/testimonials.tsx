import { TestimonialCarousel } from "@/components/landing/testimonial-carousel";

export type Testimonial = {
  quote: string;
  name: string;
  role?: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Traded with TWCEO a couple of times and the transactions have been smooth, with payments coming in on time.",
    name: "Sotonye Kalio",
  },
  {
    quote:
      "Their rates are good, and I like that I don't have to wait forever to get my payment.",
    name: "Chizi Amadi",
  },
  {
    quote:
      "Honestly, the whole process was easy and my payment came through without any issues.",
    name: "David Igbeta",
  },
  {
    quote: "Good rates, fast transactions, and secure payments.",
    name: "Ronald Dappa",
  },
  {
    quote:
      "I've had a good experience with TWCEO so far, and the quick payments make trading with them convenient.",
    name: "Timileyin Adeola",
  },
];

export function Testimonials() {
  return (
    <TestimonialCarousel
      id="testimonials"
      testimonials={TESTIMONIALS}
      heading={
        <h2 className="font-heading text-3xl font-semibold leading-[1.3] tracking-tight sm:text-4xl lg:text-[40px] lg:leading-tight">
          <span className="text-brand-gold">5,000 Transactions </span>
          <span className="text-foreground-strong">Completed.</span>
          <br />
          <span className="text-foreground-strong">
            Here Is What People Say About Them.
          </span>
        </h2>
      }
    />
  );
}
