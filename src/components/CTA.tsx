import { Button } from "./Button";

export function CTA() {
  return (
    <section className="bg-brand-cream py-20">
      <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
        <h2 className="font-serif text-3xl font-bold text-brand-navy md:text-4xl">
          You paid the debt. Now reclaim the surplus.
        </h2>
        <p className="mt-4 text-lg text-brand-muted">
          Start with a free eligibility check. If we cannot help, we will tell you
          directly — and your information stays yours.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/eligibility">Check Eligibility</Button>
          <Button href="/contact" variant="outline">Talk to a Specialist</Button>
          <Button href="/portal" variant="outline">Client Login</Button>
        </div>
      </div>
    </section>
  );
}
