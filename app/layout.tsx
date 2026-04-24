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
        {children}
      </body>
    </html>
  );
}
