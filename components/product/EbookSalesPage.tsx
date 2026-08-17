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
  HeartHandshake,
  TrendingUp,
  Target,
  Clock,
  Compass,
} from 'lucide-react';
import { Product } from '@/types/product';
import { formatPrice } from '@/lib/utils';
import { EBOOK_CATEGORIES, MICRO_SAAS_IDEAS } from '@/data/ebook-50-saas';

interface EbookSalesPageProps {
  product: Product;
}

export const EbookSalesPage: React.FC<EbookSalesPageProps> = ({ product }) => {
  // Category selection for the 50 Ideas gallery
  const [activeCategoryId, setActiveCategoryId] = useState<number>(1);
  const [searchIdea, setSearchIdea] = useState<string>('');

  // Accordion toggle state for FAQ
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Active preview tab for "Take a Look Inside"
  const [activePreviewTab, setActivePreviewTab] = useState<'toc' | 'isc' | 'stack' | 'ideas' | 'roadmap'>('toc');

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
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-100 pb-28 selection:bg-white selection:text-black">
      
      {/* 1. STICKY HEADER */}
      <header className="sticky top-0 z-50 w-full border-b border-neutral-800/80 bg-[#0a0a0a]/90 backdrop-blur-xl transition-colors">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Store</span>
            </Link>
            <div className="h-4 w-px bg-neutral-800 hidden sm:block" />
            <Link href="/" className="items-center gap-2 hidden sm:flex">
              <div className="h-6 w-6 rounded-lg bg-white text-black flex items-center justify-center font-bold text-xs">
                N
              </div>
              <span className="font-bold text-xs text-white tracking-tight">NewAIHubber Store</span>
            </Link>
          </div>

          {/* Nav Anchors */}
          <nav className="hidden md:flex items-center gap-6 text-xs text-neutral-400 font-medium">
            <a href="#emotions" className="hover:text-white transition-colors">Why Build</a>
            <a href="#previews" className="hover:text-white transition-colors">Look Inside</a>
            <a href="#frameworks" className="hover:text-white transition-colors">Frameworks</a>
            <a href="#ideas" className="hover:text-white transition-colors">50 Ideas</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </nav>

          {/* Primary CTA */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-white hidden sm:block">
              {formatPrice(product.price, product.currency)}
            </span>
            <a
              href="#checkout"
              className="bg-white text-black hover:bg-neutral-200 font-bold text-xs px-4 py-2 rounded-full transition-all shadow-md flex items-center gap-1.5"
            >
              <span>Get the Ebook</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      <div className="container max-w-6xl mx-auto px-4 sm:px-6 pt-10 space-y-24">
        
        {/* 2. HERO SECTION */}
        <section className="space-y-8 text-center max-w-4xl mx-auto pt-4">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[11px] font-semibold text-neutral-300">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>Full English & Hinglish Editions Included</span>
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[11px] font-semibold text-neutral-400">
              <BookOpen className="w-3.5 h-3.5 text-neutral-300" />
              <span>PDF & ePub Formats</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
            50 Micro-SaaS Ideas You Can Build Without Coding
          </h1>

          <p className="text-base sm:text-lg text-neutral-300 font-normal max-w-2xl mx-auto leading-relaxed">
            Stop waiting for a technical co-founder. Discover practical, validated software ideas you can build, launch, and monetize using visual no-code tools and AI.
          </p>

          {/* Target Audience Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-neutral-400">
            <span className="text-neutral-500">Built for:</span>
            <span className="px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-200">Students</span>
            <span className="px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-200">Freelancers</span>
            <span className="px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-200">Agency Owners</span>
            <span className="px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-200">Aspiring Founders</span>
          </div>

          {/* Hero CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#checkout"
              className="w-full sm:w-auto bg-white text-black hover:bg-neutral-200 text-sm font-bold px-8 py-3.5 rounded-full transition-all shadow-xl flex items-center justify-center gap-2"
            >
              <span>Get the Ebook ({formatPrice(product.price, product.currency)})</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#previews"
              className="w-full sm:w-auto bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-800 text-sm font-semibold px-6 py-3.5 rounded-full transition-all flex items-center justify-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-neutral-400" />
              <span>Explore What's Inside</span>
            </a>
          </div>

          <p className="text-[11px] text-neutral-500 flex items-center justify-center gap-2">
            <Lock className="w-3.5 h-3.5 text-neutral-400" />
            <span>Instant Digital Download Immediately After Successful Payment</span>
          </p>

          {/* Visual Ebook Cover Preview */}
          <div className="relative aspect-[16/9] w-full rounded-2xl border border-neutral-800 bg-[#000000] overflow-hidden shadow-2xl mt-6 group">
            <Image
              src={product.animatedPreview.posterUrl || product.animatedPreview.url}
              alt="50 Micro-SaaS Ideas You Can Build Without Coding Ebook Cover"
              fill
              priority
              className="object-cover opacity-90 group-hover:scale-102 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-neutral-300 bg-black/70 backdrop-blur-md p-3 rounded-xl border border-white/10">
              <span className="font-semibold text-white">Full English Edition + Hinglish Translation Included</span>
              <span className="font-mono text-neutral-400">PDF • ePub • Instant Access</span>
            </div>
          </div>
        </section>

        {/* 3. EMOTIONAL HIGHLIGHTS & REALITY CHECK */}
        <section id="emotions" className="p-8 sm:p-12 rounded-3xl border border-neutral-800 bg-[#121212] space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">The Non-Technical Founder's Journey</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Break Free From Code Paralysis & Build Software That Generates Monthly Revenue
            </h2>
            <p className="text-sm text-neutral-300 leading-relaxed font-normal">
              You don't need a 4-year computer science degree or a $50,000 developer budget to launch software. Modern no-code building blocks allow anyone with determination to build focused Micro-SaaS tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-3">
              <div className="h-9 w-9 rounded-xl bg-neutral-800 flex items-center justify-center text-white">
                <Clock className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-base text-white">Stop Wasting Months Learning Code</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Skip 2 years of learning syntax errors. Build working web portals, automated databases, and payment workflows in days using visual tools.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-3">
              <div className="h-9 w-9 rounded-xl bg-neutral-800 flex items-center justify-center text-white">
                <TrendingUp className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-base text-white">Build Cash-Flow Recurring Revenue</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Micro-SaaS aims for small, profitable niches charging $5–$30/month per user. 50 active subscribers can generate predictable monthly income.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-3">
              <div className="h-9 w-9 rounded-xl bg-neutral-800 flex items-center justify-center text-white">
                <Compass className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-base text-white">Validation Peace of Mind</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Never build in the dark again. Use the 5-Day Pre-Build Validation Method to confirm willingness to pay before touching a database.
              </p>
            </div>
          </div>
        </section>

        {/* 4. VALUE PROPOSITION: THE GAP */}
        <section id="gap" className="p-8 sm:p-12 rounded-3xl border border-neutral-800 bg-[#121212] space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">The Real Problem</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              "I want to build a SaaS, but I don't know WHAT to build."
            </h2>
            <p className="text-sm text-neutral-300 leading-relaxed font-normal">
              Most aspiring founders spend months stuck in idea paralysis or fall in love with unvalidated, complex enterprise software ideas that require thousands of dollars and months of custom coding.
            </p>
          </div>

          {/* Comparison Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-6 rounded-2xl border border-neutral-800/80 bg-neutral-900/60 space-y-4">
              <div className="flex items-center gap-2 text-neutral-400 font-bold text-sm">
                <XCircle className="w-5 h-5 text-neutral-500" />
                <span>Random SaaS Ideas Online</span>
              </div>
              <ul className="space-y-2.5 text-xs text-neutral-400 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-neutral-600">•</span>
                  <span>Generic AI prompts generating vague "Uber for X" concepts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-600">•</span>
                  <span>No defined target audience or specific customer pain point.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-600">•</span>
                  <span>Zero no-code tool stack architecture or technical feasibility.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-600">•</span>
                  <span>No validation plan—forces you to build before talking to users.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl border border-neutral-700 bg-neutral-900 space-y-4">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <CheckCircle2 className="w-5 h-5 text-white" />
                <span>Structured Micro-SaaS Opportunities in This Ebook</span>
              </div>
              <ul className="space-y-2.5 text-xs text-neutral-200 leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                  <span>50 deeply evaluated ideas targeting narrow, high-friction audiences.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                  <span>Exact no-code stack blueprints (Airtable, Softr, Make, WhatsApp API).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                  <span>The ISC Framework & 5-Day Pre-Build Validation Process.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                  <span>7-Day MVP launch roadmap + ready-to-send outreach templates.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 5. "TAKE A LOOK INSIDE" (PDF PREVIEWS) */}
        <section id="previews" className="p-8 rounded-3xl border border-neutral-800 bg-[#121212] space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-neutral-800 pb-6">
            <div className="space-y-1">
              <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Product Transparency</span>
              <h2 className="text-2xl font-extrabold text-white">Take a Look Inside the PDF</h2>
            </div>

            {/* Preview Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
              {[
                { id: 'toc', label: 'Table of Contents' },
                { id: 'isc', label: 'ISC Framework' },
                { id: 'stack', label: 'Tool Stack Guide' },
                { id: 'ideas', label: 'Sample Idea Card' },
                { id: 'roadmap', label: '7-Day Roadmap' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActivePreviewTab(tab.id as any)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                    activePreviewTab === tab.id
                      ? 'bg-white text-black'
                      : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Preview Content Container */}
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/80 p-6 space-y-6">
            {activePreviewTab === 'toc' && (
              <div className="space-y-4">
                <h3 className="font-bold text-base text-white flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-white" /> Table of Contents (7 Complete Chapters)
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-neutral-300">
                  <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800 space-y-1">
                    <span className="font-bold text-white">Chapter 1: Introduction</span>
                    <p className="text-neutral-400">What is a Micro SaaS? Why ideal for beginners.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800 space-y-1">
                    <span className="font-bold text-white">Chapter 2: How No-Code Works</span>
                    <p className="text-neutral-400">4 Building Blocks & honest stack limitations.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800 space-y-1">
                    <span className="font-bold text-white">Chapter 3: Validation Framework</span>
                    <p className="text-neutral-400">ISC Selection Criteria & 5-Day Validation Process.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800 space-y-1">
                    <span className="font-bold text-white">Chapter 4: Tool Stack Guide</span>
                    <p className="text-neutral-400">Beginner ($0-$20/mo) vs. Growth ($40-$100/mo) stacks.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800 space-y-1 sm:col-span-2">
                    <span className="font-bold text-white">Chapter 5: 50 Micro SaaS Ideas Across 10 Categories</span>
                    <p className="text-neutral-400">Freelancers, E-commerce, Creators, Coaches, Local Business, HR, Real Estate, Health, Finance, Communities.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800 space-y-1">
                    <span className="font-bold text-white">Chapter 6: 7-Day Launch Roadmap</span>
                    <p className="text-neutral-400">Day 1 problem confirmation to Day 7 soft launch.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800 space-y-1">
                    <span className="font-bold text-white">Chapter 7: Bonus Outreach & AI Prompts</span>
                    <p className="text-neutral-400">4 ready-to-send DM scripts + 4 ChatGPT prompts.</p>
                  </div>
                </div>
              </div>
            )}

            {activePreviewTab === 'isc' && (
              <div className="space-y-4">
                <h3 className="font-bold text-base text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-white" /> The ISC Framework (Idea Selection Criteria)
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800 space-y-1">
                    <span className="font-bold text-white">1. Narrow Audience</span>
                    <p className="text-neutral-400">Can you precisely define the user? ("Independent physiotherapists" vs generic "Small business owners").</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800 space-y-1">
                    <span className="font-bold text-white">2. Recurring Pain</span>
                    <p className="text-neutral-400">Does the issue occur regularly (daily/weekly) rather than as a rare one-time inconvenience?</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800 space-y-1">
                    <span className="font-bold text-white">3. Workaround Inefficiency</span>
                    <p className="text-neutral-400">How is it solved currently (messy Excel, manual WhatsApp messages)? Is it painful and time-consuming?</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800 space-y-1">
                    <span className="font-bold text-white">4. Willingness to Pay</span>
                    <p className="text-neutral-400">Does this target audience already invest in commercial tools or paid services in adjacent workflow areas?</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800 space-y-1 sm:col-span-2 lg:col-span-2">
                    <span className="font-bold text-white">5. No-Code Feasibility</span>
                    <p className="text-neutral-400">Can the core Minimum Viable Product (MVP) functionality be realistically assembled using visual builders like Airtable, Softr, and Make.com?</p>
                  </div>
                </div>
              </div>
            )}

            {activePreviewTab === 'stack' && (
              <div className="space-y-4">
                <h3 className="font-bold text-base text-white flex items-center gap-2">
                  <Layers className="w-4 h-4 text-white" /> 4 Core Building Blocks of a No-Code Micro SaaS
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2">
                    <div className="flex items-center gap-2 text-white font-bold">
                      <Database className="w-4 h-4 text-white" /> Data Layer (Database)
                    </div>
                    <p className="text-neutral-400">Stores user records, orders, bookings, and linked records. Tools: <strong className="text-white">Airtable, Google Sheets</strong>.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2">
                    <div className="flex items-center gap-2 text-white font-bold">
                      <Code2 className="w-4 h-4 text-white" /> Interface Layer (App / Web)
                    </div>
                    <p className="text-neutral-400">Transforms backend data into responsive portals and web dashboards. Tools: <strong className="text-white">Softr, Glide, Tally, Carrd</strong>.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2">
                    <div className="flex items-center gap-2 text-white font-bold">
                      <Workflow className="w-4 h-4 text-white" /> Automation Layer (Logic)
                    </div>
                    <p className="text-neutral-400">Connects tools, automates reminders, PDF generation, and triggers. Tools: <strong className="text-white">Make.com, Zapier</strong>.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2">
                    <div className="flex items-center gap-2 text-white font-bold">
                      <MessageSquare className="w-4 h-4 text-white" /> Messaging & Payment Layer
                    </div>
                    <p className="text-neutral-400">Delivers WhatsApp/email notifications & collects subscription payments. Tools: <strong className="text-white">WhatsApp API, Stripe, Razorpay</strong>.</p>
                  </div>
                </div>
              </div>
            )}

            {activePreviewTab === 'ideas' && (
              <div className="space-y-4">
                <h3 className="font-bold text-base text-white">Sample Idea Excerpt from the Ebook</h3>
                <div className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-3 text-xs">
                  <div className="flex items-center justify-between border-b border-neutral-800 pb-2">
                    <div>
                      <span className="font-mono text-[10px] text-neutral-400">Idea #2 • Category 1</span>
                      <h4 className="font-bold text-sm text-white">InvoiceNudge – Automated Payment Reminder Tool</h4>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-neutral-800 text-neutral-300 font-semibold text-[10px]">Complexity: Medium</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-neutral-300">
                    <div>
                      <strong className="text-neutral-400 block mb-0.5">Problem Solved:</strong>
                      <p>Freelancers find asking for overdue money awkward, delaying follow-ups and suffering severe cash flow bottlenecks.</p>
                    </div>
                    <div>
                      <strong className="text-neutral-400 block mb-0.5">Target Audience:</strong>
                      <p>Independent freelancers handling 1–5 active clients and small boutique agencies (2–10 team members).</p>
                    </div>
                    <div>
                      <strong className="text-neutral-400 block mb-0.5">Suggested No-Code Stack:</strong>
                      <p className="font-mono text-[11px] text-white">Airtable + Make.com + WhatsApp Business API + Stripe/Razorpay</p>
                    </div>
                    <div>
                      <strong className="text-neutral-400 block mb-0.5">Pricing Model:</strong>
                      <p>$6–$12/month (approx. ₹399–₹799/mo) tiered by number of tracked clients.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activePreviewTab === 'roadmap' && (
              <div className="space-y-4">
                <h3 className="font-bold text-base text-white flex items-center gap-2">
                  <Zap className="w-4 h-4 text-white" /> The 7-Day MVP Launch Roadmap
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-7 gap-2 text-center text-[11px]">
                  <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 space-y-1">
                    <span className="font-bold text-white block">Day 1</span>
                    <span className="text-neutral-400 block">Problem Discovery</span>
                  </div>
                  <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 space-y-1">
                    <span className="font-bold text-white block">Day 2</span>
                    <span className="text-neutral-400 block">Scope Lock</span>
                  </div>
                  <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 space-y-1">
                    <span className="font-bold text-white block">Day 3</span>
                    <span className="text-neutral-400 block">Database Setup</span>
                  </div>
                  <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 space-y-1">
                    <span className="font-bold text-white block">Day 4</span>
                    <span className="text-neutral-400 block">Frontend Build</span>
                  </div>
                  <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 space-y-1">
                    <span className="font-bold text-white block">Day 5</span>
                    <span className="text-neutral-400 block">Automations</span>
                  </div>
                  <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 space-y-1">
                    <span className="font-bold text-white block">Day 6</span>
                    <span className="text-neutral-400 block">Testing & Polish</span>
                  </div>
                  <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 space-y-1">
                    <span className="font-bold text-white block">Day 7</span>
                    <span className="text-neutral-400 block">Soft Launch</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* 6. THE 50 IDEAS SHOWCASE (10 CATEGORIES GALLERY) */}
        <section id="ideas" className="space-y-8">
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-neutral-800 pb-4">
              <div>
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">The Complete Catalog</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">50 Micro-SaaS Ideas Across 10 Categories</h2>
              </div>

              {/* Search filter for ideas */}
              <div className="relative w-full sm:w-64">
                <Search className="w-3.5 h-3.5 text-neutral-500 absolute left-3 top-3 pointer-events-none" />
                <input
                  type="text"
                  value={searchIdea}
                  onChange={(e) => setSearchIdea(e.target.value)}
                  placeholder="Filter 50 ideas..."
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-full pl-9 pr-4 py-2 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-neutral-500"
                />
              </div>
            </div>

            {/* Category Selector Pills */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-2">
              <button
                onClick={() => setActiveCategoryId(0)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                  activeCategoryId === 0
                    ? 'bg-white text-black'
                    : 'bg-neutral-900 text-neutral-400 border border-neutral-800 hover:text-white'
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
                      ? 'bg-white text-black'
                      : 'bg-neutral-900 text-neutral-400 border border-neutral-800 hover:text-white'
                  }`}
                >
                  Cat {cat.id}: {cat.name} ({cat.count})
                </button>
              ))}
            </div>
          </div>

          {/* Ideas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredIdeas.map((idea) => (
              <div
                key={idea.id}
                className="p-6 rounded-2xl border border-neutral-800 bg-[#121212] space-y-4 hover:border-neutral-700 transition-colors flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2 border-b border-neutral-800/80 pb-3">
                    <div>
                      <span className="text-[10px] font-mono font-semibold text-neutral-400 uppercase">
                        Idea #{idea.id} • Category {idea.categoryNumber}: {idea.categoryName}
                      </span>
                      <h3 className="font-bold text-base text-white">{idea.name}</h3>
                      <p className="text-xs text-neutral-400 font-medium">{idea.tagline}</p>
                    </div>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded border shrink-0 ${
                        idea.complexity === 'Easy'
                          ? 'bg-neutral-900 text-white border-neutral-700'
                          : idea.complexity === 'Medium'
                          ? 'bg-neutral-900 text-neutral-300 border-neutral-700'
                          : 'bg-neutral-900 text-neutral-400 border-neutral-700'
                      }`}
                    >
                      {idea.complexity}
                    </span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div>
                      <span className="font-semibold text-neutral-300">Problem Solved: </span>
                      <span className="text-neutral-400">{idea.problemSolved}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-neutral-300">Target Audience: </span>
                      <span className="text-neutral-400">{idea.targetAudience}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-neutral-300">Key MVP Features: </span>
                      <ul className="list-disc list-inside text-neutral-400 pl-1 pt-1 space-y-0.5">
                        {idea.keyFeatures.map((feat, i) => (
                          <li key={i}>{feat}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-neutral-800/80 space-y-2 text-[11px]">
                  <div>
                    <span className="font-semibold text-neutral-300">Suggested No-Code Stack: </span>
                    <span className="font-mono text-neutral-200">{idea.suggestedStack}</span>
                  </div>
                  <div className="flex items-center justify-between text-neutral-400">
                    <span>Pricing: <strong className="text-white">{idea.pricingModel}</strong></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. TRANSFORMATION / OUTCOMES */}
        <section className="p-8 sm:p-12 rounded-3xl border border-neutral-800 bg-[#121212] space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Your Transformation Journey</h2>
            <p className="text-xs sm:text-sm text-neutral-400">
              Clear, realistic knowledge shift without false promises or fake income guarantees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">BEFORE READING</span>
              <h3 className="font-bold text-base text-neutral-300">"Stuck in Idea Paralysis"</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Overwhelmed by generic startup lists, spending weeks questioning whether an idea is feasible, and assuming software development requires hiring expensive developers.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white text-black space-y-3 shadow-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-700">AFTER READING</span>
              <h3 className="font-bold text-base text-black">"Structured & Validated Execution"</h3>
              <p className="text-xs text-neutral-800 leading-relaxed font-medium">
                Armed with 50 evaluated Micro-SaaS blueprints, exact no-code stack choices, the 5-Day Pre-Build Validation Method, and a 7-Day Launch Roadmap to execute with clarity.
              </p>
            </div>
          </div>
        </section>

        {/* 8. WHO THIS IS FOR VS NOT FOR */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Is This Suitable For You?</h2>
            <p className="text-xs text-neutral-400">Honest breakdown to ensure you make the right purchasing decision.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-neutral-800 bg-[#121212] space-y-4">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <CheckCircle2 className="w-5 h-5 text-white" />
                <span>This is for you if:</span>
              </div>
              <ul className="space-y-2 text-xs text-neutral-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <span>You are a non-technical builder, student, freelancer, or agency owner looking to launch software without coding.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <span>You want a structured evaluation framework (ISC Criteria) to validate demand before investing time.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <span>You prefer building compact, cash-flow positive Micro-SaaS tools ($200–$2,000/mo) over raising VC money.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl border border-neutral-800 bg-[#121212] space-y-4">
              <div className="flex items-center gap-2 text-neutral-400 font-bold text-sm">
                <XCircle className="w-5 h-5 text-neutral-500" />
                <span>This is NOT for you if:</span>
              </div>
              <ul className="space-y-2 text-xs text-neutral-400">
                <li className="flex items-start gap-2">
                  <span className="text-neutral-600">•</span>
                  <span>You are looking for guaranteed passive income or overnight get-rich-quick schemes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-600">•</span>
                  <span>You want a deep C++ / Python coding reference manual for native enterprise software development.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-600">•</span>
                  <span>You expect software to build and sell itself without talking to target users or executing validation steps.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 9. OBJECTION HANDLING & FAQ ACCORDION */}
        <section id="faq" className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Frequently Asked Questions & Objections</h2>
            <p className="text-xs text-neutral-400">Clear, transparent answers backed directly by the ebook content.</p>
          </div>

          <div className="space-y-3 max-w-3xl mx-auto">
            {[
              {
                question: 'Do I need any coding or programming experience?',
                answer: 'No. This handbook is written specifically for beginners without a coding background. All 50 ideas are designed around visual drag-and-drop tools like Airtable, Softr, Tally, and Make.com.',
              },
              {
                question: 'Are both English and Hinglish editions included in one purchase?',
                answer: 'Yes! When you complete your purchase, you receive instant access to download BOTH the full English Edition PDF/ePub and the comprehensive Hinglish Edition PDF/ePub.',
              },
              {
                question: 'Are these just random AI-generated startup ideas?',
                answer: 'No. Every single idea in this book is structured with a defined problem statement, narrow target audience, core MVP features, suggested no-code stack, pricing model, complexity rating, primary validation step, and major risk factor.',
              },
              {
                question: 'Do I need expensive software tools to start?',
                answer: 'No. The book outlines both a Beginner Stack ($0–$20/month using free tiers of Google Sheets, Airtable, Softr, and Cal.com) and a Growth Stack ($40–$100+/month) to upgrade only after securing paying customers.',
              },
              {
                question: 'Is this a physical book or a digital download?',
                answer: 'This is a digital product ecosystem. Immediately after payment, you receive instant download links to PDF and ePub files compatible with laptops, tablets, phones, and e-readers.',
              },
              {
                question: 'Does this book promise guaranteed income or revenue?',
                answer: 'No. As stated clearly in the book disclaimer, business outcomes depend entirely on your execution, market validation, and effort. This handbook provides a structured starting methodology, not a financial guarantee.',
              },
            ].map((faqItem, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="rounded-2xl border border-neutral-800 bg-[#121212] overflow-hidden">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left font-semibold text-sm text-white flex items-center justify-between gap-4"
                  >
                    <span>{faqItem.question}</span>
                    <ChevronDown className={`w-4 h-4 text-neutral-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-neutral-300 leading-relaxed border-t border-neutral-800/60 pt-3">
                      {faqItem.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* 10. WHAT YOU GET (INVENTORY CHECKLIST) */}
        <section className="p-8 sm:p-12 rounded-3xl border border-neutral-700 bg-[#141414] space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Complete Package</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">What You Receive Upon Purchase</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-2 text-xs">
              <CheckCircle2 className="w-5 h-5 text-white" />
              <h3 className="font-bold text-white text-sm">Full English Edition</h3>
              <p className="text-neutral-400">Complete 180+ page comprehensive handbook in English PDF & ePub.</p>
            </div>

            <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-2 text-xs">
              <CheckCircle2 className="w-5 h-5 text-white" />
              <h3 className="font-bold text-white text-sm">Full Hinglish Edition</h3>
              <p className="text-neutral-400">Complete Hinglish translation PDF & ePub for easy comprehension.</p>
            </div>

            <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-2 text-xs">
              <CheckCircle2 className="w-5 h-5 text-white" />
              <h3 className="font-bold text-white text-sm">50 Micro-SaaS Blueprints</h3>
              <p className="text-neutral-400">10 categories with defined problems, audiences, MVP features & stacks.</p>
            </div>

            <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-2 text-xs">
              <CheckCircle2 className="w-5 h-5 text-white" />
              <h3 className="font-bold text-white text-sm">ISC Validation Framework</h3>
              <p className="text-neutral-400">5 selection criteria & 5-Day Pre-Build Validation Method.</p>
            </div>

            <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-2 text-xs">
              <CheckCircle2 className="w-5 h-5 text-white" />
              <h3 className="font-bold text-white text-sm">7-Day Launch Roadmap</h3>
              <p className="text-neutral-400">Step-by-step Day 1 to Day 7 agile MVP execution plan.</p>
            </div>

            <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-2 text-xs">
              <CheckCircle2 className="w-5 h-5 text-white" />
              <h3 className="font-bold text-white text-sm">Bonus Scripts & AI Prompts</h3>
              <p className="text-neutral-400">4 ready-to-send DM scripts + 4 curated ChatGPT system prompts.</p>
            </div>
          </div>
        </section>

        {/* 11. FINAL BUY CTA (CHECKOUT ANCHOR) */}
        <section id="checkout" className="p-8 sm:p-14 rounded-3xl border border-neutral-700 bg-white text-black text-center space-y-6 shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-600">Instant Access</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-black tracking-tight leading-tight">
              Get Instant Access to All 50 Micro-SaaS Blueprints
            </h2>
            <p className="text-xs sm:text-sm text-neutral-700 max-w-xl mx-auto leading-relaxed">
              You don't need another generic list of startup ideas. You need a structured starting point you can actually evaluate, validate, and build.
            </p>
          </div>

          <div className="max-w-md mx-auto space-y-4">
            <div className="text-center">
              <span className="text-3xl font-extrabold font-mono text-black">
                {formatPrice(product.price, product.currency)}
              </span>
              <p className="text-[11px] text-neutral-600">One-time payment • English & Hinglish editions included</p>
            </div>

            <a
              href={`mailto:support@newaihubber.com?subject=Order%20${product.slug}`}
              className="w-full bg-black hover:bg-neutral-800 text-white text-sm font-bold px-8 py-4 rounded-full transition-all shadow-xl flex items-center justify-center gap-2"
            >
              <Lock className="w-4 h-4 text-white" />
              <span>Complete Order ({formatPrice(product.price, product.currency)})</span>
            </a>

            <div className="flex items-center justify-center gap-4 text-[11px] text-neutral-600">
              <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5" /> 256-Bit SSL Encrypted</span>
              <span>•</span>
              <span className="flex items-center gap-1"><Download className="w-3.5 h-3.5" /> Instant Digital Download</span>
            </div>
          </div>
        </section>

      </div>

      {/* 12. SUBTLE STICKY BOTTOM PURCHASE CTA BAR (MOBILE & DESKTOP) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 border-t border-neutral-800 backdrop-blur-xl py-3 px-4 shadow-2xl">
        <div className="container max-w-5xl mx-auto flex items-center justify-between gap-4">
          <div className="hidden sm:flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white font-bold text-xs shrink-0">
              50
            </div>
            <div>
              <p className="text-xs font-bold text-white line-clamp-1">50 Micro-SaaS Ideas You Can Build Without Coding</p>
              <p className="text-[10px] text-neutral-400">English + Hinglish Editions Included</p>
            </div>
          </div>

          <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-4">
            <span className="text-sm font-extrabold font-mono text-white">
              {formatPrice(product.price, product.currency)}
            </span>
            <a
              href="#checkout"
              className="bg-white text-black hover:bg-neutral-200 text-xs font-bold px-5 py-2.5 rounded-full transition-all shadow-lg flex items-center gap-1.5 shrink-0"
            >
              <span>Get the Ebook</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};
