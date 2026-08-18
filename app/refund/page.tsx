import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowLeft, RefreshCw, ShieldCheck, HelpCircle, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Refund & Return Policy | EU & Global Consumer Rights | NewAIHubber Store',
  description: 'Understand the refund, exchange, and cancellation terms for digital downloads purchased from NewAIHubber Store.',
};

export default function RefundPolicyPage() {
  const lastUpdated = 'August 18, 2026';

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-neutral-200 py-12 px-4 sm:px-6 lg:px-8 selection:bg-amber-500 selection:text-black font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header Navigation */}
        <div className="flex items-center justify-between border-b border-neutral-800 pb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Store</span>
          </Link>

          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[11px] font-mono text-neutral-400">
            <RefreshCw className="w-3.5 h-3.5 text-emerald-400" />
            <span>Digital Download Guarantee</span>
          </div>
        </div>

        {/* Title Section */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
            <ShieldCheck className="w-4 h-4" /> Consumer Protection
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Refund & Cancellation Policy
          </h1>
          <p className="text-xs sm:text-sm text-neutral-400">
            Effective Date: {lastUpdated} · EU Consumer Rights Directive & Global Digital Standards
          </p>
        </div>

        {/* Legal Content */}
        <div className="space-y-8 text-sm sm:text-base leading-relaxed text-neutral-300 border-t border-neutral-800/80 pt-8">

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-amber-400">1.</span> Nature of Instant Digital Products
            </h2>
            <p>
              All products sold on <strong>NewAIHubber Store</strong> (including PDF handbooks, ePub files, Notion OS templates, prompt files, and code blueprints) are digital products delivered electronically immediately upon completed payment.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-amber-400">2.</span> EU Right of Withdrawal Notice
            </h2>
            <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 space-y-2">
              <p className="text-xs sm:text-sm text-neutral-300">
                Under EU Consumer Rights Directive (Article 16(m)), the 14-day right of withdrawal for digital content does not apply once performance has begun with your prior express consent and acknowledgment that you lose your right of withdrawal once instant download access is granted.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-amber-400">3.</span> Refund Eligibility & Exceptions
            </h2>
            <p>We strive for 100% customer satisfaction. Refund requests are considered on a case-by-case basis under the following eligible conditions:</p>
            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 space-y-1">
                <h4 className="font-bold text-white text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Corrupted or Unusable Files
                </h4>
                <p className="text-xs text-neutral-400">If a downloaded file is corrupted or technically defective and our support team cannot replace it within 48 hours.</p>
              </div>
              <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 space-y-1">
                <h4 className="font-bold text-white text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Duplicate Charge
                </h4>
                <p className="text-xs text-neutral-400">If you were mistakenly charged twice for the same transaction, a full refund for the extra charge will be processed immediately.</p>
              </div>
            </div>
          </section>

          <section className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-amber-400" /> Need Help With Your Order?
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300">
              If you experience any issues accessing your digital download or have questions about a recent purchase, please contact our support desk:
            </p>
            <div>
              <a
                href="mailto:support@newaihubber.com"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black font-bold text-xs hover:bg-neutral-200 transition-colors"
              >
                <span>Contact Support Desk (support@newaihubber.com)</span>
              </a>
            </div>
          </section>

        </div>

        <div className="border-t border-neutral-800 pt-6 text-center text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} NewAIHubber Store. All rights reserved.</p>
        </div>

      </div>
    </main>
  );
}
