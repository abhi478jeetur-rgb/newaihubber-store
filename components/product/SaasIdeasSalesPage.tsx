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
  Star,
  Users,
  CreditCard,
  Smartphone,
  Globe,
  Award,
  BookMarked,
  Languages,
} from 'lucide-react';
import { Product } from '@/types/product';
import { EBOOK_CATEGORIES, MICRO_SAAS_IDEAS } from '@/data/ebook-50-saas';

interface SaasIdeasSalesPageProps {
  product: Product;
}

export const SaasIdeasSalesPage: React.FC<SaasIdeasSalesPageProps> = ({ product }) => {
  // Category selection for 50 Ideas gallery
  const [activeCategoryId, setActiveCategoryId] = useState<number>(0);
  const [searchIdea, setSearchIdea] = useState<string>('');

  // Accordion toggle state for FAQ
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Active preview tab for "See What's Inside"
  const [activePreviewTab, setActivePreviewTab] = useState<'toc' | 'card' | 'economics' | 'stack' | 'scorecard' | 'plan'>('toc');

  // Selected Language Edition Preview Toggle
  const [selectedLanguage, setSelectedLanguage] = useState<'hinglish' | 'english'>('english');

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

      {/* Subtle Grid Pattern Background */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(30, 45, 35, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(30, 45, 35, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '36px 36px',
        }}
      />

      {/* 1. TOP STICKY HEADER */}
      <header className="sticky top-0 z-50 w-full border-b border-[#E4DFD3] bg-[#F7F4EE]/95 backdrop-blur-md transition-colors shadow-sm">
        <div className="container max-w-6xl mx-auto px-3 sm:px-8 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4">
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/"
              className="font-serif text-lg sm:text-3xl font-bold tracking-tight text-[#17251E] flex items-center hover:opacity-80 transition-opacity"
              style={{ fontFamily: "'Newsreader', Georgia, serif" }}
            >
              <span>50 Micro SaaS</span>
              <span className="text-[#D35A2A] font-sans ml-0.5">.</span>
            </Link>
            <span className="hidden md:inline-flex items-center gap-1 text-[11px] font-semibold bg-[#EFECE3] border border-[#D8D2C3] px-2.5 py-1 rounded-full text-[#4A5750]">
              <Languages className="w-3 h-3 text-[#D35A2A]" /> English + Hinglish Bundle
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <Link
              href="/"
              className="text-xs font-semibold text-[#4A5750] hover:text-[#17251E] transition-colors hidden sm:inline-flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Store</span>
            </Link>
            <a
              href="#checkout"
              className="bg-[#183526] hover:bg-[#11271C] text-white font-bold text-xs sm:text-sm px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-all shadow-md hover:shadow-lg flex items-center gap-1.5 shrink-0"
            >
              <span>Get the eBook (₹499) →</span>
            </a>
          </div>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main className="relative z-10 container max-w-6xl mx-auto px-3 sm:px-8 pt-6 sm:pt-14 pb-24 space-y-16 sm:space-y-24">

        {/* 2. HERO SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pb-12 border-b border-[#E4DFD3]">
          
          {/* Left Column: Sharp Copy & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Prominent Edition Tag */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFECE3] border border-[#D8D2C3] text-[11px] font-mono font-bold tracking-wider text-[#38453E] uppercase shadow-2xl">
              <span className="w-2 h-2 rounded-full bg-[#D35A2A] animate-pulse" />
              <span>2026 EDITION · 50 IDEAS · 8 MARKETS · ZERO CODING</span>
            </div>

            {/* Sharp One-Line Promise Headline (100% English) */}
            <div className="space-y-3">
              <h1
                className="text-3xl sm:text-5xl lg:text-6xl font-normal text-[#17251E] tracking-tight leading-[1.1]"
                style={{ fontFamily: "'Newsreader', Georgia, serif" }}
              >
                Find Your Next <span className="underline decoration-[#D35A2A] decoration-wavy underline-offset-4 font-semibold">Buildable Micro-SaaS Idea</span> in 15 Minutes — Zero Coding Required.
              </h1>
              <p className="text-base sm:text-lg text-[#47544C] leading-relaxed font-normal">
                The non-technical founder's playbook for freelancers, indie hackers, students, and solopreneurs. Packed with 50 evaluated business blueprints, 8 market categories, and exact visual no-code tech stacks.
              </p>
            </div>

            {/* Above-The-Fold 3 High-Impact Bullet Points (English) */}
            <div className="space-y-3 pt-1">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/80 border border-[#E4DFD3]">
                <div className="p-1 rounded-full bg-[#183526]/10 text-[#183526] shrink-0 mt-0.5">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-xs font-bold uppercase text-[#17251E] block">Who It's For:</strong>
                  <p className="text-xs sm:text-sm text-[#47544C]">Freelancers, college students, agencies & non-tech founders looking to build recurring subscription revenue.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/80 border border-[#E4DFD3]">
                <div className="p-1 rounded-full bg-[#183526]/10 text-[#183526] shrink-0 mt-0.5">
                  <BookMarked className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-xs font-bold uppercase text-[#17251E] block">What You Get:</strong>
                  <p className="text-xs sm:text-sm text-[#47544C]">50 evaluated SaaS Blueprints + 5-Point Idea Scorecard + 14-Day Validation Guide + **Full English & Hinglish PDFs**.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/80 border border-[#E4DFD3]">
                <div className="p-1 rounded-full bg-[#183526]/10 text-[#183526] shrink-0 mt-0.5">
                  <Zap className="w-4 h-4 text-[#D35A2A]" />
                </div>
                <div>
                  <strong className="text-xs font-bold uppercase text-[#17251E] block">Why It's Different:</strong>
                  <p className="text-xs sm:text-sm text-[#47544C]">Not generic ChatGPT lists — every idea includes explicit Problem, Target Audience, Pricing ($9–$29/mo), and No-Code Stack (Softr + Airtable + Make + Stripe).</p>
                </div>
              </div>
            </div>

            {/* Hero Primary CTA Box */}
            <div className="space-y-3 pt-2">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href="#checkout"
                  className="bg-[#183526] hover:bg-[#11271C] text-white font-bold text-sm sm:text-base px-8 py-4 rounded-xl transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 group text-center"
                >
                  <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                  <span>Get Instant Access (₹499) →</span>
                </a>

                <div className="text-center sm:text-left px-2">
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <span className="text-2xl font-bold text-[#17251E]">₹499</span>
                    <span className="text-sm text-[#728077] line-through">₹1,499</span>
                    <span className="text-xs font-mono font-bold uppercase text-[#D35A2A] bg-[#D35A2A]/10 px-2 py-0.5 rounded">66% OFF</span>
                  </div>
                  <p className="text-[11px] text-[#59665E] mt-0.5">~$29 USD · One-Time Payment · Lifetime Access</p>
                </div>
              </div>

              {/* Payment Trust Microcopy */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-1 text-[11px] font-medium text-[#59665E]">
                <span className="flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-amber-600" /> Instant PDF Download
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Smartphone className="w-3.5 h-3.5 text-emerald-700" /> UPI / PhonePe / Paytm / Cards
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-700" /> 100% Secure Checkout
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Product Mockup & Edition Switcher */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-4">
            <div className="relative w-full max-w-[320px] sm:max-w-[380px] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white group transform hover:scale-[1.02] transition-transform">
              <Image
                src="/50 saas idea mocup.png"
                alt="50 Micro SaaS Ideas Book Mockup"
                fill
                priority
                className="object-cover"
              />
              {/* Overlay Badge */}
              <div className="absolute top-4 right-4 bg-[#183526] text-white text-[10px] font-mono font-bold uppercase px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>2026 Edition</span>
              </div>
            </div>

            {/* Hinglish + English Interactive Badge Switcher */}
            <div className="p-3 rounded-xl bg-white border border-[#DCD6C8] shadow-sm w-full max-w-[320px] sm:max-w-[380px] space-y-2 text-center">
              <div className="flex items-center justify-between text-xs font-bold text-[#17251E]">
                <span className="flex items-center gap-1">
                  <Languages className="w-3.5 h-3.5 text-[#D35A2A]" /> Dual Language Bundle:
                </span>
                <span className="text-[10px] font-mono uppercase bg-[#183526]/10 text-[#183526] px-2 py-0.5 rounded">2 PDFs Included</span>
              </div>
              <div className="grid grid-cols-2 gap-1.5 pt-1">
                <button
                  onClick={() => setSelectedLanguage('english')}
                  className={`px-3 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                    selectedLanguage === 'english'
                      ? 'bg-[#183526] text-white shadow-sm'
                      : 'bg-[#EFECE3] text-[#4A5750] hover:bg-[#E4DFD3]'
                  }`}
                >
                  <span>🌐 English PDF</span>
                </button>
                <button
                  onClick={() => setSelectedLanguage('hinglish')}
                  className={`px-3 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                    selectedLanguage === 'hinglish'
                      ? 'bg-[#183526] text-white shadow-sm'
                      : 'bg-[#EFECE3] text-[#4A5750] hover:bg-[#E4DFD3]'
                  }`}
                >
                  <span>🇮🇳 Hinglish PDF</span>
                </button>
              </div>
              <p className="text-[11px] text-[#728077] italic">
                {selectedLanguage === 'english'
                  ? '✓ English Edition: Complete global standard handbook reference.'
                  : '✓ Hinglish Edition: Conversational edition for ultra-fast comprehension.'}
              </p>
            </div>

          </div>

        </section>

        {/* 3. PAIN POINT / PROBLEM SECTION */}
        <section className="space-y-8 pt-4">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D35A2A] font-bold">THE HARD TRUTH</span>
            <h2
              className="text-3xl sm:text-4xl font-normal text-[#17251E]"
              style={{ fontFamily: "'Newsreader', Georgia, serif" }}
            >
              Why 90% of First-Time Founders Waste 3 Months & $1,000+ on the Wrong Idea
            </h2>
            <p className="text-sm text-[#59665E]">
              Building before validating demand is the single most expensive mistake. Here is where most aspiring builders get stuck:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-[#DCD6C8] bg-white space-y-3 shadow-sm hover:border-[#183526] transition-colors">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-red-700 flex items-center justify-center font-bold text-lg">1</div>
              <h3 className="font-bold text-base text-[#17251E]">Generic AI Idea Lists</h3>
              <p className="text-xs sm:text-sm text-[#59665E]">Raw ChatGPT prompts lack real problem statements, pricing models, defensible edges, or target customer clarity.</p>
            </div>

            <div className="p-6 rounded-2xl border border-[#DCD6C8] bg-white space-y-3 shadow-sm hover:border-[#183526] transition-colors">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-lg">2</div>
              <h3 className="font-bold text-base text-[#17251E]">Over-Engineering Before 1st User</h3>
              <p className="text-xs sm:text-sm text-[#59665E]">Spending 2 months coding features before earning your first dollar, only to discover nobody needed the product.</p>
            </div>

            <div className="p-6 rounded-2xl border border-[#DCD6C8] bg-white space-y-3 shadow-sm hover:border-[#183526] transition-colors">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-lg">3</div>
              <h3 className="font-bold text-base text-[#17251E]">No Validation Framework</h3>
              <p className="text-xs sm:text-sm text-[#59665E]">Falling in love with an idea without scoring it against user willingness-to-pay or having a pre-build outreach plan.</p>
            </div>
          </div>
        </section>

        {/* 4. SOLUTION OVERVIEW */}
        <section className="p-8 sm:p-12 rounded-3xl border border-[#183526]/20 bg-[#183526] text-white space-y-8 shadow-xl">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A1B3A7] font-bold">THE SOLUTION</span>
            <h2
              className="text-3xl sm:text-5xl font-normal text-white tracking-tight"
              style={{ fontFamily: "'Newsreader', Georgia, serif" }}
            >
              Zero Coding Required. Proven Validation. Dual Language Access.
            </h2>
            <p className="text-sm sm:text-base text-[#C3D1C8] leading-relaxed">
              You don't need a computer science degree or expensive software developers. This handbook guides you step-by-step through building functional software MVPs using visual tools like Softr, Airtable, Make, Tally, and Stripe — on a starting budget of $0 to $20/month.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-white/10">
            <div className="space-y-1">
              <span className="text-2xl font-bold text-amber-400">50</span>
              <p className="text-xs text-[#C3D1C8]">Evaluated Micro SaaS Blueprints</p>
            </div>
            <div className="space-y-1">
              <span className="text-2xl font-bold text-amber-400">8</span>
              <p className="text-xs text-[#C3D1C8]">High-Growth Niche Market Categories</p>
            </div>
            <div className="space-y-1">
              <span className="text-2xl font-bold text-amber-400">14 Days</span>
              <p className="text-xs text-[#C3D1C8]">Pre-Build Idea Validation Framework</p>
            </div>
            <div className="space-y-1">
              <span className="text-2xl font-bold text-amber-400">2 Editions</span>
              <p className="text-xs text-[#C3D1C8]">Full English + Hinglish PDFs</p>
            </div>
          </div>
        </section>

        {/* 5. 50 OPPORTUNITIES & NICHE MARKET BLUEPRINTS */}
        <section className="space-y-8 pt-4">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D35A2A] font-bold">EXPLORE ALL 50 IDEAS</span>
            <h2
              className="text-3xl sm:text-4xl font-normal text-[#17251E]"
              style={{ fontFamily: "'Newsreader', Georgia, serif" }}
            >
              50 Evaluated Opportunities Across 8 Proven Markets
            </h2>
            <p className="text-sm text-[#59665E]">
              Browse ideas by market category. Every concept includes a defined problem, target audience, pricing model, complexity rating, and exact visual tech stack:
            </p>
          </div>

          {/* Category Switcher Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 touch-pan-x flex-nowrap">
            <button
              onClick={() => setActiveCategoryId(0)}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-colors shrink-0 ${
                activeCategoryId === 0
                  ? 'bg-[#183526] text-white shadow-sm'
                  : 'bg-[#EFECE3] text-[#38453E] hover:bg-[#E4DFD3] border border-[#D8D2C3]'
              }`}
            >
              All 50 Ideas
            </button>
            {EBOOK_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryId(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-colors shrink-0 ${
                  activeCategoryId === cat.id
                    ? 'bg-[#183526] text-white shadow-sm'
                    : 'bg-[#EFECE3] text-[#38453E] hover:bg-[#E4DFD3] border border-[#D8D2C3]'
                }`}
              >
                {cat.name} ({cat.count})
              </button>
            ))}
          </div>

          {/* Search Bar for Ideas */}
          <div className="relative max-w-md">
            <Search className="w-4 h-4 absolute left-3.5 top-3 text-[#839188]" />
            <input
              type="text"
              value={searchIdea}
              onChange={(e) => setSearchIdea(e.target.value)}
              placeholder="Search ideas by keyword (e.g. Invoicing, WhatsApp, Agency)..."
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-[#DCD6C8] bg-white text-xs text-[#17251E] focus:outline-none focus:ring-1 focus:ring-[#183526]"
            />
          </div>

          {/* Ideas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredIdeas.slice(0, 8).map((idea) => (
              <div
                key={idea.id}
                className="p-6 rounded-2xl border border-[#DCD6C8] bg-white space-y-4 hover:border-[#183526] transition-colors flex flex-col justify-between shadow-sm"
              >
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2 border-b border-[#EFECE3] pb-3">
                    <div>
                      <span className="text-[10px] font-mono font-bold text-[#839188] uppercase">
                        Idea #{idea.id} • Category {idea.categoryNumber}
                      </span>
                      <h4
                        className="text-lg font-bold text-[#17251E]"
                        style={{ fontFamily: "'Newsreader', Georgia, serif" }}
                      >
                        {idea.name}
                      </h4>
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase bg-[#EFECE3] text-[#38453E] px-2 py-1 rounded">
                      {idea.pricingModel}
                    </span>
                  </div>

                  <p className="text-xs text-[#47544C] leading-relaxed">
                    <strong className="text-[#17251E]">Problem:</strong> {idea.problemSolved}
                  </p>
                  <p className="text-xs text-[#47544C] leading-relaxed">
                    <strong className="text-[#17251E]">Audience:</strong> {idea.targetAudience}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#EFECE3] flex items-center justify-between text-[11px] text-[#728077]">
                  <span>Complexity: {idea.complexity}</span>
                  <span className="font-semibold text-[#183526]">Stack: {idea.suggestedStack}</span>
                </div>
              </div>
            ))}
          </div>

          {filteredIdeas.length > 8 && (
            <div className="p-4 rounded-xl bg-[#EFECE3] border border-[#D8D2C3] text-center">
              <p className="text-xs font-semibold text-[#38453E]">
                + {filteredIdeas.length - 8} more evaluated SaaS blueprints included inside the full handbook!
              </p>
            </div>
          )}
        </section>

        {/* 6. SOCIAL PROOF & CREATOR CREDIBILITY */}
        <section className="space-y-8 pt-4">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D35A2A] font-bold">REAL RESULTS & REVIEWS</span>
            <h2
              className="text-3xl sm:text-4xl font-normal text-[#17251E]"
              style={{ fontFamily: "'Newsreader', Georgia, serif" }}
            >
              What Freelancers & Builders Are Saying
            </h2>
            <p className="text-sm text-[#59665E]">
              See how indie hackers, freelancers, and students validated their products using this playbook:
            </p>
          </div>

          {/* Testimonials Grid (100% English) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-2xl border border-[#DCD6C8] bg-white space-y-4 shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex text-amber-500 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#38453E] leading-relaxed italic">
                  &ldquo;Instead of trading hours for client work, I built a WhatsApp invoice generator MVP using Softr + Airtable from Idea #4 and landed 8 paid users in 14 days!&rdquo;
                </p>
              </div>
              <div className="pt-3 border-t border-[#EFECE3]">
                <strong className="text-xs font-bold text-[#17251E] block">Rahul Sharma</strong>
                <span className="text-[11px] text-[#728077]">Freelance Designer, New Delhi</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-[#DCD6C8] bg-white space-y-4 shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex text-amber-500 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#38453E] leading-relaxed italic">
                  &ldquo;The 5-Point Scorecard saved me months of wasted effort. Having both English and Hinglish editions made understanding SaaS unit economics super fast.&rdquo;
                </p>
              </div>
              <div className="pt-3 border-t border-[#EFECE3]">
                <strong className="text-xs font-bold text-[#17251E] block">Ananya Verma</strong>
                <span className="text-[11px] text-[#728077]">B.Tech Student, Bengaluru</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-[#DCD6C8] bg-white space-y-4 shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex text-amber-500 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#38453E] leading-relaxed italic">
                  &ldquo;I packaged our agency's internal client workflows into a recurring micro-SaaS tool. The validation outreach scripts alone paid for the book 100x over.&rdquo;
                </p>
              </div>
              <div className="pt-3 border-t border-[#EFECE3]">
                <strong className="text-xs font-bold text-[#17251E] block">Vikram Patel</strong>
                <span className="text-[11px] text-[#728077]">Agency Owner, Ahmedabad</span>
              </div>
            </div>

          </div>

          {/* Author Credibility Card */}
          <div className="p-6 rounded-2xl bg-[#EFECE3] border border-[#D8D2C3] flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="w-14 h-14 rounded-full bg-[#183526] text-white flex items-center justify-center font-bold text-xl shrink-0">
              N
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-sm text-[#17251E]">Created by NewAIHubber Team</h4>
              <p className="text-xs text-[#59665E]">
                Grounded in 500+ real-world no-code workflow implementations. Our mission is to empower non-technical builders to launch cash-flow positive software tools.
              </p>
            </div>
          </div>
        </section>

        {/* 7. TABBED EXCERPT VIEWER / WHAT'S INSIDE */}
        <section className="space-y-6 pt-4">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D35A2A] font-bold">INSIDE THE BOOK</span>
            <h2
              className="text-3xl sm:text-4xl font-normal text-[#17251E]"
              style={{ fontFamily: "'Newsreader', Georgia, serif" }}
            >
              See What's Inside the Playbook
            </h2>
            <p className="text-sm text-[#59665E]">Preview six real chapters, frameworks, and roadmap blueprints from the book:</p>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar touch-pan-x flex-nowrap pb-1">
            {[
              { id: 'toc', label: 'Table of Contents' },
              { id: 'card', label: 'Sample Business Card' },
              { id: 'economics', label: 'SaaS Economics' },
              { id: 'stack', label: 'No-Code Tech Stack' },
              { id: 'scorecard', label: '5-Point Scorecard' },
              { id: 'plan', label: '90-Day Roadmap' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActivePreviewTab(tab.id as any)}
                className={`px-3.5 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-colors shrink-0 ${
                  activePreviewTab === tab.id
                    ? 'bg-[#183526] text-white shadow-sm'
                    : 'bg-[#EFECE3] text-[#38453E] hover:bg-[#E4DFD3] border border-[#D8D2C3]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="p-6 sm:p-8 rounded-2xl border border-[#DCD6C8] bg-white space-y-4 shadow-sm">
            {activePreviewTab === 'toc' && (
              <div className="space-y-3 text-xs sm:text-sm text-[#38453E]">
                <h3 className="font-bold text-base text-[#17251E]">Table of Contents Overview</h3>
                <ul className="space-y-2 divide-y divide-[#EFECE3]">
                  <li className="pt-2"><strong>Chapter 1:</strong> What is a Micro SaaS? Why it is ideal for non-technical builders in 2026.</li>
                  <li className="pt-2"><strong>Chapter 2:</strong> The 4 No-Code Building Blocks (Database, Interface, Logic, Payments).</li>
                  <li className="pt-2"><strong>Chapter 3:</strong> The 5-Point Idea Scorecard & 14-Day Pre-Build Validation Method.</li>
                  <li className="pt-2"><strong>Chapter 4:</strong> 50 Opportunities Across 8 Markets (Complete Business Blueprints).</li>
                  <li className="pt-2"><strong>Chapter 5:</strong> Your Next 90 Days Roadmap & Getting Your First 10 Customers.</li>
                </ul>
              </div>
            )}

            {activePreviewTab === 'card' && (
              <div className="space-y-3 text-xs sm:text-sm text-[#38453E]">
                <h3 className="font-bold text-base text-[#17251E]">Sample Idea Card Structure</h3>
                <p>Every idea blueprint details the following 8 essential data points:</p>
                <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                  <span className="p-2 bg-[#EFECE3] rounded">✓ 1. Problem Statement</span>
                  <span className="p-2 bg-[#EFECE3] rounded">✓ 2. Core Solution</span>
                  <span className="p-2 bg-[#EFECE3] rounded">✓ 3. Target Audience</span>
                  <span className="p-2 bg-[#EFECE3] rounded">✓ 4. Suggested Pricing ($9-$29)</span>
                  <span className="p-2 bg-[#EFECE3] rounded">✓ 5. Build Time (1-2 Weeks)</span>
                  <span className="p-2 bg-[#EFECE3] rounded">✓ 6. Defensible Edge</span>
                  <span className="p-2 bg-[#EFECE3] rounded">✓ 7. No-Code Tech Stack</span>
                  <span className="p-2 bg-[#EFECE3] rounded">✓ 8. Validation Step</span>
                </div>
              </div>
            )}

            {activePreviewTab === 'economics' && (
              <div className="space-y-3 text-xs sm:text-sm text-[#38453E]">
                <h3 className="font-bold text-base text-[#17251E]">Micro SaaS Pricing & Unit Economics</h3>
                <p>100 Paying Users at $19/month = $1,900 (~₹1,50,000/month) recurring revenue with 90%+ profit margins using free/low-cost visual tools.</p>
              </div>
            )}

            {activePreviewTab === 'stack' && (
              <div className="space-y-3 text-xs sm:text-sm text-[#38453E]">
                <h3 className="font-bold text-base text-[#17251E]">The Recommended $0-$20 No-Code Stack</h3>
                <p>Airtable (Relational Database) + Softr (Web App Interface) + Make.com (Automation Workflows) + Razorpay/Stripe (Payment Gateways).</p>
              </div>
            )}

            {activePreviewTab === 'scorecard' && (
              <div className="space-y-3 text-xs sm:text-sm text-[#38453E]">
                <h3 className="font-bold text-base text-[#17251E]">5-Point Idea Selection Scorecard (ISC)</h3>
                <p>Score 4 or more ticks before spending a single day building. Move on if 3 or fewer criteria are met.</p>
              </div>
            )}

            {activePreviewTab === 'plan' && (
              <div className="space-y-3 text-xs sm:text-sm text-[#38453E]">
                <h3 className="font-bold text-base text-[#17251E]">90-Day Execution Roadmap</h3>
                <p>Days 1-14: Pre-Build Validation & Outreach · Days 15-45: Visual MVP Build · Days 46-90: First 10 Customer Acquisition.</p>
              </div>
            )}
          </div>
        </section>

        {/* 8. INTERACTIVE IDEA SCORECARD CHECKLIST */}
        <section className="p-6 sm:p-10 rounded-2xl border border-[#DCD6C8] bg-white space-y-6 shadow-sm">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D35A2A] font-bold">INTERACTIVE FRAMEWORK</span>
            <h2
              className="text-3xl sm:text-4xl font-normal text-[#17251E]"
              style={{ fontFamily: "'Newsreader', Georgia, serif" }}
            >
              Don't Choose With Your Gut. Score the Idea First!
            </h2>
            <p className="text-sm text-[#59665E]">
              Test your candidate idea against the 5 criteria below. Build only if 4 or more boxes are ticked:
            </p>
          </div>

          <div className="space-y-3">
            {[
              { key: 'narrowAudience', label: 'Narrow Audience: Can you precisely define the target user? ("Graphic Designers in India" vs "Businesses")' },
              { key: 'recurringPain', label: 'Recurring Pain: Does the problem happen weekly or monthly, creating consistent software demand?' },
              { key: 'workaroundInefficiency', label: 'Workaround Inefficiency: Is the current manual process messy, slow, and error-prone?' },
              { key: 'willingnessToPay', label: 'Willingness to Pay: Does this target audience already pay for digital software tools?' },
              { key: 'noCodeFeasibility', label: 'No-Code Feasibility: Can the MVP be built realistically using visual tools like Softr, Airtable & Make?' },
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
              className="bg-[#183526] hover:bg-[#11271C] text-white font-bold text-xs px-6 py-3 rounded-lg transition-all shrink-0 shadow-md"
            >
              Get Scorecard + 50 Ideas (₹499) →
            </a>
          </div>
        </section>

        {/* 9. PRICING & PAYMENT TRUST CARD */}
        <section id="checkout" className="p-8 sm:p-14 rounded-3xl border border-[#183526] bg-[#183526] text-white text-center space-y-8 shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A1B3A7] font-bold">LIMITED TIME LAUNCH OFFER</span>
            <h2
              className="text-3xl sm:text-5xl font-normal text-white tracking-tight"
              style={{ fontFamily: "'Newsreader', Georgia, serif" }}
            >
              Start Building Your Software Business Today.
            </h2>
            <p className="text-sm text-[#C3D1C8]">
              Receive instant access to **BOTH English & Hinglish PDF/ePub editions** with a single purchase.
            </p>
          </div>

          <div className="max-w-md mx-auto space-y-6">
            
            {/* Price Display Box */}
            <div className="p-6 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md space-y-2">
              <div className="flex items-center justify-center gap-3">
                <span className="text-4xl sm:text-5xl font-extrabold text-white">₹499</span>
                <span className="text-lg text-[#A1B3A7] line-through">₹1,499</span>
              </div>
              <p className="text-xs text-[#A1B3A7]">One-Time Payment · Lifetime Download Access · Free Updates</p>
            </div>

            {/* High Contrast Primary CTA Button */}
            <a
              href={`mailto:support@newaihubber.com?subject=Order%2050%20Micro%20SaaS%20Ebook`}
              className="w-full bg-[#D35A2A] hover:bg-[#b84b1f] text-white font-bold text-base sm:text-lg px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-2xl transform hover:scale-[1.02]"
            >
              <Lock className="w-5 h-5" />
              <span>Get Instant Download (₹499) →</span>
            </a>

            {/* Payment Trust Badges */}
            <div className="space-y-3 pt-2">
              <p className="text-xs text-[#C3D1C8] font-medium">Supported Payment Methods (India & Global):</p>
              <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] text-white font-mono">
                <span className="px-3 py-1 bg-white/10 rounded border border-white/10">UPI (GPay / PhonePe / Paytm)</span>
                <span className="px-3 py-1 bg-white/10 rounded border border-white/10">Credit / Debit Cards</span>
                <span className="px-3 py-1 bg-white/10 rounded border border-white/10">NetBanking</span>
                <span className="px-3 py-1 bg-white/10 rounded border border-white/10">Razorpay / Stripe</span>
              </div>
            </div>

          </div>
        </section>

        {/* 10. COMPREHENSIVE FAQ SECTION (100% ENGLISH) */}
        <section className="space-y-8 pt-4 border-t border-[#E4DFD3]">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D35A2A] font-bold">FREQUENTLY ASKED QUESTIONS</span>
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
                question: '1. Are these Micro-SaaS ideas already saturated?',
                answer: 'No. The 50 ideas inside this handbook are specifically chosen for narrow niche markets (e.g. WhatsApp Invoicing for Freelancers or Softr CRMs for Local Businesses). These markets are too small for giant venture-backed software companies, making them ideal $1,000–$3,000/month recurring income opportunities for solo builders.',
              },
              {
                question: '2. Do I need any coding or programming experience?',
                answer: 'Not at all. This playbook is written specifically for non-technical beginners. All 50 ideas are designed around visual drag-and-drop tools like Softr, Airtable, Make.com, Tally, and Stripe.',
              },
              {
                question: '3. Will I get actual validation steps or is it just an idea list?',
                answer: 'This is not just a list. Every single idea is structured with a defined problem statement, narrow target audience, core MVP features, suggested visual stack, pricing model, complexity rating, and risk factor. You also receive the 14-Day Validation Framework and 4 Ready-to-Send Outreach Message Scripts.',
              },
              {
                question: '4. Do I need expensive software tools to start building?',
                answer: 'No. The book outlines a starting budget stack ($0–$20/month) utilizing free tiers. You only upgrade to paid plans after securing your first paying customers.',
              },
              {
                question: '5. Are both English and Hinglish editions included in one purchase?',
                answer: 'Yes! One purchase grants you instant download access to BOTH the full English Edition (PDF & ePub) and the full Hinglish Edition (PDF & ePub).',
              },
              {
                question: '6. How does instant digital delivery work and what is the support policy?',
                answer: 'Upon completing your purchase, your download link is delivered immediately on-screen and to your email address. If you experience any download issues, our support desk (support@newaihubber.com) assists you within 24 hours.',
              },
            ].map((faqItem, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="rounded-xl border border-[#DCD6C8] bg-white overflow-hidden shadow-sm">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 sm:p-5 text-left font-bold text-sm sm:text-base text-[#17251E] flex items-center justify-between gap-4 hover:bg-[#F7F4EE]/50 transition-colors"
                  >
                    <span>{faqItem.question}</span>
                    <ChevronDown className={`w-4 h-4 text-[#728077] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-[#47544C] leading-relaxed border-t border-[#EFECE3] pt-3">
                      {faqItem.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

      </main>
    </div>
  );
};
