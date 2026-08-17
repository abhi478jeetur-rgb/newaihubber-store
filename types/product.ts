export type CategorySlug =
  | 'all'
  | 'ai-website-prompts'
  | 'ai-automation'
  | 'pdfs'
  | 'ebooks'
  | 'digital-products'
  | 'templates'
  | 'guides';

export interface CategoryOption {
  slug: CategorySlug;
  label: string;
}

export interface ProductFile {
  name: string;
  format: string;
  size: string;
}

export interface ProductBenefit {
  title: string;
  description: string;
  iconName?: string;
}

export interface ProductFAQ {
  question: string;
  answer: string;
}

export interface ProductAnimatedPreview {
  type: 'gif' | 'video' | 'interactive';
  url: string;
  posterUrl?: string;
  aspectRatio?: 'video' | 'square' | 'wide' | 'tall';
}

export interface ProductLandingPage {
  heroTagline: string;
  whatItIs: string;
  whatsIncluded: string[];
  keyBenefits: ProductBenefit[];
  whoIsThisFor: string[];
  specifications: Record<string, string>;
  faq?: ProductFAQ[];
  buyUrl?: string;
}

export interface ProductSEO {
  title: string;
  description: string;
  keywords?: string[];
}

export interface Product {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: CategorySlug;
  categoryLabel: string;
  price: number;
  currency: string;
  compareAtPrice?: number;
  badge?: string;
  shortDescription: string;
  animatedPreview: ProductAnimatedPreview;
  landingPage: ProductLandingPage;
  productFiles: ProductFile[];
  seo: ProductSEO;
  featured?: boolean;
}
