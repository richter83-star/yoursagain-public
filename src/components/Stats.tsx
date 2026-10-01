// Figures from Pacific Legal Foundation, "Home Equity Theft — Size & Scope"
// (https://homeequitytheft.org/size-and-scope), verified 2026-10-01.
// PLF: homeowners lost "more than $780 million in wealth"; "at least 8,500
// homes" were foreclosed on and sold from 2014 to 2021 in the states studied.
const stats = [
  {
    value: "$780M+",
    label: "Home equity lost by owners in states PLF studied, 2014–2021",
    source: "Pacific Legal Foundation, Home Equity Theft",
    href: "https://homeequitytheft.org/size-and-scope",
  },
  {
    value: "8,500+",
    label: "Homes foreclosed and sold in those states, 2014–2021",
    source: "Pacific Legal Foundation, Home Equity Theft",
    href: "https://homeequitytheft.org/size-and-scope",
  },
  {
    value: "2023",
    label: "U.S. Supreme Court decision in Tyler v. Hennepin County",
    source: "598 U.S. 631 (2023)",
    href: "https://www.supremecourt.gov/opinions/22pdf/598us2r27_aplc.pdf",
  },
];

export function Stats() {
  return (
    <section className="border-y border-brand-line bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid gap-8 text-center sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-serif text-4xl font-bold text-brand-navy md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-brand-muted">{stat.label}</p>
              <p className="mt-1 text-xs text-brand-muted/80">
                <a href={stat.href} target="_blank" rel="noopener noreferrer" className="underline-offset-2 hover:underline">
                  {stat.source}
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
