import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";

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
  title: "YoursAgain — Recover Surplus Equity After Tax Foreclosure",
  description:
    "YoursAgain is an equity-recovery network that uses AI and local partners to return stolen home equity to former owners after unconstitutional or abusive tax foreclosures.",
  keywords: [
    "home equity theft",
    "tax foreclosure",
    "surplus equity",
    "Tyler v Hennepin County",
    "equity recovery",
  ],
  openGraph: {
    title: "YoursAgain — Recover Surplus Equity After Tax Foreclosure",
    description:
      "Return the surplus. Keep what is yours. YoursAgain helps former homeowners recover equity taken after tax foreclosure.",
    type: "website",
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
