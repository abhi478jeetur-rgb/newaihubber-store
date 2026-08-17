'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  Zap,
  ShieldCheck,
  Download,
  Globe,
  Layers,
  Cpu,
  Copy,
  ChevronDown,
  Lock,
  ExternalLink,
} from 'lucide-react';
import { Product } from '@/types/product';
import { formatPrice } from '@/lib/utils';

interface ProductLandingProps {
  product: Product;
}

export const ProductLanding: React.FC<ProductLandingProps> = ({ product }) => {
  const { landingPage, productFiles } = product;

  // Accordion toggle state for FAQ
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-100 pb-24">
      
      {/* 1. TOP NAVIGATION / BACK BUTTON */}
      <div className="border-b border-neutral-800/80 bg-[#0a0a0a]/90 sticky top-0 z-50 backdrop-blur-xl">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Store</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-white hidden sm:block">
              {formatPrice(product.price, product.currency)}
            </span>
            <a
              href="#checkout"
              className="bg-white text-black hover:bg-neutral-200 font-bold text-xs px-4 py-2 rounded-full transition-all shadow-md"
            >
              Get Instant Access
            </a>
          </div>
        </div>
      </div>

      <div className="container max-w-5xl mx-auto px-4 sm:px-6 pt-12 space-y-16">
        
        {/* 2. HERO SECTION */}
        <section className="space-y-8 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-medium text-neutral-300">
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span>{product.categoryLabel}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
            {product.title}
          </h1>

          <p className="text-base sm:text-lg text-neutral-400 font-normal max-w-2xl mx-auto leading-relaxed">
            {landingPage.heroTagline || product.subtitle}
          </p>

          {/* Hero CTA & Price Box */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#checkout"
              className="w-full sm:w-auto bg-white text-black hover:bg-neutral-200 text-sm font-bold px-8 py-3.5 rounded-full transition-all shadow-xl flex items-center justify-center gap-2"
            >
              <span>Get Instant Access ({formatPrice(product.price, product.currency)})</span>
            </a>
            {product.compareAtPrice && (
              <span className="text-xs text-neutral-500 line-through">
                {formatPrice(product.compareAtPrice, product.currency)}
              </span>
            )}
          </div>

          {/* Animated Visual Hero Preview */}
          <div className="relative aspect-[16/10] w-full rounded-2xl border border-neutral-800 bg-[#000000] overflow-hidden shadow-2xl mt-8">
            <img
              src={product.animatedPreview.url || product.animatedPreview.posterUrl}
              alt={product.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent pointer-events-none" />
          </div>
        </section>

        {/* 3. WHAT IT IS */}
        <section className="p-8 rounded-3xl border border-neutral-800 bg-[#121212] space-y-4">
          <h2 className="text-xl font-bold text-white">What is this?</h2>
          <p className="text-sm text-neutral-300 leading-relaxed font-normal">
            {landingPage.whatItIs}
          </p>
        </section>

        {/* 4. WHAT IS INCLUDED */}
        {landingPage.whatsIncluded.length > 0 && (
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white">What's Included</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {landingPage.whatsIncluded.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-2xl border border-neutral-800 bg-[#121212] text-xs text-neutral-200"
                >
                  <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <span className="font-medium text-sm text-neutral-100">{item}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 5. KEY BENEFITS */}
        {landingPage.keyBenefits.length > 0 && (
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Key Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {landingPage.keyBenefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-neutral-800 bg-[#121212] space-y-3"
                >
                  <div className="h-10 w-10 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-center text-white">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base text-white">{benefit.title}</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 6. WHO THIS IS FOR */}
        {landingPage.whoIsThisFor.length > 0 && (
          <section className="p-8 rounded-3xl border border-neutral-800 bg-[#121212] space-y-4">
            <h2 className="text-xl font-bold text-white">Who is this for?</h2>
            <div className="space-y-2 text-sm text-neutral-300">
              {landingPage.whoIsThisFor.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-white shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 7. PRODUCT SPECIFICATIONS & FILES */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-white">Product Files & Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Specs Table */}
            <div className="rounded-2xl border border-neutral-800 bg-[#121212] overflow-hidden divide-y divide-neutral-800 text-xs">
              {Object.entries(landingPage.specifications).map(([key, val]) => (
                <div key={key} className="flex items-center justify-between p-3.5">
                  <span className="font-medium text-neutral-400">{key}</span>
                  <span className="font-semibold text-neutral-100">{val}</span>
                </div>
              ))}
            </div>

            {/* File Assets List */}
            <div className="p-6 rounded-2xl border border-neutral-800 bg-[#121212] space-y-3">
              <h3 className="font-bold text-sm text-white flex items-center gap-2">
                <Download className="w-4 h-4" /> Digital Assets Delivered
              </h3>
              <div className="space-y-2">
                {productFiles.map((file, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-xs">
                    <span className="font-semibold text-neutral-200">{file.name}</span>
                    <span className="font-mono text-neutral-400 text-[11px]">{file.format} • {file.size}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 8. FAQ ACCORDION (WHERE USEFUL) */}
        {landingPage.faq && landingPage.faq.length > 0 && (
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {landingPage.faq.map((faqItem, idx) => {
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
                      <div className="px-5 pb-5 text-xs text-neutral-400 leading-relaxed border-t border-neutral-800/60 pt-3">
                        {faqItem.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* 9. STRONG FINAL BUY CTA (CHECKOUT ANCHOR) */}
        <section id="checkout" className="p-8 sm:p-12 rounded-3xl border border-neutral-700 bg-[#141414] text-center space-y-6">
          <div className="max-w-xl mx-auto space-y-3">
            <h2 className="text-3xl font-extrabold text-white">Get Instant Download Access Today</h2>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Immediate access link and files generated after successful payment. Lifetime updates included.
            </p>
          </div>

          <div className="max-w-md mx-auto space-y-3">
            <a
              href={`mailto:support@newaihubber.com?subject=Order%20${product.slug}`}
              className="w-full bg-white text-black hover:bg-neutral-200 text-sm font-bold px-8 py-4 rounded-full transition-all shadow-xl flex items-center justify-center gap-2"
            >
              <Lock className="w-4 h-4" />
              <span>Complete Order ({formatPrice(product.price, product.currency)})</span>
            </a>
            <p className="text-[11px] text-neutral-500">256-Bit SSL Encrypted • Instant Digital Access</p>
          </div>
        </section>

      </div>
    </div>
  );
};
