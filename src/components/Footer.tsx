import Link from "next/link";
import { SITE } from "@/lib/site";
import { ContactDetails } from "./ContactDetails";

export function Footer() {
  const owner = SITE.legalName || SITE.brand;
  return (
    <footer className="border-t border-brand-line bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded bg-brand-navy font-serif text-sm font-bold text-white">
                YA
              </span>
              <span className="font-serif text-xl font-bold text-brand-navy">
                YoursAgain
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-brand-muted">
              Helping former homeowners recover surplus equity after tax
              foreclosure. Human-guided, technology-assisted, and bound by an
              explicit ethical covenant.
            </p>
            {SITE.legalName ? (
              <p className="mt-4 text-sm font-medium text-brand-navy">{SITE.legalName}</p>
            ) : null}
            <ContactDetails className="mt-2" />
          </div>
          <div>
            <h4 className="font-semibold text-brand-navy">Company</h4>
            <ul className="mt-4 space-y-2 text-sm text-brand-muted">
              <li><Link href="/about" className="hover:text-brand-navy">About</Link></li>
              <li><Link href="/process" className="hover:text-brand-navy">Process</Link></li>
              <li><Link href="/faq" className="hover:text-brand-navy">FAQ</Link></li>
              <li><Link href="/sources" className="hover:text-brand-navy">Sources</Link></li>
              <li><Link href="/privacy" className="hover:text-brand-navy">Privacy Notice</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-brand-navy">Get help</h4>
            <ul className="mt-4 space-y-2 text-sm text-brand-muted">
              <li><Link href="/eligibility" className="hover:text-brand-navy">Check Eligibility</Link></li>
              <li><Link href="/contact" className="hover:text-brand-navy">Request a Review</Link></li>
              <li><Link href="/portal" className="hover:text-brand-navy">Existing Clients</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 space-y-3 border-t border-brand-line pt-6 text-xs text-brand-muted">
          <p>
            {SITE.brand} is not a law firm and does not give legal advice.
            {SITE.legalPartner
              ? ` Legal work, including claims, demand letters, and litigation, is performed by ${SITE.legalPartner}.`
              : " Legal work, including claims, demand letters, and litigation, is performed by licensed attorneys."}{" "}
            You may file a surplus claim yourself, directly with the county or
            court, without using our services.
          </p>
          <p>
            This site provides general information only. Your situation depends
            on specific facts, state law, and deadlines.
          </p>
          <p>© {new Date().getFullYear()} {owner}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
