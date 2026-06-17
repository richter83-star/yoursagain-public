"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  FileText,
  Clock,
  DollarSign,
  Home,
  MessageSquare,
  AlertCircle,
} from "lucide-react";

const demoCase = {
  reference: "YA-2026-TX-01482",
  property: "7421 Oak Ridge Blvd, Austin, TX 78731",
  maskedProperty: "7421 Oak R*** Blvd, Au****, TX",
  status: "Filing",
  statusLabel: "Claim Filed",
  openedAt: "2026-03-12",
  estimatedRecoveryLow: 127000,
  estimatedRecoveryHigh: 154000,
  nextStep: "Awaiting county response to demand letter.",
  nextDeadline: "2026-07-15",
  documents: [
    { name: "Engagement Agreement", date: "2026-03-12" },
    { name: "Demand Letter", date: "2026-04-03" },
    { name: "County Sale Record", date: "2026-03-14" },
  ],
  messages: [
    {
      from: "YoursAgain",
      date: "2026-05-20",
      text: "Demand letter filed with Travis County. We expect a response within 45 days.",
    },
    {
      from: "YoursAgain",
      date: "2026-04-03",
      text: "We identified a surplus of approximately $127,000–$154,000 based on the 2023 sale records.",
    },
  ],
};

function formatCurrency(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

export default function PortalDashboard() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  function signOut() {
    document.cookie = "ya_portal_demo=; path=/; max-age=0";
    router.push("/portal");
  }

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-brand-cream">
        <div className="mx-auto max-w-5xl px-4 py-10 md:px-6">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-gold">
                Client Portal
              </p>
              <h1 className="font-serif text-2xl font-bold text-brand-navy">
                Case {demoCase.reference}
              </h1>
            </div>
            <Button variant="outline" onClick={signOut}>
              Sign Out
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-brand-line bg-white p-5">
              <div className="flex items-center gap-3">
                <Home className="h-5 w-5 text-brand-sage" />
                <p className="text-sm font-medium text-brand-navy">Property</p>
              </div>
              <p className="mt-2 text-sm text-brand-muted">{demoCase.maskedProperty}</p>
            </div>

            <div className="rounded-lg border border-brand-line bg-white p-5">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-brand-sage" />
                <p className="text-sm font-medium text-brand-navy">Status</p>
              </div>
              <p className="mt-2 text-sm font-bold text-brand-navy">{demoCase.statusLabel}</p>
            </div>

            <div className="rounded-lg border border-brand-line bg-white p-5">
              <div className="flex items-center gap-3">
                <DollarSign className="h-5 w-5 text-brand-sage" />
                <p className="text-sm font-medium text-brand-navy">Estimated Recovery</p>
              </div>
              <p className="mt-2 text-sm font-bold text-brand-navy">
                {formatCurrency(demoCase.estimatedRecoveryLow)} –{" "}
                {formatCurrency(demoCase.estimatedRecoveryHigh)}
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="rounded-lg border border-brand-line bg-white p-6">
              <h2 className="font-serif text-lg font-bold text-brand-navy">
                Next Steps
              </h2>
              <p className="mt-2 text-brand-muted">{demoCase.nextStep}</p>
              <div className="mt-4 flex items-start gap-3 rounded-md bg-brand-cream p-3">
                <AlertCircle className="h-5 w-5 text-brand-gold" />
                <div>
                  <p className="text-sm font-medium text-brand-navy">Upcoming deadline</p>
                  <p className="text-sm text-brand-muted">{demoCase.nextDeadline}</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-brand-line bg-white p-6">
              <h2 className="font-serif text-lg font-bold text-brand-navy">
                Documents
              </h2>
              <ul className="mt-3 space-y-3">
                {demoCase.documents.map((doc) => (
                  <li key={doc.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-brand-sage" />
                      <span className="text-sm text-brand-navy">{doc.name}</span>
                    </div>
                    <span className="text-xs text-brand-muted">{doc.date}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 rounded-lg border border-brand-line bg-white p-6">
            <h2 className="font-serif text-lg font-bold text-brand-navy">
              Messages
            </h2>
            <div className="mt-4 space-y-4">
              {demoCase.messages.map((m) => (
                <div key={m.date} className="flex gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-navy">
                    <MessageSquare className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-brand-navy">
                      {m.from}{" "}
                      <span className="font-normal text-brand-muted">— {m.date}</span>
                    </p>
                    <p className="text-sm text-brand-muted">{m.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
