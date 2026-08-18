'use client';

import React from 'react';
import { CategorySlug, STORE_CATEGORIES } from '@/types/product';
import { motion } from 'framer-motion';

interface CategoryNavProps {
  activeCategory: CategorySlug;
  onSelectCategory: (slug: CategorySlug) => void;
  theme: 'light' | 'dark';
}

export const CategoryNav: React.FC<CategoryNavProps> = ({
  activeCategory,
  onSelectCategory,
  theme,
}) => {
  const isLight = theme === 'light';

  return (
    <div
      className={`w-full border-b sticky top-20 z-40 backdrop-blur-xl transition-colors ${
        isLight
          ? 'bg-white/90 border-neutral-200/80'
          : 'bg-[#0a0a0a]/90 border-neutral-800/60'
      }`}
    >
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
                    : isLight
                    ? 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
                    : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900/60'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryIndicator"
                    className={`absolute inset-0 rounded-full shadow-sm ${
                      isLight
                        ? 'bg-neutral-900 border border-neutral-800'
                        : 'bg-neutral-800 border border-neutral-700'
                    }`}
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
