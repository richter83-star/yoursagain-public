import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { ContactDetails } from "@/components/ContactDetails";

export const metadata: Metadata = {
  title: "Client Updates",
  description: "How YoursAgain clients receive updates on their case.",
  robots: { index: false },
};

/**
 * The online client portal is not live yet. Until real authentication and a
 * client-scoped data API exist (see docs/client-service-api.md), this page
 * explains how clients get updates instead of showing a demo login.
 */
export default function Portal() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 items-center justify-center bg-brand-cream py-20">
        <div className="w-full max-w-md px-4">
          <div className="rounded-lg border border-brand-line bg-white p-8">
            <h1 className="font-serif text-2xl font-bold text-brand-navy">
              Client updates
            </h1>
            <p className="mt-3 text-sm text-brand-muted">
              Our secure online portal is not available yet. If you are a
              client, your case manager sends updates directly by email or
              phone, and you can reach us any time:
            </p>
            <ContactDetails className="mt-4" />
            <Button href="/contact" variant="outline" className="mt-6 w-full">
              Send us a message
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
