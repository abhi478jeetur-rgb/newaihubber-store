import { products } from '@/data/products';
import { Product, CategorySlug } from '@/types/product';

export async function getAllProducts(): Promise<Product[]> {
  return products;
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const product = products.find((p) => p.slug === slug);
  return product || null;
}

export async function getFilteredProducts(
  categorySlug: CategorySlug = 'all',
  searchQuery: string = ''
): Promise<Product[]> {
  let list = products;

  if (categorySlug && categorySlug !== 'all') {
    list = list.filter((p) => p.category === categorySlug);
  }

  if (searchQuery && searchQuery.trim() !== '') {
    const q = searchQuery.toLowerCase().trim();
    list = list.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.categoryLabel.toLowerCase().includes(q) ||
        (p.seo.keywords && p.seo.keywords.some((k) => k.toLowerCase().includes(q)))
    );
  }

  return list;
}
