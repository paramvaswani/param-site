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
  metadataBase: new URL("https://param.build"),
  title: "Param Vaswani — Building prediction markets on biometrics",
  description:
    "Solo founder in Bangalore. Building Keep — charity-forfeit commitment markets settled by Whoop/Oura. Plus the infrastructure that keeps me shipping.",
  openGraph: {
    title: "Param Vaswani",
    description:
      "Building Keep. Shipping AI infrastructure. 36+ repos, 122 commits last week.",
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
