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
  { label: "FAQ", href: "/faq" },
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
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href, pathname);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "group relative py-2 text-sm transition-colors hover:text-brand-gold",
                  active ? "text-brand-gold" : "text-muted-foreground",
                )}
              >
                {link.label}
                {/* Hover hint grows from the centre; the active bar slides
                    between links on navigation via the shared layoutId. */}
                <span className="absolute inset-x-0 -bottom-0.5 h-px origin-center scale-x-0 bg-brand-gold/50 transition-transform duration-300 group-hover:scale-x-100" />
                {active ? (
                  <motion.span
                    layoutId="nav-active"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    className="absolute inset-x-0 -bottom-0.5 h-px bg-brand-gold"
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button
            nativeButton={false}
            className="h-10 rounded-full bg-brand-purple px-5 text-sm font-semibold font-heading text-white hover:-translate-y-0.5 hover:bg-brand-purple/90 hover:shadow-lg hover:shadow-brand-purple/25"
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
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "open"}
              initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="inline-flex"
            >
              {open ? <X className="size-6" /> : <Menu className="size-6" />}
            </motion.span>
          </AnimatePresence>
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
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.05 + i * 0.05,
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block rounded-lg px-2 py-3 text-base transition-all hover:bg-white/5 hover:pl-3 hover:text-brand-gold",
                      isActive(link.href, pathname)
                        ? "text-brand-gold"
                        : "text-foreground",
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.05 + NAV_LINKS.length * 0.05,
                }}
              >
                <Button
                  nativeButton={false}
                  className="mt-2 h-11 w-full rounded-full bg-brand-purple text-sm font-semibold font-heading text-white hover:bg-brand-purple/90"
                  render={
                    <Link href="/#download" onClick={() => setOpen(false)} />
                  }
                >
                  Download App
                </Button>
              </motion.div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
