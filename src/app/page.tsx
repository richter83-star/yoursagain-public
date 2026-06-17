import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Problem } from "@/components/Problem";
import { HowItWorks } from "@/components/HowItWorks";
import { Covenant } from "@/components/Covenant";
import { CTA } from "@/components/CTA";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Problem />
        <HowItWorks />
        <Covenant />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
