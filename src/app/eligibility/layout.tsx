import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Check Eligibility",
  description:
    "A quick, non-binding first look at whether a tax foreclosure sale may have left surplus equity you could recover.",
  alternates: { canonical: "/eligibility/" },
};

export default function EligibilityLayout({ children }: { children: React.ReactNode }) {
  return children;
}
