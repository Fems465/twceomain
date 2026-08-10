import { TestimonialCarousel } from "@/components/landing/testimonial-carousel";

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

// NOTE: first two quotes are from the Figma design; the rest are placeholder
// copy in the same voice — swap for real testimonials when available.
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Over the past six months I have referred more than 40 clients to TradeWithCEO. Every exchange has been completed without issue and my commission has always been paid on time. That level of consistency is difficult to find.",
    name: "John I. Doe",
    role: "Referral Partner",
  },
  {
    quote:
      "Integrating TradeWithCEO into our remittance operations had an immediate impact. Our clients no longer had to wait for their funds because the turnaround was instant. The difference was clear from the first transaction.",
    name: "Jane T. Doe",
    role: "Operations Lead",
  },
  {
    quote:
      "I was skeptical about a WhatsApp-based service at first, but the rate was locked exactly as promised and the funds landed in minutes. It is now the only way I move money.",
    name: "Michael A. Doe",
    role: "Business Owner",
  },
  {
    quote:
      "Getting paid by international clients used to take days. With TradeWithCEO I get my rate confirmed up front and settle the same hour, every single time.",
    name: "Sarah K. Doe",
    role: "Freelance Designer",
  },
  {
    quote:
      "What sold me was the human support. A real person answered at 1am and walked me through everything. No bots, no tickets, no waiting around.",
    name: "David O. Doe",
    role: "Active Trader",
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
