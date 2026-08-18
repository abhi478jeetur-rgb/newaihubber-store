'use client';

import React from 'react';
import Link from 'next/link';
import { Search, X, Sun, Moon } from 'lucide-react';

interface StoreHeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export const StoreHeader: React.FC<StoreHeaderProps> = ({
  searchQuery,
  onSearchChange,
  theme,
  onToggleTheme,
}) => {
  const isLight = theme === 'light';

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b backdrop-blur-xl transition-colors ${
        isLight
          ? 'bg-white/90 border-neutral-200/80 text-neutral-900'
          : 'bg-[#0a0a0a]/90 border-neutral-800/80 text-neutral-100'
      }`}
    >
      <div className="container max-w-7xl mx-auto flex h-20 items-center justify-between gap-4 px-4 sm:px-6">
        
        {/* Brand Logo - Minimal & Premium */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <div
            className={`h-9 w-9 rounded-xl flex items-center justify-center font-bold text-lg shadow-md group-hover:scale-105 transition-transform ${
              isLight ? 'bg-neutral-900 text-white' : 'bg-white text-black'
            }`}
          >
            N
          </div>
          <div className="flex flex-col">
            <span
              className={`font-bold text-lg tracking-tight transition-colors flex items-center gap-1.5 ${
                isLight ? 'text-neutral-900 group-hover:text-black' : 'text-white group-hover:text-neutral-300'
              }`}
            >
              NewAIHubber{' '}
              <span
                className={`text-xs font-normal border px-2 py-0.5 rounded-full ${
                  isLight
                    ? 'border-neutral-200 bg-neutral-100 text-neutral-600'
                    : 'border-neutral-800 bg-neutral-900 text-neutral-400'
                }`}
              >
                STORE
              </span>
            </span>
          </div>
        </Link>

        {/* ONE Prominent Search Box */}
        <div className="flex-1 max-w-xl">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-neutral-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search prompts, ebooks, templates, PDFs, automation blueprints..."
              className={`w-full border rounded-full pl-11 pr-10 py-2.5 text-sm transition-all duration-200 focus:outline-none focus:ring-1 ${
                isLight
                  ? 'bg-neutral-100/90 border-neutral-200 text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-400 focus:ring-neutral-400'
                  : 'bg-[#121212] border-neutral-800 text-neutral-100 placeholder:text-neutral-500 focus:border-neutral-500 focus:ring-neutral-500'
              }`}
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-neutral-400 hover:text-neutral-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Theme Toggle Button (Light / Dark) */}
        <button
          onClick={onToggleTheme}
          title={isLight ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
          className={`flex items-center gap-2 p-2.5 rounded-full border text-xs font-semibold transition-all ${
            isLight
              ? 'bg-neutral-100 hover:bg-neutral-200 border-neutral-200 text-neutral-800'
              : 'bg-neutral-900 hover:bg-neutral-800 border-neutral-800 text-neutral-200'
          }`}
        >
          {isLight ? (
            <>
              <Moon className="w-4 h-4 text-neutral-700" />
              <span className="hidden sm:inline">Dark</span>
            </>
          ) : (
            <>
              <Sun className="w-4 h-4 text-amber-400" />
              <span className="hidden sm:inline">Light</span>
            </>
          )}
        </button>

      </div>
    </header>
  );
};
