import type { Metadata } from "next";

import { PartnerHero } from "@/components/partner/hero";
import { PartnershipCards } from "@/components/partner/partnership-cards";
import { WhyPartner } from "@/components/partner/why-partner";
import { PartnerTestimonials } from "@/components/partner/testimonials";
import { ProcessSteps } from "@/components/partner/process-steps";
import { EnquiryForm } from "@/components/partner/enquiry-form";
import { CtaBanner } from "@/components/landing/cta-banner";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Partner With Us | TradeWithCEO",
  description:
    "Multiple ways to partner with TradeWithCEO — client referrals, business integration, affiliate income, or a corporate exchange arrangement.",
  path: "/partner",
  image: "/partner-with-us-hero-img.png",
});

export default function PartnerPage() {
  return (
    <main className="flex-1">
      <PartnerHero />
      <PartnershipCards />
      <WhyPartner />
      <PartnerTestimonials />
      <ProcessSteps />
      <CtaBanner
        id="unsure"
        title="Unsure Which Partnership Model Is the Right Fit?"
        subtitle="Contact our team directly. We will assess your situation and recommend the most appropriate structure."
        cta={{ label: "Contact Our Partnership Team", href: "#enquiry" }}
        secondaryCta={null}
        ctaIcon={null}
        footnote={null}
        titleMaxWidthClass="max-w-[680px]"
        ctaClassName="border border-brand-gold/50 bg-transparent text-brand-gold hover:bg-brand-gold/10"
      />
      <EnquiryForm />
    </main>
  );
}
