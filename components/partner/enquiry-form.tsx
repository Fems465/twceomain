"use client";

import { useState, type FormEvent } from "react";
import { ChevronDown, CircleCheck } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Container, Section } from "@/components/landing/container";
import { FacebookIcon, XIcon, LinkedinIcon } from "@/components/landing/footer";

const PARTNERSHIP_TYPES = [
  "Referral Partner",
  "Business Integration",
  "Affiliate Programme",
  "Institutional & Corporate",
  "Not Sure Yet",
];

const SOCIALS = [
  { label: "Facebook", href: "#", Icon: FacebookIcon },
  { label: "X", href: "#", Icon: XIcon },
  { label: "LinkedIn", href: "#", Icon: LinkedinIcon },
];

type FormState = {
  name: string;
  email: string;
  whatsapp: string;
  partnershipType: string;
  overview: string;
};

const INITIAL_STATE: FormState = {
  name: "",
  email: "",
  whatsapp: "",
  partnershipType: "",
  overview: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const fieldClass =
  "h-12 w-full rounded-md border border-white/15 bg-white/5 px-4 text-sm text-foreground-strong placeholder:text-muted-foreground focus:border-brand-purple focus:outline-none";

function Label({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-2 block text-sm font-medium text-foreground"
    >
      {children}
    </label>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1.5 text-xs text-destructive">
      {message}
    </p>
  );
}

export function EnquiryForm() {
  const reduce = useReducedMotion();
  const [values, setValues] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((v) => ({ ...v, [key]: value }));
  }

  function validate(v: FormState) {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!v.name.trim()) next.name = "Full name is required.";
    if (!v.email.trim()) next.email = "Email address is required.";
    else if (!EMAIL_RE.test(v.email.trim())) next.email = "Enter a valid email address.";
    if (!v.whatsapp.trim()) next.whatsapp = "WhatsApp number is required.";
    if (!v.partnershipType) next.partnershipType = "Select a partnership type.";
    if (!v.overview.trim()) next.overview = "Tell us a little about your situation.";
    else if (v.overview.trim().length < 20)
      next.overview = "Add a bit more detail (at least 20 characters).";
    return next;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const next = validate(values);
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSubmitted(true);
    }
  }

  function reset() {
    setValues(INITIAL_STATE);
    setErrors({});
    setSubmitted(false);
  }

  return (
    <Section id="enquiry" className="scroll-mt-24 bg-background">
      <Container>
        <div className="grid items-start gap-6 lg:grid-cols-[1fr_2fr] lg:gap-8">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-lg bg-surface-2 p-6 sm:p-8"
          >
            <h2 className="font-heading text-3xl font-semibold leading-[1.2] tracking-tight text-foreground-strong sm:text-4xl">
              Submit Your Partnership
              <br />
              Enquiry.
            </h2>
            {/* mt-20 only at lg: the left column is a narrow sidebar next to
                a much taller form there, so the gap balances column height.
                Below lg the columns stack, so keep normal rhythm instead of
                a stray gap between heading and paragraph. */}
            <p className="mt-6 text-[15px] leading-[1.9] text-muted-foreground lg:mt-20">
              Complete the form below and a member of our partnerships team
              will respond within 24 hours. There is no lengthy application
              process and no extended waiting period.
            </p>

            <ul className="mt-8 flex items-center gap-3">
              {SOCIALS.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    className="flex size-9 items-center justify-center rounded-md border border-white/10 bg-white/5 text-foreground-strong transition-colors hover:border-brand-gold/40 hover:text-brand-gold"
                  >
                    <Icon className="size-4" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="rounded-lg bg-surface-2 p-6 sm:p-8"
          >
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-10 text-center">
                <CircleCheck className="size-12 text-brand-purple" />
                <h3 className="mt-5 font-heading text-xl font-semibold text-foreground-strong">
                  Enquiry Received
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  Thank you for reaching out. Our partnerships team will
                  review your submission and get back to you within one
                  business day.
                </p>
                <Button
                  variant="hero"
                  size="xl"
                  className="mt-7"
                  onClick={reset}
                >
                  Submit Another Enquiry
                </Button>
              </div>
            ) : (
              <form noValidate onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="enquiry-name">Full Name</Label>
                  <input
                    id="enquiry-name"
                    type="text"
                    value={values.name}
                    onChange={(e) => set("name", e.target.value)}
                    placeholder="Enter your name"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "enquiry-name-error" : undefined}
                    className={fieldClass}
                  />
                  <FieldError id="enquiry-name-error" message={errors.name} />
                </div>

                <div>
                  <Label htmlFor="enquiry-email">Email address</Label>
                  <input
                    id="enquiry-email"
                    type="email"
                    value={values.email}
                    onChange={(e) => set("email", e.target.value)}
                    placeholder="Enter email address"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "enquiry-email-error" : undefined}
                    className={fieldClass}
                  />
                  <FieldError id="enquiry-email-error" message={errors.email} />
                </div>

                <div>
                  <Label htmlFor="enquiry-whatsapp">WhatsApp Number</Label>
                  <input
                    id="enquiry-whatsapp"
                    type="tel"
                    value={values.whatsapp}
                    onChange={(e) => set("whatsapp", e.target.value)}
                    placeholder="+234 800 000 000"
                    aria-invalid={!!errors.whatsapp}
                    aria-describedby={errors.whatsapp ? "enquiry-whatsapp-error" : undefined}
                    className={fieldClass}
                  />
                  <FieldError id="enquiry-whatsapp-error" message={errors.whatsapp} />
                </div>

                <div>
                  <Label htmlFor="enquiry-partnership-type">Partnership Type</Label>
                  <div className="relative">
                    <select
                      id="enquiry-partnership-type"
                      value={values.partnershipType}
                      onChange={(e) => set("partnershipType", e.target.value)}
                      aria-invalid={!!errors.partnershipType}
                      aria-describedby={
                        errors.partnershipType ? "enquiry-partnership-type-error" : undefined
                      }
                      className={cn(fieldClass, "appearance-none pr-10", {
                        "text-muted-foreground": !values.partnershipType,
                      })}
                    >
                      <option value="" disabled className="text-black">
                        Select a partnership type
                      </option>
                      {PARTNERSHIP_TYPES.map((t) => (
                        <option key={t} value={t} className="text-black">
                          {t}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                  </div>
                  <FieldError
                    id="enquiry-partnership-type-error"
                    message={errors.partnershipType}
                  />
                </div>

                <div>
                  <Label htmlFor="enquiry-overview">Brief Overview of your Situation</Label>
                  <textarea
                    id="enquiry-overview"
                    value={values.overview}
                    onChange={(e) => set("overview", e.target.value)}
                    placeholder="Tell us about your network, volume expectations, or any other relevant details..."
                    rows={4}
                    aria-invalid={!!errors.overview}
                    aria-describedby={errors.overview ? "enquiry-overview-error" : undefined}
                    className={cn(fieldClass, "h-auto resize-none py-3")}
                  />
                  <FieldError id="enquiry-overview-error" message={errors.overview} />
                </div>

                <Button
                  type="submit"
                  variant="purple"
                  size="xl"
                  className="w-full"
                >
                  Submit
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
