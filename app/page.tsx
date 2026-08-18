'use client';

import React, { useState, useEffect, useRef } from 'react';
import { StoreHeader } from '@/components/store/StoreHeader';
import { CategoryNav } from '@/components/store/CategoryNav';
import { ProductCard } from '@/components/store/ProductCard';
import { CategorySlug, Product } from '@/types/product';
import { getFilteredProducts } from '@/lib/products';
import { PackageOpen, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function StoreHomePage() {
  const [activeCategory, setActiveCategory] = useState<CategorySlug>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Default mode is LIGHT as requested by user ("default roop se white mode me hi rahega")
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Wave transition animation overlay state
  const [waveAnimation, setWaveAnimation] = useState<{
    active: boolean;
    x: number;
    y: number;
    targetTheme: 'light' | 'dark';
  } | null>(null);

  // Load theme preference from localStorage on mount (defaults to light)
  useEffect(() => {
    const savedTheme = localStorage.getItem('store_theme') as 'light' | 'dark' | null;
    if (savedTheme === 'dark' || savedTheme === 'light') {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = (e?: React.MouseEvent<HTMLButtonElement>) => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    
    // Get origin coordinates from click or default to top-right
    let x = window.innerWidth * 0.9;
    let y = 40;

    if (e && e.clientX && e.clientY) {
      x = e.clientX;
      y = e.clientY;
    }

    // Set CSS custom variables for View Transitions API
    if (typeof document !== 'undefined') {
      document.documentElement.style.setProperty('--theme-x', `${x}px`);
      document.documentElement.style.setProperty('--theme-y', `${y}px`);
    }

    // Check for native View Transition support
    const doc = document as any;
    if (doc.startViewTransition) {
      doc.startViewTransition(() => {
        setTheme(nextTheme);
        localStorage.setItem('store_theme', nextTheme);
      });
    } else {
      // Fallback: Trigger React Wave animation overlay sweep
      setWaveAnimation({
        active: true,
        x,
        y,
        targetTheme: nextTheme,
      });

      // Switch theme mid-wave for ultra-smooth transition
      setTimeout(() => {
        setTheme(nextTheme);
        localStorage.setItem('store_theme', nextTheme);
      }, 250);

      setTimeout(() => {
        setWaveAnimation(null);
      }, 750);
    }
  };

  useEffect(() => {
    async function loadProducts() {
      setLoading(true);
      const filtered = await getFilteredProducts(activeCategory, searchQuery);
      setProducts(filtered);
      setLoading(false);
    }
    loadProducts();
  }, [activeCategory, searchQuery]);

  const isLight = theme === 'light';

  return (
    <div
      className={`relative min-h-screen flex flex-col transition-colors duration-300 overflow-x-hidden ${
        isLight ? 'bg-[#FAFAFA] text-neutral-900' : 'bg-[#0a0a0a] text-neutral-100'
      }`}
    >
      
      {/* Dynamic Wave Expansion Overlay */}
      <AnimatePresence>
        {waveAnimation && waveAnimation.active && (
          <motion.div
            initial={{
              clipPath: `circle(0px at ${waveAnimation.x}px ${waveAnimation.y}px)`,
              opacity: 0.95,
            }}
            animate={{
              clipPath: `circle(170vmax at ${waveAnimation.x}px ${waveAnimation.y}px)`,
              opacity: 1,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.65, ease: [0.25, 1, 0.5, 1] }}
            className={`fixed inset-0 z-[9999] pointer-events-none ${
              waveAnimation.targetTheme === 'light' ? 'bg-[#FAFAFA]' : 'bg-[#0a0a0a]'
            }`}
          />
        )}
      </AnimatePresence>

      {/* Top Header & Search + Theme Switcher */}
      <StoreHeader
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Category Pill Navigation */}
      <CategoryNav
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        theme={theme}
      />

      {/* Main Visual Gallery Marketplace */}
      <main className="flex-1 container max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-6">
        
        {/* Results Counter Banner */}
        <div
          className={`flex items-center justify-between text-xs font-medium ${
            isLight ? 'text-neutral-500' : 'text-neutral-400'
          }`}
        >
          <div className="flex items-center gap-2">
            <Sparkles className={`w-3.5 h-3.5 ${isLight ? 'text-neutral-900' : 'text-white'}`} />
            <span>
              {activeCategory === 'all'
                ? 'Curated Digital Product Gallery'
                : `Browsing ${activeCategory.replace('-', ' ').toUpperCase()}`}
            </span>
          </div>
          <span>{products.length} product(s)</span>
        </div>

        {/* Product Grid Gallery */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`aspect-[16/10] rounded-2xl border ${
                  isLight ? 'bg-neutral-200/60 border-neutral-200' : 'bg-neutral-900 border-neutral-800'
                }`}
              />
            ))}
          </div>
        ) : products.length === 0 ? (
          <div
            className={`flex flex-col items-center justify-center py-20 text-center border border-dashed rounded-2xl my-6 ${
              isLight ? 'border-neutral-300 bg-white' : 'border-neutral-800 bg-[#121212]'
            }`}
          >
            <div
              className={`h-12 w-12 rounded-full border flex items-center justify-center mb-3 ${
                isLight ? 'bg-neutral-100 border-neutral-200' : 'bg-neutral-800 border-neutral-700'
              }`}
            >
              <PackageOpen className={`w-6 h-6 ${isLight ? 'text-neutral-600' : 'text-neutral-400'}`} />
            </div>
            <h3 className={`font-semibold text-base mb-1 ${isLight ? 'text-neutral-900' : 'text-white'}`}>
              No products found
            </h3>
            <p className={`text-xs max-w-sm ${isLight ? 'text-neutral-500' : 'text-neutral-400'}`}>
              Try adjusting your search query or selecting a different category pill.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} theme={theme} />
            ))}
          </div>
        )}

      </main>

    </div>
  );
}
