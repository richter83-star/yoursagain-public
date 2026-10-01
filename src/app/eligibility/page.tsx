"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { SITE } from "@/lib/site";
import { parseDollars, saveEligibilityAnswers, type EligibilityAnswers } from "@/lib/leads";
import { useState } from "react";

const STATE_NAMES: Record<string, string> = {
  AL: "Alabama", AK: "Alaska", AZ: "Arizona", AR: "Arkansas", CA: "California", CO: "Colorado",
  CT: "Connecticut", DE: "Delaware", DC: "District of Columbia", FL: "Florida", GA: "Georgia",
  HI: "Hawaii", ID: "Idaho", IL: "Illinois", IN: "Indiana", IA: "Iowa", KS: "Kansas",
  KY: "Kentucky", LA: "Louisiana", ME: "Maine", MD: "Maryland", MA: "Massachusetts",
  MI: "Michigan", MN: "Minnesota", MS: "Mississippi", MO: "Missouri", MT: "Montana",
  NE: "Nebraska", NV: "Nevada", NH: "New Hampshire", NJ: "New Jersey", NM: "New Mexico",
  NY: "New York", NC: "North Carolina", ND: "North Dakota", OH: "Ohio", OK: "Oklahoma",
  OR: "Oregon", PA: "Pennsylvania", RI: "Rhode Island", SC: "South Carolina",
  SD: "South Dakota", TN: "Tennessee", TX: "Texas", UT: "Utah", VT: "Vermont",
  VA: "Virginia", WA: "Washington", WV: "West Virginia", WI: "Wisconsin", WY: "Wyoming",
};

type Outcome =
  | { kind: "possible"; surplus: number }
  | { kind: "unlikely" }
  | { kind: "needs-details" }
  | { kind: "not-served" };

const inputClass =
  "w-full rounded-md border border-brand-line px-3 py-2 text-sm focus:border-brand-navy focus:outline-none";

const usd = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

export default function Eligibility() {
  const [outcome, setOutcome] = useState<Outcome | null>(null);
  const [stateCode, setStateCode] = useState("");
  const currentYear = new Date().getFullYear();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const state = String(data.get("state") ?? "");
    const yearRaw = Number(data.get("year"));
    const value = parseDollars(String(data.get("approxValue") ?? ""));
    const debt = parseDollars(String(data.get("debt") ?? ""));

    const answers: EligibilityAnswers = {
      state,
      year: Number.isFinite(yearRaw) && yearRaw > 0 ? yearRaw : null,
      approx_value: value,
      approx_debt: debt,
    };
    saveEligibilityAnswers(answers);
    setStateCode(state);

    if (!SITE.statesServed.includes(state)) setOutcome({ kind: "not-served" });
    else if (value === null || debt === null) setOutcome({ kind: "needs-details" });
    else if (value <= debt) setOutcome({ kind: "unlikely" });
    else setOutcome({ kind: "possible", surplus: value - debt });
  }

  const stateName = STATE_NAMES[stateCode] ?? "your state";

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-brand-cream py-20">
          <div className="mx-auto max-w-2xl px-4 md:px-6">
            <SectionHeader
              eyebrow="Eligibility"
              title="Could you have a claim?"
              description="Answer a few questions for a quick, non-binding first look. Nothing is sent until you choose to contact us."
            />

            {outcome ? (
              <div role="status" className="mt-10 rounded-lg border border-brand-line bg-white p-8">
                {outcome.kind === "possible" ? (
                  <>
                    <h3 className="font-serif text-xl font-bold text-brand-navy">
                      A surplus may exist — worth a closer look.
                    </h3>
                    <p className="mt-3 text-brand-muted">
                      Based on your estimates, the property may have been worth
                      about <strong>{usd(outcome.surplus)}</strong> more than the
                      tax debt. The actual recoverable amount is usually lower: it
                      depends on the real sale price, interest, penalties, costs,
                      other liens, and {stateName}&apos;s rules and deadlines.
                    </p>
                  </>
                ) : null}
                {outcome.kind === "unlikely" ? (
                  <>
                    <h3 className="font-serif text-xl font-bold text-brand-navy">
                      There may be little or no surplus.
                    </h3>
                    <p className="mt-3 text-brand-muted">
                      Your estimates suggest the debt was close to or above the
                      property&apos;s value. Estimates are often off, though — if
                      the property sold for more than you expected, a surplus could
                      still exist. We are happy to check the sale record.
                    </p>
                  </>
                ) : null}
                {outcome.kind === "needs-details" ? (
                  <>
                    <h3 className="font-serif text-xl font-bold text-brand-navy">
                      We need the sale details.
                    </h3>
                    <p className="mt-3 text-brand-muted">
                      Without an approximate value and debt we can&apos;t estimate
                      a surplus. That&apos;s fine — we can look up the sale record
                      for you.
                    </p>
                  </>
                ) : null}
                {outcome.kind === "not-served" ? (
                  <>
                    <h3 className="font-serif text-xl font-bold text-brand-navy">
                      We may not handle cases in {stateName} yet.
                    </h3>
                    <p className="mt-3 text-brand-muted">
                      You may still have a claim. Contact the county or court that
                      handled the sale to ask about surplus funds, or send us your
                      details and we will tell you honestly whether we can help.
                    </p>
                  </>
                ) : null}

                <p className="mt-4 rounded-md bg-brand-cream px-4 py-3 text-sm text-brand-muted">
                  You can always file a surplus claim yourself, directly with the
                  county or court, at no cost. Deadlines apply, so don&apos;t wait.
                </p>

                <div className="mt-6 flex flex-wrap justify-center gap-4">
                  <Button href="/contact">Request a free review</Button>
                  <Button variant="outline" onClick={() => setOutcome(null)}>
                    Change answers
                  </Button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mt-10 space-y-6 rounded-lg border border-brand-line bg-white p-6 md:p-8"
              >
                <div className="space-y-2">
                  <label htmlFor="state" className="text-sm font-medium text-brand-navy">
                    State where the property was located
                  </label>
                  <select id="state" name="state" required defaultValue={stateCode} className={`${inputClass} bg-white`}>
                    <option value="">Select a state</option>
                    {Object.entries(STATE_NAMES).map(([code, name]) => (
                      <option key={code} value={code}>
                        {name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="year" className="text-sm font-medium text-brand-navy">
                    Year of foreclosure or tax sale
                  </label>
                  <input id="year" name="year" type="number" min="1990" max={currentYear} required className={inputClass} />
                </div>

                <div className="space-y-2">
                  <label htmlFor="approxValue" className="text-sm font-medium text-brand-navy">
                    Approximate home value at the time{" "}
                    <span className="font-normal text-brand-muted">(optional)</span>
                  </label>
                  <input id="approxValue" name="approxValue" type="text" inputMode="decimal" placeholder="e.g. $250,000" className={inputClass} />
                </div>

                <div className="space-y-2">
                  <label htmlFor="debt" className="text-sm font-medium text-brand-navy">
                    Approximate tax debt owed{" "}
                    <span className="font-normal text-brand-muted">(optional)</span>
                  </label>
                  <input id="debt" name="debt" type="text" inputMode="decimal" placeholder="e.g. $5,000" className={inputClass} />
                </div>

                <Button type="submit" className="w-full">
                  See my first look
                </Button>
                <p className="text-center text-xs text-brand-muted">
                  This is a rough, non-binding estimate, not legal advice.
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
