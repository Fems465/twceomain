"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/landing/container";
import { Logo } from "@/components/landing/icons";

// Home-page sections use `/#anchor` so they resolve from any route; standalone
// pages (Our Products) are real routes navigated with next/link.
const NAV_LINKS = [
  { label: "What We Do", href: "/#what-we-do" },
  { label: "Our Products", href: "/products" },
  { label: "Our Approach", href: "/approach" },
  { label: "Partner With Us", href: "/partner" },
];

// A link is "active" only for standalone routes (not home-section anchors).
function isActive(href: string, pathname: string) {
  return !href.includes("#") && pathname.startsWith(href);
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "border-b border-white/5 bg-bg-hero/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-22 items-center justify-between">
        <Link href="/" aria-label="TradeWithCEO home" className="shrink-0">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm transition-colors hover:text-brand-gold",
                isActive(link.href, pathname)
                  ? "text-brand-gold"
                  : "text-muted-foreground",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button
            nativeButton={false}
            className="h-10 rounded-full bg-brand-purple px-5 text-sm font-semibold font-heading text-white hover:bg-brand-purple/90"
            render={<Link href="/#download" />}
          >
            Download App
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="inline-flex size-10 items-center justify-center rounded-lg text-foreground-strong transition-colors hover:bg-white/10 lg:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </Container>

      {/* Mobile menu */}
      <AnimatePresence>
        {open ? (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-white/5 bg-bg-hero/95 backdrop-blur-md lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-lg px-2 py-3 text-base transition-colors hover:bg-white/5 hover:text-brand-gold",
                    isActive(link.href, pathname)
                      ? "text-brand-gold"
                      : "text-foreground",
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                nativeButton={false}
                className="mt-2 h-11 w-full rounded-full bg-brand-purple text-sm font-semibold font-heading text-white hover:bg-brand-purple/90"
                render={<Link href="/#download" onClick={() => setOpen(false)} />}
              >
                Download App
              </Button>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
