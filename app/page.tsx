'use client';

import React, { useState, useEffect } from 'react';
import { StoreHeader } from '@/components/store/StoreHeader';
import { CategoryNav } from '@/components/store/CategoryNav';
import { ProductCard } from '@/components/store/ProductCard';
import { CategorySlug, Product } from '@/types/product';
import { getFilteredProducts } from '@/lib/products';
import { PackageOpen, Sparkles } from 'lucide-react';

export default function StoreHomePage() {
  const [activeCategory, setActiveCategory] = useState<CategorySlug>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Default mode is LIGHT as requested by user ("default roop se white mode me hi rahega")
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Load theme preference from localStorage on mount (defaults to light)
  useEffect(() => {
    const savedTheme = localStorage.getItem('store_theme') as 'light' | 'dark' | null;
    if (savedTheme === 'dark' || savedTheme === 'light') {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    localStorage.setItem('store_theme', nextTheme);
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
      className={`min-h-screen flex flex-col transition-colors duration-300 ${
        isLight ? 'bg-[#FAFAFA] text-neutral-900' : 'bg-[#0a0a0a] text-neutral-100'
      }`}
    >
      
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
