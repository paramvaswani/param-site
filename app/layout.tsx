import type { Metadata } from "next";
import { Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const serif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const mono = JetBrains_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://contra.ventures"),
  title:
    "Contra.Ventures — A product studio of one. Reclaiming tech for humans.",
  description:
    "Bangalore. Solo founder. Building Keep, BONP, and twenty other tools designed to return agency to the person using them.",
  openGraph: {
    title: "Contra.Ventures",
    description:
      "A product studio of one, shipping tools that return agency. Against extraction. Against resignation.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://contra.ventures/#org",
      name: "Contra.Ventures",
      alternateName: "contra.ventures",
      url: "https://contra.ventures",
      description:
        "A product studio of one. Tools that return agency to the person holding the device. Operated by Param Vaswani in Bangalore.",
      foundingDate: "2026",
      foundingLocation: {
        "@type": "Place",
        name: "Bangalore, India",
      },
      founder: { "@id": "https://contra.ventures/#person" },
      sameAs: [
        "https://github.com/paramxclaudedev",
        "https://linkedin.com/in/paramvaswani",
        "https://paramvaswani.substack.com",
      ],
    },
    {
      "@type": "Person",
      "@id": "https://contra.ventures/#person",
      name: "Param Vaswani",
      jobTitle: "Founder",
      worksFor: { "@id": "https://contra.ventures/#org" },
      url: "https://contra.ventures",
      sameAs: [
        "https://github.com/paramxclaudedev",
        "https://linkedin.com/in/paramvaswani",
        "https://paramvaswani.substack.com",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bangalore",
        addressCountry: "IN",
      },
      knowsAbout: [
        "Prediction markets",
        "Biometric oracles",
        "AI agents",
        "MCP servers",
        "Solo founding",
        "Claude Code",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://contra.ventures/#site",
      url: "https://contra.ventures",
      name: "Contra.Ventures",
      publisher: { "@id": "https://contra.ventures/#org" },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${mono.variable} antialiased`}
    >
      <body className="min-h-screen bg-bg text-ink selection:bg-accent/20">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
