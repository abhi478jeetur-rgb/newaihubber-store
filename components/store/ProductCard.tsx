'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Product } from '@/types/product';
import { formatPrice } from '@/lib/utils';
import { ExternalLink, Play, ArrowUpRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col rounded-2xl border border-neutral-800/80 bg-[#121212] overflow-hidden transition-all duration-300 hover:border-neutral-600 hover:shadow-2xl"
    >
      
      {/* Animated Visual Thumbnail Container */}
      <Link href={`/product/${product.slug}`} className="relative aspect-[16/10] w-full overflow-hidden bg-[#000000] block">
        
        {/* Poster Image */}
        <Image
          src={product.animatedPreview.posterUrl || product.animatedPreview.url}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`object-cover transition-transform duration-700 ease-out ${
            isHovered ? 'scale-105 opacity-90' : 'scale-100 opacity-80'
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
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-black/30 pointer-events-none z-20" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-30 pointer-events-none">
          <span className="text-[11px] font-semibold text-neutral-300 bg-[#0a0a0a]/80 backdrop-blur-md border border-neutral-800 px-2.5 py-1 rounded-md">
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
            <h3 className="font-semibold text-sm text-neutral-100 group-hover:text-white transition-colors line-clamp-1">
              {product.title}
            </h3>
          </Link>
          <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        <div className="pt-2 border-t border-neutral-800/60 flex items-center justify-between">
          <span className="text-xs font-bold text-white font-mono">
            {formatPrice(product.price, product.currency)}
          </span>
          <Link
            href={`/product/${product.slug}`}
            className="text-xs font-semibold text-neutral-300 hover:text-white flex items-center gap-1 group-hover:underline"
          >
            <span>View Landing Page</span>
          </Link>
        </div>
      </div>

    </motion.div>
  );
};
