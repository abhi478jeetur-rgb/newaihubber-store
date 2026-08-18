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
    <div className="min-h-screen bg-white text-neutral-900 font-sans pb-28 selection:bg-neutral-900 selection:text-white">
      
      {/* 1. HEADER */}
      <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/95 backdrop-blur-md transition-colors">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-600 hover:text-black transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Store</span>
            </Link>
            <div className="h-4 w-px bg-neutral-200 hidden sm:block" />
            <Link href="/" className="items-center gap-2 hidden sm:flex">
              <div className="h-6 w-6 rounded-lg bg-black text-white flex items-center justify-center font-bold text-xs">
                N
              </div>
              <span className="font-bold text-xs text-black tracking-tight">NewAIHubber</span>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-neutral-900 hidden sm:block">
              {formatPrice(product.price, product.currency)}
            </span>
            <a
              href="#checkout"
              className="bg-black hover:bg-neutral-800 text-white font-bold text-xs px-4 py-2.5 rounded-full transition-all shadow-sm flex items-center gap-1.5"
            >
              <span>Get this eBook →</span>
            </a>
          </div>
        </div>
      </header>

      <div className="container max-w-4xl mx-auto px-4 sm:px-6 pt-12 space-y-20">
        
        {/* 2. HERO SECTION */}
        <section className="space-y-6 text-left pt-2 border-b border-neutral-200 pb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-semibold text-neutral-800">
            <Sparkles className="w-3.5 h-3.5 text-black" />
            <span>Full English & Hinglish Editions Included</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-black tracking-tight leading-[1.12]">
            Stop Wondering What SaaS to Build.<br />
            <span className="text-neutral-600">Start With 50 Ideas Worth Testing.</span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-700 font-normal leading-relaxed max-w-3xl">
            You no longer need to spend weeks trying to invent the next startup idea. This handbook gives you fifty specific micro SaaS opportunities, plus a practical framework to choose one, validate demand, build the smallest useful version, price it and start finding customers.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="#checkout"
              className="bg-black hover:bg-neutral-800 text-white text-sm font-bold px-8 py-3.5 rounded-full transition-all text-center flex items-center justify-center gap-2 shadow-md"
            >
              <span>Get this eBook ({formatPrice(product.price, product.currency)}) →</span>
            </a>
            <span className="text-xs text-neutral-500 flex items-center gap-1.5 self-center sm:self-auto">
              <Lock className="w-3.5 h-3.5 text-neutral-400" />
              <span>Instant digital access after successful payment</span>
            </span>
          </div>

          {/* Visual Book Cover Presentation */}
          <div className="relative aspect-[16/9] w-full rounded-2xl border border-neutral-200 bg-neutral-100 overflow-hidden shadow-sm mt-8">
            <Image
              src={product.animatedPreview.posterUrl || product.animatedPreview.url}
              alt="50 Micro SaaS Ideas Handbook Cover"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white bg-black/80 backdrop-blur-md p-3.5 rounded-xl border border-white/10">
              <span className="font-semibold">50 Micro SaaS You Can Build Without Coding</span>
              <span className="font-mono text-neutral-300">PDF + ePub • English & Hinglish</span>
            </div>
          </div>
        </section>

        {/* 3. THE JUDGMENT PROBLEM */}
        <section className="space-y-4 max-w-3xl">
          <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-semibold">THE REAL BOTTLENECK</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-black tracking-tight leading-snug">
            The hardest part isn't building anymore.<br />
            It's knowing what to build.
          </h2>
          <div className="space-y-4 text-sm text-neutral-700 leading-relaxed font-normal pt-2">
            <p>
              AI and no-code tools have made software easier to assemble than ever. What they haven't solved is judgment — the questions that decide whether what you build is worth anything.
            </p>
            <p>
              Most founders fail not because they couldn't write code, but because they built software for a problem nobody was willing to pay to solve. This book was built to answer those questions — in the right order.
            </p>
          </div>
        </section>

        {/* 4. NOT 50 ONE-LINE IDEAS. 50 STRUCTURED BUSINESS CARDS. */}
        <section className="space-y-6 pt-4 border-t border-neutral-200">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-semibold">STRUCTURED DEPTH</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black">
              Not 50 One-Line Ideas. 50 Structured Business Cards.
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600">
              Every idea in the book follows the same eight-field structure, so you can compare them honestly instead of just liking the sound of one.
            </p>
          </div>

          {/* Sample Idea Business Card */}
          <div className="p-6 sm:p-8 rounded-2xl border border-neutral-200 bg-neutral-50 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-200 pb-4">
              <div>
                <span className="text-[11px] font-mono font-bold text-neutral-500 uppercase">Featured Sample Card • Category 1</span>
                <h3 className="font-bold text-lg text-black">ProposalPilot – Client Proposal Generator</h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-white border border-neutral-200 text-xs font-semibold text-neutral-800 self-start sm:self-auto">
                Build Time: 3–5 Days (Easy)
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-neutral-800 leading-relaxed">
              <div className="space-y-1.5">
                <strong className="font-bold text-black uppercase text-[11px] block">1. Pain Point:</strong>
                <p>Freelancers rebuild proposals from scratch in Word or Canva, taking 2–3 hours each time with inconsistent formatting and delayed turnaround.</p>
              </div>

              <div className="space-y-1.5">
                <strong className="font-bold text-black uppercase text-[11px] block">2. Target Customer:</strong>
                <p>Solo freelance designers, copywriters, and web developers sending 5–15 client proposals monthly.</p>
              </div>

              <div className="space-y-1.5">
                <strong className="font-bold text-black uppercase text-[11px] block">3. Suggested No-Code Stack:</strong>
                <p className="font-mono text-black font-semibold">Tally Forms + Airtable + Softr / Glide + Make.com (PDF.co)</p>
              </div>

              <div className="space-y-1.5">
                <strong className="font-bold text-black uppercase text-[11px] block">4. Honest Pricing & Margin:</strong>
                <p>Freemium: 3 free proposals, then $5–$9/month (approx. ₹299–₹499/mo) for unlimited proposals.</p>
              </div>

              <div className="space-y-1.5 md:col-span-2">
                <strong className="font-bold text-black uppercase text-[11px] block">5. Defensible Edge & Major Risk:</strong>
                <p>Many freelancers use free Canva/Notion templates. Your defensible value lies in dynamic client status tracking (Sent/Accepted/Declined) and 1-click automated PDF generation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. 50 OPPORTUNITIES. 10 DIFFERENT MARKETS. */}
        <section className="space-y-6 pt-4 border-t border-neutral-200">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-semibold">MARKET CATEGORIES</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black">
              50 Opportunities. 10 Different Markets.
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600">
              Every idea is filed under one of ten categories, so you can go straight to the market you already understand.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            <button
              onClick={() => setActiveCategoryId(0)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                activeCategoryId === 0
                  ? 'bg-black text-white'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 border border-neutral-200'
              }`}
            >
              All 50 Ideas
            </button>
            {EBOOK_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryId(cat.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                  activeCategoryId === cat.id
                    ? 'bg-black text-white'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 border border-neutral-200'
                }`}
              >
                Cat {cat.id}: {cat.name} ({cat.count})
              </button>
            ))}
          </div>

          {/* Ideas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredIdeas.map((idea) => (
              <div
                key={idea.id}
                className="p-5 rounded-2xl border border-neutral-200 bg-white space-y-3 hover:border-neutral-400 transition-colors flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2 border-b border-neutral-100 pb-2">
                    <div>
                      <span className="text-[10px] font-mono font-bold text-neutral-500 uppercase">
                        Idea #{idea.id} • Category {idea.categoryNumber}
                      </span>
                      <h4 className="font-bold text-sm text-black">{idea.name}</h4>
                      <p className="text-xs text-neutral-600">{idea.tagline}</p>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-neutral-100 text-neutral-800 border border-neutral-200 shrink-0">
                      {idea.complexity}
                    </span>
                  </div>

                  <p className="text-xs text-neutral-700 line-clamp-2 leading-relaxed">
                    <strong className="text-black">Problem: </strong>{idea.problemSolved}
                  </p>
                </div>

                <div className="pt-2 border-t border-neutral-100 flex items-center justify-between text-[11px]">
                  <span className="font-mono text-neutral-600">{idea.suggestedStack.split('+')[0]} + More</span>
                  <span className="font-bold text-black">{idea.pricingModel.split(' ')[0]}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. SEE WHAT'S INSIDE (INTERACTIVE BOOK PAGE VIEWER) */}
        <section className="space-y-6 pt-4 border-t border-neutral-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-semibold">BOOK PREVIEW</span>
              <h2 className="text-2xl font-extrabold text-black">See What's Inside</h2>
              <p className="text-xs text-neutral-600">A look at six real chapters and frameworks from the book.</p>
            </div>

            {/* Preview Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
              {[
                { id: 'toc', label: 'Table of Contents' },
                { id: 'card', label: 'Idea Card Sample' },
                { id: 'economics', label: 'Honest Economics' },
                { id: 'stack', label: 'No-Code Stack' },
                { id: 'scorecard', label: 'Idea Scorecard' },
                { id: 'plan', label: '7-Day Launch' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActivePreviewTab(tab.id as any)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                    activePreviewTab === tab.id
                      ? 'bg-black text-white'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 border border-neutral-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl border border-neutral-200 bg-neutral-50 space-y-4">
            {activePreviewTab === 'toc' && (
              <div className="space-y-3 text-xs text-neutral-800">
                <h3 className="font-bold text-sm text-black">Full Table of Contents</h3>
                <ol className="list-decimal list-inside space-y-2 text-neutral-700">
                  <li><strong>Introduction:</strong> What is a Micro SaaS? Why ideal for non-technical beginners.</li>
                  <li><strong>How No-Code Works:</strong> The 4 core building blocks & honest stack limitations.</li>
                  <li><strong>Idea Selection & Validation:</strong> The ISC Framework & 5-Day Pre-Build Validation Method.</li>
                  <li><strong>No-Code Tool Stack Guide:</strong> Beginner ($0–$20/mo) vs Growth ($40–$100+/mo) stacks.</li>
                  <li><strong>50 Micro SaaS Ideas Across 10 Categories:</strong> Complete 50 structured business cards.</li>
                  <li><strong>7-Day MVP Launch Roadmap:</strong> Step-by-step Day 1 to Day 7 execution milestone plan.</li>
                  <li><strong>Bonus Assets:</strong> 4 ready-to-send outreach DM templates & 4 ChatGPT system prompts.</li>
                </ol>
              </div>
            )}

            {activePreviewTab === 'card' && (
              <div className="space-y-2 text-xs text-neutral-800">
                <h3 className="font-bold text-sm text-black">Sample Card: ReturnDesk (#6)</h3>
                <p className="text-neutral-700 leading-relaxed">
                  <strong>Problem:</strong> Small D2C brands process returns over Instagram DMs, causing lost items and customer frustration.<br />
                  <strong>Solution:</strong> A self-service portal where customers submit return requests without manual DM back-and-forth.<br />
                  <strong>Stack:</strong> Tally Forms + Airtable + Softr + Make.com.
                </p>
              </div>
            )}

            {activePreviewTab === 'economics' && (
              <div className="space-y-2 text-xs text-neutral-800">
                <h3 className="font-bold text-sm text-black">Honest Unit Economics</h3>
                <p className="text-neutral-700 leading-relaxed">
                  Start with a tool budget of $0 to $25/month. Upgrade to paid tiers ($40–$100/mo) only after securing 15–20 active paying subscribers. Maintain healthy unit economics from Day 1.
                </p>
              </div>
            )}

            {activePreviewTab === 'stack' && (
              <div className="space-y-2 text-xs text-neutral-800">
                <h3 className="font-bold text-sm text-black">The 4 Core Building Blocks</h3>
                <p className="text-neutral-700 leading-relaxed">
                  1. Database: Airtable / Google Sheets<br />
                  2. Interface: Softr / Glide / Tally<br />
                  3. Automation: Make.com / Zapier<br />
                  4. Communication & Payments: WhatsApp API, Stripe, Razorpay
                </p>
              </div>
            )}

            {activePreviewTab === 'scorecard' && (
              <div className="space-y-2 text-xs text-neutral-800">
                <h3 className="font-bold text-sm text-black">The ISC Scorecard Criteria</h3>
                <p className="text-neutral-700 leading-relaxed">
                  Evaluate every idea against: Narrow Audience, Recurring Pain, Workaround Inefficiency, Willingness to Pay, and No-Code Feasibility. Score 4 or 5 before building.
                </p>
              </div>
            )}

            {activePreviewTab === 'plan' && (
              <div className="space-y-2 text-xs text-neutral-800">
                <h3 className="font-bold text-sm text-black">7-Day MVP Execution Plan</h3>
                <p className="text-neutral-700 leading-relaxed">
                  Day 1: Discovery Interviews • Day 2: Scope Lock • Day 3: Database • Day 4: Frontend UI • Day 5: Automations • Day 6: Testing • Day 7: Soft Launch.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* 7. THE 14-DAY VALIDATION METHOD */}
        <section className="space-y-4 pt-4 border-t border-neutral-200">
          <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-semibold">VALIDATION FIRST</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-black">
            Before You Spend 3 Months Building, Spend 14 Days Finding Out If Anyone Cares.
          </h2>
          <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
            The handbook outlines a structured 5-Day Pre-Build Validation Method: speak with 5–10 potential customers without pitching, confirm recurring pain patterns, test landing page signups, and check pre-sell commitments before touching database code.
          </p>
        </section>

        {/* 8. INTERACTIVE IDEA SCORECARD CHECKLIST */}
        <section className="p-6 sm:p-8 rounded-2xl border border-neutral-200 bg-neutral-50 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-semibold">INTERACTIVE TOOL</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black">
              Don't Choose With Your Gut. Score the Idea First.
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600">
              Use this 5-point checklist for every candidate idea. Four or more ticked, begin validating. Three or fewer, move on.
            </p>
          </div>

          {/* Interactive Checklist */}
          <div className="space-y-3 text-xs sm:text-sm">
            {[
              { key: 'narrowAudience', label: 'Can you precisely define the user? ("Independent physiotherapists" vs generic "Small business owners")' },
              { key: 'recurringPain', label: 'Does the pain occur regularly (daily/weekly) rather than as a rare, one-time inconvenience?' },
              { key: 'workaroundInefficiency', label: 'Is the current workaround (messy Excel, manual WhatsApp messages) painful and time-consuming?' },
              { key: 'willingnessToPay', label: 'Does this audience already invest in commercial tools or paid software in adjacent workflows?' },
              { key: 'noCodeFeasibility', label: 'Can the core MVP functionality be realistically assembled using visual tools like Airtable, Softr, and Make.com?' },
            ].map((item) => {
              const isChecked = scorecardChecks[item.key];
              return (
                <button
                  key={item.key}
                  onClick={() => toggleScorecard(item.key)}
                  className={`w-full p-4 rounded-xl border text-left flex items-start gap-3 transition-colors ${
                    isChecked
                      ? 'bg-white border-black text-black font-semibold shadow-sm'
                      : 'bg-neutral-100 border-neutral-200 text-neutral-600 hover:bg-neutral-200'
                  }`}
                >
                  {isChecked ? (
                    <CheckSquare className="w-5 h-5 text-black shrink-0 mt-0.5" />
                  ) : (
                    <Square className="w-5 h-5 text-neutral-400 shrink-0 mt-0.5" />
                  )}
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Score Result Indicator */}
          <div className="pt-4 border-t border-neutral-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-bold text-black uppercase">
                Scorecard Result: {tickedCount} of 5 ticked
              </span>
              <p className="text-xs text-neutral-600 mt-0.5">
                {tickedCount >= 4
                  ? '✓ Excellent candidate! Proceed to the 5-Day Pre-Build Validation Process.'
                  : '⚠️ 3 or fewer ticked. Consider refining the audience or picking another idea.'}
              </p>
            </div>
            <a
              href="#checkout"
              className="bg-black hover:bg-neutral-800 text-white font-bold text-xs px-5 py-2.5 rounded-full transition-all shrink-0"
            >
              Get the Full Scorecard + 50 Ideas →
            </a>
          </div>
        </section>

        {/* 9. QUALIFICATIONS & SUITABILITY */}
        <section className="space-y-6 pt-4 border-t border-neutral-200">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-semibold">FIT CHECK</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black">
              Everything You Need to Go From "What Should I Build?" to a Real Plan.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-neutral-200 bg-white space-y-4">
              <h3 className="font-bold text-base text-black flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-black" /> This Book Is For You If…
              </h3>
              <ul className="space-y-2 text-xs text-neutral-700">
                <li>✓ You are a student, freelancer, agency owner, or non-technical builder.</li>
                <li>✓ You want to build cash-flow positive software tools without hiring developers.</li>
                <li>✓ You want a structured evaluation framework to validate demand before building.</li>
                <li>✓ You want exact no-code tool recommendations (Airtable, Softr, Make, WhatsApp API).</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl border border-neutral-200 bg-white space-y-4">
              <h3 className="font-bold text-base text-neutral-500 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-neutral-400" /> Probably Not For You If…
              </h3>
              <ul className="space-y-2 text-xs text-neutral-500">
                <li>– You expect overnight passive income or get-rich-quick shortcuts.</li>
                <li>– You want a deep C++ or Python coding manual for native enterprise software.</li>
                <li>– You expect software to sell itself without talking to target users.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 10. HONEST ECONOMICS */}
        <section className="p-6 sm:p-8 rounded-2xl border border-neutral-200 bg-neutral-50 space-y-4">
          <h2 className="text-xl font-bold text-black">No Overnight-Success Promises. That's the Point.</h2>
          <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
            The book deliberately covers what most idea lists skip: real economics, honest pricing, operating costs, validation, churn, difficulty, competition, distribution — and the situations where an idea should be abandoned. The goal isn't to convince you that every idea will work. The goal is to help you make better decisions before investing your time.
          </p>
        </section>

        {/* 11. FAQ ACCORDION */}
        <section className="space-y-6 pt-4 border-t border-neutral-200">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-semibold">QUESTIONS</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-3">
            {[
              {
                question: 'Do I need any coding or programming experience?',
                answer: 'No. This handbook is written specifically for non-technical beginners. All 50 ideas are designed around visual tools like Airtable, Softr, Tally, and Make.com.',
              },
              {
                question: 'Are both English and Hinglish editions included in one purchase?',
                answer: 'Yes! When you complete your purchase, you receive instant download access to BOTH the full English Edition PDF/ePub and the comprehensive Hinglish Edition PDF/ePub.',
              },
              {
                question: 'Are these just random AI-generated startup ideas?',
                answer: 'No. Every single idea is structured with a defined problem statement, target customer, MVP features, suggested stack, pricing model, complexity rating, validation step, and major risk factor.',
              },
              {
                question: 'Do I need expensive software tools to start?',
                answer: 'No. The book outlines a Beginner Stack ($0–$20/month using free tiers) and a Growth Stack ($40–$100+/month) to upgrade only after securing paying subscribers.',
              },
              {
                question: 'Is this a physical book or a digital download?',
                answer: 'This is a digital eBook. Immediately after payment, you receive instant download access to PDF and ePub files.',
              },
            ].map((faqItem, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="rounded-xl border border-neutral-200 bg-white overflow-hidden">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 text-left font-bold text-xs sm:text-sm text-black flex items-center justify-between gap-4"
                  >
                    <span>{faqItem.question}</span>
                    <ChevronDown className={`w-4 h-4 text-neutral-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 text-xs text-neutral-700 leading-relaxed border-t border-neutral-100 pt-3">
                      {faqItem.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* 12. FINAL CALL TO ACTION */}
        <section id="checkout" className="p-8 sm:p-12 rounded-3xl border border-neutral-900 bg-black text-white text-center space-y-6 shadow-xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              You Don't Need Another Month of Thinking About What to Build.
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300">
              Pick an opportunity. Validate the problem. Build the smallest version. Get it in front of real customers.
            </p>
          </div>

          <div className="max-w-md mx-auto space-y-4">
            <div className="text-center">
              <span className="text-3xl font-extrabold font-mono text-white">
                {formatPrice(product.price, product.currency)}
              </span>
              <p className="text-[11px] text-neutral-400">Digital eBook • Instant access after successful payment</p>
            </div>

            <a
              href={`mailto:support@newaihubber.com?subject=Order%20${product.slug}`}
              className="w-full bg-white hover:bg-neutral-200 text-black font-bold text-sm px-8 py-4 rounded-full transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <Lock className="w-4 h-4" />
              <span>Get this eBook ({formatPrice(product.price, product.currency)}) →</span>
            </a>

            <p className="text-[11px] text-neutral-400">
              50 Micro SaaS You Can Build Without Coding — The Non-Technical Founder's Playbook, 2026 Edition.
            </p>
          </div>
        </section>

      </div>

      {/* 13. STICKY BOTTOM PURCHASE BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 border-t border-neutral-200 backdrop-blur-md py-3 px-4 shadow-lg">
        <div className="container max-w-4xl mx-auto flex items-center justify-between gap-4">
          <div className="hidden sm:block">
            <p className="text-xs font-bold text-black line-clamp-1">50 Micro SaaS You Can Build Without Coding</p>
            <p className="text-[10px] text-neutral-500">English & Hinglish Editions Included</p>
          </div>

          <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-4">
            <span className="text-sm font-extrabold font-mono text-black">
              {formatPrice(product.price, product.currency)}
            </span>
            <a
              href="#checkout"
              className="bg-black hover:bg-neutral-800 text-white text-xs font-bold px-5 py-2.5 rounded-full transition-all shrink-0"
            >
              Get this eBook →
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};
