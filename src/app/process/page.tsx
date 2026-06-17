import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";

const steps = [
  {
    title: "Identification",
    body: "Our OSINT and records pipeline scans public property-tax, foreclosure, and sale data to identify former owners whose homes were sold for more than the taxes, interest, penalties, and costs owed.",
  },
  {
    title: "Plain-Language Outreach",
    body: "A local YoursAgain representative contacts the former owner or heirs and explains the situation in normal terms: the home was taken for a tax debt, the government or investor appears to have kept surplus equity, and under current law they may be entitled to recover it.",
  },
  {
    title: "Eligibility and Legal Review",
    body: "State counsel reviews the foreclosure history, sale price, applicable statutes, case law, deadlines, and filing windows. If the case is viable, we offer a clear engagement agreement. If not, we say so directly.",
  },
  {
    title: "Filing and Enforcement",
    body: "We prepare and file the required claims, demand letters, or lawsuits to compel the return of surplus equity. We coordinate with impact-litigation partners where it can strengthen pro-homeowner precedent.",
  },
  {
    title: "Payout and Transparency",
    body: "Recovered funds flow into a controlled trust or escrow account. We take the pre-agreed success fee. The majority goes to the homeowner. A plain-English closing statement shows every material number.",
  },
];

export default function Process() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-brand-cream py-20">
          <div className="mx-auto max-w-3xl px-4 md:px-6">
            <SectionHeader
              eyebrow="Process"
              title="From first contact to recovered equity."
              description="Every case follows the same five-stage path, with client consent and transparency at each step."
            />
            <div className="mt-12 space-y-8">
              {steps.map((step, i) => (
                <div key={step.title} className="relative pl-10">
                  <span className="absolute left-0 top-0 flex h-7 w-7 items-center justify-center rounded-full bg-brand-navy text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-brand-navy">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-brand-muted">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
