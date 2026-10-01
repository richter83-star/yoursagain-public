/**
 * Single source of truth for business identity and contact details.
 *
 * Every empty string below is a REQUIRED value. `npm run build` runs
 * scripts/check-site-config.mjs and refuses to produce a production build
 * while any required field is empty (override locally with
 * ALLOW_INCOMPLETE_SITE=1 for previews only).
 *
 * Outreach letters, emails, and this site must show the SAME entity name,
 * address, and phone number — prospects use this site to verify us.
 */
export const SITE = {
  url: "https://yoursagain.net",
  brand: "YoursAgain",

  // ── Legal identity (required) ──────────────────────────────────────────
  /** Registered legal entity, exactly as filed (e.g. "YoursAgain LLC"). */
  legalName: "",
  /** Mailing address shown publicly (street, city, state ZIP). */
  mailingAddress: "",
  /** Public phone number, formatted for display, e.g. "(714) 555-0100". */
  phoneDisplay: "",
  /** Same number in E.164 for tel: links, e.g. "+17145550100". */
  phoneE164: "",
  /** Public contact email, e.g. "help@yoursagain.net". */
  email: "",

  // ── Legal work attribution (required) ──────────────────────────────────
  /**
   * Licensed attorney or law firm that performs legal work (claims, demand
   * letters, litigation). YoursAgain itself is not a law firm unless counsel
   * confirms otherwise.
   */
  legalPartner: "",

  // ── Optional ───────────────────────────────────────────────────────────
  /** Published fee range, e.g. "typically 20–30% of the amount recovered". Leave empty to omit. */
  feeRange: "",
  /** Response-time promise shown after form submission. Must be true in practice. */
  responseTime: "two business days",
  /** States currently served (two-letter codes). Drives the eligibility form. */
  statesServed: ["AL", "CA", "FL", "MI", "NJ", "NY", "OH", "PA", "TX"] as string[],
} as const;

/**
 * Supabase lead intake. The publishable (anon) key is designed to be public;
 * the `site_leads` table only allows anonymous INSERT (no read/update/delete)
 * via row-level security.
 */
export const LEADS = {
  supabaseUrl:
    process.env.NEXT_PUBLIC_SUPABASE_URL ?? "https://ohapewokvylhzuwcqdgn.supabase.co",
  supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? "sb_publishable_XV8KJ4-MNqyf47TCAe7qfA_Zd-z_u1_",
  table: "site_leads",
};

export const hasPhone = () => Boolean(SITE.phoneDisplay && SITE.phoneE164);
export const hasEmail = () => Boolean(SITE.email);
