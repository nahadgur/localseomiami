// data/site.ts
export const siteConfig = {
  name: 'Local SEO Miami',
  tagline: 'Get matched with vetted Miami local SEO specialists',
  url: 'https://www.localseomiami.com',
  description:
    'Free matching service connecting Miami small and medium businesses with vetted local SEO specialists. Google Business Profile optimization, citation building, review management, and Map Pack ranking strategies for Brickell, Wynwood, South Beach, and the wider Miami metro.',
  // Geographic service area (used in schema). Centralized so org/service
  // schemas don't depend on string-parsing the site name.
  serviceArea: 'Miami, Florida',
  // Google Analytics tracking ID, placeholder until set up. ConsentBanner
  // only loads GA when this is non-empty AND consent has been granted.
  gaId: '',
};

// Real client testimonials only. Empty until verifiable reviews are
// collected; fabricated testimonials are an E-E-A-T risk.
export const TESTIMONIALS: {
  id: string; name: string; company: string; service: string; rating: number; text: string;
}[] = [];

export const TRUST_BADGES = [
  {
    icon: 'CheckCircle',
    title: 'Vetted specialists only',
    description:
      'Every local SEO specialist in our network is vetted for technical competency, current Google Business Profile experience, and a clean track record before joining. We re-verify annually.',
  },
  {
    icon: 'TrendingUp',
    title: 'Map Pack focus',
    description:
      'We match you with specialists who know what actually moves Map Pack rankings in 2026, proximity, prominence, relevance, not the citation-spam playbook from 2018.',
  },
  {
    icon: 'MapPin',
    title: 'Miami-aware',
    description:
      'Our network specializes in the Miami market, neighborhood-level targeting, bilingual (English / Spanish) optimization where relevant, and the local directory landscape.',
  },
  {
    icon: 'DollarSign',
    title: 'No markup, no commission',
    description:
      'You pay only the specialist for the work they do, at their quoted rate. We are paid by the network when an introduction leads to a contract, never by you.',
  },
];

export const FAQS_HOME = [
  {
    question: 'How quickly can I be matched with a Miami local SEO specialist?',
    answer:
      'Most matches are completed within 24 business hours. We read your enquiry, identify the right specialist for your business size, sector, and current SEO maturity, and make the introduction. The specialist contacts you to schedule a discovery call, usually within a working day of the introduction.',
  },
  {
    question: 'What does Miami local SEO actually cost?',
    answer:
      'Monthly retainers in Miami typically run $750–$2,500/month for small business local SEO, and $2,500–$6,000/month for multi-location or competitive sectors (real estate, legal, dental). One-off audits are $500–$1,500. The matched specialist provides a written scope and quote before any contract, no surprises.',
  },
  {
    question: 'Is the matching service really free?',
    answer:
      'Yes, completely free for businesses. Specialists in our network pay us a small referral fee when an introduction leads to a contract. We never take a markup on the specialist\'s fee, and we never share your details outside the matched specialist.',
  },
  {
    question: 'How do you choose which specialist to match me with?',
    answer:
      'Sector experience, current Map Pack track record (we ask for live examples), monthly capacity, and pricing fit. A specialist who has ranked seven Brickell law firms in the 3-pack is a different match from one who has ranked twelve South Beach restaurants. We match by specific situation, not generic agency size.',
  },
];

export const FAQS_SERVICES = [
  {
    question: 'How long does it take to see local SEO results in Miami?',
    answer:
      'Most Miami businesses see meaningful ranking shifts within 60–90 days for Google Business Profile optimization and review acquisition. Citation building shows in 90–120 days as the directory data ages and is re-crawled. Competitive Map Pack work for high-value queries (real estate, lawyers, plastic surgeons) typically takes 6–9 months for top-3 placement.',
  },
  {
    question: 'Do I need a website to do local SEO?',
    answer:
      'A Google Business Profile alone can rank in the Map Pack without a website, but the upper bound is much lower without one. Most matched specialists will recommend at minimum a basic 5-page website (home, about, services, location, contact) with proper local schema before doing serious citation and link work, otherwise the SEO investment has no asset to compound on.',
  },
  {
    question: 'What\'s the difference between local SEO and regular SEO?',
    answer:
      'Regular ("organic") SEO targets blue-link rankings nationally or globally. Local SEO targets Map Pack and local-intent queries, "dentist near me", "Miami DUI lawyer", "Coral Gables plumber". Different ranking signals (proximity, GBP completeness, citation consistency, reviews) and a different set of practical tactics. The specialists in our network focus on local; we don\'t match for national SEO.',
  },
  {
    question: 'Will the same specialist handle all the work or just one piece?',
    answer:
      'Most matched specialists offer a full local SEO retainer, GBP optimization, on-page, citations, reviews, and content all under one engagement. Some smaller specialists are best for specific tactical work (a one-off audit, citation cleanup, or review acquisition campaign). Tell us what you actually need on the matching form and we will match accordingly.',
  },
];

export const FAQS_LOCATION = [
  {
    question: 'Which Miami areas does the matching network cover?',
    answer:
      'All major Miami metro neighborhoods including Brickell, Downtown, Wynwood, South Beach, Coconut Grove, Coral Gables, Little Havana, Doral, Aventura, and Pinecrest. Coverage extends to the wider Miami-Dade catchment for businesses serving multiple neighborhoods.',
  },
  {
    question: 'Do specialists understand neighborhood-specific Miami markets?',
    answer:
      'Yes, neighborhood-level expertise is one of the core vetting criteria. A Wynwood gallery has different local SEO needs from a Brickell law firm or a Coral Gables real estate brokerage. We match by neighborhood-and-sector, not just generic Miami coverage.',
  },
  {
    question: 'I have multiple Miami locations, do I need a separate strategy per location?',
    answer:
      'Yes. Multi-location local SEO is materially more complex than single-location, separate Google Business Profiles per location, location-specific landing pages, citation cleanup to avoid duplicate listings, and review strategy by location. Several specialists in our network specialize in multi-location work.',
  },
];

export const testimonials = TESTIMONIALS;
export const trustBadges = TRUST_BADGES;
