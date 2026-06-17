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
                records analysis, and local partners to identify former
                homeowners whose properties were sold for more than the tax
                debt owed — and to help them recover surplus equity that should
                have been returned.
              </p>
              <p>
                The Supreme Court clarified the constitutional boundary in{" "}
                <em>Tyler v. Hennepin County</em> (2023): when a government sells a
                home to satisfy a tax debt and keeps the surplus above what is
                owed, it can constitute a taking under the Fifth Amendment. Many
                states have also changed their laws to require surplus equity to
                be returned. State procedures and deadlines still vary, so each
                case must be reviewed individually.
              </p>
              <p>
                Even so, three problems remain. Many victims do not know they
                may have a claim. The recovery process is legally and
                administratively complex. And the opportunity is fragmented
                across thousands of counties. YoursAgain exists to solve those
                three problems without becoming another predatory actor.
              </p>
              <p>
                We are structured as a distributed network: a central research
                and legal spine supports state-level entities and county-level
                partners. Independent legal review monitors every jurisdiction,
                sets risk thresholds, and ensures that a problem in one county
                cannot compromise the whole network.
              </p>
              <p>
                Our work is governed by an explicit covenant: we do not cause
                foreclosures, we do not surveil, we do not extract hidden fees,
                and we never repurpose client data. Fees are success-based and
                disclosed in writing before any work begins.
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
