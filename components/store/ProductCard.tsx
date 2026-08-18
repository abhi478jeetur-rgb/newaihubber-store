'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Product } from '@/types/product';
import { formatPrice } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  theme?: 'light' | 'dark';
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, theme = 'light' }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isLight = theme === 'light';

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative flex flex-col rounded-2xl border overflow-hidden transition-all duration-300 ${
        isLight
          ? 'bg-white border-neutral-200/80 shadow-sm hover:shadow-xl hover:border-neutral-300'
          : 'bg-[#121212] border-neutral-800/80 hover:border-neutral-600 hover:shadow-2xl'
      }`}
    >
      
      {/* Animated Visual Thumbnail Container */}
      <Link href={`/product/${product.slug}`} className="relative aspect-[16/10] w-full overflow-hidden bg-[#0a0a0a] block">
        
        {/* Poster Image */}
        <Image
          src={product.animatedPreview.posterUrl || product.animatedPreview.url}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`object-cover transition-transform duration-700 ease-out ${
            isHovered ? 'scale-105 opacity-95' : 'scale-100 opacity-90'
          }`}
        />

        {/* Animated GIF overlay on Hover */}
        {isHovered && product.animatedPreview.url && (
          <img
            src={product.animatedPreview.url}
            alt={`${product.title} preview`}
            className="absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-300"
          />
        )}

        {/* Subtle Dark Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none z-20" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-30 pointer-events-none">
          <span className="text-[11px] font-semibold text-neutral-200 bg-black/60 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded-md">
            {product.categoryLabel}
          </span>
          {product.badge && (
            <span className="text-[10px] font-bold uppercase tracking-wider text-black bg-white px-2 py-0.5 rounded shadow-md">
              {product.badge}
            </span>
          )}
        </div>

        {/* Play / Motion Preview Indicator */}
        <div className="absolute bottom-3 right-3 z-30 pointer-events-none">
          <div className="h-8 w-8 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>

      </Link>

      {/* Minimal Card Details */}
      <div className="p-4 flex flex-col justify-between flex-1 space-y-3">
        <div className="space-y-1">
          <Link href={`/product/${product.slug}`} className="block">
            <h3
              className={`font-semibold text-sm transition-colors line-clamp-1 ${
                isLight ? 'text-neutral-900 group-hover:text-black' : 'text-neutral-100 group-hover:text-white'
              }`}
            >
              {product.title}
            </h3>
          </Link>
          <p
            className={`text-xs line-clamp-2 leading-relaxed ${
              isLight ? 'text-neutral-600' : 'text-neutral-400'
            }`}
          >
            {product.shortDescription}
          </p>
        </div>

        <div
          className={`pt-2 border-t flex items-center justify-between ${
            isLight ? 'border-neutral-100' : 'border-neutral-800/60'
          }`}
        >
          <span
            className={`text-xs font-bold font-mono ${
              isLight ? 'text-neutral-900' : 'text-white'
            }`}
          >
            {formatPrice(product.price, product.currency)}
          </span>
          <Link
            href={`/product/${product.slug}`}
            className={`text-xs font-semibold flex items-center gap-1 group-hover:underline ${
              isLight ? 'text-neutral-700 hover:text-black' : 'text-neutral-300 hover:text-white'
            }`}
          >
            <span>View Landing Page</span>
          </Link>
        </div>
      </div>

    </motion.div>
  );
};
