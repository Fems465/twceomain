import { Eyebrow } from "@/components/landing/eyebrow";
import { EyebrowDot } from "@/components/products/eyebrow-dot";
import { TestimonialCarousel } from "@/components/landing/testimonial-carousel";
import { TESTIMONIALS } from "@/components/landing/testimonials";

export function PartnerTestimonials() {
  return (
    <TestimonialCarousel
      id="partner-testimonials"
      testimonials={TESTIMONIALS}
      heading={
        <>
          <div className="flex justify-center">
            <Eyebrow icon={<EyebrowDot />}>From Our Partners</Eyebrow>
          </div>
          <h2 className="mt-4 font-heading text-3xl font-semibold leading-[1.3] tracking-tight text-foreground-strong sm:text-4xl lg:text-[40px] lg:leading-tight">
            Feedback From Individuals and Organisations Already in
            Partnership With Us.
          </h2>
        </>
      }
    />
  );
}
