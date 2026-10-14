import type { Metadata } from "next";

import { LegalPage } from "@/components/legal/legal-page";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Disclaimers | TradeWithCEO",
  description:
    "Important disclaimers about digital-asset risks, market data, rate locking and the information published on the TradeWithCEO website.",
  path: "/disclaimers",
  image: "/hero/phone.png",
});

const LAST_UPDATED = "October 14, 2026";

export default function DisclaimersPage() {
  return (
    <LegalPage
      title="Disclaimers"
      intro="Please read these disclaimers carefully before relying on information published on the TradeWithCEO website or undertaking a transaction."
      lastUpdated={LAST_UPDATED}
    >
      <h2 id="general">General Information</h2>
      <p>
        The information provided on the TradeWithCEO website is for general
        informational and service-description purposes.
      </p>
      <p>
        Nothing on this website constitutes legal, financial, investment,
        accounting or tax advice.
      </p>
      <p>You should obtain independent professional advice where appropriate.</p>

      <h2 id="digital-asset-risks">Digital-Asset Risks</h2>
      <p>Digital assets are subject to significant risks.</p>
      <p>These may include:</p>
      <ul>
        <li>price volatility;</li>
        <li>market and liquidity risk;</li>
        <li>loss of value;</li>
        <li>counterparty risk;</li>
        <li>technology and blockchain-network risk;</li>
        <li>cybersecurity risk;</li>
        <li>fraud and scams;</li>
        <li>regulatory changes;</li>
        <li>transaction delays;</li>
        <li>network congestion;</li>
        <li>loss of access to digital assets; and</li>
        <li>potential loss of some or all of the amount involved.</li>
      </ul>
      <p>Past performance does not guarantee future performance.</p>
      <p>
        TradeWithCEO does not guarantee that any digital asset will increase in
        value or that you will make a profit.
      </p>

      <h2 id="no-investment-recommendation">No Investment Recommendation</h2>
      <p>
        Information concerning Bitcoin, Ethereum, USDT or other digital assets
        should not be interpreted as a recommendation to buy, sell, hold or
        invest in any particular asset.
      </p>
      <p>
        The decision to undertake a transaction remains the customer&rsquo;s
        responsibility.
      </p>

      <h2 id="market-data">Market Data</h2>
      <p>
        Prices, rates, charts and other market information displayed on the
        website may change rapidly.
      </p>
      <p>
        Any price displayed on the website may be indicative and may not
        represent the final rate available for a specific transaction.
      </p>
      <p>
        Where TradeWithCEO provides a transaction quotation, the terms of that
        specific quotation will govern the applicable transaction.
      </p>

      <h2 id="rate-locking">Rate Locking</h2>
      <p>
        Where TradeWithCEO expressly confirms that a transaction rate has been
        locked, the applicable rate will be subject to the terms and conditions
        communicated with that transaction.
      </p>
      <p>
        A displayed market price or indicative rate should not be interpreted as
        a guaranteed transaction rate.
      </p>

      <h2 id="third-party-information">Third-Party Information</h2>
      <p>
        TradeWithCEO may reference information obtained from third-party
        sources.
      </p>
      <p>
        We do not guarantee the completeness, accuracy or uninterrupted
        availability of third-party information.
      </p>

      <h2 id="blockchain-transactions">Blockchain Transactions</h2>
      <p>Blockchain transactions may be irreversible.</p>
      <p>
        Users are responsible for checking wallet addresses, blockchain
        networks, asset types and transaction amounts before confirming a
        transaction.
      </p>
      <p>
        Blockchain networks may experience congestion, technical failures,
        protocol changes, forks or other events beyond TradeWithCEO&rsquo;s
        reasonable control.
      </p>

      <h2 id="availability">No Guarantee of Availability</h2>
      <p>
        We aim to provide reliable and responsive Services but do not guarantee
        that the website, WhatsApp support, transaction processing systems or
        other Services will always be available without interruption.
      </p>
      <p>
        Services may be temporarily unavailable because of maintenance,
        technical problems, third-party outages, regulatory requirements,
        banking restrictions, blockchain events or circumstances beyond our
        reasonable control.
      </p>

      <h2 id="regulatory-status">Regulatory Status</h2>
      <p>
        The regulatory treatment of digital assets and digital-asset businesses
        may change.
      </p>
      <p>
        TradeWithCEO&rsquo;s Services are subject to applicable laws and
        regulatory requirements.
      </p>
      <p>
        Nothing on this website should be interpreted as a representation of
        regulatory authorisation unless expressly identified and verifiable.
      </p>

      <h2 id="tax">Tax</h2>
      <p>
        Customers are responsible for understanding and complying with their own
        tax obligations arising from digital-asset transactions.
      </p>
      <p>TradeWithCEO does not provide personal tax advice.</p>

      <h2 id="fraud-warning">Fraud Warning</h2>
      <p>
        TradeWithCEO will not ask customers to disclose private keys, seed
        phrases or other wallet credentials for ordinary transaction processing.
      </p>
      <p>Customers should use only official TradeWithCEO communication channels.</p>
      <p>
        If you receive a suspicious message claiming to be from TradeWithCEO,
        contact us through the official contact details published on our
        website before making any payment or providing sensitive information.
      </p>

      <h2 id="limitation">Limitation</h2>
      <p>
        To the fullest extent permitted by law, TradeWithCEO disclaims liability
        for losses arising from reliance solely on general information published
        on the website.
      </p>
      <p>
        Nothing in this Disclaimer excludes liability that cannot legally be
        excluded.
      </p>

      <h2 id="changes">Changes</h2>
      <p>
        This Disclaimer may be updated periodically to reflect changes in our
        Services, applicable law, regulatory requirements or business
        operations.
      </p>
    </LegalPage>
  );
}
