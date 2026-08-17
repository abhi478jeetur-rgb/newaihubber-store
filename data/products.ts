import { Product, CategoryOption } from '@/types/product';

export const STORE_CATEGORIES: CategoryOption[] = [
  { slug: 'all', label: 'All' },
  { slug: 'ai-website-prompts', label: 'AI Website Prompts' },
  { slug: 'ai-automation', label: 'AI / Automation' },
  { slug: 'pdfs', label: 'PDFs' },
  { slug: 'ebooks', label: 'Ebooks' },
  { slug: 'digital-products', label: 'Digital Products' },
  { slug: 'templates', label: 'Templates' },
  { slug: 'guides', label: 'Guides' },
];

export const products: Product[] = [
  {
    id: 'prod-1',
    slug: 'ai-website-prompts-masterpack',
    title: '500+ AI Website & UI Design Prompt Vault',
    subtitle: 'Production-ready system prompts engineered for v0.dev, Bolt.new, Midjourney v6, and Claude 3.5 Sonnet to build stunning web interfaces.',
    category: 'ai-website-prompts',
    categoryLabel: 'AI Website Prompts',
    price: 24,
    compareAtPrice: 49,
    currency: 'USD',
    badge: 'Trending',
    featured: true,
    shortDescription: 'Copy-pasteable prompts designed to generate production-quality web layouts, 3D heroes, micro-interactions, and component code.',
    animatedPreview: {
      type: 'gif',
      url: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3ZtNHU4bmQwbms4NGc1dDRycm9rcXJpdHhrOWR1YWRyNWtxdDZpcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oKIPnAiaMCws8nOsE/giphy.gif',
      posterUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
      aspectRatio: 'video',
    },
    landingPage: {
      heroTagline: 'Stop struggling with generic AI outputs. Generate pixel-perfect web apps and landing pages in seconds.',
      whatItIs: 'A curated prompt architecture vault containing 500+ multi-shot system prompts, CSS variable overrides, and component blueprints. Works seamlessly with v0.dev, Bolt.new, Cursor, Midjourney, and Claude.',
      whatsIncluded: [
        '500+ Tested System Prompts for Web Components & Hero Sections',
        'v0.dev & Cursor AI React/Tailwind Code Generator Prompts',
        'Midjourney v6 3D Asset & Background Generation Parameters',
        'Notion Database + JSON Schema Export for Developer Pipelines',
        'Free Lifetime Updates when new AI models launch'
      ],
      keyBenefits: [
        {
          title: 'Instant Production Quality',
          description: 'Eliminate AI hallucinations and generic web layouts with structured multi-step reasoning prompts.',
          iconName: 'Sparkles'
        },
        {
          title: 'Works With Modern AI Stacks',
          description: 'Optimized specifically for v0.dev, Bolt.new, Cursor, Midjourney v6, and Claude 3.5 Sonnet.',
          iconName: 'Cpu'
        },
        {
          title: 'Copy-Paste Ready',
          description: 'Clean Notion database interface allowing 1-click prompt copy with exact variable placeholders.',
          iconName: 'Copy'
        }
      ],
      whoIsThisFor: [
        'Web Designers & Frontend Engineers looking to accelerate client builds.',
        'Solo Founders creating modern SaaS landing pages without hiring agencies.',
        'Indie Hackers prototyping MVPs in v0 or Bolt.new.'
      ],
      specifications: {
        'Format': 'Notion Workspace + Raw JSON + Markdown',
        'Total Prompts': '500+ Battle-Tested Prompts',
        'Compatible Models': 'v0.dev, Bolt.new, Cursor, ChatGPT, Claude, Midjourney',
        'License': 'Personal & Commercial Project License',
        'Delivery': 'Instant Digital Access Link'
      },
      faq: [
        {
          question: 'How do I access the prompt vault after purchase?',
          answer: 'You will receive an instant link to duplicate the prompt vault directly into your Notion workspace, plus direct access to download the JSON schema.'
        },
        {
          question: 'Do these prompts work on free AI tiers?',
          answer: 'Yes! They work smoothly on free ChatGPT, Claude, v0.dev, and Cursor free plans.'
        }
      ],
      buyUrl: '#checkout'
    },
    productFiles: [
      { name: 'AI Website Prompts Notion Vault (Instant Duplicate)', format: 'NOTION_LINK', size: '1.2 MB' },
      { name: 'Developer Prompt Schemas', format: 'JSON', size: '3.4 MB' }
    ],
    seo: {
      title: '500+ AI Website & UI Design Prompt Vault | NewAIHubber Store',
      description: 'Download 500+ tested prompts for v0.dev, Bolt.new, Cursor, and Midjourney to generate stunning web interfaces.'
    }
  },
  {
    id: 'prod-2',
    slug: '50-micro-saas-ideas-ebook',
    title: '50 Micro-SaaS Ideas You Can Build Without Coding',
    subtitle: 'A high-yield blueprint guide for indie hackers, builders, and creators to launch profitable recurring revenue apps in weeks.',
    category: 'ebooks',
    categoryLabel: 'Ebooks',
    price: 29,
    compareAtPrice: 59,
    currency: 'USD',
    badge: 'Bestseller',
    featured: true,
    shortDescription: 'Discover 50 vetted Micro-SaaS concepts with target market teardowns, recommended no-code tech stacks, pricing models, and distribution channels.',
    animatedPreview: {
      type: 'gif',
      url: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGI3MjBiOGNmNjA1OWE5YjcyYzg1MWYyOTc0ZjExYmFhZjJiMGNlYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26tn33aiTi1jkl6H6/giphy.gif',
      posterUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop',
      aspectRatio: 'video',
    },
    landingPage: {
      heroTagline: 'Build your first $1,000/mo side project without writing traditional code.',
      whatItIs: 'An actionable playbook analyzing 50 software opportunities for market viability, willing-to-pay signals, ease of no-code construction (Bubble, Supabase, Make), and customer acquisition roadmaps.',
      whatsIncluded: [
        'PDF Master Ebook (English Edition - 180+ pages)',
        'PDF Builder Ebook (Hinglish Edition - 190+ pages)',
        'ePub Mobile Reader Formats (English & Hinglish)',
        'Micro-SaaS Validation Matrix (Bonus PDF)',
        'No-Code Tech Stack Comparison Scorecard'
      ],
      keyBenefits: [
        {
          title: 'Dual Language Access',
          description: 'Get instant access to both the English Master Edition and Hinglish Builder Edition.',
          iconName: 'Globe'
        },
        {
          title: 'No-Code Stack Roadmap',
          description: 'Step-by-step tool recommendations (Bubble, FlutterFlow, Supabase, OpenAI API) for every idea.',
          iconName: 'Layers'
        },
        {
          title: 'Monetization & Unit Economics',
          description: 'Recommended pricing tiers, MRR expectations, and initial 10-customer acquisition channels.',
          iconName: 'TrendingUp'
        }
      ],
      whoIsThisFor: [
        'Aspiring non-technical founders looking for validated software concepts.',
        'Indie hackers building quick $500–$5,000/mo cashflow micro-apps.',
        'Hindi & Hinglish speaking creators who want clear technical concepts.'
      ],
      specifications: {
        'Format': 'PDF + ePub Digital Files',
        'Pages': '180+ Pages (English) / 190+ Pages (Hinglish)',
        'Languages': 'English & Hinglish Included',
        'Delivery': 'Instant Digital Download'
      },
      faq: [
        {
          question: 'Do I get access to both English and Hinglish editions?',
          answer: 'Yes! Upon purchase, you receive instant access to download both full PDF and ePub editions.'
        }
      ],
      buyUrl: '#checkout'
    },
    productFiles: [
      { name: '50 Micro-SaaS Ideas (English Edition)', format: 'PDF', size: '14.2 MB' },
      { name: '50 Micro-SaaS Ideas (Hinglish Edition)', format: 'PDF', size: '15.8 MB' },
      { name: '50 Micro-SaaS Ideas (ePub Reader)', format: 'EPUB', size: '4.5 MB' }
    ],
    seo: {
      title: '50 Micro-SaaS Ideas You Can Build Without Coding (English & Hinglish)',
      description: 'Download the actionable ebook with 50 vetted Micro-SaaS ideas, tech stacks, and monetization models.'
    }
  },
  {
    id: 'prod-3',
    slug: 'ai-automation-workflow-blueprints',
    title: 'AI & n8n Automation Workflow Blueprints',
    subtitle: '25 production-ready n8n and Make automation JSON workflows for customer support, lead enrichment, and AI agent routing.',
    category: 'ai-automation',
    categoryLabel: 'AI / Automation',
    price: 35,
    compareAtPrice: 69,
    currency: 'USD',
    badge: 'Popular',
    featured: true,
    shortDescription: '1-Click importable n8n workflows that connect Claude 3.5, OpenAI, Supabase, Slack, and Notion to automate business operations.',
    animatedPreview: {
      type: 'gif',
      url: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzc1Mm80NWhnOWJsdDR1czZodm1wbGVzNzk0Yzh1ZmdtbjFlcjA2OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l378c04F2fjeZ7v4A/giphy.gif',
      posterUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop',
      aspectRatio: 'video',
    },
    landingPage: {
      heroTagline: 'Automate your entire startup backend with production-grade n8n AI agent workflows.',
      whatItIs: 'A complete collection of pre-tested, 1-click importable JSON workflows for n8n and Make. Connect LLM APIs to databases, webhooks, and communication tools.',
      whatsIncluded: [
        '25 n8n Workflow JSON Blueprint Templates',
        'AI Customer Support Ticket Auto-Responder Blueprint',
        'Lead Scoring & Enrichment Automation (Apollo + Claude)',
        'Content Repurposing Pipeline (Video to Notion & X)',
        'Video Setup Guide & Node Environment Setup Docs'
      ],
      keyBenefits: [
        {
          title: '1-Click JSON Import',
          description: 'Import workflows directly into your n8n cloud or self-hosted instance in 5 seconds.',
          iconName: 'Zap'
        },
        {
          title: 'Zero Webhook Hassles',
          description: 'Includes pre-configured payload mappings and error fallback handles.',
          iconName: 'ShieldCheck'
        }
      ],
      whoIsThisFor: [
        'Automation Consultants & Agencies',
        'Solo Founders streamlining operations',
        'No-code developers building AI pipelines'
      ],
      specifications: {
        'Format': 'n8n & Make JSON Exports',
        'Total Workflows': '25 Complete Systems',
        'Compatibility': 'n8n Self-Hosted, n8n Cloud, Make.com',
        'License': 'Unlimited Business License'
      },
      buyUrl: '#checkout'
    },
    productFiles: [
      { name: 'n8n Master Workflow Bundle', format: 'ZIP', size: '12.4 MB' },
      { name: 'Setup Documentation & Guide', format: 'PDF', size: '2.1 MB' }
    ],
    seo: {
      title: 'AI & n8n Automation Workflow Blueprints | NewAIHubber Store',
      description: 'Download 25 1-click importable n8n workflows for AI customer support, lead enrichment, and agent pipelines.'
    }
  },
  {
    id: 'prod-4',
    slug: 'indie-founder-notion-os',
    title: 'Ultimate Notion SaaS Startup Operating System',
    subtitle: 'The complete clean workspace to manage product roadmaps, feature backlogs, user feedback, and financial metrics in Notion.',
    category: 'templates',
    categoryLabel: 'Templates',
    price: 32,
    compareAtPrice: 65,
    currency: 'USD',
    badge: 'Essential',
    featured: true,
    shortDescription: 'All-in-one Notion workspace built for solo founders. Consolidates product backlog, customer research, launch trackers, and MRR metrics.',
    animatedPreview: {
      type: 'gif',
      url: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTJmNHR2eGozNGRycG5yOWlsbzV5bnpybWRqYnpsOWx3cXdtMWlyOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT9IgzoKnwFNmISR8I/giphy.gif',
      posterUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
      aspectRatio: 'video',
    },
    landingPage: {
      heroTagline: 'Organize your entire software product business inside one clean Notion workspace.',
      whatItIs: 'A Notion operating system built for software founders. Features RICE score feature prioritization, bug tracking, marketing sprint boards, and revenue logging.',
      whatsIncluded: [
        '1-Click Instant Notion Duplicate Link',
        'RICE Feature Backlog & Bug Priority Matrix',
        'Product Launch Checklist & Distribution Hub',
        'Customer Interview & Feedback Database',
        'MRR & Cashflow Tracking Dashboard'
      ],
      keyBenefits: [
        {
          title: 'Zero Notion Clutter',
          description: 'Clean dark mode visual hierarchy designed specifically for focus and high product velocity.',
          iconName: 'Layout'
        }
      ],
      whoIsThisFor: ['Solo Founders', 'Indie Hackers', 'Product Managers'],
      specifications: {
        'Format': 'Notion Workspace Duplicate Link',
        'Compatibility': 'Free & Paid Notion Accounts',
        'Updates': 'Free System Revisions'
      },
      buyUrl: '#checkout'
    },
    productFiles: [
      { name: 'Notion SaaS OS Instant Link', format: 'NOTION_LINK', size: '1.0 MB' }
    ],
    seo: {
      title: 'Ultimate Notion SaaS Startup Operating System Template',
      description: 'Manage your entire software product startup in Notion. Includes backlog, launch checklist, and metrics dashboard.'
    }
  },
  {
    id: 'prod-5',
    slug: 'micro-saas-validation-checklist-pdf',
    title: 'Micro-SaaS Product Launch & Legal Checklist',
    subtitle: '75-point execution checklist covering market validation, privacy policy compliance, payment gateway setup, and launch channels.',
    category: 'pdfs',
    categoryLabel: 'PDFs',
    price: 15,
    compareAtPrice: 29,
    currency: 'USD',
    featured: false,
    shortDescription: 'Interactive PDF and Notion checklist designed to prevent post-launch technical, legal, and payment webhooks issues.',
    animatedPreview: {
      type: 'gif',
      url: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2ptMHM1bmFwdmtwMjRzZmp3aWc0dmp1MHFwbTgwOHgxbms5c2M1ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l2JdUvV07J04J166c/giphy.gif',
      posterUrl: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=800&auto=format&fit=crop',
      aspectRatio: 'video',
    },
    landingPage: {
      heroTagline: 'Never miss a critical technical or legal step before launching your web application.',
      whatItIs: 'A fillable interactive PDF & Notion checklist verifying DNS, SSL, terms of service, payment webhook security, and SEO meta tags.',
      whatsIncluded: [
        '75-Point Interactive PDF Launch Checklist',
        'Legal & Privacy Compliance Blueprint',
        'Stripe & Razorpay Production Webhook Test Protocol'
      ],
      keyBenefits: [
        {
          title: '75 Point System',
          description: 'Covers technical, security, legal, marketing, and monetization steps.',
          iconName: 'CheckCircle2'
        }
      ],
      whoIsThisFor: ['First-time indie builders preparing for launch.'],
      specifications: {
        'Format': 'Interactive PDF + Notion Template',
        'Items': '75 Detailed Checklist Items'
      },
      buyUrl: '#checkout'
    },
    productFiles: [
      { name: 'Launch & Legal Checklist', format: 'PDF', size: '3.2 MB' }
    ],
    seo: {
      title: 'Micro-SaaS Product Launch & Legal Checklist (PDF)',
      description: 'Ensure a smooth digital product launch with a 75-point validation, security, and marketing checklist.'
    }
  },
  {
    id: 'prod-6',
    slug: 'ai-saas-landing-page-ui-kit',
    title: 'AI SaaS Landing Page UI Kit & Code Components',
    subtitle: 'Modern dark-mode Tailwind CSS and React component library for building modern tech creator stores and SaaS websites.',
    category: 'digital-products',
    categoryLabel: 'Digital Products',
    price: 39,
    compareAtPrice: 79,
    currency: 'USD',
    badge: 'New',
    featured: true,
    shortDescription: 'Clean dark UI components including hero cards, visual galleries, pricing tables, and glowing feature grids in Next.js & Tailwind.',
    animatedPreview: {
      type: 'gif',
      url: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHcydWoxNXlsdWhkNDdxcWZldm9sOHpucGF0ZmhpaWFybmlqNm02NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26tn33aiTi1jkl6H6/giphy.gif',
      posterUrl: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=800&auto=format&fit=crop',
      aspectRatio: 'video',
    },
    landingPage: {
      heroTagline: 'Build premium dark-mode web applications 10x faster.',
      whatItIs: 'A production component kit written in clean React, TypeScript, and Tailwind CSS. Built with zero bloat and maximum visual elegance.',
      whatsIncluded: [
        '40+ React / Tailwind CSS Components',
        'Framer Motion Micro-Interaction Presets',
        'Figma Design Tokens & Source File'
      ],
      keyBenefits: [
        {
          title: 'Pure Dark Aesthetics',
          description: 'Engineered with deep blacks (#0a0a0a) and refined borders.',
          iconName: 'Moon'
        }
      ],
      whoIsThisFor: ['React Developers', 'UI Engineers', 'Founders'],
      specifications: {
        'Stack': 'Next.js 14, Tailwind CSS, TypeScript, Framer Motion',
        'Components': '40+ Production UI Components'
      },
      buyUrl: '#checkout'
    },
    productFiles: [
      { name: 'UI Kit Codebase (Next.js/Tailwind)', format: 'ZIP', size: '8.9 MB' }
    ],
    seo: {
      title: 'AI SaaS Landing Page UI Kit & Code Components',
      description: 'Download modern dark-mode Tailwind CSS and React components for building SaaS websites.'
    }
  }
];
