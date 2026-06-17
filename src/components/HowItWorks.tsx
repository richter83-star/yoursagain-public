import { SectionHeader } from "./SectionHeader";
import { Search, MessageSquare, FileCheck, Scale, HandCoins } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Identify",
    body: "We scan public records to find cases where a home was sold for more than the tax debt owed.",
  },
  {
    icon: MessageSquare,
    title: "Outreach",
    body: "A local representative explains your rights in plain language — no pressure, no surprises.",
  },
  {
    icon: FileCheck,
    title: "Review",
    body: "State counsel reviews the foreclosure history, sale price, deadlines, and legal path.",
  },
  {
    icon: Scale,
    title: "File",
    body: "If viable, we prepare claims, demand letters, or litigation to recover the surplus.",
  },
  {
    icon: HandCoins,
    title: "Return",
    body: "Recovered funds go to a controlled escrow. You receive the majority; we receive a pre-agreed success fee.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-white py-20 md:py-28" id="process">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeader
          eyebrow="How It Works"
          title="Five steps from foreclosure to recovery."
          description="We handle the complexity so you can focus on moving forward."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, i) => (
            <div key={step.title} className="relative text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-sage/10 text-brand-sage">
                <step.icon className="h-6 w-6" />
              </div>
              <p className="mt-4 text-xs font-bold uppercase tracking-wider text-brand-gold">
                Step {i + 1}
              </p>
              <h3 className="mt-2 font-serif text-lg font-bold text-brand-navy">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-brand-muted">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
