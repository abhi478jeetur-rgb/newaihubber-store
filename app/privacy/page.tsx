import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowLeft, ShieldCheck, Lock, Globe, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | GDPR, CCPA & PIPEDA Compliant | NewAIHubber Store',
  description: 'Learn how NewAIHubber Store collects, uses, and protects your personal data in compliance with EU GDPR, US CCPA/CPRA, and Canadian PIPEDA.',
};

export default function PrivacyPolicyPage() {
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
            <Globe className="w-3.5 h-3.5 text-emerald-400" />
            <span>Global Compliance (EU, US, CA)</span>
          </div>
        </div>

        {/* Title Section */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
            <ShieldCheck className="w-4 h-4" /> Privacy & Data Protection
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-neutral-400">
            Effective Date: {lastUpdated} · Governed under EU GDPR, US CCPA/CPRA & Canadian PIPEDA
          </p>
        </div>

        {/* Legal Content */}
        <div className="space-y-8 text-sm sm:text-base leading-relaxed text-neutral-300 border-t border-neutral-800/80 pt-8">

          {/* Section 1: Overview */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-amber-400">1.</span> Introduction & Scope
            </h2>
            <p>
              Welcome to <strong>NewAIHubber Store</strong> (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). We respect your privacy and are committed to protecting personal data collected when you visit our website (<code className="text-amber-300">https://store.newaihubber.com</code>) or purchase our digital products, including AI prompts, eBooks, Notion systems, and software blueprints.
            </p>
            <p>
              This Privacy Policy explains how we collect, process, store, and safeguard your information in full compliance with:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-neutral-400 text-xs sm:text-sm">
              <li><strong>EU & UK General Data Protection Regulation (GDPR)</strong></li>
              <li><strong>United States State Privacy Laws (CCPA / CPRA, VCDPA, CPA)</strong></li>
              <li><strong>Canadian Personal Information Protection and Electronic Documents Act (PIPEDA)</strong></li>
            </ul>
          </section>

          {/* Section 2: Data We Collect */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-amber-400">2.</span> Information We Collect
            </h2>
            <p>We only collect personal information that is necessary to fulfill digital orders and provide customer support:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 space-y-2">
                <h3 className="font-bold text-white text-sm">A. Personal Identification Data</h3>
                <p className="text-xs text-neutral-400">Full name, email address, billing address, and transaction details supplied during checkout.</p>
              </div>
              <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 space-y-2">
                <h3 className="font-bold text-white text-sm">B. Technical & Usage Data</h3>
                <p className="text-xs text-neutral-400">IP address, browser type, device identifiers, country location, referral source, and site interaction logs.</p>
              </div>
            </div>
            <p className="text-xs text-neutral-400 italic">
              Note: We do NOT process or store payment card numbers on our servers. All transactions are securely processed by level-1 PCI-DSS compliant gateways (Stripe / LemonSqueezy / Razorpay).
            </p>
          </section>

          {/* Section 3: Legal Basis for Processing */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-amber-400">3.</span> Legal Bases for Processing (EU GDPR)
            </h2>
            <p>Under GDPR Article 6, we process your personal data under the following legal bases:</p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-300 text-xs sm:text-sm">
              <li><strong>Contractual Performance:</strong> Processing necessary to deliver digital product download links after purchase.</li>
              <li><strong>Legal Obligation:</strong> Retaining tax and sales records for statutory accounting compliance.</li>
              <li><strong>Legitimate Interests:</strong> Preventing fraudulent transactions and improving store performance.</li>
              <li><strong>Consent:</strong> For opt-in marketing newsletters (which you can withdraw at any time).</li>
            </ul>
          </section>

          {/* Section 4: Your Data Rights */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-amber-400">4.</span> Your Global Privacy Rights (GDPR, CCPA & PIPEDA)
            </h2>
            <p>Regardless of your geographic location, we extend comprehensive privacy controls to all users:</p>
            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 space-y-1">
                <h4 className="font-bold text-emerald-400 text-sm">✓ Right to Access & Portability</h4>
                <p className="text-xs text-neutral-400">You may request a copy of all personal data we hold about you in a structured CSV/JSON format.</p>
              </div>
              <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 space-y-1">
                <h4 className="font-bold text-emerald-400 text-sm">✓ Right to Erasure (&ldquo;Right to be Forgotten&rdquo;)</h4>
                <p className="text-xs text-neutral-400">You may request the complete deletion of your personal records from our databases at any time.</p>
              </div>
              <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 space-y-1">
                <h4 className="font-bold text-emerald-400 text-sm">✓ CCPA/CPRA Notice: We Do NOT Sell Your Personal Information</h4>
                <p className="text-xs text-neutral-400">NewAIHubber Store does not sell, rent, or trade your personal information or data to third-party data brokers.</p>
              </div>
            </div>
          </section>

          {/* Section 5: Data Retention & Security */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-amber-400">5.</span> Data Retention & International Transfers
            </h2>
            <p>
              We retain personal data only for as long as necessary to fulfill the purposes outlined in this policy or to satisfy legal, accounting, or reporting requirements. Data is encrypted in transit (TLS 1.3) and at rest (AES-256).
            </p>
          </section>

          {/* Section 6: Contact Information */}
          <section className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Lock className="w-5 h-5 text-amber-400" /> Privacy Enquiries & Data Protection Officer
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300">
              To exercise your privacy rights, request data deletion, or contact our Privacy Office, please email us directly at:
            </p>
            <div className="pt-2">
              <a
                href="mailto:privacy@newaihubber.com"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black font-bold text-xs hover:bg-neutral-200 transition-colors"
              >
                <span>Email Privacy Office (privacy@newaihubber.com)</span>
              </a>
            </div>
          </section>

        </div>

        {/* Footer */}
        <div className="border-t border-neutral-800 pt-6 text-center text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} NewAIHubber Store. All rights reserved.</p>
        </div>

      </div>
    </main>
  );
}
