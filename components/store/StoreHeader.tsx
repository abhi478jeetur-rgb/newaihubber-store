'use client';

import React from 'react';
import Link from 'next/link';
import { Search, X, Sparkles } from 'lucide-react';

interface StoreHeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const StoreHeader: React.FC<StoreHeaderProps> = ({
  searchQuery,
  onSearchChange,
}) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-800/80 bg-[#0a0a0a]/90 backdrop-blur-xl transition-colors">
      <div className="container max-w-7xl mx-auto flex h-20 items-center justify-between gap-4 px-4 sm:px-6">
        
        {/* Brand Logo - Minimal & Premium */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <div className="h-9 w-9 rounded-xl bg-white text-black flex items-center justify-center font-bold text-lg shadow-md group-hover:scale-105 transition-transform">
            N
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-tight text-white group-hover:text-neutral-300 transition-colors flex items-center gap-1.5">
              NewAIHubber <span className="text-xs font-normal text-neutral-400 border border-neutral-800 px-2 py-0.5 rounded-full bg-neutral-900">STORE</span>
            </span>
          </div>
        </Link>

        {/* ONE Prominent Search Box */}
        <div className="flex-1 max-w-xl">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-neutral-500">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search prompts, ebooks, templates, PDFs, automation blueprints..."
              className="w-full bg-[#121212] border border-neutral-800 rounded-full pl-11 pr-10 py-2.5 text-sm text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 transition-all duration-200"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-neutral-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

      </div>
    </header>
  );
};
