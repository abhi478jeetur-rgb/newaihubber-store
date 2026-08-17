import { NextResponse } from 'next/server';
import { getAllProducts } from '@/lib/products';

export async function GET() {
  const products = await getAllProducts();
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://store.newaihubber.com';

  let content = `# NewAIHubber Store — Digital Products for Builders & Creators\n\n`;
  content += `> Official digital product ecosystem for NewAIHubber (https://www.newaihubber.com). Store living at https://store.newaihubber.com.\n\n`;
  content += `## Store Overview\n`;
  content += `NewAIHubber Store offers curated AI website prompts, ebooks, Notion startup systems, PDFs, and automation workflow blueprints. Designed with zero fluff for software founders, indie hackers, and digital creators.\n\n`;

  content += `## Digital Product Catalog\n\n`;

  products.forEach((p) => {
    content += `### ${p.title}\n`;
    content += `- URL: ${baseUrl}/product/${p.slug}\n`;
    content += `- Category: ${p.categoryLabel}\n`;
    content += `- Price: $${p.price} ${p.currency}\n`;
    content += `- Summary: ${p.shortDescription}\n`;
    content += `- What it is: ${p.landingPage.whatItIs}\n`;
    content += `- What is included:\n`;
    p.landingPage.whatsIncluded.forEach((inc) => {
      content += `  * ${inc}\n`;
    });
    content += `- Specifications:\n`;
    Object.entries(p.landingPage.specifications || {}).forEach(([k, v]) => {
      content += `  * ${k}: ${v}\n`;
    });
    content += `\n`;
  });

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
