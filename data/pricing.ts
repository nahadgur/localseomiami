// data/pricing.ts
// Typical Miami local SEO pricing as of 2026.

export interface PricingTier {
  service: string;
  slug: string;
  monthlyRange: string;
  oneTimeRange: string;
  notes: string;
}

export const pricingTiers: PricingTier[] = [
  {
    service: 'Small business local SEO retainer',
    slug: 'small-business-retainer',
    monthlyRange: '$750 – $1,500/mo',
    oneTimeRange: '—',
    notes: 'Single location, single sector, foundational ranking factor work. GBP optimization, citation maintenance, monthly review acquisition, basic on-page.',
  },
  {
    service: 'Mid-market local SEO retainer',
    slug: 'mid-market-retainer',
    monthlyRange: '$1,500 – $3,000/mo',
    oneTimeRange: '—',
    notes: 'Single competitive Miami vertical (legal, medical, real estate) or 2–3 locations. Full ranking factor stack including link building and content programs.',
  },
  {
    service: 'Multi-location / competitive vertical',
    slug: 'multi-location-retainer',
    monthlyRange: '$3,000 – $6,000+/mo',
    oneTimeRange: '—',
    notes: '4+ locations, or single location in highly competitive Miami vertical (Brickell legal, plastic surgery, real estate brokerage). Full strategic execution with sustained competitive analysis.',
  },
  {
    service: 'Local SEO audit (one-time)',
    slug: 'audit-one-time',
    monthlyRange: '—',
    oneTimeRange: '$500 – $1,500',
    notes: 'Full audit covering GBP, citations, on-page, links, and competitive positioning. Comes with a prioritized roadmap. Often the right starting point if you\'re unsure what level of investment is needed.',
  },
  {
    service: 'Citation cleanup project (one-time)',
    slug: 'citation-cleanup',
    monthlyRange: '—',
    oneTimeRange: '$500 – $2,000',
    notes: 'Audit existing citations, clean up duplicates and inconsistencies, build out 30–60 high-quality citations. Standalone project useful before starting any ongoing retainer.',
  },
  {
    service: 'GBP optimization project (one-time)',
    slug: 'gbp-project',
    monthlyRange: '—',
    oneTimeRange: '$500 – $1,500',
    notes: '2–4 week structural optimization of GBP — categories, services, photos, attributes, products module. Does not include ongoing posts and Q&A management (that goes into a retainer).',
  },
];

export const headlineFee = {
  smallBusinessFrom: '$750/month',
  auditFrom: '$500 one-time',
  freeMatching: 'Matching service free to all businesses',
};
