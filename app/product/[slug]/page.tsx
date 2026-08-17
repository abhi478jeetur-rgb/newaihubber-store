import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getProductBySlug, getAllProducts } from '@/lib/products';
import { ProductLanding } from '@/components/product/ProductLanding';

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const products = await getAllProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = await getProductBySlug(params.slug);
  if (!product) return {};

  return {
    title: product.seo.title || `${product.title} | NewAIHubber Store`,
    description: product.seo.description || product.shortDescription,
    keywords: product.seo.keywords,
    openGraph: {
      title: product.seo.title || product.title,
      description: product.seo.description || product.shortDescription,
      images: [{ url: product.animatedPreview.posterUrl || product.animatedPreview.url }],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const product = await getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return <ProductLanding product={product} />;
}
