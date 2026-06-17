import { Button } from "./Button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-navy text-white">
      <div className="absolute inset-0 opacity-20">
        <svg className="h-full w-full" viewBox="0 0 1440 600" fill="none">
          <g stroke="currentColor" strokeWidth="0.6" opacity="0.25">
            <path d="M-120 300C200 200 400 400 720 300s520-100 840 0v320H-120V300z" />
            <path d="M-120 360c320-80 520 120 840 40s520-160 840-40v260H-120V360z" />
            <path d="M-120 420c320-40 520 80 840 80s520-200 840-80v200H-120V420z" />
          </g>
        </svg>
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-24 md:px-6 md:py-32">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-gold">
              Equity Recovery Network
            </p>
            <h1 className="font-serif text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Reclaim surplus equity that was never the government&apos;s to keep.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-white/80">
              If your home was sold for more than the tax debt owed, the remaining
              surplus may be recoverable. YoursAgain helps former homeowners
              understand their rights and pursue recovery — with no upfront fees
              and no surprise charges under our standard engagement agreement.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/eligibility" variant="secondary">
                Check Eligibility
              </Button>
              <Button href="/contact" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Talk to a Specialist
              </Button>
            </div>
            <p className="mt-4 text-xs text-white/60">
              No fee unless we recover. Subject to your written engagement agreement.
            </p>
          </div>
          <div className="relative hidden md:block">
            <div className="aspect-[4/3] overflow-hidden rounded-lg bg-white/5">
              <Image
                src="/images/hero-home.png"
                alt="A welcoming home at golden hour symbolizing a second chance after foreclosure"
                width={720}
                height={540}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
