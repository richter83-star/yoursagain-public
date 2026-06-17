import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";

const faqs = [
  {
    q: "What is surplus equity?",
    a: "Surplus equity is the amount left over when a foreclosed home is sold for more than the tax debt, interest, penalties, and costs owed. For example, if a $250,000 home is sold to satisfy a $10,000 tax debt, the remaining $240,000 is surplus equity. Whether it is recoverable depends on state law and deadlines.",
  },
  {
    q: "Is it unconstitutional to keep surplus equity?",
    a: "In Tyler v. Hennepin County (2023), the U.S. Supreme Court held that when a county sells a home to satisfy a tax debt and keeps the surplus, it can violate the Fifth Amendment’s Takings Clause. Many states have also passed reforms requiring surplus equity to be returned. The exact rule in your jurisdiction requires a case-by-case review.",
  },
  {
    q: "How much does YoursAgain charge?",
    a: "YoursAgain operates on a success-based fee. We only collect a fee if we recover surplus equity for you. The exact percentage is disclosed in your engagement agreement before any work begins. There are no upfront fees or surprise charges under that agreement.",
  },
  {
    q: "How long does the process take?",
    a: "It varies by state and county. Some claims can be resolved administratively in a few months. Others require litigation and may take a year or more. We explain the likely timeline during the eligibility review.",
  },
  {
    q: "Do I need to pay anything upfront?",
    a: "No. YoursAgain does not charge upfront fees under its standard engagement agreement. If there is no recovery, there is no fee.",
  },
  {
    q: "What if my home was foreclosed years ago?",
    a: "Deadlines vary by jurisdiction. Some states have short windows; others allow claims for years. The best way to know is to complete an eligibility check so we can review your specific case.",
  },
  {
    q: "Will you share or sell my information?",
    a: "Never. We use public records and information you provide only for the purpose of evaluating and pursuing your claim. We do not sell data, use it for advertising, or repurpose it beyond your engagement.",
  },
  {
    q: "How do I check the status of my claim?",
    a: "Once you become a client, you can log in to the secure YoursAgain client portal at any time to view your case status, documents, messages, and expected next steps.",
  },
];

export default function FAQ() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-brand-cream py-20">
          <div className="mx-auto max-w-3xl px-4 md:px-6">
            <SectionHeader eyebrow="FAQ" title="Questions and answers." />
            <div className="mt-12 space-y-6">
              {faqs.map((faq) => (
                <div key={faq.q} className="rounded-lg border border-brand-line bg-white p-6">
                  <h3 className="font-serif text-lg font-bold text-brand-navy">{faq.q}</h3>
                  <p className="mt-2 text-brand-muted">{faq.a}</p>
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
