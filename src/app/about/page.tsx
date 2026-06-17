import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";

export default function About() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-brand-cream py-20">
          <div className="mx-auto max-w-3xl px-4 md:px-6">
            <SectionHeader
              eyebrow="About"
              title="A network built to enforce a simple right."
            />
            <div className="prose prose-lg mx-auto mt-10 text-brand-ink">
              <p>
                YoursAgain is an equity-recovery network. We combine AI, public
                records analysis, and local human partners to identify former
                homeowners whose properties were sold for more than the tax
                debt owed — and to recover the surplus that should never have
                been kept.
              </p>
              <p>
                The Supreme Court made the law clear in{" "}
                <em>Tyler v. Hennepin County</em> (2023): when a government sells a
                home to satisfy a tax debt and keeps the surplus, it commits a
                taking under the Fifth Amendment. The homeowner must “render unto
                Caesar what is Caesar’s, but no more.”
              </p>
              <p>
                Even so, three problems remain. Most victims do not know they
                have a claim. The recovery process is legally and
                administratively complex. And the opportunity is fragmented
                across thousands of counties. YoursAgain exists to solve those
                three problems without becoming another predatory actor.
              </p>
              <p>
                We are structured as a federated swarm: a central AI and legal
                spine supports state-level entities and county-level human
                anchors. A parallel legal colony monitors every jurisdiction,
                sets risk thresholds, and ensures that a problem in one county
                cannot topple the network.
              </p>
              <p>
                Our work is governed by an explicit covenant: we do not cause
                foreclosures, we do not surveil, we do not extract hidden fees,
                and we never repurpose client data. Fees are success-based and
                disclosed up front.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button href="/eligibility">Check Eligibility</Button>
              <Button href="/contact" variant="outline">Contact Us</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
