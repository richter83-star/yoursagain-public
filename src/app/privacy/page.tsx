import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { ContactDetails } from "@/components/ContactDetails";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description: "What information YoursAgain collects, how it is used, and your choices.",
  alternates: { canonical: "/privacy/" },
};

// COUNSEL REVIEW REQUIRED before relying on this notice for any state-specific
// obligations (e.g. CCPA/CPRA, CalOPPA). It describes only practices the site
// actually follows today; update it whenever those practices change.
const EFFECTIVE_DATE = "October 1, 2026";

export default function Privacy() {
  const owner = SITE.legalName || SITE.brand;
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-brand-cream py-20">
          <div className="mx-auto max-w-3xl px-4 md:px-6">
            <SectionHeader eyebrow="Privacy" title="Privacy notice" description={`Effective ${EFFECTIVE_DATE}`} />
            <div className="prose mx-auto mt-10 text-brand-ink">
              <p>
                This notice explains how {owner} (&quot;YoursAgain,&quot; &quot;we&quot;)
                handles information collected through yoursagain.net.
              </p>

              <h3>Information we collect</h3>
              <ul>
                <li>
                  <strong>What you send us</strong> through the contact form: name,
                  email, optional phone number, property address, your message, and
                  your consent to be contacted.
                </li>
                <li>
                  <strong>Eligibility answers</strong> (state, year, estimated value
                  and debt). These stay in your browser and are sent to us only if
                  you then submit the contact form.
                </li>
                <li>
                  <strong>Public records</strong> about tax sales and foreclosures,
                  which we use to identify people who may be owed surplus funds.
                </li>
                <li>
                  <strong>Basic technical data</strong> that web servers record
                  automatically, such as IP address and browser type, used for
                  security and troubleshooting.
                </li>
              </ul>

              <h3>How we use it</h3>
              <p>
                Only to review whether you may have a claim, contact you about your
                request, and, if you become a client, pursue your claim with the
                attorneys handling it. We do not sell your information, use it for
                advertising, or share it with data brokers.
              </p>

              <h3>Who we share it with</h3>
              <p>
                The licensed attorneys and service providers who help us evaluate
                and pursue claims (for example, our database host), under
                confidentiality obligations, and authorities when required by law.
              </p>

              <h3>How long we keep it</h3>
              <p>
                For as long as needed to review your request or handle your case,
                and as required by law or professional record-keeping rules. You
                may ask us to delete inquiry information at any time.
              </p>

              <h3>Your choices and rights</h3>
              <p>
                You can ask to see, correct, or delete the information we hold
                about you, or ask us to stop contacting you. Depending on where you
                live (for example, California), you may have additional rights. We
                will not discriminate against you for using them.
              </p>

              <h3>Contact us</h3>
              <p>Send privacy requests or questions to:</p>
            </div>
            <ContactDetails className="mx-auto mt-2 max-w-[65ch]" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
