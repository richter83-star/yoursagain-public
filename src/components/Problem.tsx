import { SectionHeader } from "./SectionHeader";

const points = [
  {
    title: "You may have a claim and not know it.",
    body: "Many former owners never learn that keeping surplus equity after a tax sale has been held unconstitutional in some circumstances. In Tyler v. Hennepin County (2023), the Supreme Court ruled that taking surplus equity beyond the debt owed can violate the Fifth Amendment. State laws and procedures still vary widely.",
  },
  {
    title: "The process is overwhelming.",
    body: "Recovering surplus equity means navigating county records, state deadlines, demand letters, and sometimes litigation — while rebuilding your life.",
  },
  {
    title: "No one was built to do this at scale.",
    body: "The opportunity is spread across thousands of counties and legal regimes. Traditional law firms cannot economically pursue every possible case.",
  },
];

export function Problem() {
  return (
    <section className="bg-brand-cream py-20 md:py-28" id="problem">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeader
          eyebrow="The Problem"
          title="Home equity theft is real — and still happening."
          description="Local governments and tax-lien investors have kept surplus equity for years in many jurisdictions. Even after the Supreme Court clarified the constitutional limit in 2023, most victims still never recover what is theirs."
        />
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {points.map((p) => (
            <div
              key={p.title}
              className="rounded-lg border border-brand-line bg-white p-6 shadow-sm"
            >
              <h3 className="font-serif text-xl font-bold text-brand-navy">
                {p.title}
              </h3>
              <p className="mt-3 text-brand-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
