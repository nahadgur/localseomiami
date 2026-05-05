// data/locationProfiles.ts
// Compact rich profile per neighborhood, used in sidebars and header bands
// alongside the longer-form areaContent.

export interface LocationProfile {
  name: string;
  slug: string;
  zip: string;
  character: string;
  dominantBusinessType: string;
  keyChallenge: string;
  businessMix: string[];
}

export const locationProfiles: Record<string, LocationProfile> = {

  'brickell': {
    name: 'Brickell',
    slug: 'brickell',
    zip: '33131',
    character: 'Miami\'s financial center, banks, law firms, family offices, and the highest professional-services concentration in South Florida',
    dominantBusinessType: 'Professional services with high client lifetime values and intense competitive ranking dynamics',
    keyChallenge: '9–12 month timelines against well-funded established competitors investing $5–10k/month in sustained ranking',
    businessMix: [
      'corporate and immigration law firms',
      'wealth management and family offices',
      'accounting and business advisory firms',
      'commercial real estate brokerages',
      'high-end restaurants serving the financial district',
    ],
  },

  'downtown': {
    name: 'Downtown Miami',
    slug: 'downtown',
    zip: '33132',
    character: 'Mixed civic, historic, tourist, and rapidly-expanding residential core, varied business landscape across sub-segments',
    dominantBusinessType: 'Sector-segmented mix from tourism (Bayside) to legal (Government Center) to residential commerce (Park West)',
    keyChallenge: 'Sector-specific matching needed, tourism, legal, and real estate have different ranking dynamics within the same geography',
    businessMix: [
      'court-adjacent legal services',
      'hotels and tourism-facing businesses',
      'historic Flagler Street retail',
      'Park West residential and mixed-use',
      'riverfront commercial real estate',
    ],
  },

  'wynwood': {
    name: 'Wynwood',
    slug: 'wynwood',
    zip: '33127',
    character: 'Miami\'s arts and creative district, galleries, breweries, design studios, and a tourism-and-residential mix anchored by the Wynwood Walls',
    dominantBusinessType: 'Creative-economy businesses (galleries, design, food and beverage) with strong visual identity',
    keyChallenge: 'Creative-vertical SEO playbook is materially different from generic local SEO, visual content, sector-specific platforms, design press relationships',
    businessMix: [
      'art galleries and design showrooms',
      'craft breweries and contemporary restaurants',
      'photography and creative agencies',
      'branding and marketing firms',
      'design-identity boutique retail',
    ],
  },

  'south-beach': {
    name: 'South Beach',
    slug: 'south-beach',
    zip: '33139',
    character: 'Tourism-and-luxury beachfront core with global visitor flow, Art Deco hotels, and one of America\'s densest tourism markets',
    dominantBusinessType: 'Tourism-vertical hospitality with multi-platform optimization needs (TripAdvisor, OpenTable, Booking)',
    keyChallenge: 'Multilingual SEO necessary (40%+ international visitors), and platform mix extends well beyond Google',
    businessMix: [
      'luxury, boutique, and mid-tier hotels',
      'tourist-facing restaurants on Ocean Drive, Collins, Lincoln Road',
      'beach clubs and nightlife venues',
      'Lincoln Road retail and boutiques',
      'tour operators and visitor experiences',
    ],
  },

  'coconut-grove': {
    name: 'Coconut Grove',
    slug: 'coconut-grove',
    zip: '33133',
    character: 'Historic bayfront village with established residential and stable village commerce dating back to before the City of Miami itself',
    dominantBusinessType: 'Long-tenured establishments with stable customer bases and often outdated digital presences',
    keyChallenge: 'Systematic improvement of legacy GBPs and citation profiles rather than zero-to-one ranking work',
    businessMix: [
      'long-tenured restaurants and bars',
      'bayshore-corridor professional services',
      'marina and yacht services',
      'village retail and personal care',
      'Grove residential real estate brokerages',
    ],
  },

  'coral-gables': {
    name: 'Coral Gables',
    slug: 'coral-gables',
    zip: '33134',
    character: '1920s planned Mediterranean-style city with mandatory architectural standards and one of Miami\'s densest professional-services markets',
    dominantBusinessType: 'Premium professional services and high-end retail/dining serving an affluent residential and university-area demographic',
    keyChallenge: 'Architectural-and-cultural identity is a genuine SEO content angle that most generalist specialists miss',
    businessMix: [
      'law firms (corporate, family, real estate)',
      'medical and dental practices (one of Miami\'s densest concentrations)',
      'wealth management and accounting',
      'high-end restaurants on Giralda Plaza and Miracle Mile',
      'University of Miami area businesses',
    ],
  },

  'little-havana': {
    name: 'Little Havana',
    slug: 'little-havana',
    zip: '33135',
    character: 'Cuban-American cultural and culinary heart of Miami, Calle Ocho, Domino Park, Versailles café, and the densest Cuban heritage business concentration outside Cuba',
    dominantBusinessType: 'Bilingual/Spanish-primary businesses serving the predominantly Hispanic resident community',
    keyChallenge: 'Genuine bilingual specialist capability is non-negotiable, Spanish keyword research, content, and review engagement',
    businessMix: [
      'Cuban restaurants, cafés, and bakeries',
      'cigar shops and lounges',
      'music venues and cultural businesses',
      'family-run retail with multi-generational presence',
      'Spanish-speaking legal and medical services',
    ],
  },

  'doral': {
    name: 'Doral',
    slug: 'doral',
    zip: '33178',
    character: 'Rapidly-growing planned city with heavy Latin American (especially Venezuelan) population and mixed industrial-residential-resort character',
    dominantBusinessType: 'Bilingual-default businesses across logistics, retail, professional services, and the Trump National-adjacent hospitality cluster',
    keyChallenge: 'Latin American market experience (especially Venezuelan and Colombian) materially outperforms generalist Miami specialists',
    businessMix: [
      'airport-adjacent logistics and freight',
      'Latin American restaurants and grocery',
      'Hispanic-community professional services',
      'Trump National-adjacent luxury hospitality',
      'Downtown Doral retail and dining',
    ],
  },

  'aventura': {
    name: 'Aventura',
    slug: 'aventura',
    zip: '33180',
    character: 'North Miami-Dade premier shopping and lifestyle center anchored by the Aventura Mall and the country club residential ring',
    dominantBusinessType: 'Mall-anchored retail and dining alongside premium professional services for the affluent residential demographic',
    keyChallenge: 'Different specialist matches needed for high-volume retail SEO vs. high-value professional-services SEO, ask up front',
    businessMix: [
      'Aventura Mall retail and dining',
      'premium professional services',
      'Aventura/Sunny Isles real estate brokerages',
      'health, wellness, and beauty services',
      'Williams Island concierge and private services',
    ],
  },

  'pinecrest': {
    name: 'Pinecrest',
    slug: 'pinecrest',
    zip: '33156',
    character: 'Premier village residential with large lots, top-rated schools, and a quietly affluent demographic',
    dominantBusinessType: 'Small but high-value professional and personal services businesses serving a wealthy resident demographic',
    keyChallenge: 'Pinecrest-specific targeting outperforms generic South Miami coverage, but most agencies treat Pinecrest as generic territory',
    businessMix: [
      'medical and dental practices serving families',
      'Pinecrest residential real estate brokerages',
      'private schools and educational support',
      'wealth management and family services',
      'premium home services (architecture, design, landscape)',
    ],
  },
};

export const getLocationProfile = (slug: string): LocationProfile | undefined =>
  locationProfiles[slug];
