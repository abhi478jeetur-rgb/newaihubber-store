import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowLeft, FileText, Scale, ShieldAlert, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service | International Licensing & Rules | NewAIHubber Store',
  description: 'Review the legal Terms of Service, digital product license agreements, and acceptable use guidelines for NewAIHubber Store.',
};

export default function TermsOfServicePage() {
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
            <Scale className="w-3.5 h-3.5 text-amber-400" />
            <span>Terms & Commercial License</span>
          </div>
        </div>

        {/* Title Section */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
            <FileText className="w-4 h-4" /> Binding Legal Agreement
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Terms of Service
          </h1>
          <p className="text-xs sm:text-sm text-neutral-400">
            Effective Date: {lastUpdated} · International Digital Product License Agreement
          </p>
        </div>

        {/* Legal Content */}
        <div className="space-y-8 text-sm sm:text-base leading-relaxed text-neutral-300 border-t border-neutral-800/80 pt-8">

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-amber-400">1.</span> Acceptance of Terms
            </h2>
            <p>
              By accessing, browsing, or purchasing digital products from <strong>NewAIHubber Store</strong> (<code className="text-amber-300">https://store.newaihubber.com</code>), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our website or purchase our products.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-amber-400">2.</span> Digital Product Single-User License Grant
            </h2>
            <p>
              Upon completing a valid purchase of an eBook, prompt library, Notion template, or automation blueprint, NewAIHubber Store grants you a non-exclusive, non-transferable, worldwide personal & commercial license to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-300 text-xs sm:text-sm">
              <li>Read, download, and store the digital files on your personal devices.</li>
              <li>Use the frameworks, ideas, prompts, and blueprints to build software applications, SaaS products, client websites, or internal workflows.</li>
            </ul>
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 space-y-1">
              <h4 className="font-bold text-red-400 text-sm flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4" /> Strict License Restrictions:
              </h4>
              <p className="text-xs text-neutral-300">
                You MAY NOT redistribute, re-sell, bundle, re-license, upload to public torrent repositories, or make the raw eBook/template files publicly accessible to third parties without express written consent from NewAIHubber.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-amber-400">3.</span> Intellectual Property Rights
            </h2>
            <p>
              All original content, graphics, structural frameworks, copy, logos, trademarks, and code available on NewAIHubber Store are the exclusive property of NewAIHubber and protected by international copyright laws.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-amber-400">4.</span> Limitation of Liability
            </h2>
            <p>
              Our digital products and SaaS playbooks provide informational frameworks, case studies, and templates. We do not guarantee specific financial outcomes, revenue targets, or commercial success. In no event shall NewAIHubber be liable for indirect, incidental, or consequential damages.
            </p>
          </section>

          <section className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Scale className="w-5 h-5 text-amber-400" /> Governing Law & Contact
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300">
              For any legal notices, licensing inquiries, or contract questions, please reach out to:
            </p>
            <div>
              <a
                href="mailto:support@newaihubber.com"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black font-bold text-xs hover:bg-neutral-200 transition-colors"
              >
                <span>Email Legal Department (support@newaihubber.com)</span>
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
