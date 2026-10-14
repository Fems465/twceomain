import type { Metadata } from "next";
import Link from "next/link";

import { LegalPage } from "@/components/legal/legal-page";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Use | TradeWithCEO",
  description:
    "The terms that govern your access to and use of TradeWithCEO's website, communication channels and crypto-related services.",
  path: "/terms",
  image: "/hero/phone.png",
});

const LAST_UPDATED = "October 14, 2026";

export default function TermsOfUsePage() {
  return (
    <LegalPage
      title="Terms of Use"
      intro="These Terms of Use govern your access to and use of TradeWithCEO's website, digital platforms, communication channels and crypto-related services. Please read them carefully."
      lastUpdated={LAST_UPDATED}
    >
      <h2 id="introduction">Introduction</h2>
      <p>
        Welcome to TradeWithCEO (&ldquo;<strong>TradeWithCEO</strong>&rdquo;,
        &ldquo;<strong>we</strong>&rdquo;, &ldquo;<strong>us</strong>&rdquo;,
        or &ldquo;<strong>our</strong>&rdquo;).
      </p>
      <p>
        These Terms of Use (&ldquo;<strong>Terms</strong>&rdquo;) govern your
        access to and use of the TradeWithCEO website, digital platforms,
        communication channels, customer support services and crypto-related
        services made available by TradeWithCEO (collectively, the
        &ldquo;<strong>Services</strong>&rdquo;).
      </p>
      <p>
        By accessing our website, communicating with us through WhatsApp or
        other approved channels, requesting a quotation, initiating a
        transaction, or otherwise using our Services, you acknowledge that you
        have read, understood and agreed to be bound by these Terms.
      </p>
      <p>If you do not agree with these Terms, you should not use the Services.</p>

      <h2 id="about">About TradeWithCEO</h2>
      <p>
        TradeWithCEO provides services relating to the purchase, sale, exchange
        and management of supported digital/virtual assets.
      </p>
      <p>Our Services may include:</p>
      <ul>
        <li>buying supported crypto assets;</li>
        <li>selling supported crypto assets;</li>
        <li>exchanging supported crypto assets and/or fiat currencies;</li>
        <li>transaction quotations and rate confirmation;</li>
        <li>transaction processing and settlement;</li>
        <li>customer support and transaction assistance; and</li>
        <li>
          other digital-asset-related services that we may introduce from time
          to time.
        </li>
      </ul>
      <p>
        The specific services available to you may depend on your location,
        eligibility, verification status, applicable law, regulatory
        requirements, transaction limits and our internal risk controls.
      </p>

      <h2 id="regulatory-notice">Important Regulatory Notice</h2>
      <p>
        TradeWithCEO operates subject to applicable laws and regulatory
        requirements.
      </p>
      <p>
        Where a particular service requires regulatory registration, approval,
        licensing or other authorisation, TradeWithCEO will provide that service
        only to the extent legally permitted and within the scope of its
        applicable authorisation or regulatory status.
      </p>
      <p>
        Nothing on this website should be interpreted as a representation that
        TradeWithCEO is licensed, approved or authorised by any regulator unless
        that status is expressly stated on this website and can be
        independently verified through the relevant regulator.
      </p>
      <p>
        TradeWithCEO reserves the right to restrict, suspend or discontinue any
        service where required by law, regulation, regulatory direction, banking
        requirements, payment-provider requirements or internal risk controls.
      </p>

      <h2 id="eligibility">Eligibility</h2>
      <p>You may use our Services only where you are legally permitted to do so.</p>
      <p>
        We may require you to satisfy age, identity, residency, jurisdictional
        and other eligibility requirements before completing a transaction.
      </p>
      <p>We may refuse to provide Services where:</p>
      <ul>
        <li>you do not satisfy applicable eligibility requirements;</li>
        <li>required identification or verification information is not provided;</li>
        <li>information provided is inaccurate, incomplete or misleading;</li>
        <li>
          the transaction presents unacceptable legal, regulatory, fraud,
          sanctions, AML/CFT or operational risk; or
        </li>
        <li>
          providing the Service would violate applicable law or regulatory
          requirements.
        </li>
      </ul>

      <h2 id="kyc">Customer Identification and KYC</h2>
      <p>
        To use certain Services, you may be required to complete Know Your
        Customer (&ldquo;<strong>KYC</strong>&rdquo;), Customer Due Diligence
        (&ldquo;<strong>CDD</strong>&rdquo;) or Enhanced Due Diligence
        (&ldquo;<strong>EDD</strong>&rdquo;) procedures.
      </p>
      <p>We may request information including:</p>
      <ul>
        <li>full legal name;</li>
        <li>telephone number;</li>
        <li>email address;</li>
        <li>residential or business address;</li>
        <li>government-issued identification;</li>
        <li>proof of address;</li>
        <li>source-of-funds information;</li>
        <li>source-of-wealth information;</li>
        <li>beneficiary or counterparty information;</li>
        <li>wallet addresses;</li>
        <li>transaction information; and</li>
        <li>any other information reasonably required for compliance purposes.</li>
      </ul>
      <p>
        We may use third-party verification, screening and compliance providers
        where necessary.
      </p>
      <p>
        You agree to provide accurate, complete and current information and to
        promptly notify us of material changes.
      </p>

      <h2 id="aml">Anti-Money Laundering and Sanctions</h2>
      <p>
        TradeWithCEO maintains controls designed to prevent its Services from
        being used for money laundering, terrorist financing, fraud, sanctions
        evasion or other unlawful activities.
      </p>
      <p>We may monitor transactions and conduct risk-based reviews.</p>
      <p>We may:</p>
      <ul>
        <li>request additional information or documentation;</li>
        <li>delay processing while a review is conducted;</li>
        <li>reject or cancel a transaction;</li>
        <li>restrict or suspend an account or transaction;</li>
        <li>
          report a transaction or activity to a competent authority where
          required or permitted by law; or
        </li>
        <li>
          take any other action reasonably necessary to comply with applicable
          law and our compliance policies.
        </li>
      </ul>
      <p>
        We are not required to disclose the existence or details of a suspicious
        transaction report or other confidential regulatory filing where
        disclosure is prohibited.
      </p>

      <h2 id="quotations">Quotations and Exchange Rates</h2>
      <p>
        Before a transaction is completed, TradeWithCEO may provide a quotation
        specifying the applicable exchange rate, asset, amount, applicable
        charges and/or expected settlement amount.
      </p>
      <p>A quotation is not necessarily a completed transaction.</p>
      <p>
        Where TradeWithCEO expressly confirms that a rate has been locked, the
        rate will remain applicable subject to the conditions communicated to
        you at the time of confirmation.
      </p>
      <p>A transaction may be cancelled, adjusted or rejected where:</p>
      <ul>
        <li>payment is not received within the specified period;</li>
        <li>the payment amount differs from the agreed amount;</li>
        <li>the asset or network selected is incorrect;</li>
        <li>required compliance checks are not completed;</li>
        <li>there is a material technical or settlement failure;</li>
        <li>fraud or suspicious activity is identified; or</li>
        <li>
          completion would violate applicable law or regulatory requirements.
        </li>
      </ul>

      <h2 id="crypto-transactions">Cryptocurrency Transactions</h2>
      <p>
        Digital-asset transactions may be irreversible once confirmed and
        broadcast to a blockchain network.
      </p>
      <p>You are responsible for ensuring that:</p>
      <ul>
        <li>the correct asset is selected;</li>
        <li>the correct blockchain/network is selected;</li>
        <li>the correct wallet address is provided;</li>
        <li>the amount is correct; and</li>
        <li>all transaction details are reviewed before confirmation.</li>
      </ul>
      <p>
        TradeWithCEO will not be responsible for losses arising solely from an
        incorrect wallet address, unsupported network, incorrect asset selection
        or other information incorrectly supplied by you, except where caused by
        our proven error or negligence.
      </p>
      <p>
        Blockchain networks may experience congestion, delays, fees, forks,
        outages or other technical events beyond our control.
      </p>

      <h2 id="payments">Payments</h2>
      <p>
        Payments must be made only through payment methods and accounts
        communicated or authorised by TradeWithCEO.
      </p>
      <p>
        You must not make payments to unauthorised persons claiming to represent
        TradeWithCEO.
      </p>
      <p>
        TradeWithCEO will not be responsible for payments made to fraudulent
        third parties where the customer failed to verify that the payment
        details were officially provided by TradeWithCEO.
      </p>
      <p>
        We may request evidence of payment or additional information before
        processing a transaction.
      </p>

      <h2 id="third-party">Third-Party Services</h2>
      <p>
        We may rely on third-party service providers, including payment
        processors, banks, wallet providers, blockchain infrastructure
        providers, technology providers, identity-verification providers,
        compliance providers and communication platforms.
      </p>
      <p>
        The availability of our Services may therefore depend on third-party
        systems.
      </p>
      <p>
        We are not responsible for a third party&rsquo;s independent acts,
        omissions, outages or policies, except to the extent liability cannot
        lawfully be excluded.
      </p>

      <h2 id="fees">Fees and Charges</h2>
      <p>
        Applicable transaction fees, network fees, service charges, spreads or
        other charges will be communicated before or during the applicable
        transaction where reasonably practicable.
      </p>
      <p>Third-party network or processing fees may apply.</p>
      <p>
        You are responsible for any taxes or statutory charges imposed on you in
        connection with your transactions.
      </p>

      <h2 id="prohibited-use">Prohibited Use</h2>
      <p>You must not use TradeWithCEO for:</p>
      <ul>
        <li>fraud or deception;</li>
        <li>money laundering;</li>
        <li>terrorist financing;</li>
        <li>sanctions evasion;</li>
        <li>proceeds of crime;</li>
        <li>unauthorised financial activity;</li>
        <li>impersonation;</li>
        <li>account takeover;</li>
        <li>phishing or other cybercrime;</li>
        <li>transactions involving stolen funds or assets;</li>
        <li>activities prohibited by applicable law; or</li>
        <li>any activity intended to circumvent our compliance controls.</li>
      </ul>

      <h2 id="security">Account and Communication Security</h2>
      <p>
        You are responsible for maintaining the confidentiality of your account,
        authentication information and communications.
      </p>
      <p>
        You should never provide your password, OTP, authentication code,
        private key, seed phrase or other security credentials to any person
        claiming to be a TradeWithCEO employee.
      </p>
      <p>
        TradeWithCEO will not request your private wallet key or seed phrase for
        the purpose of processing an ordinary transaction.
      </p>
      <p>You must notify us promptly if you suspect unauthorised activity.</p>

      <h2 id="intellectual-property">Intellectual Property</h2>
      <p>
        All TradeWithCEO branding, logos, website content, graphics, text,
        software, designs and other materials are owned by or licensed to
        TradeWithCEO unless otherwise stated.
      </p>
      <p>
        You may not reproduce, modify, distribute, commercially exploit or
        create derivative works from our materials without prior written
        permission.
      </p>

      <h2 id="website-information">Website Information</h2>
      <p>
        Information published on the website is provided for general information
        and service-description purposes.
      </p>
      <p>
        Market prices, asset values, charts and other information may change
        rapidly and may not represent the price applicable to your particular
        transaction.
      </p>
      <p>
        Nothing on the website constitutes personalised investment, legal,
        accounting or tax advice. See our{" "}
        <Link href="/disclaimers">Disclaimers</Link> for more information.
      </p>

      <h2 id="risk-disclosure">Risk Disclosure</h2>
      <p>
        Digital assets involve significant risks, including price volatility,
        liquidity risk, technology risk, cybersecurity risk, fraud risk,
        regulatory risk, counterparty risk and the possibility of partial or
        total loss.
      </p>
      <p>
        You are responsible for independently assessing whether a transaction is
        appropriate for you.
      </p>
      <p>
        TradeWithCEO does not guarantee that any digital asset will increase in
        value or that you will make a profit.
      </p>

      <h2 id="limitation-of-liability">Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by applicable law, TradeWithCEO shall
        not be liable for indirect, incidental, consequential, special or
        punitive losses arising from your use of the Services.
      </p>
      <p>
        Nothing in these Terms excludes or limits liability that cannot lawfully
        be excluded or limited.
      </p>
      <p>
        Where liability is established against TradeWithCEO, the extent of such
        liability shall be determined in accordance with applicable law and the
        circumstances of the particular claim.
      </p>

      <h2 id="indemnity">Indemnity</h2>
      <p>
        To the extent permitted by law, you agree to indemnify TradeWithCEO and
        its officers, employees, agents and service providers against claims,
        losses, liabilities and reasonable costs arising from:
      </p>
      <ul>
        <li>your breach of these Terms;</li>
        <li>your unlawful use of the Services;</li>
        <li>inaccurate information provided by you;</li>
        <li>
          fraudulent or unauthorised activity carried out through your account;
          or
        </li>
        <li>your violation of another person&rsquo;s rights.</li>
      </ul>

      <h2 id="suspension">Suspension and Termination</h2>
      <p>
        We may suspend, restrict or terminate your access to the Services where
        reasonably necessary, including where:
      </p>
      <ul>
        <li>you breach these Terms;</li>
        <li>we are required to do so by law or a competent authority;</li>
        <li>compliance concerns arise;</li>
        <li>fraudulent or suspicious activity is detected;</li>
        <li>our banking, payment or technology partners require action; or</li>
        <li>
          continuing to provide the Service creates material legal, regulatory,
          security or operational risk.
        </li>
      </ul>
      <p>
        Where legally permissible, we will provide appropriate notice or
        information regarding the reason for the restriction.
      </p>

      <h2 id="complaints">Complaints and Dispute Resolution</h2>
      <p>
        Customers should first contact TradeWithCEO through the official
        customer-support channels stated on the website.
      </p>
      <p>
        We will review complaints in accordance with our internal
        complaints-handling procedures.
      </p>
      <p>
        Where a dispute cannot be resolved through internal escalation, the
        parties may pursue the applicable dispute-resolution mechanism provided
        under Nigerian law and any specific agreement governing the relevant
        transaction.
      </p>

      <h2 id="privacy">Privacy</h2>
      <p>
        Your personal information is processed in accordance with our{" "}
        <Link href="/privacy">Privacy Policy</Link>.
      </p>
      <p>
        By using the Services, you acknowledge that your information may be
        collected, used, stored and disclosed as reasonably necessary to provide
        the Services, satisfy legal obligations, conduct KYC/AML procedures,
        prevent fraud and protect our business and customers.
      </p>

      <h2 id="changes">Changes To These Terms</h2>
      <p>We may update these Terms from time to time.</p>
      <p>
        Updated Terms will be published on the website with a revised
        &ldquo;Last Updated&rdquo; date.
      </p>
      <p>
        Your continued use of the Services after an update may constitute
        acceptance of the revised Terms where permitted by law.
      </p>

      <h2 id="governing-law">Governing Law</h2>
      <p>
        These Terms shall be governed by and interpreted in accordance with the
        laws of the Federal Republic of Nigeria, unless applicable law requires
        otherwise.
      </p>

      <h2 id="severability">Severability</h2>
      <p>
        If any provision of these Terms is determined to be invalid or
        unenforceable, the remaining provisions shall continue to apply.
      </p>

      <h2 id="entire-agreement">Entire Agreement</h2>
      <p>
        These Terms, together with applicable transaction terms, policies and
        agreements expressly incorporated into them, constitute the agreement
        governing your use of the Services.
      </p>
    </LegalPage>
  );
}
