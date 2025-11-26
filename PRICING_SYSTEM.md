# Pricing System - Alta Nettsider

## Overview

Centralized pricing configuration for consistent pricing across all pages.

## Files Structure

```
src/utils/pricing.ts          # Single source of truth for all pricing data
components/PriceCard.tsx       # Reusable price card component
components/Pricing.tsx         # Pricing section (uses compact variant)
app/priser/page.tsx           # Dedicated pricing page (uses full variant)
app/nettsider-for-lokale-bedrifter/page.tsx  # Landing page (uses constants)
```

## Current Pricing Plans

### 1. Startpakke - 4.990 kr

**Perfect for:** Small businesses needing basic web presence
**Delivery:** 1-2 weeks
**Features:**

- Modern, mobile-friendly design
- Up to 3 pages (Home, About, Contact)
- Contact form with email notifications
- Google Maps integration
- Basic SEO optimization
- SSL certificate included
- 1 year hosting included

### 2. Bedriftspakke - 8.990 kr ⭐ MOST POPULAR

**Perfect for:** Businesses wanting more visibility and functionality
**Delivery:** 2-3 weeks
**Features:**

- Everything in Startpakke +
- Up to 8 pages with custom content
- Google My Business setup and optimization
- Google Analytics installation and setup
- Advanced SEO with keyword research
- Social media integration
- Image gallery/portfolio section
- Newsletter/blog functionality

### 3. Nettbutikk - 14.990 kr

**Perfect for:** Businesses selling products online
**Delivery:** 3-4 weeks
**Features:**

- Everything in Bedriftspakke +
- Complete e-commerce store (Shopify or Sanity)
- Product catalog and management
- Payment solutions (Stripe, Vipps, Klarna)
- Order management and shopping cart
- Inventory integration
- E-commerce Analytics and reporting
- Training in administration

## Additional Services

1. **Logo and visual identity** - Quote on request
2. **Professional photography** - Quote on request
3. **Text and content production** - Quote on request
4. **Ongoing maintenance** - From 590 kr/month
5. **Marketing and SEO** - Quote on request
6. **Custom solutions** - Quote on request

## How to Update Prices

### Change a price:

Edit `src/utils/pricing.ts`:

```typescript
{
  id: "startpakke",
  price: "5.990", // <-- Change here
  // ...
}
```

### Add/remove features:

```typescript
features: [
  { text: "New feature" },
  { text: "Important feature", highlight: true }, // Highlighted in blue
];
```

### Add a new pricing plan:

```typescript
import { Package } from "lucide-react"; // Choose an icon

{
  id: "premium-package",
  name: "Premium Package",
  price: "19.990",
  description: "For enterprise clients",
  icon: Package,
  deliveryTime: "4-6 weeks",
  features: [
    { text: "Feature 1" },
    { text: "Feature 2", highlight: true },
  ],
  popular: false,
  buttonText: "Choose Premium",
  ctaLink: "/#contact"
}
```

## Components Usage

### PriceCard Component

Two variants available:

**Full variant (for pricing page):**

```tsx
import PriceCard from "@/components/PriceCard";
import { PRICING_PLANS } from "@/src/utils/pricing";

<PriceCard plan={PRICING_PLANS[0]} variant="default" />;
```

**Compact variant (for homepage):**

```tsx
<PriceCard plan={PRICING_PLANS[1]} variant="compact" />
```

### Using Price Constants

```tsx
import {
  STARTING_PRICE,
  STARTING_PRICE_FORMATTED,
  getPlanById,
} from "@/src/utils/pricing";

// Get formatted starting price
<p>From {STARTING_PRICE_FORMATTED}</p>; // "4.990 kr"

// Get specific plan
const bedriftsPlan = getPlanById("bedriftspakke");
<p>
  {bedriftsPlan?.name}: {bedriftsPlan?.price} kr
</p>;
```

## SEO Benefits

✅ Single source of truth - no conflicting prices across pages
✅ Easy to update - change once, updates everywhere
✅ Type-safe with TypeScript
✅ Consistent pricing messaging for Google indexing
✅ Reusable components reduce code duplication

## Next Steps for Pricing Strategy

1. **Test Current Prices:** Monitor conversions with current 4.990/8.990/14.990 pricing
2. **Consider Adding:**
   - Monthly payment plans
   - Package bundles/discounts
   - Seasonal promotions
3. **A/B Testing:** Test different pricing on landing page vs dedicated pricing page
4. **Value Ladder:** Guide customers from Startpakke → Bedriftspakke → Nettbutikk

## Notes

- All prices are in Norwegian Kroner (kr)
- Prices shown are one-time setup costs (not monthly)
- Hosting for year 1 is included, renewal pricing TBD
- Additional services priced on request allow flexibility
- Popular badge on Bedriftspakke drives conversions to mid-tier package
