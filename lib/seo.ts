import { Product } from '@/types/product';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://store.newaihubber.com';

export function generateProductJsonLd(product: Product) {
  const landing = product.landingPage;

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    image: [product.animatedPreview.posterUrl || product.animatedPreview.url],
    description: product.shortDescription,
    sku: product.id,
    mpn: product.slug,
    brand: {
      '@type': 'Brand',
      name: 'NewAIHubber Store',
      url: SITE_URL,
    },
    category: product.categoryLabel,
    offers: {
      '@type': 'Offer',
      url: `${SITE_URL}/product/${product.slug}`,
      priceCurrency: product.currency,
      price: product.price,
      itemCondition: 'https://schema.org/NewCondition',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'NewAIHubber',
        url: 'https://www.newaihubber.com',
      },
    },
    additionalProperty: Object.entries(landing.specifications || {}).map(([key, value]) => ({
      '@type': 'PropertyValue',
      name: key,
      value: value,
    })),
  };
}

export function generateBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

export function generateOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'NewAIHubber Store',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    sameAs: [
      'https://www.newaihubber.com',
      'https://twitter.com/newaihubber',
    ],
  };
}

export function generateFAQJsonLd(faqs: { question: string; answer: string }[]) {
  if (!faqs || faqs.length === 0) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
