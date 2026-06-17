import Link from "next/link";

export function Footer() {
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
              Returning surplus home equity to former owners after tax
              foreclosure. AI-powered, human-guided, and bound by an explicit
              ethical covenant.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-brand-navy">Company</h4>
            <ul className="mt-4 space-y-2 text-sm text-brand-muted">
              <li><Link href="/about" className="hover:text-brand-navy">About</Link></li>
              <li><Link href="/process" className="hover:text-brand-navy">Process</Link></li>
              <li><Link href="/faq" className="hover:text-brand-navy">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-brand-navy">Contact</Link></li>
              <li><Link href="/sources" className="hover:text-brand-navy">Sources</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-brand-navy">Clients</h4>
            <ul className="mt-4 space-y-2 text-sm text-brand-muted">
              <li><Link href="/portal" className="hover:text-brand-navy">Client Portal</Link></li>
              <li><Link href="/eligibility" className="hover:text-brand-navy">Check Eligibility</Link></li>
              <li><Link href="/contact" className="hover:text-brand-navy">Report a Case</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-brand-line pt-6 text-xs text-brand-muted md:flex-row">
          <p>© {new Date().getFullYear()} YoursAgain. All rights reserved.</p>
          <p>
            Not legal advice. Each case is reviewed by licensed counsel in your
            jurisdiction.
          </p>
        </div>
      </div>
    </footer>
  );
}
