"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { Dialog } from "@base-ui/react/dialog";
import { X } from "lucide-react";
import type { VariantProps } from "class-variance-authority";

import { Button, buttonVariants } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/landing/icons";
import { WHATSAPP_URL } from "@/lib/whatsapp";

const REDIRECT_SECONDS = 3;

type WhatsAppCtaProps = VariantProps<typeof buttonVariants> & {
  children: ReactNode;
  className?: string;
};

/**
 * Drop-in replacement for a `Button render={<a href="#chat" />}` WhatsApp
 * link: opens a branded "redirecting…" dialog first, then forwards to
 * WhatsApp in a new tab once the countdown finishes (or the user skips it).
 */
export function WhatsAppCta({
  children,
  className,
  variant,
  size,
}: WhatsAppCtaProps) {
  const [open, setOpen] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(REDIRECT_SECONDS);
  const redirectedRef = useRef(false);

  function handleOpenChange(nextOpen: boolean) {
    if (nextOpen) {
      redirectedRef.current = false;
      setSecondsLeft(REDIRECT_SECONDS);
    }
    setOpen(nextOpen);
  }

  useEffect(() => {
    if (!open) return undefined;

    const tick = setInterval(() => {
      setSecondsLeft((s) => Math.max(0, s - 1));
    }, 1000);

    const redirect = setTimeout(() => {
      redirectedRef.current = true;
      window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
      setOpen(false);
    }, REDIRECT_SECONDS * 1000);

    return () => {
      clearInterval(tick);
      clearTimeout(redirect);
    };
  }, [open]);

  function continueNow() {
    if (redirectedRef.current) return;
    redirectedRef.current = true;
    window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
    setOpen(false);
  }

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      <Dialog.Trigger
        render={<Button variant={variant} size={size} className={className} />}
      >
        {children}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm transition-opacity duration-200 data-ending-style:opacity-0 data-starting-style:opacity-0" />
        <Dialog.Popup className="fixed top-1/2 left-1/2 z-50 w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-border bg-popover p-8 text-center shadow-2xl transition-all duration-200 data-ending-style:scale-95 data-ending-style:opacity-0 data-starting-style:scale-95 data-starting-style:opacity-0">
          <Dialog.Close
            aria-label="Cancel and stay on this page"
            className="absolute top-4 right-4 inline-flex size-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground"
          >
            <X className="size-4" />
          </Dialog.Close>

          <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-brand-green/15 text-brand-green">
            <WhatsAppIcon className="size-7" />
          </div>

          <Dialog.Title className="mt-5 font-heading text-xl font-semibold text-foreground-strong">
            Redirecting you to WhatsApp
          </Dialog.Title>
          <Dialog.Description className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Taking you to chat with our team on WhatsApp — real people, real
            fast.
          </Dialog.Description>

          <div className="mt-6 h-1 w-full overflow-hidden rounded-full bg-white/10">
            {open ? (
              <div className="h-full animate-whatsapp-progress rounded-full bg-brand-green" />
            ) : null}
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Opening in {secondsLeft}s…
          </p>

          <Button
            type="button"
            variant="whatsapp"
            size="xl"
            className="mt-6 w-full"
            onClick={continueNow}
          >
            <WhatsAppIcon />
            Continue now
          </Button>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
