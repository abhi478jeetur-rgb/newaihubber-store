import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getProductBySlug, getAllProducts } from '@/lib/products';
import { ProductLanding } from '@/components/product/ProductLanding';
import { SaasIdeasSalesPage } from '@/components/product/SaasIdeasSalesPage';
import {
  generateProductJsonLd,
  generateBreadcrumbJsonLd,
  generateFAQJsonLd,
} from '@/lib/seo';

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

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://store.newaihubber.com';

  return {
    title: product.seo.title || `${product.title} | NewAIHubber Store`,
    description: product.seo.description || product.shortDescription,
    keywords: product.seo.keywords,
    alternates: {
      canonical: `${siteUrl}/product/${product.slug}`,
    },
    openGraph: {
      title: product.seo.title || product.title,
      description: product.seo.description || product.shortDescription,
      url: `${siteUrl}/product/${product.slug}`,
      images: [{ url: product.animatedPreview.posterUrl || product.animatedPreview.url }],
    },
    twitter: {
      card: 'summary_large_image',
      title: product.seo.title || product.title,
      description: product.seo.description || product.shortDescription,
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const product = await getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const productJsonLd = generateProductJsonLd(product);
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: 'Home', url: '/' },
    { name: 'Products', url: '/' },
    { name: product.title, url: `/product/${product.slug}` },
  ]);
  const faqJsonLd = product.landingPage.faq ? generateFAQJsonLd(product.landingPage.faq) : null;

  const is50SaasEbook = product.slug === '50-micro-saas-ideas-ebook' || product.slug === '50-micro-saas-ideas';

  return (
    <>
      {/* Schema.org JSON-LD for Traditional SEO & AI LLM Search Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      {is50SaasEbook ? (
        <SaasIdeasSalesPage product={product} />
      ) : (
        <ProductLanding product={product} />
      )}
    </>
  );
}
