import type { Metadata } from "next";
import { Encode_Sans, Ubuntu } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { SITE_NAME, SITE_URL } from "@/lib/site-config";

// Headings, buttons, stats — Figma uses Encode Sans (600/700/800)
const encodeSans = Encode_Sans({
  variable: "--font-encode-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

// Body copy — Figma uses Ubuntu (400)
const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const title = "TradeWithCEO | Buy, Sell & Manage Crypto with Human Support";
const description =
  "TradeWithCEO makes it simple to buy, sell, and manage BTC, ETH and USDT — rate locked before you send, funds in seconds, real human support.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: ["/hero/phone.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/hero/phone.png"],
  },
};

// Organization + WebSite structured data — built entirely from facts already
// published elsewhere on the site (footer contact info, logo asset), nothing
// invented. sameAs is omitted since no real social profile URLs exist yet.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/logotwceo.svg`,
      contactPoint: {
        "@type": "ContactPoint",
        email: "info@tradewithceo.com",
        telephone: "+234-905-649-1780",
        contactType: "customer support",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${encodeSans.variable} ${ubuntu.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
