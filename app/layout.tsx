import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { generateOrganizationJsonLd } from '@/lib/seo';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://store.newaihubber.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'NewAIHubber Store | Curated Digital Products & AI Resources',
    template: '%s | NewAIHubber Store',
  },
  description:
    'A curated marketplace for AI website prompts, eBooks, Notion systems, PDFs, and automation blueprints.',
  keywords: [
    'AI Website Prompts',
    'Micro-SaaS Ebook',
    'Hinglish Ebook',
    'AI Automation Workflows',
    'Notion OS',
    'NewAIHubber Store',
  ],
  authors: [{ name: 'NewAIHubber' }],
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'NewAIHubber Store',
    title: 'NewAIHubber Store | Curated Digital Products & AI Resources',
    description: 'Curated AI prompts, eBooks, templates, and digital resources.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'NewAIHubber Store Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NewAIHubber Store | Curated Digital Products & AI Resources',
    description: 'Curated AI prompts, eBooks, templates, and digital resources.',
    images: ['/logo.png'],
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = generateOrganizationJsonLd();

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${inter.variable} font-sans min-h-screen bg-[#0a0a0a] text-neutral-100 antialiased`}>
        {children}
        
        {/* Minimal Footer */}
        <footer className="border-t border-neutral-800/80 bg-[#0a0a0a] py-8 text-center text-xs text-neutral-500">
          <div className="container max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} NewAIHubber Store. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="https://www.newaihubber.com" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-300">
                Main Website
              </a>
              <a href="mailto:support@newaihubber.com" className="hover:text-neutral-300">
                Support
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
