import type { Metadata } from "next";
import Link from "next/link";

import { LegalPage } from "@/components/legal/legal-page";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy | TradeWithCEO",
  description:
    "How TradeWithCEO collects, uses, shares, and protects your personal information when you use our crypto exchange services.",
  path: "/privacy",
  image: "/hero/phone.png",
});

const LAST_UPDATED = "October 1, 2026";

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="This Privacy Policy explains how TradeWithCEO collects, uses, shares, and protects your personal information when you use our website and services."
      lastUpdated={LAST_UPDATED}
    >
      <h2 id="introduction">1. Introduction</h2>
      <p>
        TradeWithCEO (&ldquo;TradeWithCEO&rdquo;, &ldquo;we&rdquo;,
        &ldquo;us&rdquo; or &ldquo;our&rdquo;) provides a platform that helps
        people buy, sell, and manage cryptocurrency, including Bitcoin (BTC),
        Ethereum (ETH), and Tether (USDT). We are committed to protecting your
        privacy and handling your personal information responsibly and in
        accordance with the Nigeria Data Protection Act, 2023 (the
        &ldquo;NDPA&rdquo;) and other applicable laws.
      </p>
      <p>
        This Policy applies to information we collect through our website at{" "}
        <a href="https://tradewithceo.com">tradewithceo.com</a>, our mobile
        applications, and any related services (together, the
        &ldquo;Services&rdquo;). By using the Services, you agree to the
        collection and use of information as described in this Policy.
      </p>

      <h2 id="information-we-collect">2. Information We Collect</h2>
      <p>We collect the following categories of personal information:</p>

      <h3>2.1 Account and contact information</h3>
      <p>
        Your name, email address, phone number, and any details you provide when
        you create an account, subscribe to updates, or contact us.
      </p>

      <h3>2.2 Identity verification (KYC) information</h3>
      <p>
        To comply with applicable anti-money-laundering (&ldquo;AML&rdquo;) and
        know-your-customer (&ldquo;KYC&rdquo;) requirements, we collect
        information needed to verify your identity before you transact. This may
        include your date of birth, residential address, a government-issued
        identification document (such as a national ID, passport, or
        driver&rsquo;s licence), a photograph or selfie, and proof of address.
      </p>

      <h3>2.3 Transaction information</h3>
      <p>
        Details of the exchanges you carry out through the Services, including
        the assets involved, amounts, exchange rates, wallet addresses, bank or
        payment details used to settle a transaction, and timestamps.
      </p>

      <h3>2.4 Usage and device information</h3>
      <p>
        Information about how you access and use the Services, such as your IP
        address, browser type, device identifiers, pages viewed, and the dates
        and times of your visits. This is collected through cookies and similar
        technologies (see Section 5).
      </p>

      <h3>2.5 Communications</h3>
      <p>
        Records of your correspondence with us, including support requests,
        chat messages, and feedback.
      </p>

      <h2 id="how-we-use">3. How We Use Your Information</h2>
      <p>We use your personal information to:</p>
      <ul>
        <li>Provide, operate, and maintain the Services;</li>
        <li>Process and settle your transactions and lock in agreed rates;</li>
        <li>
          Verify your identity and meet our KYC, AML, and other legal and
          regulatory obligations;
        </li>
        <li>
          Detect, prevent, and investigate fraud, security incidents, and other
          prohibited or unlawful activity;
        </li>
        <li>Provide customer support and respond to your enquiries;</li>
        <li>
          Send you service-related communications and, where you have opted in,
          marketing updates about our products and offers;
        </li>
        <li>
          Analyse and improve the Services, including through usage analytics;
          and
        </li>
        <li>Comply with applicable laws and enforce our agreements.</li>
      </ul>

      <h2 id="legal-bases">4. Legal Bases for Processing</h2>
      <p>
        Under the NDPA, we process your personal information where it is
        necessary to perform our contract with you, to comply with a legal
        obligation, to pursue our legitimate interests (such as securing and
        improving the Services and preventing fraud) in a way that does not
        override your rights, or where you have given your consent (for example,
        for marketing communications).
      </p>

      <h2 id="cookies">5. Cookies and Analytics</h2>
      <p>
        We use cookies and similar technologies to operate the website, remember
        your preferences, and understand how the Services are used.
      </p>
      <ul>
        <li>
          <strong>Essential cookies</strong> are strictly necessary for the
          website to function and cannot be switched off in our systems.
        </li>
        <li>
          <strong>Analytics cookies</strong> help us understand how visitors
          interact with the Services so we can measure and improve performance.
          We may use third-party analytics providers for this purpose.
        </li>
      </ul>
      <p>
        You can control or disable cookies through your browser settings,
        although some parts of the Services may not work properly as a result.
      </p>

      <h2 id="marketing">6. Marketing Communications</h2>
      <p>
        If you subscribe to our newsletter or otherwise opt in, we may send you
        marketing emails about our products, services, and promotions. You can
        unsubscribe at any time using the link in each email or by contacting us
        at <a href="mailto:info@tradewithceo.com">info@tradewithceo.com</a>. We
        will continue to send you non-marketing, service-related messages where
        necessary.
      </p>

      <h2 id="how-we-share">7. How We Share Your Information</h2>
      <p>
        We do not sell your personal information. We may share it with:
      </p>
      <ul>
        <li>
          <strong>Service providers</strong> who perform functions on our
          behalf, such as identity verification, payment processing, hosting,
          analytics, and customer support, under obligations of confidentiality;
        </li>
        <li>
          <strong>Payment and blockchain networks</strong> necessary to complete
          your transactions. Please note that transactions recorded on a public
          blockchain are, by their nature, public and permanent;
        </li>
        <li>
          <strong>Regulators, law enforcement, and other authorities</strong>{" "}
          where required by law, regulation, legal process, or to protect our
          rights, users, or the public; and
        </li>
        <li>
          <strong>Successors</strong> in connection with a merger, acquisition,
          financing, or sale of assets, subject to this Policy.
        </li>
      </ul>

      <h2 id="international-transfers">8. International Transfers</h2>
      <p>
        Some of our service providers may be located outside Nigeria. Where we
        transfer your personal information across borders, we take steps to
        ensure it is protected in accordance with the NDPA, including by using
        providers that offer an adequate level of protection or by putting
        appropriate safeguards in place.
      </p>

      <h2 id="retention">9. Data Retention</h2>
      <p>
        We retain your personal information for as long as needed to provide the
        Services and to comply with our legal, regulatory, tax, accounting, and
        record-keeping obligations. KYC and transaction records are typically
        retained for the period required by applicable AML laws after your
        relationship with us ends. When information is no longer needed, we
        securely delete or anonymise it.
      </p>

      <h2 id="security">10. Data Security</h2>
      <p>
        We implement appropriate technical and organisational measures designed
        to protect your personal information against unauthorised access, loss,
        misuse, or alteration. However, no method of transmission or storage is
        completely secure, and we cannot guarantee absolute security. You are
        responsible for keeping your account credentials confidential.
      </p>

      <h2 id="your-rights">11. Your Rights</h2>
      <p>
        Subject to applicable law, you have the right to:
      </p>
      <ul>
        <li>Access the personal information we hold about you;</li>
        <li>Request correction of inaccurate or incomplete information;</li>
        <li>Request deletion of your information in certain circumstances;</li>
        <li>Object to or restrict certain processing;</li>
        <li>Withdraw consent where processing is based on consent; and</li>
        <li>Lodge a complaint with the Nigeria Data Protection Commission.</li>
      </ul>
      <p>
        To exercise any of these rights, contact us at{" "}
        <a href="mailto:info@tradewithceo.com">info@tradewithceo.com</a>. We may
        need to verify your identity before responding.
      </p>

      <h2 id="children">12. Children&rsquo;s Privacy</h2>
      <p>
        The Services are not directed to anyone under 18 years of age, and we do
        not knowingly collect personal information from children. If you believe
        a child has provided us with personal information, please contact us so
        we can delete it.
      </p>

      <h2 id="third-party-links">13. Third-Party Links</h2>
      <p>
        The Services may contain links to third-party websites or services that
        we do not control. This Policy does not apply to those third parties,
        and we encourage you to review their privacy policies.
      </p>

      <h2 id="changes">14. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. When we do, we will
        revise the &ldquo;Last updated&rdquo; date above and, where appropriate,
        notify you. Your continued use of the Services after changes take effect
        constitutes acceptance of the updated Policy.
      </p>

      <h2 id="contact">15. Contact Us</h2>
      <p>
        If you have any questions about this Policy or how we handle your
        personal information, please contact us:
      </p>
      <ul>
        <li>
          Email:{" "}
          <a href="mailto:info@tradewithceo.com">info@tradewithceo.com</a>
        </li>
        <li>
          Phone: <a href="tel:+2349056491780">+234 905 649 1780</a>
        </li>
      </ul>

      <p>
        See also our{" "}
        <Link href="/terms">Terms of Service</Link>.
      </p>
    </LegalPage>
  );
}
