"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PortalLogin() {
  const router = useRouter();
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Demo/demo login path. Real auth will integrate with client-service API.
    const form = e.currentTarget as HTMLFormElement;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const ref = (form.elements.namedItem("reference") as HTMLInputElement).value;
    if (email.includes("@") && ref.length >= 4) {
      document.cookie = "ya_portal_demo=1; path=/; max-age=3600; SameSite=Lax";
      router.push("/portal/dashboard");
    } else {
      setError("Enter a valid email and case reference number.");
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 items-center justify-center bg-brand-cream">
        <div className="w-full max-w-md px-4">
          <div className="rounded-lg border border-brand-line bg-white p-8">
            <h1 className="font-serif text-2xl font-bold text-brand-navy">
              Client Portal
            </h1>
            <p className="mt-2 text-sm text-brand-muted">
              View the status of your surplus-equity claim.
            </p>
            
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-brand-navy">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-md border border-brand-line px-3 py-2 text-sm focus:border-brand-navy focus:outline-none"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="reference" className="text-sm font-medium text-brand-navy">
                  Case reference number
                </label>
                <input
                  id="reference"
                  name="reference"
                  type="text"
                  required
                  className="w-full rounded-md border border-brand-line px-3 py-2 text-sm focus:border-brand-navy focus:outline-none"
                />
              </div>
              
              {error ? (
                <p className="text-sm text-red-600">{error}</p>
              ) : null}
              
              <Button type="submit" className="w-full">
                Sign In
              </Button>
            </form>
            
            <p className="mt-4 text-center text-xs text-brand-muted">
              For demo purposes, enter any email and reference. Production auth
              uses secure credentials and MFA.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
