/**
 * FAQ content — sourced from the "TWCEO Platform FAQs" document.
 * Answers are structured blocks so the page can render lists properly and the
 * FAQPage JSON-LD can be built from the same source (see `answerToText`).
 */

export type FaqBlock =
  | { type: "p"; text: string }
  | { type: "ol" | "ul"; items: { label?: string; text: string }[] };

export type FaqItem = {
  question: string;
  answer: FaqBlock[];
};

export type FaqCategory = {
  id: string;
  title: string;
  items: FaqItem[];
};

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: "getting-started",
    title: "General & Getting Started",
    items: [
      {
        question: "What is TradeWithCEO (TWCEO)?",
        answer: [
          {
            type: "p",
            text: "TWCEO is a crypto trading and wallet platform designed for fast, seamless transactions. We allow you to deposit, store, swap, buy, and sell major cryptocurrencies (such as USDT, BTC, ETH, SOL, and more) directly with Nigerian Naira (NGN), via our mobile app and automated WhatsApp AI Trading Assistant.",
          },
        ],
      },
      {
        question: "How do I get started with TWCEO?",
        answer: [
          {
            type: "ol",
            items: [
              {
                text: "Download the TWCEO mobile app from the Google Play Store or Apple App Store.",
              },
              {
                text: "Sign up with your email address, create a strong password, and choose a unique username.",
              },
              { text: "Verify your email via OTP to start transacting." },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "verification",
    title: "Identity Verification & Account Limits (KYC)",
    items: [
      {
        question: "Why do I need to verify my identity?",
        answer: [
          {
            type: "p",
            text: "To comply with financial regulations and safeguard our community against fraud, TWCEO implements a tiered verification (KYC) system. Higher verification tiers unlock higher daily transaction and withdrawal limits.",
          },
        ],
      },
      {
        question: "What are the KYC tiers and their requirements?",
        answer: [
          {
            type: "ul",
            items: [
              {
                label: "Tier 1 (Basic)",
                text: "Requires a verified email address. Gives you basic wallet creation and entry-level daily transactions.",
              },
              {
                label: "Tier 2 (Standard)",
                text: "Requires Tier 1 plus National Identification Number (NIN) verification, a quick automated facial liveness (selfie) scan, and your residential address. Unlocks increased daily trading and withdrawal limits.",
              },
              {
                label: "Tier 3 (Advanced)",
                text: "Requires Tier 2 plus a government-issued ID document (International Passport, Driver’s License, or National ID Card) and Proof of Address (utility bill or bank statement). Unlocks maximum daily limits and full platform capabilities.",
              },
            ],
          },
        ],
      },
      {
        question: "How long does identity verification take?",
        answer: [
          {
            type: "ul",
            items: [
              {
                label: "Tier 1 & Tier 2",
                text: "Instant and automated (usually under 2 minutes).",
              },
              {
                label: "Tier 3 (Advanced Document Review)",
                text: "Reviewed and processed by our compliance team within a few hours to 1 business day.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "wallets",
    title: "Crypto Wallets, Deposits & Withdrawals",
    items: [
      {
        question: "Which cryptocurrencies does TWCEO support?",
        answer: [
          { type: "p", text: "We support major digital assets including:" },
          {
            type: "ul",
            items: [
              { text: "Tether (USDT)" },
              { text: "Bitcoin (BTC)" },
              { text: "Ethereum (ETH)" },
              { text: "Solana (SOL)" },
              { text: "USD Coin (USDC)" },
              { text: "Binance Coin (BNB)" },
              { text: "TRON (TRX)" },
              { text: "Litecoin (LTC)" },
              { text: "Bitcoin Cash (BCH)" },
            ],
          },
        ],
      },
      {
        question: "How do I deposit crypto into my TWCEO wallet?",
        answer: [
          {
            type: "ol",
            items: [
              { text: "Open the app and navigate to Wallets." },
              {
                text: "Select the cryptocurrency you want to deposit (e.g. USDT).",
              },
              {
                text: "Choose your preferred network — make sure you select the exact matching network, such as TRC20 or BEP20.",
              },
              {
                text: "Copy your unique deposit address or scan the displayed QR code from your external wallet or exchange.",
              },
              {
                text: "Your balance will be credited automatically once confirmed on the blockchain.",
              },
            ],
          },
        ],
      },
      {
        question: "How long does a crypto deposit or withdrawal take?",
        answer: [
          {
            type: "ul",
            items: [
              {
                label: "Deposits",
                text: "Credit automatically as soon as the blockchain confirms the transaction (typically 1–10 minutes depending on network traffic).",
              },
              {
                label: "Withdrawals",
                text: "Processed automatically via our secure infrastructure. Network confirmation times vary by blockchain.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "naira",
    title: "Naira (NGN) Wallet & Bank Accounts",
    items: [
      {
        question: "How do I fund my Naira (NGN) balance?",
        answer: [
          {
            type: "ol",
            items: [
              { text: "Go to your NGN Wallet in the app." },
              { text: "Tap Deposit." },
              { text: "Choose bank transfer or debit card deposit." },
              {
                text: "Follow the on-screen instructions to transfer funds to your dedicated account. Your NGN balance will reflect immediately upon confirmation.",
              },
            ],
          },
        ],
      },
      {
        question: "How do I withdraw Naira (NGN) to my bank account?",
        answer: [
          {
            type: "ol",
            items: [
              { text: "Navigate to NGN Wallet and tap Withdraw." },
              {
                text: "Select your linked Nigerian bank account (or add a new verified account).",
              },
              { text: "Enter the amount and confirm the transaction." },
              {
                text: "Funds are paid out directly into your bank account within minutes.",
              },
            ],
          },
        ],
      },
      {
        question: "Why must my bank account name match my TWCEO profile?",
        answer: [
          {
            type: "p",
            text: "For your security and to prevent third-party fraud, TWCEO requires that the name on your registered bank account matches the legal name verified on your profile. Withdrawals to third-party bank accounts are automatically rejected.",
          },
        ],
      },
    ],
  },
  {
    id: "trading",
    title: "Buying, Selling & Swapping Crypto",
    items: [
      {
        question: "How do I buy crypto with Naira?",
        answer: [
          {
            type: "ol",
            items: [
              { text: "Go to the Exchange / Trade tab." },
              {
                text: "Select Buy, choose the cryptocurrency you want (e.g. USDT), and enter the NGN amount.",
              },
              {
                text: "Review the live exchange rate and estimated crypto to receive.",
              },
              {
                text: "Confirm the purchase. Your crypto wallet will be credited instantly from your NGN balance.",
              },
            ],
          },
        ],
      },
      {
        question: "How do I sell crypto for Naira?",
        answer: [
          {
            type: "ol",
            items: [
              { text: "Select Sell on the Exchange tab." },
              { text: "Choose the crypto and amount you wish to sell." },
              {
                text: "Confirm the trade. The equivalent Naira (NGN) is immediately credited to your NGN balance, ready for withdrawal to your bank account anytime.",
              },
            ],
          },
        ],
      },
      {
        question: "Can I swap one crypto for another?",
        answer: [
          {
            type: "p",
            text: "Yes. You can swap directly between supported crypto pairs (e.g. BTC to USDT) seamlessly in real time without having to convert back to Naira first.",
          },
        ],
      },
    ],
  },
  {
    id: "whatsapp",
    title: "WhatsApp AI Trading Agent",
    items: [
      {
        question: "What is the TWCEO WhatsApp AI Trading Agent?",
        answer: [
          {
            type: "p",
            text: "TWCEO provides an automated AI trading assistant directly on WhatsApp. You can check market prices, review wallet balances, and initiate buy/sell trades simply by chatting naturally in your WhatsApp conversation.",
          },
        ],
      },
      {
        question: "Is trading over WhatsApp secure?",
        answer: [
          {
            type: "p",
            text: "Yes. The WhatsApp agent only responds to registered phone numbers linked to your TWCEO account. Sensitive actions (such as payouts and withdrawals) require strict confirmation and authentication before execution.",
          },
        ],
      },
    ],
  },
  {
    id: "fees",
    title: "Fees & Transparency",
    items: [
      {
        question: "What fees does TWCEO charge?",
        answer: [
          {
            type: "ul",
            items: [
              { label: "Crypto Deposits", text: "100% free." },
              {
                label: "Trading / Swaps",
                text: "Transparent, real-time exchange rates with no hidden markups. You always see the exact rate and net payout before confirming any order.",
              },
              {
                label: "Crypto Withdrawals",
                text: "Standard network/blockchain gas fees apply.",
              },
              {
                label: "NGN Bank Withdrawals",
                text: "A standard flat processing fee, clearly shown on the confirmation screen before you authorize the transfer.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "troubleshooting",
    title: "App Updates & Troubleshooting",
    items: [
      {
        question: "Why is the app asking me to update before I can continue?",
        answer: [
          {
            type: "p",
            text: "We regularly push updates to ensure top-tier security, integrate new features, and maintain compatibility with banking and blockchain protocols.",
          },
          {
            type: "ul",
            items: [
              {
                label: "Recommended Updates",
                text: "Let you explore new features at your convenience.",
              },
              {
                label: "Mandatory Updates",
                text: "When a critical security upgrade is released, you will be prompted to update to the latest store version before continuing, to ensure your funds and account stay protected.",
              },
            ],
          },
        ],
      },
      {
        question: "I didn’t receive my verification email or OTP. What should I do?",
        answer: [
          {
            type: "ol",
            items: [
              { text: "Check your spam/junk folder for email verification codes." },
              {
                text: "Ensure your phone number is entered with the correct country code (+234 for Nigeria) and that your phone can receive SMS.",
              },
              { text: "Tap Resend Code after the 60-second cooldown timer." },
              {
                text: "If the issue persists, reach out to our Customer Support via in-app chat or WhatsApp.",
              },
            ],
          },
        ],
      },
    ],
  },
];

/** Plain-text rendering of an answer, for FAQPage structured data. */
export function answerToText(answer: FaqBlock[]): string {
  return answer
    .map((block) =>
      block.type === "p"
        ? block.text
        : block.items
            .map((item) => (item.label ? `${item.label}: ${item.text}` : item.text))
            .join(" "),
    )
    .join(" ");
}
