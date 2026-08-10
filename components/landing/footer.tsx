import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/landing/container";
import { Logo } from "@/components/landing/icons";

import googleBadge from "@/public/get-on-google.png";
import appStoreBadge from "@/public/get-on-app-store.png";

type IconProps = React.SVGProps<SVGSVGElement>;

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073c0 6.026 4.388 11.02 10.125 11.927v-8.437H7.078v-3.49h3.047V9.43c0-3.023 1.792-4.694 4.533-4.694 1.312 0 2.686.236 2.686.236v2.971H15.83c-1.491 0-1.956.93-1.956 1.886v2.264h3.328l-.532 3.49h-2.796v8.437C19.612 23.094 24 18.1 24 12.073z" />
    </svg>
  );
}

function InstagramIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.6" cy="6.4" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function XIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function LinkedinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
    </svg>
  );
}

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#what-we-do" },
  { label: "Services", href: "/products" },
  { label: "FAQ", href: "/" },
];

const SOCIALS = [
  { label: "Facebook", href: "#", Icon: FacebookIcon },
  { label: "Instagram", href: "#", Icon: InstagramIcon },
  { label: "X", href: "#", Icon: XIcon },
  { label: "LinkedIn", href: "#", Icon: LinkedinIcon },
];

export function Footer() {
  return (
    <footer id="partner" className="border-t border-white/5 bg-[#0d0f1a]">
      <Container className="py-16 lg:py-20">
        {/* Top: brand + newsletter */}
        <div className="flex flex-col gap-8 border-b border-white/5 pb-12 lg:flex-row lg:items-center lg:justify-between">
          <Logo />
          <form
            className="flex w-full max-w-md items-center gap-2"
            aria-label="Subscribe for updates"
          >
            <label htmlFor="footer-newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="footer-newsletter-email"
              type="email"
              required
              placeholder="Enter your email"
              className="h-12 flex-1 rounded-lg border border-white/15 bg-white/5 px-4 text-sm text-foreground-strong placeholder:text-muted-foreground focus:border-brand-purple focus:outline-none"
            />
            <button
              type="submit"
              className="h-12 shrink-0 rounded-lg bg-white px-5 font-heading text-sm font-semibold text-[#16192c] transition-colors hover:bg-white/90"
            >
              Stay Connected
            </button>
          </form>
        </div>

        {/* Main columns */}
        <div className="grid gap-12 py-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1.1fr]">
          <div>
            <h3 className="font-heading text-3xl font-semibold leading-tight text-foreground-strong">
              Stay Connected
              <br />
              with us
            </h3>
            <div className="mt-6 flex items-center gap-5">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-foreground-strong/90 transition-colors hover:text-brand-gold"
                >
                  <Icon className="size-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Quick Links
            </h4>
            <ul className="mt-5 space-y-3.5">
              {QUICK_LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-foreground transition-colors hover:text-brand-gold"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Contact
            </h4>
            <ul className="mt-5 space-y-3.5 text-sm text-foreground">
              <li>
                <a
                  href="mailto:info@tradewithceo.com"
                  className="transition-colors hover:text-brand-gold"
                >
                  info@tradewithceo.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+2349056491780"
                  className="transition-colors hover:text-brand-gold"
                >
                  +234 905 649 1780
                </a>
              </li>
            </ul>

            <p className="mt-6 font-heading text-sm font-semibold text-foreground-strong">
              Download App
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <a href="#" aria-label="Get it on Google Play">
                <Image
                  src={googleBadge}
                  alt="Get it on Google Play"
                  className="h-10 w-auto"
                />
              </a>
              <a href="#" aria-label="Download on the App Store">
                <Image
                  src={appStoreBadge}
                  alt="Download on the App Store"
                  className="h-10 w-auto"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-3 border-t border-white/5 pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 TradeWithCEO. All Rights Reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-foreground-strong">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-foreground-strong">
              Terms of Service
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
