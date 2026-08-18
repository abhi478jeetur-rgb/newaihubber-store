'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
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
  Maximize2,
  X,
  SlidersHorizontal,
  Compass,
  Target,
  Rocket,
  Users,
  Check,
} from 'lucide-react';
import { Product } from '@/types/product';
import { formatPrice } from '@/lib/utils';
import { EBOOK_CATEGORIES, MICRO_SAAS_IDEAS } from '@/data/ebook-50-saas';

interface EbookSalesPageProps {
  product: Product;
}

export const EbookSalesPage: React.FC<EbookSalesPageProps> = ({ product }) => {
  // Category selection for 50 Ideas gallery
  const [activeCategoryId, setActiveCategoryId] = useState<number>(0);
  const [searchIdea, setSearchIdea] = useState<string>('');

  // Accordion toggle state for FAQ
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Active preview tab & Lightbox modal state for "See What's Inside"
  const [activePreviewTab, setActivePreviewTab] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [lightboxImage, setLightboxImage] = useState<{ title: string; desc: string; excerpt: string } | null>(null);

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

  const previewPages = [
    {
      id: 0,
      title: 'Table of Contents & Structure',
      desc: 'The complete breakdown of all 6 core chapters, framework guides, and 50 ideas.',
      excerpt: 'Chapter 1: The Micro-SaaS Landscape • Chapter 2: The 4 No-Code Building Blocks • Chapter 3: The ISC Decision Scorecard • Chapter 4: 50 Evaluated Opportunities • Chapter 5: 7-Day MVP Roadmap • Chapter 6: Customer Acquisition Guidance.',
    },
    {
      id: 1,
      title: 'Sample Idea Card: ProposalPilot',
      desc: '8-field structured business card format used across all 50 ideas.',
      excerpt: 'Problem: Freelancers spend 2-3 hours rewriting proposals manually • Target Customer: Solo B2B freelancers & boutique agencies • Stack: Softr + Airtable + Make.com • Pricing: $9–$29/mo recurring.',
    },
    {
      id: 2,
      title: 'The Honest Unit Economics',
      desc: 'Real operating costs, pricing, margin, and churn expectations.',
      excerpt: 'Beginner Tool Budget: $0–$25/mo on free tiers • Growth Upgrade Threshold: 15–20 active subscribers before upgrading to paid plans • Target Margin: 80%+ gross margin on visual stacks.',
    },
    {
      id: 3,
      title: 'Your No-Code Tool Stack Blueprint',
      desc: 'The 4 fundamental building blocks for non-technical software.',
      excerpt: '1. Database: Airtable / Google Sheets • 2. Interface: Softr / Glide / Tally • 3. Logic & Automation: Make.com / Zapier • 4. Payments & WhatsApp: Stripe / Razorpay / WhatsApp Business API.',
    },
    {
      id: 4,
      title: 'The ISC Decision Scorecard',
      desc: 'The 5 non-negotiable filters every idea must pass before building.',
      excerpt: '1. Narrow Audience • 2. Recurring Pain • 3. Workaround Inefficiency • 4. Willingness to Pay • 5. No-Code Feasibility. Score 4 or 5 before writing a single line of database code.',
    },
    {
      id: 5,
      title: '7-Day MVP Execution Roadmap',
      desc: 'Step-by-step launch roadmap from discovery to first 10 customers.',
      excerpt: 'Day 1: Discovery Interviews • Day 2: Scope Lock • Day 3: Database & Schema • Day 4: Interface UI • Day 5: Automations • Day 6: End-to-End Test • Day 7: Soft Launch & First 10 Conversations.',
    },
  ];

  const openModal = (page: typeof previewPages[0]) => {
    setLightboxImage(page);
    setIsLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-100 font-sans selection:bg-white selection:text-black pb-28">
      
      {/* 1. STICKY MINIMAL HEADER */}
      <header className="sticky top-0 z-50 w-full border-b border-neutral-800 bg-[#0a0a0a]/90 backdrop-blur-md transition-colors">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Store</span>
            </Link>
            <div className="h-4 w-px bg-neutral-800 hidden sm:block" />
            <Link href="/" className="items-center gap-2 hidden sm:flex">
              <div className="h-6 w-6 rounded-md bg-white text-black flex items-center justify-center font-bold text-xs">
                N
              </div>
              <span className="font-bold text-xs text-white tracking-tight">NewAIHubber</span>
            </Link>
          </div>

          {/* Section Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs text-neutral-400">
            <a href="#problem" className="hover:text-white transition-colors">The Problem</a>
            <a href="#ideas" className="hover:text-white transition-colors">50 Ideas</a>
            <a href="#preview" className="hover:text-white transition-colors">Book Preview</a>
            <a href="#scorecard" className="hover:text-white transition-colors">Scorecard</a>
            <a href="#roadmap" className="hover:text-white transition-colors">7-Day Plan</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </nav>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-emerald-400 hidden sm:block">
              {formatPrice(product.price, product.currency)}
            </span>
            <a
              href="#checkout"
              className="bg-white hover:bg-neutral-200 text-black font-bold text-xs px-4 py-2 rounded-full transition-all shadow-sm flex items-center gap-1.5"
            >
              <span>Get the Ebook →</span>
            </a>
          </div>
        </div>
      </header>

      {/* LIGHTBOX MODAL FOR BOOK PREVIEW */}
      <AnimatePresence>
        {isLightboxOpen && lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsLightboxOpen(false)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full bg-[#121212] border border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl"
            >
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-2">
                <span className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider">Book Excerpt Lightbox</span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">{lightboxImage.title}</h3>
                <p className="text-xs text-neutral-400">{lightboxImage.desc}</p>
              </div>

              <div className="p-6 rounded-xl bg-neutral-900 border border-neutral-800 text-xs sm:text-sm text-neutral-300 font-mono leading-relaxed">
                {lightboxImage.excerpt}
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-xs text-neutral-500">Official Excerpt from 2026 Edition</span>
                <a
                  href="#checkout"
                  onClick={() => setIsLightboxOpen(false)}
                  className="bg-white text-black font-bold text-xs px-4 py-2 rounded-full hover:bg-neutral-200 transition-colors"
                >
                  Unlock Full Playbook ($29) →
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container max-w-5xl mx-auto px-4 sm:px-6 pt-10 space-y-28">

        {/* 2. HERO SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-b border-neutral-800 pb-20">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>English + Hinglish Editions Included with One Purchase</span>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-400">
                2026 EDITION · 50 IDEAS · 10 CATEGORIES · NO CODE REQUIRED
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
                50 Micro-SaaS Ideas You Can Build Without Coding
              </h1>
              <h2 className="text-xl sm:text-2xl font-semibold text-neutral-400">
                The Non-Technical Founder's Playbook
              </h2>
            </div>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
              A practical decision-making playbook to discover, evaluate, validate, and build a recurring revenue Micro-SaaS without traditional programming.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#checkout"
                className="bg-white hover:bg-neutral-200 text-black font-bold text-sm px-8 py-3.5 rounded-full transition-all text-center flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Get the Ebook ({formatPrice(product.price, product.currency)}) →</span>
              </a>
              <a
                href="#preview"
                className="bg-neutral-900 hover:bg-neutral-800 text-white font-semibold text-sm px-6 py-3.5 rounded-full border border-neutral-800 transition-all text-center flex items-center justify-center gap-2"
              >
                <BookOpen className="w-4 h-4 text-emerald-400" />
                <span>See What's Inside</span>
              </a>
            </div>

            <p className="text-xs text-neutral-500 flex items-center gap-2 pt-1">
              <Lock className="w-3.5 h-3.5 text-neutral-400" />
              <span>Digital eBook · Instant access after successful payment</span>
            </p>
          </div>

          {/* 3D Ebook Mockup */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[320px] sm:max-w-[360px] aspect-[3/4] rounded-2xl border border-neutral-800 bg-[#121212] overflow-hidden shadow-2xl group transition-all hover:border-emerald-500/40">
              <Image
                src="/50 saas idea mocup.png"
                alt="50 Micro SaaS Ideas Book Cover"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/80 backdrop-blur-md border border-neutral-800 flex items-center justify-between text-xs">
                <span className="font-bold text-white">Full Playbook Pack</span>
                <span className="font-mono text-emerald-400 font-bold">{formatPrice(product.price, product.currency)}</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. SECTION 2 — THE REAL PROBLEM */}
        <section id="problem" className="space-y-6 max-w-3xl">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">THE BOTTLENECK</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              The hardest part isn't building anymore.<br />
              It's knowing what to build.
            </h2>
          </div>
          <div className="space-y-4 text-sm sm:text-base text-neutral-300 leading-relaxed">
            <p>
              AI and no-code tools have made building software dramatically easier. But they haven't solved the critical questions that determine whether your business survives:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-neutral-300 font-medium pt-2">
              <li className="flex items-center gap-2.5 p-3 rounded-lg bg-[#121212] border border-neutral-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> What specific problem is worth solving?
              </li>
              <li className="flex items-center gap-2.5 p-3 rounded-lg bg-[#121212] border border-neutral-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Who is the exact target customer?
              </li>
              <li className="flex items-center gap-2.5 p-3 rounded-lg bg-[#121212] border border-neutral-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Will someone actually pay recurring subscription?
              </li>
              <li className="flex items-center gap-2.5 p-3 rounded-lg bg-[#121212] border border-neutral-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> How do I validate before building database code?
              </li>
            </ul>
          </div>
        </section>

        {/* 4. SECTION 3 — NOT JUST 50 IDEAS (STRUCTURED BUSINESS CARDS) */}
        <section className="space-y-8 border-t border-neutral-800 pt-16">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">STRUCTURED OPPORTUNITIES</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Not 50 One-Line Ideas. 50 Structured Business Cards.
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400">
              Every opportunity follows a standard 8-field structure so you can compare ideas objectively instead of relying on emotional guess work.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl border border-neutral-800 bg-[#121212] space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-800 pb-4">
              <div>
                <span className="text-[11px] font-mono font-bold text-emerald-400 uppercase">Real Idea Card Excerpt • Category 1</span>
                <h3 className="font-bold text-xl text-white">ProposalPilot – Client Proposal Generator</h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300">
                Build Time: 3–5 Days
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-neutral-300">
              <div className="space-y-1">
                <strong className="font-mono text-emerald-400 uppercase text-[11px] block">1. Pain Point:</strong>
                <p>Freelancers rebuild proposals manually in Word/Canva, spending 2-3 hours per client with inconsistent pricing and delayed responses.</p>
              </div>

              <div className="space-y-1">
                <strong className="font-mono text-emerald-400 uppercase text-[11px] block">2. Target Customer:</strong>
                <p>Solo B2B freelancers, copywriters, and web developers sending 5-15 proposals monthly.</p>
              </div>

              <div className="space-y-1">
                <strong className="font-mono text-emerald-400 uppercase text-[11px] block">3. Suggested No-Code Stack:</strong>
                <p className="font-mono text-white">Tally Forms + Airtable + Softr / Glide + Make.com (PDF.co)</p>
              </div>

              <div className="space-y-1">
                <strong className="font-mono text-emerald-400 uppercase text-[11px] block">4. Honest Pricing Model:</strong>
                <p>Freemium: 3 free proposals/mo, then $9–$19/mo for unlimited proposals and automated status tracking.</p>
              </div>

              <div className="space-y-1 md:col-span-2 pt-2 border-t border-neutral-800">
                <strong className="font-mono text-emerald-400 uppercase text-[11px] block">5. Defensible Edge & Major Risk:</strong>
                <p>Canva/Notion templates are static. Your defensible edge is live client status tracking (Sent/Viewed/Accepted) and automated invoice trigger.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. SECTION 4 — THE 50 OPPORTUNITIES ACROSS 10 MARKETS */}
        <section id="ideas" className="space-y-8 border-t border-neutral-800 pt-16">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">10 MARKETS COVERED</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              50 Opportunities. 10 Different Markets.
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400">
              Go directly to the industry market you already understand and have access to.
            </p>
          </div>

          {/* Search & Category Switcher */}
          <div className="space-y-4">
            <div className="relative max-w-md">
              <Search className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3.5" />
              <input
                type="text"
                placeholder="Search ideas, problem, stack..."
                value={searchIdea}
                onChange={(e) => setSearchIdea(e.target.value)}
                className="w-full bg-[#121212] border border-neutral-800 rounded-full pl-10 pr-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
              <button
                onClick={() => setActiveCategoryId(0)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                  activeCategoryId === 0
                    ? 'bg-white text-black font-bold'
                    : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
                }`}
              >
                All 50 Ideas
              </button>
              {EBOOK_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategoryId(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                    activeCategoryId === cat.id
                      ? 'bg-white text-black font-bold'
                      : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
                  }`}
                >
                  Cat {cat.id}: {cat.name} ({cat.count})
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredIdeas.map((idea) => (
              <div
                key={idea.id}
                className="p-5 rounded-xl border border-neutral-800 bg-[#121212] space-y-3 hover:border-neutral-700 transition-colors flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2 border-b border-neutral-800/80 pb-2">
                    <div>
                      <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase">
                        Idea #{idea.id} • Category {idea.categoryNumber}
                      </span>
                      <h4 className="font-bold text-sm text-white">{idea.name}</h4>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-neutral-900 text-neutral-300 border border-neutral-800 shrink-0">
                      {idea.complexity}
                    </span>
                  </div>

                  <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                    <strong className="text-white">Problem: </strong>{idea.problemSolved}
                  </p>
                </div>

                <div className="pt-2 border-t border-neutral-800/80 flex items-center justify-between text-[11px]">
                  <span className="font-mono text-neutral-400">{idea.suggestedStack.split('+')[0]}</span>
                  <span className="font-bold text-emerald-400">{idea.pricingModel.split(' ')[0]}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. SECTION 5 — SHOW THE ACTUAL PRODUCT (INTERACTIVE LIGHTBOX GALLERY) */}
        <section id="preview" className="space-y-8 border-t border-neutral-800 pt-16">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">REAL PRODUCT PROOF</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              See What's Inside
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400">
              Click any page card below to inspect real excerpts and chapters from the 2026 Edition handbook.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {previewPages.map((page) => (
              <div
                key={page.id}
                onClick={() => openModal(page)}
                className="p-5 rounded-2xl border border-neutral-800 bg-[#121212] space-y-3 cursor-pointer hover:border-emerald-500/50 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold">Page Excerpt #{page.id + 1}</span>
                  <Maximize2 className="w-3.5 h-3.5 text-neutral-500 group-hover:text-emerald-400 transition-colors" />
                </div>
                <h4 className="font-bold text-sm text-white group-hover:text-emerald-300 transition-colors">{page.title}</h4>
                <p className="text-xs text-neutral-400 line-clamp-2">{page.desc}</p>
                <div className="pt-2 text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                  <span>Inspect Excerpt</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. SECTION 6 — THE DECISION-MAKING FRAMEWORK */}
        <section className="space-y-8 border-t border-neutral-800 pt-16">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">METHODOLOGY</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              The Decision-Making Framework
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400">
              Discovering an opportunity is only step 1. Follow the book's 6-stage decision framework:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-center">
            {[
              { step: '01', title: 'Find Opportunity', desc: 'Pick from 50 evaluated cards' },
              { step: '02', title: 'Understand Pain', desc: 'Define target audience & workflow' },
              { step: '03', title: 'Score Idea', desc: 'Apply 5-point ISC Scorecard' },
              { step: '04', title: 'Validate Demand', desc: '5-day pre-build validation' },
              { step: '05', title: 'Build No-Code MVP', desc: 'Assemble visual tool stack' },
              { step: '06', title: 'Get 10 Customers', desc: 'Execute 1-on-1 outreach plan' },
            ].map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-neutral-800 bg-[#121212] space-y-2">
                <span className="text-xs font-mono font-bold text-emerald-400 block">{item.step}</span>
                <h4 className="font-bold text-xs text-white">{item.title}</h4>
                <p className="text-[10px] text-neutral-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 8. SECTION 7 — VALIDATION FRAMEWORK */}
        <section className="space-y-6 border-t border-neutral-800 pt-16">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">VALIDATE FIRST</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Before You Spend Months Building, Find Out If Anyone Cares.
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-3xl">
            The book outlines a structured 5-Day Pre-Build Validation Method: speak with 5-10 target users without pitching software, confirm recurring pain patterns, and test landing page pre-sells before creating database tables.
          </p>
        </section>

        {/* 9. SECTION 8 — IDEA SCORECARD (INTERACTIVE CHECKLIST) */}
        <section id="scorecard" className="p-6 sm:p-8 rounded-2xl border border-neutral-800 bg-[#121212] space-y-6 shadow-xl">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">INTERACTIVE TOOL</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Don't Choose With Your Gut. Score the Idea First.
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400">
              Apply this 5-point ISC scorecard to any candidate idea. 4 or 5 ticked, begin validation. 3 or fewer, move on.
            </p>
          </div>

          <div className="space-y-3">
            {[
              { key: 'narrowAudience', label: 'Narrow Audience: Can you precisely define the user? ("Solo freelance copywriters" vs generic "Small business owners")' },
              { key: 'recurringPain', label: 'Recurring Pain: Does the problem recur regularly (daily/weekly) rather than as a rare one-time hassle?' },
              { key: 'workaroundInefficiency', label: 'Workaround Inefficiency: Is the current manual workaround (Excel sheets, WhatsApp DMs) painful and slow?' },
              { key: 'willingnessToPay', label: 'Willingness to Pay: Does this target audience already pay for commercial tools in adjacent workflows?' },
              { key: 'noCodeFeasibility', label: 'No-Code Feasibility: Can the MVP be built realistically using visual tools like Softr, Airtable & Make.com?' },
            ].map((item) => {
              const isChecked = scorecardChecks[item.key];
              return (
                <button
                  key={item.key}
                  onClick={() => toggleScorecard(item.key)}
                  className={`w-full p-4 rounded-xl border text-left flex items-start gap-3 transition-colors ${
                    isChecked
                      ? 'bg-neutral-900 border-emerald-500 text-white font-medium shadow-sm'
                      : 'bg-[#0a0a0a] border-neutral-800 text-neutral-400 hover:border-neutral-700'
                  }`}
                >
                  {isChecked ? (
                    <CheckSquare className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  ) : (
                    <Square className="w-5 h-5 text-neutral-600 shrink-0 mt-0.5" />
                  )}
                  <span className="text-xs sm:text-sm">{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-bold text-white uppercase">
                Scorecard Result: {tickedCount} of 5 ticked
              </span>
              <p className="text-xs text-neutral-400 mt-0.5">
                {tickedCount >= 4
                  ? '✓ High potential opportunity! Proceed to 5-Day Pre-Build Validation.'
                  : '⚠️ 3 or fewer ticked. Pick another idea or narrow the target audience.'}
              </p>
            </div>
            <a
              href="#checkout"
              className="bg-white text-black font-bold text-xs px-5 py-2.5 rounded-full hover:bg-neutral-200 transition-colors shrink-0"
            >
              Get Scorecard + All 50 Ideas →
            </a>
          </div>
        </section>

        {/* 10. SECTION 9 — REALISTIC BUSINESS ECONOMICS */}
        <section className="space-y-6 border-t border-neutral-800 pt-16">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">HONEST BUSINESS TRUTH</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Not Every Idea Deserves to Be Built.
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400">
              The handbook explicitly covers what most idea lists skip: operating costs, pricing thresholds, churn, competition, difficulty, and situations where an idea should be abandoned.
            </p>
          </div>
        </section>

        {/* 11. SECTION 10 — NO-CODE BUILDING BLOCKS */}
        <section className="space-y-8 border-t border-neutral-800 pt-16">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">THE NO-CODE STACK</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              The 4 No-Code Building Blocks
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-xl border border-neutral-800 bg-[#121212] space-y-2">
              <Database className="w-5 h-5 text-emerald-400" />
              <h4 className="font-bold text-sm text-white">1. Database Layer</h4>
              <p className="text-xs text-neutral-400">Airtable, Google Sheets, Supabase.</p>
            </div>
            <div className="p-5 rounded-xl border border-neutral-800 bg-[#121212] space-y-2">
              <Layers className="w-5 h-5 text-emerald-400" />
              <h4 className="font-bold text-sm text-white">2. User Interface</h4>
              <p className="text-xs text-neutral-400">Softr, Glide, Tally Forms, Bubble.</p>
            </div>
            <div className="p-5 rounded-xl border border-neutral-800 bg-[#121212] space-y-2">
              <Workflow className="w-5 h-5 text-emerald-400" />
              <h4 className="font-bold text-sm text-white">3. Logic & Automation</h4>
              <p className="text-xs text-neutral-400">Make.com, Zapier, LLM API calls.</p>
            </div>
            <div className="p-5 rounded-xl border border-neutral-800 bg-[#121212] space-y-2">
              <MessageSquare className="w-5 h-5 text-emerald-400" />
              <h4 className="font-bold text-sm text-white">4. Messaging & Checkout</h4>
              <p className="text-xs text-neutral-400">Stripe, Razorpay, WhatsApp API.</p>
            </div>
          </div>
        </section>

        {/* 12. SECTION 11 — THE 7-DAY ROADMAP */}
        <section id="roadmap" className="space-y-8 border-t border-neutral-800 pt-16">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">EXECUTION ROADMAP</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Your 7-Day MVP Execution Plan
            </h2>
          </div>

          <div className="space-y-3">
            {[
              { day: 'Day 1', title: 'Problem Confirmation', desc: 'Conduct 5 interviews with target audience members.' },
              { day: 'Day 2', title: 'Scope Lock', desc: 'Define exact single core workflow feature for MVP.' },
              { day: 'Day 3', title: 'Database Schema', desc: 'Set up Airtable base tables & field types.' },
              { day: 'Day 4', title: 'Frontend UI', desc: 'Connect Softr/Glide pages to database.' },
              { day: 'Day 5', title: 'Automation Flow', desc: 'Configure Make.com scenarios & triggers.' },
              { day: 'Day 6', title: 'End-to-End Test', desc: 'Run test submissions & payment webhooks.' },
              { day: 'Day 7', title: 'Soft Launch', desc: 'Reach back to interviewees for first 10 customers.' },
            ].map((step, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-neutral-800 bg-[#121212] flex items-center justify-between gap-4">
                <span className="text-xs font-mono font-bold text-emerald-400 shrink-0">{step.day}</span>
                <div className="flex-1">
                  <h4 className="font-bold text-xs sm:text-sm text-white">{step.title}</h4>
                  <p className="text-[11px] text-neutral-400">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 13. SECTION 12 — FINDING CUSTOMERS */}
        <section className="space-y-6 border-t border-neutral-800 pt-16">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">CUSTOMER ACQUISITION</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Getting Your First 10 Paying Customers
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-3xl">
            Building software is only half the battle. The handbook walks through 1-on-1 outreach templates, niche community participation, building in public, and converting interview contacts into long-term subscribers.
          </p>
        </section>

        {/* 14. SECTION 13 — EVERYTHING INCLUDED DELIVERABLES INVENTORY */}
        <section className="p-6 sm:p-8 rounded-2xl border border-neutral-800 bg-[#121212] space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">DELIVERABLES CHECKLIST</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Everything Included With Your Ebook Package
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-neutral-300">
            <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" /> Full English Edition PDF & ePub
            </div>
            <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" /> Full Hinglish Edition PDF & ePub
            </div>
            <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" /> 50 Evaluated Micro-SaaS Business Cards
            </div>
            <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" /> The 5-Point ISC Decision Scorecard
            </div>
            <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" /> 5-Day Pre-Build Validation Method
            </div>
            <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" /> 7-Day MVP Execution Roadmap
            </div>
            <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" /> 4 Ready-to-Send Outreach DM Scripts
            </div>
            <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" /> 4 Copy-Paste ChatGPT System Prompts
            </div>
          </div>
        </section>

        {/* 15. SECTION 14 & 15 — WHO THIS IS FOR vs NOT FOR */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-neutral-800 pt-16">
          <div className="p-6 rounded-2xl border border-neutral-800 bg-[#121212] space-y-4">
            <h3 className="font-bold text-base text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" /> This Book Is For You If…
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
              <li>✓ You are a student, freelancer, or non-technical founder.</li>
              <li>✓ You want evaluated SaaS ideas instead of random AI lists.</li>
              <li>✓ You want to validate demand before building.</li>
              <li>✓ You want clear visual no-code stack blueprints.</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl border border-neutral-800 bg-[#121212] space-y-4">
            <h3 className="font-bold text-base text-neutral-400 flex items-center gap-2">
              <XCircle className="w-5 h-5 text-neutral-500" /> Probably Not For You If…
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-neutral-500">
              <li>– You expect overnight get-rich-quick promises.</li>
              <li>– You are looking for enterprise C++ coding manuals.</li>
              <li>– You expect software to sell without talking to users.</li>
            </ul>
          </div>
        </section>

        {/* 16. SECTION 16 — HONEST EXPECTATIONS */}
        <section className="p-6 rounded-2xl border border-neutral-800 bg-[#121212] space-y-3">
          <h3 className="font-bold text-lg text-white">No Overnight-Success Promises.</h3>
          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
            The goal of this handbook isn't to promise instant riches. The goal is to help you make better decisions, avoid building software nobody wants, and save months of wasted effort.
          </p>
        </section>

        {/* 17. SECTION 17 — BEFORE vs AFTER TRANSFORMATION MATRIX */}
        <section className="space-y-6 border-t border-neutral-800 pt-16">
          <div className="space-y-2 text-center max-w-xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">TRANSFORMATION</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">BEFORE vs AFTER</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/60 space-y-3">
              <span className="text-xs font-mono font-bold text-red-400 uppercase">BEFORE READING</span>
              <ul className="space-y-2 text-xs text-neutral-400">
                <li>❌ "What should I build?"</li>
                <li>❌ Scrolling endless YouTube lists of 1-line ideas.</li>
                <li>❌ Building for 3 months only to find zero buyers.</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl border border-emerald-500/30 bg-[#121212] space-y-3">
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase">AFTER READING</span>
              <ul className="space-y-2 text-xs text-white">
                <li>✅ 50 structured opportunities evaluated by market.</li>
                <li>✅ 5-point ISC Scorecard to test feasibility in 10 mins.</li>
                <li>✅ 7-Day MVP roadmap to launch & get first 10 buyers.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 18. SECTION 18 — DUAL EDITION SPOTLIGHT */}
        <section className="p-8 rounded-3xl border border-neutral-800 bg-gradient-to-br from-[#121212] to-neutral-900 text-center space-y-4">
          <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">ONE PURCHASE • BOTH EDITIONS</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Full English + Hinglish Editions Included</h2>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-xl mx-auto">
            Whether you prefer reading in clear international English or natural conversational Hinglish, both complete editions are unlocked immediately after purchase.
          </p>
        </section>

        {/* 19. SECTION 19 — OBJECTION HANDLING FAQ */}
        <section id="faq" className="space-y-8 border-t border-neutral-800 pt-16">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">Frequently Asked Questions</h2>
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
              {
                question: 'What format is the book delivered in?',
                answer: 'Immediately after payment, you get digital download access to PDF and ePub formats formatted for laptop, tablet, and mobile screens.',
              },
            ].map((faqItem, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="rounded-xl border border-neutral-800 bg-[#121212] overflow-hidden">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left font-bold text-xs sm:text-sm text-white flex items-center justify-between gap-4"
                  >
                    <span>{faqItem.question}</span>
                    <ChevronDown className={`w-4 h-4 text-neutral-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-neutral-400 leading-relaxed border-t border-neutral-800 pt-3">
                      {faqItem.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* 20 & 21. SECTION 20 & 21 — PRICE + FINAL CALL TO ACTION */}
        <section id="checkout" className="p-8 sm:p-12 rounded-3xl border border-neutral-800 bg-neutral-900 text-center space-y-6 shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              You Don't Need Another Month of Wondering What to Build.
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400">
              Pick an opportunity. Validate the problem. Build the smallest version. Put it in front of real customers.
            </p>
          </div>

          <div className="max-w-md mx-auto space-y-4">
            <div className="text-center">
              <span className="text-3xl sm:text-4xl font-mono font-bold text-white">
                {formatPrice(product.price, product.currency)}
              </span>
              <p className="text-xs text-emerald-400 mt-1 font-mono">English + Hinglish Editions • Instant Digital Download</p>
            </div>

            <a
              href={`mailto:support@newaihubber.com?subject=Order%20${product.slug}`}
              className="w-full bg-white hover:bg-neutral-200 text-black font-bold text-sm sm:text-base px-8 py-4 rounded-full transition-all flex items-center justify-center gap-2 shadow-xl"
            >
              <Lock className="w-4 h-4" />
              <span>Get the Ebook ({formatPrice(product.price, product.currency)}) →</span>
            </a>

            <p className="text-[11px] text-neutral-500">
              50 Micro SaaS You Can Build Without Coding — The Non-Technical Founder's Playbook, 2026 Edition.
            </p>
          </div>
        </section>

      </div>

      {/* STICKY BOTTOM PURCHASE BAR ON MOBILE */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 border-t border-neutral-800 backdrop-blur-md py-3 px-4 shadow-2xl">
        <div className="container max-w-5xl mx-auto flex items-center justify-between gap-4">
          <div className="hidden sm:block">
            <p className="text-xs font-bold text-white line-clamp-1">50 Micro SaaS You Can Build Without Coding</p>
            <p className="text-[10px] text-emerald-400">English + Hinglish Editions Included</p>
          </div>

          <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-4">
            <span className="text-sm font-bold font-mono text-emerald-400">
              {formatPrice(product.price, product.currency)}
            </span>
            <a
              href="#checkout"
              className="bg-white hover:bg-neutral-200 text-black text-xs font-bold px-5 py-2.5 rounded-full transition-all shrink-0"
            >
              Get the Ebook →
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};
