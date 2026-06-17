import { SectionHeader } from "./SectionHeader";
import { Shield, EyeOff, HeartHandshake, FileLock2 } from "lucide-react";

const pledges = [
  {
    icon: Shield,
    title: "No creating foreclosures",
    body: "We do not lobby for harsher tax laws or faster seizures. We enter only after the harm has occurred.",
  },
  {
    icon: EyeOff,
    title: "No panopticon",
    body: "We use public records and client-consented data only. No mass surveillance, no data resale.",
  },
  {
    icon: HeartHandshake,
    title: "No hidden extraction",
    body: "Fees are success-based, disclosed in writing, and capped by your engagement agreement. No fee if there is no recovery.",
  },
  {
    icon: FileLock2,
    title: "Complete audit trail",
    body: "Every material investigation step, counsel decision, and financial movement is logged for accountability and review.",
  },
];

export function Covenant() {
  return (
    <section className="bg-brand-navy py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeader
          eyebrow="Our Covenant"
          title="Built to help, not to exploit."
          description="Power without constraints becomes predatory. These rules are non-negotiable."
          className="text-white"
        />
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {pledges.map((p) => (
            <div key={p.title} className="rounded-lg border border-white/10 bg-white/5 p-6">
              <p.icon className="h-8 w-8 text-brand-gold" />
              <h3 className="mt-4 font-serif text-lg font-bold">{p.title}</h3>
              <p className="mt-2 text-sm text-white/70">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
