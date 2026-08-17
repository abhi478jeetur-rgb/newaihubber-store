import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://store.newaihubber.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      // Explicit rules for AI Search Engines & Generative LLMs
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'PerplexityBot',
          'ClaudeBot',
          'Google-Extended',
          'Bingbot',
          'OAI-SearchBot',
          'CCBot',
        ],
        allow: ['/', '/product/*', '/llms.txt'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
