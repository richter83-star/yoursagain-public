"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { useState } from "react";

export default function Eligibility() {
  const [result, setResult] = useState<"likely" | "unclear" | "unlikely" | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setResult("unclear");
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-brand-cream py-20">
          <div className="mx-auto max-w-2xl px-4 md:px-6">
            <SectionHeader
              eyebrow="Eligibility"
              title="Could you have a claim?"
              description="Answer a few questions. We will explain whether YoursAgain may be able to help."
            />
            
            {result ? (
              <div className="mt-10 rounded-lg border border-brand-line bg-white p-8 text-center">
                <h3 className="font-serif text-xl font-bold text-brand-navy">
                  We need more details
                </h3>
                <p className="mt-2 text-brand-muted">
                  Eligibility depends on the sale price, debt amount, state law,
                  and deadlines. Complete the contact form or call us and we
                  will review your case directly.
                </p>
                <div className="mt-6 flex justify-center gap-4">
                  <Button href="/contact">Start a Review</Button>
                  <Button href="/faq" variant="outline">Read FAQ</Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-10 space-y-6 rounded-lg border border-brand-line bg-white p-6 md:p-8">
                <div className="space-y-2">
                  <label htmlFor="state" className="text-sm font-medium text-brand-navy">
                    State where the property was located
                  </label>
                  <select
                    id="state"
                    name="state"
                    required
                    className="w-full rounded-md border border-brand-line bg-white px-3 py-2 text-sm focus:border-brand-navy focus:outline-none"
                  >
                    <option value="">Select a state</option>
                    <option value="AL">Alabama</option>
                    <option value="CA">California</option>
                    <option value="FL">Florida</option>
                    <option value="MI">Michigan</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NY">New York</option>
                    <option value="OH">Ohio</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="TX">Texas</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="year" className="text-sm font-medium text-brand-navy">
                    Year of foreclosure or tax sale
                  </label>
                  <input
                    id="year"
                    name="year"
                    type="number"
                    min="1990"
                    max="2099"
                    required
                    className="w-full rounded-md border border-brand-line px-3 py-2 text-sm focus:border-brand-navy focus:outline-none"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="approxValue" className="text-sm font-medium text-brand-navy">
                    Approximate home value at the time
                  </label>
                  <input
                    id="approxValue"
                    name="approxValue"
                    type="text"
                    placeholder="e.g. $250,000"
                    className="w-full rounded-md border border-brand-line px-3 py-2 text-sm focus:border-brand-navy focus:outline-none"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="debt" className="text-sm font-medium text-brand-navy">
                    Approximate tax debt owed
                  </label>
                  <input
                    id="debt"
                    name="debt"
                    type="text"
                    placeholder="e.g. $5,000"
                    className="w-full rounded-md border border-brand-line px-3 py-2 text-sm focus:border-brand-navy focus:outline-none"
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  Check Eligibility
                </Button>
              </form>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
