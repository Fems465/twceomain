import type { Metadata } from "next";

import { LegalPage } from "@/components/legal/legal-page";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Cookie Policy | TradeWithCEO",
  description:
    "How TradeWithCEO uses cookies and similar technologies on its website, and how you can manage them.",
  path: "/cookies",
  image: "/hero/phone.png",
});

const LAST_UPDATED = "October 14, 2026";

export default function CookiePolicyPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      intro="This Cookie Policy explains how TradeWithCEO uses cookies and similar technologies on our website."
      lastUpdated={LAST_UPDATED}
    >
      <h2 id="what-are-cookies">What Are Cookies?</h2>
      <p>
        Cookies are small text files placed on your device when you visit a
        website. They help websites operate properly, remember preferences,
        understand how visitors use the website and improve user experience.
      </p>
      <p>
        TradeWithCEO (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;)
        uses cookies and similar technologies on{" "}
        <a href="https://www.tradewithceo.com/">https://www.tradewithceo.com/</a>
        .
      </p>

      <h2 id="types">Types of Cookies We May Use</h2>

      <h3>a. Strictly Necessary Cookies</h3>
      <p>
        These cookies are necessary for the website to operate and cannot
        generally be disabled through our website settings.
      </p>
      <p>They may support:</p>
      <ul>
        <li>website security;</li>
        <li>navigation;</li>
        <li>basic functionality;</li>
        <li>session management; and</li>
        <li>other essential website functions.</li>
      </ul>

      <h3>b. Preference Cookies</h3>
      <p>
        These cookies may remember choices such as language, preferences or
        other settings.
      </p>

      <h3>c. Analytics Cookies</h3>
      <p>Where enabled, analytics cookies help us understand:</p>
      <ul>
        <li>how visitors use the website;</li>
        <li>which pages are visited;</li>
        <li>website performance;</li>
        <li>traffic sources; and</li>
        <li>areas requiring improvement.</li>
      </ul>

      <h3>d. Marketing Cookies</h3>
      <p>
        Where used and permitted, marketing cookies may help us measure
        advertising campaigns and provide more relevant communications.
      </p>

      <h2 id="third-party">Third-Party Cookies</h2>
      <p>
        Some third-party providers used by TradeWithCEO may place cookies or
        similar technologies on your device.
      </p>
      <p>
        These providers may include analytics, security, communications,
        payment, advertising or other technology providers.
      </p>
      <p>Their processing is subject to their own privacy policies and terms.</p>

      <h2 id="managing">Managing Cookies</h2>
      <p>You may control or disable certain cookies through your browser settings.</p>
      <p>Disabling necessary cookies may affect the functionality of the website.</p>
      <p>
        Where required by applicable law, TradeWithCEO will provide appropriate
        cookie controls or consent mechanisms.
      </p>

      <h2 id="changes">Changes To This Cookie Policy</h2>
      <p>We may update this Cookie Policy periodically.</p>
      <p>
        Any changes will be published on this page together with the revised
        &ldquo;Last Updated&rdquo; date.
      </p>

      <h2 id="contact">Contact</h2>
      <p>Questions concerning cookies may be sent to:</p>
      <p>
        <strong>TradeWithCEO</strong>
        <br />
        Email: <a href="mailto:info@tradewithceo.com">info@tradewithceo.com</a>
        <br />
        Telephone/WhatsApp:{" "}
        <a href="tel:+2349056491780">+234 905 649 1780</a>
      </p>
    </LegalPage>
  );
}
