const stats = [
  { value: "$780M+", label: "Surplus equity taken, 2014–2021" },
  { value: "8,600+", label: "Homes documented by Pacific Legal Foundation" },
  { value: "2023", label: "U.S. Supreme Court ruling in Tyler v. Hennepin County" },
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
