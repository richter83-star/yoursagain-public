import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact a Specialist",
  description:
    "Tell us what happened to your property. A YoursAgain specialist will review whether surplus equity from a tax foreclosure may be recoverable.",
  alternates: { canonical: "/contact/" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
