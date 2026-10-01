import type { Metadata } from "next";
import Link from "next/link";

import { LegalPage } from "@/components/legal/legal-page";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Service | TradeWithCEO",
  description:
    "The terms and conditions that govern your use of TradeWithCEO's website and crypto exchange services.",
  path: "/terms",
  image: "/hero/phone.png",
});

const LAST_UPDATED = "October 1, 2026";

export default function TermsOfServicePage() {
  return (
    <LegalPage
      title="Terms of Service"
      intro="These Terms of Service govern your access to and use of TradeWithCEO's website and services. Please read them carefully."
      lastUpdated={LAST_UPDATED}
    >
      <h2 id="agreement">1. Agreement to Terms</h2>
      <p>
        These Terms of Service (the &ldquo;Terms&rdquo;) form a binding agreement
        between you and TradeWithCEO (&ldquo;TradeWithCEO&rdquo;, &ldquo;we&rdquo;,
        &ldquo;us&rdquo; or &ldquo;our&rdquo;) and govern your access to and use
        of our website, mobile applications, and related services (together, the
        &ldquo;Services&rdquo;). By accessing or using the Services, you agree to
        be bound by these Terms and by our{" "}
        <Link href="/privacy">Privacy Policy</Link>. If you do not agree, do not
        use the Services.
      </p>

      <h2 id="eligibility">2. Eligibility</h2>
      <p>
        You must be at least 18 years old and able to form a legally binding
        contract to use the Services. By using the Services, you represent and
        warrant that you meet these requirements, that you are not located in,
        or a resident of, any jurisdiction where use of the Services is
        prohibited, and that you are not subject to any applicable sanctions.
      </p>

      <h2 id="services">3. Our Services</h2>
      <p>
        TradeWithCEO provides a platform that enables you to buy, sell, and
        manage cryptocurrency, including Bitcoin (BTC), Ethereum (ETH), and
        Tether (USDT). We act as a counterparty or facilitator for the exchanges
        you request. We are not a bank, custodian for long-term storage,
        investment adviser, or broker-dealer, and we do not provide financial,
        investment, legal, or tax advice.
      </p>

      <h2 id="accounts">4. Accounts and Identity Verification</h2>
      <p>
        To use certain features, you must create an account and complete our
        identity verification (KYC) process. You agree to provide accurate,
        current, and complete information and to keep it up to date. We may
        refuse, suspend, or limit your access to the Services if we are unable to
        verify your identity or if we suspect the information provided is
        inaccurate, incomplete, or fraudulent.
      </p>
      <p>
        You are responsible for maintaining the confidentiality of your account
        credentials and for all activity that occurs under your account. Notify
        us immediately of any unauthorised use.
      </p>

      <h2 id="exchange-process">5. Exchange Process, Rates, and Quotes</h2>
      <p>
        When you initiate an exchange, we may provide a quoted rate that is valid
        for a limited time. The rate is locked only once you confirm the
        transaction and meet the conditions we specify (for example, sending the
        correct amount within the quoted window). Cryptocurrency prices are
        volatile, and quotes may change until a transaction is confirmed. You are
        responsible for providing correct wallet addresses and payment details;
        transactions sent to an incorrect address may be irreversible and
        unrecoverable.
      </p>

      <h2 id="fees">6. Fees</h2>
      <p>
        The fees, spreads, or charges that apply to a transaction will be
        disclosed to you before you confirm it. You are responsible for any
        network, bank, or third-party fees associated with your transactions.
      </p>

      <h2 id="prohibited-uses">7. Prohibited Uses</h2>
      <p>You agree not to use the Services to:</p>
      <ul>
        <li>
          Engage in money laundering, terrorist financing, fraud, or any other
          unlawful activity;
        </li>
        <li>
          Violate any applicable law, regulation, or sanctions regime;
        </li>
        <li>
          Impersonate any person or entity or provide false or misleading
          information;
        </li>
        <li>
          Interfere with, disrupt, or attempt to gain unauthorised access to the
          Services or related systems; or
        </li>
        <li>
          Use the Services on behalf of a third party without proper
          authorisation.
        </li>
      </ul>

      <h2 id="risks">8. Risks of Cryptocurrency</h2>
      <p>
        You acknowledge and accept the risks of transacting in cryptocurrency,
        including that:
      </p>
      <ul>
        <li>
          Cryptocurrency values are highly volatile and may fall as well as rise;
        </li>
        <li>
          Blockchain transactions are generally irreversible once confirmed;
        </li>
        <li>
          Cryptocurrencies are not legal tender and are not backed or insured by
          any government, deposit insurance scheme, or central bank; and
        </li>
        <li>
          Legislative and regulatory changes may adversely affect the use,
          transfer, or value of cryptocurrency.
        </li>
      </ul>
      <p>
        You are solely responsible for assessing these risks before using the
        Services.
      </p>

      <h2 id="no-advice">9. No Investment Advice</h2>
      <p>
        Nothing on the Services constitutes financial, investment, legal, or tax
        advice or a recommendation to buy, sell, or hold any asset. You are
        responsible for your own decisions and should seek independent
        professional advice where appropriate.
      </p>

      <h2 id="intellectual-property">10. Intellectual Property</h2>
      <p>
        The Services and all related content, trademarks, logos, and software are
        owned by or licensed to TradeWithCEO and are protected by intellectual
        property laws. We grant you a limited, non-exclusive, non-transferable,
        revocable licence to access and use the Services for their intended
        purpose. You may not copy, modify, distribute, or create derivative works
        without our prior written consent.
      </p>

      <h2 id="third-party">11. Third-Party Services</h2>
      <p>
        The Services may rely on or link to third-party services, such as payment
        processors and blockchain networks. We are not responsible for the
        content, availability, or practices of those third parties, and your use
        of them may be subject to their own terms.
      </p>

      <h2 id="disclaimers">12. Disclaimers</h2>
      <p>
        To the fullest extent permitted by law, the Services are provided on an
        &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without
        warranties of any kind, whether express or implied, including warranties
        of merchantability, fitness for a particular purpose, and
        non-infringement. We do not warrant that the Services will be
        uninterrupted, error-free, or secure.
      </p>

      <h2 id="limitation-of-liability">13. Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, TradeWithCEO and its directors,
        employees, and agents will not be liable for any indirect, incidental,
        special, consequential, or punitive damages, or for any loss of profits,
        revenue, data, or cryptocurrency, arising out of or related to your use
        of the Services. Our total liability for any claim relating to the
        Services will not exceed the fees you paid to us for the transaction
        giving rise to the claim.
      </p>

      <h2 id="indemnification">14. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless TradeWithCEO and its
        representatives from any claims, losses, liabilities, and expenses
        (including reasonable legal fees) arising out of your use of the
        Services, your violation of these Terms, or your violation of any law or
        the rights of a third party.
      </p>

      <h2 id="suspension">15. Suspension and Termination</h2>
      <p>
        We may suspend or terminate your access to the Services at any time,
        with or without notice, if you breach these Terms, if required by law or
        regulation, or to protect the Services, other users, or ourselves.
        Provisions that by their nature should survive termination will continue
        to apply.
      </p>

      <h2 id="changes">16. Changes to the Terms or Services</h2>
      <p>
        We may modify these Terms or the Services from time to time. When we
        update the Terms, we will revise the &ldquo;Last updated&rdquo; date
        above. Your continued use of the Services after changes take effect
        constitutes acceptance of the revised Terms.
      </p>

      <h2 id="governing-law">17. Governing Law and Dispute Resolution</h2>
      <p>
        These Terms are governed by the laws of the Federal Republic of Nigeria,
        without regard to conflict-of-laws principles. You agree that any dispute
        arising out of or relating to these Terms or the Services will be subject
        to the exclusive jurisdiction of the courts of Nigeria, unless otherwise
        required by applicable law.
      </p>

      <h2 id="general">18. General</h2>
      <p>
        If any provision of these Terms is found to be unenforceable, the
        remaining provisions will remain in full force and effect. Our failure to
        enforce any right or provision is not a waiver of that right. These
        Terms, together with our{" "}
        <Link href="/privacy">Privacy Policy</Link>, constitute the entire
        agreement between you and TradeWithCEO regarding the Services.
      </p>

      <h2 id="contact">19. Contact Us</h2>
      <p>If you have any questions about these Terms, contact us:</p>
      <ul>
        <li>
          Email:{" "}
          <a href="mailto:info@tradewithceo.com">info@tradewithceo.com</a>
        </li>
        <li>
          Phone: <a href="tel:+2349056491780">+234 905 649 1780</a>
        </li>
      </ul>
    </LegalPage>
  );
}
