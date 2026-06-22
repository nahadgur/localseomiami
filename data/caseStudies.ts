// data/caseStudies.ts
// Portfolio case studies for the person who runs the matching service. Every
// figure is taken straight from each property's Google Search Console export
// (last 3 months unless the project launched more recently) and is not
// inflated. We keep the specifics general, no exact long-tail target keywords
// and no per-query tables, so the competitive playbook is not handed to
// anyone. Results only, with no invented client names, reviews, or testimonials.
//
// LIVE projects (status: 'live') are still building. They lead with real
// trajectory (impression growth, first page-one rankings) rather than headline
// volume, and never present fabricated "achieved" totals. Swap in fuller GSC
// figures and flip status off once the data matures.

export type CaseMetric = { value: string; label: string };

export type CaseStudy = {
  slug: string;
  name: string;
  wordmark: string; // short brand for the logo strip
  vertical: string;
  location: string;
  region: 'US';
  period: string;
  summary: string; // one-line, used on cards + meta
  headline: CaseMetric; // hero stat
  metrics: CaseMetric[]; // stat grid
  highlights: string[];
  challenge: string;
  approach: string[];
  result: string;
  // Active project: figures are early trajectory, not a finished result.
  status?: 'live';
  // Live site the case study links to.
  url?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'building-health-x',
    name: 'Building Health X',
    wordmark: 'Building Health X',
    vertical: 'NYC renter and building-health content',
    location: 'New York City',
    region: 'US',
    period: 'March to June 2026',
    summary:
      'An NYC renter and building-health information site grown to 90 page-one keywords and a footprint of over 1,000 ranking searches in 90 days.',
    headline: { value: '90', label: 'keywords on page one, last 90 days' },
    metrics: [
      { value: '90', label: 'keywords on page one' },
      { value: '22', label: 'keywords in the top three' },
      { value: '1,000+', label: 'keywords ranking on Google' },
    ],
    highlights: [
      'Page-one rankings won steadily across the quarter as the keyword footprint expanded',
      'Over 1,000 ranking queries across NYC renter and building-code searches',
      '90 keywords on page one, 22 of them in the top three',
      'Tenant-rights and building-code guides ranking on page one for high-intent New York questions',
    ],
    challenge:
      'A content site competing in a dense New York information niche against established legal publishers and city-government pages for tenant-rights and building-code searches.',
    approach: [
      'Deep, genuinely useful answer content on the questions New York renters actually search',
      'A fast static build with clean indexing, structured data, and strong Core Web Vitals',
      'Topic clusters that build authority around tenant rights, building code, and apartment living',
      'Internal linking that consolidates relevance on the pages with real ranking potential',
    ],
    result:
      'In 90 days the site built a footprint of more than 1,000 ranking searches and put 90 keywords on page one, 22 of them in the top three, across the New York renter and building-code searches that matter.',
    url: 'https://www.buildinghealthx.com',
  },
  {
    slug: 'private-investigator-manhattan',
    name: 'Private Investigator Manhattan',
    wordmark: 'PI Manhattan',
    vertical: 'Private investigation',
    location: 'Manhattan, New York',
    region: 'US',
    period: 'March to June 2026',
    status: 'live',
    summary:
      'A Manhattan private-investigation site growing search visibility 138% in 90 days, with its cost and licensing guides already on page one.',
    headline: { value: '+138%', label: 'growth in search visibility, 90 days' },
    metrics: [
      { value: '+138%', label: 'growth in search visibility' },
      { value: '21', label: 'keywords on page one' },
      { value: '6', label: 'keywords in the top three' },
    ],
    highlights: [
      'Search visibility up 138% across the quarter as the keyword footprint expanded',
      'The Manhattan PI cost guide and the New York PI licensing guide are both on page one',
      '21 keywords on page one and 6 in the top three',
      'Visibility building steadily across competitive corporate-investigation searches',
    ],
    challenge:
      'A newer domain entering a competitive, trust-sensitive Manhattan niche where established agencies and national directories hold the high-intent local searches.',
    approach: [
      'A fast technical foundation with structured data and strong Core Web Vitals',
      'Service pages for the core investigation types plus informational cost and licensing guides',
      'Content targeting the full intent cluster, not just the head term',
      'Internal linking so authority flows from the homepage to the priority pages',
    ],
    result:
      'In 90 days the site grew its search visibility by 138% and put its cost and licensing guides on page one, an early but clear upward trajectory in a competitive Manhattan niche.',
    url: 'https://www.privateinvestigatormanhattan.com',
  },
  {
    slug: 'eugene-oil-tank-removal',
    name: 'Eugene Oil Tank Removal',
    wordmark: 'Eugene Oil Tank',
    vertical: 'Oil tank removal and decommissioning',
    location: 'Eugene, Oregon',
    region: 'US',
    period: 'Since May 2026 launch',
    status: 'live',
    summary:
      'A newly launched Eugene oil-tank removal site growing search visibility 335%, with its Eugene location page already ranking around #5.',
    headline: { value: '+335%', label: 'growth in search visibility since launch' },
    metrics: [
      { value: '+335%', label: 'growth in search visibility' },
      { value: '#5', label: 'for the core Eugene location search' },
      { value: '6', label: 'keywords on page one' },
    ],
    highlights: [
      'Search visibility up 335% in the weeks since launch',
      'The Eugene location page is already ranking around #5',
      'First page-one rankings landing for local oil-tank decommissioning searches',
    ],
    challenge:
      'A brand-new domain in a small, specialised Lane County niche, starting from zero against established environmental contractors.',
    approach: [
      'A fast static build with local schema and strong Core Web Vitals from day one',
      'A focused Eugene location page plus a practical oil-tank decommissioning guide',
      'Content matched to how Lane County homeowners actually search for tank work',
      'Tight internal linking to concentrate relevance on the location and service pages',
    ],
    result:
      'In the weeks since launch the site has grown its search visibility by 335% and landed its Eugene location page around #5 for the core local search, with the first page-one rankings now coming through.',
    url: 'https://www.eugeneoiltankremoval.com',
  },
];

export const caseStudyBySlug = (slug: string): CaseStudy | undefined =>
  caseStudies.find((c) => c.slug === slug);

// Aggregate totals across all case studies (used on the index + about page).
// Rounded down from the real Search Console figures, never up. We publish
// ranking proof only, never traffic volumes, so the niche economics are not
// handed to competitors.
export const caseTotals = {
  rankingKeywords: '1,000+',
  page1Keywords: '115+',
  top3Keywords: '30+',
  projects: caseStudies.length,
};
