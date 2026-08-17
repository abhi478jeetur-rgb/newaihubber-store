# NewAIHubber Store (`store.newaihubber.com`)

> A visual-first, curated digital products marketplace for **NewAIHubber**. Inspired by MotionSites.ai homepage gallery discovery and SaaSIdeas.in product landing pages.

---

## 🌟 Architecture & Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS (Pure solid dark theme `#0a0a0a`)
- **Animation**: Framer Motion (`framer-motion`)
- **UI Components**: Shadcn UI & Radix UI primitives
- **Icons**: Lucide React Icons
- **Data Layer**: Centralized product registry (`data/products.ts`)

---

## 🛠️ Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Production Build & Static Check
```bash
npm run build
```

---

## 📦 Product Registry

Products are managed in `data/products.ts` with explicit type safety (`types/product.ts`). Easily add or edit products without modifying UI code.

---

## 📜 License

© NewAIHubber. All rights reserved.
