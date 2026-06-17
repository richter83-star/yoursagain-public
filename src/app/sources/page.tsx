import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";

const sources = [
  {
    citation: "Tyler v. Hennepin County, 598 U.S. ___ (2023)",
    description:
      "U.S. Supreme Court holding that a Minnesota county’s retention of surplus equity above the tax debt owed violated the Fifth Amendment’s Takings Clause.",
    url: "https://www.supremecourt.gov/opinions/22pdf/22-166_5j7b.pdf",
  },
  {
    citation: "Pacific Legal Foundation — Home Equity Theft",
    description:
      "Research documenting instances of local governments keeping surplus equity after tax foreclosure across multiple states.",
    url: "https://pacificlegal.org/issue/home-equity-theft/",
  },
  {
    citation: "YoursAgain internal case database",
    description:
      "Public records, county filings, and case-management data used to identify potential claims. Sources and dates are recorded per case.",
    url: null,
  },
];

export default function Sources() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-brand-cream py-20">
          <div className="mx-auto max-w-3xl px-4 md:px-6">
            <SectionHeader
              eyebrow="Methodology"
              title="How we ground our claims."
              description="Every statistic and legal statement on this site traces to a named source. If you believe something is outdated or incorrect, please tell us."
            />

            <div className="mt-10 space-y-6">
              {sources.map((s) => (
                <div
                  key={s.citation}
                  className="rounded-lg border border-brand-line bg-white p-6"
                >
                  <h3 className="font-serif text-lg font-bold text-brand-navy">
                    {s.citation}
                  </h3>
                  <p className="mt-2 text-brand-muted">{s.description}</p>
                  {s.url ? (
                    <p className="mt-2 text-sm">
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-navy underline hover:text-brand-gold"
                      >
                        View source →
                      </a>
                    </p>
                  ) : null}
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-lg border border-brand-line bg-white p-6">
              <h3 className="font-serif text-lg font-bold text-brand-navy">
                Important disclaimer
              </h3>
              <p className="mt-2 text-brand-muted">
                This website explains general legal principles and describes
                YoursAgain’s services. It is not legal advice, and reading it does
                not create an attorney-client relationship. Whether you have a
                viable claim depends on the facts of your case, your
                jurisdiction, and applicable deadlines.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
