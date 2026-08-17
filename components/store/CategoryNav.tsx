'use client';

import React from 'react';
import { CategorySlug } from '@/types/product';
import { STORE_CATEGORIES } from '@/data/products';
import { motion } from 'framer-motion';

interface CategoryNavProps {
  activeCategory: CategorySlug;
  onSelectCategory: (slug: CategorySlug) => void;
}

export const CategoryNav: React.FC<CategoryNavProps> = ({
  activeCategory,
  onSelectCategory,
}) => {
  return (
    <div className="w-full border-b border-neutral-800/60 bg-[#0a0a0a] sticky top-20 z-40">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
          {STORE_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.slug;
            return (
              <button
                key={cat.slug}
                onClick={() => onSelectCategory(cat.slug)}
                className={`relative px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-colors duration-200 select-none ${
                  isActive
                    ? 'text-white'
                    : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900/60'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryIndicator"
                    className="absolute inset-0 bg-neutral-800 rounded-full border border-neutral-700 shadow-sm"
                    transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
