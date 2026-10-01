import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-merriweather",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "YoursAgain — Recover Surplus Equity After Tax Foreclosure",
    template: "%s | YoursAgain",
  },
  description:
    "If your home was sold at a tax foreclosure for more than the debt owed, the surplus may be recoverable. YoursAgain helps former homeowners understand their options, with no upfront fees.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "YoursAgain — Recover Surplus Equity After Tax Foreclosure",
    description:
      "Helping former homeowners recover surplus equity after tax foreclosure. No upfront fees; you can also file a claim yourself.",
    type: "website",
    url: SITE.url,
    siteName: "YoursAgain",
    images: [{ url: "/images/hero-home-1440.webp", width: 1440, height: 814 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
