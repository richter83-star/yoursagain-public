"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-brand-cream py-20">
          <div className="mx-auto max-w-2xl px-4 md:px-6">
            <SectionHeader
              eyebrow="Contact"
              title="Speak with a YoursAgain specialist."
              description="Tell us what happened. We will review your situation and explain whether recovery may be possible."
            />
            
            {submitted ? (
              <div className="mt-10 rounded-lg border border-brand-line bg-white p-8 text-center">
                <h3 className="font-serif text-xl font-bold text-brand-navy">
                  Message received
                </h3>
                <p className="mt-2 text-brand-muted">
                  A YoursAgain specialist will review your information and
                  contact you within two business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-10 space-y-6 rounded-lg border border-brand-line bg-white p-6 md:p-8">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-brand-navy">
                      First name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      className="w-full rounded-md border border-brand-line px-3 py-2 text-sm focus:border-brand-navy focus:outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-brand-navy">
                      Last name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      className="w-full rounded-md border border-brand-line px-3 py-2 text-sm focus:border-brand-navy focus:outline-none"
                    />
                  </div>
                </div>
                
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
                  <label htmlFor="phone" className="text-sm font-medium text-brand-navy">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full rounded-md border border-brand-line px-3 py-2 text-sm focus:border-brand-navy focus:outline-none"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="property" className="text-sm font-medium text-brand-navy">
                    Property address (or former address)
                  </label>
                  <input
                    id="property"
                    name="property"
                    type="text"
                    required
                    className="w-full rounded-md border border-brand-line px-3 py-2 text-sm focus:border-brand-navy focus:outline-none"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-brand-navy">
                    What happened?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full rounded-md border border-brand-line px-3 py-2 text-sm focus:border-brand-navy focus:outline-none"
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  Request Review
                </Button>
                
                <p className="text-center text-xs text-brand-muted">
                  This form is not legal advice. Submitting does not create an
                  attorney-client relationship.
                </p>
              </form>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
