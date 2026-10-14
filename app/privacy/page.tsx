import type { Metadata } from "next";
import Link from "next/link";

import { LegalPage } from "@/components/legal/legal-page";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy | TradeWithCEO",
  description:
    "How TradeWithCEO collects, uses, discloses, stores and protects your personal information when you use our website and services.",
  path: "/privacy",
  image: "/hero/phone.png",
});

const LAST_UPDATED = "October 14, 2026";

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="This Privacy Policy explains how TradeWithCEO collects, uses, discloses, stores and protects your personal information when you use our website and services."
      lastUpdated={LAST_UPDATED}
    >
      <h2 id="introduction">Introduction</h2>
      <p>
        TradeWithCEO (&ldquo;<strong>TradeWithCEO</strong>&rdquo;,
        &ldquo;<strong>we</strong>&rdquo;, &ldquo;<strong>us</strong>&rdquo;,
        or &ldquo;<strong>our</strong>&rdquo;) respects your privacy and is
        committed to protecting personal information entrusted to us.
      </p>
      <p>
        This Privacy Policy explains how we collect, use, disclose, store and
        protect personal information when you visit our website, communicate
        with us, request our services, conduct transactions, contact our support
        team or otherwise interact with TradeWithCEO.
      </p>
      <p>
        This Policy should be read together with our{" "}
        <Link href="/terms">Terms of Use</Link> and{" "}
        <Link href="/cookies">Cookie Policy</Link>.
      </p>

      <h2 id="information-we-collect">Information We Collect</h2>
      <p>Depending on the Services you use, we may collect:</p>

      <h3>a. Identity Information</h3>
      <p>This may include:</p>
      <ul>
        <li>full name;</li>
        <li>date of birth where required;</li>
        <li>nationality;</li>
        <li>government-issued identification;</li>
        <li>photograph;</li>
        <li>signature;</li>
        <li>residential address;</li>
        <li>proof of address; and</li>
        <li>other information required for identity verification.</li>
      </ul>

      <h3>b. Contact Information</h3>
      <p>This may include:</p>
      <ul>
        <li>telephone number;</li>
        <li>WhatsApp number;</li>
        <li>email address;</li>
        <li>business contact information; and</li>
        <li>other communication details.</li>
      </ul>

      <h3>c. Transaction Information</h3>
      <p>We may collect information relating to transactions, including:</p>
      <ul>
        <li>transaction amount;</li>
        <li>currency or digital asset;</li>
        <li>wallet addresses;</li>
        <li>transaction IDs/hash;</li>
        <li>payment information;</li>
        <li>bank account information;</li>
        <li>transaction timestamps;</li>
        <li>source and destination information; and</li>
        <li>transaction history.</li>
      </ul>

      <h3>d. Compliance Information</h3>
      <p>Where required, we may collect:</p>
      <ul>
        <li>source-of-funds information;</li>
        <li>source-of-wealth information;</li>
        <li>occupation/business information;</li>
        <li>information concerning beneficial ownership;</li>
        <li>sanctions/PEP screening information;</li>
        <li>information relating to transaction purpose; and</li>
        <li>information required to comply with AML/CFT/CPF obligations.</li>
      </ul>

      <h3>e. Technical Information</h3>
      <p>When you use our website, we may collect:</p>
      <ul>
        <li>IP address;</li>
        <li>browser type;</li>
        <li>device information;</li>
        <li>operating system;</li>
        <li>approximate location derived from technical information;</li>
        <li>pages visited;</li>
        <li>referring website;</li>
        <li>website activity; and</li>
        <li>cookies and similar technologies.</li>
      </ul>

      <h3>f. Communications</h3>
      <p>
        We may retain communications between you and TradeWithCEO, including
        communications through WhatsApp, email, telephone support, website forms
        and other approved channels, where lawful and necessary.
      </p>

      <h2 id="how-we-collect">How We Collect Information</h2>
      <p>We may collect information:</p>
      <ul>
        <li>directly from you;</li>
        <li>through our website;</li>
        <li>through WhatsApp or other communication channels;</li>
        <li>during KYC/verification;</li>
        <li>when you conduct a transaction;</li>
        <li>from payment and banking partners;</li>
        <li>from identity-verification providers;</li>
        <li>from blockchain and transaction-monitoring tools;</li>
        <li>from fraud-prevention and sanctions-screening providers; and</li>
        <li>from publicly available or legally accessible sources.</li>
      </ul>

      <h2 id="why-we-process">Why We Process Your Information</h2>
      <p>We may process personal information to:</p>
      <ul>
        <li>provide and administer our Services;</li>
        <li>process transactions;</li>
        <li>verify customer identity;</li>
        <li>conduct KYC, CDD and EDD;</li>
        <li>comply with applicable laws and regulatory requirements;</li>
        <li>detect and prevent fraud;</li>
        <li>detect and prevent money laundering and terrorist financing;</li>
        <li>
          screen transactions and customers against applicable sanctions and
          risk databases;
        </li>
        <li>maintain transaction and accounting records;</li>
        <li>communicate with customers;</li>
        <li>provide customer support;</li>
        <li>improve our website and Services;</li>
        <li>maintain security and prevent unauthorised activity;</li>
        <li>investigate complaints and disputes;</li>
        <li>
          comply with lawful requests from regulators, law-enforcement
          authorities and courts; and
        </li>
        <li>
          send marketing communications where permitted and, where required,
          with your consent.
        </li>
      </ul>

      <h2 id="legal-basis">Legal Basis For Processing</h2>
      <p>
        Depending on the circumstances, we may process personal information on
        one or more of the following bases:
      </p>
      <ul>
        <li>
          performance of a contract or steps taken at your request before
          entering into a contract;
        </li>
        <li>compliance with a legal or regulatory obligation;</li>
        <li>protection of legitimate interests;</li>
        <li>consent;</li>
        <li>protection of vital interests; or</li>
        <li>another lawful basis recognised by applicable data-protection law.</li>
      </ul>
      <p>
        Where processing relies on consent, you may withdraw consent where
        legally permitted. Withdrawal will not affect processing already carried
        out lawfully before withdrawal.
      </p>

      <h2 id="kyc-aml">KYC and AML Processing</h2>
      <p>
        Because of the nature of digital-asset services, certain information may
        be required to satisfy regulatory and risk-management obligations.
      </p>
      <p>
        We may use automated and manual verification systems to assess
        identity, transaction and compliance information.
      </p>
      <p>
        Where appropriate, transactions may be delayed, rejected or subjected to
        enhanced review.
      </p>
      <p>
        We will not use privacy rights as a means of circumventing legal
        record-retention, AML, sanctions or regulatory obligations.
      </p>

      <h2 id="information-sharing">Information Sharing</h2>
      <p>We may share information with:</p>
      <ul>
        <li>banks and payment institutions;</li>
        <li>blockchain and wallet service providers;</li>
        <li>identity-verification providers;</li>
        <li>compliance and AML service providers;</li>
        <li>technology and hosting providers;</li>
        <li>professional advisers;</li>
        <li>auditors;</li>
        <li>insurers;</li>
        <li>regulators;</li>
        <li>law-enforcement authorities;</li>
        <li>courts and government agencies; and</li>
        <li>
          other service providers where reasonably necessary to provide our
          Services.
        </li>
      </ul>
      <p>
        We do not sell your personal information merely for the purpose of
        selling personal data to third parties.
      </p>

      <h2 id="international-transfers">International Transfers</h2>
      <p>Some service providers may process information outside Nigeria.</p>
      <p>
        Where personal information is transferred across borders, TradeWithCEO
        will take reasonable steps to ensure that the transfer and subsequent
        processing comply with applicable data-protection requirements.
      </p>

      <h2 id="data-security">Data Security</h2>
      <p>
        We implement reasonable technical and organisational measures designed
        to protect personal information against:
      </p>
      <ul>
        <li>unauthorised access;</li>
        <li>unlawful processing;</li>
        <li>accidental loss;</li>
        <li>destruction;</li>
        <li>alteration; and</li>
        <li>disclosure.</li>
      </ul>
      <p>No electronic system can be guaranteed to be completely secure.</p>
      <p>
        You are responsible for protecting your own passwords, authentication
        codes, devices and account credentials.
      </p>

      <h2 id="data-retention">Data Retention</h2>
      <p>
        We retain personal information only for as long as reasonably necessary
        for the purposes for which it was collected, including legal,
        regulatory, accounting, fraud-prevention and dispute-resolution
        purposes.
      </p>
      <p>
        Certain transaction and KYC information may need to be retained for a
        longer period where required by applicable law or regulatory
        requirements.
      </p>

      <h2 id="your-rights">Your Data Protection Rights</h2>
      <p>
        Subject to applicable law and any lawful exemptions, you may have rights
        including:
      </p>
      <ul>
        <li>the right to be informed;</li>
        <li>the right to access personal information;</li>
        <li>the right to rectification;</li>
        <li>the right to object to certain processing;</li>
        <li>the right to restrict processing;</li>
        <li>the right to data portability;</li>
        <li>the right to request deletion where applicable;</li>
        <li>
          the right to withdraw consent where processing is based on consent;
          and
        </li>
        <li>rights relating to automated decision-making where applicable.</li>
      </ul>
      <p>
        The NDPC identifies these rights under Nigeria&rsquo;s data-protection
        framework.
      </p>
      <p>
        Some rights may be limited where exercising them would conflict with a
        legal, regulatory, AML, fraud-prevention or record-retention obligation.
      </p>

      <h2 id="marketing">Marketing Communications</h2>
      <p>
        Where permitted, we may send information about TradeWithCEO services,
        educational content, announcements and promotions.
      </p>
      <p>You may unsubscribe from marketing communications at any time.</p>
      <p>
        Transactional, security and legally required communications may
        continue even after you opt out of marketing.
      </p>

      <h2 id="children">Children And Minors</h2>
      <p>
        Our Services are not intended for persons who are legally ineligible to
        use digital-asset services.
      </p>
      <p>
        We do not knowingly collect personal information from persons who are
        not legally permitted to use the Services.
      </p>
      <p>
        Where we become aware that information has been collected from an
        ineligible person, we may take appropriate steps in accordance with
        applicable law.
      </p>

      <h2 id="third-party">Third-Party Websites and Services</h2>
      <p>Our website may contain links to third-party websites or services.</p>
      <p>We are not responsible for the privacy practices of third parties.</p>
      <p>
        You should review the privacy policies of third-party services before
        providing information to them.
      </p>

      <h2 id="cookies">Cookies</h2>
      <p>
        We use cookies and similar technologies as described in our{" "}
        <Link href="/cookies">Cookie Policy</Link>.
      </p>
      <p>
        These technologies may help us operate the website, understand website
        usage, remember preferences and improve the user experience.
      </p>

      <h2 id="data-breaches">Data Breaches</h2>
      <p>
        Where a personal-data breach occurs, we will take reasonable steps to
        investigate, contain and remediate the incident and make any
        notification required by applicable law.
      </p>

      <h2 id="changes">Changes To This Policy</h2>
      <p>We may update this Privacy Policy from time to time.</p>
      <p>
        The updated version will be published on our website, and the
        &ldquo;Last Updated&rdquo; date will be amended.
      </p>
      <p>
        Where you believe your data protection rights have not been properly
        addressed, you may also have the right to lodge a complaint with the
        Nigeria Data Protection Commission or another competent supervisory
        authority, as applicable.
      </p>
    </LegalPage>
  );
}
