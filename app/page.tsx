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

  useEffect(() => {
    async function loadProducts() {
      setLoading(true);
      const filtered = await getFilteredProducts(activeCategory, searchQuery);
      setProducts(filtered);
      setLoading(false);
    }
    loadProducts();
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-100 flex flex-col">
      
      {/* Top Header & Search */}
      <StoreHeader searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      {/* Category Pill Navigation */}
      <CategoryNav
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

      {/* Main Visual Gallery Marketplace */}
      <main className="flex-1 container max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-6">
        
        {/* Results Counter Banner */}
        <div className="flex items-center justify-between text-xs text-neutral-400 font-medium">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-white" />
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
              <div key={i} className="aspect-[16/10] rounded-2xl bg-neutral-900 border border-neutral-800" />
            ))}
          </div>
        ) : products.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center border border-dashed border-neutral-800 rounded-2xl bg-[#121212] my-6">
            <div className="h-12 w-12 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center mb-3">
              <PackageOpen className="w-6 h-6 text-neutral-400" />
            </div>
            <h3 className="font-semibold text-base text-white mb-1">No products found</h3>
            <p className="text-xs text-neutral-400 max-w-sm">
              Try adjusting your search query or selecting a different category pill.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

      </main>

    </div>
  );
}
