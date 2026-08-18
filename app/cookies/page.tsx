import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowLeft, Cookie, Shield, Info, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cookie Policy | EU ePrivacy & GDPR Compliant | NewAIHubber Store',
  description: 'Learn how NewAIHubber Store uses cookies and local storage technology in compliance with EU ePrivacy Directive and GDPR standards.',
};

export default function CookiePolicyPage() {
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
            <Cookie className="w-3.5 h-3.5 text-amber-400" />
            <span>ePrivacy & GDPR Consent</span>
          </div>
        </div>

        {/* Title Section */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
            <Cookie className="w-4 h-4" /> Transparency & Controls
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Cookie Policy
          </h1>
          <p className="text-xs sm:text-sm text-neutral-400">
            Effective Date: {lastUpdated} · EU ePrivacy Directive & GDPR Compliant
          </p>
        </div>

        {/* Legal Content */}
        <div className="space-y-8 text-sm sm:text-base leading-relaxed text-neutral-300 border-t border-neutral-800/80 pt-8">

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-amber-400">1.</span> What Are Cookies?
            </h2>
            <p>
              Cookies are small text files placed on your computer or mobile device when you visit websites. They are widely used to make websites work efficiently, store user preferences (such as Light/Dark mode), and provide analytics information to store owners.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-amber-400">2.</span> Categories of Cookies We Use
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-white text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Essential & Technical Cookies (Strictly Necessary)
                  </h3>
                  <span className="text-[10px] font-mono uppercase bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded">Always Active</span>
                </div>
                <p className="text-xs text-neutral-400">
                  Required for core store functionality, session security, checkout navigation, and storing theme preferences (<code className="text-amber-300">store_theme</code> in localStorage).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-white text-sm flex items-center gap-2">
                    <Info className="w-4 h-4 text-amber-400" /> Performance & Analytics Cookies
                  </h3>
                  <span className="text-[10px] font-mono uppercase bg-neutral-800 text-neutral-400 px-2 py-0.5 rounded">Optional</span>
                </div>
                <p className="text-xs text-neutral-400">
                  Aggregated, anonymized statistics that help us understand page views, popular digital products, and site performance metrics.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-amber-400">3.</span> How to Manage & Disable Cookies
            </h2>
            <p>
              You can control and manage cookies through your browser settings. You can delete existing cookies and block new cookies from being stored.
            </p>
            <ul className="list-disc pl-6 space-y-1 text-neutral-400 text-xs sm:text-sm">
              <li>Google Chrome: Settings → Privacy and Security → Third-party cookies</li>
              <li>Mozilla Firefox: Settings → Privacy & Security → Cookies and Site Data</li>
              <li>Apple Safari: Preferences → Privacy → Block all cookies</li>
              <li>Microsoft Edge: Settings → Cookies and site permissions</li>
            </ul>
          </section>

          <section className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Shield className="w-5 h-5 text-amber-400" /> Questions About Cookies?
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300">
              If you have any questions regarding our use of cookies or local storage data, please contact our support team at:
            </p>
            <div>
              <a
                href="mailto:support@newaihubber.com"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black font-bold text-xs hover:bg-neutral-200 transition-colors"
              >
                <span>Email Support (support@newaihubber.com)</span>
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
