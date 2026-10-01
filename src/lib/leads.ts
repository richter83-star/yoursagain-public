import { LEADS } from "./site";

export type LeadInput = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string | null;
  property_address: string;
  message: string | null;
  contact_consent: boolean;
  eligibility: EligibilityAnswers | null;
  source_page: string;
};

export type EligibilityAnswers = {
  state: string;
  year: number | null;
  approx_value: number | null;
  approx_debt: number | null;
};

const ELIGIBILITY_KEY = "ya_eligibility_answers";

/** Eligibility answers are carried to the contact form in sessionStorage — never in the URL. */
export function saveEligibilityAnswers(a: EligibilityAnswers) {
  try {
    sessionStorage.setItem(ELIGIBILITY_KEY, JSON.stringify(a));
  } catch {
    /* storage unavailable: the contact form still works without it */
  }
}

export function loadEligibilityAnswers(): EligibilityAnswers | null {
  try {
    const raw = sessionStorage.getItem(ELIGIBILITY_KEY);
    return raw ? (JSON.parse(raw) as EligibilityAnswers) : null;
  } catch {
    return null;
  }
}

export function clearEligibilityAnswers() {
  try {
    sessionStorage.removeItem(ELIGIBILITY_KEY);
  } catch {
    /* ignore */
  }
}

/** Parses "$250,000" / "250k" / "250000" into a whole-dollar number, or null. */
export function parseDollars(input: string): number | null {
  const s = input.trim().toLowerCase().replace(/[$,\s]/g, "");
  if (!s) return null;
  const m = s.match(/^(\d+(?:\.\d+)?)(k|m)?$/);
  if (!m) return null;
  const n = parseFloat(m[1]) * (m[2] === "k" ? 1_000 : m[2] === "m" ? 1_000_000 : 1);
  return Number.isFinite(n) ? Math.round(n) : null;
}

/**
 * Inserts a lead. Throws on any failure so the UI can show a real error and
 * fall back to phone/email — a submission must never be silently dropped.
 */
export async function submitLead(lead: LeadInput): Promise<void> {
  if (!LEADS.supabaseKey) throw new Error("Lead intake is not configured.");

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 15_000);
  try {
    const res = await fetch(`${LEADS.supabaseUrl}/rest/v1/${LEADS.table}`, {
      method: "POST",
      headers: {
        apikey: LEADS.supabaseKey,
        Authorization: `Bearer ${LEADS.supabaseKey}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify(lead),
      signal: controller.signal,
    });
    if (!res.ok) throw new Error(`Submission failed (${res.status}).`);
  } finally {
    clearTimeout(timer);
  }
}
