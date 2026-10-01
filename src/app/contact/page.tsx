"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { ContactDetails } from "@/components/ContactDetails";
import { SITE, hasEmail, hasPhone } from "@/lib/site";
import {
  clearEligibilityAnswers,
  loadEligibilityAnswers,
  submitLead,
  type EligibilityAnswers,
} from "@/lib/leads";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

const inputClass =
  "w-full rounded-md border border-brand-line px-3 py-2 text-sm focus:border-brand-navy focus:outline-none";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [eligibility, setEligibility] = useState<EligibilityAnswers | null>(null);
  const openedAt = useRef<number>(Date.now());

  useEffect(() => {
    openedAt.current = Date.now();
    setEligibility(loadEligibilityAnswers());
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const value = (k: string) => String(data.get(k) ?? "").trim();

    // Bot traps: hidden field must stay empty; humans take more than 3s.
    if (value("company") || Date.now() - openedAt.current < 3000) {
      setStatus("sent");
      return;
    }

    setStatus("sending");
    setError("");
    try {
      await submitLead({
        first_name: value("firstName"),
        last_name: value("lastName"),
        email: value("email"),
        phone: value("phone") || null,
        property_address: value("property"),
        message: value("message") || null,
        contact_consent: data.get("consent") === "on",
        eligibility,
        source_page: "/contact",
      });
      clearEligibilityAnswers();
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
      setError(
        "Your request could not be sent. Nothing was saved — please try again, or reach us directly using the details below."
      );
    }
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

            {status === "sent" ? (
              <div
                role="status"
                className="mt-10 rounded-lg border border-brand-line bg-white p-8 text-center"
              >
                <h3 className="font-serif text-xl font-bold text-brand-navy">
                  Request received
                </h3>
                <p className="mt-2 text-brand-muted">
                  Thank you. A YoursAgain specialist will review your information
                  and aim to contact you within {SITE.responseTime}.
                </p>
                <ContactDetails className="mx-auto mt-6 inline-block text-left" />
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mt-10 space-y-6 rounded-lg border border-brand-line bg-white p-6 md:p-8"
              >
                {eligibility ? (
                  <p className="rounded-md bg-brand-cream px-4 py-3 text-sm text-brand-muted">
                    Your eligibility answers ({eligibility.state}
                    {eligibility.year ? `, ${eligibility.year}` : ""}) will be
                    included with this request.
                  </p>
                ) : null}

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-brand-navy">
                      First name
                    </label>
                    <input id="firstName" name="firstName" type="text" required maxLength={100} autoComplete="given-name" className={inputClass} />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-brand-navy">
                      Last name
                    </label>
                    <input id="lastName" name="lastName" type="text" required maxLength={100} autoComplete="family-name" className={inputClass} />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-brand-navy">
                    Email
                  </label>
                  <input id="email" name="email" type="email" required maxLength={254} autoComplete="email" className={inputClass} />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-brand-navy">
                    Phone <span className="font-normal text-brand-muted">(optional)</span>
                  </label>
                  <input id="phone" name="phone" type="tel" maxLength={40} autoComplete="tel" className={inputClass} />
                </div>

                <div className="space-y-2">
                  <label htmlFor="property" className="text-sm font-medium text-brand-navy">
                    Property address (or former address)
                  </label>
                  <input id="property" name="property" type="text" required maxLength={300} autoComplete="street-address" className={inputClass} />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-brand-navy">
                    What happened? <span className="font-normal text-brand-muted">(optional)</span>
                  </label>
                  <textarea id="message" name="message" rows={4} maxLength={4000} className={inputClass} />
                </div>

                {/* Honeypot: hidden from people, tempting to bots. */}
                <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                  <label htmlFor="company">Company</label>
                  <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
                </div>

                <label className="flex items-start gap-3 text-sm text-brand-muted">
                  <input id="consent" name="consent" type="checkbox" required className="mt-1 h-4 w-4" />
                  <span>
                    I agree that YoursAgain may contact me by email or phone about
                    this request. I understand I can also file a surplus claim
                    myself, directly with the county or court, and am not required
                    to use YoursAgain. See our{" "}
                    <Link href="/privacy" className="underline hover:text-brand-navy">
                      privacy notice
                    </Link>
                    .
                  </span>
                </label>

                {status === "error" ? (
                  <div role="alert" className="rounded-md border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                    <p>{error}</p>
                    <ContactDetails className="mt-3" />
                  </div>
                ) : null}

                <Button type="submit" className="w-full" disabled={status === "sending"}>
                  {status === "sending" ? "Sending…" : "Request Review"}
                </Button>

                <p className="text-center text-xs text-brand-muted">
                  This form is not legal advice. Submitting does not create an
                  attorney-client relationship.
                </p>
              </form>
            )}

            {hasPhone() || hasEmail() || SITE.mailingAddress ? (
              <div className="mt-10 rounded-lg border border-brand-line bg-white p-6">
                <h3 className="font-serif text-lg font-bold text-brand-navy">
                  Prefer to reach us directly?
                </h3>
                <ContactDetails className="mt-3" />
                {SITE.legalName ? (
                  <p className="mt-3 text-xs text-brand-muted">{SITE.legalName}</p>
                ) : null}
              </div>
            ) : null}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
