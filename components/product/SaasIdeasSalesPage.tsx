'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  Zap,
  ShieldCheck,
  Download,
  BookOpen,
  Layers,
  Code2,
  Database,
  Workflow,
  MessageSquare,
  Lock,
  ChevronDown,
  ArrowRight,
  XCircle,
  Search,
  CheckSquare,
  Square,
  Clock,
  TrendingUp,
  HelpCircle,
} from 'lucide-react';
import { Product } from '@/types/product';
import { formatPrice } from '@/lib/utils';
import { EBOOK_CATEGORIES, MICRO_SAAS_IDEAS } from '@/data/ebook-50-saas';

interface SaasIdeasSalesPageProps {
  product: Product;
}

export const SaasIdeasSalesPage: React.FC<SaasIdeasSalesPageProps> = ({ product }) => {
  // Category selection for 50 Ideas gallery
  const [activeCategoryId, setActiveCategoryId] = useState<number>(1);
  const [searchIdea, setSearchIdea] = useState<string>('');

  // Accordion toggle state for FAQ
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Active preview tab for "See What's Inside"
  const [activePreviewTab, setActivePreviewTab] = useState<'toc' | 'card' | 'economics' | 'stack' | 'scorecard' | 'plan'>('toc');

  // Interactive Idea Scorecard State
  const [scorecardChecks, setScorecardChecks] = useState<Record<string, boolean>>({
    narrowAudience: true,
    recurringPain: true,
    workaroundInefficiency: true,
    willingnessToPay: false,
    noCodeFeasibility: true,
  });

  const toggleScorecard = (key: string) => {
    setScorecardChecks((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const tickedCount = Object.values(scorecardChecks).filter(Boolean).length;

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const filteredIdeas = MICRO_SAAS_IDEAS.filter((idea) => {
    const matchesCategory = activeCategoryId === 0 || idea.categoryNumber === activeCategoryId;
    const matchesSearch =
      searchIdea === '' ||
      idea.name.toLowerCase().includes(searchIdea.toLowerCase()) ||
      idea.problemSolved.toLowerCase().includes(searchIdea.toLowerCase()) ||
      idea.targetAudience.toLowerCase().includes(searchIdea.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#1C2822] selection:bg-[#183526] selection:text-white relative font-sans">
      {/* Google Fonts Import for Newsreader / Serif & Plus Jakarta Sans */}
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400..700;1,6..72,400..700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />

      {/* Grid Pattern Background Overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-60"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(30, 45, 35, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(30, 45, 35, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '36px 36px',
        }}
      />

      {/* 1. TOP HEADER */}
      <header className="sticky top-0 z-50 w-full border-b border-[#E4DFD3] bg-[#F7F4EE]/90 backdrop-blur-md transition-colors">
        <div className="container max-w-6xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#17251E] flex items-center hover:opacity-80 transition-opacity"
              style={{ fontFamily: "'Newsreader', Georgia, serif" }}
            >
              <span>50 Micro SaaS</span>
              <span className="text-[#D35A2A] font-sans ml-0.5">.</span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-xs font-semibold text-[#4A5750] hover:text-[#17251E] transition-colors hidden sm:inline-flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Store</span>
            </Link>
            <a
              href="#checkout"
              className="bg-[#183526] hover:bg-[#11271C] text-white font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-md transition-all shadow-sm flex items-center gap-2"
            >
              <span>Get this eBook →</span>
            </a>
          </div>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main className="relative z-10 container max-w-6xl mx-auto px-4 sm:px-8 pt-10 sm:pt-16 pb-32 space-y-24">

        {/* 2. HERO SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pb-12 border-b border-[#E4DFD3]">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Pill Tag */}
            <div className="inline-block px-3.5 py-1.5 rounded-full bg-[#EFECE3] border border-[#D8D2C3] text-[11px] font-mono font-bold tracking-wider text-[#55635B] uppercase">
              2026 EDITION · 50 IDEAS · 8 CATEGORIES · NO CODE REQUIRED
            </div>

            {/* Serif Headline */}
            <div className="space-y-2">
              <h1
                className="text-4xl sm:text-6xl lg:text-7xl font-normal text-[#17251E] tracking-tight leading-[1.08]"
                style={{ fontFamily: "'Newsreader', Georgia, serif" }}
              >
                Stop Wondering<br />
                What SaaS to Build.
              </h1>
              <h2
                className="text-2xl sm:text-4xl text-[#3B5446] font-normal tracking-tight leading-snug"
                style={{ fontFamily: "'Newsreader', Georgia, serif" }}
              >
                Start With 50 Ideas Worth Testing.
              </h2>
            </div>

            {/* Paragraph Text */}
            <p className="text-base sm:text-lg text-[#47544C] leading-relaxed max-w-xl font-normal">
              You no longer need to spend weeks trying to invent the next startup idea. This playbook gives you fifty specific micro SaaS opportunities, plus a practical framework to choose one, validate demand, build the smallest useful version, price it and start finding customers.
            </p>

            {/* CTA & Trust badges */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#checkout"
                className="bg-[#183526] hover:bg-[#11271C] text-white text-sm font-semibold px-8 py-3.5 rounded-md transition-all text-center flex items-center justify-center gap-2 shadow-md"
              >
                <span>Get this eBook ({formatPrice(product.price, product.currency)}) →</span>
              </a>
              <span className="text-xs text-[#6B7770] flex items-center gap-1.5 self-center sm:self-auto font-medium">
                <Lock className="w-3.5 h-3.5 text-[#47544C]" />
                <span>Instant digital access after successful payment</span>
              </span>
            </div>
          </div>

          {/* Right Hero Column: 3D Book Cover Mockup */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] aspect-[3/4] rounded-r-xl border border-[#D5CFBF] bg-[#183526] shadow-2xl overflow-hidden group transition-transform hover:scale-[1.01]">
              <Image
                src="/50 saas idea mocup.png"
                alt="50 Micro SaaS Ideas Book Cover"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent pointer-events-none" />
              {/* Subtle Spine shadow effect */}
              <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-black/50 to-transparent pointer-events-none" />
            </div>
          </div>
        </section>

        {/* 3. THE JUDGMENT PROBLEM */}
        <section className="max-w-3xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#728077] font-bold">THE REAL BOTTLENECK</span>
            <h2
              className="text-3xl sm:text-5xl font-normal text-[#17251E] leading-snug tracking-tight"
              style={{ fontFamily: "'Newsreader', Georgia, serif" }}
            >
              The hardest part isn't building anymore.<br />
              It's knowing what to build.
            </h2>
          </div>
          <div className="space-y-4 text-base text-[#47544C] leading-relaxed font-normal">
            <p>
              AI and no-code tools have made software easier to assemble than ever. What they haven't solved is judgment — the questions that decide whether what you build is worth anything.
            </p>
            <p>
              This book was built to answer those questions — in the right order.
            </p>
          </div>
        </section>

        {/* 4. NOT 50 ONE-LINE IDEAS. 50 STRUCTURED BUSINESS CARDS. */}
        <section className="space-y-8 pt-6 border-t border-[#E4DFD3]">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#728077] font-bold">STRUCTURED PLAYBOOK</span>
            <h2
              className="text-3xl sm:text-4xl font-normal text-[#17251E]"
              style={{ fontFamily: "'Newsreader', Georgia, serif" }}
            >
              Not 50 One-Line Ideas. 50 Structured Business Cards.
            </h2>
            <p className="text-sm text-[#59665E]">
              Every idea in the book follows the same eight-field structure, so you can compare them honestly instead of just liking the sound of one.
            </p>
          </div>

          {/* Sample Idea Card */}
          <div className="p-6 sm:p-10 rounded-2xl border border-[#DCD6C8] bg-white space-y-6 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#EFECE3] pb-5">
              <div>
                <span className="text-xs font-mono font-bold text-[#839188] uppercase tracking-wider">
                  Featured Idea Card • Category 1
                </span>
                <h3
                  className="text-2xl font-normal text-[#17251E] mt-0.5"
                  style={{ fontFamily: "'Newsreader', Georgia, serif" }}
                >
                  Newsletter-to-Social Repurposer
                </h3>
              </div>
              <span className="px-3.5 py-1 rounded-full bg-[#EFECE3] border border-[#DCD6C8] text-xs font-semibold text-[#3B5446] self-start sm:self-auto">
                Build Time: 1–2 Weekends
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-[#38453E]">
              <div className="space-y-2">
                <strong className="text-xs font-mono font-bold uppercase text-[#728077] block">The Problem:</strong>
                <p>A writer publishes a 1,200-word newsletter issue on Tuesday, then spends two hours chopping it into a LinkedIn post, an X thread and three Instagram captions — pure reformatting.</p>
              </div>

              <div className="space-y-2">
                <strong className="text-xs font-mono font-bold uppercase text-[#728077] block">The Solution:</strong>
                <p>Generate platform-native drafts for three channels, edit in place with one-click copy, and a queue so a week's posts are prepared in one sitting.</p>
              </div>

              <div className="space-y-2">
                <strong className="text-xs font-mono font-bold uppercase text-[#728077] block">Target Audience:</strong>
                <p>Newsletter creators with 500+ subscribers, content marketers, solo B2B founders.</p>
              </div>

              <div className="space-y-2">
                <strong className="text-xs font-mono font-bold uppercase text-[#728077] block">Suggested Pricing:</strong>
                <p className="font-semibold text-[#17251E]">$9–29 / month</p>
              </div>

              <div className="space-y-2 md:col-span-2 pt-2 border-t border-[#EFECE3]">
                <strong className="text-xs font-mono font-bold uppercase text-[#728077] block">No-Code Stack & Defensible Edge:</strong>
                <p>Softr or Bubble + Airtable + an LLM API called through Make + Stripe. Generic AI rewriting is a commodity — your defensible edge is voice matching, letting a user anchor every generation to their own past posts.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. 50 OPPORTUNITIES. 8 CATEGORIES. */}
        <section className="space-y-8 pt-6 border-t border-[#E4DFD3]">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#728077] font-bold">EXPLORE ALL IDEAS</span>
            <h2
              className="text-3xl sm:text-4xl font-normal text-[#17251E]"
              style={{ fontFamily: "'Newsreader', Georgia, serif" }}
            >
              50 Opportunities. 8 Different Markets.
            </h2>
            <p className="text-sm text-[#59665E]">
              Every idea is filed under one of eight categories, so you can go straight to the market you already understand.
            </p>
          </div>

          {/* Category Switcher Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
            <button
              onClick={() => setActiveCategoryId(0)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                activeCategoryId === 0
                  ? 'bg-[#183526] text-white'
                  : 'bg-[#EFECE3] text-[#38453E] hover:bg-[#E4DFD3] border border-[#D8D2C3]'
              }`}
            >
              All 50 Ideas
            </button>
            {EBOOK_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryId(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                  activeCategoryId === cat.id
                    ? 'bg-[#183526] text-white'
                    : 'bg-[#EFECE3] text-[#38453E] hover:bg-[#E4DFD3] border border-[#D8D2C3]'
                }`}
              >
                {cat.name} ({cat.count})
              </button>
            ))}
          </div>

          {/* Ideas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredIdeas.map((idea) => (
              <div
                key={idea.id}
                className="p-6 rounded-2xl border border-[#DCD6C8] bg-white space-y-4 hover:border-[#183526] transition-colors flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2 border-b border-[#EFECE3] pb-3">
                    <div>
                      <span className="text-[10px] font-mono font-bold text-[#839188] uppercase">
                        Idea #{idea.id} • Category {idea.categoryNumber}
                      </span>
                      <h4
                        className="text-lg font-normal text-[#17251E]"
                        style={{ fontFamily: "'Newsreader', Georgia, serif" }}
                      >
                        {idea.name}
                      </h4>
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded bg-[#EFECE3] text-[#38453E] border border-[#D8D2C3] shrink-0">
                      {idea.complexity}
                    </span>
                  </div>

                  <p className="text-xs text-[#47544C] leading-relaxed line-clamp-3">
                    <strong className="text-[#17251E]">Problem: </strong>{idea.problemSolved}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#EFECE3] flex items-center justify-between text-xs">
                  <span className="font-mono text-[#6B7770]">{idea.suggestedStack.split('+')[0]}</span>
                  <span className="font-bold text-[#183526]">{idea.pricingModel.split(' ')[0]}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. SEE WHAT'S INSIDE (INTERACTIVE BOOK PREVIEW) */}
        <section className="space-y-8 pt-6 border-t border-[#E4DFD3]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-widest text-[#728077] font-bold">INSIDE THE BOOK</span>
              <h2
                className="text-3xl sm:text-4xl font-normal text-[#17251E]"
                style={{ fontFamily: "'Newsreader', Georgia, serif" }}
              >
                See What's Inside
              </h2>
              <p className="text-sm text-[#59665E]">A look at six real chapters and frameworks from the book.</p>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
              {[
                { id: 'toc', label: 'Table of Contents' },
                { id: 'card', label: 'Idea Card Sample' },
                { id: 'economics', label: 'Honest Economics' },
                { id: 'stack', label: 'Your No-Code Stack' },
                { id: 'scorecard', label: 'Idea Scorecard' },
                { id: 'plan', label: 'Ninety-Day Plan' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActivePreviewTab(tab.id as any)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                    activePreviewTab === tab.id
                      ? 'bg-[#183526] text-white'
                      : 'bg-[#EFECE3] text-[#38453E] hover:bg-[#E4DFD3] border border-[#D8D2C3]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-2xl border border-[#DCD6C8] bg-white space-y-4">
            {activePreviewTab === 'toc' && (
              <div className="space-y-4 text-xs sm:text-sm text-[#38453E]">
                <h3 className="font-bold text-base text-[#17251E]">Table of Contents Overview</h3>
                <ul className="space-y-2 divide-y divide-[#EFECE3]">
                  <li className="pt-2"><strong>Chapter 1:</strong> What is a Micro SaaS? Why ideal for non-technical builders.</li>
                  <li className="pt-2"><strong>Chapter 2:</strong> The 4 No-Code Building Blocks (Database, Interface, Logic, Payments).</li>
                  <li className="pt-2"><strong>Chapter 3:</strong> The 5-Point Idea Scorecard & 14-Day Validation Method.</li>
                  <li className="pt-2"><strong>Chapter 4:</strong> 50 Opportunities across 8 Markets (Complete Business Cards).</li>
                  <li className="pt-2"><strong>Chapter 5:</strong> Your Next 90 Days Roadmap & Getting Your First 10 Customers.</li>
                </ul>
              </div>
            )}

            {activePreviewTab === 'card' && (
              <div className="space-y-2 text-xs sm:text-sm text-[#38453E]">
                <h3 className="font-bold text-base text-[#17251E]">Sample Card Breakdown</h3>
                <p>Every card provides Problem, Solution, Audience, Pricing, Build Time, Risk, Defensible Edge, and No-Code Stack.</p>
              </div>
            )}

            {activePreviewTab === 'economics' && (
              <div className="space-y-2 text-xs sm:text-sm text-[#38453E]">
                <h3 className="font-bold text-base text-[#17251E]">The Honest Economics</h3>
                <p>Operating costs, SaaS subscription pricing, margin calculation, and realistic churn expectations.</p>
              </div>
            )}

            {activePreviewTab === 'stack' && (
              <div className="space-y-2 text-xs sm:text-sm text-[#38453E]">
                <h3 className="font-bold text-base text-[#17251E]">Your No-Code Stack</h3>
                <p>Airtable / Softr / Glide / Make.com / WhatsApp API / Stripe integration blueprints.</p>
              </div>
            )}

            {activePreviewTab === 'scorecard' && (
              <div className="space-y-2 text-xs sm:text-sm text-[#38453E]">
                <h3 className="font-bold text-base text-[#17251E]">The 5-Point Scorecard</h3>
                <p>Photocopy this page for every candidate idea. Four or more ticked, begin validating. Three or fewer, move on.</p>
              </div>
            )}

            {activePreviewTab === 'plan' && (
              <div className="space-y-2 text-xs sm:text-sm text-[#38453E]">
                <h3 className="font-bold text-base text-[#17251E]">Your Ninety-Day Plan</h3>
                <p>Step-by-step roadmap from validation interviews to first 10 paying customers.</p>
              </div>
            )}
          </div>
        </section>

        {/* 7. INTERACTIVE IDEA SCORECARD CHECKLIST */}
        <section className="p-8 sm:p-10 rounded-2xl border border-[#DCD6C8] bg-white space-y-6 shadow-sm">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#728077] font-bold">FRAMEWORK SCORECARD</span>
            <h2
              className="text-3xl sm:text-4xl font-normal text-[#17251E]"
              style={{ fontFamily: "'Newsreader', Georgia, serif" }}
            >
              Don't Choose With Your Gut. Score the Idea First.
            </h2>
            <p className="text-sm text-[#59665E]">
              Photocopy this page for every candidate idea. Four or more ticked, begin validating. Three or fewer, move on.
            </p>
          </div>

          <div className="space-y-3">
            {[
              { key: 'narrowAudience', label: 'Narrow Audience: Can you precisely define the target user? ("Solo newsletter creators" vs "Small businesses")' },
              { key: 'recurringPain', label: 'Recurring Pain: Does the problem happen weekly/daily, creating consistent demand?' },
              { key: 'workaroundInefficiency', label: 'Workaround Inefficiency: Is the current manual process messy and time-consuming?' },
              { key: 'willingnessToPay', label: 'Willingness to Pay: Does this target audience already pay for software tools?' },
              { key: 'noCodeFeasibility', label: 'No-Code Feasibility: Can the MVP be built realistically with visual tools like Softr, Airtable & Make?' },
            ].map((item) => {
              const isChecked = scorecardChecks[item.key];
              return (
                <button
                  key={item.key}
                  onClick={() => toggleScorecard(item.key)}
                  className={`w-full p-4 rounded-xl border text-left flex items-start gap-3 transition-colors ${
                    isChecked
                      ? 'bg-[#EFECE3] border-[#183526] text-[#17251E] font-medium'
                      : 'bg-white border-[#DCD6C8] text-[#59665E] hover:bg-[#F7F4EE]'
                  }`}
                >
                  {isChecked ? (
                    <CheckSquare className="w-5 h-5 text-[#183526] shrink-0 mt-0.5" />
                  ) : (
                    <Square className="w-5 h-5 text-[#A3ADA7] shrink-0 mt-0.5" />
                  )}
                  <span className="text-xs sm:text-sm">{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-[#EFECE3] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-sm font-mono font-bold text-[#17251E] uppercase">
                {tickedCount} of 5 ticked
              </span>
              <p className="text-xs text-[#59665E] mt-0.5">
                {tickedCount >= 4
                  ? '✓ High potential! Ready for the 14-Day Validation Method.'
                  : '⚠️ 3 or fewer ticked. Consider picking another idea.'}
              </p>
            </div>
            <a
              href="#checkout"
              className="bg-[#183526] hover:bg-[#11271C] text-white font-semibold text-xs px-6 py-3 rounded-md transition-all shrink-0"
            >
              Get the Scorecard + All 50 Ideas →
            </a>
          </div>
        </section>

        {/* 8. QUALIFICATIONS */}
        <section className="space-y-8 pt-6 border-t border-[#E4DFD3]">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#728077] font-bold">SUITABILITY</span>
            <h2
              className="text-3xl sm:text-4xl font-normal text-[#17251E]"
              style={{ fontFamily: "'Newsreader', Georgia, serif" }}
            >
              Is This Playbook For You?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl border border-[#DCD6C8] bg-white space-y-4">
              <h3 className="font-bold text-base text-[#17251E] flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#183526]" /> This Book Is For You If…
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#47544C]">
                <li>✓ You want specific, evaluated SaaS opportunities instead of vague advice.</li>
                <li>✓ You are a non-technical founder, freelancer, or solo builder.</li>
                <li>✓ You want a practical framework to validate before building.</li>
                <li>✓ You want real no-code tool stacks (Airtable, Softr, Make, Stripe).</li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl border border-[#DCD6C8] bg-white space-y-4">
              <h3 className="font-bold text-base text-[#728077] flex items-center gap-2">
                <XCircle className="w-5 h-5 text-[#A3ADA7]" /> Probably Not For You If…
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#728077]">
                <li>– You expect overnight passive income promises.</li>
                <li>– You are looking for complex C++ or enterprise software manuals.</li>
                <li>– You expect products to sell themselves without customer conversations.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 9. FAQ ACCORDION */}
        <section className="space-y-8 pt-6 border-t border-[#E4DFD3]">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#728077] font-bold">FREQUENTLY ASKED QUESTIONS</span>
            <h2
              className="text-3xl sm:text-4xl font-normal text-[#17251E]"
              style={{ fontFamily: "'Newsreader', Georgia, serif" }}
            >
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {[
              {
                question: 'Do I need any coding or programming experience?',
                answer: 'No. This handbook is written specifically for non-technical beginners. All 50 ideas are designed around visual tools like Airtable, Softr, Tally, and Make.com.',
              },
              {
                question: 'Are both English and Hinglish editions included?',
                answer: 'Yes! When you purchase, you receive instant download access to BOTH the full English Edition PDF/ePub and the Hinglish Edition PDF/ePub.',
              },
              {
                question: 'Are these just random AI-generated startup ideas?',
                answer: 'No. Every single idea is structured with a defined problem statement, target customer, MVP features, suggested stack, pricing model, complexity rating, and risk factor.',
              },
              {
                question: 'Do I need expensive software tools to start?',
                answer: 'No. The book outlines a free/low-cost stack ($0–$20/month) to build your initial version.',
              },
            ].map((faqItem, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="rounded-xl border border-[#DCD6C8] bg-white overflow-hidden">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left font-semibold text-sm sm:text-base text-[#17251E] flex items-center justify-between gap-4"
                  >
                    <span>{faqItem.question}</span>
                    <ChevronDown className={`w-4 h-4 text-[#728077] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-[#47544C] leading-relaxed border-t border-[#EFECE3] pt-3">
                      {faqItem.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* 10. FINAL CALL TO ACTION */}
        <section id="checkout" className="p-8 sm:p-14 rounded-3xl border border-[#183526] bg-[#183526] text-white text-center space-y-6 shadow-xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2
              className="text-3xl sm:text-5xl font-normal text-white tracking-tight"
              style={{ fontFamily: "'Newsreader', Georgia, serif" }}
            >
              You Don't Need Another Month of Thinking About What to Build.
            </h2>
            <p className="text-sm text-[#C3D1C8]">
              Pick an opportunity. Validate the problem. Build the smallest version. Get it in front of real customers.
            </p>
          </div>

          <div className="max-w-md mx-auto space-y-4">
            <div className="text-center">
              <span className="text-3xl sm:text-4xl font-mono font-bold text-white">
                {formatPrice(product.price, product.currency)}
              </span>
              <p className="text-xs text-[#A1B3A7] mt-1">Instant digital access after successful payment</p>
            </div>

            <a
              href={`mailto:support@newaihubber.com?subject=Order%20${product.slug}`}
              className="w-full bg-[#F7F4EE] hover:bg-white text-[#183526] font-bold text-sm sm:text-base px-8 py-4 rounded-md transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <Lock className="w-4 h-4" />
              <span>Get this eBook ({formatPrice(product.price, product.currency)}) →</span>
            </a>

            <p className="text-[11px] text-[#A1B3A7]">
              50 Micro SaaS You Can Build Without Coding — The Non-Technical Founder's Playbook, 2026 Edition.
            </p>
          </div>
        </section>

      </main>
    </div>
  );
};
