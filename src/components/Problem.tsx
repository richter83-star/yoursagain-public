import { SectionHeader } from "./SectionHeader";

const points = [
  {
    title: "You may have a claim and not know it.",
    body: "Most former owners never learn that keeping surplus equity after a tax sale is unconstitutional under Tyler v. Hennepin County.",
  },
  {
    title: "The process is overwhelming.",
    body: "Recovering surplus equity means navigating county records, state deadlines, demand letters, and sometimes litigation — while rebuilding your life.",
  },
  {
    title: "No one was built to do this at scale.",
    body: "The opportunity is spread across thousands of counties and legal regimes. Traditional law firms cannot economically hunt every case.",
  },
];

export function Problem() {
  return (
    <section className="bg-brand-cream py-20 md:py-28" id="problem">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeader
          eyebrow="The Problem"
          title="Home equity theft is real — and still happening."
          description="Local governments and tax-lien investors kept surplus equity for years. Even after the Supreme Court said stop, most victims never recover what is theirs."
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
